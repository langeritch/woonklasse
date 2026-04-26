# GSAP ScrollTrigger Animation Patterns Reference

> Comprehensive reference for award-winning animation patterns commonly seen on Awwwards, FWA, and CSS Design Awards architecture/luxury sites (2025-2026). All examples are written for **Nuxt 3 / Vue 3** with Composition API.

---

## Table of Contents

1. [Project Setup (Nuxt 3)](#1-project-setup-nuxt-3)
2. [Text Split & Reveal Animations](#2-text-split--reveal-animations)
3. [Image Parallax](#3-image-parallax)
4. [Horizontal Scroll Sections](#4-horizontal-scroll-sections)
5. [Pinned Sections](#5-pinned-sections)
6. [Staggered Grid Reveals](#6-staggered-grid-reveals)
7. [Smooth Page Transitions](#7-smooth-page-transitions)
8. [Magnetic Buttons](#8-magnetic-buttons)
9. [Custom Cursor Effects](#9-custom-cursor-effects)
10. [Blur-to-Sharp Transitions](#10-blur-to-sharp-transitions)
11. [Clip-Path Reveals](#11-clip-path-reveals)
12. [Counter / Number Animations](#12-counter--number-animations)
13. [Composable: useScrollAnimation](#13-composable-usescrollanimation)
14. [Performance & Cleanup Checklist](#14-performance--cleanup-checklist)

---

## 1. Project Setup (Nuxt 3)

### Install dependencies

```bash
npm install gsap
# or use the Nuxt module
npm install @hypernym/nuxt-gsap
```

### Option A -- Nuxt module (recommended)

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
    // Club plugins (require license)
    // clubPlugins: {
    //   scrollSmoother: true,
    //   splitText: true,
    // },
  },
})
```

Access anywhere via:

```ts
const { $gsap, $ScrollTrigger } = useNuxtApp()
```

### Option B -- Manual plugin

```ts
// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
    },
  }
})
```

### Critical Nuxt rules

- **All GSAP code must run inside `onMounted()`** to avoid hydration mismatches and SSR errors.
- **Always clean up** ScrollTrigger instances in `onUnmounted()` or use `ScrollTrigger.killAll()`.
- Use `nextTick()` when animating elements that depend on reactive data rendering.

---

## 2. Text Split & Reveal Animations

The signature animation of luxury websites: text that reveals character-by-character or line-by-line as the user scrolls.

### 2a. Character-by-character reveal

```vue
<template>
  <h1 ref="headingRef" class="split-heading">
    Elevated Bathroom Design
  </h1>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const headingRef = ref(null)
let splitInstance = null
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    splitInstance = new SplitText(headingRef.value, {
      type: 'chars, words',
      charsClass: 'char',
    })

    gsap.from(splitInstance.chars, {
      scrollTrigger: {
        trigger: headingRef.value,
        start: 'top 85%',
        end: 'top 20%',
        scrub: 0.6,
      },
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.03,
      duration: 1.2,
      ease: 'power3.out',
      transformOrigin: '0% 50% -50',
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
  splitInstance?.revert()
})
</script>

<style scoped>
.split-heading {
  font-size: clamp(2.5rem, 6vw, 7rem);
  line-height: 1.1;
  overflow: hidden;
  perspective: 400px;
}

:deep(.char) {
  display: inline-block;
  will-change: transform, opacity;
}
</style>
```

### 2b. Line-by-line mask reveal (luxury style)

```vue
<template>
  <div ref="textBlock" class="reveal-text">
    <p>Where craftsmanship meets contemporary aesthetics,
       every detail becomes an experience.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const textBlock = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    const split = new SplitText(textBlock.value.querySelector('p'), {
      type: 'lines',
      linesClass: 'line-wrap',
      autoSplit: true,        // re-splits on resize
      mask: 'lines',          // creates overflow:hidden wrapper per line
    })

    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: textBlock.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.12,
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.reveal-text {
  font-size: 1.5rem;
  line-height: 1.6;
}

:deep(.line-wrap) {
  overflow: hidden;
}
</style>
```

### 2c. Word-by-word opacity wipe (scrubbed)

```js
// Inside onMounted
const split = new SplitText('.paragraph', { type: 'words' })

gsap.fromTo(split.words,
  { opacity: 0.15 },
  {
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: '.paragraph',
      start: 'top 70%',
      end: 'bottom 40%',
      scrub: true,
    },
  }
)
```

---

## 3. Image Parallax

### 3a. Basic vertical parallax

```vue
<template>
  <div ref="parallaxWrap" class="parallax-wrap">
    <img ref="parallaxImg" src="/images/bathroom-hero.jpg" alt="" class="parallax-img" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const parallaxWrap = ref(null)
const parallaxImg = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.to(parallaxImg.value, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: parallaxWrap.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.parallax-wrap {
  overflow: hidden;
  height: 70vh;
  position: relative;
}

.parallax-img {
  width: 100%;
  height: 130%;           /* extra height for parallax travel */
  object-fit: cover;
  will-change: transform;
}
</style>
```

### 3b. Multi-layer depth parallax

```js
// Inside onMounted -- different speeds create depth
const layers = [
  { selector: '.bg-layer',   speed: -30 },
  { selector: '.mid-layer',  speed: -15 },
  { selector: '.fg-layer',   speed: 0   },
]

layers.forEach(({ selector, speed }) => {
  gsap.to(selector, {
    yPercent: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
```

### 3c. Image scale-down reveal on scroll

```js
// Image starts scaled up and crops down as user scrolls
gsap.fromTo('.hero-image', {
  scale: 1.3,
  filter: 'brightness(0.6)',
}, {
  scale: 1,
  filter: 'brightness(1)',
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
})
```

---

## 4. Horizontal Scroll Sections

A hallmark of portfolio and architecture sites: turning vertical scroll into horizontal movement.

### 4a. Full horizontal scroll section

```vue
<template>
  <section ref="horizontalSection" class="horizontal-section">
    <div ref="horizontalTrack" class="horizontal-track">
      <div class="panel" v-for="(project, i) in projects" :key="i">
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Minimalist Suite', image: '/img/project-1.jpg' },
  { title: 'Marble Retreat',   image: '/img/project-2.jpg' },
  { title: 'Japandi Oasis',    image: '/img/project-3.jpg' },
  { title: 'Industrial Loft',  image: '/img/project-4.jpg' },
]

const horizontalSection = ref(null)
const horizontalTrack = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    const track = horizontalTrack.value
    const totalScroll = track.scrollWidth - window.innerWidth

    gsap.to(track, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalSection.value,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,  // recalculate on resize
        anticipatePin: 1,
      },
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.horizontal-section {
  overflow: hidden;
}

.horizontal-track {
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}

.panel {
  min-width: 80vw;
  height: 100vh;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.panel img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}
</style>
```

### 4b. Triggering animations INSIDE horizontal panels

```js
// Use containerAnimation to sync triggers with horizontal scroll
const horizontalTween = gsap.to(track, {
  x: () => -totalScroll,
  ease: 'none',
  scrollTrigger: {
    trigger: horizontalSection.value,
    start: 'top top',
    end: () => `+=${totalScroll}`,
    pin: true,
    scrub: 1,
  },
})

// Now animate elements inside panels relative to horizontal progress
gsap.from('.panel h3', {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.panel h3',
    containerAnimation: horizontalTween,   // key property
    start: 'left 80%',
    toggleActions: 'play none none none',
  },
})
```

---

## 5. Pinned Sections

### 5a. Pinned section with layered content

```vue
<template>
  <section ref="pinSection" class="pin-section">
    <div class="pin-content">
      <div class="pin-left">
        <h2>Design Philosophy</h2>
      </div>
      <div class="pin-right">
        <div class="step" v-for="(step, i) in steps" :key="i">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: 'Material Selection', text: 'Premium natural stone and ceramics.' },
  { title: 'Spatial Harmony',    text: 'Every centimetre considered.' },
  { title: 'Light Design',       text: 'Ambient, task, and accent layering.' },
]

const pinSection = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    // Pin the left column while right column scrolls
    ScrollTrigger.create({
      trigger: pinSection.value,
      start: 'top top',
      end: 'bottom bottom',
      pin: '.pin-left',
      pinSpacing: false,
    })

    // Fade in each step
    gsap.utils.toArray('.step').forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.pin-section {
  min-height: 300vh;
}

.pin-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.pin-left {
  height: 100vh;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
}

.step {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
```

### 5b. Full-screen section swap (stacking panels)

```js
// Each panel pins at top and gets "covered" by the next
const panels = gsap.utils.toArray('.stack-panel')

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
    end: i === panels.length - 1 ? 'bottom bottom' : 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // Scale down slightly as next panel covers it
  if (i < panels.length - 1) {
    gsap.to(panel, {
      scale: 0.92,
      filter: 'brightness(0.5)',
      scrollTrigger: {
        trigger: panels[i + 1],
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    })
  }
})
```

---

## 6. Staggered Grid Reveals

### 6a. Portfolio grid -- staggered fade-up

```vue
<template>
  <section ref="gridSection" class="grid-section">
    <div class="grid">
      <div class="grid-item" v-for="(item, i) in items" :key="i">
        <div class="grid-item__image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <h3>{{ item.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = Array.from({ length: 8 }, (_, i) => ({
  title: `Project ${i + 1}`,
  image: `/img/grid-${i + 1}.jpg`,
}))

const gridSection = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    const gridItems = gsap.utils.toArray('.grid-item')

    gsap.set(gridItems, {
      opacity: 0,
      y: 100,
      scale: 0.95,
    })

    ScrollTrigger.batch(gridItems, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          overwrite: true,
        })
      },
      start: 'top 90%',
      once: true,
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem;
}

.grid-item__image {
  overflow: hidden;
  aspect-ratio: 3/4;
}

.grid-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.grid-item:hover .grid-item__image img {
  transform: scale(1.05);
}
</style>
```

### 6b. Masonry-style alternating reveal

```js
// Odd items slide from left, even from right
const gridItems = gsap.utils.toArray('.masonry-item')

gridItems.forEach((item, i) => {
  const direction = i % 2 === 0 ? -60 : 60

  gsap.from(item, {
    x: direction,
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  })
})
```

### 6c. Image reveal with inner parallax

```js
// Wrapper clips, image parallaxes inside
gsap.utils.toArray('.grid-item__image').forEach((wrap) => {
  const img = wrap.querySelector('img')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top 90%',
      end: 'bottom 10%',
      scrub: true,
    },
  })

  tl.fromTo(wrap, {
    clipPath: 'inset(100% 0% 0% 0%)',
  }, {
    clipPath: 'inset(0% 0% 0% 0%)',
    duration: 1,
    ease: 'power2.inOut',
  })

  tl.fromTo(img, {
    scale: 1.4,
  }, {
    scale: 1,
    duration: 1,
    ease: 'none',
  }, 0)
})
```

---

## 7. Smooth Page Transitions

### 7a. Nuxt page transition with GSAP

```vue
<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        onBeforeEnter,
        onEnter,
        onBeforeLeave,
        onLeave,
        mode: 'out-in',
        css: false,
      }"
    />
  </NuxtLayout>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function onBeforeEnter(el) {
  gsap.set(el, { opacity: 0, y: 30 })
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    onComplete: () => {
      ScrollTrigger.refresh()
      done()
    },
  })
}

