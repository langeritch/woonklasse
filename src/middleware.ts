import { NextRequest, NextResponse } from 'next/server';
import { deriveAdminToken } from '@/lib/admin-token';

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Always allow static assets, Next internals and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js|woff2?|ttf|eot|txt|xml|webmanifest)$/)
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

  // On woonklasse.nl: /prijzen serves the Woonklasse pricing page
  if (isWoonklasseDomain && pathname === '/prijzen') {
    return NextResponse.rewrite(new URL('/woonklasse/prijzen', request.url));
  }

  // Clean badkamer paths → actual page routes
  // /prijzen is shared: only rewrites to badkamerstijl when NOT on the woonklasse domain
  const CLEAN_BADKAMER_PATHS = ['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen'];
  if (CLEAN_BADKAMER_PATHS.includes(pathname) && !isWoonklasseDomain) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Blog: /blog and /blog/<slug> → /badkamerstijl/blog[/<slug>]
  if ((pathname === '/blog' || pathname.startsWith('/blog/')) && !isWoonklasseDomain) {
    return NextResponse.rewrite(new URL(`/badkamerstijl${pathname}`, request.url));
  }

  // Allow direct access to internal routes (preserved for preview URLs and localhost dev)
  if (pathname.startsWith('/woonklasse/') || pathname.startsWith('/badkamerstijl/')) {
    return NextResponse.next();
  }

  // Domain-based root rewrite — only on actual production domains
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
