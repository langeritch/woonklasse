'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import HeroAdviesTool from '@/components/HeroAdviesTool';

/* ──────────────────────────── DATA ──────────────────────────── */

const processSteps = [
  {
    number: '01',
    title: 'Advies',
    desc: 'We luisteren naar jouw wensen, bespreken stijlen en brengen de mogelijkheden in kaart.',
    image: '/badkamerstijl/2200xxs(24).jpg',
  },
  {
    number: '02',
    title: 'Ontwerp',
    desc: 'We vertalen jouw visie naar een doordacht totaalconcept met materialen, kleuren en indelingen.',
    image: '/badkamerstijl/2200xxs(25).jpg',
  },
  {
    number: '03',
    title: 'Realisatie',
    desc: 'Onze vakmensen voeren het ontwerp uit met precisie, van leidingwerk tot de laatste tegel.',
    image: '/badkamerstijl/2200xxs(43).jpg',
  },
  {
    number: '04',
    title: 'Oplevering',
    desc: 'We controleren elk detail en leveren jouw droombadkamer op, klaar om van te genieten.',
    image: '/badkamerstijl/2200xxs(46).jpg',
  },
];

const portfolioItems = [
  { name: 'Modern Minimalistisch', location: 'AMS', slug: 'modern' },
  { name: 'Warm Natuurlijk', location: 'UTR', slug: 'warm-natuurlijk' },
  { name: 'Industrieel Chic', location: 'RTD', slug: 'industrieel' },
  { name: 'Klassiek Luxe', location: 'AMS', slug: 'klassiek' },
  { name: 'Boutique Hotel', location: 'NH', slug: 'boutique' },
];

const blogPosts = [
  {
    title: 'De kunst van materiaalcombinaties in de badkamer',
    date: '15 Maart 2025',
    excerpt: 'Hoe marmer, hout en beton samen een luxe en warm geheel vormen in modern badkamerontwerp.',
    image: '/badkamerstijl/2200xxs(27).jpg',
  },
  {
    title: 'Lichtontwerp als fundament van badkamerbeleving',
    date: '2 Februari 2025',
    excerpt: 'Waarom verlichting het verschil maakt in elke badkamer en hoe wij dit benaderen.',
    image: '/badkamerstijl/2200xxs(28).jpg',
  },
  {
    title: 'Duurzaam renoveren zonder concessies aan stijl',
    date: '18 Januari 2025',
    excerpt: 'Onze aanpak voor ecologisch verantwoord badkamerontwerp dat generaties meegaat.',
    image: '/badkamerstijl/2200xxs(32).jpg',
  },
];

const partners = [
  'Hansgrohe',
  'Dornbracht',
  'Villeroy & Boch',
  'Duravit',
  'Geberit',
  'Grohe',
  'Porcelanosa',
  'Vola',
];

/* ─────────────────────── HERO SLIDES ─────────────────────── */

type HeroWord = { text: string; italic: boolean };
type HeroSlide = { image: string; words: HeroWord[] };

