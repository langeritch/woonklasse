import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/maintenance', '/woonklasse-showcase'],
      },
    ],
    sitemap: [
      'https://woonklasse.nl/sitemap.xml',
      'https://badkamerstijl.nl/sitemap.xml',
    ],
    host: 'https://woonklasse.nl',
  };
}
