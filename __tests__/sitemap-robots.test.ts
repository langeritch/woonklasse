import { describe, it, expect } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';

describe('sitemap()', () => {
  const entries = sitemap();

  it('returns non-empty array', () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it('includes woonklasse.nl root with priority 1', () => {
    const root = entries.find((e) => e.url === 'https://woonklasse.nl');
    expect(root).toBeDefined();
    expect(root!.priority).toBe(1);
  });

  it('includes badkamerstijl.nl root with priority 1', () => {
    const root = entries.find((e) => e.url === 'https://badkamerstijl.nl');
    expect(root).toBeDefined();
    expect(root!.priority).toBe(1);
  });

  it('all entries have required fields', () => {
    for (const entry of entries) {
      expect(entry.url).toBeTruthy();
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect(entry.changeFrequency).toBeTruthy();
      expect(typeof entry.priority).toBe('number');
    }
  });

  it('does not expose admin or api routes', () => {
    const urls = entries.map((e) => e.url);
    expect(urls.some((u) => u.includes('/admin'))).toBe(false);
    expect(urls.some((u) => u.includes('/api/'))).toBe(false);
  });
});

describe('robots()', () => {
  const result = robots();

  it('allows root path', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const mainRule = rules.find((r) => r.userAgent === '*');
    expect(mainRule).toBeDefined();
    expect(mainRule!.allow).toBe('/');
  });

  it('disallows /admin/ and /api/', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const mainRule = rules.find((r) => r.userAgent === '*');
    expect(mainRule!.disallow).toContain('/admin/');
    expect(mainRule!.disallow).toContain('/api/');
  });

  it('includes sitemap URL', () => {
    expect(result.sitemap).toBe('https://woonklasse.nl/sitemap.xml');
  });
});
