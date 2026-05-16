import type { Metadata } from 'next';
import AmsterdamPage from '@/components/AmsterdamPage';

const SITE_URL = 'https://woonklasse.nl';

export const metadata: Metadata = {
  title: 'Amsterdam | Styling en renovatie op maat',
  description:
    'Styling en renovatie in Amsterdam. Veel appartementen, weinig ruimte om fouten te maken. Wij kennen de stad en weten welke details het verschil maken.',
  alternates: { canonical: `${SITE_URL}/amsterdam` },
  openGraph: {
    title: 'Amsterdam | Styling en renovatie op maat',
    description:
      'Styling en renovatie in Amsterdam. Wij kennen de stad en weten welke details het verschil maken.',
    url: `${SITE_URL}/amsterdam`,
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/woonklasse/amsterdam-hero.avif', width: 2200, height: 1467 }],
  },
};

export default function Page() {
  return <AmsterdamPage ctaHref="/woonklasse/offerte" />;
}
