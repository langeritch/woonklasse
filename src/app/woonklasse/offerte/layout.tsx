import type { Metadata } from 'next';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/offerte`;

const TITLE = 'Gratis offerte aanvragen — Verbouwing of veranda | Woonklasse';
const DESCRIPTION =
  'Vraag vrijblijvend een offerte aan voor jouw verbouwing, aanbouw, veranda of dakkapel. Binnen 5 werkdagen een gespecificeerde offerte met vaste aanneemsom.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
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

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
