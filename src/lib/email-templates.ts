const BRAND_COLORS = {
  woonklasse: {
    primary: '#1a1a1a',
    accent: '#c9a96e',
    accentLight: '#e8d5b0',
    text: '#333333',
    lightBg: '#f9f7f4',
    heroBg: '#2a2520',
  },
  badkamerstijl: {
    primary: '#1a1a1a',
    accent: '#d4a0a0',
    accentLight: '#e8c5c5',
    text: '#333333',
    lightBg: '#f9f7f7',
    heroBg: '#2a2025',
  },
};

type Brand = 'woonklasse' | 'badkamerstijl';

interface ConfirmationData {
  naam: string;
  formulier: 'offerte' | 'adviesgesprek' | 'contact';
  brand: Brand;
}

const FORMULIER_TITELS: Record<string, string> = {
  offerte: 'Offerte aanvraag',
  adviesgesprek: 'Adviesgesprek aanvraag',
  contact: 'Contactbericht',
};

const BRAND_NAMEN: Record<Brand, string> = {
  woonklasse: 'Woonklasse',
  badkamerstijl: 'Badkamerstijl',
};

const BRAND_WEBSITES: Record<Brand, string> = {
  woonklasse: 'woonklasse.nl',
  badkamerstijl: 'badkamerstijl.nl',
};

const BRAND_TAGLINES: Record<Brand, string> = {
  woonklasse: 'Vakmanschap in elke steen',
  badkamerstijl: 'Jouw droombadkamer begint hier',
};

export const HERO_IMAGE_PATHS: Record<Brand, string> = {
  woonklasse: 'public/email-hero-woonklasse.jpg',
  badkamerstijl: 'public/email-hero-badkamerstijl.jpg',
};

export const LOGO_PATH = 'public/logos/stacked/png/woonklasse-stacked-white-512.png';

