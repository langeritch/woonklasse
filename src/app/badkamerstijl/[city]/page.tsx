import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES, getCityBySlug } from '@/data/cities';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';
import { BLOG_POSTS } from '@/data/blog';
import CityPage from '@/components/badkamerstijl/CityPage';

const SITE_URL = 'https://badkamerstijl.nl';

// Steden met een eigen dedicated route (src/app/badkamerstijl/<slug>) die
// dit [city]-template overrulen en hier dus niet ook gegenereerd worden.
const DEDICATED_ROUTE_SLUGS = new Set(['amsterdam', 'rotterdam', 'utrecht', 'den-haag']);

export async function generateStaticParams() {
  return CITIES.filter((c) => !DEDICATED_ROUTE_SLUGS.has(c.slug)).map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> },
): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    return { title: 'Niet gevonden | Badkamerstijl' };
  }

  const title = `Badkamer renovatie ${city.name}: luxe op maat | Badkamerstijl`;
  const description = `Badkamer renovatie in ${city.name} door Badkamerstijl. Ontwerp in 3D, eigen vakmensen en vaste aanneemsom. Plan een gratis adviesgesprek voor jouw droombadkamer in ${city.name}.`;
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
      images: [{ url: '/badkamerstijl/2200xxs(24).jpg', width: 2200, height: 1467 }],
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
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = city.nearby
    .map((s) => getCityBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const recentArticles = [...BLOG_POSTS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const pageUrl = `${SITE_URL}/${city.slug}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${pageUrl}#localbusiness`,
    name: 'BadkamerStijl',
    alternateName: `BadkamerStijl, badkamer renovatie in ${city.name}`,
    description: `Luxe badkamer renovatie en op maat gemaakte badkamers in ${city.name}. Volledig ontwerp en realisatie door eigen vakmensen.`,
    url: pageUrl,
    telephone: CONTACT_BADKAMERSTIJL.telefoon,
    email: CONTACT_BADKAMERSTIJL.email,
    image: `${SITE_URL}/badkamerstijl/2200xxs(24).jpg`,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_BADKAMERSTIJL.adres.straat,
      postalCode: CONTACT_BADKAMERSTIJL.adres.postcode,
      addressLocality: CONTACT_BADKAMERSTIJL.adres.plaats,
      addressCountry: 'NL',
    },
    areaServed: [
      {
        '@type': 'City',
        name: city.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: city.province,
        },
      },
      ...city.areas.map((a) => ({ '@type': 'Place', name: a })),
    ],
    knowsAbout: [
      'Badkamer renovatie',
      'Luxe badkamers op maat',
      'Inloopdouche plaatsen',
      'Vrijstaand bad installatie',
      'Tegelwerk en natuursteen',
      'Sanitair installatie',
      'Hangtoilet en inbouwsystemen',
      '3D badkamerontwerp',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complete badkamer renovatie',
          serviceType: 'Bathroom renovation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxe badkamer op maat',
          serviceType: 'Custom luxury bathroom design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Badkamer ontwerp en advies',
          serviceType: 'Bathroom design consultation',
        },
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: ['https://www.instagram.com/badkamerstijl'],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Badkamer Renovatie ${city.name}`,
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
        name: `Hoe lang duurt een badkamer renovatie in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Een complete badkamer renovatie in ${city.name} duurt gemiddeld 2 tot 4 weken, afhankelijk van de omvang en materiaalkeuze.`,
        },
      },
      {
        '@type': 'Question',
        name: `Wat kost een badkamer renovatie in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In ${city.name} liggen de kosten meestal tussen €5.000 (budget) en €40.000+ (luxe). De gemiddelde renovatie kost tussen €10.000 en €25.000.`,
        },
      },
      {
        '@type': 'Question',
        name: `Werken jullie ook in ${city.areas[0]}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, wij werken in heel ${city.name} inclusief ${city.areas.join(', ')}.`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CityPage city={city} nearbyCities={nearbyCities} recentArticles={recentArticles} />
    </>
  );
}
