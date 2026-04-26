'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plus, Minus, Calculator, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CONTACT } from '@/data/contact';
import { WOONKLASSE_CITIES } from '@/data/woonklasse-cities';

type WorkType = 'renovatie' | 'onderhoud' | 'aanbouw' | 'nieuwbouw';
type Finish = 'budget' | 'midden' | 'hoog' | 'luxe';
type Scope = 'enkel' | 'meerdere' | 'volledig';

type Tier = {
  label: string;
  from: string;
  range: string;
  duration: string;
  desc: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    label: 'Basis',
    from: '€500',
    range: '€500 — €5.000',
    duration: '1 — 5 werkdagen',
    desc: 'Kleine reparaties, herstelwerk en gepland onderhoud — uitgevoerd door één vakman of klein team.',
    includes: [
      'Herstel houtrot, kit- en voegwerk',
      'Kleine loodgieter- of elektraklus',
      'Buitenschilderwerk per gevel',
      'Vervangen van enkele kozijnen of deuren',
      'Afvoer puin en eindschoonmaak',
    ],
    cta: 'Vraag onderhoudsofferte aan',
  },
  {
    label: 'Standaard',
    from: '€5.000',
    range: '€5.000 — €15.000',
    duration: '1 — 3 weken',
    desc: 'Renovatie van één ruimte — keuken, badkamer, toilet of woonkamer — inclusief installatiewerk en afwerking.',
    includes: [
      'Sloop, afvoer en bouwkundige voorbereiding',
      'Nieuwe leidingen elektra en water',
      'Tegelwerk vloer en wand',
      'Plaatsing keuken of sanitair',
      'Schilder- en stucwerk',
      'Eindcontrole en oplevering',
    ],
    cta: 'Plan een opname',
    featured: true,
  },
  {
    label: 'Uitgebreid',
    from: '€15.000',
    range: '€15.000 — €50.000',
    duration: '4 — 12 weken',
    desc: 'Volledige renovatie van een woonlaag, meerdere ruimtes of een aanbouw — meerdere vakgebieden gecombineerd.',
    includes: [
      'Indelingswijziging en lichte constructie',
      'Complete keuken én badkamer',
      'Vloer- en wandafwerking volledig nieuw',
      'Nieuwe groepenkast en bedrading',
      'Vloerverwarming en isolatie',
      'Eigen projectleider gedurende doorlooptijd',
    ],
    cta: 'Bespreek uw plan',
  },
  {
    label: 'Maatwerk',
    from: '€50.000+',
    range: 'Vanaf €50.000',
    duration: '3 — 9 maanden',
    desc: 'Sleutelklare totaalrenovatie of nieuwbouw op maat — van fundering en constructie tot oplevering.',
    includes: [
      'Architect, constructeur en aannemer in één traject',
      'Vergunningstraject bij de gemeente',
      'Grootschalige aan- of opbouw',
      'Topafwerking en exclusieve materialen',
      'Domotica en duurzame installaties',
      'Nazorg en garantieboek bij oplevering',
    ],
    cta: 'Vraag intakegesprek aan',
  },
];

const COST_FACTORS = [
  {
    title: 'Materialen',
    desc: 'De keuze tussen standaard, midden- of premiumlijn bepaalt 30 — 50% van het totaalbudget. Hoogwaardig maatwerk in keukens, sanitair en natuursteen kan een project verdubbelen.',
  },
  {
    title: 'Arbeidsuren',
    desc: 'Specialistisch werk (tegelzetten, stucwerk, elektra) ligt rond €55 — €85 per uur. Eigen vakmensen in vaste dienst zijn op de lange termijn voorspelbaarder dan onderaannemers.',
  },
  {
    title: 'Vergunningen',
    desc: 'Voor uitbreidingen, draagmuren en gevelwijzigingen is vaak een omgevingsvergunning vereist. Reken op €350 — €1.500 leges plus tekenwerk en constructieberekeningen.',
  },
  {
    title: 'Sloop en afvoer',
    desc: 'Sloopwerk, asbestinventarisatie en stortkosten kunnen 5 — 15% van een renovatie uitmaken. Bij vooroorlogse woningen is voorinspectie verplicht.',
  },
  {
    title: 'Constructief werk',
    desc: 'Doorbraken, stalen liggers en fundering hebben constructeursberekeningen nodig. Eén stalen ligger inclusief plaatsing kost al snel €2.500 — €5.000.',
  },
  {
    title: 'Installaties',
    desc: 'Nieuwe groepenkast, vloerverwarming, mechanische ventilatie en sanitairaansluitingen vormen 15 — 25% van het budget bij een complete renovatie.',
  },
  {
    title: 'Afwerking',
    desc: 'Stuc, schilderwerk, plinten en interieurdetails zijn ogenschijnlijk klein, maar verschillen tot 40% in prijs tussen standaard en hoogwaardig werk.',
  },
  {
    title: 'Projectmanagement',
    desc: 'Een vaste projectleider bewaakt planning, leveringen en kwaliteit. Reken op 8 — 12% projectmanagement bij grotere verbouwingen — dat verdient zichzelf terug in faalkostenreductie.',
  },
];

