'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Plus, Minus, Phone } from 'lucide-react';
import { useState } from 'react';
import type { WoonklasseCity } from '@/data/woonklasse-cities';
import type { BlogPost } from '@/data/blog/index';
import { CONTACT } from '@/data/contact';
import OfferteFormEmbed from '@/components/woonklasse/OfferteFormEmbed';

// Statisch proces, identiek voor elke stad. Bewust gedupliceerd met
// AmsterdamPage: een 4-regelige lijst is goedkoper dan een gedeelde module.
const STEPS = [
  {
    n: '01',
    title: 'Overleg',
    desc: 'We komen langs en kijken samen wat je wil. Geen verkooppraat, gewoon goed luisteren.',
  },
  {
    n: '02',
    title: 'Offerte',
    desc: 'Een schone, vaste prijs vooraf. Alles staat erin, zodat je nooit voor verrassingen komt te staan.',
  },
  {
    n: '03',
    title: 'Uitvoering',
    desc: 'Eigen vakmensen voeren het werk snel en schoon uit, met een vaste projectleider als aanspreekpunt.',
  },
  {
    n: '04',
    title: 'Klaar',
    desc: 'We leveren netjes op en jij geniet ervan. Met garantie, voor de zekerheid op lange termijn.',
  },
];

const SERVICES = [
  {
    title: 'Totaal renovatie & nieuwbouw',
    desc: 'Complete renovaties en nieuwbouw van casco tot oplevering: één aanspreekpunt, één planning, één eindverantwoordelijke.',
    image: '/woonklasse/canal-residence-1.jpg',
  },
  {
    title: 'Sanitair specialist',
    desc: 'Eigen sanitair specialisten voor complete badkamers, leidingwerk en design afwerking uit één hand.',
    image: '/woonklasse/apartment-amsterdam-2.jpg',
  },
  {
    title: 'Woningonderhoud',
    desc: 'Periodiek onderhoud, schadeherstel en preventief werk dat uw woning in topconditie houdt.',
    image: '/woonklasse/villa-bergen-2.jpg',
  },
  {
    title: 'Keukens',
    desc: 'Maatwerk keukens met sloop, leidingwerk, tegelwerk en montage, alles uit één hand zonder gedoe.',
    image: '/woonklasse/penthouse-amsterdam-3.jpg',
  },
  {
    title: 'Dakwerk',
    desc: 'Dakvernieuwing, dakkapellen, dakisolatie en goten, wind en water dicht door eigen dakdekkers.',
    image: '/woonklasse/villa-bergen-3.jpg',
  },
  {
    title: 'Schilderwerk',
    desc: 'Schilderwerk binnen en buiten dat jaren meegaat, met voorbehandeling, plamuren en twee lagen op maat.',
    image: '/woonklasse/canal-residence-4.jpg',
  },
  {
    title: 'Loodgieterwerk',
    desc: 'Sanitair, leidingwerk, vloerverwarming en lekkages, opgelost door erkende loodgieters in vaste dienst.',
    image: '/woonklasse/apartment-amsterdam-4.jpg',
  },
  {
    title: 'Elektra',
    desc: 'Groepenkasten, bedrading, slimme verlichting en data aansluitingen, uitgevoerd volgens NEN 1010.',
    image: '/woonklasse/penthouse-zoetermeer-4.jpg',
  },
];

const USPS = [
  {
    title: 'Eigen vakmensen',
    desc: 'Wij werken niet met losse onderaannemers. Onze timmerlieden, loodgieters en elektriciens zitten allemaal in vaste dienst, zodat de kwaliteit en de planning in eigen hand blijven.',
  },
  {
    title: 'Vaste prijs vooraf',
    desc: 'Een complete offerte met alle materialen, arbeid en bouwkundige posten. Geen verrassingen op het gebied van meerwerk achteraf, wat we afspreken staat vast.',
  },
  {
    title: 'Eén projectleider',
    desc: 'Eén vaste contactpersoon van eerste opname tot oplevering. U weet altijd wie u belt, en die persoon weet altijd waar uw project staat.',
  },
  {
    title: 'Garantie tot 10 jaar',
    desc: 'Tot 10 jaar garantie op constructief werk en 5 jaar op installaties. Wij komen terug als dat nodig is, zonder gedoe.',
  },
];

