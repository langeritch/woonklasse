import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WOONKLASSE_CITIES, getWoonklasseCityBySlug } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import { WOONKLASSE_POSTS } from '@/data/blog/index';
import WoonklasseCityPage from '@/components/woonklasse/CityPage';

const SITE_URL = 'https://woonklasse.nl';

export const dynamicParams = false;

// Steden met een eigen schone template-route (src/app/woonklasse/<slug>),
// die deze [city]-template overrulen en dus hier niet ook gegenereerd mogen worden.
const DEDICATED_ROUTE_SLUGS = new Set(['amsterdam', 'rotterdam', 'utrecht']);

export async function generateStaticParams() {
  return WOONKLASSE_CITIES.filter((c) => !DEDICATED_ROUTE_SLUGS.has(c.slug)).map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> },
): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getWoonklasseCityBySlug(slug);
  if (!city) {
    return { title: 'Niet gevonden | Woonklasse' };
  }

  const title = `Aannemer ${city.name} voor verbouwing, renovatie & onderhoud | Woonklasse`;
  const description = `Aannemer in ${city.name} voor verbouwingen, renovaties, aanbouw, dakwerk en woningonderhoud. Eigen vakmensen, vaste prijs vooraf en één projectleider. Vraag een vrijblijvende offerte aan.`;
  const url = `${SITE_URL}/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'nl_NL',
      siteName: 'Woonklasse',
      images: [{ url: '/woonklasse/villa-bergen-1.jpg', width: 2200, height: 1467 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Page(
  { params }: { params: Promise<{ city: string }> },
) {
  const { city: slug } = await params;
  const city = getWoonklasseCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = city.nearby
    .map((s) => getWoonklasseCityBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // Pick three foundational guides to surface on every city page -
  // budget, vergunning, aannemer-keuze - these are the searches that
  // drive most traffic to a renovation contractor.
  const RELATED_GUIDE_SLUGS = [
    'huis-verbouwen-kosten-2026',
    'verbouwing-vergunning-nodig',
    'aannemer-kiezen-tips',
  ];
  const relatedPosts = RELATED_GUIDE_SLUGS
    .map((s) => WOONKLASSE_POSTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const pageUrl = `${SITE_URL}/${city.slug}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${pageUrl}#localbusiness`,
    name: `Woonklasse, aannemer in ${city.name}`,
    alternateName: [
      `Woonklasse Verbouwing ${city.name}`,
      `Woonklasse Renovatie ${city.name}`,
      `Aannemer ${city.name}`,
    ],
    description: `Aannemer in ${city.name} en omgeving voor verbouwingen, renovaties, aanbouwen, dakwerk en woningonderhoud. Eigen vakmensen, vaste prijs vooraf en één projectleider.`,
    knowsAbout: [
      'Verbouwing',
      'Renovatie',
      'Aanbouw',
      'Dakwerk',
      'Woningonderhoud',
      'Keukenrenovatie',
      'Schilderwerk',
      'Vloeren',
      'Loodgieterwerk',
    ],
    url: pageUrl,
    telephone: CONTACT.telefoon,
    email: CONTACT.email,
    image: `${SITE_URL}/woonklasse/villa-bergen-1.jpg`,
    priceRange: '€€-€€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.adres.straat,
      postalCode: CONTACT.adres.postcode,
      addressLocality: CONTACT.adres.plaats,
      addressCountry: 'NL',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.province,
      },
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    sameAs: ['https://woonklasse.nl'],
  };

  const services = [
    { name: 'Verbouwingen', description: `Complete verbouwingen in ${city.name}, van sloop tot oplevering.` },
    { name: 'Woningonderhoud', description: `Periodiek onderhoud en herstelwerk in ${city.name}.` },
    { name: 'Keukens', description: `Keukenrenovatie en -installatie in ${city.name}.` },
    { name: 'Aanbouw & uitbouw', description: `Aanbouwen, opbouwen en serres in ${city.name}.` },
    { name: 'Dakwerk', description: `Dakvernieuwing, dakkapellen en dakisolatie in ${city.name}.` },
    { name: 'Schilderwerk', description: `Schilderwerk binnen en buiten in ${city.name}.` },
    { name: 'Loodgieterwerk', description: `Sanitair, leidingwerk en lekkages in ${city.name}.` },
    { name: 'Elektra', description: `Groepenkasten, bedrading en verlichting in ${city.name}.` },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Verbouwing en woningonderhoud',
    provider: { '@id': `${pageUrl}#localbusiness` },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Diensten Woonklasse ${city.name}`,
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          areaServed: city.name,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Verbouwing ${city.name}`,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Wat doet een aannemer in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Als aannemer in ${city.name} verzorgt Woonklasse complete verbouwingen, renovaties, aanbouwen, dakwerk en woningonderhoud. Wij coördineren alle vakdisciplines (timmerwerk, loodgieter, elektra, schilderwerk) en leveren één aanspreekpunt en één vaste prijs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Hoe lang duurt een verbouwing in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Een gerichte renovatie in ${city.name} duurt 2 tot 4 weken. Een complete verbouwing met aanbouw of dakopbouw kost doorgaans 3 tot 6 maanden.`,
        },
      },
      {
        '@type': 'Question',
        name: `Wat kost een verbouwing in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Een eenvoudige renovatie in ${city.name} start rond €8.000. Complete verbouwingen met aanbouw liggen meestal tussen €60.000 en €150.000. Sleutelklare projecten op maat starten vanaf €150.000.`,
        },
      },
      {
        '@type': 'Question',
        name: `Werken jullie ook in ${city.areas[0]}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, Woonklasse werkt in heel ${city.name} inclusief ${city.areas.join(', ')}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Verzorgen jullie ook de omgevingsvergunning in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, voor projecten waarvoor een omgevingsvergunning nodig is verzorgen wij tekeningen, indienen bij de gemeente ${city.name} en de communicatie tot aan de verlening.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Welke garantie geven jullie op het werk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tot 10 jaar garantie op constructief werk, 5 jaar op installaties en 2 jaar op afwerking. Bij oplevering ontvangt u een garantieboek met alle documentatie.',
        },
      },
    ],
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WoonklasseCityPage city={city} nearbyCities={nearbyCities} relatedPosts={relatedPosts} />
    </>
  );
}