const PRICING_FAQS = [
  {
    q: 'Wat kost een complete verbouwing in Nederland gemiddeld?',
    a: 'Een complete verbouwing van een rij- of hoekwoning ligt doorgaans tussen €60.000 en €150.000, exclusief BTW. Bij een vrijstaande woning of een sleutelklare oplevering loopt dit op tot €250.000 of meer. De m²-prijs varieert van ongeveer €750 voor onderhoudswerk tot €2.500 voor luxe maatwerk.',
  },
  {
    q: 'Geven jullie een vaste prijs of werken jullie op nacalculatie?',
    a: 'Standaard werken wij met een vaste aanneemsom. Na de gratis opname en het ontwerp ontvangt u een complete offerte met alle materialen, arbeid en bouwkundige posten. Wijzigingen tijdens het project worden vooraf schriftelijk afgestemd — geen verrassingen achteraf.',
  },
  {
    q: 'Hoeveel kost een nieuwe badkamer of keuken?',
    a: 'Een badkamerrenovatie start rond €7.500 en loopt op tot €25.000+ voor luxe maatwerk. Een nieuwe keuken inclusief sloop, leidingen, tegelwerk en plaatsing zit gemiddeld tussen €12.000 en €30.000. De gekozen merken sanitair, kranen en apparatuur bepalen het uiteindelijke budget.',
  },
  {
    q: 'Wat kost een aanbouw of dakopbouw per m²?',
    a: 'Een eenvoudige aanbouw start rond €2.000 per m², een aanbouw met grote glaspuien en hoogwaardige afwerking zit op €3.000 — €4.000 per m². Een dakopbouw ligt doorgaans tussen €2.500 en €3.500 per m². Constructieberekeningen en vergunning zijn meegerekend.',
  },
  {
    q: 'Hoeveel BTW betaal ik over een verbouwing?',
    a: 'Op arbeid bij woningen ouder dan 2 jaar geldt het lage BTW-tarief van 9% — een aanzienlijk voordeel ten opzichte van het 21%-tarief op materialen. Wij splitsen dit duidelijk op in de offerte zodat u precies ziet waar het voordeel zit.',
  },
  {
    q: 'Kan ik subsidie krijgen voor mijn verbouwing?',
    a: 'Voor energiebesparende maatregelen — isolatie, warmtepomp, zonnepanelen, HR++ glas — geldt de Investeringssubsidie Duurzame Energie (ISDE) en gemeentelijke regelingen. Wij wijzen u tijdens de offerte op de toepasselijke subsidies en verzorgen desgewenst de aanvraag.',
  },
  {
    q: 'Welke betalingstermijnen hanteren jullie?',
    a: 'Standaard: 10% bij opdrachtbevestiging, 30% bij aanvang werkzaamheden, 30% halverwege, 25% bij oplevering en 5% na de eindcontrole. Bij grotere projecten splitsen we naar bouwfase. U betaalt nooit vooruit voor werk dat nog niet uitgevoerd is.',
  },
  {
    q: 'Werken jullie ook in mijn regio en rekenen jullie reiskosten?',
    a: `Wij werken in heel Nederland — met de meeste projecten in een straal van 100 km rond Amsterdam-Duivendrecht. Voor de grote steden brengen we geen reiskosten in rekening. Verder weg geldt een transparante kilometervergoeding die altijd vooraf in de offerte staat.`,
  },
];

