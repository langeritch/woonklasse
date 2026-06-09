import { NextRequest, NextResponse } from 'next/server';
import { deriveAdminToken } from '@/lib/admin-token';
import { CITY_SLUGS } from '@/data/cities';

const BADKAMER_CITY_SLUGS = new Set(CITY_SLUGS);

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Always allow static assets, Next internals and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|avif|mp4|webm|mov|m4v|css|js|woff2?|ttf|eot|txt|xml|webmanifest)$/)
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

  const isBadkamerDomain = hostname === 'badkamerstijl.nl' || hostname === 'www.badkamerstijl.nl';

  // On badkamerstijl.nl: clean up ugly /badkamerstijl and /badkamerstijl/* URLs → clean paths
  if (isBadkamerDomain && (pathname === '/badkamerstijl' || pathname.startsWith('/badkamerstijl/'))) {
    const clean = pathname === '/badkamerstijl' ? '/' : pathname.replace('/badkamerstijl', '');
    return NextResponse.redirect(new URL(clean, request.url), 301);
  }

  // 301: /kosten → /prijzen (single canonical pricing page).
  if (pathname === '/kosten') {
    return NextResponse.redirect(new URL('/prijzen', request.url), 301);
  }

  // Clean Badkamerstijl paths → actual page routes
  const CLEAN_BADKAMER_PATHS = ['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen', '/saninet', '/bedankt'];
  if (CLEAN_BADKAMER_PATHS.includes(pathname)) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Blog: /blog[/<slug>] → /badkamerstijl/blog[/<slug>]
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Badkamerstijl city landing pages: clean URLs (/<city>) → /badkamerstijl/<city>.
  // Sitemap and canonicals point at /<city>; this rewrite maps them to the route.
  if (pathname.length > 1 && !pathname.includes('/', 1)) {
    const citySlug = pathname.slice(1);
    if (BADKAMER_CITY_SLUGS.has(citySlug)) {
      return NextResponse.rewrite(new URL(`/badkamerstijl/${citySlug}`, request.url));
    }
  }

  // Allow direct access to internal routes (preserved for preview URLs and localhost dev)
  if (pathname.startsWith('/badkamerstijl/') || pathname.startsWith('/exclusivedecks')) {
    return NextResponse.next();
  }

  // Root → Badkamerstijl homepage (the site is fully Badkamerstijl now).
  if (pathname === '/' || pathname === '') {
    return NextResponse.rewrite(new URL('/badkamerstijl', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
