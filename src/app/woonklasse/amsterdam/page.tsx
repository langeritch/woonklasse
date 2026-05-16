import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getWoonklasseCityBySlug } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import AmsterdamPage from '@/components/AmsterdamPage';
import { buildCityFaqs } from '@/data/city-faqs';

const SITE_URL = 'https://woonklasse.nl';
const SLUG = 'amsterdam';

export const metadata: Metadata = {
  title: 'Aannemer Amsterdam voor verbouwing, renovatie & onderhoud | Woonklasse',
  description:
    'Aannemer in Amsterdam voor verbouwingen, renovaties, aanbouw en woningonderhoud. Eigen vakmensen, vaste prijs vooraf en één projectleider. Vraag een vrijblijvende offerte aan.',
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    title: 'Aannemer Amsterdam voor verbouwing & renovatie | Woonklasse',
    description:
      'Verbouwen in Amsterdam door eigen vakmensen, met vaste prijs vooraf en één projectleider.',
    url: `${SITE_URL}/${SLUG}`,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Woonklasse',
    images: [{ url: '/woonklasse/amsterdam-hero.avif', width: 2200, height: 1467 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Page() {
  const city = getWoonklasseCityBySlug(SLUG);
  if (!city) notFound();

  const nearbyCities = city.nearby
    .map((s) => getWoonklasseCityBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const pageUrl = `${SITE_URL}/${city.slug}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${pageUrl}#localbusiness`,
    name: `Woonklasse, aannemer in ${city.name}`,
    description: `Aannemer in ${city.name} en omgeving voor verbouwingen, renovaties, aanbouwen en woningonderhoud. Eigen vakmensen, vaste prijs vooraf en één projectleider.`,
    url: pageUrl,
    telephone: CONTACT.telefoon,
    email: CONTACT.email,
    image: `${SITE_URL}/woonklasse/amsterdam-hero.avif`,
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
      containedInPlace: { '@type': 'AdministrativeArea', name: city.province },
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    sameAs: ['https://woonklasse.nl'],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
      { '@type': 'ListItem', position: 3, name: `Verbouwing ${city.name}`, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: buildCityFaqs(city).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AmsterdamPage city={city} nearbyCities={nearbyCities} ctaHref="/woonklasse/offerte" />
    </>
  );
}
