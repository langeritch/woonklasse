'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import {
  CATEGORIES,
  CATEGORY_LABEL,
  calculateReadingTime,
  type BlogCategory,
  type BlogPost,
} from '@/data/blog';

function buildHref(category: BlogCategory | 'all', page: number) {
  const params = new URLSearchParams();
  if (category !== 'all') params.set('cat', category);
  if (page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : '/blog';
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogIndex({
  posts,
  totalPosts,
  category,
  page,
  pageSize,
  totalPages,
}: {
  posts: BlogPost[];
  totalPosts: number;
  category: BlogCategory | 'all';
  page: number;
  pageSize: number;
  totalPages: number;
}) {
  const featured = page === 1 && category === 'all' ? posts[0] : undefined;
  const grid = featured ? posts.slice(1) : posts;

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden min-h-screen">
      <BadkamerstijlFloatingNav />

      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="text-white/30">/</span>
        <span className="text-white">Blog</span>
      </nav>

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(27).jpg"
            alt="Badkamerstijl Blog"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/20 to-black/85" />
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-14 md:pb-20 max-w-[1600px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            <span className="w-8 h-px bg-white/60" />
            Blog & inspiratie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-[clamp(2.5rem,6.5vw,6.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-white max-w-4xl"
          >
            Verhalen, tips en
            <br />
            <span className="italic">inzichten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed"
          >
            Onze visie op materialen, kosten en trends - geschreven door de mensen die elke dag in de badkamer staan.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="sticky top-0 z-30 bg-bsv2-cream/95 backdrop-blur-md border-b border-bsv2-charcoal/[0.07]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-5">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar">
            <Link
              href={buildHref('all', 1)}
              scroll={false}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                category === 'all'
                  ? 'bg-bsv2-charcoal text-white border-bsv2-charcoal'
                  : 'bg-transparent text-bsv2-charcoal border-bsv2-charcoal/15 hover:border-bsv2-charcoal/40'
              }`}
            >
              Alle artikelen
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={buildHref(c.id, 1)}
                scroll={false}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                  category === c.id
                    ? 'bg-bsv2-charcoal text-white border-bsv2-charcoal'
                    : 'bg-transparent text-bsv2-charcoal border-bsv2-charcoal/15 hover:border-bsv2-charcoal/40'
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS HEADER */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto pt-14 md:pt-20 pb-4">
        <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase block">
          ({totalPosts} {totalPosts === 1 ? 'artikel' : 'artikelen'}
          {category !== 'all' ? ` · ${CATEGORY_LABEL[category]}` : ''})
        </span>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto py-8 md:py-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/3] relative overflow-hidden"
            >
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </motion.div>
            <div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-bsv2-teal mb-4 block">
                Uitgelicht · {CATEGORY_LABEL[featured.category]}
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] mb-5 group-hover:text-bsv2-teal transition-colors">
                {featured.title}
              </h2>
              <p className="text-bsv2-grey text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-bsv2-grey mb-6">
                <time>{formatDate(featured.date)}</time>
                <span>·</span>
                <span>{calculateReadingTime(featured.content)} min lezen</span>
              </div>
              <span className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium group-hover:gap-3 transition-all">
                Lees artikel <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* GRID */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto py-12 md:py-16">
        {grid.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-2xl text-bsv2-charcoal/70 mb-4">
              Nog geen artikelen in deze categorie.
            </p>
            <Link
              href={buildHref('all', 1)}
              className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all"
            >
              Bekijk alle artikelen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {grid.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[4/3] relative overflow-hidden mb-5">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-bsv2-teal mb-3 block">
                    {CATEGORY_LABEL[post.category]}
                  </span>
                  <h3 className="font-cormorant text-xl md:text-2xl font-light mb-3 leading-[1.25] group-hover:text-bsv2-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-bsv2-grey text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-bsv2-grey">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{calculateReadingTime(post.content)} min lezen</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto pb-20">
          <div className="flex items-center justify-center gap-3">
            {page > 1 ? (
              <Link
                href={buildHref(category, page - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bsv2-charcoal/15 text-sm hover:border-bsv2-charcoal/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Vorige
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bsv2-charcoal/10 text-sm text-bsv2-grey/60">
                <ChevronLeft className="w-4 h-4" /> Vorige
              </span>
            )}

            <div className="flex items-center gap-1.5 mx-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const active = p === page;
                return (
                  <Link
                    key={p}
                    href={buildHref(category, p)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors ${
                      active
                        ? 'bg-bsv2-charcoal text-white'
                        : 'text-bsv2-charcoal hover:bg-bsv2-charcoal/[0.05]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>

            {page < totalPages ? (
              <Link
                href={buildHref(category, page + 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bsv2-charcoal/15 text-sm hover:border-bsv2-charcoal/40 transition-colors"
              >
                Volgende <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bsv2-charcoal/10 text-sm text-bsv2-grey/60">
                Volgende <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
          <p className="text-center text-xs text-bsv2-grey mt-4">
            Pagina {page} van {totalPages} · {pageSize} per pagina
          </p>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-charcoal text-white border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
            Klaar voor jouw eigen
            <br />
            <span className="italic">droombadkamer?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Plan een vrijblijvend adviesgesprek. Wij komen langs, luisteren naar jouw wensen en sturen binnen vijf werkdagen een gespecificeerde offerte met vaste prijs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adviesgesprek"
              className="group inline-flex items-center justify-center gap-3 bg-bsv2-pink text-bsv2-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              Gratis adviesgesprek <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/prijzen"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
