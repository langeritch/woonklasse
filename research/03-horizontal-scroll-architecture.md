# Horizontal Scroll Architecture & Interior Design -- Awwwards Research

Research into award-winning horizontal-scroll websites in the architecture and interior design space (2024--2026), with a focus on GSAP ScrollTrigger pin-based implementations and visual design patterns relevant to the Woonklasse Badkamerstijl project.

---

## 1. OH Architecture -- oh-architecture.com

- **Awwwards page:** https://www.awwwards.com/sites/oh-architecture
- **Live site:** https://oh-architecture.com (built on Webflow)
- **Award:** Site of the Day (SOTD), score 7.42/10 -- Creativity 7.52
- **Designer/Developer:** Huy Nguyen (byhuy), award-winning Webflow developer
- **Date:** Featured April 2025

### Design concept

OH Architecture is a high-end residential architecture firm. The previous site lacked clarity and failed to convey the premium client experience; the redesign reinforces brand identity and builds trust from the first click. The entire site is structured around a horizontal narrative, using full-viewport panels that slide left as the user scrolls vertically.

### Horizontal scroll implementation

OH Architecture uses Webflow's native interactions system combined with custom JavaScript. The Works page is the centrepiece: project thumbnails are arranged in a single horizontal track that responds to vertical scroll input. The pattern follows the same core logic as GSAP ScrollTrigger's pin technique:

```
Technique: Vertical-to-horizontal scroll conversion (pin + xPercent)

1. A wrapper section is set to position: sticky / pinned so it fills
   the viewport and remains fixed while the user scrolls.
2. An inner track element contains all horizontal panels laid out
   in a single row (display: flex, flex-wrap: nowrap).
3. Vertical scroll progress is mapped to a horizontal translateX
   value on the inner track, moving panels from right to left.
4. The pinned section's height is set to (number of panels * 100vh),
   giving the scroll enough "runway" to drive the entire sequence.
5. Scroll progress = 0 shows the first panel; progress = 1 shows
   the last panel.
```

In Webflow this is achieved through "While scrolling in view" interactions that translate the inner container along the X-axis. The principle is identical to the GSAP ScrollTrigger approach:

```js
// Equivalent GSAP ScrollTrigger pattern
gsap.to(".horizontal-track", {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".horizontal-track").scrollWidth,
  },
});
```

### Section layout

- **Hero:** Full-viewport with large architectural photograph, firm name in thin serif/sans-serif, and a subtle scroll indicator.
- **Works (horizontal):** Each project occupies a full-viewport panel. Large background image with project name overlaid in oversized typography. Panels transition seamlessly without hard dividers.
- **About / Contact:** Returns to vertical scroll after the horizontal works section, using editorial layouts with generous whitespace.

### Typography

- Clean, minimal sans-serif typeface (likely a custom or premium grotesque).
- Project titles set in very large display sizes (80--140px equivalent), light weight (300--400).
- Body copy in regular weight, small size (14--16px), generous line-height (1.6--1.8).
- Uppercase used sparingly for labels and navigation.

### Colour palette

| Role         | Value     | Description              |
|------------- |---------- |------------------------- |
| Background   | #FCFCFC   | Near-white, warm         |
| Text primary | #1A1A1A   | Near-black               |
| Text muted   | #888888   | Medium grey for captions |
| Accent       | --        | No strong accent colour; the architecture photography provides all visual contrast |

### Transition effects

- Panels slide with eased horizontal motion tied 1:1 to scroll (scrub).
- Project images scale subtly on entry (scale 1.05 to 1.0) for a parallax-like depth effect.
- Text elements fade in with a slight upward translate as each panel enters the viewport.
- Page transitions use a full-screen wipe (white overlay slides across, reveals new page).
- Cursor changes to a custom dot/circle on interactive elements.

---

## 2. Grege -- grege.fr (Creation d'Interieurs)

