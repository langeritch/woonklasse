'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import AdPlacement from '@/components/badkamerstijl/AdPlacement';

type Tier = {
  id: string;
  badge: string;
  name: string;
  range: string;
  short: string;
  longSummary: string;
  duration: string;
  bestFor: string;
  image: string;
  highlights: string[];
};

const TIERS: Tier[] = [
  {
    id: 'budget',
    badge: 'Budget',
    name: 'Budget badkamer',
    range: '€ 5.000 — € 10.000',
    short: 'Een nette, functionele renovatie met betrouwbaar sanitair en strak tegelwerk.',
    longSummary:
      'In dit segment renoveer je een kleine of compacte badkamer (tot ca. 5 m²) met betrouwbaar middensegment sanitair, keramische tegels en standaard kraanwerk. Je krijgt een eigentijdse badkamer zonder concessies aan vakmanschap, ideaal voor verhuurders, een tweede badkamer of als slimme update voor een woning die je over een paar jaar weer verkoopt.',
    duration: '1,5 — 2 weken',
    bestFor: 'Kleine badkamers, tweede badkamer, verhuurders',
    image: '/badkamerstijl/2200xxs(46).jpg',
    highlights: [
      'Strippen en afvoeren bestaande badkamer',
      'Keramische tegels (vloer en wand) tot 60×60',
      'Inloopdouche met glaspaneel of douchecabine',
      'Wastafelmeubel 60–80 cm',
      'Geberit inbouwtoilet met soft-close zitting',
      'Thermostatische douchekraan + wastafelmengkraan',
      'Mechanische ventilatie en inbouwspots',
      'Aansluiten op bestaande leidingen',
    ],
  },
  {
    id: 'mid-range',
    badge: 'Populair',
    name: 'Mid-range badkamer',
    range: '€ 10.000 — € 20.000',
    short: 'Designsanitair, grootformaat tegels en topafwerking — onze populairste keuze.',
    longSummary:
      'De gulden middenweg en veruit de meest gekozen renovatie. Je werkt met designsanitair van Villeroy & Boch, Duravit of vergelijkbare merken, grootformaat tegels (60×120 of visgraat 30×120), Grohe of Hansgrohe kraanwerk en een LED-spiegel met dimfunctie. Een badkamer die voelt als die van een nieuwbouwhuis in topafwerking, zonder de prijs van designermerken.',
    duration: '2,5 — 3,5 weken',
    bestFor: 'Gemiddelde badkamer (5–8 m²), eigen woning, kwaliteitsbewuste klant',
    image: '/badkamerstijl/2200xxs(29).jpg',
    highlights: [
      'Alles uit Budget, plus:',
      'Designsanitair (Villeroy & Boch, Duravit)',
      'Grootformaat tegels 60×120 of visgraat 30×120',
      'Inloopdouche met glaspaneel en regendouche',
      'Wastafelmeubel op maat 80–120 cm met dubbele lade',
      'Designkraanwerk Grohe of Hansgrohe',
      'LED-spiegel met dimfunctie en demist',
      'Elektrische vloerverwarming met klokthermostaat',
      'Sfeerverlichting met aparte schakelgroep',
    ],
  },
  {
    id: 'premium',
    badge: 'Premium',
    name: 'Premium & Luxe badkamer',
    range: '€ 20.000 — € 60.000+',
    short: 'Topmerken, vrijstaand bad, maatwerk meubels en natuursteen — een droombadkamer.',
    longSummary:
      'In dit segment ontwerpen we een volledige droombadkamer op maat. Topmerken zoals Hansgrohe AXOR, Duravit en Geberit AquaClean, een vrijstaand bad, maatwerk meubels in fineer of gelakt MDF en grootformaat natuursteen-look porselein. Bij budgetten boven € 35.000 voegen we echte natuursteen, designmerken (Dornbracht, Vola, Antonio Lupi) en eventueel een sauna of stoomdouche toe — een hotel-allure thuis.',
    duration: '3 — 6 weken',
    bestFor: 'Master bathroom, ruime woning, hoogwaardig segment',
    image: '/badkamerstijl/2200xxs(24).jpg',
    highlights: [
      'Alles uit Mid-range, plus:',
      'Topmerken: Hansgrohe AXOR, Duravit, Geberit AquaClean',
      'Vrijstaand bad in acryl, composiet of solid surface',
      'Maatwerk meubels in fineer of mat gelakt MDF',
      'Grootformaat natuursteen of natuursteen-look (90×90 / 120×280)',
      'Geberit AquaClean douche-WC',
      'Hydraulische vloerverwarming op CV',
      '3D-ontwerptraject met materiaalcollage',
      'Optioneel: sauna, stoomdouche, smart home',
    ],
  },
];

