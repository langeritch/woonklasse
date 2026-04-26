import type { Metadata } from 'next';
import DienstenPage from '@/components/badkamerstijl/DienstenPage';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/diensten`;

const TITLE = 'Diensten — Ontwerp, renovatie en montage | Badkamerstijl';
const DESCRIPTION =
  'Van 3D-ontwerp tot complete badkamer renovatie en vakkundige montage. Badkamerstijl verzorgt het volledige traject met eigen vakmensen.';

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
    images: [{ url: '/badkamerstijl/2200xxs(44).jpg', width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SERVICES = [
  {
    name: 'Badkamer ontwerp',
    description:
      '3D-ontwerp, materiaaladvies en gedetailleerde plattegrond voor jouw nieuwe badkamer.',
    serviceType: 'Bathroom design',
  },
  {
    name: 'Complete badkamer renovatie',
    description:
      'Van sloop tot oplevering — leidingwerk, tegelwerk, sanitair en afwerking uit één hand.',
    serviceType: 'Bathroom renovation',
  },
  {
    name: 'Montage en installatie sanitair',
    description:
      'Vakkundige montage van inbouwkranen, hangtoiletten, inloopdouches en vrijstaande baden.',
    serviceType: 'Bathroom installation',
  },
  {
    name: 'Advies en styling',
    description:
      'Kleur- en materiaaladvies, indelingsoptimalisatie en styling voor de finishing touch.',
    serviceType: 'Interior design consultation',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Badkamer renovatie en ontwerp',
  description: DESCRIPTION,
  serviceType: 'Bathroom renovation',
  provider: {
    '@type': 'Organization',
    name: 'Badkamerstijl',
    url: SITE_URL,
  },
  areaServed: { '@type': 'Country', name: 'Nederland' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Diensten Badkamerstijl',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        serviceType: s.serviceType,
        provider: { '@type': 'Organization', name: 'Badkamerstijl' },
      },
    })),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Badkamerstijl', item: `${SITE_URL}/badkamerstijl` },
    { '@type': 'ListItem', position: 3, name: 'Diensten', item: PAGE_URL },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DienstenPage />
    </>
  );
}