const PRICE_TIERS = [
  {
    label: 'Budget',
    range: 'Tussen €8.000 en €25.000',
    desc: 'Doelgerichte aanpak voor één ruimte of klus, bijvoorbeeld een keukenrenovatie, badkamer of dakkapel.',
    highlights: [
      'Eén ruimte of vakgebied',
      'Standaard materialen',
      'Heldere planning van 2 tot 4 weken',
    ],
  },
  {
    label: 'Standaard',
    range: 'Tussen €25.000 en €60.000',
    desc: 'Meerdere ruimtes of een aanbouw, denk aan keuken plus woonkamer, of een uitbouw met dakopbouw.',
    highlights: [
      'Meerdere vakgebieden gecombineerd',
      'Doordacht ontwerp en materiaaladvies',
      'Doorlooptijd 6 tot 12 weken',
    ],
    featured: true,
  },
  {
    label: 'Premium',
    range: 'Tussen €60.000 en €150.000',
    desc: 'Complete verbouwing met aanbouw, dakopbouw of grootschalige indelingsverandering.',
    highlights: [
      'Volledige verbouwing van een woonlaag of casco',
      'Hoogwaardige materialen en installaties',
      'Doorlooptijd 3 tot 6 maanden',
    ],
  },
  {
    label: 'Maatwerk',
    range: '€150.000+',
    desc: 'Sleutelklare verbouwing of nieuwbouw op maat, van fundering tot oplevering, alles uit één hand.',
    highlights: [
      'Architect, constructeur en aannemer in één traject',
      'Topafwerking en exclusieve materialen',
      'Eigen projectleider gedurende 6+ maanden',
    ],
  },
];

function buildFaqs(city: WoonklasseCity) {
  return [
    {
      q: `Hoe lang duurt een verbouwing in ${city.name}?`,
      a: `Een gerichte verbouwing in ${city.name}, bijvoorbeeld een keuken of badkamer, duurt 2 tot 4 weken. Een complete woningverbouwing met aanbouw of dakopbouw zit doorgaans op 3 tot 6 maanden. Tijdens de eerste opname maken we een realistische planning op maat.`,
    },
    {
      q: `Wat kost een verbouwing in ${city.name}?`,
      a: `Een eenvoudige renovatie in ${city.name} start rond €8.000. Een volledige verbouwing met aanbouw en nieuwe installaties ligt meestal tussen €60.000 en €150.000. Voor sleutelklare projecten op maat geldt een hoger budget. We geven altijd een vaste prijs voorafgaand aan het werk.`,
    },
    {
      q: `Werken jullie ook in ${city.areas[0]} en omliggende wijken?`,
      a: `Ja, Woonklasse werkt in heel ${city.name}, inclusief ${city.areas.slice(0, 4).join(', ')} en de omliggende dorpen. Ons team rijdt vanuit Amsterdam Duivendrecht naar uw locatie zonder reiskosten in rekening te brengen.`,
    },
    {
      q: `Verzorgen jullie ook de vergunning in ${city.name}?`,
      a: `Voor projecten waarvoor een omgevingsvergunning nodig is, werken wij samen met een vaste architect en constructeur. Wij verzorgen de tekeningen, indienen bij de gemeente ${city.name} en de communicatie tot aan de verlening, zodat u er geen omkijken naar heeft.`,
    },
    {
      q: 'Krijg ik een vaste prijs of werken jullie op nacalculatie?',
      a: 'Standaard werken wij met een vaste aanneemsom. Na de opname en het ontwerp ontvangt u een complete offerte met alle materialen, arbeid en bouwkundige posten. Wijzigingen tijdens het project worden vooraf schriftelijk afgestemd, zo zijn er geen verrassingen achteraf.',
    },
    {
      q: 'Kan ik in de woning blijven wonen tijdens de verbouwing?',
      a: `Bij een gerichte ruimte (keuken, badkamer) is dat in ${city.name} meestal goed te doen, wij richten een tijdelijke voorziening in. Bij een complete verbouwing adviseren we om enkele weken elders te verblijven. We bespreken het scenario tijdens de opname.`,
    },
    {
      q: 'Welke garantie geven jullie op het werk?',
      a: 'Op constructief werk geven wij tot 10 jaar garantie. Op installaties (elektra, sanitair, verwarming) 5 jaar. Op afwerking (tegelwerk, schilderwerk, stuc) 2 jaar. Bij oplevering ontvangt u een garantieboek met alle documentatie en de fabrieksgaranties van toegepaste materialen.',
    },
  ];
}