const FACTORS = [
  {
    title: 'Oppervlakte van de badkamer',
    text: 'Hoe groter de badkamer, hoe meer materialen en arbeid. Een badkamer van 4 m² renoveer je vanaf ongeveer € 6.000, een 10 m² badkamer kost al snel het dubbele in dezelfde uitvoering. Per vierkante meter reken je grofweg € 1.500 (basis) tot € 7.000 (luxe).',
  },
  {
    title: 'Materiaalkeuze',
    text: 'Het verschil tussen keramische standaardtegels en echte marmer is groot. Sanitair van topmerken kan de prijs verdubbelen ten opzichte van middensegment. Hetzelfde geldt voor kranen — een chrome standaardkraan kost een fractie van een mat zwart designkraan van Dornbracht.',
  },
  {
    title: 'Leidingwerk en aansluitingen',
    text: 'Behoud van bestaande aansluitingen is voordelig. Het verplaatsen van toilet, douche of wastafel betekent extra hak- en breekwerk en nieuw leidingwerk. Reken op 10–25% extra kosten bij ingrijpend verleggen van de installaties.',
  },
  {
    title: 'Vloerverwarming',
    text: 'Elektrische vloerverwarming is voordeliger om aan te leggen (€ 500–1.200 voor een gemiddelde badkamer). Hydraulische vloerverwarming op CV is comfortabeler en zuiniger op lange termijn, maar kost € 1.500–3.000 incl. aansluiting op de cv-installatie.',
  },
  {
    title: 'Bouwkundige aanpassingen',
    text: 'Muren verplaatsen, een dakraam toevoegen of een nis maken vraagt extra werk. Voor monumentale panden of appartementen met VvE-eisen geldt vaak aanvullende vergunningplicht en geluidsisolatie.',
  },
  {
    title: 'Toevoegingen en luxe-extras',
    text: 'Een vrijstaand bad voegt € 2.000–8.000 toe, een sauna € 4.000–12.000, een stoomdouche € 3.000–7.000. Dubbele wastafel, inbouwnis met LED en regendouche zijn populaire upgrades die elk € 500–2.000 toevoegen.',
  },
  {
    title: 'Bereikbaarheid van de woning',
    text: 'Een appartement op de derde verdieping zonder lift of een woning in een autoluwe binnenstad maakt het aanvoeren van materialen en afvoeren van puin complexer. Hier reken je op een toeslag van 3–7% op de aanneemsom.',
  },
  {
    title: 'Asbest en legionella',
    text: 'In woningen van vóór 1994 kan asbest aanwezig zijn dat eerst gesaneerd moet worden (€ 1.500–4.000). Bij gedeelde leidingen in appartementencomplexen letten we op legionella-risico\'s en passen we de installatie aan volgens NEN 1006.',
  },
];

const SIZE_PRICES = [
  {
    size: 'Klein (≤ 5 m²)',
    budget: '€ 5.000 — € 8.000',
    mid: '€ 10.000 — € 14.000',
    premium: '€ 18.000 — € 30.000',
  },
  {
    size: 'Gemiddeld (5–8 m²)',
    budget: '€ 7.000 — € 10.000',
    mid: '€ 13.000 — € 20.000',
    premium: '€ 22.000 — € 40.000',
  },
  {
    size: 'Groot (8–12 m²)',
    budget: '€ 9.000 — € 13.000',
    mid: '€ 18.000 — € 28.000',
    premium: '€ 30.000 — € 55.000',
  },
  {
    size: 'Zeer groot (12+ m²)',
    budget: '€ 12.000 — € 16.000',
    mid: '€ 22.000 — € 35.000',
    premium: '€ 40.000 — € 60.000+',
  },
];