function onBeforeLeave(el) {
  // Kill all ScrollTriggers before leaving
  ScrollTrigger.getAll().forEach((st) => st.kill())
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: done,
  })
}
</script>
```

### 7b. Overlay wipe transition

```vue
<!-- components/PageTransition.vue -->
<template>
  <div ref="overlay" class="page-overlay">
    <span class="overlay-text">{{ transitionText }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const overlay = ref(null)
const transitionText = ref('')

function enter(text = '') {
  transitionText.value = text
  return gsap.timeline()
    .set(overlay.value, { display: 'flex' })
    .fromTo(overlay.value, {
      clipPath: 'inset(0 0 100% 0)',
    }, {
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.7,
      ease: 'power3.inOut',
    })
}

function leave() {
  return gsap.timeline()
    .to(overlay.value, {
      clipPath: 'inset(100% 0 0 0)',
      duration: 0.7,
      ease: 'power3.inOut',
    })
    .set(overlay.value, { display: 'none' })
}

defineExpose({ enter, leave })
</script>

<style scoped>
.page-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a0a0a;
  display: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
}
</style>
```

### 7c. Column-based wipe (multi-stripe)

```js
// Create N vertical stripes for a cinematic wipe
function createStripeTransition(container, stripeCount = 5) {
  const stripes = []

  for (let i = 0; i < stripeCount; i++) {
    const stripe = document.createElement('div')
    Object.assign(stripe.style, {
      position: 'fixed',
      top: '0',
      left: `${(100 / stripeCount) * i}%`,
      width: `${100 / stripeCount + 0.5}%`,
      height: '100%',
      background: '#0a0a0a',
      zIndex: '9999',
      transform: 'scaleY(0)',
      transformOrigin: 'top',
    })
    container.appendChild(stripe)
    stripes.push(stripe)
  }

  const tl = gsap.timeline({ paused: true })

  tl.to(stripes, {
    scaleY: 1,
    duration: 0.5,
    ease: 'power3.inOut',
    stagger: 0.06,
  })
  .to(stripes, {
    scaleY: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    stagger: 0.06,
    transformOrigin: 'bottom',
  }, '+=0.1')

  return tl
}
```

---

## 8. Magnetic Buttons

Seen on virtually every Awwwards-winning luxury site.

```vue
<template>
  <button
    ref="btnRef"
    class="magnetic-btn"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <span ref="btnText" class="magnetic-btn__text">
      <slot>Explore</slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const btnRef = ref(null)
