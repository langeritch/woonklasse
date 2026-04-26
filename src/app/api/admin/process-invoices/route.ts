import { NextResponse } from 'next/server';
import { ImapFlow } from 'imapflow';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { simpleParser } = require('mailparser');
import nodemailer from 'nodemailer';
import { customEmail } from '@/lib/email-templates';
import net from 'net';
import path from 'path';
import fs from 'fs';

export const maxDuration = 60;

const KNOWN_HOSTS: Record<string, string> = {
  'mail.woonklasse.nl': '185.104.29.174',
};

async function resolveHost(hostname: string): Promise<string> {
  if (net.isIP(hostname)) return hostname;
  try {
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(hostname)}&type=A`,
      { signal: AbortSignal.timeout(3000) },
    );
    const json = (await res.json()) as { Answer?: { type: number; data: string }[] };
    const aRecord = json.Answer?.find((r) => r.type === 1);
    if (aRecord) return aRecord.data;
  } catch {
    // fall through
  }
  if (KNOWN_HOSTS[hostname]) return KNOWN_HOSTS[hostname];
  throw new Error(`DNS resolution failed for ${hostname}`);
}

const SMTP_HOST = (process.env.SMTP_HOST || 'mail.woonklasse.nl').trim();
const SMTP_PORT = Number((process.env.SMTP_PORT || '465').trim());
const SMTP_USER = (process.env.SMTP_USER || '').trim();
const SMTP_PASS = (process.env.SMTP_PASS || '').trim();
const SMTP_CONFIGURED = SMTP_HOST && SMTP_USER && SMTP_PASS;

const LOGO_PATH = 'public/logos/stacked/png/woonklasse-stacked-white-512.png';

export async function GET() {
  try {
    if (!SMTP_CONFIGURED) {
      return NextResponse.json({ success: false, message: 'SMTP niet geconfigureerd' }, { status: 500 });
    }

    // Use Vimexx mail server for both IMAP and SMTP (info@woonklasse.nl)
    const imapIp = await resolveHost(SMTP_HOST);

    const client = new ImapFlow({
      host: imapIp,
      port: 993,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { servername: SMTP_HOST, rejectUnauthorized: false },
      logger: false,
    } as ConstructorParameters<typeof ImapFlow>[0]);

    const processed: string[] = [];
    const errors: string[] = [];

    const connectPromise = client.connect();
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('IMAP verbinding timeout (15s)')), 15000)
    );
    await Promise.race([connectPromise, timeout]);

    const lock = await client.getMailboxLock('INBOX');

    try {
      // Find UNSEEN emails from Rompslomp postbode
      const searchResult = await client.search({
        seen: false,
        or: [
          { from: 'postbode@rompslomp.com' },
          { from: 'postbode@rompslomp.nl' }
        ]
      });

      const count = searchResult && Array.isArray(searchResult) ? searchResult.length : 0;

      if (count > 0) {
        const resolvedSmtp = await resolveHost(SMTP_HOST);
        const transporter = nodemailer.createTransport({
          host: resolvedSmtp,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
          tls: { rejectUnauthorized: false, servername: SMTP_HOST },
        } as Parameters<typeof nodemailer.createTransport>[0]);

        for await (const msg of client.fetch(searchResult as number[], { envelope: true, source: true, uid: true })) {
          try {
            const parsed = await simpleParser(msg.source);
            const subject = msg.envelope?.subject || '';

            // First word = target email, rest = actual subject
            const subjectParts = subject.trim().split(/\s+/);
            const firstWord = subjectParts[0] || '';

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(firstWord)) {
              console.log(`[process-invoices] Skipping UID ${msg.uid} - geen email in subject: ${subject}`);
              await client.messageFlagsAdd(msg.uid, ['\\Seen'], { uid: true });
              continue;
            }

            const targetEmail = firstWord;
            const actualSubject = subjectParts.slice(1).join(' ') || 'Factuur';

            const html = customEmail({
              bericht: parsed.text || '',
              brand: 'woonklasse',
              showLogo: true,
            });

            const attachments: Array<{ filename: string; content?: Buffer; path?: string; cid?: string }> = [];
            if (parsed.attachments?.length) {
              for (const att of parsed.attachments) {
                attachments.push({ filename: att.filename || 'factuur.pdf', content: att.content });
              }
            }

            const logoPath = path.join(process.cwd(), LOGO_PATH);
            if (fs.existsSync(logoPath)) {
              attachments.push({ filename: 'logo.png', path: logoPath, cid: 'logo@woonklasse.nl' });
            }

            await transporter.sendMail({
              from: '"Woonklasse" <info@woonklasse.nl>',
              to: targetEmail,
              subject: actualSubject,
              html,
              text: parsed.text || '',
              attachments,
            });

            await client.messageFlagsAdd(msg.uid, ['\\Seen'], { uid: true });
            processed.push(`"${actualSubject}" naar ${targetEmail}`);
          } catch (err) {
            const errMsg = err instanceof Error ? err.message : String(err);
            errors.push(`UID ${msg.uid}: ${errMsg}`);
          }
        }
      }
    } finally {
      lock.release();
    }
    await client.logout();

    return NextResponse.json({
      success: true,
      processedCount: processed.length,
      processed,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('[process-invoices] Error:', errMsg);
    return NextResponse.json({ success: false, message: errMsg }, { status: 500 });
  }
}
