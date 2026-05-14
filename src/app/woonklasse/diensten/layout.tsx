import type { Metadata } from 'next';
import { CONTACT } from '@/data/contact';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/diensten`;

const TITLE = 'Diensten: verbouwingen, aanbouwen en veranda\'s | Woonklasse';
const DESCRIPTION =
  'Ontdek onze diensten: totaalverbouwing, aanbouw, veranda, dakkapel, badkamer en keuken renovatie. Woonklasse levert vakmanschap op maat door heel Nederland.';

const SERVICES = [
  { name: 'Totaalverbouwing', description: 'Complete verbouwing van sloop tot oplevering door één partij.' },
  { name: 'Aanbouw & uitbouw', description: 'Aanbouwen, uitbouwen en serres die aansluiten op de bestaande woning.' },
  { name: 'Veranda', description: 'Op maat gemaakte veranda\'s om het hele jaar buiten te genieten.' },
  { name: 'Dakkapel', description: 'Prefab en op maat gebouwde dakkapellen, inclusief vergunning.' },
  { name: 'Keuken renovatie', description: 'Maatwerk keukens met sloop, leidingwerk, tegelwerk en montage.' },
  { name: 'Badkamer renovatie', description: 'Complete badkamer renovatie met sanitair, tegels en vloerverwarming.' },
  { name: 'Dakwerk', description: 'Dakvernieuwing, dakisolatie en goten door eigen dakdekkers.' },
  { name: 'Schilderwerk', description: 'Binnen- en buitenschilderwerk met voorbehandeling en dubbele lagen.' },
];

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
    images: [{ url: `${SITE_URL}/woonklasse/canal-residence-1.jpg`, width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/woonklasse/canal-residence-1.jpg`],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
    { '@type': 'ListItem', position: 3, name: 'Diensten', item: PAGE_URL },
  ],
};

const serviceCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-catalog`,
  serviceType: 'Verbouwingen, aanbouwen en woningonderhoud',
  name: 'Diensten van Woonklasse',
  description: DESCRIPTION,
  provider: {
    '@type': 'GeneralContractor',
    name: 'Woonklasse',
    url: SITE_URL,
    telephone: CONTACT.telefoon,
    email: CONTACT.email,
  },
  areaServed: { '@type': 'Country', name: 'Netherlands' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Diensten Woonklasse',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: { '@type': 'Service', name: s.name, description: s.description },
    })),
  },
};

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }}
      />
      {children}
    </>
  );
}