export default function WoonklasseCityPage({
  city,
  nearbyCities,
  relatedPosts = [],
}: {
  city: WoonklasseCity;
  nearbyCities: WoonklasseCity[];
  relatedPosts?: BlogPost[];
}) {
  const faqs = buildFaqs(city);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* Breadcrumb */}
      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-woon-accent transition-colors">
          Home
        </Link>
        <span className="text-white/30">/</span>
        <Link href="/woonklasse" className="hover:text-woon-accent transition-colors">
          Woonklasse
        </Link>
        <span className="text-white/30">/</span>
        <span className="text-white">{city.name}</span>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[90vh] min-h-[640px] flex items-end overflow-hidden bg-woon-dark">
        <div className="absolute inset-0">
          <Image
            src={city.heroImage ?? '/woonklasse/villa-bergen-1.jpg'}
            alt={`Verbouwing en woningonderhoud in ${city.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />

        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium"
          >
            <span className="w-8 h-px bg-woon-accent/60" />
            {city.province} &middot; Woonklasse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.02] tracking-tight text-white max-w-5xl"
          >
            Aannemer in {city.name}<br />
            <span className="italic text-woon-accent">voor verbouwing &amp; onderhoud</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed font-light"
          >
            Complete verbouwingen, aanbouwen, dakwerk en woningonderhoud, uitgevoerd door eigen vakmensen, met een vaste prijs vooraf en één projectleider als aanspreekpunt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#offerte"
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              Vraag offerte aan voor {city.name}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.telefoon}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ INTRO ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Over {city.name}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15]">
              Bouwen aan uw woning
              <br />
              <span className="not-italic font-medium text-woon-accent">in {city.name}</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-display text-xl md:text-2xl lg:text-[1.65rem] font-light leading-[1.5] text-woon-dark/85">
              {city.intro ?? city.description}
            </p>
            {!city.intro && (
              <p className="text-woon-secondary text-base leading-relaxed">
                Specialisaties in deze regio: {city.context}.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ HOE WERKT HET (4 STAPPEN) ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14 md:mb-20 max-w-2xl">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Hoe werkt het
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
              Van eerste gesprek
              <br />
              <span className="not-italic font-medium text-woon-accent">tot oplevering</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="border-t border-woon-dark/15 pt-6"
              >
                <span className="text-woon-accent text-[11px] tracking-[0.3em] font-medium block mb-4">
                  {step.n}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-woon-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES (8) ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
                Diensten
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
                Wat wij doen
                <br />
                <span className="not-italic font-medium text-woon-accent">in {city.name}</span>
              </h2>
            </div>
            <Link
              href="/woonklasse/diensten"
              className="inline-flex items-center gap-2 text-woon-accent text-sm font-medium hover:gap-3 transition-all"
            >
              Alle diensten <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="group"
              >
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-5 bg-woon-cream">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${city.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 group-hover:text-woon-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-woon-secondary text-sm leading-relaxed">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WAAROM (USPs) ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-woon-dark">
        <div className="absolute inset-0">
          <Image
            src="/woonklasse/canal-residence-3.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-woon-dark via-woon-dark/95 to-woon-dark/90 z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <span className="text-woon-accent text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium">
            Waarom Woonklasse
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-white mb-16 max-w-3xl leading-[1.1]">
            Waarom kiezen voor ons
            <br />
            <span className="not-italic font-medium text-woon-accent">in {city.name}?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-5xl">
            {USPS.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-woon-accent/20 pt-6"
              >
                <span className="text-woon-accent/70 text-[11px] tracking-[0.3em] mb-4 block font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                  {usp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRIJZEN ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Prijsindicatie
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-6 max-w-3xl">
            Wat kost een verbouwing
            <br />
            <span className="not-italic font-medium text-woon-accent">in {city.name}?</span>
          </h2>
          <p className="text-woon-secondary text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            Een transparante richtlijn voor wat u in {city.name} kunt verwachten. Tijdens de gratis opname op locatie maken wij een vaste prijsopgave op maat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICE_TIERS.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`p-7 md:p-8 rounded-2xl flex flex-col ${
                  tier.featured
                    ? 'bg-woon-dark text-white shadow-xl shadow-woon-dark/15'
                    : 'bg-white text-woon-dark border border-woon-dark/[0.06]'
                }`}
              >
                <span
                  className={`text-[11px] tracking-[0.25em] uppercase mb-4 font-medium ${
                    tier.featured ? 'text-woon-accent' : 'text-woon-secondary'
                  }`}
                >
                  {tier.label}
                </span>
                <p className="font-display text-2xl md:text-3xl font-light italic mb-4 leading-tight">
                  {tier.range}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-7 ${
                    tier.featured ? 'text-white/70' : 'text-woon-secondary'
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className={`flex items-start gap-3 text-sm ${
                        tier.featured ? 'text-white/85' : 'text-woon-dark/85'
                      }`}
                    >
                      <span
                        className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured ? 'bg-woon-accent' : 'bg-woon-accent/70'
                        }`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOTOGALERIJ (ASYMMETRISCH) ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Werk in uitvoering
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
              Projecten uit
              <br />
              <span className="not-italic font-medium text-woon-accent">ons portfolio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden rounded-xl bg-woon-cream"
            >
              <Image
                src="/woonklasse/penthouse-amsterdam-1.jpg"
                alt={`Verbouwingsproject Woonklasse ${city.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              {['apartment-amsterdam-2.jpg', 'canal-residence-1.jpg'].map((file, i) => (
                <motion.div
                  key={file}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
                  className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[200px] overflow-hidden rounded-xl bg-woon-cream"
                >
                  <Image
                    src={`/woonklasse/${file}`}
                    alt={`Interieur in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OFFERTEFORMULIER (STAD VOORINGEVULD) ═══════════════ */}
      <section
        id="offerte"
        className="scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Plan een opname
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] mb-6">
              Klaar om uw woning in
              <br />
              <span className="not-italic font-medium text-woon-accent">{city.name} te verbouwen?</span>
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Plan een vrijblijvende opname. Wij komen langs in {city.name}, luisteren naar uw plannen en sturen binnen 10 werkdagen een maatwerk voorstel met vaste prijs.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={CONTACT.telefoonLink}
                className="inline-flex items-center gap-3 text-woon-dark font-medium hover:text-woon-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                Liever even bellen? {CONTACT.telefoon}
              </a>
              <Link
                href="/woonklasse/projecten"
                className="inline-flex items-center gap-2 text-woon-secondary text-sm hover:text-woon-dark transition-colors"
              >
                Bekijk eerst onze projecten
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <OfferteFormEmbed defaultStad={city.name} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Veelgestelde vragen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-14">
            Vragen over verbouwen
            <br />
            <span className="not-italic font-medium text-woon-accent">in {city.name}</span>
          </h2>

          <div className="divide-y divide-woon-dark/10 border-y border-woon-dark/10">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  >
                    <span className="font-display text-xl md:text-[1.4rem] font-light leading-snug pr-6 group-hover:text-woon-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-1 w-9 h-9 rounded-full border border-woon-dark/20 flex items-center justify-center group-hover:bg-woon-dark group-hover:text-woon-accent group-hover:border-woon-dark transition-colors">
                      {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? 'auto' : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-woon-secondary text-base leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ NEARBY CITIES ═══════════════ */}
      {nearbyCities.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-t border-woon-dark/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Ook actief in
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] mb-12 max-w-3xl">
              Verbouwen in
              <br />
              <span className="not-italic font-medium text-woon-accent">de regio {city.name}</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {nearbyCities.map((nc, i) => (
                <Link
                  key={nc.slug}
                  href={`/woonklasse/${nc.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden block bg-woon-dark rounded-xl"
                >
                  <Image
                    src={`/woonklasse/${
                      ['canal-residence-2', 'villa-bergen-4', 'apartment-amsterdam-5', 'penthouse-zoetermeer-2'][i % 4]
                    }.jpg`}
                    alt={`Verbouwing en onderhoud in ${nc.name}`}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-woon-accent text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                      {nc.province}
                    </span>
                    <p className="font-display text-2xl md:text-[1.65rem] font-light italic text-white leading-tight">
                      {nc.name}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-white/80 text-xs group-hover:text-woon-accent transition-colors">
                      Bekijken <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ RELATED GUIDES (BLOG) ═══════════════ */}
      {relatedPosts.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light border-t border-woon-dark/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Lees verder
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] max-w-3xl">
                Praktische gidsen
                <br />
                <span className="not-italic font-medium text-woon-accent">
                  voor uw verbouwing in {city.name}
                </span>
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-woon-dark text-sm font-medium hover:text-woon-accent transition-colors whitespace-nowrap"
              >
                Bekijk alle artikelen <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-woon-cream rounded-sm">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-woon-accent mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-light italic leading-[1.2] mb-3 group-hover:text-woon-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-woon-secondary text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ FOOTER ═══════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-woon-cream border-t border-woon-dark/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 md:grid-cols-4 lg:grid-cols-7 text-sm text-woon-secondary mb-10">
            <Link href="/" className="hover:text-woon-dark transition-colors">
              Home
            </Link>
            <Link href="/woonklasse" className="hover:text-woon-dark transition-colors">
              Woonklasse
            </Link>
            <Link href="/woonklasse/diensten" className="hover:text-woon-dark transition-colors">
              Diensten
            </Link>
            <Link href="/woonklasse/projecten" className="hover:text-woon-dark transition-colors">
              Projecten
            </Link>
            <Link href="/blog" className="hover:text-woon-dark transition-colors">
              Blog
            </Link>
            <Link href="/woonklasse/over-ons" className="hover:text-woon-dark transition-colors">
              Over ons
            </Link>
            <Link href="/woonklasse/offerte" className="hover:text-woon-dark transition-colors">
              Offerte
            </Link>
          </div>
          <div className="pt-8 border-t border-woon-dark/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-woon-secondary">
            <p>&copy; 2026 Woonklasse. Alle rechten voorbehouden. KvK {CONTACT.kvk}.</p>
            <div className="flex gap-6">
              <Link href="/privacybeleid" className="hover:text-woon-dark transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-woon-dark transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
