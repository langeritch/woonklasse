/**
 * One-off: send a single email via woonklasse@gmail.com using the existing
 * IMAP_PASS (Gmail App Password) as SMTP credential. Uses the shared
 * customEmail template so branding/logo/hero match the admin portal output.
 *
 * Run:
 *   npx tsx scripts/send-via-gmail-once.ts
 */
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { customEmail, HERO_IMAGE_PATHS } from '../src/lib/email-templates';

function cleanEnv(v: string | undefined): string {
  return (v ?? '').replace(/\\n$/, '').trim();
}

async function main() {
  // Load .env.local
  const envPath = path.join(process.cwd(), '.env.local');
  const envText = fs.readFileSync(envPath, 'utf8');
  for (const line of envText.split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=("?)(.*?)\2\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[3];
  }

  const user = cleanEnv(process.env.IMAP_USER);
  const pass = cleanEnv(process.env.IMAP_PASS);
  if (!user || !pass) throw new Error('IMAP_USER / IMAP_PASS not set');

  const to = 'ilias421@gmail.com';
  const brand = 'woonklasse' as const;
  const onderwerp = 'Uitnodiging webshop Woonklasse / Badkamerstijl';
  const bericht = `Beste Fleur,

Zoals besproken nodigen wij u uit om onze website met artikelen voor de badkamer te bezoeken.

U kunt de volgende link gebruiken voor toegang tot de webshop:
<a href="https://kies-sanitair.nl/S2/PAGE_Home/HBMAAAAAAAATAH3BLosVgohqWfk?WD_ACTION_=REFRESH">Link naar de webshop</a>

U kunt hiermee:
alle artikelen in ons assortiment bekijken
voor u interessante producten in een winkelmand plaatsen
een offerte in PDF-formaat maken van de artikelen uit de winkelmand

U kunt niet direct een order plaatsen. Nadat u artikelen voor een offerte geselecteerd heeft neemt u contact met ons op via de onderstaande gegevens of door een reply te sturen op deze email. Wij zullen u vervolgens benaderen om de keuzes te bespreken. Ook bij vragen kunt u op deze wijze ons bereiken.

Met vriendelijke groet,
Woonklasse
Amar Aamiri

0650424683
www.woonklasse.nl / www.badkamerstijl.nl`;

  const html = customEmail({
    bericht,
    brand,
    heroImageUrl: `/email-hero-${brand}.jpg`,
    showLogo: true,
  });

  // CID attachments — logo + hero
  const attachments: { filename: string; path: string; cid: string }[] = [];
  const logoPath = path.join(
    process.cwd(),
    'public/logos/stacked/png/woonklasse-stacked-white-512.png',
  );
  if (fs.existsSync(logoPath)) {
    attachments.push({
      filename: 'logo.png',
      path: logoPath,
      cid: `logo@woonklasse.nl`,
    });
  }
  const heroPath = path.join(process.cwd(), HERO_IMAGE_PATHS[brand]);
  if (fs.existsSync(heroPath)) {
    attachments.push({
      filename: `hero-${brand}.jpg`,
      path: heroPath,
      cid: `hero@woonklasse.nl`,
    });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  await transporter.verify();
  console.log('[gmail] SMTP connection verified');

  const info = await transporter.sendMail({
    from: `"Woonklasse" <${user}>`,
    to,
    subject: onderwerp,
    html,
    text: bericht.replace(/<[^>]+>/g, ''),
    attachments,
  });
  console.log('[gmail] sent', info.messageId, '→', to);
}

main().catch((e) => {
  console.error('[gmail] FAILED:', e);
  process.exit(1);
});
