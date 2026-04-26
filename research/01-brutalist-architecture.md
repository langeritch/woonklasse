# Brutalist Architecture Website Design Analysis (2025-2026)

Research compiled from Awwwards SOTD winners and notable brutalist/neobrutalist web projects.

---

## 1. OH Architecture (oharchitecture.com.au)

**Award:** Awwwards Site of the Day + Developer Award (April 28, 2025)
**Scores:** Design 7.41 | Usability 7.28 | Creativity 7.52 | Content 7.73 (Overall 7.42/10)
**Built by:** MONOLOG (design studio)
**URL:** https://www.oharchitecture.com.au
**Awwwards:** https://www.awwwards.com/sites/oh-architecture

### Color Palette

| Role         | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| Background   | `#FCFCFC` | Off-white primary background       |
| Text         | Dark      | High contrast on light backgrounds |
| Accent       | Brand col | Buttons, interactive elements      |
| Borders      | Light sec | Subtle definition lines            |

The site uses a strictly limited palette -- essentially monochromatic off-white with dark text. This restraint directly mirrors the raw concrete material philosophy of brutalist architecture: one material, honestly expressed.

### Typography

- Fluid type scaling via CSS `clamp()` throughout
- Display Large: `clamp(4.2rem, 3.142rem + 6.24vw, 11.032rem)` -- enormous headlines that dominate the viewport
- H1: `clamp(3.02rem, 2.32rem + 4.2vw, 7.52rem)`
- Body: `clamp(1rem, 0.986rem + 0.07vw, 1.071rem)`
- Sans-serif typeface with clean architectural character
- Typography is the primary design element -- hero text replaces hero imagery in several sections

### Layout Structure (Section-by-Section)

1. **Navigation Bar**
   - Minimal top bar: "Works," "Studio," "Process," "Gallery" + Instagram link
   - Mobile hamburger with clip-path transition animation
   - Menu uses typographic scale as the visual feature itself

2. **Hero Section**
   - Featured project image ("Myrtle Pool House" at time of review)
   - Layered headline hierarchy with oversized display type
   - Scroll prompt animation at bottom
   - Full-bleed photography with text overlay

3. **Works Grid / Horizontal Scroll**
   - Horizontal scrolling project showcase (GSAP Draggable powered)
   - Editorial, minimal layout with typographic labels
   - 6 projects visible with hover animations
   - Content CTA and year indicators translate vertically on hover

4. **Process Section**
   - 6-stage workflow visualization
   - Timeline/step structure
   - Architectural diagram aesthetic

5. **Testimonial Block**
   - Client quote section
   - Minimal framing, letting typography speak

6. **Gallery**
   - Draggable gallery interaction (GSAP)
   - Complex positioned absolute layout with parallax-like scaling
   - Images break the grid intentionally

7. **Footer**
   - Acknowledgment of Traditional Owners
   - Contact info, office hours
   - AIA membership badge
   - Credits to MONOLOG studio

### Animation Techniques

| Technique                 | Implementation                                    |
| ------------------------- | ------------------------------------------------- |
| Horizontal scroll         | GSAP ScrollTrigger + Draggable plugin              |
| Hover image scale         | CSS `transform: scale(1.1)` with backdrop blur     |
| Underline hover effects   | CSS scale animations with transform-origin shifts  |
| Filter dot indicators     | CSS `scaleX(0)` to `scaleX(1)` transitions         |
| Gallery parallax          | Absolute positioning with scroll-driven scaling    |
| Page transitions          | Clip-path animations                              |
| Scroll prompt             | Looping CSS keyframe animation                     |
| Loading animation         | Custom transition on page load                     |

### What Makes It Award-Winning

- The near-monochromatic palette forces content (photography) to carry all visual weight
- Horizontal scrolling on the works page breaks convention while remaining intuitive via GSAP Draggable
- Typography hierarchy is extremely controlled -- massive display fonts create architectural scale
- The draggable gallery interaction adds tactile quality unusual in architecture portfolios
- Raw, minimal aesthetic matches the firm's high-end residential work
- Negative space is used as a structural element, much like void space in brutalist buildings

---

## 2. GKC Architecture & Design (gkc.ca)

**Award:** Awwwards Site of the Day + Developer Award (November 6, 2025)
**Scores:** Design 7.30 | Usability 7.11 | Creativity 7.48 | Content 7.36 (Overall 7.29/10)
**Built by:** Locomotive (creative studio, Montreal)
**URL:** https://gkc.ca/en
**Awwwards:** https://www.awwwards.com/sites/gkc-architecture-design

### Color Palette

