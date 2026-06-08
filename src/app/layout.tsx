import type { Metadata } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppFab from '@/components/WhatsAppFab';
import { CONTACT } from '@/data/contact';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Badkamerstijl 2026 redesign - elegant high-contrast serif for display headings
const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://badkamerstijl.nl'),
  title: {
    default: 'Badkamerstijl | Luxe badkamers op maat',
    template: '%s | Badkamerstijl',
  },
  description: 'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. Van 3D-ontwerp tot oplevering door eigen vakmensen, met vaste aanneemsom en installatiegarantie.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Badkamerstijl',
    title: 'Badkamerstijl | Luxe badkamers op maat',
    description: 'Luxe badkamers op maat, van 3D-ontwerp tot oplevering door eigen vakmensen.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Badkamerstijl' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badkamerstijl | Luxe badkamers op maat',
    description: 'Luxe badkamers op maat, van 3D-ontwerp tot oplevering door eigen vakmensen.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Badkamerstijl',
  description: 'Luxe badkamers op maat, van 3D-ontwerp tot oplevering door eigen vakmensen.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.adres.straat,
    postalCode: CONTACT.adres.postcode,
    addressLocality: CONTACT.adres.plaats,
    addressCountry: 'NL',
  },
  telephone: '+31302072388',
  email: CONTACT.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${cormorantGaramond.variable} antialiased flex flex-col min-h-screen`}>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('message', (e) => {
            if (e.data.type === 'studio-scroll') {
              window.scrollTo({ top: e.data.y, behavior: 'smooth' });
            }
          });
        `}} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm focus:font-semibold focus:rounded">
          Ga naar inhoud
        </a>
        <SmoothScroll>
          <main id="main-content">{children}</main>
          <WhatsAppFab />
        </SmoothScroll>
        {/* Amaso Dashboard Alt+Click inspector bridge - dev-only, self-contained. */}
        {process.env.NODE_ENV !== "production" && (
          <script async src="/amaso-inspector.js" />
        )}
      </body>
    </html>
  );
}
