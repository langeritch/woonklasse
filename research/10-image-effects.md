# Image & Photo Effects Reference -- Award-Winning Architecture Websites (2025-2026)

Research based on Awwwards-winning architecture sites including Lanterne Architectes, Studio Dado (SOTD Feb 2026), Vita Architecture (SOTD), ARCHIDOMO Architects, Felix Nieto, Cargo Architecture, and Codrops/GSAP community resources.

---

## Table of Contents

1. [Blur-to-Sharp Reveals](#1-blur-to-sharp-reveals)
2. [Parallax Scrolling](#2-parallax-scrolling)
3. [Image Scale on Scroll](#3-image-scale-on-scroll)
4. [Clip-Path Wipe Reveals](#4-clip-path-wipe-reveals)
5. [Pixel / Mosaic Dissolve Transitions](#5-pixel--mosaic-dissolve-transitions)
6. [Hover Zoom Effects](#6-hover-zoom-effects)
7. [Image Cursor Follow](#7-image-cursor-follow)
8. [Lightbox / Gallery Patterns](#8-lightbox--gallery-patterns)
9. [Lazy Loading with Artistic Placeholders](#9-lazy-loading-with-artistic-placeholders)
10. [Ken Burns Effect](#10-ken-burns-effect)
11. [Split-Screen Image Reveals](#11-split-screen-image-reveals)
12. [Masonry / Bento Grid Layouts](#12-masonry--bento-grid-layouts)

---

## 1. Blur-to-Sharp Reveals

**Seen on:** Lanterne Architectes, Dolsten & Co (Awwwards inspiration), Critical Danger

**Description:** Images start heavily blurred and progressively sharpen as the user scrolls or as the element enters the viewport. Creates a cinematic focus-pull feel, guiding attention to architecture photography as it becomes the hero moment.

### CSS + GSAP Implementation

```css
.blur-reveal-image {
  will-change: filter, opacity;
  filter: blur(20px);
  opacity: 0;
  transition: filter 0.1s linear;
}
```

```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Scroll-linked blur reveal
gsap.fromTo(".blur-reveal-image",
  {
    filter: "blur(20px)",
    opacity: 0,
    scale: 1.05
  },
  {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".blur-reveal-image",
      start: "top 85%",
      end: "top 25%",
      scrub: 1, // links animation 1:1 to scroll position
    }
  }
);
```

### Framer Motion Implementation

```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function BlurRevealImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const blur = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        opacity,
        scale,
      }}
    />
  );
}
```

### Performance Notes

- Use `will-change: filter` sparingly; remove after animation completes.
- `filter: blur()` is GPU-composited in modern browsers but can be expensive on large images. Consider using a blurred placeholder `<img>` that crossfades to the sharp version.
- Alternative approach: stack a blurred duplicate on top and animate its opacity to 0.

---

## 2. Parallax Scrolling

**Seen on:** Works Studio, Dave Holloway portfolio, Scrolling Project Pages (Awwwards collection), virtually every Awwwards architecture SOTD.

**Description:** Background and foreground layers move at different speeds relative to scroll, creating depth. Architecture sites use this to make project photography feel immersive, as though the viewer is walking through the space.

### CSS + GSAP Implementation

```css
.parallax-section {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax-bg {
  position: absolute;
  inset: -20% 0; /* extra height for travel room */
  width: 100%;
  height: 140%;
  object-fit: cover;
  will-change: transform;
}
```

```js
// Simple vertical parallax -- background moves at 50% scroll speed
gsap.to(".parallax-bg", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// Multi-layer parallax
document.querySelectorAll("[data-speed]").forEach((el) => {
  const speed = parseFloat(el.dataset.speed);
  gsap.to(el, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: el.closest(".parallax-section"),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
```

### Framer Motion Implementation

```tsx
function ParallaxImage({ src, speed = 0.5 }: { src: string; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Optional spring for smoother feel
  const ySmooth = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} style={{ overflow: "hidden", height: "100vh", position: "relative" }}>
      <motion.img
        src={src}
        style={{ y: ySmooth, position: "absolute", width: "100%", height: "140%", objectFit: "cover" }}
      />
    </div>
  );
}
```

### Architecture Pattern

For project case studies, a common Awwwards pattern layers:
1. **Far background:** Full-bleed exterior shot at 0.3x speed
2. **Midground:** Floor plan or section drawing at 0.6x speed
3. **Foreground:** Detail photography or typography at 1.0x speed

---

## 3. Image Scale on Scroll

**Seen on:** Clarity Art (background video zoom on entry), Studio Dado, Vita Architecture

**Description:** Images grow or shrink as the user scrolls, creating a zoom-in or zoom-out cinematic transition. Often used for hero sections that start at a contained size and scale to fill the viewport (or vice versa).

### CSS + GSAP Implementation

```css
.scale-container {
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale-image {
  width: 60vw;
  will-change: transform;
}
```

```js
// Scale from contained to full-bleed on scroll
gsap.fromTo(".scale-image",
  { scale: 0.6, borderRadius: "24px" },
  {
    scale: 1.0,
    borderRadius: "0px",
    ease: "none",
    scrollTrigger: {
      trigger: ".scale-container",
      start: "top top",
      end: "+=150%",
      scrub: 1,
      pin: true, // pins the section while scaling
    },
  }
);

// Reverse: zoom out to reveal context
gsap.fromTo(".hero-image",
  { scale: 1.4 },
  {
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);
```

### Framer Motion Implementation

```tsx
function ScaleOnScroll({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["24px", "0px"]);

  return (
    <div ref={ref} style={{ height: "150vh" }}>
      <motion.div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.img src={src} style={{ scale, borderRadius, width: "100%", height: "100%", objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}
```

### Zoom Parallax Variant (Olivier Larose technique)

Multiple images at different scales inside a sticky container. As the user scrolls through 300vh, each image scales from 1 to 4, creating a layered zoom-through effect. This is particularly striking for architecture walk-throughs.

---

## 4. Clip-Path Wipe Reveals

**Seen on:** Multiple Awwwards SOTD winners, Codrops "Animated Product Grid Preview" (2025), Lechclick tutorial examples

**Description:** Images are progressively revealed by animating the `clip-path` property -- a shape (circle, polygon, inset rectangle) expands or shifts to unveil the image. Creates dramatic curtain or spotlight reveals.

### CSS + GSAP Implementation

```css
.clip-reveal {
  clip-path: inset(0 100% 0 0); /* fully hidden from right */
  will-change: clip-path;
}
```

```js
// Horizontal wipe from left to right
gsap.to(".clip-reveal", {
  clipPath: "inset(0 0% 0 0)", // fully visible
  duration: 1.2,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".clip-reveal",
    start: "top 75%",
    toggleActions: "play none none reset",
  },
});

// Circular reveal from center
gsap.fromTo(".clip-reveal-circle",
  { clipPath: "circle(0% at 50% 50%)" },
  {
    clipPath: "circle(75% at 50% 50%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".clip-reveal-circle",
      start: "top 70%",
    },
  }
);

// Diagonal wipe with polygon
gsap.fromTo(".clip-reveal-diagonal",
  { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1.4,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".clip-reveal-diagonal",
      start: "top 80%",
      end: "top 30%",
      scrub: 0.5,
    },
  }
);
```

### Framer Motion Implementation

```tsx
function ClipPathReveal({ src, direction = "left" }: { src: string; direction?: string }) {
  const clipPaths: Record<string, [string, string]> = {
    left:   ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
    right:  ["inset(0 0 0 100%)", "inset(0 0 0 0%)"],
    top:    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
    bottom: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
    center: ["circle(0% at 50% 50%)", "circle(75% at 50% 50%)"],
  };

  const [hidden, visible] = clipPaths[direction];

  return (
    <motion.img
      src={src}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: visible }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
    />
  );
}
```

### Performance Notes

- `clip-path` animations do NOT trigger layout but DO trigger paint. They are less performant than `transform` + `opacity` animations.
- For high-performance alternatives, consider masking with a sliding `div` overlay using transforms.
- Use `polygon()` for angular architectural reveals; `circle()` for spotlight effects.

---

## 5. Pixel / Mosaic Dissolve Transitions

**Seen on:** Synthetic Theatre (Awwwards, pixelated hover effect), WebGL shader-based transitions on multiple Awwwards architecture sites

**Description:** An image breaks into a mosaic of blocks/pixels that scatter, fade, or reconstitute. Creates a digital-analog tension that works well for modern architecture studios. Can be triggered on page transition, hover, or scroll.

### CSS + GSAP Implementation (Grid-Based Approach)

```js
// Split image into a grid of tiles and animate them
function createPixelDissolve(container, rows = 10, cols = 10) {
  const img = container.querySelector("img");
  const { width, height } = container.getBoundingClientRect();
  const tileW = width / cols;
  const tileH = height / rows;

  // Hide original image
  img.style.visibility = "hidden";

  // Create tile grid
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const tile = document.createElement("div");
      tile.style.cssText = `
        position: absolute;
        left: ${c * tileW}px;
        top: ${r * tileH}px;
        width: ${tileW}px;
        height: ${tileH}px;
        background-image: url(${img.src});
        background-size: ${width}px ${height}px;
        background-position: -${c * tileW}px -${r * tileH}px;
      `;
      container.appendChild(tile);
      tiles.push(tile);
    }
  }

  // Animate tiles in random order
  gsap.from(tiles, {
    opacity: 0,
    scale: 0,
    rotation: () => gsap.utils.random(-45, 45),
    duration: 0.6,
    stagger: {
      each: 0.02,
      from: "random",
    },
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: container,
      start: "top 75%",
    },
  });
}
```

### WebGL / Canvas Approach (Higher Fidelity)

For the pixel-accurate dissolve effect seen on Awwwards winners, use a canvas-based approach:

```js
// Simplified concept -- use Three.js or custom WebGL for production
// The shader samples the image and applies a pixelation uniform
// that transitions from high pixelation (mosaic) to 0 (sharp)

// Vertex shader: standard fullscreen quad
// Fragment shader:
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uPixelSize; // animate from 50.0 to 1.0
  varying vec2 vUv;
  void main() {
    vec2 pixelUv = floor(vUv * uPixelSize) / uPixelSize;
    gl_FragColor = texture2D(uTexture, pixelUv);
  }
`;

// Animate with GSAP
gsap.to(shaderMaterial.uniforms.uPixelSize, {
  value: 1.0, // from 50.0 (pixelated) to 1.0 (sharp)
  duration: 1.5,
  ease: "power2.inOut",
});
```

### Framer Motion (Tile-Based)

```tsx
function MosaicReveal({ src, cols = 8, rows = 6 }: { src: string; cols?: number; rows?: number }) {
  const tiles = Array.from({ length: cols * rows }, (_, i) => ({
    col: i % cols,
    row: Math.floor(i / cols),
  }));

  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {tiles.map((tile, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: Math.random() * 0.5, duration: 0.4 }}
          style={{
            aspectRatio: "1",
            backgroundImage: `url(${src})`,
            backgroundSize: `${cols * 100}% ${rows * 100}%`,
            backgroundPosition: `${(tile.col / (cols - 1)) * 100}% ${(tile.row / (rows - 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
```

---

## 6. Hover Zoom Effects

**Seen on:** CUSP (Awwwards, cursor hover image effects), REGI Laboratories, virtually all portfolio-style architecture sites

**Description:** Images smoothly scale up on hover, revealing detail. Container clips the overflow so the image stays within bounds. Often combined with an overlay color shift or caption reveal.

### CSS-Only Implementation

```css
.hover-zoom {
  overflow: hidden;
  cursor: pointer;
}

.hover-zoom img {
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform;
}

.hover-zoom:hover img {
  transform: scale(1.08);
}

/* With overlay */
.hover-zoom::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
}

.hover-zoom:hover::after {
  background: rgba(0, 0, 0, 0.15);
}
```

### CSS + GSAP (Directional Zoom)

```js
document.querySelectorAll(".hover-zoom").forEach((el) => {
  const img = el.querySelector("img");
  const overlay = el.querySelector(".overlay");

  el.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.1, duration: 0.8, ease: "power2.out" });
    gsap.to(overlay, { opacity: 1, duration: 0.4 });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.inOut" });
    gsap.to(overlay, { opacity: 0, duration: 0.3 });
  });
});
```

### Framer Motion Implementation

```tsx
function HoverZoomImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div style={{ overflow: "hidden", borderRadius: "8px" }}>
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        style={{ display: "block", width: "100%" }}
      />
    </motion.div>
  );
}
```

### Architecture Pattern

Combine with a project title that slides up from the bottom and a "View Project" link that fades in:

```tsx
<motion.div whileHover="hover" style={{ overflow: "hidden", position: "relative" }}>
  <motion.img src={src} variants={{ hover: { scale: 1.08 } }} transition={{ duration: 0.6 }} />
  <motion.div
    variants={{ hover: { y: 0, opacity: 1 } }}
    initial={{ y: "100%", opacity: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
  >
    <h3>Project Title</h3>
  </motion.div>
</motion.div>
```

---

## 7. Image Cursor Follow

**Seen on:** Marga Navarro (hover trails and mask reveal), CUSP, multiple architecture portfolio navigation pages

**Description:** An image thumbnail follows the user's cursor position, appearing when hovering over a project list item. Creates an elegant way to preview project imagery without clicking. Widely used in architecture portfolio navigation.

### CSS + GSAP Implementation

```css
.cursor-image {
  position: fixed;
  width: 400px;
  height: 280px;
  object-fit: cover;
  pointer-events: none;
  opacity: 0;
  z-index: 100;
  border-radius: 8px;
  will-change: transform;
}
```

```js
const cursorImage = document.querySelector(".cursor-image");
let mouseX = 0, mouseY = 0;

// Smooth follow with GSAP quickTo
const xTo = gsap.quickTo(cursorImage, "x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(cursorImage, "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX - 200; // offset by half width
  mouseY = e.clientY - 140; // offset by half height
  xTo(mouseX);
  yTo(mouseY);
});

// Show/hide on project list hover
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const imgSrc = link.dataset.image;
    cursorImage.src = imgSrc;
    gsap.to(cursorImage, { opacity: 1, scale: 1, duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(cursorImage, { opacity: 0, scale: 0.9, duration: 0.2 });
  });
});
```

### Framer Motion Implementation

```tsx
import { motion, useMotionValue, useSpring } from "framer-motion";

function CursorFollowGallery({ projects }: { projects: { title: string; image: string }[] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 140);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={() => setActiveImage(project.image)}
          onMouseLeave={() => setActiveImage(null)}
          style={{ padding: "2rem 0", borderBottom: "1px solid #eee", cursor: "pointer" }}
        >
          <h2>{project.title}</h2>
        </div>
      ))}

      <AnimatePresence>
        {activeImage && (
          <motion.img
            src={activeImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: "fixed",
              x, y,
              width: 400,
              height: 280,
              objectFit: "cover",
              pointerEvents: "none",
              borderRadius: 8,
              zIndex: 100,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
```

### Performance Notes

- Use `position: fixed` and `transform` (not `left`/`top`) for the follower image.
- `gsap.quickTo()` is the most performant way to do cursor-following with GSAP -- it reuses the same tween.
- Preload all project images on page load so there is no flash on first hover.

---

## 8. Lightbox / Gallery Patterns

**Seen on:** Felix Nieto (architectural visualization), ARCHIDOMO Architects, Carles Faus

**Description:** Clicking a thumbnail expands it into a fullscreen or near-fullscreen overlay with navigation. Modern architecture lightboxes use shared layout animations (FLIP technique) where the thumbnail smoothly morphs into the fullscreen view.

### CSS + GSAP (FLIP Animation)

```js
// Using GSAP Flip plugin for seamless thumbnail-to-fullscreen
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

function openLightbox(thumbnail) {
  const state = Flip.getState(thumbnail);

  // Move thumbnail to lightbox container
  document.querySelector(".lightbox").appendChild(thumbnail);
  thumbnail.classList.add("fullscreen");

  Flip.from(state, {
    duration: 0.7,
    ease: "power3.inOut",
    absolute: true,
    onComplete: () => showLightboxControls(),
  });

  // Fade in backdrop
  gsap.to(".lightbox-backdrop", { opacity: 1, duration: 0.4 });
}

function closeLightbox(thumbnail, originalParent) {
  const state = Flip.getState(thumbnail);

  originalParent.appendChild(thumbnail);
  thumbnail.classList.remove("fullscreen");

  Flip.from(state, {
    duration: 0.6,
    ease: "power3.inOut",
  });

  gsap.to(".lightbox-backdrop", { opacity: 0, duration: 0.3 });
}
```

### Framer Motion (layoutId)

```tsx
import { AnimatePresence, motion } from "framer-motion";

function Gallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {images.map((src, i) => (
          <motion.img
            key={src}
            layoutId={`gallery-${i}`}
            src={src}
            onClick={() => setSelected(i)}
            style={{ width: "100%", cursor: "pointer", borderRadius: 8 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <motion.img
              layoutId={`gallery-${selected}`}
              src={images[selected]}
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

### Gallery Navigation Patterns

- **Swipe navigation:** Use drag gestures with `drag="x"` (Framer Motion) or Draggable (GSAP)
- **Keyboard support:** Arrow keys, Escape to close
- **Counter display:** "03 / 12" style minimal numbering
- **Thumbnail strip:** Small previews below the main image with scroll snap

---

## 9. Lazy Loading with Artistic Placeholders

**Seen on:** Most performance-optimized Awwwards sites; architecture studios with large image portfolios

**Description:** Instead of empty space or a spinner while images load, show a stylized placeholder that transitions artistically into the real image. Common approaches: dominant-color blocks, blurred thumbnails (BlurHash/ThumbHash), or CSS gradient approximations.

### Implementation Approaches

#### A. BlurHash / ThumbHash Placeholder

```tsx
// Generate BlurHash server-side, render as tiny canvas client-side
// Then crossfade to loaded image

function LazyImage({ src, blurhash, width, height }: Props) {
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && blurhash) {
      const pixels = decode(blurhash, 32, 32);
      const ctx = canvasRef.current.getContext("2d");
      const imageData = ctx.createImageData(32, 32);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  }, [blurhash]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        width={32}
        height={32}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          filter: "blur(20px)", transform: "scale(1.2)",
          opacity: loaded ? 0 : 1, transition: "opacity 0.5s ease",
        }}
      />
      <img
        src={src}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
    </div>
  );
}
```

#### B. CSS Gradient Placeholder

```css
.lazy-placeholder {
  background: linear-gradient(135deg, #e8e4df 0%, #d4cfc8 50%, #c2b8ac 100%);
  /* Use dominant colors extracted from the image at build time */
}

.lazy-image {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.lazy-image.loaded {
  opacity: 1;
}
```

#### C. LQIP (Low Quality Image Placeholder) with GSAP Transition

```js
// Load a tiny (20px wide) version first, then reveal sharp version
const img = new Image();
img.src = fullSrc;
img.onload = () => {
  sharpImage.src = fullSrc;
  gsap.to(placeholder, { opacity: 0, filter: "blur(0px)", duration: 0.8 });
  gsap.to(sharpImage, { opacity: 1, duration: 0.8 });
};
```

### Architecture-Specific Notes

- Use warm neutral gradients (stone, concrete, wood tones) that match your brand palette.
- For bathroom/interior photography: placeholder with dominant material color (marble white, slate gray, warm oak).
- Native `loading="lazy"` with `decoding="async"` is the baseline; artistic placeholders layer on top.

---

## 10. Ken Burns Effect

**Seen on:** Hero sections and project detail pages across multiple Awwwards architecture sites; documentary-style portfolio presentations

**Description:** Slow, continuous pan and zoom across a still image, named after documentarian Ken Burns. Creates a sense of movement and life in static architecture photography. Especially effective for large interior/exterior shots.

### CSS-Only Implementation

```css
.ken-burns-container {
  overflow: hidden;
  height: 100vh;
}

.ken-burns-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: kenburns 20s ease-in-out infinite alternate;
}

@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.15) translate(-3%, -2%);
  }
}

/* Multiple images with different trajectories */
.ken-burns-image:nth-child(2) {
  animation: kenburns-reverse 25s ease-in-out infinite alternate;
}

@keyframes kenburns-reverse {
  0% {
    transform: scale(1.1) translate(-2%, 1%);
  }
  100% {
    transform: scale(1) translate(1%, -1%);
  }
}
```

### CSS + GSAP Implementation

```js
// More control over timing and easing
gsap.to(".ken-burns-image", {
  scale: 1.15,
  x: "-3%",
  y: "-2%",
  duration: 15,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
});

// Scroll-linked Ken Burns (zoom tightens as user scrolls)
gsap.fromTo(".ken-burns-scroll",
  { scale: 1, x: "0%", y: "0%" },
  {
    scale: 1.2,
    x: "-5%",
    y: "-3%",
    ease: "none",
    scrollTrigger: {
      trigger: ".ken-burns-scroll",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);
```

### Framer Motion Implementation

```tsx
function KenBurnsImage({ src }: { src: string }) {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <motion.img
        src={src}
        animate={{
          scale: [1, 1.15],
          x: ["0%", "-3%"],
          y: ["0%", "-2%"],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
```

### Slideshow Variant

Combine Ken Burns with crossfade to create an auto-advancing slideshow where each image pans/zooms in a different direction:

```js
const directions = [
  { scale: 1.15, x: "-3%", y: "-2%" },
  { scale: 1.1,  x: "2%",  y: "-1%" },
  { scale: 1.2,  x: "-1%", y: "3%" },
];

// Crossfade between images while each has its own Ken Burns motion
```

---

## 11. Split-Screen Image Reveals

**Seen on:** Archipelago (interactive scroll), multiple Awwwards architecture before/after and comparison layouts

**Description:** The screen splits (vertically or horizontally) to reveal two images side by side, or a sliding divider lets the user compare two states (before/after renovation, day/night, etc.).

### CSS + GSAP Implementation

#### A. Scroll-Triggered Split Reveal

```css
.split-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.split-left, .split-right {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split-left { left: 0; }
.split-right { right: 0; }

.split-left img, .split-right img {
  width: 200%; /* double width so each half shows the full image */
  height: 100%;
  object-fit: cover;
}

.split-right img {
  margin-left: -100%;
}
```

```js
// Animate split panels from center outward
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".split-container",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

tl.from(".split-left", { xPercent: 50, duration: 1 })
  .from(".split-right", { xPercent: -50, duration: 1 }, "<");
```

#### B. Interactive Before/After Slider

```js
const slider = document.querySelector(".comparison-slider");
const beforeImage = document.querySelector(".before-image");

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});

// Or with GSAP Draggable
Draggable.create(".slider-handle", {
  type: "x",
  bounds: ".comparison-container",
  onDrag: function () {
    const percent = (this.x / this.maxX) * 100;
    gsap.set(".before-image", { clipPath: `inset(0 ${100 - percent}% 0 0)` });
  },
});
```

### Framer Motion Implementation

```tsx
function SplitReveal({ leftSrc, rightSrc }: { leftSrc: string; rightSrc: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div ref={ref} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <motion.div style={{ position: "absolute", left: 0, width: "50%", height: "100%", x: leftX, overflow: "hidden" }}>
        <img src={leftSrc} style={{ width: "200%", height: "100%", objectFit: "cover" }} />
      </motion.div>
      <motion.div style={{ position: "absolute", right: 0, width: "50%", height: "100%", x: rightX, overflow: "hidden" }}>
        <img src={rightSrc} style={{ width: "200%", height: "100%", objectFit: "cover", marginLeft: "-100%" }} />
      </motion.div>
    </div>
  );
}
```

### Architecture Use Cases

- **Before/After renovation:** Draggable comparison slider
- **Day/Night rendering:** Horizontal split with scroll reveal
- **Material comparison:** Side-by-side with different finishes
- **Exterior/Interior:** Vertical split transitioning from outside to inside

---

## 12. Masonry / Bento Grid Layouts

**Seen on:** Studio Dado (dynamic grid), Lanterne Architectes (organic grid with 3D logo), ARCHIDOMO Architects, most architecture portfolio pages

**Description:** Asymmetric grid layouts where images of varying aspect ratios are arranged without uniform row heights. Bento grids (inspired by bento boxes) use a defined grid template with intentionally varied cell sizes. Both create visual interest and allow mixing landscape/portrait/square photography.

### CSS Grid -- Bento Layout

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 300px);
  gap: 16px;
}

/* Hero image spans 2 columns and 2 rows */
.bento-grid .hero {
  grid-column: span 2;
  grid-row: span 2;
}

/* Tall image spans 2 rows */
.bento-grid .tall {
  grid-row: span 2;
}

/* Wide image spans 2 columns */
.bento-grid .wide {
  grid-column: span 2;
}

.bento-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
```

### True Masonry with CSS (columns)

```css
.masonry {
  columns: 3;
  column-gap: 16px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .masonry { columns: 2; }
}

@media (max-width: 480px) {
  .masonry { columns: 1; }
}
```

### Animated Grid with GSAP

```js
// Staggered reveal of grid items on scroll
gsap.from(".bento-grid > *", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  stagger: {
    each: 0.1,
    from: "start",
  },
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".bento-grid",
    start: "top 80%",
  },
});

// GSAP Flip for layout transitions (filtering projects)
function filterGrid(category) {
  const state = Flip.getState(".bento-grid > *");

  // Reorder/filter DOM elements
  items.forEach((item) => {
    item.style.display = item.dataset.category === category || category === "all"
      ? "" : "none";
  });

  Flip.from(state, {
    duration: 0.6,
    ease: "power2.inOut",
    stagger: 0.04,
    absolute: true,
    onEnter: (el) => gsap.fromTo(el, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 }),
    onLeave: (el) => gsap.to(el, { opacity: 0, scale: 0.8, duration: 0.3 }),
  });
}
```

### Framer Motion Bento Grid

```tsx
function BentoGrid({ items }: { items: { src: string; span: string }[] }) {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "300px",
        gap: "16px",
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.src}
          className={item.span} // "hero", "tall", "wide", or default
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          style={{ overflow: "hidden", borderRadius: 8 }}
        >
          <motion.img
            src={item.src}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Architecture-Specific Grid Patterns

| Pattern | Grid Template | Use Case |
|---------|--------------|----------|
| **Editorial** | 2-col hero + 2 small squares | Project overview page |
| **Gallery** | 3-col masonry | All-projects archive |
| **Case Study** | Alternating full-width + 2-col pairs | Single project detail |
| **Mood Board** | 4-col bento with varied heights | Interior design concepts |
| **Process** | Horizontal scroll strip | Construction timeline |

---

## General Performance Guidelines

1. **Prefer `transform` and `opacity`** for animations -- they are composited on the GPU and avoid layout/paint.
2. **`clip-path` and `filter`** trigger paint but not layout. Use sparingly on large elements.
3. **Use `will-change`** only during active animation; set it just before and remove after.
4. **Intersection Observer** (or `whileInView` / `ScrollTrigger`) to avoid animating off-screen elements.
5. **Image optimization:** Serve WebP/AVIF at 2x display density. Use `<picture>` with `srcset` for responsive images.
6. **GSAP `scrub`** values: `true` for instant tracking, `0.5-1` for smooth lag, `2+` for dreamy slow follow.
7. **Framer Motion `useSpring`** adds organic feel to scroll-linked values. Tune `stiffness` (100-300) and `damping` (15-40).
8. **Reduce motion:** Always respect `prefers-reduced-motion`. Disable parallax, Ken Burns, and complex reveals for accessibility.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Library Versions (as of 2026)

| Library | Version | Key Feature |
|---------|---------|-------------|
| GSAP | 3.12+ | ScrollTrigger, Flip, Observer plugins |
| Framer Motion | 11+ | layoutId, useScroll, useTransform, useSpring |
| Motion (standalone) | 11+ | Native ScrollTimeline for hardware acceleration |
| Lenis | 1.1+ | Smooth scroll (pairs with GSAP/Framer Motion) |

---

## Sources

- Awwwards architecture collection: https://www.awwwards.com/websites/architecture/
- Awwwards parallax collection: https://www.awwwards.com/awwwards/collections/parallax/
- Awwwards hovers and cursors: https://www.awwwards.com/awwwards/collections/hovers-cursors-and-cute-interactions/
- Codrops GSAP clip-path grid (2025): https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/
- Codrops WebGL gallery (2026): https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/
- Codrops SVG mask transitions (2026): https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/
- Builder.io GSAP reveal: https://www.builder.io/blog/gsap-reveal
- Olivier Larose parallax tutorial: https://blog.olivierlarose.com/tutorials/zoom-parallax
- GSAP scroll documentation: https://gsap.com/scroll/
- Motion scroll animations: https://motion.dev/docs/react-scroll-animations