| Role           | Hex       | Usage                                |
| -------------- | --------- | ------------------------------------ |
| Primary Dark   | `#151F26` | Dark charcoal, near-black base       |
| White          | `#FFFFFF` | Clean backgrounds, contrast text     |
| Accent Orange  | `#FA5D29` | Interactive highlights (from system) |
| Light Gray     | `#F8F8F8` | Section backgrounds                  |
| Medium Gray    | `#EDEDED` | Borders, dividers                    |

Strictly two-tone palette (dark charcoal + white) with calming blues, neutral tones, and rich accents to convey confidence and strength. The limited palette is a deliberate expression of the firm's philosophy of bringing clarity to complexity.

### Typography

- **Primary font:** Inter Tight (variable font, weights 100-900)
- Weight range actively used: Light (300) through Black (800)
- Fluid type scaling from 11px to 170px using CSS clamp()
- Fine-line graphics and typography inspired by architectural curves
- Sans-serif precision echoing technical drawing lettering

### Layout Structure (Section-by-Section)

1. **Sticky Navigation**
   - Main menu: About, Approach, Expertise, Project Sectors, Sustainability, Careers, Studios, News
   - Language toggle (FR/EN -- Montreal-based firm)
   - Clean horizontal bar, no visual noise

2. **Hero Section**
   - Feature video/carousel with tagline "Aligning vision and action"
   - Full-viewport cinematic presentation
   - Next/Previous carousel controls with smooth transitions

3. **Project Showcase Grid**
   - Grid layouts displaying completed architectural work
   - Photography-driven with text overlays
   - Categories: Distribution & Warehousing, Office buildings, Industrial

4. **Client Logo Carousel**
   - Horizontal scrolling strip of major client logos
   - Adds credibility through visual authority

5. **News/Updates Section**
   - Article previews with thumbnail images
   - Editorial grid layout

6. **Office Locations**
   - Four global studios listed with contact details
   - Geographic presence visualization

7. **Footer**
   - Replicates header nav structure
   - Social links, office addresses
   - Legal information

### Animation Techniques

| Technique               | Implementation                                  |
| ------------------------ | ----------------------------------------------- |
| Loading spinner          | CSS cubic-bezier animation                       |
| Carousel transitions     | Smooth slide with CSS transform                  |
| Scroll animations        | GSAP-powered reveal on scroll                    |
| Lottie animations        | Vector animations for microinteractions          |
| Hover states             | 0.3s ease-out transitions on cards               |
| Page transitions         | Fade and slide combinations                      |
| Microinteractions        | Button states, form feedback, nav highlights     |

### What Makes It Award-Winning

- Visual rhythm and negative space create a sense of architectural proportion on screen
- The Inter Tight variable font allows extremely precise typographic control across all weights
- Lottie animations add polish without heavy JavaScript overhead
- The bilingual architecture (FR/EN) is seamlessly integrated without cluttering the design
- Corporate modernism executed at a very high level -- appropriate for B2B architecture
- Photography and white space do the heavy lifting, keeping the interface invisible

---

## 3. BRUTO Denver (brutodenver.com)

**Award:** Dezeen Awards 2025 Shortlist (Graphic Design category)
**Designed by:** Wunder Werkz (Denver-based studio)
**URL:** https://www.brutodenver.com
**Context:** Michelin Star restaurant that explores Brutalism through food

This is included as the most explicitly and radically brutalist web design of the group -- a true "web experiment" rather than a conventional website.

### Color Palette

| Role           | Hex       | Usage                                 |
| -------------- | --------- | ------------------------------------- |
| Primary Red    | `#FF2E00` | Dominant page color, bold red hue     |
| Black          | `#000000` | Bold text, structural elements        |
| Concrete Gray  | Various   | Blueprint background, raw materials   |
| White          | `#FFFFFF` | Counter-elements, contrast            |

The strong red hue dominates the single-page design. This is a deliberate departure from the muted tones typical of restaurant websites -- it is aggressive, confrontational, and unmissable.

### Typography

- Oversized logo typography that morphs into different typefaces on interaction
- Bold black text over the red background
- The "ø" character is used as a design element across mediums
- Font variants change dynamically on the website based on user interaction
- Scale is intentionally uncomfortable -- text fills the viewport

### Layout Structure

1. **Single Landing Page**
   - All information overlaid on one page -- no traditional navigation
   - Breaks the convention of multi-page restaurant sites entirely
   - Function dictates form: menus, hours, reservations all on one surface

2. **Background Layer**
   - Faint architectural blueprint of the actual restaurant sits behind content
   - A concrete breeze block slowly spins in one corner (3D CSS or WebGL)
   - These elements reference the physical brutalist architecture of the space

3. **Interactive Checkbox System**
   - Clicking checkboxes causes information to appear/disappear
   - Information is destructive -- ticking a box removes other content
   - User participates in the design by making choices about what they see

4. **Central Logo**
   - Oversized "BRUTO" logo dominates the center
   - Morphs typography on each interaction
   - Acts as both branding and interactive art piece

