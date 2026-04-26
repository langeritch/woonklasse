import type { Metadata } from 'next';
import BlogIndex from '@/components/badkamerstijl/BlogIndex';
import {
  CATEGORIES,
  CATEGORY_LABEL,
  getPostsByCategory,
  type BlogCategory,
} from '@/data/blog';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/badkamerstijl/blog`;
const PAGE_SIZE = 6;

const TITLE = 'Blog & Inspiratie | Badkamerstijl';
const DESCRIPTION =
  'Verhalen, tips en inzichten over badkamer renovatie. Trends, kosten, materialen en praktische adviezen door specialisten.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/badkamerstijl/2200xxs(27).jpg', width: 2200, height: 1467 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const VALID_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.id));

function parseCategory(value: string | string[] | undefined): BlogCategory | 'all' {
  if (typeof value !== 'string') return 'all';
  return VALID_CATEGORIES.has(value) ? (value as BlogCategory) : 'all';
}

function parsePage(value: string | string[] | undefined): number {
  if (typeof value !== 'string') return 1;
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string | string[]; page?: string | string[] }>;
}) {
  const sp = await searchParams;
  const category = parseCategory(sp.cat);
  const requestedPage = parsePage(sp.page);

  const allFiltered = getPostsByCategory(category);
  const totalPages = Math.max(1, Math.ceil(allFiltered.length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const posts = allFiltered.slice(start, start + PAGE_SIZE);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: PAGE_URL },
    ],
  };

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Badkamerstijl Blog',
    description: DESCRIPTION,
    url: PAGE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'Badkamerstijl',
      url: SITE_URL,
    },
    blogPost: allFiltered.slice(0, 10).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${SITE_URL}/badkamerstijl/blog/${p.slug}`,
      articleSection: CATEGORY_LABEL[p.category],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogIndex
        posts={posts}
        totalPosts={allFiltered.length}
        category={category}
        page={page}
        pageSize={PAGE_SIZE}
        totalPages={totalPages}
      />
    </>
  );
}