const btnText = ref(null)

const strength = 0.35         // how far the button follows (0-1)
const textStrength = 0.5      // inner text follows more for depth

function onMouseMove(e) {
  const btn = btnRef.value
  const rect = btn.getBoundingClientRect()

  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  gsap.to(btn, {
    x: x * strength,
    y: y * strength,
    duration: 0.4,
    ease: 'power2.out',
  })

  gsap.to(btnText.value, {
    x: x * textStrength,
    y: y * textStrength,
    duration: 0.4,
    ease: 'power2.out',
  })
}

function onMouseLeave() {
  gsap.to(btnRef.value, {
    x: 0,
    y: 0,
    duration: 0.7,
    ease: 'elastic.out(1, 0.3)',
  })

  gsap.to(btnText.value, {
    x: 0,
    y: 0,
    duration: 0.7,
    ease: 'elastic.out(1, 0.3)',
  })
}
</script>

<style scoped>
.magnetic-btn {
  position: relative;
  padding: 1.25rem 3rem;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 100px;
  overflow: hidden;
  will-change: transform;
}

.magnetic-btn__text {
  display: inline-block;
  will-change: transform;
  pointer-events: none;
}
</style>
```

### Magnetic with hover fill

```js
// Add a background circle that expands on hover
function initMagneticFill(btn) {
  const circle = btn.querySelector('.btn-circle')

  btn.addEventListener('mouseenter', () => {
    gsap.to(circle, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  })

  btn.addEventListener('mouseleave', () => {
    gsap.to(circle, {
      scale: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  })
}
```

---

## 9. Custom Cursor Effects

### 9a. Cursor follower composable

```ts
// composables/useCursorFollower.ts
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

export function useCursorFollower() {
  const cursorRef = ref<HTMLElement | null>(null)
  const cursorDotRef = ref<HTMLElement | null>(null)
  const isHovering = ref(false)
  const cursorText = ref('')
  let xTo: gsap.QuickToFunc, yTo: gsap.QuickToFunc
  let xDotTo: gsap.QuickToFunc, yDotTo: gsap.QuickToFunc

  function onMouseMove(e: MouseEvent) {
    xTo(e.clientX)
    yTo(e.clientY)
    xDotTo(e.clientX)
    yDotTo(e.clientY)
  }

  onMounted(() => {
    if (!cursorRef.value || !cursorDotRef.value) return

    // quickTo creates highly optimized tweens for frequent updates
    xTo = gsap.quickTo(cursorRef.value, 'x', { duration: 0.5, ease: 'power3' })
    yTo = gsap.quickTo(cursorRef.value, 'y', { duration: 0.5, ease: 'power3' })
    xDotTo = gsap.quickTo(cursorDotRef.value, 'x', { duration: 0.1, ease: 'power3' })
    yDotTo = gsap.quickTo(cursorDotRef.value, 'y', { duration: 0.1, ease: 'power3' })

    window.addEventListener('mousemove', onMouseMove)

    // Auto-detect hover targets
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        isHovering.value = true
        cursorText.value = (el as HTMLElement).dataset.cursor || ''
        gsap.to(cursorRef.value, { scale: 2.5, duration: 0.3 })
      })
      el.addEventListener('mouseleave', () => {
        isHovering.value = false
        cursorText.value = ''
        gsap.to(cursorRef.value, { scale: 1, duration: 0.3 })
      })
    })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })

  return { cursorRef, cursorDotRef, isHovering, cursorText }
}
```

### 9b. Cursor component

```vue
<!-- components/CustomCursor.vue -->
<template>
  <div class="cursor-wrapper" v-if="!isTouchDevice">
    <div ref="cursorRef" class="cursor">
      <span class="cursor__text">{{ cursorText }}</span>
    </div>
    <div ref="cursorDotRef" class="cursor-dot" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCursorFollower } from '~/composables/useCursorFollower'

