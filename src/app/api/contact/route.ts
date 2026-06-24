import { NextResponse } from 'next/server';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';
import net from 'net';
import nodemailer from 'nodemailer';
import { bevestigingEmail, notificatieEmail, HERO_IMAGE_PATHS, LOGO_PATH } from '@/lib/email-templates';
import { saveSubmission } from '@/lib/submissions';
import { sendPushToAll } from '@/lib/send-push';

/** Simple in-memory rate limiter per IP */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max submissions per window

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

/** Resolve SMTP host to IP, bypassing Vercel's broken DNS.
 *  Uses DNS-over-HTTPS (Google), with hardcoded fallback for known hosts. */
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
    const json = await res.json() as { Answer?: { type: number; data: string }[] };
    const aRecord = json.Answer?.find((r) => r.type === 1);
    if (aRecord) return aRecord.data;
  } catch (e) {
    console.warn('[DNS] DoH failed, using fallback:', e);
  }
  if (KNOWN_HOSTS[hostname]) return KNOWN_HOSTS[hostname];
  throw new Error(`DNS resolution failed for ${hostname}`);
}

const contactSchema = z.object({
  naam: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  telefoon: z.string().min(6, 'Telefoonnummer is verplicht'),
  type: z.string().optional(),
  bericht: z.string().max(5000, 'Bericht mag maximaal 5000 tekens bevatten').optional(),
  bedrijf: z.string().optional(),
  formulier: z.enum(['offerte', 'adviesgesprek', 'contact']),
  brand: z.enum(['woonklasse', 'badkamerstijl']).default('woonklasse'),
});

const REQUIRED_SMTP_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'] as const;

/** Returns the names of any required SMTP env vars that are missing/empty. */
function missingSmtpVars(): string[] {
  return REQUIRED_SMTP_VARS.filter((k) => !process.env[k]);
}

const SMTP_CONFIGURED = missingSmtpVars().length === 0;

/** Per-brand recipient routing. Falls back to CONTACT_EMAIL when a brand-specific
 *  variable is not set, so legacy/preview deployments keep working. */
function recipientFor(brand: 'woonklasse' | 'badkamerstijl'): string | undefined {
  if (brand === 'badkamerstijl') {
    return (
      process.env.CONTACT_EMAIL_BADKAMERSTIJL ||
      'info@badkamerstijl.nl'
    );
  }
  return process.env.CONTACT_EMAIL_WOONKLASSE || process.env.CONTACT_EMAIL;
}

async function createTransporter() {
  if (!SMTP_CONFIGURED) return null;
  const host = process.env.SMTP_HOST!.trim();
  const port = Number(process.env.SMTP_PORT);
  // Resolve hostname to IP before connecting (bypasses Vercel's broken getaddrinfo)
  const resolvedHost = await resolveHost(host);
  return nodemailer.createTransport({
    host: resolvedHost,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
      servername: host,
    },
  } as Parameters<typeof nodemailer.createTransport>[0]);
}

