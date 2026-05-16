'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProject, projects, type ProjectSection } from '@/data/projects';

/* ─── animation helpers ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

function img(slug: string, n: number) {
  return `/woonklasse/projecten/${slug}/${n}.jpg`;
}

/* ─── Section renderers ─── */

function FullWidthImage({ slug, images }: { slug: string; images: number[] }) {
  return (
    <motion.div {...fadeUp} className="px-5 md:px-12 lg:px-[50px]">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
        <Image src={img(slug, images[0])} alt="" fill className="object-cover" sizes="100vw" />
      </div>
    </motion.div>
  );
}

function DualImages({ slug, images }: { slug: string; images: number[] }) {
  return (
    <motion.div {...fadeUp} className="px-5 md:px-12 lg:px-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {images.map((n) => (
          <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image src={img(slug, n)} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function QuoteSection({ quote }: { quote: NonNullable<ProjectSection['quote']> }) {
  const isDark = quote.type === 'dark';
  return (
    <section className={`py-20 md:py-28 ${isDark ? 'bg-woon-dark' : 'bg-woon-light'}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.blockquote
          {...fadeUp}
          className={`font-display text-2xl md:text-[30px] font-light italic leading-relaxed ${
            isDark ? 'text-white' : 'text-woon-accent'
          }`}
        >
          &ldquo;{quote.text}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}

function MosaicText({ slug, section }: { slug: string; section: ProjectSection }) {
  const images = section.images || [];
  const paragraphs = (section.body || '').split('\n\n');

  const photosBlock = (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
      {images.map((n, i) => (
        <div
          key={n}
          className={`relative overflow-hidden rounded-sm ${
            i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
          }`}
        >
          <Image src={img(slug, n)} alt="" fill className="object-cover" sizes="40vw" />
        </div>
      ))}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <motion.p {...fadeUp} className="text-[15px] tracking-[1.5px] uppercase font-medium text-woon-secondary mb-4">
        {section.heading}
      </motion.p>
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          {...fadeUp}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          className="text-woon-secondary text-lg md:text-xl font-light leading-relaxed mb-6 last:mb-0"
        >
          {p}
        </motion.p>
      ))}
    </div>
  );

  return (
    <div className="px-5 md:px-12 lg:px-[50px]">
      <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 ${section.flip ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:flex-1">{section.flip ? textBlock : photosBlock}</div>
        <div className="lg:flex-1">{section.flip ? photosBlock : textBlock}</div>
      </div>
    </div>
  );
}

function TextPhoto({ slug, section }: { slug: string; section: ProjectSection }) {
  const images = section.images || [];
  const paragraphs = (section.body || '').split('\n\n');

  const photoBlock = (
    <motion.div {...fadeUp} className="lg:w-2/5">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <Image src={img(slug, images[0])} alt="" fill className="object-cover" sizes="40vw" />
      </div>
    </motion.div>
  );

  const textBlock = (
    <div className="lg:w-3/5 flex flex-col justify-center">
      <motion.p {...fadeUp} className="text-[15px] tracking-[1.5px] uppercase font-medium text-woon-secondary mb-4">
        {section.heading}
      </motion.p>
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          {...fadeUp}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          className="text-woon-secondary text-lg md:text-xl font-light leading-relaxed mb-6 last:mb-0"
        >
          {p}
        </motion.p>
      ))}
    </div>
  );

  return (
    <div className="px-5 md:px-12 lg:px-[50px]">
      <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 ${section.flip ? '' : 'lg:flex-row-reverse'}`}>
        {photoBlock}
        {textBlock}
      </div>
    </div>
  );
}

function SectionRenderer({ slug, section }: { slug: string; section: ProjectSection }) {
  switch (section.kind) {
    case 'full':
      return <FullWidthImage slug={slug} images={section.images || []} />;
    case 'dual':
      return <DualImages slug={slug} images={section.images || []} />;
    case 'quote':
      return section.quote ? <QuoteSection quote={section.quote} /> : null;
    case 'mosaic-text':
      return <MosaicText slug={slug} section={section} />;
    case 'text-photo':
      return <TextPhoto slug={slug} section={section} />;
    default:
      return null;
  }
}

/* ─── Main page ─── */

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-woon-light flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl font-light italic mb-4">Project niet gevonden</h1>
          <Link href="/woonklasse" className="text-woon-accent hover:underline">Terug naar Woonklasse</Link>
        </div>
      </main>
    );
  }

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark">

      {/* ===== BLOK 1 - HERO (full-bleed) ===== */}
      <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-woon-dark">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image src={project.heroImage} alt={project.subtitle} fill className="object-cover" priority sizes="100vw" />
        </motion.div>

        {/* Back link */}
        <div className="absolute top-24 left-5 md:left-12 lg:left-[50px] z-20">
          <Link href="/woonklasse#projecten" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="tracking-wide">Alle projecten</span>
          </Link>
        </div>
      </section>

      {/* ===== BLOK 2 - PROJECT INFO HEADER (two columns) ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
            {/* Left - Title + description */}
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[15px] tracking-[1.5px] uppercase font-medium text-woon-secondary mb-4"
              >
                {project.subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-[40px] md:text-[50px] font-extralight italic leading-[1.1] text-woon-dark mb-8"
              >
                {project.description}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-woon-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl"
              >
                {project.intro}
              </motion.p>
            </div>

            {/* Right - Meta details */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6 lg:pt-12"
              >
                {project.details.map((detail) => (
                  <div key={detail.label} className="grid grid-cols-2 gap-4">
                    <p className="text-[15px] tracking-[1.5px] uppercase font-semibold text-woon-dark">{detail.label}</p>
                    <p className="text-[15px] text-woon-secondary">{detail.value}</p>
                  </div>
                ))}
                <div className="pt-6">
                  <Link
                    href="/woonklasse/offerte"
                    className="inline-flex items-center gap-2 bg-woon-accent text-woon-dark font-medium px-8 py-3 rounded-full transition-all hover:scale-105 text-sm"
                  >
                    Vergelijkbaar project?
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL SECTIONS ===== */}
      <div className="space-y-16 md:space-y-24 pb-24 md:pb-32">
        {project.sections.map((section, i) => (
          <SectionRenderer key={i} slug={slug} section={section} />
        ))}
      </div>

      {/* ===== NEXT PROJECT ===== */}
      <section className="border-t border-gray-200">
        <Link href={`/woonklasse/projecten/${nextProject.slug}`} className="group block">
          <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-[50px] py-16 flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-woon-secondary mb-2">Volgend project</p>
              <h3 className="font-display text-3xl md:text-4xl font-light italic group-hover:text-woon-accent transition-colors">
                {nextProject.subtitle}
              </h3>
            </div>
            <ArrowRight className="w-8 h-8 text-woon-secondary group-hover:text-woon-accent group-hover:translate-x-2 transition-all" />
          </div>
        </Link>
      </section>
    </main>
  );
}
