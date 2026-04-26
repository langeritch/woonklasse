# Color Palette Reference -- Award-Winning Architecture & Interior Design Websites (2025-2026)

> Curated from Awwwards SOTD winners, Brandlic luxury palettes, and top-performing architecture/interior design websites. Each palette includes exact hex codes, Tailwind CSS configuration, mood classification, and usage guidance.

---

## Table of Contents

1. [Warm Luxury](#1-warm-luxury)
2. [Cold Minimal](#2-cold-minimal)
3. [Dark Premium](#3-dark-premium)
4. [Bold Colorful](#4-bold-colorful)
5. [Monochromatic](#5-monochromatic)
6. [Earth Tones](#6-earth-tones)
7. [Tailwind Full Config (All Palettes)](#tailwind-full-config-all-palettes)

---

## 1. Warm Luxury

### 1.1 Golden Hour Elite

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Background | Parchment      | `#FEF4D5` |         |
| Surface    | Soft Gold      | `#F1E49A` |         |
| Primary    | Burnished Gold | `#E6D17B` |         |
| Text       | Cocoa          | `#2C1810` |         |

**Mood:** Warm opulence, sunset glow, heritage luxury
**Seen on:** Luxury lifestyle and premium beverage brand sites (Brandlic 2025 selections)
**Best for:** Premium bathroom showrooms, high-end product pages, luxury brand landing pages, warm CTAs on light backgrounds
**When to use:** When the brand identity leans toward classic European luxury (think Fendi Casa, Hermès interiors). Works well for product photography backgrounds with warm-toned marble or brass fixtures.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'golden-hour': {
          parchment:  '#FEF4D5',
          soft:       '#F1E49A',
          burnished:  '#E6D17B',
          cocoa:      '#2C1810',
        },
      },
    },
  },
};
```

---

### 1.2 Rose Gold Romance

| Role       | Name         | Hex       | Preview |
|------------|--------------|-----------|---------|
| Primary    | Rose Gold    | `#B76E79` |         |
| Secondary  | Blush        | `#E8B4B8` |         |
| Surface    | Champagne    | `#F7E7CE` |         |
| Background | Pure White   | `#FFFFFF` |         |

**Mood:** Warm elegance, feminine sophistication, boutique luxury
**Seen on:** Boutique interior design portfolio sites, beauty and hospitality brands (Brandlic 2025)
**Best for:** Feminine-leaning bathroom design pages, spa-inspired interiors, boutique hotel showcases, soft luxury product displays
**When to use:** When targeting a clientele that values softness and warmth over stark minimalism. Pairs beautifully with rose marble, blush textiles, and copper fixtures in bathroom imagery.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          DEFAULT:    '#B76E79',
          blush:      '#E8B4B8',
          champagne:  '#F7E7CE',
          white:      '#FFFFFF',
        },
      },
    },
  },
};
```

---

### 1.3 Precious Metals

| Role       | Name       | Hex       | Preview |
|------------|------------|-----------|---------|
| Primary    | Rose Gold  | `#BD8C7D` |         |
| Secondary  | Soft Gold  | `#D1BFA7` |         |
| Tertiary   | Silver     | `#8E8E90` |         |
| Dark       | Onyx       | `#49494B` |         |

**Mood:** Warm metallics, refined material palette, understated wealth
**Seen on:** High-end interior design websites with metallic fixture photography (Hook Agency 2026 selections)
**Best for:** Bathroom faucet/fixture showcase pages, material selection tools, premium product configurators, luxury brand about pages
**When to use:** When the content revolves around physical materials -- metals, stone, ceramics. This palette mirrors the actual materials in premium bathrooms. Excellent for e-commerce or product detail pages.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'precious': {
          'rose-gold': '#BD8C7D',
          'soft-gold': '#D1BFA7',
          silver:      '#8E8E90',
          onyx:        '#49494B',
        },
      },
    },
  },
};
```

---

## 2. Cold Minimal

### 2.1 Arctic Luxury

| Role       | Name         | Hex       | Preview |
|------------|--------------|-----------|---------|
| Background | Ghost White  | `#F8F8FF` |         |
| Surface    | Lavender     | `#E6E6FA` |         |
| Accent     | Steel Blue   | `#B0C4DE` |         |
| Text       | Dark Teal    | `#2F4F4F` |         |