const { cursorRef, cursorDotRef, isHovering, cursorText } = useCursorFollower()

const isTouchDevice = computed(() =>
  typeof window !== 'undefined' && 'ontouchstart' in window
)
</script>

<style scoped>
.cursor {
  position: fixed;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.cursor__text {
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  white-space: nowrap;
}

.cursor-dot {
  position: fixed;
  top: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
  will-change: transform;
}
</style>
```

---

## 10. Blur-to-Sharp Transitions

Creates a cinematic "focus pull" effect as content enters the viewport.

### 10a. Text blur-in

```js
// Inside onMounted
gsap.utils.toArray('.blur-reveal').forEach((el) => {
  gsap.fromTo(el,
    {
      opacity: 0,
      filter: 'blur(20px)',
      y: 30,
    },
    {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
})
```

### 10b. Progressive blur clear on scrub (depth of field)

```js
// Content starts blurry and sharpens as it scrolls into the "focal zone"
gsap.utils.toArray('.dof-element').forEach((el) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'top 30%',
      scrub: true,
    },
  })

  tl.fromTo(el, {
    filter: 'blur(12px) saturate(0)',
    scale: 0.96,
    opacity: 0.3,
  }, {
    filter: 'blur(0px) saturate(1)',
    scale: 1,
    opacity: 1,
    ease: 'none',
  })
})
```

### 10c. Image rack focus (blur shift between layers)

```js
// Front element blurs as background sharpens, simulating camera rack focus
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.rack-focus-section',
    start: 'top top',
    end: '+=150%',
    pin: true,
    scrub: true,
  },
})

