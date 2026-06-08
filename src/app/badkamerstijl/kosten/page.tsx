import type { Metadata } from 'next';
import KostenPage from '@/components/badkamerstijl/KostenPage';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/kosten`;

const TITLE = 'Wat kost een badkamer renovatie? Prijzen 2026 | Badkamerstijl';
const DESCRIPTION =
  'Wat kost een badkamer renovatie in Nederland? Van € 5.000 voor een budget badkamer tot € 20.000+ voor een luxe maatwerk badkamer. Inclusief alle kostenfactoren en een gratis prijscalculator.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'wat kost een badkamer renovatie',
    'kosten badkamer renovatie',
    'badkamer renovatie prijs',
    'prijs nieuwe badkamer',
    'badkamer verbouwen kosten',
    'badkamer renovatie 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Badkamerstijl',
    images: [
      {
        url: `${SITE_URL}/badkamerstijl/2200xxs(29).jpg`,
        width: 2200,
        height: 1467,
        alt: 'Wat kost een badkamer renovatie? Prijsoverzicht Badkamerstijl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/badkamerstijl/2200xxs(29).jpg`],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Kosten', item: PAGE_URL },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost een badkamer renovatie? Volledig prijsoverzicht 2026',
  description: DESCRIPTION,
  image: `${SITE_URL}/badkamerstijl/2200xxs(29).jpg`,
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  author: { '@type': 'Organization', name: 'Badkamerstijl' },
  publisher: {
    '@type': 'Organization',
    name: 'Badkamerstijl',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  inLanguage: 'nl-NL',
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Badkamer renovatie',
  provider: { '@type': 'Organization', name: 'Badkamerstijl', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'Nederland' },
  description:
    'Complete badkamer renovatie van ontwerp tot oplevering. Eigen vakmensen, vaste aanneemsom, uitgebreide garantie.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5000',
    highPrice: '60000',
    offerCount: '3',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een badkamer renovatie gemiddeld in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddelde complete badkamer renovatie in Nederland kost tussen de € 10.000 en € 20.000. Voor een eenvoudige badkamer met basis sanitair betaal je vanaf € 5.000, een luxe maatwerk badkamer komt al snel boven de € 20.000 uit. De prijs hangt af van de oppervlakte, materiaalkeuze en hoeveelheid leidingwerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zit er in de prijs van een badkamer renovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij Badkamerstijl is de prijs altijd compleet: sloop en afvoer, leidingwerk, tegelwerk, sanitair, kranen, verlichting, ventilatie, vloerverwarming en alle arbeid. Je krijgt een gespecificeerde offerte zodat je per onderdeel ziet wat je betaalt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een kleine badkamer renovatie (4 m²)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kleine badkamer van 4 tot 5 m² renoveren kost gemiddeld tussen de € 5.000 en € 10.000 voor een nette uitvoering met betrouwbaar sanitair. Voor een designuitvoering met grootformaat tegels en designkranen reken je op € 10.000 tot € 15.000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een grote luxe badkamer (10+ m²)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een ruime badkamer van 10 m² of meer in luxe uitvoering — met vrijstaand bad, dubbele wastafel, inloopdouche en topmerken — kost tussen de € 25.000 en € 60.000+. Bij echte natuursteen en designmerken zoals Dornbracht of Vola loopt dit verder op.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel arbeidsloon zit er in een badkamer renovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het arbeidsloon bedraagt doorgaans 40 tot 50% van de totale aanneemsom. Voor een badkamer van € 15.000 betekent dit ongeveer € 6.000 tot € 7.500 aan arbeid voor sloopwerk, leidingen, tegelzetwerk, sanitair installeren en afmonteren. De rest is materiaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een complete badkamer renovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een complete badkamer renovatie duurt gemiddeld 2 tot 4 weken. Een eenvoudige badkamer is in 2 weken klaar, een premium of luxe uitvoering met maatwerk meubels en natuursteen vraagt 3 tot 6 weken. Wij plannen het werk in één onafgebroken doorloop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een badkamer renovatie aftrekken van de belasting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een reguliere badkamer renovatie is niet aftrekbaar. Wel geldt het lage btw-tarief van 9% op arbeid bij woningen ouder dan 2 jaar — dit is al verwerkt in onze offertes. Bij energiebesparende ingrepen (zoals waterzuinige kranen of warmtepomp-aansluiting) kunnen subsidies van toepassing zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Krijg ik een vaste prijs of nacalculatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij werken altijd met een vaste aanneemsom op basis van de offerte. Geen verrassingen achteraf. Alleen bij door jou gewenste wijzigingen maken wij een vooraf goedgekeurde meerwerk-opgave.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KostenPage />
    </>
  );
}