export function bevestigingEmail({ naam, formulier, brand }: ConfirmationData): string {
  const c = BRAND_COLORS[brand];
  const brandNaam = BRAND_NAMEN[brand];
  const website = BRAND_WEBSITES[brand];
  const tagline = BRAND_TAGLINES[brand];
  const heroCid = `hero-${brand}@${website}`;
  const titel = FORMULIER_TITELS[formulier] || 'Bericht';

  const begroeting = formulier === 'offerte'
    ? 'Bedankt voor je offerte aanvraag. We hebben alles goed ontvangen en gaan er direct mee aan de slag.'
    : formulier === 'adviesgesprek'
    ? 'Bedankt voor je aanvraag voor een adviesgesprek. We plannen graag een moment met je in.'
    : 'Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.';

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titel} ontvangen</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f0eeeb;font-family:Georgia,'Times New Roman',Times,serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0eeeb;">
    <tr>
      <td align="center" style="padding:30px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-collapse:collapse;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:4px;background-color:${c.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Brand header -->
          <tr>
            <td style="background-color:${c.primary};padding:32px 40px;text-align:center;">
              ${brand === 'woonklasse' ? `<img src="cid:logo@woonklasse.nl" alt="Woonklasse" width="140" style="display:block;margin:0 auto 12px;width:140px;height:auto;" />` : `<h1 style="margin:0;font-size:20px;font-weight:400;letter-spacing:6px;color:${c.accent};font-family:Georgia,'Times New Roman',Times,serif;text-transform:uppercase;">${brandNaam}</h1>`}
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:3px;color:${c.accentLight};text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-weight:300;opacity:0.6;">
                ${tagline}
              </p>
            </td>
          </tr>

          <!-- Hero image -->
          <tr>
            <td style="font-size:0;line-height:0;">
              <img src="cid:${heroCid}" alt="${brandNaam}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;" />
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="background-color:#ffffff;padding:44px 44px 20px;">
              <h2 style="margin:0;font-size:24px;font-weight:400;color:${c.text};font-family:Georgia,'Times New Roman',Times,serif;font-style:italic;line-height:1.3;">
                Beste ${naam},
              </h2>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color:#ffffff;padding:0 44px 32px;">
              <p style="margin:0;font-size:15px;line-height:1.8;color:#666666;">
                ${begroeting}
              </p>
            </td>
          </tr>

          <!-- Accent divider -->
          <tr>
            <td style="background-color:#ffffff;padding:0 44px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:40px;height:1px;background-color:${c.accent};font-size:0;line-height:0;">&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Steps section -->
          <tr>
            <td style="background-color:#ffffff;padding:28px 44px 40px;">
              <h3 style="margin:0 0 20px;font-size:11px;letter-spacing:3px;color:${c.accent};text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-weight:400;">
                Wat kun je verwachten
              </h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="36" valign="top" style="padding:10px 0;">
                    <div style="width:28px;height:28px;border-radius:50%;background-color:${c.lightBg};text-align:center;line-height:28px;font-size:12px;color:${c.accent};font-family:Arial,Helvetica,sans-serif;">1</div>
                  </td>
                  <td style="padding:10px 0 10px 8px;">
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;"><strong style="color:${c.text};font-weight:600;">Zorgvuldige beoordeling</strong><br/>We bekijken je aanvraag en bereiden ons goed voor.</p>
                  </td>
                </tr>
                <tr>
                  <td width="36" valign="top" style="padding:10px 0;">
                    <div style="width:28px;height:28px;border-radius:50%;background-color:${c.lightBg};text-align:center;line-height:28px;font-size:12px;color:${c.accent};font-family:Arial,Helvetica,sans-serif;">2</div>
                  </td>
                  <td style="padding:10px 0 10px 8px;">
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;"><strong style="color:${c.text};font-weight:600;">Persoonlijk contact</strong><br/>Binnen 2 werkdagen nemen we telefonisch contact op.</p>
                  </td>
                </tr>
                <tr>
                  <td width="36" valign="top" style="padding:10px 0;">
                    <div style="width:28px;height:28px;border-radius:50%;background-color:${c.lightBg};text-align:center;line-height:28px;font-size:12px;color:${c.accent};font-family:Arial,Helvetica,sans-serif;">3</div>
                  </td>
                  <td style="padding:10px 0 10px 8px;">
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;"><strong style="color:${c.text};font-weight:600;">Vrijblijvend gesprek</strong><br/>We bespreken samen de mogelijkheden, geheel vrijblijvend.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Banner -->
          <tr>
            <td style="background-color:${c.primary};padding:28px 44px;text-align:center;">
              <p style="margin:0 0 16px;font-size:16px;color:${c.accentLight};font-family:Georgia,'Times New Roman',Times,serif;font-style:italic;">
                Heb je ondertussen vragen?
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="border-radius:2px;border:1px solid ${c.accent};padding:12px 32px;">
                    <a href="tel:+31302072388" style="font-size:13px;letter-spacing:2px;color:${c.accent};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">Bel +31 30 207 23 88</a>
                  </td>
                </tr>
                <tr><td style="height:12px;line-height:12px;font-size:0;">&nbsp;</td></tr>
                <tr>
                  <td style="border-radius:2px;background-color:${c.accent};padding:12px 32px;">
                    <a href="https://${website}" style="font-size:13px;letter-spacing:2px;color:${c.primary};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">Bezoek ${website}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${c.lightBg};padding:28px 44px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#999;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
                ${brandNaam} &middot; Joop Geesinkweg 201 &middot; 1114 AB Amsterdam-Duivendrecht
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#999;font-family:Arial,Helvetica,sans-serif;">
                KVK 85409146 &middot; BTW NL004092100B36
              </p>
              <a href="https://${website}" style="font-size:11px;letter-spacing:2px;color:${c.accent};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">${website}</a>
            </td>
          </tr>

          <!-- Bottom accent bar -->
          <tr>
            <td style="height:4px;background-color:${c.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export interface CustomEmailData {
  bericht: string;
  brand: Brand;
  heroImageUrl?: string; // URL to hero image (public path like /email-hero-woonklasse.jpg)
  showLogo?: boolean;    // Show brand logo in header
}

export const AVAILABLE_IMAGES: { label: string; value: string; brand: Brand }[] = [
  { label: 'Woonklasse Hero', value: '/email-hero-woonklasse.jpg', brand: 'woonklasse' },
  { label: 'Badkamerstijl Hero', value: '/email-hero-badkamerstijl.jpg', brand: 'badkamerstijl' },
];

