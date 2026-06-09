import type { Metadata } from 'next';
import SaninetPage from '@/components/badkamerstijl/SaninetPage';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/saninet`;

const TITLE = 'Saninet 3D badkamerontwerp op locatie | Badkamerstijl';
const DESCRIPTION =
  'Zie je badkamer voordat we beginnen. Samen ontwerpen we jouw badkamer in 3D met Saninet, 100% naar wens en op de locatie van jouw keuze. Geen gokwerk, geen verrassingen.';

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
    images: [{ url: '/badkamerstijl/saninet-3d.jpg', width: 1129, height: 819 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  serviceType: '3D badkamerontwerp',
  name: 'Saninet 3D badkamerontwerp op locatie',
  description: DESCRIPTION,
  provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}#localbusiness`, name: 'Badkamerstijl' },
  areaServed: { '@type': 'Country', name: 'Nederland' },
  url: PAGE_URL,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Saninet 3D', item: PAGE_URL },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SaninetPage />
    </>
  );
}
