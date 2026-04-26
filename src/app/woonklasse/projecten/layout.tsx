import type { Metadata } from 'next';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/projecten`;

const TITLE = 'Projecten — Gerealiseerde verbouwingen en veranda\'s';
const DESCRIPTION =
  'Bekijk ons portfolio van gerealiseerde verbouwingen, totaalrenovaties, aanbouwen en veranda\'s. Inspiratie voor jouw verbouwing door heel Nederland.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'verbouwing portfolio',
    'gerealiseerde verbouwingen',
    'verbouw voorbeelden',
    'aanbouw projecten',
    'veranda projecten',
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

export default function ProjectenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