export function customEmail({ bericht, brand, heroImageUrl, showLogo = true }: CustomEmailData): string {
  const c = BRAND_COLORS[brand];
  const brandNaam = BRAND_NAMEN[brand];
  const website = BRAND_WEBSITES[brand];
  const tagline = BRAND_TAGLINES[brand];

  // Convert plain text to HTML paragraphs
  const htmlBody = bericht
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#666666;">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');

  const logoHtml = showLogo && brand === 'woonklasse'
    ? `<img src="cid:logo@woonklasse.nl" alt="Woonklasse" width="140" style="display:block;margin:0 auto 12px;width:140px;height:auto;" />`
    : `<h1 style="margin:0;font-size:20px;font-weight:400;letter-spacing:6px;color:${c.accent};font-family:Georgia,'Times New Roman',Times,serif;text-transform:uppercase;">${brandNaam}</h1>`;

  const heroHtml = heroImageUrl
    ? `
          <!-- Hero image -->
          <tr>
            <td style="font-size:0;line-height:0;">
              <img src="cid:hero@${website}" alt="${brandNaam}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;" />
            </td>
          </tr>`
    : '';

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f0eeeb;font-family:Georgia,'Times New Roman',Times,serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0eeeb;">
    <tr>
      <td align="center" style="padding:30px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-collapse:collapse;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:4px;background-color:${c.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Brand header -->
          <tr>
            <td style="background-color:${c.primary};padding:32px 40px;text-align:center;">
              ${logoHtml}
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:3px;color:${c.accentLight};text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-weight:300;opacity:0.6;">
                ${tagline}
              </p>
            </td>
          </tr>
          ${heroHtml}

          <!-- Content -->
          <tr>
            <td style="background-color:#ffffff;padding:44px 44px 32px;">
              ${htmlBody}
            </td>
          </tr>

          <!-- CTA Banner -->
          <tr>
            <td style="background-color:${c.primary};padding:28px 44px;text-align:center;">
              <p style="margin:0 0 16px;font-size:16px;color:${c.accentLight};font-family:Georgia,'Times New Roman',Times,serif;font-style:italic;">
                Vragen? Neem gerust contact op.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="border-radius:2px;border:1px solid ${c.accent};padding:12px 32px;">
                    <a href="tel:+31302072388" style="font-size:13px;letter-spacing:2px;color:${c.accent};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">Bel +31 30 207 23 88</a>
                  </td>
                </tr>
                <tr><td style="height:12px;line-height:12px;font-size:0;">&nbsp;</td></tr>
                <tr>
                  <td style="border-radius:2px;background-color:${c.accent};padding:12px 32px;">
                    <a href="https://${website}" style="font-size:13px;letter-spacing:2px;color:${c.primary};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">Bezoek ${website}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${c.lightBg};padding:28px 44px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#999;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
                ${brandNaam} &middot; Joop Geesinkweg 201 &middot; 1114 AB Amsterdam-Duivendrecht
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#999;font-family:Arial,Helvetica,sans-serif;">
                KVK 85409146 &middot; BTW NL004092100B36
              </p>
              <a href="https://${website}" style="font-size:11px;letter-spacing:2px;color:${c.accent};text-decoration:none;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;">${website}</a>
            </td>
          </tr>

          <!-- Bottom accent bar -->
          <tr>
            <td style="height:4px;background-color:${c.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

interface NotificatieData {
  naam: string;
  email: string;
  telefoon: string;
  formulier: 'offerte' | 'adviesgesprek' | 'contact';
  brand: Brand;
  stad?: string;
  type?: string;
  bericht?: string;
  bedrijf?: string;
}

export function notificatieEmail(data: NotificatieData): string {
  const c = BRAND_COLORS[data.brand];
  const brandNaam = BRAND_NAMEN[data.brand];
  const titel = FORMULIER_TITELS[data.formulier] || 'Bericht';

  const velden = [
    { label: 'Naam', value: data.naam },
    { label: 'E-mail', value: data.email },
    { label: 'Telefoon', value: data.telefoon },
    data.stad ? { label: 'Stad', value: data.stad } : null,
    data.bedrijf ? { label: 'Bedrijf', value: data.bedrijf } : null,
    data.type ? { label: 'Type', value: data.type } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe ${titel}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:${c.primary};padding:24px 40px;text-align:center;">
              <h1 style="margin:0;font-size:13px;letter-spacing:3px;color:${c.accent};font-family:Arial,Helvetica,sans-serif;font-weight:400;text-transform:uppercase;">
                Nieuwe ${titel}
              </h1>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="background-color:#ffffff;padding:30px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${velden.map(v => `
                <tr>
                  <td style="padding:10px 0;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;width:100px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${v.label}</td>
                  <td style="padding:10px 0;font-size:15px;color:#333;">${v.value}</td>
                </tr>`).join('')}
              </table>

              ${data.bericht ? `
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #eee;">
                <p style="margin:0 0 10px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Bericht</p>
                <p style="margin:0;font-size:14px;line-height:1.8;color:#555;white-space:pre-wrap;">${data.bericht}</p>
              </div>` : ''}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa;padding:16px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:11px;color:#bbb;font-family:Arial,Helvetica,sans-serif;">${brandNaam} &middot; ${new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export interface AdviesRoomData {
  type: string;
  meters?: string;
  notes?: string;
  photos: { url: string; filename: string }[];
}

export interface AdviesEmailData {
  brand: Brand;
  naam: string;
  email: string;
  telefoon: string;
  projectType?: string;
  tijdpad?: string;
  budget?: string;
  stijl?: string;
  bericht?: string;
  rooms: AdviesRoomData[];
}

export function adviesNotificatieEmail(data: AdviesEmailData): string {
  const c = BRAND_COLORS[data.brand];
  const brandNaam = BRAND_NAMEN[data.brand];

  const contactRows = [
    { label: 'Naam', value: data.naam },
    { label: 'E-mail', value: data.email },
    { label: 'Telefoon', value: data.telefoon },
  ];
  const projectRows = [
    data.projectType ? { label: 'Type project', value: data.projectType } : null,
    data.tijdpad ? { label: 'Tijdpad', value: data.tijdpad } : null,
    data.budget ? { label: 'Budget', value: data.budget } : null,
    data.stijl ? { label: 'Stijl', value: data.stijl } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  const roomsHtml = data.rooms
    .map((room, idx) => {
      const photosHtml = room.photos.length
        ? `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">
            <tr>
              ${room.photos
                .map(
                  (p) => `
                <td style="padding:4px;width:33%;vertical-align:top;">
                  <a href="${p.url}" style="text-decoration:none;">
                    <img src="${p.url}" alt="${p.filename}" width="170" style="display:block;width:100%;max-width:170px;height:auto;border:1px solid #eee;border-radius:4px;" />
                  </a>
                </td>`,
                )
                .join('')}
              ${room.photos.length === 1 ? '<td style="width:33%;"></td><td style="width:33%;"></td>' : ''}
              ${room.photos.length === 2 ? '<td style="width:33%;"></td>' : ''}
            </tr>
          </table>`
        : `<p style="margin:8px 0 0;font-size:13px;color:#aaa;font-style:italic;font-family:Arial,Helvetica,sans-serif;">(Geen foto&apos;s geupload)</p>`;

      const linksHtml = room.photos.length
        ? `<p style="margin:8px 0 0;font-size:11px;color:#999;font-family:Arial,Helvetica,sans-serif;">${room.photos.map((p, i) => `<a href="${p.url}" style="color:${c.accent};text-decoration:underline;">foto ${i + 1}</a>`).join(' &middot; ')}</p>`
        : '';

      return `
      <div style="margin-top:20px;padding:18px;background-color:#fafafa;border-left:3px solid ${c.accent};">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Kamer ${idx + 1}</p>
        <p style="margin:0;font-size:16px;color:#222;font-family:Arial,Helvetica,sans-serif;font-weight:600;">
          ${room.type}${room.meters ? ` &middot; ${room.meters} m²` : ''}
        </p>
        ${room.notes ? `<p style="margin:8px 0 0;font-size:13px;line-height:1.6;color:#555;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;">${room.notes}</p>` : ''}
        ${photosHtml}
        ${linksHtml}
      </div>`;
    })
    .join('');

  const projectBlock = projectRows.length
    ? `
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #eee;">
          <p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Project</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${projectRows
              .map(
                (v) => `
            <tr>
              <td style="padding:6px 0;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;width:100px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${v.label}</td>
              <td style="padding:6px 0;font-size:14px;color:#333;font-family:Arial,Helvetica,sans-serif;">${v.value}</td>
            </tr>`,
              )
              .join('')}
          </table>
        </div>`
    : '';

  const berichtBlock = data.bericht
    ? `
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #eee;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Bericht</p>
          <p style="margin:0;font-size:14px;line-height:1.8;color:#555;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;">${data.bericht}</p>
        </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe aanvraag persoonlijk advies</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;">

          <tr>
            <td style="background-color:${c.primary};padding:24px 40px;text-align:center;">
              <h1 style="margin:0;font-size:13px;letter-spacing:3px;color:${c.accent};font-family:Arial,Helvetica,sans-serif;font-weight:400;text-transform:uppercase;">
                Nieuwe aanvraag &middot; Persoonlijk advies
              </h1>
              <p style="margin:6px 0 0;font-size:11px;color:#bbb;font-family:Arial,Helvetica,sans-serif;">${brandNaam} hero formulier &middot; ${data.rooms.length} kamer${data.rooms.length === 1 ? '' : 's'}</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;padding:30px 40px;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Contact</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${contactRows
                  .map(
                    (v) => `
                <tr>
                  <td style="padding:6px 0;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;width:100px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${v.label}</td>
                  <td style="padding:6px 0;font-size:14px;color:#333;font-family:Arial,Helvetica,sans-serif;">${v.value}</td>
                </tr>`,
                  )
                  .join('')}
              </table>
              ${projectBlock}
              ${berichtBlock}

              <div style="margin-top:28px;padding-top:24px;border-top:1px solid #eee;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:1px;color:#999;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">Kamers</p>
                ${roomsHtml}
              </div>
            </td>
          </tr>

          <tr>
            <td style="background-color:#fafafa;padding:16px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:11px;color:#bbb;font-family:Arial,Helvetica,sans-serif;">${brandNaam} &middot; ${new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
