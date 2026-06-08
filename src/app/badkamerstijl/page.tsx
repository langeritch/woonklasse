'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Plus, Minus, Star, Check, Phone } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import HeroAdviesTool from '@/components/HeroAdviesTool';

/* ──────────────────────────── DATA ──────────────────────────── */

const TEL = '+31302072388';
const TEL_DISPLAY = '+31 30 207 23 88';

const pillars = [
  {
    title: 'Eigen vakmensen',
    desc: 'Geen onderaannemers. Onze eigen tegelzetters, loodgieters en monteurs realiseren jouw badkamer van begin tot eind.',
  },
  {
    title: 'Vaste aanneemsom',
    desc: 'Vooraf een heldere prijs op basis van een gedetailleerd ontwerp. Wat we afspreken, dat betaal je.',
  },
  {
    title: 'Uitgebreide garantie',
    desc: 'Installatiegarantie op al het werk dat we leveren, plus de fabrieksgaranties van topmerken.',
  },
];

const stijlen = [
  { name: 'Modern Minimalistisch', tag: 'Strak, rust, grootformaat tegels', image: '/badkamerstijl/2200xxs(30).jpg', slug: 'modern' },
  { name: 'Klassiek Luxe', tag: 'Marmer, messing en tijdloze elegantie', image: '/badkamerstijl/2200xxs(44).jpg', slug: 'klassiek' },
  { name: 'Industrieel Chic', tag: 'Beton, staal en warme accenten', image: '/badkamerstijl/industrieel-chic.jpg', slug: 'industrieel' },
  { name: 'Warm Natuurlijk', tag: 'Hout, natuursteen en zacht licht', image: '/badkamerstijl/2200xxs(25).jpg', slug: 'warm-natuurlijk' },
  { name: 'Scandinavisch', tag: 'Licht, helder en functioneel', image: '/badkamerstijl/2200xxs(31).jpg', slug: 'scandinavisch' },
];

const pakketten = [
  {
    name: 'Basis',
    image: '/badkamerstijl/2200xxs(4).jpg',
    price: 'vanaf € 5.000',
    desc: 'Nette renovatie met betrouwbaar middensegment sanitair.',
    specs: ['Compleet', 'Incl. montage', 'Vaste prijs'],
  },
  {
    name: 'Standaard',
    image: '/badkamerstijl/2200xxs(27).jpg',
    price: '€ 12.000 - € 22.000',
    desc: 'Designsanitair en grootformaat tegels voor een eigentijdse look.',
    specs: ['Designsanitair', 'Grootformaat tegels', '3D-ontwerp'],
  },
  {
    name: 'Premium',
    image: '/badkamerstijl/2200xxs(43).jpg',
    price: '€ 22.000 - € 35.000',
    desc: 'Topmerken, vrijstaand bad en maatwerk meubels.',
    specs: ['Topmerken', 'Vrijstaand bad', 'Maatwerk'],
  },
  {
    name: 'Luxe',
    image: '/badkamerstijl/2200xxs(46).jpg',
    price: 'vanaf € 35.000',
    desc: 'Volledig op maat met natuursteen en exclusieve designmerken.',
    specs: ['Natuursteen', 'Volledig op maat', 'Designmerken'],
  },
];

const faqs = [
  {
    q: 'Wat kost een complete badkamer renovatie?',
    a: 'Dat hangt af van de grootte en de afwerking. Een nette renovatie start rond € 5.000, een gemiddelde badkamer op maat ligt tussen € 12.000 en € 22.000 en voor een luxe badkamer met natuursteen en designmerken reken je vanaf € 35.000. Je krijgt vooraf een vaste aanneemsom, dus geen verrassingen achteraf.',
  },
  {
    q: 'Hoe lang duurt het om mijn badkamer te realiseren?',
    a: 'Een gemiddelde badkamer realiseren we in twee tot drie weken op locatie. De voorbereiding, het ontwerp en de materiaalkeuze gaan daaraan vooraf. We plannen alles strak, zodat je niet langer dan nodig zonder badkamer zit.',
  },
  {
    q: 'Werken jullie met een vaste prijs?',
    a: 'Ja. Op basis van een gedetailleerd 3D-ontwerp krijg je een vaste aanneemsom. Daarin zit alles: sloop, leidingwerk, tegels, sanitair, vloerverwarming, ventilatie en alle arbeid. Wat we afspreken, dat betaal je.',
  },
  {
    q: 'Doen jullie alles zelf of werken jullie met onderaannemers?',
    a: 'We werken met onze eigen vakmensen, van tegelzetter tot loodgieter en monteur. Eén aanspreekpunt, één team dat verantwoordelijk is voor het hele resultaat.',
  },
  {
    q: 'Kan ik eerst een ontwerp zien voordat ik beslis?',
    a: 'Zeker. We maken een 3D-ontwerp van jouw badkamer met de gekozen materialen, kleuren en indeling. Zo zie je precies hoe het wordt voordat we ook maar één tegel plaatsen.',
  },
  {
    q: 'Werken jullie door heel Nederland?',
    a: 'Ja, we realiseren luxe badkamers door heel Nederland. Tijdens het adviesgesprek bespreken we jouw locatie en planning.',
  },
];

