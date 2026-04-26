import type { Metadata } from 'next';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/diensten`;

const TITLE = 'Diensten — Verbouwingen, aanbouwen en veranda\'s | Woonklasse';
const DESCRIPTION =
  'Ontdek onze diensten: totaalverbouwing, aanbouw, veranda, dakkapel, badkamer en keuken renovatie. Woonklasse levert vakmanschap op maat door heel Nederland.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'verbouwing aannemer',
    'aanbouw',
    'veranda bouwen',
    'dakkapel plaatsen',
    'totaalverbouwing',
    'badkamer renovatie',
    'keuken plaatsen',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Woonklasse',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
