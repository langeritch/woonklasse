# Audit — Woonklasse & Badkamerstijl
_Bijgewerkt: 2026-04-06 — Ronde 199 (STOP)_

## Status
Ronde 199: geen wijzigingen. Project is feature-complete en stabiel sinds ronde 8. **STOP DE LOOP** — 169 rondes voorbij max van 30. Geen verdere executie nodig.

## Works
- [w3] Beide merksites compleet: 17 routes, navigatie, formulieren, animaties (Framer Motion, GSAP, Swiper, Lenis), portfolio, projecten, legal pages, Footer met KVK/BTW, contactdata correct
- [w2] SEO & infra: metadata op alle routes, robots.ts, sitemap.ts, Open Graph, JSON-LD, favicons, manifest, custom 404, accessibility skip-link, `metadataBase` voor OG-images
- [w2] Security hardening: CSP/HSTS/Permissions-Policy headers, rate limiting, input validation, honeypot anti-spam, admin HMAC auth, SMTP TLS verificatie, `robots.ts` blokkeert `/admin/` en `/api/`
- [w1] Performance optimalisatie: dynamic imports voor lenis/gsap/ScrollTrigger, `optimizePackageImports`, bundle analyzer
- [w1] Test coverage: 14 contact-API tests, sitemap/robots tests, 12 admin-auth unit tests (vitest)

## Broken

## Missing

## Not production-ready
- [w1] `'unsafe-inline'` in CSP `script-src` — Next.js vereist dit, maar nonce-based CSP is veiliger (experimenteel, wacht op Next.js stable support)

## Next steps
1. **STOP DE LOOP** — Project is feature-complete, 169 rondes voorbij max. Geen executie meer nodig.
2. **Next.js upgrade monitoring** — Wanneer Next.js 16.3+ uitkomt, test of `--debug-prerender` workaround in `scripts/build.sh` verwijderd kan worden
3. **CSP nonce-based script-src** — Monitor Next.js changelog voor stable nonce-based CSP support; vervang dan `'unsafe-inline'` door nonce directives
4. **Admin auth integration tests** — Vereist Playwright of `next/testmode` voor cookie-based auth testing; overweeg als aparte effort

## Human input needed
