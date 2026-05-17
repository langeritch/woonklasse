import { NextRequest, NextResponse } from 'next/server';
import { deriveAdminToken } from '@/lib/admin-token';
import { CITY_SLUGS } from '@/data/cities';
import { WOONKLASSE_CITY_SLUGS } from '@/data/woonklasse-cities';

const BADKAMER_CITY_SLUGS = new Set(CITY_SLUGS);
const WOONKLASSE_SLUGS = new Set(WOONKLASSE_CITY_SLUGS);

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Always allow static assets, Next internals and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|avif|css|js|woff2?|ttf|eot|txt|xml|webmanifest)$/)
  ) {
    return NextResponse.next();
  }

  // Admin auth protection (except login page)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin_token')?.value;
    const pin = process.env.ADMIN_PIN;
    if (!token || !pin) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    const expected = await deriveAdminToken(pin);
    if (token !== expected) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Permanent redirect: legacy /badkamerstijl-v2/* URLs → clean paths
  if (pathname === '/badkamerstijl-v2' || pathname.startsWith('/badkamerstijl-v2/')) {
    const clean = pathname === '/badkamerstijl-v2'
      ? '/'
      : pathname.replace('/badkamerstijl-v2', '') || '/';
    return NextResponse.redirect(new URL(clean, request.url), 301);
  }

  // Domain detection (exact production domains only, not preview URLs)
  const isWoonklasseDomain = hostname === 'woonklasse.nl' || hostname === 'www.woonklasse.nl';
  const isBadkamerDomain = hostname === 'badkamerstijl.nl' || hostname === 'www.badkamerstijl.nl';

  // On badkamerstijl.nl: clean up ugly /badkamerstijl and /badkamerstijl/* URLs → clean paths
  if (isBadkamerDomain && (pathname === '/badkamerstijl' || pathname.startsWith('/badkamerstijl/'))) {
    const clean = pathname === '/badkamerstijl' ? '/' : pathname.replace('/badkamerstijl', '');
    return NextResponse.redirect(new URL(clean, request.url), 301);
  }

  // 301: /kosten → /prijzen (single canonical pricing page).
  // Applies to internal route (/woonklasse/kosten), the clean URL on woonklasse.nl,
  // and the clean URL on badkamerstijl.nl (where the kosten page was removed as a duplicate).
  if (pathname === '/woonklasse/kosten') {
    return NextResponse.redirect(new URL('/woonklasse/prijzen', request.url), 301);
  }
  if (pathname === '/kosten') {
    return NextResponse.redirect(new URL('/prijzen', request.url), 301);
  }

  // On woonklasse.nl: /prijzen serves the Woonklasse pricing page
  if (isWoonklasseDomain && pathname === '/prijzen') {
    return NextResponse.rewrite(new URL('/woonklasse/prijzen', request.url));
  }

  // On woonklasse.nl: /bedankt serves the Woonklasse thank-you page.
  // Must come BEFORE the CLEAN_BADKAMER_PATHS check so woonklasse keeps its own brand.
  if (isWoonklasseDomain && pathname === '/bedankt') {
    return NextResponse.rewrite(new URL('/woonklasse/bedankt', request.url));
  }

  // Clean badkamer paths → actual page routes
  // /prijzen is shared: only rewrites to badkamerstijl when NOT on the woonklasse domain
  const CLEAN_BADKAMER_PATHS = ['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen', '/bedankt'];
  if (CLEAN_BADKAMER_PATHS.includes(pathname) && !isWoonklasseDomain) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Blog: on badkamerstijl.nl, /blog[/<slug>] → /badkamerstijl/blog[/<slug>].
  // Everywhere else (woonklasse.nl, previews, localhost) /blog serves the
  // Woonklasse blog directly from src/app/blog.
  if ((pathname === '/blog' || pathname.startsWith('/blog/')) && isBadkamerDomain) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Woonklasse city landing pages: clean URLs (/<city>) on woonklasse.nl.
  // Sitemap and canonicals point at /<city>; this rewrite maps them to /woonklasse/<city>.
  if (isWoonklasseDomain && pathname.length > 1 && !pathname.includes('/', 1)) {
    const citySlug = pathname.slice(1);
    if (WOONKLASSE_SLUGS.has(citySlug)) {
      return NextResponse.rewrite(new URL(`/woonklasse/${citySlug}`, request.url));
    }
  }

  // Badkamerstijl city landing pages: clean URLs (/<city>) on badkamerstijl.nl and preview deploys.
  // Sitemap and canonicals point at /<city>; this rewrite maps them to /badkamerstijl/<city>.
  if (!isWoonklasseDomain && pathname.length > 1 && !pathname.includes('/', 1)) {
    const citySlug = pathname.slice(1);
    if (BADKAMER_CITY_SLUGS.has(citySlug)) {
      return NextResponse.rewrite(new URL(`/badkamerstijl/${citySlug}`, request.url));
    }
  }

  // Allow direct access to internal routes (preserved for preview URLs and localhost dev)
  if (pathname.startsWith('/woonklasse/') || pathname.startsWith('/badkamerstijl/')) {
    return NextResponse.next();
  }

  // Domain-based root rewrite - only on actual production domains
  if (isWoonklasseDomain && (pathname === '/' || pathname === '')) {
    return NextResponse.rewrite(new URL('/woonklasse', request.url));
  }
  if (isBadkamerDomain && (pathname === '/' || pathname === '')) {
    return NextResponse.rewrite(new URL('/badkamerstijl', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