const PROCESS_FAQS = [
  {
    q: 'Hoe verloopt het traject van eerste contact tot oplevering?',
    a: 'Na uw aanvraag plannen wij binnen 5 werkdagen een gratis opname op locatie. Daarna volgt een ontwerpfase (1 — 3 weken), een vaste offerte, het tekenen van de aannemingsovereenkomst, de uitvoering en de oplevering met opleverlijst en garantieboek. Bij grotere projecten doorlopen we ook een vergunningstraject.',
  },
  {
    q: 'Hoe lang duurt het voordat jullie kunnen starten?',
    a: 'Voor kleinere klussen kunnen we doorgaans binnen 2 — 4 weken starten. Bij grotere verbouwingen zit er gemiddeld 6 — 12 weken tussen opdrachtbevestiging en bouwstart, afhankelijk van vergunning, ontwerp en materiaallevertijden.',
  },
  {
    q: 'Wie is mijn aanspreekpunt tijdens de werkzaamheden?',
    a: 'U krijgt één vaste projectleider die alle communicatie verzorgt — van planning en leveringen tot vragen tijdens de uitvoering. Geen doorverwijzingen of wisselende gezichten. U weet altijd wie u belt en die persoon weet altijd waar uw project staat.',
  },
  {
    q: 'Kan ik tijdens de verbouwing in mijn woning blijven wonen?',
    a: 'Bij een gerichte ruimte (keuken, badkamer, één etage) is dat meestal goed te doen — wij richten een tijdelijke voorziening in. Bij een complete verbouwing adviseren we enkele weken elders te verblijven. We bespreken het scenario tijdens de opname.',
  },
  {
    q: 'Welke garantie geven jullie op het uitgevoerde werk?',
    a: 'Tot 10 jaar garantie op constructief werk, 5 jaar op installaties (elektra, sanitair, verwarming) en 2 jaar op afwerking. Bij oplevering ontvangt u een garantieboek met alle documentatie en de fabrieksgaranties van toegepaste materialen.',
  },
  {
    q: 'Wie regelt de vergunning bij de gemeente?',
    a: 'Voor projecten waarvoor een omgevingsvergunning nodig is, werken wij samen met een vaste architect en constructeur. Wij verzorgen tekeningen, indienen bij uw gemeente en de communicatie tot aan de verlening — zodat u er geen omkijken naar heeft.',
  },
];

const WORK_TYPE_BASE_PRICE: Record<WorkType, number> = {
  renovatie: 1200,
  onderhoud: 350,
  aanbouw: 2400,
  nieuwbouw: 1800,
};

const FINISH_MULTIPLIER: Record<Finish, number> = {
  budget: 0.75,
  midden: 1.0,
  hoog: 1.55,
  luxe: 2.25,
};

const SCOPE_MULTIPLIER: Record<Scope, number> = {
  enkel: 1.0,
  meerdere: 0.92,
  volledig: 0.85,
};

const WORK_TYPE_LABEL: Record<WorkType, string> = {
  renovatie: 'Renovatie',
  onderhoud: 'Woningonderhoud',
  aanbouw: 'Aanbouw of uitbouw',
  nieuwbouw: 'Nieuwbouw',
};

const FINISH_LABEL: Record<Finish, string> = {
  budget: 'Budget',
  midden: 'Midden',
  hoog: 'Hoogwaardig',
  luxe: 'Luxe maatwerk',
};

const SCOPE_LABEL: Record<Scope, string> = {
  enkel: 'Eén ruimte',
  meerdere: 'Meerdere ruimtes',
  volledig: 'Hele woning',
};

