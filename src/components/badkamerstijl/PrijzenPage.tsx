'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

type Tier = {
  id: string;
  label: string;
  range: string;
  summary: string;
  duration: string;
  image: string;
  featured?: boolean;
  includes: string[];
};

const TIERS: Tier[] = [
  {
    id: 'basis',
    label: 'Basis',
    range: '€ 5.000 — € 12.000',
    summary:
      'Een nette renovatie met betrouwbaar middensegment sanitair en strak tegelwerk. Voor wie een verzorgde badkamer wil zonder concessies aan vakmanschap.',
    duration: 'ca. 2 weken',
    image: '/badkamerstijl/2200xxs(46).jpg',
    includes: [
      'Volledig strippen en afvoeren van bestaande badkamer',
      'Standaard tegelwerk vloer en wand (keramiek tot 60×60)',
      'Inloopdouche met glazen wand of douchecabine',
      'Wastafelmeubel 60–80 cm met onderkast',
      'Inbouwtoilet met Geberit spoelreservoir',
      'Thermostatische douchekraan en wastafelmengkraan',
      'Inbouwspots, mechanische ventilatie en basisverlichting',
      'Aansluiting op bestaande leidingen',
      'Eigen monteurs en uitgebreide installatiegarantie',
    ],
  },
  {
    id: 'standaard',
    label: 'Standaard',
    range: '€ 12.000 — € 22.000',
    summary:
      'De populairste keuze. Ruime materiaalkeuze, grootformaat tegels en designkranen — een badkamer die voelt als die van een nieuwbouwhuis in topafwerking.',
    duration: '2,5 — 3,5 weken',
    image: '/badkamerstijl/2200xxs(29).jpg',
    featured: true,
    includes: [
      'Alles uit Basis, plus:',
      'Designsanitair (Villeroy & Boch, Duravit of vergelijkbaar)',
      'Grootformaat tegels (60×120 of 30×120 visgraat)',
      'Inloopdouche met glaspaneel en regendouche set',
      'Wastafelmeubel op maat 80–120 cm met dubbele lade',
      'Geberit hangtoilet met soft-close zitting',
      'Designkraanwerk Grohe of Hansgrohe (chroom of mat zwart)',
      'LED-spiegel met dimfunctie en demist',
      'Elektrische vloerverwarming met klokthermostaat',
      'Sfeerverlichting met aparte schakelgroep',
    ],
  },
  {
    id: 'premium',
    label: 'Premium',
    range: '€ 22.000 — € 35.000',
    summary:
      'Topmerken, een vrijstaand bad en maatwerk meubels. Een badkamer met hotel-allure waar elk element bewust is gekozen.',
    duration: '3 — 4 weken',
    image: '/badkamerstijl/2200xxs(25).jpg',
    includes: [
      'Alles uit Standaard, plus:',
      'Topmerken: Hansgrohe AXOR, Duravit, Geberit AquaClean',
      'Vrijstaand bad in acryl of composiet',
      'Maatwerk meubels in fineer of mat gelakt MDF',
      'Natuursteen-look porselein groot formaat (90×90 of 120×280)',
      'Inloopdouche met thermostaat, regendouche én handdouche',
      'Geberit AquaClean douche-WC',
      'Hydraulische vloerverwarming op CV',
      'Inbouwnis met indirecte LED-verlichting',
      '3D-ontwerp en materiaaladvies door eigen ontwerper',
    ],
  },
  {
    id: 'luxe',
    label: 'Luxe',
    range: '€ 35.000 — € 60.000+',
    summary:
      'Volledig op maat ontworpen droombadkamer met echte natuursteen, designmerken en bijzondere extra\'s als sauna of stoomdouche.',
    duration: '4 — 6 weken',
    image: '/badkamerstijl/2200xxs(24).jpg',
    includes: [
      'Alles uit Premium, plus:',
      'Echte natuursteen (Carrara, travertijn of hardsteen)',
      'Designmerken: Dornbracht, Vola, Antonio Lupi, Agape',
      'Vrijstaand designbad in composiet of solid surface',
      'Optioneel: sauna, stoomdouche of hammam-element',
      'Smart home: verlichting, muziek en klimaat via app',
      'Maatwerk dressing of inbouwkasten in de badkamer',
      'Volledig 3D-ontwerptraject met materiaalcollage',
      'Persoonlijke projectleider en showroom-bezoeken',
      'Garantie tot 10 jaar op constructie en montage',
    ],
  },
];

