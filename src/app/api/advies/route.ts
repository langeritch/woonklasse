import { NextResponse } from 'next/server';
import { z } from 'zod';
import net from 'net';
import nodemailer from 'nodemailer';
import { adviesNotificatieEmail } from '@/lib/email-templates';
import { saveSubmission } from '@/lib/submissions';
import { sendPushToAll } from '@/lib/send-push';

/**
 * Hero "Persoonlijk advies" tool submit endpoint.
 *
 * Receives JSON only — photos are uploaded directly from the browser to
 * Vercel Blob via /api/advies/upload-url, and we get back their URLs here.
 * Sends a single notification email to the brand's admin inbox.
 * No customer confirmation email is sent.
 */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 8;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

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
  } catch (e) {
    console.warn('[advies][DNS] DoH failed, using fallback:', e);
  }
  if (KNOWN_HOSTS[hostname]) return KNOWN_HOSTS[hostname];
  throw new Error(`DNS resolution failed for ${hostname}`);
}

const SMTP_CONFIGURED =
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS;

function recipientFor(brand: 'woonklasse' | 'badkamerstijl'): string | undefined {
  if (brand === 'badkamerstijl') {
    return process.env.CONTACT_EMAIL_BADKAMERSTIJL || 'info@badkamerstijl.nl';
  }
  return process.env.CONTACT_EMAIL_WOONKLASSE || process.env.CONTACT_EMAIL || 'info@woonklasse.nl';
}

async function createTransporter() {
  if (!SMTP_CONFIGURED) return null;
  const host = process.env.SMTP_HOST!.trim();
  const port = Number(process.env.SMTP_PORT);
  const resolvedHost = await resolveHost(host);
  return nodemailer.createTransport({
    host: resolvedHost,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: {
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
      servername: host,
    },
  } as Parameters<typeof nodemailer.createTransport>[0]);
}

const photoSchema = z.object({
  url: z.string().url().max(2048),
  filename: z.string().max(255),
});

const roomSchema = z.object({
  type: z.string().min(1).max(80),
  meters: z.string().max(40).optional(),
  notes: z.string().max(1000).optional(),
  // No per-room photo cap — users can upload as many as they want per room.
  // Loose upper bound just to keep payloads sane against a runaway client.
  photos: z.array(photoSchema).max(200),
});

const adviesSchema = z.object({
  brand: z.enum(['woonklasse', 'badkamerstijl']),
  naam: z.string().min(2, 'Naam is verplicht').max(120),
  email: z.string().email('Ongeldig e-mailadres').max(200),
  telefoon: z.string().min(6, 'Telefoonnummer is verplicht').max(40),
  bericht: z.string().max(5000).optional(),
  projectType: z.string().max(80).optional(),
  tijdpad: z.string().max(80).optional(),
  budget: z.string().max(80).optional(),
  stijl: z.string().max(80).optional(),
  // No hard ceiling on rooms either — users can describe whole houses.
  // Loose upper bound for sanity.
  rooms: z.array(roomSchema).min(1, 'Selecteer minimaal 1 kamer').max(50),
  website: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Te veel aanvragen. Probeer het later opnieuw.' },
        { status: 429 },
      );
    }

    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true, message: 'Bedankt voor je bericht!' });
    }

    const data = adviesSchema.parse(body);

    const totalPhotos = data.rooms.reduce((n, r) => n + r.photos.length, 0);
    const brandNaam = data.brand === 'badkamerstijl' ? 'Badkamerstijl' : 'Woonklasse';

    // Persist
    try {
      await saveSubmission({
        formulier: 'advies',
        brand: data.brand,
        naam: data.naam,
        email: data.email,
        telefoon: data.telefoon,
        bericht: data.bericht,
        type: data.projectType,
        advies: {
          projectType: data.projectType,
          tijdpad: data.tijdpad,
          budget: data.budget,
          stijl: data.stijl,
          rooms: data.rooms,
        },
      });
      sendPushToAll({
        title: `Nieuwe aanvraag persoonlijk advies`,
        body: `${data.naam} via ${brandNaam} — ${data.rooms.length} kamer${data.rooms.length === 1 ? '' : 's'}, ${totalPhotos} foto${totalPhotos === 1 ? '' : "'s"}`,
      }).catch((e) => console.warn('[advies][push] mislukt:', e));
    } catch (e) {
      console.warn('[advies] Submission opslaan mislukt:', e);
    }

    // Email admin only — no customer confirmation per spec
    const transporter = await createTransporter();
    if (transporter) {
      const to = recipientFor(data.brand);
      const fromEmail = process.env.SMTP_USER;

      const html = adviesNotificatieEmail({
        brand: data.brand,
        naam: data.naam,
        email: data.email,
        telefoon: data.telefoon,
        projectType: data.projectType,
        tijdpad: data.tijdpad,
        budget: data.budget,
        stijl: data.stijl,
        bericht: data.bericht,
        rooms: data.rooms,
      });

      const textLines = [
        `Nieuwe aanvraag — Persoonlijk advies (${brandNaam})`,
        '',
        `Naam: ${data.naam}`,
        `E-mail: ${data.email}`,
        `Telefoon: ${data.telefoon}`,
        data.projectType ? `Project: ${data.projectType}` : null,
        data.tijdpad ? `Tijdpad: ${data.tijdpad}` : null,
        data.budget ? `Budget: ${data.budget}` : null,
        data.stijl ? `Stijl: ${data.stijl}` : null,
        '',
        `Kamers (${data.rooms.length}):`,
        ...data.rooms.flatMap((room, idx) => [
          `  ${idx + 1}. ${room.type}${room.meters ? ` (${room.meters} m²)` : ''}`,
          room.notes ? `     ${room.notes}` : null,
          ...room.photos.map((p, i) => `     foto ${i + 1}: ${p.url}`),
        ]),
        '',
        data.bericht ? `Bericht:\n${data.bericht}` : null,
      ]
        .filter((l): l is string => Boolean(l))
        .join('\n');

      await transporter.sendMail({
        from: `"${brandNaam} Website" <${fromEmail}>`,
        to,
        replyTo: data.email,
        subject: `Persoonlijk advies — ${data.naam} (${data.rooms.length} kamer${data.rooms.length === 1 ? '' : 's'})`,
        html,
        text: textLines,
      });
    } else {
      console.warn('[advies] SMTP niet geconfigureerd, e-mail niet verzonden.');
    }

    return NextResponse.json(
      { success: true, message: 'Aanvraag succesvol ontvangen' },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues.map((e) => e.message) },
        { status: 400 },
      );
    }
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('[advies] route error:', errMsg, error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 },
    );
  }
}