- **Awwwards page:** https://www.awwwards.com/sites/grege-creation-dinterieurs
- **Live site:** https://grege.fr
- **Award:** Site of the Day (SOTD), score 7.67/10 -- Design 7.7, Creativity 7.83
- **Agency:** type8 studio (Jeremy Fagis & Thierry Chopain), France
- **Tech stack:** WordPress, Anime.js, Locomotive Scroll, Figma

### Design concept

Grege is a French interior design studio. The website mirrors the brand's philosophy of understated luxury -- simplicity without embellishments. The horizontal layout creates a gallery-like browsing experience that feels like walking through a curated showroom.

### Horizontal scroll implementation

Grege uses Locomotive Scroll rather than GSAP, but the underlying mechanic is the same pin-and-translate approach. Locomotive Scroll provides smooth inertia scrolling with data-attribute-driven animations. The horizontal sections use:

```
Technique: Locomotive Scroll horizontal container

1. A section element receives data-scroll-section and
   data-scroll-direction="horizontal".
2. Locomotive Scroll intercepts native scroll events, applies
   lerp-based smoothing, and translates the section content
   along the X-axis.
3. Child elements can receive their own data-scroll-speed
   attributes to create parallax depth within the horizontal flow.
4. The section is effectively "pinned" while its content scrolls
   through horizontally.
```

The equivalent GSAP ScrollTrigger pattern would be:

```js
// GSAP equivalent of Locomotive Scroll horizontal section
gsap.to(".grege-track", {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".grege-section",
    pin: true,
    scrub: 0.5,        // slight delay for smooth feel
    anticipatePin: 1,   // prevents jump on pin start
    invalidateOnRefresh: true,
    end: () => "+=" + track.scrollWidth,
  },
});
```

### Section layout

- **Entrance:** The landing view features the Grege logotype centred on screen, set against a muted background with a single interior photograph.
- **Portfolio (horizontal):** Interior design projects scroll horizontally. Each project is presented as a large photograph (roughly 70vw wide) with the project title and location below. Projects overlap slightly, creating a layered, editorial composition.
- **Services / Philosophy:** Short text blocks appear between project images within the same horizontal flow, mixing typography with photography.
- **Contact:** A final vertical section with contact details and a minimal footer.

### Typography

- Elegant serif typeface for headings (likely a transitional or didone serif), creating a luxury editorial feel.
- Sans-serif for body text, small and light.
- Project titles: large display size, serif, regular or light weight.
- Strong contrast between heading sizes (very large) and body copy (very small), reinforcing visual hierarchy.

### Colour palette

| Role         | Value     | Description                       |
|------------- |---------- |---------------------------------- |
| Background   | #FFFFFF   | Pure white                        |
| Text primary | #000000   | Pure black                        |
| Accent/Gold  | #ECD06F   | Warm gold, used for highlights    |

A deliberately restrained 3-colour palette. The gold accent is used sparingly -- on hover states, selected navigation items, and decorative details -- giving the site a quiet luxury feel.

### Transition effects

- Locomotive Scroll provides smooth lerp-based momentum scrolling (no jarring stops).
- Parallax speed differences between foreground text and background images within the horizontal track.
- Images reveal with a curtain/clip-path animation as they enter the viewport.
- Text fades in with subtle Y-axis translate (10--20px upward).
- Page transitions use opacity crossfade with a brief scale-down effect.

---

## 3. Studio--BA (Bruno Arizio) -- studio-ba.co

- **Awwwards page:** https://www.awwwards.com/sites/studio-ba-r
- **Live site:** https://studio-ba.co (also brunoarizio.com)
- **Award:** Site of the Day (SOTD) + Developer Award
- **Designer/Developer:** Bruno Arizio, multidisciplinary creative director (Netherlands)
- **Tech stack:** Vue.js, Nuxt.js, GSAP, Locomotive Scroll, Three.js
- **Also featured on:** The FWA, Codrops case study

### Design concept

