'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Clock, Calendar } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import BlogContent from './BlogContent';
import {
  CATEGORY_LABEL,
  calculateReadingTime,
  type BlogPost,
  type Heading,
} from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogArticle({
  post,
  headings,
  relatedPosts,
}: {
  post: BlogPost;
  headings: Heading[];
  relatedPosts: BlogPost[];
}) {
  const readingTime = calculateReadingTime(post.content);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Breadcrumb (over hero) */}
      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="text-white/30">/</span>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <span className="text-white/30">/</span>
        <span className="text-white">{CATEGORY_LABEL[post.category]}</span>
      </nav>

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/20 to-black/85" />

        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-14 md:pb-20 max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            <span className="w-8 h-px bg-white/60" />
            {CATEGORY_LABEL[post.category]}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-[clamp(2rem,5.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.015em] text-white max-w-4xl"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex items-center flex-wrap gap-6 text-white/75 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              {readingTime} min lezen
            </span>
          </motion.div>
        </div>
      </section>

      {/* BODY: 2 columns - TOC sidebar + article */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
          {/* TOC + Sidebar ad */}
          <aside className="lg:sticky lg:top-28 self-start space-y-10">
            {headings.length > 0 && (
              <nav aria-label="Inhoudsopgave">
                <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-5 block">
                  (Inhoud)
                </span>
                <ul className="space-y-2.5 border-l border-bsv2-charcoal/15 pl-5">
                  {headings.map((h) => (
                    <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
                      <a
                        href={`#${h.id}`}
                        className={`block text-bsv2-charcoal/70 hover:text-bsv2-teal transition-colors ${
                          h.level === 2
                            ? 'text-sm font-medium'
                            : 'text-[13px] text-bsv2-charcoal/55'
                        }`}
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>

          {/* ARTICLE */}
          <article className="max-w-[720px]">
            <p className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-[1.4] text-bsv2-charcoal mb-12 pb-12 border-b border-bsv2-charcoal/10">
              {post.excerpt}
            </p>

            <BlogContent content={post.content} />

            {/* Mid-article CTA */}
            <div className="my-16 p-8 md:p-10 bg-bsv2-charcoal text-white rounded-2xl">
              <span className="text-white/40 text-[11px] tracking-[0.15em] uppercase mb-4 block">
                Klaar om te starten?
              </span>
              <p className="font-cormorant text-2xl md:text-3xl font-light leading-[1.3] mb-6 max-w-lg">
                Vraag een gratis offerte aan en ontdek wat jouw badkamer kan kosten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/adviesgesprek"
                  className="group inline-flex items-center justify-center gap-2 bg-bsv2-pink text-bsv2-charcoal text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white transition-colors"
                >
                  Gratis offerte
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/prijzen"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Bekijk prijzen
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-12 pt-10 border-t border-bsv2-charcoal/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar het overzicht
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-white border-t border-bsv2-charcoal/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-4 block">
                  (Verder lezen)
                </span>
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1]">
                  Gerelateerde
                  <br />
                  <span className="italic">artikelen</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all"
              >
                Alle artikelen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {relatedPosts.map((related, i) => (
                <motion.article
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Link href={`/blog/${related.slug}`} className="group block">
                    <div className="aspect-[4/3] relative overflow-hidden mb-5">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-bsv2-teal mb-3 block">
                      {CATEGORY_LABEL[related.category]}
                    </span>
                    <h3 className="font-cormorant text-xl md:text-2xl font-light leading-[1.25] mb-3 group-hover:text-bsv2-teal transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-bsv2-grey text-sm leading-relaxed line-clamp-2 mb-3">
                      {related.excerpt}
                    </p>
                    <span className="text-xs text-bsv2-grey">
                      {formatDate(related.date)} · {calculateReadingTime(related.content)} min lezen
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
