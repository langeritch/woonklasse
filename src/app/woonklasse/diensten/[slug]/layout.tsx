import type { Metadata } from 'next';
import { CONTACT } from '@/data/contact';
import { WOONKLASSE_SERVICES, getServiceBySlug } from '@/data/woonklasse-services';

const SITE_URL = 'https://woonklasse.nl';

export async function generateStaticParams() {
  return WOONKLASSE_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Dienst niet gevonden | Woonklasse' };
  }

  const url = `${SITE_URL}/woonklasse/diensten/${service.slug}`;
  const heroAbsolute = `${SITE_URL}${service.image}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'article',
      locale: 'nl_NL',
      siteName: 'Woonklasse',
      images: [{ url: heroAbsolute, width: 2200, height: 1467, alt: service.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [heroAbsolute],
    },
  };
}

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return <>{children}</>;

  const url = `${SITE_URL}/woonklasse/diensten/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url,
    image: `${SITE_URL}${service.image}`,
    provider: {
      '@type': 'GeneralContractor',
      name: 'Woonklasse',
      url: SITE_URL,
      telephone: CONTACT.telefoon,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.adres.straat,
        postalCode: CONTACT.adres.postcode,
        addressLocality: CONTACT.adres.plaats,
        addressCountry: 'NL',
      },
    },
    areaServed: { '@type': 'Country', name: 'Netherlands' },
    offers: service.tiers.map((t) => ({
      '@type': 'Offer',
      name: `${service.name} — ${t.label}`,
      description: t.desc,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: t.range,
      },
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
      { '@type': 'ListItem', position: 3, name: 'Diensten', item: `${SITE_URL}/woonklasse/diensten` },
      { '@type': 'ListItem', position: 4, name: service.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