Studio--BA is a multidisciplinary design practice working at the intersection of design, art, and photography for clients including Getty Institute, Adobe, Meta, and Adidas. The portfolio site uses horizontal scrolling as its primary navigation paradigm -- the entire site unfolds along a single horizontal axis, creating a gallery-wall experience.

### Horizontal scroll implementation

This is the most technically sophisticated example of the three. The site combines GSAP with Locomotive Scroll for a hybrid approach:

```
Technique: GSAP + Locomotive Scroll hybrid

1. Locomotive Scroll handles smooth momentum scrolling and
   provides a normalized scroll position value.
2. GSAP ScrollTrigger hooks into Locomotive Scroll's scroll
   position via ScrollTrigger.scrollerProxy().
3. The main horizontal track is pinned using ScrollTrigger's
   pin: true, and its xPercent is animated based on scroll
   progress with ease: "none" and scrub: true.
4. Within the horizontal track, individual project cards have
   their own ScrollTrigger instances using containerAnimation
   to trigger entrance animations at the correct horizontal
   scroll positions.
5. Three.js is used for WebGL image distortion effects on
   project thumbnails during scroll.
```

The GSAP ScrollTrigger code pattern:

```js
// Locomotive Scroll + GSAP ScrollTrigger proxy
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

// Horizontal scroll animation
const horizontalTrack = document.querySelector(".projects-track");
const panels = gsap.utils.toArray(".project-panel");

const scrollTween = gsap.to(horizontalTrack, {
  x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-section",
    scroller: "[data-scroll-container]",
    pin: true,
    scrub: 1,
    end: () => "+=" + horizontalTrack.scrollWidth,
    invalidateOnRefresh: true,
  },
});

// Nested animations within horizontal scroll
panels.forEach((panel) => {
  gsap.from(panel.querySelector(".project-image"), {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: panel,
      containerAnimation: scrollTween,
      start: "left 80%",
      end: "left 20%",
      scrub: true,
    },
  });
});
```

### Section layout

- **Horizontal navigation:** The entire site is one continuous horizontal strip. No traditional vertical page structure.
- **Project panels:** Each project is a full-viewport card with a large image, project title, client name, and year. Cards are spaced with generous gaps (roughly 10--15vw between panels).
- **Interstitial text:** Between project groups, typographic statements appear in oversized display type, providing narrative rhythm.
- **About section:** Integrated into the horizontal flow rather than being a separate page.
- **Contact:** Final panel in the horizontal strip with minimal contact information.

### Typography

- Minimal, clean sans-serif (likely a geometric or neo-grotesque face).
- Extremely large display type for interstitial statements (200px+), creating dramatic scale contrast.
- Project metadata (client, year) set very small (10--12px), uppercase, letterspaced.
- Black and white palette means typography carries the entire visual weight.

### Colour palette

| Role         | Value     | Description               |
|------------- |---------- |-------------------------- |
| Background   | #FFFFFF   | White                     |
| Text primary | #000000   | Black                     |
| Accent       | --        | No colour accent; strictly monochromatic |

The strictest palette of all three sites. The absence of colour forces attention onto composition, scale, whitespace, and image content.

### Transition effects

- Smooth momentum scrolling via Locomotive Scroll with tuned lerp values.
- WebGL image distortion on project thumbnails: images subtly warp/ripple during scroll, returning to flat at rest.
- Project images scale from 1.2 to 1.0 as they enter the viewport (zoom-out reveal).
- Text elements use staggered character/word animations (split text with GSAP SplitText or equivalent).
- Hover on project cards triggers a smooth scale-up with a WebGL displacement effect.
- Cursor follows mouse with a lagging dot, changing size/shape over interactive elements.

---

## Comparative Analysis

### Implementation approaches

| Site             | Core library       | Smooth scroll    | Pin method              | Nested animations |
|----------------- |------------------- |----------------- |------------------------ |------------------ |
| OH Architecture  | Webflow Interactions | Native (CSS)    | Sticky/transform        | Webflow triggers  |
| Grege            | Anime.js           | Locomotive Scroll | Locomotive horizontal  | data-scroll-speed |
| Studio--BA       | GSAP + Three.js    | Locomotive Scroll | ScrollTrigger pin      | containerAnimation |