**Mood:** Icy purity, Scandinavian calm, clinical precision
**Seen on:** Minimalist skincare and wellness brands, Scandinavian design studios (Brandlic 2025)
**Best for:** Clean bathroom design portfolios, Scandinavian-style interiors, minimalist product pages, wellness and spa brands
**When to use:** When the design language is stripped back and serene. Works for bathrooms featuring white porcelain, light stone, and frameless glass. Ideal for brands positioning as "pure" or "essential."

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        arctic: {
          ghost:    '#F8F8FF',
          lavender: '#E6E6FA',
          steel:    '#B0C4DE',
          teal:     '#2F4F4F',
        },
      },
    },
  },
};
```

---

### 2.2 Platinum Prestige

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Midnight Blue | `#2C3E50` |         |
| Secondary  | Charcoal Blue | `#34495E` |         |
| Tertiary   | Silver Grey   | `#BDC3C7` |         |
| Background | Cloud         | `#ECF0F1` |         |

**Mood:** Cool sophistication, architectural precision, understated premium
**Seen on:** Architecture firm portfolios, automotive and tech-driven premium products (Brandlic 2025)
**Best for:** Architecture firm websites, technical product specifications, floor plan viewers, project case studies with a cold modern aesthetic
**When to use:** When the projects lean toward contemporary or industrial design with concrete, steel, and glass. Excellent for firms that want to communicate engineering precision alongside design sensibility.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        platinum: {
          midnight: '#2C3E50',
          charcoal: '#34495E',
          silver:   '#BDC3C7',
          cloud:    '#ECF0F1',
        },
      },
    },
  },
};
```

---

### 2.3 Rickman Mist (Awwwards SOTD)

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Warm Stone    | `#B4AEA7` |         |
| Background | Soft Grey     | `#F0F0F0` |         |
| Surface    | Cool White    | `#FAFAFA` |         |
| Text       | Deep Charcoal | `#1E293B` |         |

**Mood:** Quiet sophistication, neutral warmth, architectural restraint
**Seen on:** Rickman Architecture + Design (Awwwards SOTD, score 7.25)
**Best for:** Architecture portfolios that want warmth without color, project galleries where photography dominates, contact and about pages
**When to use:** When the imagery should do all the talking. This nearly colorless palette steps back and lets large-format photography of spaces define the emotional tone. The warm stone accent prevents it from feeling sterile.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'rickman': {
          stone:    '#B4AEA7',
          soft:     '#F0F0F0',
          white:    '#FAFAFA',
          charcoal: '#1E293B',
        },
      },
    },
  },
};
```

---

## 3. Dark Premium

### 3.1 Midnight Opulence

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Background | Deep Night     | `#1A1A2E` |         |
| Surface    | Navy           | `#16213E` |         |
| Secondary  | Royal Blue     | `#0F3460` |         |
| Accent     | Antique Gold   | `#EFC07B` |         |

**Mood:** Mysterious depth, nocturnal luxury, dramatic contrast
**Seen on:** Luxury finance, premium tech, and high-end architectural visualization sites (Brandlic 2025)
**Best for:** Dark-mode landing pages, luxury bathroom collections with dramatic lighting, nighttime architectural photography showcases, premium brand hero sections
**When to use:** When the brand wants to convey exclusivity and mystery. The gold accent on deep blue creates a jewelry-like contrast. Perfect for showcasing dark bathrooms with ambient lighting, black marble, and gold fixtures.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        midnight: {
          deep:   '#1A1A2E',
          navy:   '#16213E',
          royal:  '#0F3460',
          gold:   '#EFC07B',
        },
      },
    },
  },
};
```

---

### 3.2 Obsidian Elegance

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Background | True Black     | `#0C0C0C` |         |
| Surface    | Charcoal       | `#2C2C2C` |         |
| Secondary  | Graphite       | `#4A4A4A` |         |
| Accent     | Muted Gold     | `#BEA98E` |         |

