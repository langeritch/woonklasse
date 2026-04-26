import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display, Cormorant_Garamond, Fraunces, DM_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { CONTACT } from '@/data/contact';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://woonklasse.nl'),
  title: {
    default: 'Woonklasse & Badkamerstijl | Jouw Droomwoning',
    template: '%s | Woonklasse & Badkamerstijl',
  },
  description: 'Van complete verbouwingen en veranda\'s tot luxe droombadkamers op maat. Woonklasse voor verbouwingen en veranda\'s, Badkamerstijl voor luxe badkamers.',
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
    siteName: 'Woonklasse & Badkamerstijl',
    title: 'Woonklasse & Badkamerstijl | Jouw Droomwoning',
    description: 'Van complete verbouwingen en veranda\'s tot luxe droombadkamers op maat.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Woonklasse & Badkamerstijl' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woonklasse & Badkamerstijl | Jouw Droomwoning',
    description: 'Van complete verbouwingen en veranda\'s tot luxe droombadkamers op maat.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Woonklasse & Badkamerstijl',
  description: 'Van complete verbouwingen en veranda\'s tot luxe droombadkamers op maat.',
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
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${cormorant.variable} ${fraunces.variable} ${dmSans.variable} antialiased flex flex-col min-h-screen`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm focus:font-semibold focus:rounded">
          Ga naar inhoud
        </a>
        <SmoothScroll>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
        {/* Amaso Dashboard Alt+Click inspector bridge — dev-only, self-contained. */}
        {process.env.NODE_ENV !== "production" && (
          <script async src="/amaso-inspector.js" />
        )}
      </body>
    </html>
  );
}
