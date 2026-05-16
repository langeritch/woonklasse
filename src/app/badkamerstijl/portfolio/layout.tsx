import type { Metadata } from 'next';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/portfolio`;

const TITLE = 'Portfolio: gerealiseerde badkamers | Badkamerstijl';
const DESCRIPTION =
  'Bekijk ons portfolio van gerealiseerde luxe badkamers door heel Nederland. Van modern minimalistisch tot klassiek luxe. Laat je inspireren door echte projecten van Badkamerstijl.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'badkamer portfolio',
    'gerealiseerde badkamers',
    'badkamer voorbeelden',
    'luxe badkamer projecten',
    'badkamer inspiratie Nederland',
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
        url: `${SITE_URL}/badkamerstijl/2200xxs(43).jpg`,
        width: 2200,
        height: 1467,
        alt: 'Portfolio van gerealiseerde luxe badkamers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/badkamerstijl/2200xxs(43).jpg`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