**Mood:** Ultimate dark luxury, editorial sophistication, black-tie elegance
**Seen on:** Premium spirits, fashion houses, exclusive event platforms (Brandlic 2025)
**Best for:** Ultra-premium bathroom brand pages, dark-mode portfolio sites, exclusive collection launches, editorial-style project features
**When to use:** When the content demands maximum drama. This is the palette for brands that sell $10,000+ bathrooms. The muted gold is intentionally desaturated to avoid looking gaudy -- it reads as aged brass or brushed bronze rather than shiny gold.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        obsidian: {
          black:    '#0C0C0C',
          charcoal: '#2C2C2C',
          graphite: '#4A4A4A',
          gold:     '#BEA98E',
        },
      },
    },
  },
};
```

---

### 3.3 GKC Noir (Awwwards SOTD)

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Background | Dark Slate    | `#151F26` |         |
| Text       | Pure White    | `#FFFFFF` |         |
| Surface    | Charcoal      | `#1E2A33` |         |
| Accent     | Warm Copper   | `#C87941` |         |

**Mood:** Dramatic architectural dark mode, high-contrast portfolio
**Seen on:** GKC Architecture & Design (Awwwards SOTD, score 7.29)
**Best for:** Dark-mode architecture portfolios, dramatic project reveals, full-bleed photography layouts, moody bathroom design showcases
**When to use:** When you want the website itself to feel like walking into a dimly lit, beautifully designed space. The warm copper accent (added as a typical pairing for this tone) prevents the dark palette from feeling cold. Use for hero sections and immersive project walkthroughs.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'gkc': {
          slate:   '#151F26',
          white:   '#FFFFFF',
          surface: '#1E2A33',
          copper:  '#C87941',
        },
      },
    },
  },
};
```

---

## 4. Bold Colorful

### 4.1 Elite Contrast (Awwwards SOTD)

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Background | Off White     | `#F8F8F8` |         |
| Text       | Near Black    | `#222222` |         |
| Accent     | Vivid Orange  | `#FA5D29` |         |
| Secondary  | Sky Blue      | `#49B3FC` |         |

**Mood:** Bold, energetic, confident modernism
**Seen on:** Elite Interior Design (Awwwards SOTD)
**Best for:** Bold CTA buttons, interactive elements, design studio homepages that want to stand out, renovation service landing pages
**When to use:** When the brand is young, energetic, and wants to break from the typical muted interior design aesthetic. The vivid orange works as a powerful call-to-action color against the neutral base. Use sparingly -- this is an accent palette, not a full-surface palette.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        elite: {
          off:    '#F8F8F8',
          dark:   '#222222',
          orange: '#FA5D29',
          sky:    '#49B3FC',
        },
      },
    },
  },
};
```

---

### 4.2 Royal Burgundy

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Deep Wine     | `#722F37` |         |
| Secondary  | Crimson       | `#8B1538` |         |
| Tertiary   | Sienna        | `#A0522D` |         |
| Background | Beige         | `#F5F5DC` |         |

**Mood:** Rich, warm drama, heritage hospitality
**Seen on:** Luxury hospitality, fine dining, and classic brand websites (Brandlic 2025)
**Best for:** Warm dramatic interiors, heritage-style bathroom collections, hospitality brand pages, rich editorial layouts
**When to use:** When the interior style is traditional luxury -- think Victorian-inspired bathrooms, clawfoot tubs, rich velvet textures. The burgundy-to-sienna range creates depth without needing multiple color families. The beige background keeps it grounded and readable.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        burgundy: {
          wine:    '#722F37',
          crimson: '#8B1538',
          sienna:  '#A0522D',
          beige:   '#F5F5DC',
        },
      },
    },
  },
};
```

---

## 5. Monochromatic

### 5.1 Studio Dado Warmth (Awwwards SOTD)

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Background | Pure White     | `#FFFFFF` |         |
| Accent     | Warm Umber     | `#5D5346` |         |
| Surface    | Light Cream    | `#F5F3EF` |         |
| Text       | Deep Brown     | `#3A342D` |         |