tl.to('.foreground-content', {
  filter: 'blur(10px)',
  opacity: 0.4,
  duration: 1,
}, 0)

tl.fromTo('.background-content', {
  filter: 'blur(10px)',
  opacity: 0.4,
}, {
  filter: 'blur(0px)',
  opacity: 1,
  duration: 1,
}, 0)
```

---

## 11. Clip-Path Reveals

### 11a. Circular reveal (spotlight effect)

```js
gsap.fromTo('.hero-reveal', {
  clipPath: 'circle(0% at 50% 50%)',
}, {
  clipPath: 'circle(75% at 50% 50%)',
  duration: 2,
  ease: 'power3.inOut',
  scrollTrigger: {
    trigger: '.hero-reveal',
    start: 'top 60%',
    end: 'top 10%',
    scrub: true,
  },
})
```

### 11b. Inset reveal (curtain open)

```js
// Content "opens" from center like curtains
gsap.fromTo('.curtain-reveal', {
  clipPath: 'inset(0 50% 0 50%)',
}, {
  clipPath: 'inset(0 0% 0 0%)',
  duration: 1.5,
  ease: 'power4.inOut',
  scrollTrigger: {
    trigger: '.curtain-reveal',
    start: 'top 70%',
    toggleActions: 'play none none none',
  },
})
```

### 11c. Diagonal wipe

```js
gsap.fromTo('.diagonal-reveal', {
  clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
}, {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  duration: 1.2,
  ease: 'power3.inOut',
  scrollTrigger: {
    trigger: '.diagonal-reveal',
    start: 'top 75%',
    toggleActions: 'play none none none',
  },
})
```

### 11d. Image reveal with wipe + scale

```vue
<template>
  <div class="reveal-wrap">
    <div ref="revealInner" class="reveal-inner">
      <img src="/images/bathroom-detail.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const revealInner = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    const inner = revealInner.value
    const img = inner.querySelector('img')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: inner,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(inner, {
      clipPath: 'inset(0 100% 0 0)',
    }, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power4.inOut',
    })

    tl.from(img, {
      scale: 1.5,
      duration: 1.4,
      ease: 'power2.out',
    }, 0.1)   // slight overlap
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.reveal-wrap {
  overflow: hidden;
}