const FACTORS = [
  {
    title: 'Oppervlakte',
    desc: 'Hoe groter de badkamer, hoe meer materialen en arbeid. Een ruime badkamer biedt echter ook meer mogelijkheden voor maatwerk.',
  },
  {
    title: 'Materiaalkeuze',
    desc: 'Het verschil tussen keramische standaardtegels en echte marmer is groot. Sanitair van topmerken kan de prijs verdubbelen ten opzichte van middensegment.',
  },
  {
    title: 'Leidingwerk',
    desc: 'Behoud van bestaande aansluitingen is voordelig. Het verplaatsen van toilet, douche of wastafel betekent extra hak- en breekwerk.',
  },
  {
    title: 'Vloerverwarming',
    desc: 'Elektrische vloerverwarming is voordeliger om aan te leggen, hydraulische vloerverwarming op CV is comfortabeler en zuiniger op lange termijn.',
  },
  {
    title: 'Bouwkundige aanpassingen',
    desc: 'Muren verplaatsen, een raam toevoegen of een nis maken vraagt extra werk. Voor monumentale panden gelden vaak aanvullende eisen.',
  },
  {
    title: 'Toevoegingen',
    desc: 'Een vrijstaand bad, dubbele wastafel, sauna of stoomdouche zijn waardevolle toevoegingen die uiteraard meekomen in de prijs.',
  },
  {
    title: 'Bereikbaarheid',
    desc: 'Een appartement op de derde verdieping zonder lift of een woning in een autoluwe binnenstad maakt het aanvoeren van materialen complexer.',
  },
  {
    title: 'Asbest & legionella',
    desc: 'In oudere woningen kan asbest aanwezig zijn dat eerst gesaneerd moet worden. Bij gedeelde leidingen letten we op legionella-risico\'s.',
  },
];

const FAQS = [
  {
    q: 'Wat is precies inbegrepen in jullie prijzen?',
    a: 'Onze offertes zijn altijd compleet: sloop en afvoer, leidingwerk, tegelwerk, sanitair, kranen, verlichting, ventilatie, vloerverwarming en alle arbeid. Je krijgt een gespecificeerde offerte zodat je per onderdeel ziet wat je betaalt. Showroombezoeken en 3D-ontwerp zitten standaard bij Premium en Luxe — bij Basis en Standaard tegen meerprijs.',
  },
  {
    q: 'Werken jullie met vaste prijzen of nacalculatie?',
    a: 'Wij werken altijd met een vaste aanneemsom op basis van de afgestemde offerte. Geen verrassingen achteraf. Alleen wanneer je tijdens het traject zelf wijzigingen of uitbreidingen wenst, maken wij een meerwerk-opgave die je vooraf goedkeurt.',
  },
  {
    q: 'Hoe ziet het betalingsschema eruit?',
    a: 'Wij hanteren standaard drie termijnen: 30% bij start van de werkzaamheden, 60% halverwege na het tegelwerk, en 10% na oplevering en goedkeuring. Voor projecten boven € 30.000 is een aangepast schema bespreekbaar. Wij vragen nooit volledige vooruitbetaling.',
  },
  {
    q: 'Welke garanties geven jullie?',
    a: 'Op installatie en montage geven we minimaal 5 jaar garantie, en bij Premium en Luxe oplopend tot 10 jaar op constructie. Op materialen geldt de fabrieksgarantie van merken als Geberit, Hansgrohe en Villeroy & Boch — vaak 5 tot 25 jaar. Wij regelen claims voor je af.',
  },
  {
    q: 'Hoe lang is een offerte geldig?',
    a: 'Onze offertes zijn 60 dagen geldig. Na akkoord plannen we de start binnen 4 tot 8 weken, afhankelijk van het seizoen. In de winter is de wachttijd doorgaans korter dan in het voorjaar.',
  },
  {
    q: 'Zijn er verborgen kosten?',
    a: 'Nee. Wat in de offerte staat is wat je betaalt. Onvoorziene situaties zoals verborgen vocht, asbest of een verrotte ondervloer worden eerst aan jou voorgelegd met een prijsopgave voordat we doorwerken. Geen onaangename verrassingen op de eindfactuur.',
  },
  {
    q: 'Kan ik mijn badkamer renovatie financieren of in termijnen betalen?',
    a: 'Veel klanten financieren een grotere renovatie via een hypotheekverhoging of consumptief krediet. Wij werken samen met financiële adviseurs die hierin gespecialiseerd zijn. Voor de aanneemsom zelf hanteren wij ons vaste termijnschema in drie of vier delen.',
  },
  {
    q: 'Komen showroomkosten bovenop de prijs?',
    a: 'Bij Premium en Luxe begeleiden wij je gratis in onze showroom-partners (Hansgrohe, Villeroy & Boch, Dornbracht). Voor Basis en Standaard kun je optioneel een showroombezoek toevoegen. De materialen worden uiteraard wel apart afgerekend in de offerte — geen verborgen marges.',
  },
];

