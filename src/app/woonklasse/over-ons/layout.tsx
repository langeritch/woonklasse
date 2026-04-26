import type { Metadata } from 'next';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/over-ons`;

const TITLE = 'Over ons — Vakmensen achter Woonklasse';
const DESCRIPTION =
  'Leer het team van Woonklasse kennen. Vakmanschap, betrouwbaarheid en passie voor verbouwen. Eigen monteurs, vaste aanneemsom en oog voor detail.';

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

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
