import type { Metadata } from 'next';
import { projects } from '@/data/projects';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/projecten`;

const TITLE = 'Projecten: gerealiseerde verbouwingen en veranda\'s';
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
    images: [{ url: `${SITE_URL}/woonklasse/villa-bergen-1.jpg`, width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/woonklasse/villa-bergen-1.jpg`],
  },
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#collection`,
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: 'nl-NL',
  isPartOf: { '@id': `${SITE_URL}#website` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/woonklasse/projecten/${p.slug}`,
      name: p.subtitle,
    })),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
    { '@type': 'ListItem', position: 3, name: 'Projecten', item: PAGE_URL },
  ],
};

export default function ProjectenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
