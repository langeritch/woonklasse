import type { Metadata } from 'next';
import { CONTACT } from '@/data/contact';

const SITE_URL = 'https://woonklasse.nl';

const TITLE = 'Woonklasse — Verbouwingen, aanbouwen en veranda\'s';
const DESCRIPTION =
  'Woonklasse realiseert complete verbouwingen, aanbouwen, veranda\'s en dakkapellen. Eigen vakmensen, vaste aanneemsom en oog voor detail. Plan een gratis adviesgesprek.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Woonklasse',
  },
  description: DESCRIPTION,
  keywords: [
    'verbouwing',
    'aanbouw',
    'veranda',
    'dakkapel',
    'totaalverbouwing',
    'aannemer Nederland',
    'huis verbouwen',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Woonklasse',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Woonklasse — verbouwingen en veranda\'s',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#localbusiness`,
  name: 'Woonklasse',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
  description:
    'Woonklasse realiseert complete verbouwingen, aanbouwen, veranda\'s en dakkapellen. Vakmanschap en kwaliteit voor jouw droomwoning.',
  email: CONTACT.email,
  telephone: CONTACT.telefoon,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.adres.straat,
    postalCode: CONTACT.adres.postcode,
    addressLocality: CONTACT.adres.plaats,
    addressCountry: 'NL',
  },
  vatID: CONTACT.btw,
  taxID: CONTACT.kvk,
  areaServed: { '@type': 'Country', name: 'Nederland' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}#service-verbouwen`,
  serviceType: 'Verbouwingen, aanbouwen en veranda\'s',
  name: 'Complete verbouwing op maat',
  description:
    'Complete verbouwing, aanbouw, veranda of dakkapel door eigen vakmensen. Vaste aanneemsom van ontwerp tot oplevering, met uitgebreide garantie.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#localbusiness`,
    name: 'Woonklasse',
  },
  areaServed: { '@type': 'Country', name: 'Nederland' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'Woonklasse',
  inLanguage: 'nl-NL',
  publisher: { '@id': `${SITE_URL}#localbusiness` },
};

export default function WoonklasseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {children}
    </>
  );
}
