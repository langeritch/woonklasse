import type { Metadata } from 'next';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/badkamerstijl/stijlen`;

const TITLE = 'Badkamer stijlen — Modern, klassiek, natuurlijk | Badkamerstijl';
const DESCRIPTION =
  'Ontdek alle badkamer stijlen: modern minimalistisch, warm natuurlijk, klassiek luxe, scandinavisch, industrieel chic en boutique hotel. Vind de stijl die bij je past en plan een gratis adviesgesprek.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'badkamer stijlen',
    'moderne badkamer',
    'landelijke badkamer',
    'klassieke badkamer',
    'scandinavische badkamer',
    'industriële badkamer',
    'badkamer inspiratie',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Badkamerstijl',
    images: [
      {
        url: `${SITE_URL}/badkamerstijl/2200xxs(28).jpg`,
        width: 2200,
        height: 1467,
        alt: 'Verschillende badkamer stijlen — Badkamerstijl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/badkamerstijl/2200xxs(28).jpg`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