.reveal-inner {
  will-change: clip-path;
}

.reveal-inner img {
  width: 100%;
  display: block;
  will-change: transform;
}
</style>
```

### 11e. Scroll-scrubbed polygon morph

```js
// Animate between arbitrary polygon shapes as user scrolls
gsap.fromTo('.morph-shape', {
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
}, {
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)',
  ease: 'none',
  scrollTrigger: {
    trigger: '.morph-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
})
```

---

## 12. Counter / Number Animations

### 12a. Basic counter

```vue
<template>
  <div ref="counterSection" class="counters">
    <div class="counter" v-for="(stat, i) in stats" :key="i">
      <span class="counter__number" :data-target="stat.value">0</span>
      <span class="counter__suffix">{{ stat.suffix }}</span>
      <p class="counter__label">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 18,  suffix: '',  label: 'Years Experience' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction' },
  { value: 45,  suffix: '',  label: 'Design Awards' },
]

const counterSection = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    const numbers = gsap.utils.toArray('.counter__number')

    numbers.forEach((el) => {
      const target = parseInt(el.dataset.target, 10)
      const obj = { value: 0 }

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.value).toLocaleString()
        },
      })
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.counters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3rem;
  text-align: center;
}

.counter__number {
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 200;
  font-variant-numeric: tabular-nums;
  display: inline;
}

.counter__suffix {
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 200;
}

.counter__label {
  margin-top: 0.5rem;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
}
</style>
```

### 12b. Decimal counter with formatting

```js
// For values like "4.7" or "99.9%"
function animateDecimalCounter(el, target, decimals = 1) {
  const obj = { value: 0 }

  gsap.to(obj, {
    value: target,
    duration: 2.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      el.textContent = obj.value.toFixed(decimals)
    },
  })
}
```

### 12c. Counter with scrub (progress-linked)

```js
// Number increments as user scrolls through the section
const obj = { value: 0 }

gsap.to(obj, {
  value: 2500000,
  ease: 'none',
  scrollTrigger: {
    trigger: '.revenue-section',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  },
  onUpdate: () => {
    document.querySelector('.revenue-number').textContent =
      new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(obj.value)
  },
})
```

---

## 13. Composable: useScrollAnimation

A reusable composable to reduce boilerplate across components.

```ts
// composables/useScrollAnimation.ts
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimationPreset = 'fade-up' | 'fade-in' | 'blur-in' | 'clip-reveal' | 'scale-up'

interface ScrollAnimationOptions {
  preset?: AnimationPreset
  trigger?: string | Ref<HTMLElement | null>
  start?: string
  end?: string
  scrub?: boolean | number
  stagger?: number
  duration?: number
  delay?: number
  once?: boolean
  markers?: boolean
}

const presets: Record<AnimationPreset, gsap.TweenVars> = {
  'fade-up': { opacity: 0, y: 60 },
  'fade-in': { opacity: 0 },
  'blur-in': { opacity: 0, filter: 'blur(16px)', y: 20 },
  'clip-reveal': { clipPath: 'inset(0 100% 0 0)' },
  'scale-up': { opacity: 0, scale: 0.9 },
}