**Mood:** Warm monochrome, artisan craft, quiet confidence
**Seen on:** Studio Dado (Awwwards SOTD, score 7.46)
**Best for:** Portfolio-first architecture sites, minimalist project galleries, typography-driven layouts, about pages and studio profiles
**When to use:** When the work speaks for itself and the website should be invisible. The warm umber prevents it from feeling like a generic white-on-white template. This is the palette for firms that believe "good design is as little design as possible."

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'studio-dado': {
          white:  '#FFFFFF',
          umber:  '#5D5346',
          cream:  '#F5F3EF',
          brown:  '#3A342D',
        },
      },
    },
  },
};
```

---

### 5.2 Andrea Diego Cool Mono (Awwwards SOTD)

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Background | Ink            | `#1A1A1E` |         |
| Surface    | Soft Lavender  | `#D8D9E3` |         |
| Text Light | Cloud Grey     | `#E8E8ED` |         |
| Text Dark  | Deep Graphite  | `#121215` |         |

**Mood:** Cool monochrome, editorial precision, gallery-like refinement
**Seen on:** Andrea Diego (Awwwards SOTD, score 7.36)
**Best for:** Dark monochrome portfolios, editorial project features, designer personal sites, minimalist luxury presentations
**When to use:** When the portfolio features predominantly cool-toned photography (concrete, steel, glass). The slight lavender shift in the light tones adds just enough warmth to prevent the palette from feeling purely industrial. Excellent for scroll-based project narratives.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'andrea-diego': {
          ink:       '#1A1A1E',
          lavender:  '#D8D9E3',
          cloud:     '#E8E8ED',
          graphite:  '#121215',
        },
      },
    },
  },
};
```

---

### 5.3 Charcoal Minimal

| Role       | Name           | Hex       | Preview |
|------------|----------------|-----------|---------|
| Text       | Soft Black     | `#212121` |         |
| Secondary  | Charcoal       | `#36454F` |         |
| Surface    | Warm White     | `#F2F2F2` |         |
| Border     | Light Grey     | `#D3D3D3` |         |

**Mood:** Clean, professional, typographic focus
**Seen on:** Minimalist architecture and design studio websites (Enveos 2025 selections)
**Best for:** Clean corporate architecture sites, project listings, blog layouts, technical documentation pages
**When to use:** The safest palette on this list. When unsure, start here. It works with virtually any photography style and any interior design aesthetic. The charcoal secondary adds just enough depth for hover states and secondary navigation without introducing color.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'charcoal-min': {
          black:  '#212121',
          char:   '#36454F',
          warm:   '#F2F2F2',
          border: '#D3D3D3',
        },
      },
    },
  },
};
```

---

## 6. Earth Tones

### 6.1 Emerald Sophistication

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Deep Emerald  | `#0D4C3C` |         |
| Secondary  | Forest        | `#2D5A4A` |         |
| Tertiary   | Sage          | `#7BA05B` |         |
| Background | Natural Linen | `#F4F1EB` |         |

**Mood:** Natural luxury, botanical calm, sustainable premium
**Seen on:** Eco-luxury resorts, wellness brands, sustainable premium interiors (Brandlic 2025)
**Best for:** Nature-inspired bathroom collections, sustainable/eco-friendly brand pages, wellness spa interiors, biophilic design showcases
**When to use:** When the bathroom design features natural stone, live plants, wood, or any biophilic design elements. The deep emerald primary conveys luxury while the sage tertiary connects to nature. The linen background feels organic rather than digital. Reflects the 2026 trend toward sage and moss green (Benjamin Moore, Behr Hidden Gem).

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        emerald: {
          deep:   '#0D4C3C',
          forest: '#2D5A4A',
          sage:   '#7BA05B',
          linen:  '#F4F1EB',
        },
      },
    },
  },
};
```

---

### 6.2 Autumn Harvest

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Burnt Orange  | `#B45309` |         |
| Secondary  | Umber Brown   | `#92400E` |         |
| Accent     | Harvest Gold  | `#EAB308` |         |
| Background | Pale Wheat    | `#FEF3C7` |         |
| Text       | Espresso      | `#451A03` |         |

