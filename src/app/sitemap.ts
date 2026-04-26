import type { MetadataRoute } from 'next';
import { CITIES } from '@/data/cities';
import { WOONKLASSE_CITIES } from '@/data/woonklasse-cities';
import { BLOG_POSTS } from '@/data/blog';

const WOONKLASSE_URL = 'https://woonklasse.nl';
const BADKAMERSTIJL_URL = 'https://badkamerstijl.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Badkamerstijl city pages — clean URLs (middleware redirects /badkamerstijl/X → /X on badkamerstijl.nl)
  const badkamerCityEntries: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BADKAMERSTIJL_URL}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Woonklasse city pages
  const woonklasseCityEntries: MetadataRoute.Sitemap = WOONKLASSE_CITIES.map((c) => ({
    url: `${WOONKLASSE_URL}/woonklasse/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Blog posts — clean URL on badkamerstijl.nl
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BADKAMERSTIJL_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    // ───────────────── Woonklasse domain ─────────────────
    { url: WOONKLASSE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${WOONKLASSE_URL}/prijzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WOONKLASSE_URL}/woonklasse/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${WOONKLASSE_URL}/woonklasse/projecten`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${WOONKLASSE_URL}/woonklasse/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${WOONKLASSE_URL}/woonklasse/offerte`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ───────────────── Badkamerstijl domain (clean URLs) ─────────────────
    { url: BADKAMERSTIJL_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BADKAMERSTIJL_URL}/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/stijlen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BADKAMERSTIJL_URL}/prijzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BADKAMERSTIJL_URL}/kosten`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BADKAMERSTIJL_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BADKAMERSTIJL_URL}/adviesgesprek`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ───────────────── Per-city landing pages ─────────────────
    ...woonklasseCityEntries,
    ...badkamerCityEntries,

    // ───────────────── Blog posts ─────────────────
    ...blogEntries,

    // ───────────────── Legal ─────────────────
    { url: `${WOONKLASSE_URL}/privacybeleid`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${WOONKLASSE_URL}/algemene-voorwaarden`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BADKAMERSTIJL_URL}/privacybeleid`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BADKAMERSTIJL_URL}/algemene-voorwaarden`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