export function useScrollAnimation(
  target: Ref<HTMLElement | null> | string,
  options: ScrollAnimationOptions = {}
) {
  let ctx: gsap.Context | null = null

  const {
    preset = 'fade-up',
    start = 'top 85%',
    end,
    scrub = false,
    stagger = 0,
    duration = 1,
    delay = 0,
    once = true,
    markers = false,
  } = options

  onMounted(() => {
    const triggerEl = typeof target === 'string'
      ? document.querySelector(target)
      : target.value

    if (!triggerEl) return

    ctx = gsap.context(() => {
      gsap.from(triggerEl, {
        ...presets[preset],
        duration,
        delay,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: triggerEl,
          start,
          end,
          scrub,
          once,
          markers,
          toggleActions: once
            ? 'play none none none'
            : 'play reverse play reverse',
        },
      })
    })
  })

  onUnmounted(() => ctx?.revert())
}
```

### Usage in components

```vue
<template>
  <div ref="el" class="feature-card">
    <h3>Premium Materials</h3>
    <p>Italian marble, German engineering.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const el = ref(null)

useScrollAnimation(el, {
  preset: 'blur-in',
  duration: 1.2,
  start: 'top 80%',
})
</script>
```

---

## 14. Performance & Cleanup Checklist

### Always clean up

```js
// Option 1: gsap.context (recommended for Vue/Nuxt)
let ctx
onMounted(() => {
  ctx = gsap.context(() => {
    // all animations here are auto-tracked
  }, containerRef.value)   // scope selectors to this element
})
onUnmounted(() => ctx?.revert())

// Option 2: manual kill
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((st) => st.kill())
})
```

### Performance tips

| Technique | Why |
|---|---|
| Use `will-change: transform` | Promotes element to compositor layer |
| Animate `transform` and `opacity` only | These skip layout/paint (GPU-composited) |
| Avoid animating `filter` on many elements | `blur()` is expensive; limit to key moments |
| Use `gsap.quickTo()` for mousemove | Reuses a single tween instead of creating new ones |
| Set `overwrite: true` on batch animations | Prevents tween pile-up |
| Use `once: true` on ScrollTrigger | Frees memory after animation completes |
| Use `invalidateOnRefresh: true` | Recalculates values on window resize |
| Call `ScrollTrigger.refresh()` after layout changes | Keeps trigger positions accurate |
| Use `gsap.context()` for scoping | Auto-reverts all child animations on cleanup |

### Reduced motion support

```js
// Respect user preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(10)   // near-instant
  // Or disable entirely:
  // ScrollTrigger.config({ autoRefreshEvents: 'DOMContentLoaded,load' })
}
```

### Nuxt-specific gotchas

1. **Never run GSAP outside `onMounted`** -- SSR will throw errors.
2. **Call `ScrollTrigger.refresh()`** after page transitions and layout shifts.
3. **Use `gsap.context()`** scoped to a container ref to avoid selecting elements in other components.
4. **Lazy-load heavy animations** with `defineAsyncComponent` for below-the-fold sections.
5. **Test with `markers: true`** during development to verify trigger positions.

---

## Sources & Further Reading

- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP SplitText Docs](https://gsap.com/docs/v3/Plugins/SplitText/)
- [Awwwards GSAP Websites](https://www.awwwards.com/websites/gsap/)
- [Codrops -- Sticky Grid Scroll](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/)
- [Codrops -- Scroll-Driven Dual-Wave Text](https://tympanus.net/codrops/2026/01/15/building-a-scroll-driven-dual-wave-text-animation-with-gsap/)
- [Codrops -- SplitText to MorphSVG Creative Demos](https://tympanus.net/codrops/2025/05/14/from-splittext-to-morphsvg-5-creative-demos-using-free-gsap-plugins/)
- [Setting up GSAP ScrollTrigger with Nuxt 3](https://dev.to/fitrakun/setting-up-gsaps-scrolltrigger-with-nuxt-3-3io)
- [GSAP in Nuxt 3/Vue 3 (Medium)](https://medium.com/@bakos.soda/crafting-insane-scroll-triggered-animations-with-gsap-in-nuxt3-vue3-34db557360e2)
- [Building Complex Animations in Nuxt with GSAP](https://masteringnuxt.com/blog/building-complex-animations-in-nuxt-with-gsap)
- [Cuberto Mouse Follower](https://github.com/Cuberto/mouse-follower)
- [FreeFrontend -- 57 ScrollTrigger Examples](https://freefrontend.com/scroll-trigger-js/)
- [Builder.io -- Buttery Scroll Reveal with GSAP](https://www.builder.io/blog/gsap-reveal)
- [@hypernym/nuxt-gsap module](https://www.npmjs.com/package/nuxt-gsap-module)
