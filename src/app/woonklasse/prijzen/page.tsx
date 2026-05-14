import type { Metadata } from 'next';
import { CONTACT } from '@/data/contact';
import PrijzenPage from '@/components/woonklasse/PrijzenPage';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/prijzen`;

export const metadata: Metadata = {
  title: 'Wat kost een verbouwing? Prijzen & calculator | Woonklasse',
  description:
    'Wat kost een verbouwing in 2026? Bekijk onze vier prijscategorieën, gebruik de gratis calculator voor renovatie kosten en zie alle aannemer prijzen op één pagina. Vaste prijs vooraf, geen verrassingen.',
  keywords: [
    'wat kost een verbouwing',
    'renovatie kosten',
    'aannemer prijzen',
    'verbouwing prijs per m2',
    'kosten complete verbouwing',
    'aanbouw kosten',
    'prijscalculator verbouwing',
    'woningonderhoud prijzen',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Wat kost een verbouwing? Prijzen & calculator | Woonklasse',
    description:
      'Vier prijscategorieën, een interactieve calculator en alle factoren die uw verbouwingsbudget bepalen, transparant en zonder verrassingen achteraf.',
    url: PAGE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Woonklasse',
    images: [{ url: '/woonklasse/canal-residence-1.jpg', width: 2200, height: 1467 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wat kost een verbouwing? Prijzen & calculator | Woonklasse',
    description:
      'Vier prijscategorieën, een interactieve calculator en alle factoren die uw verbouwingsbudget bepalen.',
  },
};

export default function Page() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Verbouwing en woningonderhoud',
    name: 'Woonklasse, verbouwing en woningonderhoud',
    description:
      'Verbouwingen, woningonderhoud, aanbouwen, dakwerk en installaties met vaste prijs vooraf. Eigen vakmensen, één projectleider, garantie tot 10 jaar.',
    url: PAGE_URL,
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
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Basis: onderhoud en kleine reparaties',
        priceCurrency: 'EUR',
        price: '500',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 500,
          maxPrice: 5000,
          priceCurrency: 'EUR',
        },
        description: 'Kleine reparaties, herstelwerk en gepland onderhoud.',
      },
      {
        '@type': 'Offer',
        name: 'Standaard: renovatie van één ruimte',
        priceCurrency: 'EUR',
        price: '5000',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 5000,
          maxPrice: 15000,
          priceCurrency: 'EUR',
        },
        description: 'Renovatie van keuken, badkamer, toilet of woonkamer inclusief installaties.',
      },
      {
        '@type': 'Offer',
        name: 'Uitgebreid: meerdere ruimtes of aanbouw',
        priceCurrency: 'EUR',
        price: '15000',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 15000,
          maxPrice: 50000,
          priceCurrency: 'EUR',
        },
        description: 'Volledige renovatie van een woonlaag, meerdere ruimtes of een aanbouw.',
      },
      {
        '@type': 'Offer',
        name: 'Maatwerk: sleutelklare totaalrenovatie',
        priceCurrency: 'EUR',
        price: '50000',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 50000,
          priceCurrency: 'EUR',
        },
        description: 'Sleutelklare totaalrenovatie of nieuwbouw op maat, van fundering tot oplevering.',
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
      { '@type': 'ListItem', position: 3, name: 'Prijzen', item: PAGE_URL },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat kost een complete verbouwing in Nederland gemiddeld?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een complete verbouwing van een rijwoning of hoekwoning ligt doorgaans tussen €60.000 en €150.000, exclusief BTW. Bij een vrijstaande woning of een sleutelklare oplevering loopt dit op tot €250.000 of meer. De prijs per m² varieert van ongeveer €750 voor onderhoudswerk tot €2.500 voor luxe maatwerk.',
        },
      },
      {
        '@type': 'Question',
        name: 'Geven jullie een vaste prijs of werken jullie op nacalculatie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standaard werken wij met een vaste aanneemsom. Na de gratis opname en het ontwerp ontvangt u een complete offerte met alle materialen, arbeid en bouwkundige posten. Wijzigingen tijdens het project worden vooraf schriftelijk afgestemd, zo zijn er geen verrassingen achteraf.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoeveel kost een nieuwe badkamer of keuken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een badkamerrenovatie start rond €7.500 en loopt op tot €25.000+ voor luxe maatwerk. Een nieuwe keuken inclusief sloop, leidingen, tegelwerk en plaatsing zit gemiddeld tussen €12.000 en €30.000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat kost een aanbouw of dakopbouw per m²?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een eenvoudige aanbouw start rond €2.000 per m², een aanbouw met grote glaspuien en hoogwaardige afwerking zit tussen €3.000 en €4.000 per m². Een dakopbouw ligt doorgaans tussen €2.500 en €3.500 per m².',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoeveel BTW betaal ik over een verbouwing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Op arbeid bij woningen ouder dan 2 jaar geldt het lage tarief voor de BTW van 9%, een aanzienlijk voordeel ten opzichte van het tarief van 21% op materialen. Wij splitsen dit duidelijk op in de offerte zodat u precies ziet waar het voordeel zit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan ik subsidie krijgen voor mijn verbouwing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voor energiebesparende maatregelen zoals isolatie, warmtepomp, zonnepanelen en HR++ glas geldt de Investeringssubsidie Duurzame Energie (ISDE) en gemeentelijke regelingen. Wij wijzen u tijdens de offerte op de toepasselijke subsidies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke betalingstermijnen hanteren jullie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standaard: 10% bij opdrachtbevestiging, 30% bij aanvang werkzaamheden, 30% halverwege, 25% bij oplevering en 5% na de eindcontrole. U betaalt nooit vooruit voor werk dat nog niet uitgevoerd is.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoe lang duurt het voordat jullie kunnen starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voor kleinere klussen kunnen we doorgaans binnen 2 tot 4 weken starten. Bij grotere verbouwingen zit er gemiddeld 6 tot 12 weken tussen opdrachtbevestiging en bouwstart, afhankelijk van vergunning, ontwerp en materiaallevertijden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke garantie geven jullie op het uitgevoerde werk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tot 10 jaar garantie op constructief werk, 5 jaar op installaties (elektra, sanitair, verwarming) en 2 jaar op afwerking. Bij oplevering ontvangt u een garantieboek met alle documentatie en de fabrieksgaranties van toegepaste materialen.',
        },
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PrijzenPage />
    </>
  );
}