**Mood:** Warm earthen richness, autumnal comfort, artisan craft
**Seen on:** Organic and handmade product sites, warm interior showcases (MyPaletteTool 2025)
**Best for:** Warm-toned bathroom interiors with terracotta or clay elements, rustic-modern design showcases, artisan material pages, renovation before/after galleries
**When to use:** When the design features terracotta tiles, warm wood, clay plaster, or copper fixtures. This palette directly mirrors the 2025-2026 architectural trend toward earth tones identified by ArchDaily. Avoid for cold-toned or ultra-modern interiors.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        harvest: {
          orange:  '#B45309',
          umber:   '#92400E',
          gold:    '#EAB308',
          wheat:   '#FEF3C7',
          espresso:'#451A03',
        },
      },
    },
  },
};
```

---

### 6.3 Slate & Teal

| Role       | Name          | Hex       | Preview |
|------------|---------------|-----------|---------|
| Primary    | Slate         | `#475569` |         |
| Secondary  | Teal          | `#0D9488` |         |
| Accent     | Amber         | `#F59E0B` |         |
| Background | Light Slate   | `#F1F5F9` |         |
| Text       | Dark Slate    | `#1E293B` |         |

**Mood:** Sophisticated contemporary, professional yet approachable
**Seen on:** Architecture firms, engineering practices, design consultancies (MyPaletteTool 2025 -- explicitly tagged "best for architecture")
**Best for:** Architecture firm main websites, bathroom design service pages, project portfolio grids, team and contact pages with a professional edge
**When to use:** The most "professional services" palette in this collection. When the website needs to convey both creative ability and business credibility. The teal adds enough color to avoid blandness while the amber accent drives attention to CTAs without feeling aggressive.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'slate-teal': {
          slate:     '#475569',
          teal:      '#0D9488',
          amber:     '#F59E0B',
          light:     '#F1F5F9',
          dark:      '#1E293B',
        },
      },
    },
  },
};
```

---

## Tailwind Full Config (All Palettes)

A single configuration block extending Tailwind with every palette from this document:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // ── WARM LUXURY ──────────────────────────────────
        'golden-hour': {
          parchment:  '#FEF4D5',
          soft:       '#F1E49A',
          burnished:  '#E6D17B',
          cocoa:      '#2C1810',
        },
        'rose-gold': {
          DEFAULT:    '#B76E79',
          blush:      '#E8B4B8',
          champagne:  '#F7E7CE',
          white:      '#FFFFFF',
        },
        precious: {
          'rose-gold': '#BD8C7D',
          'soft-gold': '#D1BFA7',
          silver:      '#8E8E90',
          onyx:        '#49494B',
        },

        // ── COLD MINIMAL ─────────────────────────────────
        arctic: {
          ghost:    '#F8F8FF',
          lavender: '#E6E6FA',
          steel:    '#B0C4DE',
          teal:     '#2F4F4F',
        },
        platinum: {
          midnight: '#2C3E50',
          charcoal: '#34495E',
          silver:   '#BDC3C7',
          cloud:    '#ECF0F1',
        },
        rickman: {
          stone:    '#B4AEA7',
          soft:     '#F0F0F0',
          white:    '#FAFAFA',
          charcoal: '#1E293B',
        },

        // ── DARK PREMIUM ─────────────────────────────────
        midnight: {
          deep:   '#1A1A2E',
          navy:   '#16213E',
          royal:  '#0F3460',
          gold:   '#EFC07B',
        },
        obsidian: {
          black:    '#0C0C0C',
          charcoal: '#2C2C2C',
          graphite: '#4A4A4A',
          gold:     '#BEA98E',
        },
        gkc: {
          slate:   '#151F26',
          white:   '#FFFFFF',
          surface: '#1E2A33',
          copper:  '#C87941',
        },

        // ── BOLD COLORFUL ────────────────────────────────
        elite: {
          off:    '#F8F8F8',
          dark:   '#222222',
          orange: '#FA5D29',
          sky:    '#49B3FC',
        },
        burgundy: {
          wine:    '#722F37',
          crimson: '#8B1538',
          sienna:  '#A0522D',
          beige:   '#F5F5DC',
        },

        // ── MONOCHROMATIC ────────────────────────────────
        'studio-dado': {
          white: '#FFFFFF',
          umber: '#5D5346',
          cream: '#F5F3EF',
          brown: '#3A342D',
        },
        'andrea-diego': {
          ink:      '#1A1A1E',
          lavender: '#D8D9E3',
          cloud:    '#E8E8ED',
          graphite: '#121215',
        },
        'charcoal-min': {
          black:  '#212121',
          char:   '#36454F',
          warm:   '#F2F2F2',
          border: '#D3D3D3',
        },

        // ── EARTH TONES ──────────────────────────────────
        emerald: {
          deep:   '#0D4C3C',
          forest: '#2D5A4A',
          sage:   '#7BA05B',
          linen:  '#F4F1EB',
        },
        harvest: {
          orange:   '#B45309',
          umber:    '#92400E',
          gold:     '#EAB308',
          wheat:    '#FEF3C7',
          espresso: '#451A03',
        },
        'slate-teal': {
          slate: '#475569',
          teal:  '#0D9488',
          amber: '#F59E0B',
          light: '#F1F5F9',
          dark:  '#1E293B',
        },
      },
    },
  },
};
```

