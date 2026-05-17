import path from 'path';
import fs from 'fs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/data/cities';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';
import CityLandingPage from '@/components/badkamerstijl/CityLandingPage';

const SITE_URL = 'https://badkamerstijl.nl';

// Bestaande galerijfoto als terugval zolang er nog geen stadsfoto in
// public/badkamerstijl/steden/<slug>.avif staat.
const HERO_FALLBACK = '/badkamerstijl/2200xxs(24).jpg';

/** Standaard stadsfoto-pad zodra het bestand bestaat, anders de terugval.
 *  Zo laadt een nieuwe stadsfoto vanzelf na het droppen van het .avif. */
function resolveHeroImage(slug: string): string {
  const cityPhoto = `/badkamerstijl/steden/${slug}.avif`;
  const onDisk = path.join(process.cwd(), 'public', 'badkamerstijl', 'steden', `${slug}.avif`);
  return fs.existsSync(onDisk) ? cityPhoto : HERO_FALLBACK;
}

// Stad-parameter. Een nieuwe dedicated stadspagina = deze map kopiëren en
// alleen SLUG wijzigen; title, H1, meta-description en schema vullen zich
// automatisch vanuit de stad-data (cities.ts). De stadsfoto laadt vanzelf
// zodra public/badkamerstijl/steden/<slug>.avif bestaat.
const SLUG = 'amsterdam';

export function generateMetadata(): Metadata {
  const city = getCityBySlug(SLUG);
  if (!city) return { title: 'Niet gevonden' };

  // De badkamerstijl-layout heeft title.template '%s | Badkamerstijl', dus
  // het merk NIET zelf in de document-title zetten (anders dubbel).
  const title = `Badkamer renovatie ${city.name}: luxe op maat`;
  const description = `Badkamer renovatie in ${city.name} door Badkamerstijl. Eigen vakmensen, ontwerp in 3D, vaste prijs vooraf en een opleverdatum die staat. Plan een gratis adviesgesprek.`;
  const url = `${SITE_URL}/${city.slug}`;
  const ogImage = `${SITE_URL}${resolveHeroImage(city.slug)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Badkamerstijl`,
      description,
      url,
      type: 'website',
      locale: 'nl_NL',
      siteName: 'Badkamerstijl',
      images: [{ url: ogImage, width: 2200, height: 1467 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Badkamerstijl`,
      description,
    },
  };
}

export default function Page() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();

  const pageUrl = `${SITE_URL}/${city.slug}`;
  const heroImage = resolveHeroImage(city.slug);
  const heroImageAbs = `${SITE_URL}${heroImage}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${pageUrl}#localbusiness`,
    name: 'Badkamerstijl',
    alternateName: `Badkamerstijl, badkamer renovatie in ${city.name}`,
    description: `Luxe badkamer renovatie en op maat gemaakte badkamers in ${city.name}. Volledig ontwerp en realisatie door eigen vakmensen, met vaste prijs vooraf.`,
    url: pageUrl,
    telephone: CONTACT_BADKAMERSTIJL.telefoon,
    email: CONTACT_BADKAMERSTIJL.email,
    image: heroImageAbs,
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
        containedInPlace: { '@type': 'AdministrativeArea', name: city.province },
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
      'Vloerverwarming badkamer',
      '3D badkamerontwerp',
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
      { '@type': 'ListItem', position: 2, name: `Badkamer renovatie ${city.name}`, item: pageUrl },
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
          text: `Een complete badkamer renovatie in ${city.name} duurt gemiddeld 2 tot 4 weken, afhankelijk van de omvang, materiaalkeuze en eventuele leidingaanpassingen. Je krijgt vooraf een vaste planning en een opleverdatum.`,
        },
      },
      {
        '@type': 'Question',
        name: `Wat kost een badkamer renovatie in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In ${city.name} liggen de kosten meestal tussen €5.000 voor een nette renovatie en €40.000+ voor een luxe badkamer op maat. Tijdens het gratis adviesgesprek krijg je een transparante prijsopgave vooraf.`,
        },
      },
      {
        '@type': 'Question',
        name: `Werken jullie ook in ${city.areas[0]} en omliggende wijken?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, wij realiseren badkamers in heel ${city.name} inclusief ${city.areas.join(', ')} en alle andere wijken.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Wie is mijn aanspreekpunt tijdens de verbouwing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je hebt één vast aanspreekpunt van eerste schets tot oplevering. Geen wisselende contactpersonen en geen verrassingen op de eindfactuur.',
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
      <CityLandingPage city={city} heroImage={heroImage} />
    </>
  );
}
