'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { CollageGrid } from '@/components/woonklasse/CollageGrid';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectenPage() {
  // Pick a featured project for the hero collage — use different images than homepage
  const heroProject = projects[1]; // luxe-afwerking
  const heroImgs = [
    `/woonklasse/projecten/${heroProject.slug}/2.jpg`,
    `/woonklasse/projecten/${heroProject.slug}/7.jpg`,
    `/woonklasse/projecten/${heroProject.slug}/12.jpg`,
  ];

  return (
    <main className="min-h-screen bg-woon-light text-woon-primary">
      {/* Hero with CollageGrid */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-6"
          >
            Projecten
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] mb-8"
          >
            Onze realisaties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-woon-secondary text-lg max-w-2xl leading-relaxed"
          >
            Ruimtes die inspireren en duurzaam zijn. Van volledige transformaties tot verfijnde details. Bekijk ons werk.
          </motion.p>
        </div>

        {/* Hero Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl"
        >
          <CollageGrid slug={heroProject.slug} imgs={heroImgs} isEven={false} />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-6 md:mx-12 lg:mx-20 border-b border-woon-primary/10" />

      {/* Projects Grid — BAMO style cards */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {projects.map((project, idx) => (
            <FadeIn key={project.slug} delay={(idx % 3) * 0.1}>
              <Link
                href={`/woonklasse/projecten/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-woon-cream">
                  <Image
                    src={project.heroImage}
                    alt={project.subtitle}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-woon-accent text-[10px] tracking-[0.2em] uppercase mb-1">Verbouwing</p>
                    <h2 className="font-heading text-xl font-bold group-hover:text-woon-accent transition-colors duration-300">
                      {project.subtitle}
                    </h2>
                    <p className="text-woon-secondary text-sm mt-2 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-woon-secondary shrink-0 mt-1 group-hover:text-woon-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-woon-cream text-center px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Uw project hier?</h2>
          <p className="text-woon-secondary mb-10 max-w-md mx-auto">
            Neem contact op voor een vrijblijvend gesprek over uw droomproject.
          </p>
          <Link
            href="/woonklasse/offerte"
            className="inline-flex items-center gap-3 bg-woon-primary text-woon-light font-bold px-10 py-4 rounded-full transition-all hover:scale-105 text-sm tracking-wide"
          >
            Start uw project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