const FAQS = [
  {
    q: 'Wat kost een badkamer renovatie gemiddeld in Nederland?',
    a: 'Een gemiddelde complete badkamer renovatie in Nederland kost tussen de € 10.000 en € 20.000. Voor een eenvoudige badkamer met basis sanitair betaal je vanaf € 5.000, een luxe maatwerk badkamer komt al snel boven de € 20.000 uit. De exacte prijs hangt af van de oppervlakte, materiaalkeuze en hoeveelheid leidingwerk.',
  },
  {
    q: 'Wat zit er in de prijs van een badkamer renovatie?',
    a: 'Bij Badkamerstijl is de prijs altijd compleet: sloop en afvoer, leidingwerk, tegelwerk, sanitair, kranen, verlichting, ventilatie, vloerverwarming en alle arbeid. Je krijgt een gespecificeerde offerte zodat je per onderdeel ziet wat je betaalt — geen verrassingen achteraf.',
  },
  {
    q: 'Wat kost een kleine badkamer renovatie van 4 m²?',
    a: 'Een kleine badkamer van 4 tot 5 m² renoveren kost gemiddeld tussen de € 5.000 en € 10.000 voor een nette uitvoering met betrouwbaar sanitair. Voor een designuitvoering met grootformaat tegels en designkranen reken je op € 10.000 tot € 15.000.',
  },
  {
    q: 'Wat kost een grote luxe badkamer van 10 m² of meer?',
    a: 'Een ruime badkamer van 10 m² of meer in luxe uitvoering — met vrijstaand bad, dubbele wastafel, inloopdouche en topmerken — kost tussen de € 25.000 en € 60.000+. Bij echte natuursteen en designmerken zoals Dornbracht of Vola loopt dit verder op tot boven de € 80.000.',
  },
  {
    q: 'Hoeveel arbeidsloon zit er in een badkamer renovatie?',
    a: 'Het arbeidsloon bedraagt doorgaans 40 tot 50% van de totale aanneemsom. Voor een badkamer van € 15.000 betekent dit ongeveer € 6.000 tot € 7.500 aan arbeid voor sloopwerk, leidingen, tegelzetwerk, sanitair installeren en afmonteren. De rest gaat op aan materialen.',
  },
  {
    q: 'Hoe lang duurt een complete badkamer renovatie?',
    a: 'Een complete badkamer renovatie duurt gemiddeld 2 tot 4 weken. Een eenvoudige badkamer is in 1,5 tot 2 weken klaar, een premium of luxe uitvoering met maatwerk meubels en natuursteen vraagt 3 tot 6 weken. Wij plannen het werk in één onafgebroken doorloop, zodat je niet wekenlang met een halve badkamer zit.',
  },
  {
    q: 'Kan ik een badkamer renovatie aftrekken van de belasting?',
    a: 'Een reguliere badkamer renovatie is niet aftrekbaar. Wel geldt het lage btw-tarief van 9% op arbeid bij woningen ouder dan 2 jaar — dit is al verwerkt in onze offertes. Bij energiebesparende ingrepen (waterzuinige kranen, warmtepomp-aansluiting) kunnen subsidies van toepassing zijn.',
  },
  {
    q: 'Krijg ik een vaste prijs of werken jullie met nacalculatie?',
    a: 'Wij werken altijd met een vaste aanneemsom op basis van de afgestemde offerte. Geen verrassingen achteraf. Alleen bij door jou gewenste wijzigingen of uitbreidingen maken wij een vooraf goedgekeurde meerwerk-opgave.',
  },
];

