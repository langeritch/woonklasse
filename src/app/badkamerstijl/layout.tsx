import type { Metadata } from 'next';
import ScrollToTop from '@/components/ScrollToTop';
import BadkamerstijlTransition from '@/components/BadkamerstijlTransition';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';

const SITE_URL = 'https://badkamerstijl.nl';

export const metadata: Metadata = {
  title: 'Badkamerstijl',
  description: 'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. Van ontwerp tot installatie, met oog voor elk detail.',
  openGraph: {
    title: 'Badkamerstijl',
    description: 'Luxe badkamers op maat, van ontwerp tot installatie.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: 'Badkamerstijl',
  alternateName: 'BadkamerStijl',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/icon.svg`,
  },
  image: `${SITE_URL}/badkamerstijl/2200xxs(24).jpg`,
  description:
    'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. Van 3D-ontwerp tot oplevering, met eigen vakmensen, vaste aanneemsom en uitgebreide installatiegarantie.',
  email: CONTACT_BADKAMERSTIJL.email,
  telephone: CONTACT_BADKAMERSTIJL.telefoon,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_BADKAMERSTIJL.adres.straat,
    postalCode: CONTACT_BADKAMERSTIJL.adres.postcode,
    addressLocality: CONTACT_BADKAMERSTIJL.adres.plaats,
    addressCountry: 'NL',
  },
  vatID: CONTACT_BADKAMERSTIJL.btw,
  taxID: CONTACT_BADKAMERSTIJL.kvk,
  areaServed: { '@type': 'Country', name: 'Nederland' },
  sameAs: ['https://www.instagram.com/badkamerstijl'],
};

export default function BadkamerstijlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <ScrollToTop />
      <BadkamerstijlTransition />
      {children}
    </>
  );
}
