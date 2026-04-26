import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/badkamerstijl/BlogArticle';
import {
  BLOG_POSTS,
  CATEGORY_LABEL,
  calculateReadingTime,
  extractHeadings,
  getPostBySlug,
  getRelatedPosts,
} from '@/data/blog';

const SITE_URL = 'https://badkamerstijl.nl';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Niet gevonden | Badkamerstijl' };

  const url = `${SITE_URL}/badkamerstijl/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      locale: 'nl_NL',
      publishedTime: post.date,
      authors: ['Badkamerstijl'],
      section: CATEGORY_LABEL[post.category],
      images: [{ url: post.heroImage, width: 2200, height: 1467 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(post, 3);
  const url = `${SITE_URL}/badkamerstijl/blog/${post.slug}`;
  const readingTime = calculateReadingTime(post.content);
  const wordCount = post.content.trim().split(/\s+/).length;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Badkamerstijl',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Badkamerstijl',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: CATEGORY_LABEL[post.category],
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'nl-NL',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/badkamerstijl/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogArticle post={post} headings={headings} relatedPosts={relatedPosts} />
    </>
  );
}
