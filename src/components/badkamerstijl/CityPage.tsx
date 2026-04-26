'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import type { City } from '@/data/cities';

const SERVICES = [
  {
    title: 'Complete badkamer renovatie',
    desc: 'Van sloop tot oplevering verzorgen wij het volledige traject. Eén aanspreekpunt, één planning, één resultaat.',
    image: '/badkamerstijl/2200xxs(43).jpg',
  },
  {
    title: 'Luxe badkamers op maat',
    desc: 'Volledig op maat ontworpen badkamers met natuursteen, marmer en topmerken in sanitair en kranen.',
    image: '/badkamerstijl/2200xxs(25).jpg',
  },
  {
    title: 'Inloopdouche plaatsen',
    desc: 'Vakkundige aanleg van inloopdouches met perfect afschot, betrouwbare afdichting en strakke afwerking.',
    image: '/badkamerstijl/2200xxs(46).jpg',
  },
  {
    title: 'Badkamer ontwerp & advies',
    desc: '3D-ontwerp, materiaaladvies en een doordachte plattegrond — zodat je vooraf precies weet wat je krijgt.',
    image: '/badkamerstijl/2200xxs(24).jpg',
  },
  {
    title: 'Tegels & afwerking',
    desc: 'Van klassieke visgraat tot grootformaat keramiek — wij leggen elke tegel met de precisie die jouw badkamer verdient.',
    image: '/badkamerstijl/2200xxs(27).jpg',
  },
  {
    title: 'Sanitair installatie',
    desc: 'Wastafels, hangtoiletten, baden en kranen van topmerken — vakkundig geïnstalleerd door onze eigen monteurs.',
    image: '/badkamerstijl/2200xxs(29).jpg',
  },
];

const USPS = [
  {
    title: 'Eigen vakmensen',
    desc: 'Wij werken niet met onderaannemers. Onze eigen monteurs, tegelzetters en loodgieters zorgen voor consistente kwaliteit.',
  },
  {
    title: 'Vaste prijs vooraf',
    desc: 'Geen verrassingen achteraf. Je krijgt een complete prijsopgave inclusief alle materialen en arbeid.',
  },
  {
    title: 'Eén aanspreekpunt',
    desc: 'Eén projectleider regelt alles van planning tot oplevering. Persoonlijk contact gedurende het hele traject.',
  },
  {
    title: 'Vakkundige garantie',
    desc: 'Wij staan achter ons werk. Op installatie en montage geven we een uitgebreide garantie.',
  },
];

const PRICE_TIERS = [
  {
    label: 'Budget',
    range: '€5.000 — €10.000',
    desc: 'Een nette renovatie met betrouwbaar sanitair, standaard tegelwerk en een verzorgde afwerking.',
    highlights: ['Sanitair & kraanwerk', 'Standaard tegels', 'Inloopdouche of bad'],
  },
  {
    label: 'Midden',
    range: '€10.000 — €20.000',
    desc: 'Ruime keuze in materialen en sanitair, met aandacht voor detail en sfeer in de hele ruimte.',
    highlights: ['Designsanitair', 'Grootformaat tegels', 'Inbouwspots & spiegelverlichting'],
    featured: true,
  },
  {
    label: 'Luxe',
    range: '€20.000 — €40.000+',
    desc: 'Volledig op maat ontworpen droombadkamer met topmerken, natuursteen en bijzondere oplossingen.',
    highlights: ['Marmer & natuursteen', 'Topmerken (Hansgrohe, Dornbracht, Vola)', 'Vrijstaand bad & maatwerk meubels'],
  },
];

