'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { CollageGrid } from '@/components/woonklasse/CollageGrid';
import HeroAdviesTool from '@/components/HeroAdviesTool';

const services = [
  {
    number: '01',
    title: 'Complete verbouwing',
    desc: 'Van sloop tot sleutelklare oplevering. Wij vernieuwen uw woning met oog voor detail en duurzaamheid.',
  },
  {
    number: '02',
    title: 'Totaal renovatie & nieuwbouw',
    // TODO: copy nog finetunen samen met Ilias
    desc: 'Casco-renovaties en nieuwbouw op maat. Eén aannemer, vaste aanneemsom en een vast team van eerste schets tot oplevering.',
  },
  {
    number: '03',
    title: 'Sanitair specialist',
    // TODO: copy nog finetunen samen met Ilias
    desc: 'Eigen sanitair specialisten in vaste dienst. Van complete badkamer tot losse aanpassingen — alles strak afgewerkt.',
  },
];

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className || ''}`}>
      <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}

// Homepage shows a single curated project (Luxe afwerking) so the page
// has one strong photo block + the services parallax — no overload.
const HOMEPAGE_PROJECTS = projects.filter((p) => p.slug === 'luxe-afwerking');

export default function WoonklassePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark">

      {/* ===== HERO — softer, with embedded advies tool ===== */}
      <section ref={heroRef} className="relative min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden py-24 md:py-28">
        <motion.div
          style={{ scale: 1.05 }}
          className="absolute inset-0"
        >
          <Image
            src="/woonklasse/villa-bergen-1.jpg"
            alt="Woonklasse"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — hero copy */}
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-left lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs tracking-[0.35em] uppercase text-woon-accent mb-5 font-medium"
            >
              Vakmanschap &middot; Kwaliteit &middot; Ontzorging
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic text-white leading-[1.05] tracking-tight mb-6"
            >
              Wij bouwen{' '}
              <span className="not-italic font-medium text-woon-accent">uw droomwoning</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="text-white/75 text-base md:text-lg max-w-lg font-light"
            >
              Van complete renovaties en nieuwbouw tot een nieuwe badkamer. Met een vast team, een vaste prijs en oog voor het detail.
            </motion.p>
          </motion.div>

          {/* Right — advies tool */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl lg:ml-auto"
          >
            <HeroAdviesTool brand="woonklasse" />
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="py-24 md:py-32 bg-woon-light">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-woon-dark leading-[1.2] mb-8"
          >
            Wij luisteren naar uw verhaal en bouwen met precisie,{' '}
            <span className="text-woon-accent not-italic">zodat uw woning precies wordt wat u altijd voor ogen had.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-woon-accent mx-auto"
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Image */}
            <ParallaxImage
              src="/woonklasse/canal-residence-2.jpg"
              alt="Woonklasse vakmanschap"
              className="aspect-[3/4] rounded-2xl relative"
            />

            {/* Right — Services list */}
            <div className="lg:pt-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] uppercase text-woon-secondary mb-4"
              >
                Onze expertise
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl font-light italic mb-12"
              >
                Wat wij <span className="text-woon-accent not-italic font-medium">doen</span>
              </motion.h2>

              <div className="space-y-10">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex gap-6 pb-10 border-b border-gray-100 last:border-0 cursor-default"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-5xl font-display font-light text-woon-accent/30 leading-none shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-woon-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-woon-secondary leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Eigen kozijnen leverancier — small trust line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 inline-flex items-center gap-3 text-sm text-woon-secondary"
              >
                <span className="w-8 h-px bg-woon-accent" />
                Met een eigen kozijnen leverancier — kortere lijnen, scherpere prijzen.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS — slimmer curated set ===== */}
      <section id="projecten" className="py-24 md:py-28 bg-woon-light text-woon-dark overflow-hidden">
        <div className="space-y-20 md:space-y-28">
          {HOMEPAGE_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1;
            const imgs = [
              `/woonklasse/projecten/${project.slug}/1.jpg`,
              `/woonklasse/projecten/${project.slug}/3.jpg`,
              `/woonklasse/projecten/${project.slug}/5.jpg`,
            ];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`w-[90%] md:w-[65%] ${isEven ? 'ml-auto mr-[1.6rem]' : 'mr-auto ml-[1.6rem]'}`}
              >
                <Link
                  href={`/woonklasse/projecten/${project.slug}`}
                  className="group mb-6 block"
                >
                  <h3 className={`font-display text-base md:text-xl lg:text-2xl font-extralight leading-[1.1] tracking-tight group-hover:text-woon-accent transition-colors ${isEven ? 'text-right' : 'text-left'}`}>
                    {project.subtitle}
                  </h3>
                </Link>

                <CollageGrid slug={project.slug} imgs={imgs} isEven={isEven} />
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/woonklasse/projecten"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-woon-secondary hover:text-woon-accent transition-colors"
          >
            Alle projecten bekijken
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 md:py-28 bg-woon-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-woon-secondary mb-6">Klaar om te starten?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic mb-8">
              Laten we <span className="text-woon-accent not-italic font-medium">kennismaken</span>
            </h2>
            <p className="text-woon-secondary text-lg mb-10 max-w-xl mx-auto font-light">
              Vertel ons over uw project. Wij denken met u mee, van eerste idee tot perfecte uitvoering.
            </p>
            <Link
              href="/woonklasse/offerte"
              className="inline-flex items-center gap-3 bg-woon-accent text-woon-dark font-medium px-12 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-woon-accent/20 text-base tracking-wide"
            >
              Vraag een vrijblijvende offerte aan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
