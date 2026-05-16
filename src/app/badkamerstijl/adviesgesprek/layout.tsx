import type { Metadata } from 'next';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/adviesgesprek`;

const TITLE = 'Gratis adviesgesprek voor jouw badkamer | Badkamerstijl';
const DESCRIPTION =
  'Plan een gratis en vrijblijvend adviesgesprek voor jouw badkamer renovatie. Wij komen langs, meten op en sturen binnen 5 werkdagen een gespecificeerde offerte met vaste prijs.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'gratis adviesgesprek badkamer',
    'badkamer offerte aanvragen',
    'badkamer ontwerp',
    'badkamer adviseur',
    'vrijblijvende offerte badkamer',
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
        url: `${SITE_URL}/badkamerstijl/2200xxs(25).jpg`,
        width: 2200,
        height: 1467,
        alt: 'Gratis adviesgesprek voor jouw badkamer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/badkamerstijl/2200xxs(25).jpg`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
