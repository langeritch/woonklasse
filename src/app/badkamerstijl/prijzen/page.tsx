import type { Metadata } from 'next';
import PrijzenPage from '@/components/badkamerstijl/PrijzenPage';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/prijzen`;

const TITLE = 'Wat kost een badkamer renovatie? | Prijzen | Badkamerstijl';
const DESCRIPTION =
  'Wat kost een badkamer renovatie? Vier transparante pakketten van € 5.000 tot € 60.000+, met inbegrepen materialen, sanitair en arbeid. Vraag een gratis offerte aan.';

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
    images: [{ url: '/badkamerstijl/2200xxs(30).jpg', width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PRICING_TIERS = [
  {
    name: 'Basis',
    description:
      'Een nette badkamer renovatie met betrouwbaar middensegment sanitair en strak tegelwerk. Voor wie een verzorgde badkamer wil zonder concessies aan vakmanschap.',
    lowPrice: '5000',
    highPrice: '12000',
  },
  {
    name: 'Standaard',
    description:
      'De populairste keuze. Designsanitair, grootformaat tegels en designkranen — een badkamer met topafwerking.',
    lowPrice: '12000',
    highPrice: '22000',
  },
  {
    name: 'Premium',
    description:
      'Topmerken, vrijstaand bad en maatwerk meubels. Een badkamer met hotel-allure waar elk element bewust is gekozen.',
    lowPrice: '22000',
    highPrice: '35000',
  },
  {
    name: 'Luxe',
    description:
      'Volledig op maat ontworpen droombadkamer met natuursteen, designmerken en bijzondere extra\'s als sauna of stoomdouche.',
    lowPrice: '35000',
    highPrice: '60000',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Badkamer renovatie',
  description:
    'Volledige badkamer renovatie door Badkamerstijl, van ontwerp tot oplevering. Eigen vakmensen, vaste aanneemsom en uitgebreide installatiegarantie.',
  brand: { '@type': 'Brand', name: 'Badkamerstijl' },
  image: `${SITE_URL}/badkamerstijl/2200xxs(30).jpg`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5000',
    highPrice: '60000',
    offerCount: '4',
    availability: 'https://schema.org/InStock',
    url: PAGE_URL,
    seller: { '@type': 'Organization', name: 'Badkamerstijl' },
    offers: PRICING_TIERS.map((tier) => ({
      '@type': 'Offer',
      name: `Badkamer renovatie — pakket ${tier.name}`,
      description: tier.description,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        minPrice: tier.lowPrice,
        maxPrice: tier.highPrice,
      },
      availability: 'https://schema.org/InStock',
      url: PAGE_URL,
      seller: { '@type': 'Organization', name: 'Badkamerstijl' },
    })),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Badkamerstijl', item: `${SITE_URL}/badkamerstijl` },
    { '@type': 'ListItem', position: 3, name: 'Prijzen', item: PAGE_URL },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is precies inbegrepen in jullie prijzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze offertes zijn altijd compleet: sloop en afvoer, leidingwerk, tegelwerk, sanitair, kranen, verlichting, ventilatie, vloerverwarming en alle arbeid. Je krijgt een gespecificeerde offerte zodat je per onderdeel ziet wat je betaalt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie met vaste prijzen of nacalculatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij werken altijd met een vaste aanneemsom op basis van de afgestemde offerte. Geen verrassingen achteraf. Alleen bij door de klant gewenste wijzigingen maken wij een vooraf goedgekeurde meerwerk-opgave.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ziet het betalingsschema eruit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard drie termijnen: 30% bij start, 60% halverwege na het tegelwerk en 10% na oplevering. Voor projecten boven € 30.000 is een aangepast schema bespreekbaar. Wij vragen nooit volledige vooruitbetaling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke garanties geven jullie op een badkamer renovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op installatie en montage geven we minimaal 5 jaar garantie, oplopend tot 10 jaar bij Premium en Luxe. Op materialen geldt de fabrieksgarantie van merken zoals Geberit, Hansgrohe en Villeroy & Boch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn er verborgen kosten bij een badkamer renovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Wat in de offerte staat is wat je betaalt. Onvoorziene situaties zoals verborgen vocht of asbest worden eerst aan jou voorgelegd met een prijsopgave voordat we doorwerken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang is een offerte geldig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze offertes zijn 60 dagen geldig. Na akkoord plannen we de start binnen 4 tot 8 weken, afhankelijk van het seizoen.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PrijzenPage />
    </>
  );
}