/* ──────────────────── REVEAL HELPER ──────────────────── */

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

/* ──────────────────── ADVIES BLOCK (twice on page) ──────────────────── */

function AdviesBlock({ id }: { id: string }) {
  return (
    <section id={id} className="px-3 md:px-5 scroll-mt-24">
      <div className="bg-bs26-sand/50 rounded-[20px] md:rounded-[28px] px-6 md:px-14 lg:px-20 py-20 md:py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="bs26-eyebrow text-bs26-gold">Persoonlijk advies</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mt-4 mb-5">
              Vertel ons over jouw <span className="italic">droombadkamer</span>
            </h2>
            <p className="font-body text-bs26-grey text-[15px] leading-relaxed max-w-md">
              In 3 stappen krijg je persoonlijk advies van ons team. Upload eventueel foto&apos;s van je huidige situatie, dan denken wij gericht met je mee.
            </p>
          </div>
          <div className="w-full">
            <HeroAdviesTool brand="badkamerstijl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function BadkamerstijlHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[88vh] min-h-[600px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src="/badkamerstijl/2200xxs(37).jpg"
              alt="Luxe badkamer op maat door Badkamerstijl"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />

          {/* Eyebrow top-left */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-7 md:top-10 left-6 md:left-10 z-20 flex items-center gap-3 text-white/80"
          >
            <span className="w-8 h-px bg-bs26-gold-soft" />
            <span className="bs26-eyebrow text-white/75">Luxe badkamers op maat</span>
          </motion.div>

          {/* Center content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white font-light leading-[0.92] tracking-[0.01em] text-[clamp(3rem,10vw,9rem)]"
            >
              Jouw droombadkamer,
              <br />
              <span className="italic">vakkundig gerealiseerd</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="font-body text-white/80 text-base md:text-lg max-w-xl mt-7 leading-relaxed"
            >
              Van persoonlijk 3D-ontwerp tot oplevering door eigen vakmensen. Eén team, vaste prijs, door heel Nederland.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-9 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#advies"
                className="group inline-flex items-center gap-3 bg-white text-bs26-ink text-sm font-medium px-7 py-3.5 rounded-full hover:bg-bs26-gold hover:text-white transition-colors duration-300"
              >
                Krijg persoonlijk advies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center gap-2 text-white/90 text-sm font-medium px-6 py-3.5 rounded-full border border-white/35 hover:bg-white/10 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Bel ons direct
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 2. ADVIES FORM (onder hero) ═══════════════════════ */}
      <div className="pt-12 md:pt-16">
        <AdviesBlock id="advies" />
      </div>

      {/* ═══════════════════════ 3. EXCELLENCE ═══════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1500px] mx-auto">
        <motion.div {...reveal} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="bs26-eyebrow text-bs26-gold">Vakmanschap in elke badkamer</span>
          <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] mt-5">
            Wij maken badkamers die je <span className="italic">elke dag</span> wilt gebruiken
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] gap-10 lg:gap-12 items-center">
          {/* Left text */}
          <motion.div {...reveal}>
            <h3 className="font-display text-2xl md:text-3xl font-light mb-4">Jouw partner in jouw badkamer</h3>
            <p className="font-body text-bs26-grey text-[15px] leading-relaxed mb-7">
              Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. We luisteren naar je wensen, vertalen die naar een doordacht totaalconcept en voeren het uit met oog voor elk detail.
            </p>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 bg-bs26-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-bs26-gold transition-colors duration-300"
            >
              Over onze aanpak
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Center video - autoplay, muted, loop */}
          <motion.div {...reveal} className="aspect-[4/5] relative overflow-hidden rounded-[18px] bg-bs26-ink">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/badkamerstijl/badkamer-video.mp4"
              poster="/badkamerstijl/badkamer-video-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Badkamer door Badkamerstijl in beeld"
            />
          </motion.div>

          {/* Right features */}
          <motion.div {...reveal} className="flex flex-col gap-8">
            {[
              { t: 'Persoonlijk ontwerp', d: 'Een 3D-ontwerp op maat, zodat je precies ziet wat je krijgt.' },
              { t: 'Brede materiaalkeuze', d: 'Van designsanitair tot natuursteen, afgestemd op jouw stijl en budget.' },
              { t: 'Reviews', d: 'Klanten waarderen ons werk met een gemiddelde van 4,9 sterren.' },
            ].map((f, i) => (
              <div key={f.t} className={i < 2 ? 'pb-7 border-b border-bs26-charcoal/10' : ''}>
                <h4 className="font-display text-xl font-medium mb-2">{f.t}</h4>
                <p className="font-body text-bs26-grey text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 4. TRUST PILLARS (DARK) ═══════════════════════ */}
      <section className="px-3 md:px-5">
        <div className="bg-bs26-ink text-white rounded-[20px] md:rounded-[28px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...reveal} className="max-w-2xl mb-14 md:mb-20">
              <span className="bs26-eyebrow text-bs26-gold-soft">Waarom Badkamerstijl</span>
              <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] mt-5">
                Eén team dat je <span className="italic">droombadkamer</span> waarmaakt
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.1 }}
                  className="border-t border-white/15 pt-7"
                >
                  <span className="font-display text-bs26-gold-soft text-4xl">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light mt-3 mb-4">{p.title}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. STIJLEN CAROUSEL ═══════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="bs26-eyebrow text-bs26-gold">Vind jouw stijl</span>
              <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] mt-4">
                Ontdek wat bij <span className="italic">jou</span> past
              </h2>
            </div>
            <p className="font-body text-bs26-grey text-[15px] leading-relaxed max-w-sm">
              Van strak en modern tot klassiek en warm. Laat je inspireren door de stijlen die wij realiseren.
            </p>
          </motion.div>
        </div>

        {/* Scroll-snap carousel */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {stijlen.map((s) => (
            <Link
              key={s.slug}
              href={`/stijlen#${s.slug}`}
              className="group snap-start shrink-0 w-[78vw] sm:w-[46vw] lg:w-[31vw] xl:w-[26rem]"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-[18px]">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 26rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-white font-light leading-tight">{s.name}</h3>
                    <p className="font-body text-white/75 text-xs mt-1">{s.tag}</p>
                  </div>
                  <span className="shrink-0 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-bs26-gold group-hover:border-bs26-gold transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ 6. PAKKETTEN GRID ═══════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32 max-w-[1500px] mx-auto">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="bs26-eyebrow text-bs26-gold">Onze pakketten</span>
          <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] mt-4">
            Een badkamer voor <span className="italic">elk budget</span>
          </h2>
          <p className="font-body text-bs26-grey text-[15px] leading-relaxed mt-5">
            Heldere pakketten met een vaste aanneemsom. Alles inbegrepen, van sloop tot de laatste tegel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {pakketten.map((p, i) => (
            <motion.div
              key={p.name}
              {...reveal}
              transition={{ ...reveal.transition, delay: (i % 2) * 0.08 }}
              className="group bg-bs26-paper rounded-[18px] p-3 flex flex-col sm:flex-row gap-5 hover:shadow-[0_20px_50px_-25px_rgba(34,31,26,0.4)] transition-shadow duration-500"
            >
              <div className="sm:w-44 lg:w-52 shrink-0 aspect-[4/3] sm:aspect-auto relative overflow-hidden rounded-[12px]">
                <Image
                  src={p.image}
                  alt={`${p.name} badkamer`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 13rem"
                />
              </div>
              <div className="flex flex-col flex-1 py-2 pr-3">
                <h3 className="font-display text-2xl md:text-3xl font-light">{p.name}</h3>
                <p className="font-body text-bs26-grey text-sm leading-relaxed mt-2 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.specs.map((spec) => (
                    <span key={spec} className="inline-flex items-center gap-1.5 text-[11px] font-body text-bs26-charcoal/70 bg-bs26-sand/60 rounded-full px-3 py-1">
                      <Check className="w-3 h-3 text-bs26-gold" /> {spec}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display text-xl text-bs26-ink">{p.price}</span>
                  <Link
                    href="/prijzen"
                    className="inline-flex items-center gap-2 text-bs26-gold text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Bekijk <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="text-center mt-12">
          <Link
            href="/prijzen"
            className="inline-flex items-center gap-2 bg-bs26-ink text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bs26-gold transition-colors duration-300"
          >
            Bekijk alle prijzen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════ 7. INSIGHTS / TESTIMONIAL (DARK) ═══════════════════════ */}
      <section className="px-3 md:px-5">
        <div className="bg-bs26-ink text-white rounded-[20px] md:rounded-[28px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.04] max-w-2xl">
                Inspiratie, ervaringen en <span className="italic">vakkennis</span>
              </h2>
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors shrink-0">
                Lees onze blog <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
              {/* Feature image card */}
              <motion.div {...reveal} className="relative rounded-[18px] overflow-hidden min-h-[320px] lg:min-h-[420px]">
                <Image
                  src="/badkamerstijl/2200xxs(28).jpg"
                  alt="Luxe badkamer met sfeerverlichting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bs26-eyebrow text-bs26-gold-soft">Inspiratie</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light mt-2 max-w-md">
                    Lichtontwerp als fundament van badkamerbeleving
                  </h3>
                </div>
              </motion.div>

              {/* Testimonial card */}
              <motion.div {...reveal} className="bg-white/[0.04] border border-white/10 rounded-[18px] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-bs26-gold-soft text-bs26-gold-soft" />
                    ))}
                  </div>
                  <p className="font-display text-2xl md:text-[1.75rem] font-light leading-snug text-white/90">
                    &ldquo;Van het eerste ontwerp tot de oplevering klopte alles. Eén team, heldere prijs en een badkamer die nog mooier werd dan op de tekening.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-body font-medium text-white">Familie de Vries</p>
                  <p className="font-body text-white/55 text-sm">Complete badkamer renovatie, Utrecht</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 8. FAQ ═══════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <motion.div {...reveal}>
            <span className="bs26-eyebrow text-bs26-gold">Veelgestelde vragen</span>
            <h2 className="font-display font-light text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mt-4">
              Goed om te <span className="italic">weten</span>
            </h2>
            <p className="font-body text-bs26-grey text-[15px] leading-relaxed mt-5 max-w-sm">
              Staat jouw vraag er niet bij? Plan een vrijblijvend adviesgesprek, dan beantwoorden we alles persoonlijk.
            </p>
            <Link
              href="/adviesgesprek"
              className="inline-flex items-center gap-2 mt-7 bg-bs26-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-bs26-gold transition-colors duration-300"
            >
              Stel je vraag
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div {...reveal} className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q} className="border-b border-bs26-charcoal/12">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg md:text-xl font-medium group-hover:text-bs26-gold transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-bs26-charcoal/20 flex items-center justify-center text-bs26-ink">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="font-body text-bs26-grey text-[15px] leading-relaxed pb-6 pr-10">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 9. ADVIES FORM (onderaan) ═══════════════════════ */}
      <AdviesBlock id="advies-onder" />

      {/* ═══════════════════════ 10. CLOSING CTA ═══════════════════════ */}
      <section className="px-3 md:px-5 py-12 md:py-20">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] min-h-[420px] md:min-h-[520px] flex items-center">
          <Image
            src="/badkamerstijl/2200xxs(47).jpg"
            alt="Luxe badkamer door Badkamerstijl"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <motion.div {...reveal} className="relative z-10 px-8 md:px-16 lg:px-24 max-w-2xl">
            <h2 className="font-display font-light text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
              Laten we jouw
              <br />
              <span className="italic">droombadkamer</span> realiseren
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/adviesgesprek"
                className="inline-flex items-center justify-center gap-2 bg-white text-bs26-ink text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold hover:text-white transition-colors duration-300"
              >
                Adviesgesprek plannen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Bel {TEL_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
