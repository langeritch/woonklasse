'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/* ──────────────────────────── DATA ──────────────────────────── */

const IMAGES = {
  hero: '/exclusivedecks/hero-villa-infinity.jpeg',
  curves: '/exclusivedecks/signature-curves.jpeg',
  aerial: '/exclusivedecks/signature-aerial-waves.jpeg',
  pathNight: '/exclusivedecks/signature-path-night.jpeg',
  ledDetail: '/exclusivedecks/material-macro-curve.jpeg',
  infinity: '/exclusivedecks/toepassing-zwembad.jpeg',
  veranda: '/exclusivedecks/toepassing-veranda.jpeg',
  dakterras: '/exclusivedecks/toepassing-dakterras.jpeg',
  tuinpad: '/exclusivedecks/toepassing-tuinpad.jpeg',
  craft: '/exclusivedecks/craft-workshop.jpeg',
  ambientNight: '/exclusivedecks/ambient-lounge-night.jpeg',
  pStrand: '/exclusivedecks/portfolio-strandhuis.jpeg',
  pBerg: '/exclusivedecks/portfolio-bergchalet.jpeg',
  pHeren: '/exclusivedecks/portfolio-herenhuis.jpeg',
  pBrutalist: '/exclusivedecks/portfolio-brutalist.jpeg',
  pJachthaven: '/exclusivedecks/portfolio-jachthaven.jpeg',
};

const services = [
  {
    number: '01',
    title: 'Maatwerk Decks',
    desc: 'Exclusieve houten terrassen, ontworpen en gemonteerd rond de architectuur van jouw woning. Van rechte lijnen tot vloeiende curven.',
  },
  {
    number: '02',
    title: 'Geïntegreerde LED-lijnen',
    desc: 'Warm amberlicht, subtiel verwerkt tussen de planken. Het deck zelf wordt lichtbron — sfeer zonder armaturen in het zicht.',
  },
  {
    number: '03',
    title: 'Zwembadranden & Infinity',
    desc: 'Randafwerking rondom zwembaden en infinity edges, bestand tegen water, zon en jaren van gebruik.',
  },
  {
    number: '04',
    title: 'Daktuinen & Rooftops',
    desc: 'Lichtgewicht constructies op dakterrassen — van penthouse tot historisch pand, met volledige draagkrachtanalyse.',
  },
];

const projects = [
  { image: IMAGES.pStrand, title: 'Strandhuis Soleil', location: 'Bergen aan Zee', tag: 'Coastal' },
  { image: IMAGES.pBerg, title: 'Chalet Aurora', location: 'Zwitserse Alpen', tag: 'Mountain' },
  { image: IMAGES.pHeren, title: 'Grachtenpand No. 17', location: 'Amsterdam', tag: 'Historic' },
  { image: IMAGES.pBrutalist, title: 'Villa Monolith', location: 'Noorwegen', tag: 'Brutalist' },
  { image: IMAGES.pJachthaven, title: 'Marina del Sole', location: 'Mallorca', tag: 'Marina' },
  { image: IMAGES.dakterras, title: 'Rooftop Cathedrale', location: 'Parijs', tag: 'Rooftop' },
  { image: IMAGES.tuinpad, title: 'Tuinpad De Slinger', location: 'Wassenaar', tag: 'Garden Path' },
];

const principles = [
  { k: '01', title: 'Massief FSC-hout', desc: 'Alleen duurzaam gecertificeerde harde houtsoorten. Ipé, padauk, thermo-essen.' },
  { k: '02', title: 'IP68 LED-systemen', desc: 'Waterdicht, dimbaar, warm 2200K. Geen zichtbare kabels of armaturen.' },
  { k: '03', title: 'Onzichtbare bevestiging', desc: 'Geen schroeven in het zicht. Alles verdekt, vlak en strak afgewerkt.' },
  { k: '04', title: '25 jaar garantie', desc: 'Op constructie, hout en LED-systeem. Omdat wij weten wat we bouwen.' },
];

