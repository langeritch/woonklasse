import type { MetadataRoute } from 'next';
import { CITIES } from '@/data/cities';
import { WOONKLASSE_CITIES } from '@/data/woonklasse-cities';
import { BLOG_POSTS } from '@/data/blog';

const WOONKLASSE_URL = 'https://woonklasse.nl';
const BADKAMERSTIJL_URL = 'https://badkamerstijl.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const badkamerCityEntries: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BADKAMERSTIJL_URL}/badkamerstijl/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const woonklasseCityEntries: MetadataRoute.Sitemap = WOONKLASSE_CITIES.map((c) => ({
    url: `${WOONKLASSE_URL}/woonklasse/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BADKAMERSTIJL_URL}/badkamerstijl/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    // Woonklasse domain
    { url: WOONKLASSE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${WOONKLASSE_URL}/woonklasse`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WOONKLASSE_URL}/woonklasse/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${WOONKLASSE_URL}/woonklasse/prijzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WOONKLASSE_URL}/woonklasse/projecten`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${WOONKLASSE_URL}/woonklasse/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${WOONKLASSE_URL}/woonklasse/offerte`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Badkamerstijl domain
    { url: BADKAMERSTIJL_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/stijlen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/prijzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BADKAMERSTIJL_URL}/badkamerstijl/adviesgesprek`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Per-city landing pages
    ...woonklasseCityEntries,
    ...badkamerCityEntries,
    // Blog posts
    ...blogEntries,
  ];
}