const SIZES = [
  { id: 'klein', label: 'Klein', sub: '≤ 5 m²', m2: 4 },
  { id: 'gemiddeld', label: 'Gemiddeld', sub: '5 — 8 m²', m2: 6.5 },
  { id: 'groot', label: 'Groot', sub: '8 — 12 m²', m2: 10 },
  { id: 'zeer-groot', label: 'Zeer groot', sub: '12 m² +', m2: 14 },
] as const;

const FINISHES = [
  { id: 'basis', label: 'Basis', perM2: [1500, 2000] as const },
  { id: 'standaard', label: 'Standaard', perM2: [2000, 3000] as const },
  { id: 'premium', label: 'Premium', perM2: [3000, 4500] as const },
  { id: 'luxe', label: 'Luxe', perM2: [4500, 7000] as const },
] as const;

const COMPLEXITIES = [
  { id: 'geen', label: 'Geen wijzigingen', sub: 'Bestaande aansluitingen', factor: 1.0 },
  { id: 'lichte', label: 'Lichte aanpassingen', sub: 'Toilet of douche verplaatsen', factor: 1.15 },
  { id: 'volledig', label: 'Volledig nieuw', sub: 'Compleet nieuw leidingwerk', factor: 1.35 },
] as const;

const CITY_LINKS = [
  { name: 'Amsterdam', slug: 'amsterdam' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Utrecht', slug: 'utrecht' },
  { name: 'Eindhoven', slug: 'eindhoven' },
  { name: 'Haarlem', slug: 'haarlem' },
];

function formatEuro(n: number) {
  const rounded = Math.round(n / 500) * 500;
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(rounded);
}

export default function PrijzenPage() {
  const [size, setSize] = useState<(typeof SIZES)[number]['id']>('gemiddeld');
  const [finish, setFinish] = useState<(typeof FINISHES)[number]['id']>('standaard');
  const [complexity, setComplexity] = useState<(typeof COMPLEXITIES)[number]['id']>('lichte');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const estimate = useMemo(() => {
    const sizeData = SIZES.find((s) => s.id === size)!;
    const finishData = FINISHES.find((f) => f.id === finish)!;
    const complexityData = COMPLEXITIES.find((c) => c.id === complexity)!;
    const low = finishData.perM2[0] * sizeData.m2 * complexityData.factor;
    const high = finishData.perM2[1] * sizeData.m2 * complexityData.factor;
    return { low, high };
  }, [size, finish, complexity]);

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
        <span className="text-white">Prijzen</span>
      </nav>

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(30).jpg"
            alt="Luxe badkamer renovatie prijzen"
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
            Transparante prijzen
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
            Een complete badkamer renovatie kost in Nederland tussen de € 5.000 en € 60.000+. Hieronder lees je precies wat je voor welk budget krijgt — eerlijk, gespecificeerd en zonder verborgen kosten.
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
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Direct naar prijscalculator
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Onze prijsfilosofie)
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
              Eerlijke prijs,
              <br />
              <span className="italic">geen verrassingen</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-bsv2-charcoal/85 text-lg md:text-xl leading-[1.6]"
          >
            <p className="font-cormorant text-xl md:text-2xl lg:text-[1.75rem] font-light leading-[1.5]">
              Wij geloven in volledige transparantie. Je krijgt vooraf een gespecificeerde offerte met daarin elk onderdeel: van sloopwerk en leidingen tot tegels, sanitair en afwerking.
            </p>
            <p className="text-base md:text-lg text-bsv2-grey leading-relaxed">
              De vier pakketten op deze pagina zijn richtprijzen, gebaseerd op honderden gerealiseerde projecten. Tijdens het gratis adviesgesprek vertalen we jouw wensen naar een vaste aanneemsom — geen nacalculatie, geen verborgen kosten.
            </p>
            <p className="text-base md:text-lg text-bsv2-grey leading-relaxed">
              Wil je eerst een uitleg over wat een badkamer renovatie kost en welke factoren de prijs bepalen? Lees onze <Link href="/kosten" className="text-bsv2-charcoal underline underline-offset-2 hover:text-bsv2-teal transition-colors">kostengids voor 2026</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
                (Pakketten)
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                Van Basis tot
                <br />
                <span className="italic">Luxe op maat</span>
              </h2>
            </div>
            <p className="text-bsv2-grey text-sm max-w-md leading-relaxed">
              Alle pakketten zijn inclusief eigen vakmensen, vaste aanneemsom en uitgebreide installatiegarantie. Materialen zijn op maat aan te passen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TIERS.map((tier, i) => (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  tier.featured ? 'bg-bsv2-charcoal text-white' : 'bg-bsv2-cream text-bsv2-charcoal'
                }`}
              >
                {tier.featured && (
                  <span className="absolute top-6 right-6 z-10 text-[10px] tracking-[0.2em] uppercase bg-bsv2-pink text-bsv2-charcoal px-3 py-1 rounded-full">
                    Populair
                  </span>
                )}
                <div className="aspect-[16/9] relative">
                  <Image
                    src={tier.image}
                    alt={`Badkamer ${tier.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-4 gap-4">
                    <h3 className="font-cormorant text-3xl md:text-4xl font-light">{tier.label}</h3>
                    <span
                      className={`text-[11px] tracking-[0.15em] uppercase ${
                        tier.featured ? 'text-white/50' : 'text-bsv2-grey'
                      }`}
                    >
                      {tier.duration}
                    </span>
                  </div>
                  <p className="font-cormorant text-2xl md:text-[1.75rem] font-light mb-5 leading-tight">
                    {tier.range}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      tier.featured ? 'text-white/75' : 'text-bsv2-grey'
                    }`}
                  >
                    {tier.summary}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm leading-relaxed ${
                          tier.featured ? 'text-white/85' : 'text-bsv2-charcoal/85'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 mt-[3px] flex-shrink-0 ${
                            tier.featured ? 'text-bsv2-pink' : 'text-bsv2-teal'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/adviesgesprek"
                    className={`mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 rounded-full transition-colors ${
                      tier.featured
                        ? 'bg-bsv2-pink text-bsv2-charcoal hover:bg-white'
                        : 'bg-bsv2-teal text-white hover:bg-bsv2-charcoal'
                    }`}
                  >
                    Offerte voor {tier.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section
        id="calculator"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
                (Prijscalculator)
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6">
                Bereken jouw
                <br />
                <span className="italic">indicatieve prijs</span>
              </h2>
              <p className="text-bsv2-grey text-base md:text-lg leading-relaxed max-w-md">
                Een snelle inschatting op basis van afmeting, afwerking en leidingwerk. Voor een exacte prijs maken we tijdens het adviesgesprek een offerte op maat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 border border-bsv2-charcoal/[0.06]">
              {/* Size */}
              <fieldset className="mb-8">
                <legend className="text-[11px] tracking-[0.15em] uppercase text-bsv2-grey mb-4 block">
                  Afmeting badkamer
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSize(s.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        size === s.id
                          ? 'border-bsv2-charcoal bg-bsv2-charcoal text-white'
                          : 'border-bsv2-charcoal/15 hover:border-bsv2-charcoal/40 text-bsv2-charcoal'
                      }`}
                    >
                      <span className="block font-cormorant text-lg">{s.label}</span>
                      <span
                        className={`block text-xs mt-0.5 ${
                          size === s.id ? 'text-white/60' : 'text-bsv2-grey'
                        }`}
                      >
                        {s.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Finish */}
              <fieldset className="mb-8">
                <legend className="text-[11px] tracking-[0.15em] uppercase text-bsv2-grey mb-4 block">
                  Afwerkingsniveau
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FINISHES.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFinish(f.id)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition-colors ${
                        finish === f.id
                          ? 'border-bsv2-teal bg-bsv2-teal text-white'
                          : 'border-bsv2-charcoal/15 hover:border-bsv2-charcoal/40 text-bsv2-charcoal'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Complexity */}
              <fieldset className="mb-10">
                <legend className="text-[11px] tracking-[0.15em] uppercase text-bsv2-grey mb-4 block">
                  Leidingwerk
                </legend>
                <div className="space-y-2">
                  {COMPLEXITIES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setComplexity(c.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-colors ${
                        complexity === c.id
                          ? 'border-bsv2-charcoal bg-bsv2-charcoal text-white'
                          : 'border-bsv2-charcoal/15 hover:border-bsv2-charcoal/40 text-bsv2-charcoal'
                      }`}
                    >
                      <span className="block text-sm font-medium">{c.label}</span>
                      <span
                        className={`block text-xs mt-0.5 ${
                          complexity === c.id ? 'text-white/60' : 'text-bsv2-grey'
                        }`}
                      >
                        {c.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Output */}
              <div className="border-t border-bsv2-charcoal/10 pt-8">
                <span className="text-[11px] tracking-[0.15em] uppercase text-bsv2-grey block mb-3">
                  Indicatieve aanneemsom
                </span>
                <p className="font-cormorant text-3xl md:text-[2.5rem] font-light leading-tight">
                  {formatEuro(estimate.low)}
                  <span className="text-bsv2-grey mx-3 text-2xl md:text-3xl">—</span>
                  {formatEuro(estimate.high)}
                </p>
                <p className="text-xs text-bsv2-grey mt-3 leading-relaxed">
                  Indicatie inclusief sloop, materiaal en montage. Definitieve prijs na opname op locatie.
                </p>
                <Link
                  href="/adviesgesprek"
                  className="group mt-6 inline-flex items-center gap-2 bg-bsv2-teal text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors"
                >
                  Vraag offerte op maat
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Wat bepaalt de prijs)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-14 max-w-3xl">
            Factoren die de
            <br />
            <span className="italic">prijs beïnvloeden</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
            {FACTORS.map((factor, i) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="border-t border-bsv2-charcoal/15 pt-6"
              >
                <span className="text-bsv2-grey text-[11px] tracking-[0.15em] mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-cormorant text-xl md:text-2xl font-light mb-3 leading-tight">
                  {factor.title}
                </h3>
                <p className="text-bsv2-grey text-sm leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Wat we leveren)
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              Voor elk pakket:
              <br />
              <span className="italic">eigen vakmensen</span>
            </h2>
            <p className="text-bsv2-grey text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Wij werken niet met onderaannemers. Onze monteurs, tegelzetters en loodgieters zijn in vaste dienst — daardoor leveren we consistente kwaliteit, ongeacht het pakket dat je kiest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/diensten"
                className="inline-flex items-center justify-center gap-3 bg-bsv2-teal text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-charcoal transition-colors"
              >
                Bekijk alle diensten
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 border border-bsv2-charcoal text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-charcoal hover:text-white transition-colors"
              >
                Bekijk portfolio
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <Image
              src="/badkamerstijl/2200xxs(43).jpg"
              alt="Eigen vakmensen aan het werk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Veelgestelde vragen)
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-14">
            Vragen over
            <br />
            <span className="italic">prijzen en betaling</span>
          </h2>

          <div className="divide-y divide-bsv2-charcoal/10 border-y border-bsv2-charcoal/10">
            {FAQS.map((faq, i) => {
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
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
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

      {/* CITY LINKS */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Lokaal actief)
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10 max-w-3xl">
            Badkamer renovatie in
            <br />
            <span className="italic">heel Nederland</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {CITY_LINKS.map((c) => (
              <Link
                key={c.slug}
                href={`/badkamerstijl/${c.slug}`}
                className="inline-flex items-center gap-2 bg-white text-bsv2-charcoal text-sm px-5 py-3 rounded-full border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
              >
                Prijzen in {c.name}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
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
            Een offerte op maat,
            <br />
            <span className="italic">binnen 5 werkdagen</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Plan een vrijblijvend adviesgesprek. Wij komen langs, meten op, bespreken jouw wensen en sturen binnen 5 werkdagen een gespecificeerde offerte met vaste prijs.
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

      {/* FOOTER */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 md:grid-cols-6 text-sm text-bsv2-grey mb-10">
            <Link href="/" className="hover:text-bsv2-charcoal transition-colors">Home</Link>
            <Link href="/diensten" className="hover:text-bsv2-charcoal transition-colors">Diensten</Link>
            <Link href="/stijlen" className="hover:text-bsv2-charcoal transition-colors">Stijlen</Link>
            <Link href="/portfolio" className="hover:text-bsv2-charcoal transition-colors">Portfolio</Link>
            <Link href="/prijzen" className="hover:text-bsv2-charcoal transition-colors">Prijzen</Link>
            <Link href="/adviesgesprek" className="hover:text-bsv2-charcoal transition-colors">Contact</Link>
          </div>
          <div className="pt-8 border-t border-bsv2-charcoal/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-bsv2-grey">
            <p>&copy; 2025 Badkamerstijl. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/privacybeleid" className="hover:text-bsv2-charcoal transition-colors">Privacybeleid</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-bsv2-charcoal transition-colors">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