/* ──────────────────────────── HELPERS ──────────────────────────── */

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className || ''}`}>
      <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
      </motion.div>
    </div>
  );
}

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function ExclusiveDecksPage() {
  return (
    <div className="bg-deck-dark text-deck-light overflow-hidden">
      {/* ─────────── Floating Nav ─────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-deck-dark/40 border-b border-deck-accent/10">
        <Link href="/" className="text-xs tracking-[0.3em] uppercase text-deck-light/70 hover:text-deck-accent transition-colors">
          &larr; Terug
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg md:text-xl tracking-wide text-deck-accent">Exclusive</span>
          <span className="font-serif italic text-lg md:text-xl tracking-wide text-deck-light/80">Decks</span>
        </div>
        <a href="#contact" className="text-xs tracking-[0.3em] uppercase text-deck-accent hover:text-deck-glow transition-colors">
          Contact
        </a>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="ExclusiveDecks curved LED deck"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-deck-dark/70 via-deck-dark/30 to-deck-dark z-10" />
        {/* Radial accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(232,168,87,0.12)_0%,transparent_60%)] z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] md:text-xs uppercase text-deck-accent mb-8"
          >
            &mdash;&nbsp;&nbsp;Gebogen vakmanschap&nbsp;&nbsp;&mdash;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] text-white mb-6 tracking-tight"
          >
            Exclusive<span className="italic text-deck-accent">Decks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg text-deck-light/70 max-w-xl font-light leading-relaxed mb-12"
          >
            Houten terrassen met geïntegreerde LED-verlichting.<br />
            Op maat gemaakt. Gebouwd om te verbluffen.
          </motion.p>

          <motion.a
            href="#werk"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="inline-flex items-center gap-3 border border-deck-accent/50 text-deck-accent px-10 py-4 rounded-full text-xs tracking-[0.25em] uppercase hover:bg-deck-accent hover:text-deck-dark transition-all duration-500"
          >
            Bekijk ons werk
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-deck-light/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-deck-accent to-transparent" />
        </motion.div>
      </section>

      {/* ─────────── INTRO / MANIFESTO ─────────── */}
      <section className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Manifest</div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-white tracking-tight">
              Wij bouwen geen terrassen.<br />
              <span className="italic text-deck-accent">Wij bouwen avonden.</span>
            </h2>
            <p className="mt-10 text-lg md:text-xl text-deck-light/60 font-light leading-relaxed max-w-2xl">
              Elk ExclusiveDeck is een stuk architectuur dat reageert op de schemering. Overdag een warm en eerlijk vlak van massief hout. &apos;s Avonds lijnen van amberlicht die leiden, begeleiden en uitnodigen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── SHOWCASE #1 — Curves ─────────── */}
      <section id="werk" className="relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
        >
          <Image src={IMAGES.curves} alt="Golvende LED-lijnen op houten deck" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deck-dark via-transparent to-transparent" />

          <div className="absolute bottom-12 left-6 md:left-16 max-w-xl">
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-4">Project 01</div>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight">
              The Flow — <span className="italic">Golvende lijnen</span>
            </h3>
            <p className="mt-4 text-sm md:text-base text-deck-light/70 font-light max-w-md">
              Lichtgeleiders volgen de curve van het deck. Bij zonsondergang verschijnen ze vanzelf.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-deck-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Diensten</div>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-[1.1] max-w-3xl">
              Wat we doen — en wat we <span className="italic text-deck-accent">bewust niet doen</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-deck-accent/10">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative bg-deck-primary p-8 md:p-12 hover:bg-deck-secondary/40 transition-colors duration-700"
              >
                <div className="flex items-start gap-6">
                  <div className="font-serif text-5xl text-deck-accent/40 group-hover:text-deck-accent transition-colors duration-500">
                    {s.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">{s.title}</h3>
                    <p className="text-deck-light/60 leading-relaxed font-light">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FULL BLEED — Infinity pool ─────────── */}
      <section className="relative">
        <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
          <ParallaxImage src={IMAGES.infinity} alt="Infinity pool deck met LED" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-deck-dark/80 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24"
          >
            <div className="max-w-xl">
              <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-4">Signature</div>
              <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95] mb-6">
                Waar hout<br />
                <span className="italic text-deck-accent">de horizon raakt.</span>
              </h3>
              <p className="text-deck-light/70 text-base md:text-lg font-light max-w-md leading-relaxed">
                Onze signature infinity-afwerking: lichtlijnen die vloeiend overgaan van binnen naar buiten, van deck naar waterspiegel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── AERIAL SHOWCASE ─────────── */}
      <section className="relative py-32 md:py-48 bg-deck-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Vanuit de lucht</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] mb-8">
              Een patroon dat je<br />
              <span className="italic text-deck-accent">van bovenaf voelt</span>.
            </h2>
            <p className="text-deck-light/60 text-lg font-light leading-relaxed mb-6">
              Iedere curve wordt eerst op schaal getekend, vervolgens vrij gebogen, en pas dan in de planken gefreesd. Vanuit een drone zie je waarom we daar zo lang over doen.
            </p>
            <p className="text-deck-light/40 text-sm font-light italic">
              &mdash; Niet één plank in dit deck is rechtgezaagd.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={IMAGES.aerial}
                alt="Aerial top-down view of curved LED deck"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-deck-accent/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── PROJECT GRID ─────────── */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 flex items-end justify-between flex-wrap gap-6"
          >
            <div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Portfolio</div>
              <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-[1.05]">
                Recent werk.
              </h2>
            </div>
            <div className="text-sm text-deck-light/40 max-w-xs">
              Een selectie uit onze meest recente realisaties — van privétuinen tot rooftops met uitzicht.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative block overflow-hidden ${i % 3 === 0 ? 'md:mt-24' : ''}`}
              >
                <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deck-dark/70 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-700" />
                </div>

                <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-deck-accent bg-deck-dark/40 backdrop-blur-md px-3 py-1 rounded-full border border-deck-accent/30">
                  {p.tag}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-deck-light/50 mb-2">{p.location}</div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-white">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-deck-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CRAFTSMANSHIP ─────────── */}
      <section className="relative py-32 md:py-48 bg-deck-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.craft} alt="" fill className="object-cover opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deck-dark via-deck-dark/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1 }}
            className="max-w-xl"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Ambacht</div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95] mb-8 tracking-tight">
              Met de hand<br />
              <span className="italic text-deck-accent">gebogen</span>.
            </h2>
            <p className="text-deck-light/70 text-lg font-light leading-relaxed mb-6">
              Onze meester-houtbewerkers werken met stoom, geduld en exact de juiste houtsoorten. Elke curve wordt vrij vorm gegeven — geen mal, geen serie.
            </p>
            <p className="text-deck-light/60 text-base font-light leading-relaxed">
              Het is een techniek die vrijwel niemand in Europa nog beheerst. Daarom maken we per jaar maximaal 18 projecten.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-serif text-4xl text-deck-accent font-light">18</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-deck-light/40 mt-1">Projecten / jaar</div>
              </div>
              <div className="w-px h-12 bg-deck-accent/20" />
              <div>
                <div className="font-serif text-4xl text-deck-accent font-light">3</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-deck-light/40 mt-1">Master crafters</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── EXPERIENCE — Night ambient ─────────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src={IMAGES.ambientNight}
              alt="Avondambiance op een ExclusiveDeck"
              fill
              className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deck-dark via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-deck-accent mb-2">&mdash; De avond</div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-white">
                Gemaakt voor <span className="italic">stilte</span>.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden group md:mt-16"
          >
            <Image
              src={IMAGES.pathNight}
              alt="LED-pad door de tuin"
              fill
              className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deck-dark via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-deck-accent mb-2">&mdash; Het pad</div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-white">
                Eén lijn, <span className="italic">één gebaar</span>.
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── DETAIL SHOT — LED close-up ─────────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-deck-primary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image src={IMAGES.ledDetail} alt="LED detail" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-6">&mdash; Detail</div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.05] mb-8">
              Tot op de<br />
              <span className="italic text-deck-accent">millimeter</span>.
            </h2>
            <p className="text-deck-light/60 text-lg font-light leading-relaxed mb-10">
              De lichtprofielen zijn ingefreesd in de planken zelf, niet opgelegd. Dat vergt geduld, precisie en houtsoorten die dit aankunnen.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {principles.map((p) => (
                <div key={p.k}>
                  <div className="text-deck-accent font-serif text-xl mb-2">{p.k}</div>
                  <div className="text-white font-light mb-1">{p.title}</div>
                  <div className="text-xs text-deck-light/40 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section className="py-24 px-6 md:px-12 border-t border-b border-deck-accent/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {[
            { k: '100%', v: 'Maatwerk' },
            { k: '18', v: 'Projecten per jaar' },
            { k: '25', v: 'Jaar garantie' },
            { k: '2200K', v: 'Warm wit licht' },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="font-serif text-5xl md:text-6xl text-deck-accent font-light mb-2">{s.k}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-deck-light/50">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── CONTACT / CTA ─────────── */}
      <section id="contact" className="relative py-40 md:py-56 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.veranda} alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-deck-dark via-deck-dark/80 to-deck-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,168,87,0.1)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-deck-accent mb-8">&mdash; Contact</div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-10 tracking-tight">
              Laten we een<br />
              <span className="italic text-deck-accent">avond bouwen</span>.
            </h2>
            <p className="text-deck-light/60 text-lg md:text-xl font-light max-w-xl mx-auto mb-14 leading-relaxed">
              Plan een vrijblijvend locatiebezoek. Wij komen langs, meten op, en sturen binnen 5 werkdagen een concept met 3D-render.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@exclusivedecks.nl"
                className="inline-flex items-center gap-3 bg-deck-accent text-deck-dark px-10 py-5 rounded-full text-xs tracking-[0.25em] uppercase font-medium hover:bg-deck-glow transition-all duration-500"
              >
                Plan locatiebezoek
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+31302072388"
                className="inline-flex items-center gap-3 border border-deck-accent/40 text-deck-accent px-10 py-5 rounded-full text-xs tracking-[0.25em] uppercase hover:border-deck-accent hover:bg-deck-accent/10 transition-all duration-500"
              >
                Bel direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="relative border-t border-deck-accent/10 px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-xl tracking-wide text-deck-accent">Exclusive</span>
              <span className="font-serif italic text-xl tracking-wide text-deck-light/80">Decks</span>
            </div>
            <p className="text-deck-light/50 max-w-sm text-sm font-light leading-relaxed">
              Houten terrassen met geïntegreerde LED-verlichting. Maatwerk voor privétuinen, daktuinen, villa&apos;s en poolside-omgevingen.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-deck-accent mb-4">Contact</div>
            <div className="space-y-2 text-sm text-deck-light/60 font-light">
              <div>info@exclusivedecks.nl</div>
              <div>+31 30 207 23 88</div>
              <div>Nederland &middot; België</div>
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-deck-accent mb-4">Sister brands</div>
            <div className="space-y-2 text-sm font-light">
              <Link href="/woonklasse" className="block text-deck-light/60 hover:text-deck-accent transition-colors">Woonklasse</Link>
              <Link href="/badkamerstijl" className="block text-deck-light/60 hover:text-deck-accent transition-colors">Badkamerstijl</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-deck-accent/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-deck-light/30">
          <div>&copy; {new Date().getFullYear()} ExclusiveDecks</div>
          <div className="flex gap-6">
            <Link href="/privacybeleid" className="hover:text-deck-accent transition-colors">Privacy</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-deck-accent transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