### Design patterns in common

1. **Full-viewport panels.** Every site uses viewport-sized (or near-viewport-sized) panels as the horizontal scroll unit. This keeps each project or section focused and prevents content from bleeding between panels.

2. **Monochromatic or near-monochromatic palettes.** All three use black/white or near-black/near-white as the dominant colour scheme, with at most one warm accent (Grege's gold). This puts photography front and centre and creates an editorial, gallery-like atmosphere.

3. **Extreme typographic scale contrast.** All three pair very large display headings (80--200px+) with very small body/label text (10--16px). This creates strong visual hierarchy without needing colour or decorative elements.

4. **Scrub-based scroll animations.** Animations are tied 1:1 (or close to it) to scroll progress, not triggered at thresholds. This gives the user direct control and creates a tactile, responsive feel.

5. **Image-reveal animations.** Images appear with scale, clip-path, or opacity transitions as they enter the viewport, adding visual interest without distracting from the content.

6. **Custom cursors.** All three replace the default cursor with a custom dot/circle that changes on hover, reinforcing the premium, curated feel.

### The GSAP ScrollTrigger pin technique (summary)

The core pattern used across these sites (whether implemented in GSAP, Locomotive Scroll, or Webflow) is:

```
1. PIN the outer section to the viewport (position: fixed/sticky)
2. SET the section height to (content width) to create scroll runway
3. MAP vertical scroll progress to horizontal translateX on the inner track
4. USE linear easing (ease: "none") so scroll and position stay in sync
5. OPTIONALLY add containerAnimation for nested scroll-triggered effects
6. OPTIONALLY layer smooth scrolling (Lenis, Locomotive) on top for inertia
```

This technique converts the browser's native vertical scroll into horizontal motion while keeping the URL, scroll position, and back-button behaviour predictable.

---

## Key Takeaways for Woonklasse Badkamerstijl

1. **Use the pin + xPercent pattern with GSAP ScrollTrigger** as the foundation. It is the industry-standard approach, well-documented, and performant.

2. **Full-viewport panels per bathroom style/project** will create a focused, immersive browsing experience similar to walking through a showroom.

3. **Restrained colour palette** (near-white background, dark text, one accent colour) lets bathroom photography do the heavy lifting.

4. **Pair with Lenis for smooth scrolling.** Locomotive Scroll is being superseded by Lenis in newer projects. Lenis integrates cleanly with GSAP ScrollTrigger.

5. **Use containerAnimation for nested effects** like revealing text, fading in details panels, or animating price/specification overlays as each bathroom section scrolls into view.

6. **Consider subtle image effects** (scale reveal, parallax depth) but avoid heavy WebGL unless performance is tested on target devices.

---

## Sources

- [OH Architecture -- Awwwards SOTD](https://www.awwwards.com/sites/oh-architecture)
- [OH Architecture -- Webflow Showcase](https://webflow.com/made-in-webflow/website/oharch)
- [Grege creation d'interieurs -- Awwwards SOTD](https://www.awwwards.com/sites/grege-creation-dinterieurs)
- [Grege -- Interior Design Portfolio Inspiration](https://www.awwwards.com/inspiration/grege-interior-design-portfolio)
- [Studio--BA Bruno Arizio -- Awwwards SOTD](https://www.awwwards.com/sites/studio-ba-r)
- [Bruno Arizio Portfolio -- Open Source](https://github.com/bizarro/bruno-arizio)
- [Case Study: Portfolio of Bruno Arizio -- Codrops](https://tympanus.net/codrops/2019/12/18/case-study-portfolio-of-bruno-arizio/)
- [GSAP ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Horizontal Scroll with containerAnimation](https://codepen.io/GreenSock/pen/dymJaXg)
- [Awwwards Horizontal Layout Collection](https://www.awwwards.com/websites/horizontal-layout/)
