import { NextResponse } from 'next/server';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';
import net from 'net';
import dns from 'dns';
import nodemailer from 'nodemailer';
import { customEmail, HERO_IMAGE_PATHS } from '@/lib/email-templates';

// Use Google/Cloudflare DNS to bypass Vercel's broken getaddrinfo
dns.setServers(['8.8.8.8', '1.1.1.1']);

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
    // fall through to known hosts
  }
  if (KNOWN_HOSTS[hostname]) return KNOWN_HOSTS[hostname];
  throw new Error(`DNS resolution failed for ${hostname}`);
}

const LOGO_PATHS: Record<string, string> = {
  woonklasse: 'public/logos/stacked/png/woonklasse-stacked-white-512.png',
};

// Supported sender addresses and their SMTP config.
// `enabled: false` means the option shows in the UI but rejects on send.
type FromConfig = {
  enabled: boolean;
  label: string;
  brandLabel: string;
  buildTransport: () => Parameters<typeof nodemailer.createTransport>[0];
  resolveHost?: string; // hostname to resolve via custom DNS
};

const cleanEnv = (v: string | undefined) =>
  (v ?? '').replace(/\\n$/, '').trim();

const FROM_CONFIGS: Record<string, FromConfig> = {
  'info@woonklasse.nl': {
    enabled: Boolean(
      process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS,
    ),
    label: 'info@woonklasse.nl',
    brandLabel: 'Woonklasse',
    resolveHost: cleanEnv(process.env.SMTP_HOST),
    buildTransport: () => {
      const host = cleanEnv(process.env.SMTP_HOST);
      const port = Number(cleanEnv(process.env.SMTP_PORT));
      return {
        host, // replaced later with resolved IP
        port,
        secure: port === 465,
        auth: {
          user: cleanEnv(process.env.SMTP_USER),
          pass: cleanEnv(process.env.SMTP_PASS),
        },
        tls: { rejectUnauthorized: false, servername: host },
      };
    },
  },
  'woonklasse@gmail.com': {
    enabled: Boolean(cleanEnv(process.env.IMAP_PASS)),
    label: 'woonklasse@gmail.com',
    brandLabel: 'Woonklasse',
    buildTransport: () => ({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'woonklasse@gmail.com',
        pass: cleanEnv(process.env.IMAP_PASS),
      },
    }),
  },
  'info@badkamerstijl.nl': {
    // Placeholder — domain SMTP not configured yet
    enabled: false,
    label: 'info@badkamerstijl.nl (nog niet geconfigureerd)',
    brandLabel: 'Badkamerstijl',
    buildTransport: () => ({}),
  },
};

const FROM_ADDRESS_KEYS = Object.keys(FROM_CONFIGS) as [string, ...string[]];

const emailSchema = z.object({
  brand: z.enum(['woonklasse', 'badkamerstijl']),
  aan: z.string().email('Ongeldig e-mailadres'),
  onderwerp: z.string().min(1, 'Onderwerp is verplicht'),
  bericht: z.string().min(1, 'Bericht is verplicht'),
  heroImage: z.string().optional(), // e.g. 'woonklasse' or 'badkamerstijl' or empty
  showLogo: z.boolean().default(true),
  preview: z.boolean().optional(),
  fromAddress: z.enum(FROM_ADDRESS_KEYS).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = emailSchema.parse(body);

    const website = data.brand === 'badkamerstijl' ? 'badkamerstijl.nl' : 'woonklasse.nl';
    const heroImageUrl = data.heroImage ? `/email-hero-${data.heroImage}.jpg` : undefined;

    const html = customEmail({
      bericht: data.bericht,
      brand: data.brand,
      heroImageUrl,
      showLogo: data.showLogo,
    });

    // Preview mode — return HTML with inline image URLs for preview
    if (data.preview) {
      // Replace CID references with actual URLs for preview rendering
      let previewHtml = html;
      if (heroImageUrl) {
        previewHtml = previewHtml.replace(
          `cid:hero@${website}`,
          heroImageUrl,
        );
      }
      if (data.showLogo && data.brand === 'woonklasse') {
        previewHtml = previewHtml.replace(
          'cid:logo@woonklasse.nl',
          '/logos/stacked/png/woonklasse-stacked-white-512.png',
        );
      }
      return NextResponse.json({ success: true, html: previewHtml });
    }

    const fromAddress = data.fromAddress ?? 'info@woonklasse.nl';
    const fromConfig = FROM_CONFIGS[fromAddress];

    if (!fromConfig || !fromConfig.enabled) {
      return NextResponse.json(
        {
          success: false,
          message: `Afzender ${fromAddress} is nog niet geconfigureerd.`,
        },
        { status: 400 },
      );
    }

    const transportOpts = fromConfig.buildTransport();
    // Custom DNS resolution for providers behind Vercel's broken getaddrinfo
    if (fromConfig.resolveHost) {
      const resolvedHost = await resolveHost(fromConfig.resolveHost);
      (transportOpts as { host?: string }).host = resolvedHost;
    }

    const transporter = nodemailer.createTransport(transportOpts);

    const brandNaam = data.brand === 'badkamerstijl' ? 'Badkamerstijl' : 'Woonklasse';

    // Build attachments for CID-embedded images
    const attachments: Array<{ filename: string; path: string; cid: string }> = [];

    // Logo attachment
    if (data.showLogo && LOGO_PATHS[data.brand]) {
      const logoPath = path.join(process.cwd(), LOGO_PATHS[data.brand]);
      if (fs.existsSync(logoPath)) {
        attachments.push({
          filename: 'logo.png',
          path: logoPath,
          cid: `logo@${website}`,
        });
      }
    }

    // Hero image attachment
    if (data.heroImage && HERO_IMAGE_PATHS[data.heroImage as 'woonklasse' | 'badkamerstijl']) {
      const heroPath = path.join(process.cwd(), HERO_IMAGE_PATHS[data.heroImage as 'woonklasse' | 'badkamerstijl']);
      if (fs.existsSync(heroPath)) {
        attachments.push({
          filename: `hero-${data.heroImage}.jpg`,
          path: heroPath,
          cid: `hero@${website}`,
        });
      }
    }

    await transporter.sendMail({
      from: `"${brandNaam}" <${fromAddress}>`,
      to: data.aan,
      subject: data.onderwerp,
      html,
      text: data.bericht,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: `E-mail verzonden naar ${data.aan}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues.map((e) => e.message) },
        { status: 400 },
      );
    }
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('[admin/email] Error:', errMsg);
    return NextResponse.json(
      { success: false, message: errMsg },
      { status: 500 },
    );
  }
}