function formatEuro(n: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PrijzenPage() {
  const [openPricingFaq, setOpenPricingFaq] = useState<number | null>(0);
  const [openProcessFaq, setOpenProcessFaq] = useState<number | null>(null);

  const [workType, setWorkType] = useState<WorkType>('renovatie');
  const [finish, setFinish] = useState<Finish>('midden');
  const [scope, setScope] = useState<Scope>('enkel');
  const [sizeInput, setSizeInput] = useState<string>('25');

  const estimate = useMemo(() => {
    const size = Math.max(1, Math.min(500, Number(sizeInput) || 0));
    const base = WORK_TYPE_BASE_PRICE[workType];
    const finishMul = FINISH_MULTIPLIER[finish];
    const scopeMul = SCOPE_MULTIPLIER[scope];
    const center = base * size * finishMul * scopeMul;
    const low = Math.round((center * 0.85) / 500) * 500;
    const high = Math.round((center * 1.2) / 500) * 500;
    return { low: Math.max(low, 500), high, perM2: Math.round(base * finishMul * scopeMul) };
  }, [workType, finish, scope, sizeInput]);

  // 8 featured city cross-links from the woonklasse-cities data set
  const featuredCities = WOONKLASSE_CITIES.filter((c) =>
    ['amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'haarlem', 'amstelveen', 'amersfoort'].includes(c.slug),
  );

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
        <span className="text-white">Prijzen</span>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden bg-woon-dark">
        <div className="absolute inset-0">
          <Image
            src="/woonklasse/canal-residence-1.jpg"
            alt="Woonklasse — verbouwing prijzen"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />

        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium"
          >
            <span className="w-8 h-px bg-woon-accent/60" />
            Transparante prijzen
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.02] tracking-tight text-white max-w-5xl"
          >
            Wat kost een<br />
            <span className="italic text-woon-accent">verbouwing in 2026?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed font-light"
          >
            Vier heldere prijscategorieën, een interactieve calculator en alle factoren die uw budget beïnvloeden — zonder verborgen kosten of vage uurtarieven.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#calculator"
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              <Calculator className="w-4 h-4" />
              Bereken uw indicatie
            </a>
            <Link
              href="/woonklasse/offerte"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Vrijblijvende offerte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TIERS ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Vier prijscategorieën
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
              Een budget voor
              <br />
              <span className="not-italic font-medium text-woon-accent">elke verbouwing</span>
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              Of het nu om herstelwerk gaat of om een sleutelklare totaalrenovatie — wij bieden vier heldere categorieën met realistische bandbreedtes, doorlooptijden en vaste inhoud. De definitieve prijs leggen we vast in de offerte na de opname op locatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier, i) => (
              <motion.article
                key={tier.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`flex flex-col p-7 md:p-8 rounded-2xl ${
                  tier.featured
                    ? 'bg-woon-dark text-white shadow-xl shadow-woon-dark/20'
                    : 'bg-white text-woon-dark border border-woon-dark/[0.08]'
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className={`text-[11px] tracking-[0.3em] uppercase font-medium ${
                      tier.featured ? 'text-woon-accent' : 'text-woon-secondary'
                    }`}
                  >
                    {tier.label}
                  </span>
                  {tier.featured && (
                    <span className="text-[10px] tracking-[0.2em] uppercase bg-woon-accent text-woon-dark px-2 py-1 rounded-full font-medium">
                      Meest gekozen
                    </span>
                  )}
                </div>
                <p className="font-display text-3xl md:text-4xl font-light italic mt-2 mb-1 leading-tight">
                  Vanaf {tier.from}
                </p>
                <p
                  className={`text-xs mb-5 ${
                    tier.featured ? 'text-white/50' : 'text-woon-secondary'
                  }`}
                >
                  Bandbreedte: {tier.range} &middot; {tier.duration}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    tier.featured ? 'text-white/75' : 'text-woon-secondary'
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        tier.featured ? 'text-white/85' : 'text-woon-dark/85'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-[3px] flex-shrink-0 ${
                          tier.featured ? 'text-woon-accent' : 'text-woon-accent/80'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/woonklasse/offerte"
                  className={`group inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all ${
                    tier.featured
                      ? 'bg-woon-accent text-woon-dark hover:scale-[1.02]'
                      : 'border border-woon-dark/80 text-woon-dark hover:bg-woon-dark hover:text-white'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CALCULATOR ═══════════════ */}
      <section id="calculator" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
                Prijscalculator
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-6">
                Bereken uw
                <br />
                <span className="not-italic font-medium text-woon-accent">richtprijs</span>
              </h2>
              <p className="text-woon-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Geef het type werk, de oppervlakte en het gewenste afwerkingsniveau aan. U krijgt direct een realistische bandbreedte. Het is een indicatie — de definitieve prijs hangt af van de bouwkundige staat en de specifieke materiaalkeuzes.
              </p>

              <div className="space-y-7">
                {/* Type of work */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-woon-secondary mb-3 font-medium">
                    Type werk
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(WORK_TYPE_LABEL) as WorkType[]).map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWorkType(w)}
                        className={`px-4 py-3 rounded-lg border text-sm transition-all text-left ${
                          workType === w
                            ? 'bg-woon-dark text-white border-woon-dark'
                            : 'bg-white text-woon-dark border-woon-dark/15 hover:border-woon-dark/40'
                        }`}
                      >
                        {WORK_TYPE_LABEL[w]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size in m² */}
                <div>
                  <label
                    htmlFor="size-input"
                    className="block text-xs tracking-[0.2em] uppercase text-woon-secondary mb-3 font-medium"
                  >
                    Oppervlakte in m² ({sizeInput} m²)
                  </label>
                  <input
                    id="size-input"
                    type="range"
                    min="5"
                    max="300"
                    step="5"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                    className="w-full accent-woon-accent"
                  />
                  <div className="flex justify-between text-[11px] text-woon-secondary mt-1">
                    <span>5 m²</span>
                    <span>300 m²</span>
                  </div>
                </div>

                {/* Finish level */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-woon-secondary mb-3 font-medium">
                    Afwerkingsniveau
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(FINISH_LABEL) as Finish[]).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFinish(f)}
                        className={`px-4 py-3 rounded-lg border text-sm transition-all text-left ${
                          finish === f
                            ? 'bg-woon-dark text-white border-woon-dark'
                            : 'bg-white text-woon-dark border-woon-dark/15 hover:border-woon-dark/40'
                        }`}
                      >
                        {FINISH_LABEL[f]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scope */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-woon-secondary mb-3 font-medium">
                    Omvang
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(SCOPE_LABEL) as Scope[]).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setScope(s)}
                        className={`px-3 py-3 rounded-lg border text-sm transition-all ${
                          scope === s
                            ? 'bg-woon-dark text-white border-woon-dark'
                            : 'bg-white text-woon-dark border-woon-dark/15 hover:border-woon-dark/40'
                        }`}
                      >
                        {SCOPE_LABEL[s]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live result */}
            <motion.aside
              key={`${workType}-${finish}-${scope}-${sizeInput}`}
              initial={{ opacity: 0.6, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-woon-dark text-white p-8 md:p-12 rounded-2xl lg:sticky lg:top-28"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-woon-accent mb-4 block font-medium">
                Indicatie op basis van uw keuzes
              </span>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.05] mb-2">
                {formatEuro(estimate.low)}
              </p>
              <p className="font-display text-xl md:text-2xl text-white/70 italic mb-8">
                — tot {formatEuro(estimate.high)}
              </p>

              <dl className="space-y-3 text-sm border-t border-white/15 pt-6 mb-8">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Type werk</dt>
                  <dd className="text-white font-medium text-right">{WORK_TYPE_LABEL[workType]}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Oppervlakte</dt>
                  <dd className="text-white font-medium text-right">{sizeInput} m²</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Afwerking</dt>
                  <dd className="text-white font-medium text-right">{FINISH_LABEL[finish]}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Omvang</dt>
                  <dd className="text-white font-medium text-right">{SCOPE_LABEL[scope]}</dd>
                </div>
                <div className="flex justify-between gap-4 pt-3 border-t border-white/15">
                  <dt className="text-white/60">Richtprijs per m²</dt>
                  <dd className="text-woon-accent font-medium text-right">
                    {formatEuro(estimate.perM2)}
                  </dd>
                </div>
              </dl>

              <p className="text-xs text-white/50 leading-relaxed mb-6">
                Indicatie excl. BTW. Werkelijke kosten hangen af van bouwkundige staat, vergunningen, materiaalkeuzes en regio. Voor een vaste prijs maken wij een opname op locatie.
              </p>

              <Link
                href="/woonklasse/offerte"
                className="group inline-flex items-center justify-center gap-3 w-full bg-woon-accent text-woon-dark text-sm font-medium px-6 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
              >
                Vraag een vaste offerte aan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ═══════════════ COST FACTORS ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Kostenfactoren
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
              Wat bepaalt
              <br />
              <span className="not-italic font-medium text-woon-accent">de prijs?</span>
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              Acht factoren bepalen samen het uiteindelijke verbouwingsbudget. We benoemen ze omdat we geloven in heldere verwachtingen — en omdat het u helpt slimme keuzes te maken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {COST_FACTORS.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="border-t border-woon-dark/15 pt-6"
              >
                <span className="text-woon-accent text-[11px] tracking-[0.25em] mb-3 block font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-lg font-bold mb-3 text-woon-dark">{f.title}</h3>
                <p className="text-woon-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ — PRICING ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Vragen over prijzen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-14">
            Over kosten,
            <br />
            <span className="not-italic font-medium text-woon-accent">offertes en betaling</span>
          </h2>

          <div className="divide-y divide-woon-dark/10 border-y border-woon-dark/10">
            {PRICING_FAQS.map((faq, i) => {
              const open = openPricingFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenPricingFaq(open ? null : i)}
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

      {/* ═══════════════ FAQ — PROCESS ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Vragen over het proces
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-14">
            Van eerste opname
            <br />
            <span className="not-italic font-medium text-woon-accent">tot oplevering</span>
          </h2>

          <div className="divide-y divide-woon-dark/10 border-y border-woon-dark/10">
            {PROCESS_FAQS.map((faq, i) => {
              const open = openProcessFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenProcessFaq(open ? null : i)}
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

      {/* ═══════════════ CROSS-LINKS ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream border-t border-woon-dark/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Bekijk meer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.1] mb-12 max-w-3xl">
            Diensten en
            <br />
            <span className="not-italic font-medium text-woon-accent">stadspagina's</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service categories */}
            <div>
              <h3 className="font-heading text-base font-bold uppercase tracking-[0.15em] text-woon-dark mb-6">
                Onze diensten
              </h3>
              <ul className="space-y-3">
                {[
                  ['Verbouwingen', '/woonklasse/diensten'],
                  ['Woningonderhoud', '/woonklasse/diensten'],
                  ['Aanbouw &amp; uitbouw', '/woonklasse/diensten'],
                  ['Dakwerk', '/woonklasse/diensten'],
                  ['Schilderwerk', '/woonklasse/diensten'],
                  ['Loodgieterwerk', '/woonklasse/diensten'],
                  ['Elektra', '/woonklasse/diensten'],
                  ['Recente projecten', '/woonklasse/projecten'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-woon-dark/80 hover:text-woon-accent transition-colors text-base"
                      dangerouslySetInnerHTML={{
                        __html: `${label} <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>`,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* City links */}
            <div>
              <h3 className="font-heading text-base font-bold uppercase tracking-[0.15em] text-woon-dark mb-6">
                Verbouwen in uw stad
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {featuredCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/woonklasse/${c.slug}`}
                    className="group inline-flex items-center gap-2 text-woon-dark/80 hover:text-woon-accent transition-colors text-base"
                  >
                    {c.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-sm text-woon-secondary">
                {WOONKLASSE_CITIES.length} steden in totaal —{' '}
                <Link href="/woonklasse" className="underline hover:text-woon-accent">
                  bekijk de volledige lijst
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-dark text-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="text-woon-accent text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium">
            Plan een opname
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-8">
            Een vaste prijs
            <br />
            <span className="not-italic font-medium text-woon-accent">begint met een gesprek</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Wij komen vrijblijvend bij u langs, luisteren naar uw plannen en sturen binnen 10 werkdagen een complete offerte met vaste prijs — zodat u precies weet waar u aan toe bent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woonklasse/offerte"
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              Offerte aanvragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Bel direct {CONTACT.telefoon}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