const CITY_LINKS = [
  { name: 'Amsterdam', slug: 'amsterdam' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Utrecht', slug: 'utrecht' },
  { name: 'Eindhoven', slug: 'eindhoven' },
  { name: 'Haarlem', slug: 'haarlem' },
];

export default function KostenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="text-white/30">/</span>
        <Link href="/badkamerstijl" className="hover:text-white transition-colors">Badkamerstijl</Link>
        <span className="text-white/30">/</span>
        <span className="text-white">Kosten</span>
      </nav>

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(29).jpg"
            alt="Wat kost een badkamer renovatie? Prijsoverzicht door Badkamerstijl"
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
            Kosten 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.02] tracking-[-0.02em] text-white max-w-5xl"
          >
            Wat kost een
            <br />
            <span className="italic">badkamer renovatie?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
          >
            In Nederland kost een complete badkamer renovatie tussen de <strong className="text-white">€ 5.000 en € 60.000+</strong>. In deze gids ontdek je per prijsklasse precies wat je krijgt, welke factoren de prijs bepalen en hoe je grip houdt op je budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/adviesgesprek"
              className="group inline-flex items-center justify-center gap-3 bg-white text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-teal hover:text-white transition-colors"
            >
              Gratis offerte aanvragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/prijzen#calculator"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Direct naar prijscalculator
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO / SHORT ANSWER */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[1100px] mx-auto">
        <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
          (Het korte antwoord)
        </span>
        <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-8">
          De gemiddelde badkamer renovatie in 2026
          <br />
          <span className="italic">kost € 10.000 tot € 20.000</span>
        </h2>
        <div className="space-y-6 text-bsv2-charcoal/85 text-lg leading-relaxed">
          <p>
            Onze ervaring uit honderden gerealiseerde projecten in heel Nederland: een complete renovatie van een badkamer van gemiddelde grootte (5–8 m²), inclusief sloopwerk, nieuw leidingwerk, tegels, sanitair, kraanwerk, vloerverwarming, ventilatie en alle arbeid, valt vrijwel altijd binnen <strong>€ 10.000 — € 20.000</strong>.
          </p>
          <p>
            Onder de € 10.000 spreken we over een <strong>budget badkamer</strong> — een degelijke renovatie met betrouwbaar middensegment sanitair. Boven de € 20.000 begint het <strong>premium en luxe segment</strong> — designmerken, vrijstaand bad, maatwerk meubels en natuursteen.
          </p>
          <p className="text-bsv2-grey text-base">
            Hieronder leggen we precies uit wat je per prijsklasse krijgt, en welke factoren bepalen waar jouw badkamer in valt.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
                (Drie prijsklassen)
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                Budget, mid-range
                <br />
                <span className="italic">of premium</span>
              </h2>
            </div>
            <p className="text-bsv2-grey text-sm max-w-md leading-relaxed">
              Drie heldere prijsklassen op basis van honderden uitgevoerde renovaties. Materialen en afwerkingen zijn op maat aan te passen — bekijk het detailoverzicht op onze <Link href="/prijzen" className="text-bsv2-charcoal underline underline-offset-2 hover:text-bsv2-teal transition-colors">pakkettenpagina</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {TIERS.map((tier, idx) => (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-bsv2-cream border border-bsv2-charcoal/[0.06] rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={tier.image}
                    alt={`${tier.name} — voorbeeld`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-bsv2-charcoal text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                    {tier.badge}
                  </div>
                </div>
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="font-cormorant text-3xl md:text-4xl font-light leading-[1.1] mb-3">
                    {tier.name}
                  </h3>
                  <p className="font-cormorant italic text-bsv2-teal text-2xl md:text-3xl mb-5">
                    {tier.range}
                  </p>
                  <p className="text-bsv2-charcoal/80 text-sm leading-relaxed mb-6">
                    {tier.short}
                  </p>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-bsv2-grey mb-6 pb-6 border-b border-bsv2-charcoal/[0.08]">
                    <div>
                      <dt className="uppercase tracking-[0.15em] mb-1 text-[10px]">Doorlooptijd</dt>
                      <dd className="text-bsv2-charcoal text-sm">{tier.duration}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.15em] mb-1 text-[10px]">Geschikt voor</dt>
                      <dd className="text-bsv2-charcoal text-sm">{tier.bestFor}</dd>
                    </div>
                  </dl>
                  <ul className="space-y-2.5 text-sm text-bsv2-charcoal/85 mb-8 flex-1">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <Check className="w-4 h-4 text-bsv2-teal flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/adviesgesprek"
                    className="group inline-flex items-center justify-between gap-3 text-bsv2-charcoal text-sm font-medium border-t border-bsv2-charcoal/[0.08] pt-5 hover:text-bsv2-teal transition-colors"
                  >
                    Offerte aanvragen
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COPY PER TIER */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[1100px] mx-auto">
        <div className="space-y-16 md:space-y-20">
          {TIERS.map((tier) => (
            <article key={`${tier.id}-detail`} id={tier.id}>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-3 block">
                ({tier.badge})
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-3">
                {tier.name}
              </h2>
              <p className="font-cormorant italic text-bsv2-teal text-xl md:text-2xl mb-6">
                {tier.range}
              </p>
              <p className="text-bsv2-charcoal/85 text-base md:text-lg leading-relaxed">
                {tier.longSummary}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SIZE TABLE */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-bsv2-charcoal text-white">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-4 block">
            (Prijs per oppervlakte)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-12 max-w-3xl">
            Wat kost een badkamer
            <br />
            <span className="italic">per vierkante meter?</span>
          </h2>

          <div className="overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="px-6 md:px-4 py-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-normal">Oppervlakte</th>
                  <th className="px-6 md:px-4 py-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-normal">Budget</th>
                  <th className="px-6 md:px-4 py-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-normal">Mid-range</th>
                  <th className="px-6 md:px-4 py-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-normal">Premium</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_PRICES.map((row) => (
                  <tr key={row.size} className="border-b border-white/10">
                    <td className="px-6 md:px-4 py-5 font-cormorant text-xl md:text-2xl">{row.size}</td>
                    <td className="px-6 md:px-4 py-5 text-white/85 text-sm md:text-base">{row.budget}</td>
                    <td className="px-6 md:px-4 py-5 text-white/85 text-sm md:text-base">{row.mid}</td>
                    <td className="px-6 md:px-4 py-5 text-white/85 text-sm md:text-base">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 text-white/60 text-sm leading-relaxed max-w-2xl">
            Alle bedragen zijn richtprijzen inclusief 9% btw op arbeid en 21% op materialen. Voor een exacte offerte komen wij vrijblijvend bij je langs om op te meten.
          </p>

          <div className="mt-10">
            <Link
              href="/prijzen#calculator"
              className="group inline-flex items-center gap-3 bg-bsv2-pink text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              Bereken jouw badkamer met de prijscalculator
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start mb-16">
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
                (Wat bepaalt de prijs)
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1]">
                Acht factoren die
                <br />
                <span className="italic">je prijs bepalen</span>
              </h2>
            </div>
            <p className="text-bsv2-grey text-base md:text-lg leading-relaxed">
              Geen twee badkamers zijn hetzelfde. Deze acht factoren bepalen samen of jouw renovatie € 8.000 of € 30.000 kost. Tijdens het adviesgesprek lopen we ze stuk voor stuk met je door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {FACTORS.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                className="border-t border-bsv2-charcoal/15 pt-7"
              >
                <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light mb-3">
                  {f.title}
                </h3>
                <p className="text-bsv2-charcoal/80 text-base leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AD MID-CONTENT */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <AdPlacement slot="badkamerstijl-kosten-mid" variant="banner" />
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
            (Veelgestelde vragen)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-14">
            Antwoorden op
            <br />
            <span className="italic">prijsvragen</span>
          </h2>

          <div className="border-t border-bsv2-charcoal/15">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="border-b border-bsv2-charcoal/15">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-cormorant text-xl md:text-2xl text-bsv2-charcoal">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-9 h-9 rounded-full border border-bsv2-charcoal/20 flex items-center justify-center">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-7 pr-12 text-bsv2-charcoal/80 text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CITY LINKS */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Lokaal actief)
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10 max-w-3xl">
            Badkamer renovatie kosten in
            <br />
            <span className="italic">heel Nederland</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {CITY_LINKS.map((c) => (
              <Link
                key={c.slug}
                href={`/badkamerstijl/${c.slug}`}
                className="inline-flex items-center gap-2 bg-bsv2-cream text-bsv2-charcoal text-sm px-5 py-3 rounded-full border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
              >
                Kosten in {c.name}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Link
              href="/prijzen"
              className="group p-6 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Vergelijk pakketten
              </span>
              <span className="font-cormorant text-xl md:text-2xl">Prijspakketten met inclusief-lijst →</span>
            </Link>
            <Link
              href="/stijlen"
              className="group p-6 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Bekijk stijlen
              </span>
              <span className="font-cormorant text-xl md:text-2xl">Welke stijl past bij jou? →</span>
            </Link>
            <Link
              href="/portfolio"
              className="group p-6 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Inspiratie
              </span>
              <span className="font-cormorant text-xl md:text-2xl">Portfolio van projecten →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-charcoal text-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Volgende stap)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
            Een vaste prijs op maat,
            <br />
            <span className="italic">binnen 5 werkdagen</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Plan een vrijblijvend adviesgesprek. Wij komen langs, meten op, bespreken jouw wensen en sturen binnen 5 werkdagen een gespecificeerde offerte met vaste aanneemsom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adviesgesprek"
              className="group inline-flex items-center justify-center gap-3 bg-bsv2-pink text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              Gratis offerte aanvragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Eerst portfolio bekijken
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
