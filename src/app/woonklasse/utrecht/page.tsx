import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getWoonklasseCityBySlug } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import AmsterdamPage from '@/components/AmsterdamPage';

const SITE_URL = 'https://woonklasse.nl';
const SLUG = 'utrecht';

const city = getWoonklasseCityBySlug(SLUG);
const heroPath = city?.heroImage ?? '/woonklasse/villa-bergen-1.jpg';

export const metadata: Metadata = {
  title: 'Aannemer Utrecht voor verbouwing, renovatie & onderhoud',
  description:
    'Aannemer in Utrecht voor verbouwingen, renovaties, aanbouw en woningonderhoud. Eigen vakmensen, vaste prijs vooraf en één projectleider. Vraag een vrijblijvende offerte aan.',
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    title: 'Aannemer Utrecht voor verbouwing & renovatie | Woonklasse',
    description:
      'Verbouwen in Utrecht door eigen vakmensen, met vaste prijs vooraf en één projectleider.',
    url: `${SITE_URL}/${SLUG}`,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Woonklasse',
    images: [{ url: heroPath, width: 2200, height: 1467 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Page() {
  const city = getWoonklasseCityBySlug(SLUG);
  if (!city) notFound();

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
    image: `${SITE_URL}${city.heroImage ?? heroPath}`,
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
      <AmsterdamPage city={city} ctaHref="/woonklasse/offerte" />
    </>
  );
}
