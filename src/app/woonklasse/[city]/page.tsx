import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WOONKLASSE_CITIES, getWoonklasseCityBySlug } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import WoonklasseCityPage from '@/components/woonklasse/CityPage';

const SITE_URL = 'https://woonklasse.nl';

export const dynamicParams = false;

export async function generateStaticParams() {
  return WOONKLASSE_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> },
): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getWoonklasseCityBySlug(slug);
  if (!city) {
    return { title: 'Niet gevonden | Woonklasse' };
  }

  const title = `Verbouwing & Onderhoud ${city.name} | Woonklasse`;
  const description = `Verbouwingen, woningonderhoud, aanbouw, dakwerk en installaties in ${city.name}. Eigen vakmensen, vaste prijs vooraf, één projectleider. Vraag een vrijblijvende offerte aan.`;
  const url = `${SITE_URL}/woonklasse/${city.slug}`;

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

  const pageUrl = `${SITE_URL}/woonklasse/${city.slug}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${pageUrl}#localbusiness`,
    name: `Woonklasse — Verbouwing & Onderhoud ${city.name}`,
    description: `Aannemer voor verbouwingen, aanbouwen, dakwerk en woningonderhoud in ${city.name} en omgeving. Eigen vakmensen, vaste prijs vooraf.`,
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
    { name: 'Verbouwingen', description: `Complete verbouwingen in ${city.name} — van sloop tot oplevering.` },
    { name: 'Woningonderhoud', description: `Periodiek onderhoud en herstelwerk in ${city.name}.` },
    { name: 'Keukens', description: `Keukenrenovatie en -installatie in ${city.name}.` },
    { name: 'Aanbouw & uitbouw', description: `Aanbouwen, opbouwen en serres in ${city.name}.` },
    { name: 'Dakwerk', description: `Dakvernieuwing, dakkapellen en dakisolatie in ${city.name}.` },
    { name: 'Schilderwerk', description: `Binnen- en buitenschilderwerk in ${city.name}.` },
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
      <WoonklasseCityPage city={city} nearbyCities={nearbyCities} />
    </>
  );
}