---

## Quick Reference: Palette Selection Guide

| Scenario                                    | Recommended Palette        | Mood Category   |
|---------------------------------------------|----------------------------|-----------------|
| Luxury bathroom brand, warm tones           | Golden Hour Elite          | Warm Luxury     |
| Spa / wellness interior showcase            | Rose Gold Romance          | Warm Luxury     |
| Fixture/material product pages              | Precious Metals            | Warm Luxury     |
| Scandinavian minimal bathroom               | Arctic Luxury              | Cold Minimal    |
| Architecture firm corporate site            | Platinum Prestige          | Cold Minimal    |
| Photography-led portfolio                   | Rickman Mist               | Cold Minimal    |
| Dark-mode luxury landing page               | Midnight Opulence          | Dark Premium    |
| Ultra-premium brand (dark editorial)        | Obsidian Elegance          | Dark Premium    |
| Dark architecture portfolio                 | GKC Noir                   | Dark Premium    |
| Bold design studio homepage                 | Elite Contrast             | Bold Colorful   |
| Heritage / traditional luxury interiors     | Royal Burgundy             | Bold Colorful   |
| Warm monochrome portfolio                   | Studio Dado Warmth         | Monochromatic   |
| Cool monochrome editorial                   | Andrea Diego Cool Mono     | Monochromatic   |
| Safe default / corporate clean              | Charcoal Minimal           | Monochromatic   |
| Biophilic / eco-luxury interiors            | Emerald Sophistication     | Earth Tones     |
| Terracotta / rustic modern bathroom         | Autumn Harvest             | Earth Tones     |
| Professional architecture services          | Slate & Teal               | Earth Tones     |

---

## 2025-2026 Color Trend Notes

Key trends observed across award-winning architecture and interior design websites:

- **Benjamin Moore Silhouette (AF-655):** A dark tone bridging warm and cool, reflecting the move toward tonal depth in luxury interiors.
- **Pantone Cloud Dancer (11-4201):** Soft white as a foundation of clarity -- the 2026 Color of the Year signals a return to restrained backgrounds.
- **Behr Hidden Gem:** Smoky jade combining green and blue undertones, aligning with the emerald/sage trend in premium interiors.
- **Graham & Brown Divine Damson:** Deep damson with mulberry and garnet undertones, validating the burgundy/wine direction for warm bold palettes.
- **Earth tones remain dominant:** Terracotta, clay, burnt sienna, and warm browns continue from 2025 into 2026 as the primary palette for interiors that feel grounded and lived-in.
- **Dark mode maturation:** Dark websites have moved beyond pure black (#000) toward nuanced dark slates (#151F26, #1A1A2E) with warm metallic accents replacing stark white text.
- **Gold desaturation:** The trend is toward muted, brushed golds (#BEA98E, #EFC07B) rather than bright metallics, reflecting real-world preferences for brushed brass and aged bronze fixtures.

---

*Sources: Awwwards SOTD winners (Elite Interior Design, Telha Clarke, Studio Dado, GKC Architecture, Andrea Diego, Rickman Architecture, dhk Architects), Brandlic Studio luxury palette research 2025, Hook Agency color schemes 2026, MyPaletteTool architecture palettes, Enveos design trends 2025, ArchDaily color trends 2025-2026.*