const FORMULIER_LABELS: Record<string, string> = {
  offerte: 'Offerte aanvraag',
  adviesgesprek: 'Adviesgesprek aanvraag',
  contact: 'Contactformulier',
};

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

    // Honeypot: if the hidden "website" field is filled, it's a bot — return fake success
    if (body.website) {
      return NextResponse.json({ success: true, message: 'Bedankt voor je bericht!' });
    }

    const data = contactSchema.parse(body);

    const logData = {
      formulier: data.formulier,
      naam: data.naam,
      email: data.email,
      telefoon: data.telefoon,
      type: data.type,
      bericht: data.bericht?.slice(0, 100),
    };

    console.log(`[${new Date().toISOString()}] Formulier ontvangen:`, logData);

    // Save to inbox
    try {
      await saveSubmission({
        formulier: data.formulier,
        brand: data.brand,
        naam: data.naam,
        email: data.email,
        telefoon: data.telefoon,
        bedrijf: data.bedrijf,
        type: data.type,
        bericht: data.bericht,
      });
      // Send push notification (non-blocking)
      sendPushToAll({
        title: `Nieuwe ${FORMULIER_LABELS[data.formulier] || 'aanvraag'}`,
        body: `${data.naam} via ${data.brand === 'badkamerstijl' ? 'Badkamerstijl' : 'Woonklasse'}`,
      }).catch((e) => console.warn('[push] Notificatie mislukt:', e));
    } catch (e) {
      console.warn('[contact] Submission opslaan mislukt:', e);
    }

    const brand = data.brand;
    const brandNaam = brand === 'badkamerstijl' ? 'Badkamerstijl' : 'Woonklasse';
    const fromEmail = process.env.SMTP_USER;

    let notificationSent = false;
    const transporter = await createTransporter();
    if (transporter) {
      const notificationTo = recipientFor(brand);
      // 1. Notificatie naar het bedrijf (HTML) — dit is de kritische mail.
      await transporter.sendMail({
        from: `"${brandNaam} Website" <${fromEmail}>`,
        to: notificationTo,
        replyTo: data.email,
        subject: `${FORMULIER_LABELS[data.formulier] || data.formulier} - ${data.naam}`,
        html: notificatieEmail({
          naam: data.naam,
          email: data.email,
          telefoon: data.telefoon,
          formulier: data.formulier,
          brand,
          type: data.type,
          bericht: data.bericht,
          bedrijf: data.bedrijf,
        }),
        text: [
          `Formulier: ${FORMULIER_LABELS[data.formulier] || data.formulier}`,
          `Naam: ${data.naam}`,
          `E-mail: ${data.email}`,
          `Telefoon: ${data.telefoon}`,
          data.bedrijf ? `Bedrijf: ${data.bedrijf}` : null,
          data.type ? `Type: ${data.type}` : null,
          data.bericht ? `\nBericht:\n${data.bericht}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
      });
      notificationSent = true;

      // 2. Bevestiging naar de klant (niet-blokkerend)
      try {
        const heroPath = path.join(process.cwd(), HERO_IMAGE_PATHS[brand]);
        const heroCid = `hero-${brand}@${brand === 'badkamerstijl' ? 'badkamerstijl.nl' : 'woonklasse.nl'}`;
        const attachments: Array<{ filename: string; path: string; cid: string }> = [];

        if (fs.existsSync(heroPath)) {
          attachments.push({ filename: `${brand}-hero.jpg`, path: heroPath, cid: heroCid });
        }
        const logoPath = path.join(process.cwd(), LOGO_PATH);
        if (brand === 'woonklasse' && fs.existsSync(logoPath)) {
          attachments.push({ filename: 'woonklasse-logo.png', path: logoPath, cid: 'logo@woonklasse.nl' });
        }

        await transporter.sendMail({
          from: `"${brandNaam}" <${fromEmail}>`,
          to: data.email,
          subject: `Bedankt voor je aanvraag - ${brandNaam}`,
          html: bevestigingEmail({
            naam: data.naam,
            formulier: data.formulier,
            brand,
          }),
          text: `Beste ${data.naam},\n\nBedankt voor je aanvraag bij ${brandNaam}. We nemen binnen 2 werkdagen contact met je op.\n\nMet vriendelijke groet,\n${brandNaam}\nTel: +31 30 207 23 88`,
          attachments,
        });
      } catch (e) {
        console.warn('[contact] Bevestigingsmail naar klant mislukt:', e);
      }
    } else {
      console.error(
        `[contact] SMTP niet geconfigureerd, e-mail NIET verzonden. Ontbrekende env vars: ${missingSmtpVars().join(', ')}. Stel deze in op de Vercel-deploy.`,
      );
    }

    // Als de bedrijfsnotificatie niet verzonden is, mag het formulier geen
    // "succes" tonen, anders gaan leads stil verloren.
    if (!notificationSent) {
      return NextResponse.json(
        {
          success: false,
          message:
            'We konden je aanvraag nu niet verwerken. Bel ons of mail naar info@woonklasse.nl, dan pakken we het direct op.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: true, message: 'Aanvraag succesvol ontvangen' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues.map((e) => e.message) },
        { status: 400 }
      );
    }

    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('Contact form error:', errMsg, error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