### Animation Techniques

| Technique                | Implementation                                |
| ------------------------ | --------------------------------------------- |
| Spinning concrete block  | CSS 3D transform or WebGL rotation             |
| Typography morphing      | Font-variation-settings or font-family swap    |
| Checkbox interactions    | JS-driven show/hide with CSS transitions       |
| Blueprint background     | Fixed/parallax positioned background layer     |
| Content disappearance    | Opacity/display transitions on interaction     |

### What Makes It Award-Winning

- Radically rejects conventional restaurant web design
- The design philosophy is stated explicitly: "user experimentation over user experience"
- Physical brutalist architecture (the restaurant itself) is literally encoded into the web design via blueprint backgrounds and spinning concrete
- The checkbox interaction system is a commentary on how we consume information -- destructive, irreversible choices
- Single-page constraint forces every design decision to be intentional
- The morphing typography turns the logo into a living design element
- Built with Next.js for modern performance despite the raw aesthetic

---

## Cross-Analysis: Common Patterns and Takeaways

### Shared Design Principles

1. **Material honesty** -- All three sites let their primary material (photography, typography, or color) dominate without decoration
2. **Extreme restraint in color** -- Palettes of 1-3 colors maximum
3. **Typography as architecture** -- Oversized, fluid, variable-weight type used structurally
4. **Intentional discomfort** -- Horizontal scrolling, single-page layouts, destructive interactions
5. **Negative space as structure** -- Void and whitespace used as deliberately as filled areas

### Technology Stack Comparison

| Technology     | OH Architecture | GKC Architecture | BRUTO        |
| -------------- | --------------- | ----------------- | ------------ |
| Animation      | GSAP            | GSAP + Lottie     | CSS 3D / JS  |
| Framework      | Custom          | Custom            | Next.js      |
| Typography     | CSS clamp()     | Inter Tight var.  | Dynamic swap |
| Scroll         | GSAP Draggable  | GSAP ScrollTrig.  | Single page  |
| Layout         | 12-col grid     | Grid + Flexbox    | Single layer |

### Key Differences from Standard Web Design

| Standard Web Design              | Brutalist Architecture Web Design        |
| -------------------------------- | ---------------------------------------- |
| Gradient backgrounds             | Flat, single-color fields                |
| Rounded corners, soft shadows    | Sharp edges, high contrast borders       |
| Decorative illustrations         | Raw photography or nothing               |
| Comfortable, predictable layout  | Intentionally challenging navigation     |
| User-friendly above all          | User-provocative by design               |
| Multiple accent colors           | Monochromatic or dichromatic             |
| Small, readable body type        | Oversized display type as primary element|
| Multi-page with clear hierarchy  | Unconventional structures (horizontal, single-page) |

### Font Recommendations for Brutalist Architecture Sites

| Font Name       | Style              | Why It Works                                |
| --------------- | ------------------ | ------------------------------------------- |
| Inter Tight     | Geometric sans     | Precision, variable weight control          |
| Monument Ext.   | Extended grotesque  | Architectural scale, commanding presence    |
| Neue Haas Grotesk | Neo-grotesque    | Raw clarity, Swiss precision                |
| Space Grotesk   | Geometric sans     | Technical drawing character                 |
| Archivo         | Grotesque          | Workhorse with brutalist weight range       |
| IBM Plex Mono   | Monospace          | Industrial, utilitarian aesthetic           |

### Animation Patterns Worth Implementing

1. **GSAP ScrollTrigger** -- Industry standard for scroll-driven animations in award-winning sites
2. **GSAP Draggable** -- Tactile gallery/carousel interactions (OH Architecture pattern)
3. **Lottie** -- Lightweight vector animations for microinteractions
4. **CSS clamp()** -- Fluid typography that scales with viewport
5. **Clip-path transitions** -- Page and section reveal animations
6. **CSS 3D transforms** -- Rotating elements (BRUTO concrete block)
7. **Variable font animation** -- Animating font-weight and font-variation-settings

---

## Sources

- Awwwards Brutalism Collection: https://www.awwwards.com/awwwards/collections/brutalism/
- OH Architecture SOTD: https://www.awwwards.com/sites/oh-architecture
- GKC Architecture & Design SOTD: https://www.awwwards.com/sites/gkc-architecture-design
- Dezeen on Bruto: https://www.dezeen.com/2025/11/12/bruto-denver-visual-idendity-wunder-werkz/
- Bruto Denver: https://www.brutodenver.com/
- GKC Architecture: https://gkc.ca/en
- OH Architecture: https://www.oharchitecture.com.au
- Awwwards Architecture Websites: https://www.awwwards.com/websites/architecture/
- NN/g Neobrutalism Definition: https://www.nngroup.com/articles/neobrutalism/
