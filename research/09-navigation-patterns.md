# Navigation Patterns Reference -- Awwwards 2025-2026

Research compiled from award-winning architecture, luxury, and design websites on Awwwards (2025-2026). Each pattern includes structural guidance, CSS approach, and animation techniques.

---

## Table of Contents

1. [Floating Pill Navbar (Fluid Glass)](#1-floating-pill-navbar-fluid-glass)
2. [Fullscreen Menu Overlays](#2-fullscreen-menu-overlays)
3. [Hamburger Animations](#3-hamburger-animations)
4. [Sticky Headers That Transform](#4-sticky-headers-that-transform)
5. [Bottom Navigation Bars](#5-bottom-navigation-bars)
6. [Side Navigation](#6-side-navigation)
7. [Breadcrumb Patterns](#7-breadcrumb-patterns)
8. [Scroll Indicators](#8-scroll-indicators)
9. [Page Transition Techniques](#9-page-transition-techniques)

---

## 1. Floating Pill Navbar (Fluid Glass)

Inspired by Apple's Liquid Glass (introduced WWDC 2025) and Awwwards elements like "Floating Glass Pill Nav" by Sumairha Mumtaz, "Floating Navigation Bar" by Real Noni, and "Floating Navbar" by Bequant.

### Design Concept

A translucent, pill-shaped navigation bar that floats above page content. Uses glassmorphism (backdrop blur + semi-transparent background) to create depth. The navbar detaches from the viewport edges and appears to hover, reinforcing a premium, layered feel.

### HTML Structure

```html
<header class="pill-nav" role="navigation" aria-label="Main navigation">
  <div class="pill-nav__inner">
    <a href="/" class="pill-nav__logo" aria-label="Home">
      <img src="/logo.svg" alt="Brand" />
    </a>
    <nav class="pill-nav__links">
      <a href="/projects" class="pill-nav__link" data-nav="projects">Projecten</a>
      <a href="/collectie" class="pill-nav__link" data-nav="collectie">Collectie</a>
      <a href="/over-ons" class="pill-nav__link" data-nav="over-ons">Over Ons</a>
      <a href="/contact" class="pill-nav__link" data-nav="contact">Contact</a>
    </nav>
    <button class="pill-nav__menu-toggle" aria-label="Menu" aria-expanded="false">
      <span class="hamburger-lines">
        <span></span><span></span><span></span>
      </span>
    </button>
  </div>
</header>
```

### CSS Approach

```css
.pill-nav {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: clamp(320px, 90vw, 960px);
  pointer-events: none; /* allows click-through on empty areas */
}

.pill-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 100vw;             /* pill shape */
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  pointer-events: auto;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

/* Dark variant */
.pill-nav--dark .pill-nav__inner {
  background: rgba(0, 0, 0, 0.45);
  border-color: rgba(255, 255, 255, 0.08);
}

/* Scroll-triggered compacting */
.pill-nav--scrolled .pill-nav__inner {
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.pill-nav__link {
  color: var(--nav-text, #1a1a1a);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 0.5rem 0.75rem;
  border-radius: 100vw;
  transition: background 0.25s ease, color 0.25s ease;
}

.pill-nav__link:hover,
.pill-nav__link[aria-current="page"] {
  background: rgba(0, 0, 0, 0.06);
}
```

### Animation Technique

- **Entrance:** Translate from `Y: -100%` with opacity 0 on page load, animate in with GSAP or CSS transition after a short delay (400ms).
- **Scroll behavior:** Use `IntersectionObserver` or `scroll` event with `requestAnimationFrame` to toggle `.pill-nav--scrolled` class. The pill compresses vertically and increases blur intensity.
- **Active indicator:** A small highlight capsule (`::after` pseudo-element) slides behind the active link using `transform: translateX()` with a spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Liquid Glass highlight effect:** Apply a subtle specular gradient layer using `background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)` that shifts position based on cursor proximity (tracked via JS `mousemove`).

### Awwwards Examples

- **Sumairha Mumtaz -- Floating Glass Pill Nav:** Glassmorphism pill with minimal links, fixed positioning.
- **Real Noni -- Floating Navigation Bar:** Detached floating bar with blur backdrop.
- **Bequant -- Floating Navbar:** Financial/luxury aesthetic, dark glass with subtle border.

---

## 2. Fullscreen Menu Overlays

Dominant in Awwwards Site of the Day winners. Seen in Eagle Films, We The Fans, Edelschwarz Alpine Bio Spirits, and Anagram Paris.

### Design Concept

The entire viewport becomes the menu. Content is replaced by large-scale typography with staggered reveal animations. Often includes secondary information (contact, social links, featured image) in a split-layout.

### HTML Structure

```html
<div class="overlay-menu" id="overlayMenu" aria-hidden="true" role="dialog" aria-label="Navigation menu">
  <div class="overlay-menu__backdrop"></div>
  <div class="overlay-menu__container">
    <div class="overlay-menu__primary">
      <nav class="overlay-menu__nav" role="navigation">
        <a href="/projects" class="overlay-menu__link" data-index="01">
          <span class="overlay-menu__link-label">Projecten</span>
          <span class="overlay-menu__link-number">01</span>
        </a>
        <a href="/collectie" class="overlay-menu__link" data-index="02">
          <span class="overlay-menu__link-label">Collectie</span>
          <span class="overlay-menu__link-number">02</span>
        </a>
        <a href="/materialen" class="overlay-menu__link" data-index="03">
          <span class="overlay-menu__link-label">Materialen</span>
          <span class="overlay-menu__link-number">03</span>
        </a>
        <a href="/contact" class="overlay-menu__link" data-index="04">
          <span class="overlay-menu__link-label">Contact</span>
          <span class="overlay-menu__link-number">04</span>
        </a>
      </nav>
    </div>
    <div class="overlay-menu__secondary">
      <div class="overlay-menu__featured-image">
        <img src="/preview.jpg" alt="" />
      </div>
      <div class="overlay-menu__info">
        <p class="overlay-menu__address">Amsterdam, NL</p>
        <div class="overlay-menu__socials">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### CSS Approach

```css
.overlay-menu {
  position: fixed;
  inset: 0;
  z-index: 999;
  visibility: hidden;
  pointer-events: none;
}

.overlay-menu.is-open {
  visibility: visible;
  pointer-events: auto;
}

.overlay-menu__backdrop {
  position: absolute;
  inset: 0;
  background: var(--color-surface-dark, #0a0a0a);
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.overlay-menu.is-open .overlay-menu__backdrop {
  opacity: 1;
}

.overlay-menu__container {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  height: 100%;
  padding: 8rem 4rem 4rem;
}

.overlay-menu__link {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--color-text-light, #fafafa);
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden; /* for clip animation */
}

.overlay-menu__link-label {
  display: inline-block;
  transform: translateY(110%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.overlay-menu.is-open .overlay-menu__link-label {
  transform: translateY(0);
}

/* Staggered reveal via custom property */
.overlay-menu__link:nth-child(1) .overlay-menu__link-label { transition-delay: 0.15s; }
.overlay-menu__link:nth-child(2) .overlay-menu__link-label { transition-delay: 0.22s; }
.overlay-menu__link:nth-child(3) .overlay-menu__link-label { transition-delay: 0.29s; }
.overlay-menu__link:nth-child(4) .overlay-menu__link-label { transition-delay: 0.36s; }

/* Hover: reveal featured image per link */
.overlay-menu__link:hover ~ .overlay-menu__featured-image img {
  opacity: 1;
  transform: scale(1);
}

.overlay-menu__link-number {
  font-size: 0.875rem;
  font-family: var(--font-mono);
  opacity: 0.4;
}
```

### Animation Technique (GSAP)

```javascript
const tl = gsap.timeline({ paused: true });

tl.to('.overlay-menu__backdrop', {
  opacity: 1,
  duration: 0.5,
  ease: 'power2.inOut'
})
.from('.overlay-menu__link-label', {
  yPercent: 110,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.07
}, '-=0.3')
.from('.overlay-menu__info', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
}, '-=0.4');

// Toggle
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  isOpen ? tl.play() : tl.reverse();
  menuButton.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-hidden', !isOpen);
});
```

### Awwwards Examples

- **Eagle Films:** Hamburger triggers fullscreen overlay with hover image reveals per link.
- **Edelschwarz Alpine Bio Spirits:** GSAP-powered burger menu with staggered text reveal.
- **Anagram Paris:** Handwritten-style typography in overlay with WebGL background.
- **We The Fans:** 3D WebGL overlay transitions with storytelling navigation.

---

## 3. Hamburger Animations

### Design Concept

The three-line hamburger icon morphs into an X (close) icon on click. Award-winning sites elevate this with rotation, path morphing, stagger, and spring physics.

### HTML Structure

```html
<!-- Approach A: Span-based (CSS only) -->
<button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
  <span class="hamburger__line hamburger__line--top"></span>
  <span class="hamburger__line hamburger__line--middle"></span>
  <span class="hamburger__line hamburger__line--bottom"></span>
</button>

<!-- Approach B: SVG-based (GSAP morphing) -->
<button class="hamburger-svg" aria-label="Toggle menu" aria-expanded="false">
  <svg viewBox="0 0 32 32" width="32" height="32">
    <line class="hamburger-svg__line" x1="6" y1="10" x2="26" y2="10" />
    <line class="hamburger-svg__line" x1="6" y1="16" x2="26" y2="16" />
    <line class="hamburger-svg__line" x1="6" y1="22" x2="26" y2="22" />
  </svg>
</button>
```

### CSS Approach (Span-based)

```css
.hamburger {
  position: relative;
  width: 2rem;
  height: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger__line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.2s ease;
  transform-origin: center;
}

.hamburger__line--top    { top: 0; }
.hamburger__line--middle { top: 50%; transform: translateY(-50%); }
.hamburger__line--bottom { bottom: 0; }

/* Active state: morph to X */
.hamburger.is-active .hamburger__line--top {
  transform: translateY(calc(0.75rem - 1px)) rotate(45deg);
}

.hamburger.is-active .hamburger__line--middle {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.is-active .hamburger__line--bottom {
  transform: translateY(calc(-0.75rem + 1px)) rotate(-45deg);
}
```

### Animation Technique (GSAP SVG Morphing)

```javascript
const lines = document.querySelectorAll('.hamburger-svg__line');
const tl = gsap.timeline({ paused: true });

tl.to(lines[0], {
  attr: { x1: 8, y1: 8, x2: 24, y2: 24 },
  duration: 0.4,
  ease: 'power2.inOut'
})
.to(lines[1], {
  opacity: 0,
  scaleX: 0,
  duration: 0.2,
  ease: 'power2.in'
}, 0)
.to(lines[2], {
  attr: { x1: 8, y1: 24, x2: 24, y2: 8 },
  duration: 0.4,
  ease: 'power2.inOut'
}, 0);

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('is-active');
  tl.reversed() ? tl.play() : tl.reverse();
});
```

### Advanced Variations

- **Magnetic hover:** The button tracks cursor position within a threshold (e.g., 40px), applying a `translate()` that makes the icon "follow" the mouse. Reset on `mouseleave`.
- **Line stagger:** Top and bottom lines animate sequentially with a 50ms offset for a more organic feel.
- **Rotation wind-up:** Rotate the container 90 degrees clockwise on hover before the X morph plays on click.
- **Dot morph:** Lines collapse into three dots, then the dots scatter/reform as X endpoints.

---

## 4. Sticky Headers That Transform

Seen on Awwwards in BalbyCare (Sticky Scroll Animation) and LX HAUSYS TRENDSHIP 2025. Common in architecture and luxury real-estate sites.

### Design Concept

The header starts as a large, transparent element with full branding. On scroll, it compresses into a compact, opaque bar. Some implementations swap the logo, change background, and hide secondary elements.

### HTML Structure

```html
<header class="site-header" data-header>
  <div class="site-header__bar">
    <a href="/" class="site-header__logo">
      <img src="/logo-full.svg" alt="Brand" class="site-header__logo-full" />
      <img src="/logo-mark.svg" alt="Brand" class="site-header__logo-mark" />
    </a>
    <nav class="site-header__nav">
      <a href="/projects">Projecten</a>
      <a href="/over-ons">Over Ons</a>
    </nav>
    <div class="site-header__actions">
      <a href="/contact" class="site-header__cta">Contact</a>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <!-- Optional: scroll progress bar -->
  <div class="site-header__progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
    <div class="site-header__progress-fill"></div>
  </div>
</header>
```

### CSS Approach

```css
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
}

.site-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Initial transparent state */
.site-header--transparent {
  background: transparent;
}

/* Scrolled compact state */
.site-header--compact {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.site-header--compact .site-header__bar {
  padding: 0.75rem 4rem;
}

/* Logo swap */
.site-header__logo-mark {
  display: none;
}

.site-header--compact .site-header__logo-full {
  display: none;
}

.site-header--compact .site-header__logo-mark {
  display: block;
}

/* Hide on scroll down, show on scroll up */
.site-header--hidden {
  transform: translateY(-100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Animation Technique (Scroll-Linked)

```javascript
// Using IntersectionObserver for hero threshold
const hero = document.querySelector('.hero');
const header = document.querySelector('[data-header]');

const observer = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle('site-header--transparent', entry.isIntersecting);
    header.classList.toggle('site-header--compact', !entry.isIntersecting);
  },
  { threshold: 0.1 }
);
observer.observe(hero);

// Hide/show on scroll direction
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const isScrollingDown = currentScroll > lastScroll && currentScroll > 100;

  header.classList.toggle('site-header--hidden', isScrollingDown);
  lastScroll = currentScroll;
}, { passive: true });
```

### Advanced Patterns

- **Color inversion:** Header inverts text color when scrolling over dark sections. Use `IntersectionObserver` on each section with `data-theme="dark"` to toggle `--nav-text` custom property.
- **Progressive blur:** Increase `backdrop-filter: blur()` value proportionally to scroll distance using CSS custom properties set via JS.
- **Morph animation:** The header background animates from rectangular to pill-shaped on scroll using `border-radius` and `width` transitions (hybrid of sticky header and pill nav).

### Awwwards Examples

- **BalbyCare:** Sticky scroll animation with header compression.
- **LX HAUSYS TRENDSHIP 2025:** Scroll-driven header with WebGL shader integration.
- **GKC Architecture & Design (SOTD Nov 2025):** Minimal header that dissolves into compact mode.

---

## 5. Bottom Navigation Bars

Seen in Nubikk's contextual bottom menu and the Awwwards-style sticky bottom nav recreated by NeueWorld (Webflow). Increasingly common on mobile-first luxury and editorial sites.

### Design Concept

A fixed bar at the bottom of the viewport provides primary navigation or contextual actions. Hides on scroll-down, reveals on scroll-up, maximizing content space. On desktop, may serve as a secondary toolbar or page-level controls.

### HTML Structure

```html
<nav class="bottom-nav" aria-label="Quick navigation" data-bottom-nav>
  <div class="bottom-nav__inner">
    <a href="/projects" class="bottom-nav__item" aria-current="page">
      <svg class="bottom-nav__icon" aria-hidden="true"><!-- icon --></svg>
      <span class="bottom-nav__label">Projecten</span>
    </a>
    <a href="/inspiratie" class="bottom-nav__item">
      <svg class="bottom-nav__icon" aria-hidden="true"><!-- icon --></svg>
      <span class="bottom-nav__label">Inspiratie</span>
    </a>
    <a href="/favorieten" class="bottom-nav__item">
      <svg class="bottom-nav__icon" aria-hidden="true"><!-- icon --></svg>
      <span class="bottom-nav__label">Favorieten</span>
      <span class="bottom-nav__badge">3</span>
    </a>
    <a href="/contact" class="bottom-nav__item">
      <svg class="bottom-nav__icon" aria-hidden="true"><!-- icon --></svg>
      <span class="bottom-nav__label">Contact</span>
    </a>
  </div>
</nav>
```

### CSS Approach

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transform: translateY(0);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.bottom-nav.is-hidden {
  transform: translateY(100%);
}

.bottom-nav__inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 1rem;
  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom)); /* iPhone notch */
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s ease;
}

.bottom-nav__item[aria-current="page"] {
  color: var(--color-primary);
}

.bottom-nav__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.bottom-nav__badge {
  position: absolute;
  top: -4px;
  right: -8px;
  background: var(--color-accent);
  color: white;
  font-size: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

/* Desktop: hide or convert to floating toolbar */
@media (min-width: 1024px) {
  .bottom-nav {
    display: none; /* or convert to floating toolbar */
  }
}
```

### Animation Technique

- **Scroll hide/reveal:** Same scroll-direction detection as the sticky header. Hide on scroll-down, reveal on scroll-up.
- **Active indicator:** A pill-shaped background slides behind the active item using a shared pseudo-element or separate element positioned with `transform: translateX()`.
- **Haptic micro-interaction:** On mobile (iOS), trigger subtle scale bounce on tap using `transform: scale(0.92)` snapping back to `scale(1)` with a spring curve.

### Awwwards Examples

- **Nubikk:** Contextual smart bottom menu that adapts content based on page type.
- **NeueWorld (Webflow):** Sticky bottom nav with glassmorphism and Awwwards styling.
- **Codevickk Folio v2:** Bottom navigation menu for portfolio navigation.

---

## 6. Side Navigation

Common in architecture portfolios and long-form luxury editorial sites. Seen on GKC Architecture & Design and various Awwwards architecture category winners.

### Design Concept

A vertical navigation rail fixed to the left or right edge. Can be persistent (always visible) or revealed on hover/interaction. Often shows section indicators, page numbers, or a vertical text label.

### HTML Structure

```html
<aside class="side-nav" aria-label="Section navigation" data-side-nav>
  <div class="side-nav__rail">
    <span class="side-nav__page-label">Collectie</span>
    <div class="side-nav__indicators">
      <button class="side-nav__dot is-active" data-section="intro" aria-label="Introduction">
        <span class="side-nav__dot-label">Intro</span>
      </button>
      <button class="side-nav__dot" data-section="materialen" aria-label="Materials">
        <span class="side-nav__dot-label">Materialen</span>
      </button>
      <button class="side-nav__dot" data-section="details" aria-label="Details">
        <span class="side-nav__dot-label">Details</span>
      </button>
      <button class="side-nav__dot" data-section="gallery" aria-label="Gallery">
        <span class="side-nav__dot-label">Galerij</span>
      </button>
    </div>
    <span class="side-nav__counter">01 / 04</span>
  </div>
</aside>
```

### CSS Approach

```css
.side-nav {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.side-nav__page-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.5;
}

.side-nav__indicators {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.side-nav__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease, transform 0.3s ease;
  padding: 0;
}

.side-nav__dot.is-active {
  border-color: var(--color-primary);
  background: var(--color-primary);
  transform: scale(1.3);
}

.side-nav__dot-label {
  position: absolute;
  right: calc(100% + 1rem);
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.side-nav__dot:hover .side-nav__dot-label {
  opacity: 1;
}

.side-nav__counter {
  font-size: 0.625rem;
  font-family: var(--font-mono);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .side-nav { display: none; }
}
```

### Animation Technique

- **Active dot tracking:** Use `IntersectionObserver` on each content section. When a section enters the viewport (threshold ~0.5), update the active dot. The dot scales up and fills with color using CSS transitions.
- **Smooth scroll:** Clicking a dot triggers `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`.
- **Connecting line:** An `::before` pseudo-element on `.side-nav__indicators` draws a vertical line. A fill layer animates its `scaleY` based on scroll progress between sections.

---

## 7. Breadcrumb Patterns

Important for architecture and real-estate sites with deep content hierarchies (e.g., Region > City > Project > Room).

### Design Concept

Hierarchical path indicator showing current location. In luxury/architecture sites, breadcrumbs are often minimal -- using separators like `/` or `>` with monospaced typography. Some implementations animate transitions between levels.

### HTML Structure

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="/" class="breadcrumb__link">Home</a>
      <span class="breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="breadcrumb__item">
      <a href="/projecten" class="breadcrumb__link">Projecten</a>
      <span class="breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="breadcrumb__item">
      <a href="/projecten/amsterdam" class="breadcrumb__link">Amsterdam</a>
      <span class="breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">
      <span class="breadcrumb__link">Herengracht Penthouse</span>
    </li>
  </ol>
</nav>
```

### CSS Approach

```css
.breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb__link {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  letter-spacing: 0.03em;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb__link:hover {
  color: var(--color-text);
}

.breadcrumb__item--current .breadcrumb__link {
  color: var(--color-text);
  font-weight: 600;
}

.breadcrumb__separator {
  color: var(--color-text-muted);
  opacity: 0.4;
  font-size: 0.75rem;
  margin: 0 0.125rem;
}

/* Animated entrance on page load */
.breadcrumb__item {
  opacity: 0;
  transform: translateX(-8px);
  animation: breadcrumb-in 0.4s ease forwards;
}

.breadcrumb__item:nth-child(1) { animation-delay: 0.1s; }
.breadcrumb__item:nth-child(2) { animation-delay: 0.15s; }
.breadcrumb__item:nth-child(3) { animation-delay: 0.2s; }
.breadcrumb__item:nth-child(4) { animation-delay: 0.25s; }

@keyframes breadcrumb-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Collapsing on small screens */
@media (max-width: 640px) {
  .breadcrumb__item:not(:last-child):not(:first-child) {
    display: none;
  }
  .breadcrumb__item:first-child .breadcrumb__separator::after {
    content: '...';
    margin-right: 0.25rem;
  }
}
```

### Animation Technique

- **Page transition breadcrumb:** When navigating between pages (using Barba.js), the breadcrumb animates the new segment sliding in from the right while the old current item loses its bold weight.
- **Truncation with expand:** On mobile, collapsed breadcrumbs show "Home / ... / Current". Tapping the ellipsis expands with a clip-path or max-width animation.

---

## 8. Scroll Indicators

Present on nearly all Awwwards SOTD winners as a subtle UX cue. Variations include progress bars, scroll-to-explore prompts, and section counters.

### Design Concept

Visual feedback showing reading progress or prompting the user to scroll. Ranges from a thin progress bar at the top of the page to animated scroll-down indicators on hero sections.

### HTML Structure

```html
<!-- A. Top progress bar -->
<div class="scroll-progress" role="progressbar" aria-valuenow="0" aria-label="Reading progress">
  <div class="scroll-progress__fill"></div>
</div>

<!-- B. Hero scroll prompt -->
<div class="scroll-prompt" aria-hidden="true">
  <span class="scroll-prompt__text">Scroll</span>
  <div class="scroll-prompt__line">
    <div class="scroll-prompt__line-fill"></div>
  </div>
</div>

<!-- C. Section counter -->
<div class="section-counter" aria-live="polite">
  <span class="section-counter__current">01</span>
  <span class="section-counter__divider">/</span>
  <span class="section-counter__total">06</span>
</div>
```

### CSS Approach

```css
/* A. Progress bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 1001;
  background: transparent;
}

.scroll-progress__fill {
  height: 100%;
  background: var(--color-primary);
  transform-origin: left;
  transform: scaleX(0);
  will-change: transform;
  /* Native CSS approach -- no JS needed */
  animation: scroll-progress linear;
  animation-timeline: scroll(root);
}

@keyframes scroll-progress {
  to { transform: scaleX(1); }
}

/* B. Scroll prompt */
.scroll-prompt {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.scroll-prompt__text {
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.6;
}

.scroll-prompt__line {
  width: 1px;
  height: 4rem;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.scroll-prompt__line-fill {
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  animation: scroll-line 2s ease-in-out infinite;
}

@keyframes scroll-line {
  0%   { transform: translateY(-100%); }
  50%  { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

/* C. Section counter */
.section-counter {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  z-index: 50;
}

.section-counter__current {
  font-weight: 700;
  font-size: 1rem;
}

.section-counter__divider {
  margin: 0 0.25rem;
  opacity: 0.4;
}
```

### Animation Technique

```javascript
// Progress bar -- scroll-driven (native CSS) or JS fallback
if (!CSS.supports('animation-timeline', 'scroll(root)')) {
  const fill = document.querySelector('.scroll-progress__fill');
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    fill.style.transform = `scaleX(${scrollPercent})`;
  }, { passive: true });
}

// Section counter -- IntersectionObserver
const sections = document.querySelectorAll('[data-section]');
const currentEl = document.querySelector('.section-counter__current');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target) + 1;
        currentEl.textContent = String(index).padStart(2, '0');
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach(section => sectionObserver.observe(section));
```

### Advanced Patterns

- **Circular progress:** An SVG circle with `stroke-dashoffset` driven by scroll position. Common in single-page luxury sites.
- **Fade on scroll start:** The scroll-prompt fades out once the user begins scrolling (first 100px), using a simple scroll listener toggling an opacity class.
- **Scroll-linked CSS (modern):** Use `animation-timeline: scroll(root)` for zero-JS progress bars. Supported in Chrome 115+ and Firefox 110+.

---

## 9. Page Transition Techniques

The hallmark of Awwwards SOTD winners. Used in 35+ Awwwards-winning sites, most commonly implemented with Barba.js + GSAP. The View Transitions API is emerging as a native alternative.

### Design Concept

Instead of hard page reloads, content transitions seamlessly between routes with coordinated animations -- fades, slides, reveals, or WebGL dissolves. This creates a single-page-application feel on multi-page sites.

### HTML Structure (Barba.js)

```html
<!-- Layout wrapper -->
<body>
  <header class="site-header" data-barba-prevent="self">
    <!-- Navigation stays persistent across transitions -->
  </header>

  <main data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="home">
      <!-- Page content here -->
      <section class="hero" data-transition-element>
        <h1 class="hero__title" data-split-text>Badkamer Collectie</h1>
      </section>
    </div>
  </main>

  <footer data-barba-prevent="self">
    <!-- Footer stays persistent -->
  </footer>

  <!-- Transition overlay -->
  <div class="page-transition" aria-hidden="true">
    <div class="page-transition__curtain page-transition__curtain--1"></div>
    <div class="page-transition__curtain page-transition__curtain--2"></div>
  </div>
</body>
```

### CSS Approach

```css
.page-transition {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.page-transition__curtain {
  background: var(--color-surface-dark, #0a0a0a);
  transform: scaleY(0);
  transform-origin: bottom;
  will-change: transform;
}

.page-transition__curtain--2 {
  transform-origin: top;
}

/* View Transitions API (native) */
::view-transition-old(root) {
  animation: fade-out 0.3s ease forwards;
}

::view-transition-new(root) {
  animation: fade-in 0.3s ease forwards;
}

::view-transition-old(hero-image) {
  animation: slide-out-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

::view-transition-new(hero-image) {
  animation: slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-out { to { opacity: 0; } }
@keyframes fade-in  { from { opacity: 0; } }

@keyframes slide-out-left {
  to { transform: translateX(-30%); opacity: 0; }
}

@keyframes slide-in-right {
  from { transform: translateX(30%); opacity: 0; }
}

/* Named view-transition elements */
.hero__image {
  view-transition-name: hero-image;
}

.page-title {
  view-transition-name: page-title;
}
```

### Animation Technique (Barba.js + GSAP)

```javascript
import barba from '@barba/core';
import gsap from 'gsap';

barba.init({
  transitions: [{
    name: 'curtain',
    async leave(data) {
      const curtains = document.querySelectorAll('.page-transition__curtain');

      await gsap.timeline()
        .to(curtains[0], {
          scaleY: 1,
          duration: 0.5,
          ease: 'power3.inOut'
        })
        .to(curtains[1], {
          scaleY: 1,
          duration: 0.5,
          ease: 'power3.inOut'
        }, '-=0.3');

      data.current.container.remove();
    },

    async enter(data) {
      const curtains = document.querySelectorAll('.page-transition__curtain');

      // Scroll to top
      window.scrollTo(0, 0);

      // Reveal new page
      await gsap.timeline()
        .to(curtains, {
          scaleY: 0,
          duration: 0.6,
          ease: 'power3.inOut',
          stagger: 0.1
        })
        .from(data.next.container.querySelectorAll('[data-transition-element]'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.08
        }, '-=0.3');
    }
  }]
});
```

### View Transitions API (Native, Modern Browsers)

```javascript
// For same-document transitions (SPA-style)
async function navigateTo(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }

  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const transition = document.startViewTransition(() => {
    document.querySelector('main').innerHTML =
      doc.querySelector('main').innerHTML;
    document.title = doc.title;
    history.pushState({}, '', url);
  });

  await transition.finished;
}

// For cross-document transitions (MPA, Chrome 126+)
// In CSS only -- no JS needed:
// @view-transition { navigation: auto; }
```

### Transition Patterns from Awwwards Winners

| Pattern               | Technique                          | Duration    | Used By                          |
| --------------------- | ---------------------------------- | ----------- | -------------------------------- |
| Curtain reveal        | Two panels scale from edges        | 500-800ms   | Edelschwarz, luxury real estate  |
| Crossfade             | Opacity blend between pages        | 300-500ms   | Linear, minimal SaaS sites      |
| Slide                 | Current page slides out, new in    | 400-600ms   | Portfolio and gallery sites      |
| Circle expand         | Clip-path circle from click point  | 600-900ms   | Creative agencies                |
| WebGL dissolve        | Shader-based pixel dissolution     | 800-1200ms  | We The Fans, Bruno Simon         |
| FLIP shared element   | Element morphs position/size       | 400-600ms   | Project grid to detail views     |

### Key Implementation Notes

- **Re-initialization:** After every Barba.js transition, re-initialize JS components (scroll listeners, observers, GSAP animations) in the `enter` or `afterEnter` hooks.
- **Duration:** Keep transitions between 300ms and 800ms. Longer transitions frustrate users on repeat visits. Provide a `prefers-reduced-motion` fallback that uses instant cuts.
- **Prefetching:** Barba.js supports link prefetching on hover (`barba.prefetch`), reducing perceived load time.
- **Accessibility:** Announce page changes to screen readers using `aria-live` regions or by programmatically managing focus to the new page heading.

### Awwwards Examples

- **Edelschwarz Alpine Bio Spirits:** GSAP curtain transitions with text stagger.
- **Bruno Simon (SOTM Jan 2026):** 3D WebGL environment transitions.
- **Monopo London (SOTD):** Slide-based page transitions with persistent header.
- **Messenger (SOTY 2025):** WebGL-powered GPU-rendered transitions with physics.
- **Anuc Home (SOTD Oct 2025):** Architecture site with smooth crossfade transitions.

---

## Technology Stack Summary

| Library/API              | Purpose                                 | Usage in Awwwards Sites |
| ------------------------ | --------------------------------------- | ----------------------- |
| GSAP 3 + ScrollTrigger   | Timeline animations, scroll-linked      | ~80% of SOTD winners    |
| Barba.js                 | Page transition management              | 35+ winners             |
| Lenis / Locomotive Scroll| Smooth scroll normalization             | Common in luxury sites  |
| View Transitions API     | Native cross-document transitions       | Emerging (2025+)        |
| Three.js / WebGL         | 3D transitions, shader effects          | High-end creative sites |
| Framer Motion            | React-based animation                   | SaaS and product sites  |
| CSS scroll-driven anim.  | Zero-JS progress bars, parallax         | Modern browsers only    |
| SplitText (GSAP plugin)  | Character/word-level text animation     | Typography-heavy sites  |

---

## Accessibility Checklist for Navigation

- [ ] All interactive elements are keyboard-accessible (`tabindex`, focus management)
- [ ] `aria-expanded` on hamburger toggles, `aria-hidden` on overlay menus
- [ ] `aria-current="page"` on active navigation links
- [ ] `prefers-reduced-motion: reduce` disables animations and uses instant transitions
- [ ] Focus trap inside open overlay menus (loop Tab between first and last focusable)
- [ ] Escape key closes overlay menus
- [ ] Scroll-linked animations degrade gracefully without JS
- [ ] Skip-to-content link present as first focusable element
- [ ] Breadcrumbs use `<nav>` with `aria-label="Breadcrumb"` and `<ol>` semantics
- [ ] Page transitions announce new content via `aria-live` region or focus shift

---

## Sources

- Awwwards Navigation Collection: https://www.awwwards.com/awwwards/collections/the-best-of-navigation/
- Awwwards Innovative Navigation: https://www.awwwards.com/30-examples-of-innovative-navigation-experiences.html
- Awwwards Architecture Websites: https://www.awwwards.com/websites/architecture/
- Awwwards Luxury Websites: https://www.awwwards.com/websites/luxury/
- Awwwards GSAP Websites: https://www.awwwards.com/websites/gsap/
- Apple Liquid Glass (CSS-Tricks): https://css-tricks.com/getting-clarity-on-apples-liquid-glass/
- View Transitions API 2025 Update: https://developer.chrome.com/blog/view-transitions-in-2025
- Barba.js Documentation: https://barba.js.org/docs/getstarted/basic-transition/
- Codrops GSAP + Three.js Transitions: https://tympanus.net/codrops/2026/03/18/building-seamless-3d-transitions-with-webflow-gsap-and-three-js/
- Osmo Page Transition Course: https://www.osmo.supply/product/page-transition-course
