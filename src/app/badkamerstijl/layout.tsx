import type { Metadata } from 'next';
import ScrollToTop from '@/components/ScrollToTop';
import BadkamerstijlTransition from '@/components/BadkamerstijlTransition';
import BadkamerstijlFooter from '@/components/BadkamerstijlFooter';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';
import { BADKAMERSTIJL_FAQS } from '@/data/badkamerstijl-faq';
import CookieConsent from '@/components/CookieConsent';

const SITE_URL = 'https://badkamerstijl.nl';

const TITLE = 'Badkamerstijl: luxe badkamers op maat door heel Nederland';
const DESCRIPTION =
  'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. Van ontwerp in 3D tot oplevering, met eigen vakmensen, vaste aanneemsom en uitgebreide installatiegarantie.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Badkamerstijl',
  },
  description: DESCRIPTION,
  keywords: [
    'luxe badkamers',
    'badkamer renovatie',
    'badkamer op maat',
    'badkamer ontwerp',
    'badkamer Nederland',
    'design badkamer',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Badkamerstijl',
    images: [
      {
        url: `${SITE_URL}/badkamerstijl/2200xxs(24).jpg`,
        width: 2200,
        height: 1467,
        alt: 'Luxe badkamer door Badkamerstijl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/badkamerstijl/2200xxs(24).jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#localbusiness`,
  name: 'Badkamerstijl',
  alternateName: 'BadkamerStijl',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
  image: [
    `${SITE_URL}/badkamerstijl/2200xxs(24).jpg`,
    `${SITE_URL}/badkamerstijl/2200xxs(29).jpg`,
    `${SITE_URL}/badkamerstijl/2200xxs(43).jpg`,
  ],
  description:
    'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. Van ontwerp in 3D tot oplevering, met eigen vakmensen, vaste aanneemsom en uitgebreide installatiegarantie.',
  email: CONTACT_BADKAMERSTIJL.email,
  telephone: CONTACT_BADKAMERSTIJL.telefoon,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_BADKAMERSTIJL.adres.straat,
    postalCode: CONTACT_BADKAMERSTIJL.adres.postcode,
    addressLocality: CONTACT_BADKAMERSTIJL.adres.plaats,
    addressCountry: 'NL',
  },
  vatID: CONTACT_BADKAMERSTIJL.btw,
  taxID: CONTACT_BADKAMERSTIJL.kvk,
  areaServed: { '@type': 'Country', name: 'Nederland' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.instagram.com/badkamerstijl'],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}#service-badkamer-renovatie`,
  serviceType: 'Badkamer renovatie',
  name: 'Complete badkamer renovatie op maat',
  description:
    'Complete badkamer renovatie van ontwerp tot oplevering door eigen vakmensen. Inclusief sloop, leidingwerk, tegels, sanitair, vloerverwarming, ventilatie en alle arbeid. Vaste aanneemsom, geen verrassingen.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#localbusiness`,
    name: 'Badkamerstijl',
  },
  areaServed: { '@type': 'Country', name: 'Nederland' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5000',
    highPrice: '60000',
    offerCount: '4',
    url: `${SITE_URL}/prijzen`,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Badkamer pakketten',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Basis badkamer',
        description: 'Nette renovatie met betrouwbaar middensegment sanitair, vanaf € 5.000.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Standaard badkamer',
        description: 'Designsanitair en grootformaat tegels, tussen € 12.000 en € 22.000.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Premium badkamer',
        description: 'Topmerken, vrijstaand bad en maatwerk meubels, tussen € 22.000 en € 35.000.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Luxe badkamer',
        description: 'Volledig op maat met natuursteen en designmerken, vanaf € 35.000.',
      },
    ],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'Badkamerstijl',
  inLanguage: 'nl-NL',
  publisher: { '@id': `${SITE_URL}#localbusiness` },
};

// FAQPage schema, gebouwd uit dezelfde data als de zichtbare FAQ op de homepage.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}#faq`,
  mainEntity: BADKAMERSTIJL_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function BadkamerstijlLayout({ children }: { children: React.ReactNode }) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Analytics (GA + Clarity) wordt pas geladen na cookie-toestemming. */}
      <CookieConsent />
      <ScrollToTop />
      <BadkamerstijlTransition />
      {children}
      <BadkamerstijlFooter />
    </>
  );
}
