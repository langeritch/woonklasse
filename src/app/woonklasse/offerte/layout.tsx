import type { Metadata } from 'next';
import { CONTACT } from '@/data/contact';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/woonklasse/offerte`;

const TITLE = 'Gratis offerte aanvragen voor verbouwing of veranda | Woonklasse';
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
    images: [{ url: `${SITE_URL}/woonklasse/penthouse-amsterdam-3.jpg`, width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/woonklasse/penthouse-amsterdam-3.jpg`],
  },
};

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${PAGE_URL}#contactpage`,
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: 'nl-NL',
  about: { '@id': `${SITE_URL}#localbusiness` },
  mainEntity: {
    '@type': 'Organization',
    name: 'Woonklasse',
    url: SITE_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACT.telefoon,
      email: CONTACT.email,
      areaServed: 'NL',
      availableLanguage: ['Dutch', 'nl'],
    },
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
    { '@type': 'ListItem', position: 3, name: 'Offerte', item: PAGE_URL },
  ],
};

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