function buildFaqs(city: City) {
  return [
    {
      q: `Hoe lang duurt een badkamer renovatie in ${city.name}?`,
      a: `Een complete badkamer renovatie in ${city.name} duurt gemiddeld 2 tot 4 weken. De exacte planning hangt af van de omvang van de werkzaamheden, de gekozen materialen en eventuele leidingaanpassingen. Wij plannen het werk zo strak mogelijk en houden je doorlopend op de hoogte.`,
    },
    {
      q: `Wat kost een gemiddelde badkamer renovatie in ${city.name}?`,
      a: `In ${city.name} liggen de kosten voor een complete badkamer renovatie meestal tussen de €10.000 en €25.000, afhankelijk van afmetingen, materiaalkeuze en sanitair. Tijdens het gratis adviesgesprek krijg je een transparante prijsopgave.`,
    },
    {
      q: `Werken jullie ook in ${city.areas[0]} en omliggende wijken?`,
      a: `Ja, wij realiseren badkamers in heel ${city.name} — inclusief ${city.areas.join(', ')} en alle andere wijken. Onze monteurs reizen vanuit Amsterdam-Duivendrecht naar je locatie.`,
    },
    {
      q: 'Kan ik mijn badkamer blijven gebruiken tijdens de renovatie?',
      a: 'Tijdens een complete renovatie is de badkamer enkele weken niet bruikbaar. Wij bespreken dit vooraf en denken mee over tijdelijke oplossingen, zoals een mobiele douche of het gebruik van een tweede badkamer.',
    },
    {
      q: 'Verzorgen jullie ook het ontwerp en de materiaalkeuze?',
      a: 'Absoluut. Van 3D-ontwerp tot het selecteren van tegels, sanitair en kranen — onze ontwerpers begeleiden je in elke keuze. Je hoeft niets zelf te regelen.',
    },
  ];
}