const heroSlides: HeroSlide[] = [
  {
    image: '/badkamerstijl/2200xxs(24).jpg',
    words: [
      { text: 'Wij', italic: false },
      { text: 'ontwerpen', italic: false },
      { text: 'luxe', italic: false },
      { text: 'badkamers', italic: true },
      { text: 'voor', italic: false },
      { text: 'wie', italic: false },
      { text: 'droomt', italic: true },
      { text: 'van', italic: false },
      { text: 'perfectie.', italic: true },
    ],
  },
  {
    image: '/badkamerstijl/2200xxs(43).jpg',
    words: [
      { text: 'Waar', italic: false },
      { text: 'ambacht', italic: true },
      { text: 'en', italic: false },
      { text: 'elegantie', italic: true },
      { text: 'elkaar', italic: false },
      { text: 'ontmoeten.', italic: false },
    ],
  },
  {
    image: '/badkamerstijl/2200xxs(37).jpg',
    words: [
      { text: 'Jouw', italic: false },
      { text: 'privé', italic: true },
      { text: 'spa,', italic: true },
      { text: 'elke', italic: false },
      { text: 'dag', italic: false },
      { text: 'opnieuw.', italic: false },
    ],
  },
  {
    image: '/badkamerstijl/2200xxs(30).jpg',
    words: [
      { text: 'Tijdloze', italic: true },
      { text: 'luxe,', italic: true },
      { text: 'tot', italic: false },
      { text: 'in', italic: false },
      { text: 'het', italic: false },
      { text: 'kleinste', italic: false },
      { text: 'detail.', italic: true },
    ],
  },
  {
    image: '/badkamerstijl/2200xxs(46).jpg',
    words: [
      { text: 'Een', italic: false },
      { text: 'badkamer', italic: true },
      { text: 'die', italic: false },
      { text: 'voelt', italic: true },
      { text: 'als', italic: false },
      { text: 'thuiskomen.', italic: true },
    ],
  },
];

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function BadkamerstijlHome() {
  const heroRef = useRef<HTMLElement>(null);
  const fullwidthRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const processScrollRef = useRef<HTMLDivElement>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  /* Auto-advance hero slideshow — resets when heroIndex changes */
  useEffect(() => {
    const id = setTimeout(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearTimeout(id);
  }, [heroIndex]);

  /* Fullwidth image parallax */
  const { scrollYProgress: fwScroll } = useScroll({
    target: fullwidthRef,
    offset: ['start end', 'end start'],
  });
  const fwY = useTransform(fwScroll, [0, 1], ['-8%', '8%']);

  /* GSAP — horizontal scroll + image reveals */
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* Horizontal scroll — desktop only */
        if (window.innerWidth >= 768) {
          const section = processSectionRef.current;
          const container = processScrollRef.current;
          if (section && container) {
            const totalWidth = container.scrollWidth;
            const viewWidth = window.innerWidth;
            gsap.to(container, {
              x: -(totalWidth - viewWidth),
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${totalWidth - viewWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        }

        /* Image clip-path reveals */
        gsap.utils.toArray<HTMLElement>('.sx-reveal').forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: 'inset(100% 0 0 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            },
          );
        });

        /* Section labels fade in */
        gsap.utils.toArray<HTMLElement>('.sx-label').forEach((el) => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          });
        });

        /* Subtle image scale on scroll */
        gsap.utils.toArray<HTMLElement>('.sx-scale').forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 1 },
            {
              scale: 1.05,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
      });
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Image crossfade slideshow with Ken Burns */}
        <AnimatePresence mode="sync">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.18 }}
            exit={{ opacity: 0, scale: 1.22 }}
            transition={{
              opacity: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 7.5, ease: 'linear' },
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[heroIndex].image}
              alt="Luxe badkamer interieur"
              fill
              className="object-cover"
              priority={heroIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/80" />

        {/* Subtle grain */}
        <div
          className="absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top-left brand marker */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute top-10 md:top-12 left-6 md:left-12 lg:left-20 z-20 hidden md:flex items-center gap-3"
        >
          <span className="w-6 lg:w-8 h-px bg-white/60" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
            Luxe op maat
          </span>
        </motion.div>

        {/* Top-right slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute top-6 md:top-10 right-6 md:right-12 lg:right-20 z-30 flex items-center gap-1"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/60 tabular-nums mr-4 hidden xl:inline-block">
            {String(heroIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </span>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHeroIndex(i)}
              className="group relative px-2 py-5 cursor-pointer"
              aria-label={`Afbeelding ${i + 1} tonen`}
              aria-current={i === heroIndex}
            >
              <span
                className={`block h-[2px] rounded-full transition-all duration-700 ease-out ${
                  i === heroIndex
                    ? 'w-12 bg-white'
                    : 'w-6 bg-white/40 group-hover:w-10 group-hover:bg-white'
                }`}
              />
            </button>
          ))}
        </motion.div>

        {/* Center content */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-[clamp(2.5rem,7.2vw,9.5rem)] font-light leading-[1.02] tracking-[-0.025em] text-white">
            {heroSlides[heroIndex].words.map((word, i) => (
              <motion.span
                key={`${heroIndex}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.07,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block mr-[0.25em] ${word.italic ? 'italic' : ''}`}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#advies"
              className="group inline-flex items-center gap-3 bg-white text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bsv2-teal hover:text-white transition-all duration-300"
            >
              Krijg persoonlijk advies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              href="/portfolio"
              className="text-white/80 text-sm font-medium tracking-wide hover:text-white transition-colors underline underline-offset-[6px] decoration-white/30 hover:decoration-white"
            >
              Bekijk portfolio
            </Link>
          </motion.div>
        </div>

        {/* Bottom-left tagline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-6 md:left-12 lg:left-20 z-20 hidden md:block"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/55 leading-[2]">
            Ontwerp · Ambacht
            <br />
            Realisatie van A tot Z
          </p>
        </motion.div>

      </section>

      {/* ═══════════════ 1B. PERSOONLIJK ADVIES (FORM) ═══════════════ */}
      <section
        id="advies"
        className="relative py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-bsv2-cream"
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Persoonlijk advies)
            </span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light leading-[1.15] mb-5">
              Vertel ons over jouw <span className="italic text-bsv2-teal">droombadkamer</span>
            </h2>
            <p className="text-bsv2-grey text-base leading-relaxed max-w-md">
              In 3 stappen krijg je persoonlijk advies van ons team — upload eventueel foto&apos;s van je huidige situatie, dan denken wij gericht met je mee.
            </p>
          </div>
          <div className="w-full">
            <HeroAdviesTool brand="badkamerstijl" />
          </div>
        </div>
      </section>

      {/* ═══════════════════ 2. OVER ONS ═══════════════════ */}
      <section className="py-24 md:py-32 lg:py-44 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-12 block">
          (Over ons)
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — tall image */}
          <div className="sx-reveal aspect-[3/4] relative overflow-hidden">
            <div className="sx-scale w-full h-full relative">
              <Image
                src="/badkamerstijl/2200xxs(25).jpg"
                alt="Luxe badkamer detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — text + small offset image */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-cormorant text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] mb-8"
            >
              Badkamerstijl ontwerpt en realiseert badkamers die de essentie van
              luxe vangen. Met oog voor detail, ambachtelijk vakmanschap en een
              diep begrip van materiaal en licht.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-bsv2-grey text-base leading-relaxed mb-12 max-w-lg"
            >
              Jij droomt het, wij bouwen hem. Van het eerste adviesgesprek tot de
              laatste tegel — onze aanpak is persoonlijk, onze standaard
              oncompromitterend. Specialist in badkamerontwerp, renovatie en
              montage.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/stijlen"
                className="group inline-flex items-center gap-3"
              >
                <span className="bg-bsv2-teal text-white text-sm font-medium px-7 py-3 rounded-full group-hover:bg-bsv2-charcoal transition-colors duration-300">
                  Ontdek onze stijlen
                </span>
              </Link>
              <Link
                href="/stijlen"
                className="w-12 h-12 rounded-full border-2 border-bsv2-teal text-bsv2-teal flex items-center justify-center hover:bg-bsv2-teal hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Small offset image */}
            <div className="sx-reveal mt-20 ml-auto w-48 md:w-64 aspect-[4/3] relative overflow-hidden">
              <Image
                src="/badkamerstijl/2200xxsxm(26).jpg"
                alt="Badkamer detail"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. STIJLEN (DARK) ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-32">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(37).jpg"
            alt="Luxe badkamer"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20">
          <span className="text-white/30 text-[11px] tracking-[0.15em] lowercase mb-16 block">
            (Stijlen)
          </span>

          <div className="space-y-4 md:space-y-6">
            {portfolioItems.map((item, i) => {
              const offsets = [0, 15, 8, 20, 5];
              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="md:pl-[var(--offset)]"
                  style={{ '--offset': `${offsets[i] || 0}%` } as React.CSSProperties}
                >
                  <Link href={`/stijlen#${item.slug}`} className="group inline-block">
                    <h3 className="font-cormorant text-3xl sm:text-4xl md:text-[clamp(2rem,5vw,6rem)] font-light text-white/60 md:text-white/15 group-hover:text-white/90 transition-all duration-500 leading-none">
                      {item.name}
                      <span className="text-sm md:text-lg ml-2 align-top text-white/25 group-hover:text-bsv2-accent-soft transition-colors duration-500">
                        ({item.location})
                      </span>
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. PROCES — Horizontal Scroll ═══════════════ */}
      <section
        ref={processSectionRef}
        className="relative bg-bsv2-cream md:h-screen md:overflow-hidden"
      >
        <div
          ref={processScrollRef}
          className="flex flex-col md:flex-row md:items-stretch md:h-screen"
        >
          {/* Intro panel */}
          <div className="flex-shrink-0 md:w-screen md:h-screen flex flex-col justify-center px-6 md:px-20 py-20 md:py-0">
            <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-8">
              (Ons proces)
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4">
              Hoe wij
              <br />
              <span className="italic">werken</span>
            </h2>
          </div>

          {/* Steps */}
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex-shrink-0 md:w-[50vw] lg:w-[40vw] md:h-screen flex flex-col justify-center px-6 md:px-16 py-16 md:py-0 border-t md:border-t-0 md:border-l border-bsv2-charcoal/10"
            >
              <span className="font-cormorant text-[72px] md:text-[140px] font-light text-bsv2-charcoal/[0.06] leading-none mb-2">
                {step.number}
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-4">
                {step.title}
              </h3>
              <p className="text-bsv2-grey text-base leading-relaxed mb-8 max-w-sm">
                {step.desc}
              </p>
              <Link
                href="/diensten"
                className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Meer info <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="mt-8 aspect-[16/10] relative overflow-hidden w-full max-w-sm">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ 5. PARTNER LOGOS ═══════════════ */}
      <section className="py-24 md:py-32 bg-bsv2-cream px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-14 block">
            (Partners)
          </span>

          <div className="flex flex-wrap gap-4 md:gap-5">
            {partners.map((partner, i) => {
              const heights = [80, 96, 72, 88, 104, 76, 92, 84];
              return (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="bg-white/50 backdrop-blur-sm px-8 rounded-xl text-bsv2-charcoal/60 font-cormorant text-lg tracking-wide flex items-center border border-bsv2-charcoal/[0.04] hover:bg-white/80 transition-colors duration-300"
                  style={{ height: `${heights[i]}px` }}
                >
                  {partner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 7. FULLWIDTH IMAGE ═══════════════ */}
      <section ref={fullwidthRef} className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.div style={{ y: fwY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <Image
            src="/badkamerstijl/2200xxs(30).jpg"
            alt="Luxe badkamer interieur"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </section>

      {/* ═══════════════ 8. INSPIRATIE (BLOG) ═══════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto">
          <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-14 block">
            (Inspiratie)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="sx-reveal aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <time className="text-bsv2-grey text-xs tracking-[0.05em]">
                  {post.date}
                </time>
                <h3 className="font-cormorant text-xl md:text-2xl font-light mt-2 mb-3 group-hover:text-bsv2-teal transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-bsv2-grey text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="bg-bsv2-teal text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300 inline-flex items-center gap-2"
            >
              Bekijk ons portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ 9. FOOTER / CTA ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — artistic image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <Image
              src="/badkamerstijl/2200xxs(44).jpg"
              alt="Luxe badkamer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right — CTA + nav + legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-10">
              Laten we jouw
              <br />
              <span className="italic">droombadkamer</span>
              <br />
              realiseren
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/adviesgesprek"
                className="bg-bsv2-teal text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Adviesgesprek plannen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/adviesgesprek"
                className="border border-bsv2-charcoal text-bsv2-charcoal text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal hover:text-white transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Bel ons direct
              </Link>
            </div>

            {/* Nav links */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-bsv2-grey mb-12">
              <Link href="/" className="hover:text-bsv2-charcoal transition-colors">Home</Link>
              <Link href="/diensten" className="hover:text-bsv2-charcoal transition-colors">Diensten</Link>
              <Link href="/stijlen" className="hover:text-bsv2-charcoal transition-colors">Stijlen</Link>
              <Link href="/portfolio" className="hover:text-bsv2-charcoal transition-colors">Portfolio</Link>
              <Link href="/adviesgesprek" className="hover:text-bsv2-charcoal transition-colors">Contact</Link>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-bsv2-charcoal transition-colors">Instagram</a>
            </div>

            {/* Legal */}
            <div className="pt-8 border-t border-bsv2-charcoal/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-bsv2-grey">
                <p>&copy; 2025 Badkamerstijl. Alle rechten voorbehouden.</p>
                <div className="flex gap-6">
                  <Link href="/privacybeleid" className="hover:text-bsv2-charcoal transition-colors">Privacybeleid</Link>
                  <Link href="/algemene-voorwaarden" className="hover:text-bsv2-charcoal transition-colors">Voorwaarden</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
