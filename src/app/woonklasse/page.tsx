'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { CollageGrid } from '@/components/woonklasse/CollageGrid';

const services = [
  {
    number: '01',
    title: 'Complete Verbouwing',
    desc: 'Van sloop tot sleutelklare oplevering. Wij vernieuwen uw gehele woning met oog voor detail, kwaliteit en duurzaamheid.',
  },
  {
    number: '02',
    title: 'Aanbouw & Serres',
    desc: 'Meer ruimte, meer licht. Onze aanbouwen en serres sluiten architectonisch naadloos aan op uw bestaande woning.',
  },
  {
    number: '03',
    title: 'Luxe Veranda\'s',
    desc: 'Het hele jaar buiten genieten. Onze op maat gemaakte veranda\'s combineren stijl met duurzame kwaliteit.',
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


export default function WoonklassePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark">

      {/* ===== CINEMATIC HERO — BAMO + Opaline inspired ===== */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          style={{ scale: 1.1 }}
          className="absolute inset-0"
        >
          <Image
            src="/woonklasse/villa-bergen-1.jpg"
            alt="Woonklasse Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

        {/* Hero content */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-20 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium"
          >
            Vakmanschap &middot; Kwaliteit &middot; Ontzorging
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic text-white leading-[1.05] tracking-tight mb-8"
          >
            Wij bouwen<br />
            <span className="not-italic font-medium text-woon-accent">uw droomwoning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light"
          >
            Van eerste schets tot sleutelklare oplevering. Wij realiseren complete verbouwingen, hoogwaardige aanbouwen en luxe veranda&apos;s, precies zoals u het voor ogen heeft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/woonklasse/offerte"
              className="inline-flex items-center justify-center gap-2 bg-woon-accent text-woon-dark font-medium px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-woon-accent/20 text-sm tracking-wide"
            >
              Vraag vrijblijvend offerte aan
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#projecten"
              className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:text-white hover:border-white/50 px-10 py-4 rounded-full transition-all text-sm tracking-wide"
            >
              Bekijk onze projecten
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ===== INTRO TEXT — Goldkant inspired minimal text section ===== */}
      <section className="py-32 md:py-40 bg-woon-light">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
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

      {/* ===== SERVICES — Markovskaia inspired numbered list ===== */}
      <section className="py-24 bg-white">
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
                className="font-display text-4xl md:text-5xl font-light italic mb-16"
              >
                Wat wij <span className="text-woon-accent not-italic font-medium">doen</span>
              </motion.h2>

              <div className="space-y-12">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex gap-6 pb-12 border-b border-gray-100 last:border-0 cursor-default"
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
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS — BAMO 12×9 grid collage ===== */}
      <section id="projecten" className="py-32 bg-woon-light text-woon-dark overflow-hidden">
        {/* Collage blocks — alternating left/right, edge-to-edge with uniform gap */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => {
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
                {/* Heading — BAMO serif style */}
                <Link
                  href={`/woonklasse/projecten/${project.slug}`}
                  className="group mb-6 block"
                >
                  <h3 className={`font-display text-base md:text-xl lg:text-2xl font-extralight leading-[1.1] tracking-tight group-hover:text-woon-accent transition-colors ${isEven ? 'text-right' : 'text-left'}`}>
                    {project.subtitle}
                  </h3>
                </Link>

                {/* 12×9 Collage Grid with explore cursor */}
                <CollageGrid slug={project.slug} imgs={imgs} isEven={isEven} />
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* ===== FULL-WIDTH IMAGE BREAK ===== */}
      <section className="relative h-[60vh] overflow-hidden">
        <ParallaxImage
          src="/woonklasse/penthouse-zoetermeer-2.jpg"
          alt="Luxe interieur"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light italic text-white text-center px-6"
          >
            Het verschil zit in <span className="text-woon-accent not-italic font-medium">de details</span>
          </motion.h2>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-32 bg-woon-light">
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
            <p className="text-woon-secondary text-lg mb-12 max-w-xl mx-auto font-light">
              Vertel ons over uw project. Wij denken met u mee, van eerste idee tot perfecte uitvoering.
            </p>
            <Link
              href="/woonklasse/offerte"
              className="inline-flex items-center gap-3 bg-woon-accent text-woon-dark font-medium px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-woon-accent/20 text-base tracking-wide"
            >
              Vraag een vrijblijvende offerte aan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CROSS-SELL BADKAMERSTIJL ===== */}
      <section className="relative py-24 overflow-hidden bg-badkamer-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/badkamers/japandi.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-badkamer-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-badkamer-accent mb-4">Onze partner</p>
          <h2 className="font-display text-3xl md:text-5xl font-light italic mb-6">
            Ook een nieuwe <span className="text-badkamer-accent not-italic font-medium">badkamer</span>?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 font-light">
            Voor specialistisch sanitairadvies, badkamerontwerp en loodgieterswerk werken wij samen met Badkamerstijl.
          </p>
          <Link
            href="/badkamerstijl"
            className="inline-flex items-center gap-3 border border-badkamer-accent text-badkamer-accent px-10 py-4 rounded-full transition-all hover:bg-badkamer-accent hover:text-white text-sm tracking-widest uppercase"
          >
            Ontdek Badkamerstijl
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