export default function CityPage({
  city,
  nearbyCities,
}: {
  city: City;
  nearbyCities: City[];
}) {
  const faqs = buildFaqs(city);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Breadcrumb */}
      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-white/30">/</span>
        <Link href="/badkamerstijl" className="hover:text-white transition-colors">
          Badkamerstijl
        </Link>
        <span className="text-white/30">/</span>
        <span className="text-white">{city.name}</span>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[85vh] min-h-[640px] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(24).jpg"
            alt={`Luxe badkamer renovatie in ${city.name}`}
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
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            <span className="w-8 h-px bg-white/60" />
            {city.province}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.02] tracking-[-0.02em] text-white max-w-5xl"
          >
            Badkamer Renovatie in <span className="italic">{city.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
          >
            Luxe badkamers op maat, ontworpen en gerealiseerd door onze eigen vakmensen. Van eerste schets tot de laatste tegel — alles uit één hand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/adviesgesprek"
              className="group inline-flex items-center justify-center gap-3 bg-white text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-teal hover:text-white transition-colors duration-300"
            >
              Gratis adviesgesprek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Bekijk ons werk
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ INTRO ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Over {city.name})
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
              Jouw droombadkamer
              <br />
              <span className="italic">in {city.name}</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-xl md:text-2xl lg:text-[1.75rem] font-light leading-[1.5] text-bsv2-charcoal/85"
          >
            {city.description}
          </motion.p>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
                (Diensten)
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                Wat wij doen
                <br />
                <span className="italic">in {city.name}</span>
              </h2>
            </div>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all"
            >
              Alle diensten <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/5] relative overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-cormorant text-2xl md:text-[1.65rem] font-light mb-3">
                  {service.title}
                </h3>
                <p className="text-bsv2-grey text-sm leading-relaxed">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WAAROM (USPs) ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(37).jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/75 z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <span className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Waarom Badkamerstijl)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 max-w-3xl leading-[1.1]">
            Waarom Badkamerstijl
            <br />
            <span className="italic">in {city.name}?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-5xl">
            {USPS.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-white/15 pt-6"
              >
                <span className="text-white/40 text-[11px] tracking-[0.15em] mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-white mb-3">
                  {usp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRIJZEN ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Prijsindicatie)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 max-w-3xl">
            Wat kost een badkamer
            <br />
            <span className="italic">renovatie in {city.name}?</span>
          </h2>
          <p className="text-bsv2-grey text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            Een transparante richtlijn voor wat je in {city.name} kunt verwachten. Tijdens het gratis adviesgesprek geven we een nauwkeurige prijsopgave op maat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PRICE_TIERS.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`p-8 md:p-10 rounded-2xl flex flex-col ${
                  tier.featured
                    ? 'bg-bsv2-charcoal text-white'
                    : 'bg-white text-bsv2-charcoal border border-bsv2-charcoal/[0.06]'
                }`}
              >
                <span
                  className={`text-[11px] tracking-[0.2em] uppercase mb-4 ${
                    tier.featured ? 'text-white/50' : 'text-bsv2-grey'
                  }`}
                >
                  {tier.label}
                </span>
                <p className="font-cormorant text-3xl md:text-[2.25rem] font-light mb-4 leading-tight">
                  {tier.range}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    tier.featured ? 'text-white/70' : 'text-bsv2-grey'
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mt-auto">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className={`flex items-start gap-3 text-sm ${
                        tier.featured ? 'text-white/85' : 'text-bsv2-charcoal/85'
                      }`}
                    >
                      <span
                        className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured ? 'bg-bsv2-pink' : 'bg-bsv2-teal'
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

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <Image
              src="/badkamerstijl/2200xxs(44).jpg"
              alt={`Luxe badkamer ontwerp ${city.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              Klaar voor jouw
              <br />
              <span className="italic">droombadkamer in {city.name}?</span>
            </h2>
            <p className="text-bsv2-grey text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Plan een vrijblijvend adviesgesprek. Wij komen langs, luisteren naar jouw wensen en maken een 3D-ontwerp met transparante prijsopgave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/adviesgesprek"
                className="group inline-flex items-center justify-center gap-3 bg-bsv2-teal text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-charcoal transition-colors"
              >
                Gratis adviesgesprek aanvragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 border border-bsv2-charcoal text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-charcoal hover:text-white transition-colors"
              >
                Bekijk portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Veelgestelde vragen)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-14">
            Vragen over jouw
            <br />
            <span className="italic">badkamer in {city.name}</span>
          </h2>

          <div className="divide-y divide-bsv2-charcoal/10 border-y border-bsv2-charcoal/10">
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
                    <span className="font-cormorant text-xl md:text-2xl font-light leading-snug pr-6 group-hover:text-bsv2-teal transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-1 w-9 h-9 rounded-full border border-bsv2-charcoal/20 flex items-center justify-center group-hover:bg-bsv2-charcoal group-hover:text-white group-hover:border-bsv2-charcoal transition-colors">
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
                    <p className="pb-7 text-bsv2-grey text-base leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ INTERNAL LINKS — RELATED PAGES ═══════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
            (Volgende stappen)
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12 max-w-3xl">
            Ontdek meer over een badkamer
            <br />
            <span className="italic">renovatie in {city.name}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Link
              href="/kosten"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Kosten
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Wat kost een badkamer renovatie?
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Van € 5.000 tot € 60.000+ — bekijk de drie prijsklassen en alle factoren die de prijs bepalen.
              </p>
            </Link>

            <Link
              href="/prijzen"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Pakketten
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Vier pakketten met inclusief-lijst
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Basis tot Luxe op maat, met interactieve calculator om jouw badkamer in {city.name} door te rekenen.
              </p>
            </Link>

            <Link
              href="/stijlen"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Stijlen
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Welke stijl past bij jou?
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Modern, klassiek, warm natuurlijk of boutique hotel — vind de stijl die bij jouw woning in {city.name} past.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ NEARBY CITIES ═══════════════ */}
      {nearbyCities.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-t border-bsv2-charcoal/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Ook actief in)
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12 max-w-3xl">
              Badkamer renovatie in
              <br />
              <span className="italic">de regio {city.name}</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  href={`/${nc.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden block bg-bsv2-charcoal"
                >
                  <Image
                    src="/badkamerstijl/2200xxs(30).jpg"
                    alt={`Badkamer renovatie ${nc.name}`}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-2">
                      {nc.province}
                    </span>
                    <p className="font-cormorant text-2xl md:text-[1.75rem] font-light text-white leading-tight">
                      {nc.name}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-white/70 text-xs group-hover:text-white transition-colors">
                      Bekijken <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ FOOTER ═══════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 md:grid-cols-6 text-sm text-bsv2-grey mb-10">
            <Link href="/" className="hover:text-bsv2-charcoal transition-colors">
              Home
            </Link>
            <Link href="/diensten" className="hover:text-bsv2-charcoal transition-colors">
              Diensten
            </Link>
            <Link href="/stijlen" className="hover:text-bsv2-charcoal transition-colors">
              Stijlen
            </Link>
            <Link href="/portfolio" className="hover:text-bsv2-charcoal transition-colors">
              Portfolio
            </Link>
            <Link href="/adviesgesprek" className="hover:text-bsv2-charcoal transition-colors">
              Contact
            </Link>
            <Link href="/badkamerstijl" className="hover:text-bsv2-charcoal transition-colors">
              Badkamerstijl
            </Link>
          </div>
          <div className="pt-8 border-t border-bsv2-charcoal/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-bsv2-grey">
            <p>&copy; 2025 Badkamerstijl. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/privacybeleid" className="hover:text-bsv2-charcoal transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-bsv2-charcoal transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
