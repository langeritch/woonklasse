import type { Metadata } from 'next';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/over-ons`;

const TITLE = 'Over ons: de vakmensen achter Woonklasse';
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
    images: [{ url: `${SITE_URL}/woonklasse/villa-bergen-2.jpg`, width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/woonklasse/villa-bergen-2.jpg`],
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${PAGE_URL}#aboutpage`,
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: 'nl-NL',
  about: { '@id': `${SITE_URL}#localbusiness` },
  isPartOf: { '@id': `${SITE_URL}#website` },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
    { '@type': 'ListItem', position: 3, name: 'Over ons', item: PAGE_URL },
  ],
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
