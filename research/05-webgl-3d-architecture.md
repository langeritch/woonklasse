# WebGL & 3D Architecture Websites -- Awwwards Research (2025-2026)

Research into award-winning websites that use Three.js, WebGL, and advanced 3D effects for architecture and real estate visualization. Focus on techniques, tech stacks, performance strategies, and simplified alternatives.

---

## 1. Three.js Archiviz Experience -- Anderson Mancini

- **URL:** https://www.awwwards.com/sites/threejs-archiviz-experience
- **Live demo:** https://threejs-archviz.vercel.app/
- **Award:** Awwwards Honorable Mention
- **Category:** Architecture, Experimental, Real Estate

### What it does

An interactive architectural interior walkthrough rendered entirely in the browser. Users navigate a photorealistic apartment interior with real-time lighting customization, sunflare/lens flare effects, and post-processing. The 3D model was sourced and optimized in Blender, then loaded into Three.js via glTF.

### 3D Techniques

| Technique | Implementation |
|---|---|
| **Real-time global illumination** | Screen Space Global Illumination (SSGI) via custom TSL (Three Shading Language) shaders |
| **Post-processing chain** | Bloom, screen space reflections, tone mapping, color grading |
| **Sunlight/lens flare** | Custom GLSL sunflare shader simulating realistic sunlight through windows |
| **Fake glow material** | Custom GLSL material that avoids the performance cost of full-scene bloom by applying glow directly to specific meshes |
| **Environment mapping** | HDR environment maps for ambient lighting and reflections on surfaces |
| **Baked lighting** | Combination of baked lightmaps (from Blender) with real-time direct lighting for performance |

### Tech Stack

- **Renderer:** Three.js (WebGL 2, with WebGPU variant available)
- **Framework:** React Three Fiber (R3F) via @react-three/fiber
- **Post-processing:** @react-three/postprocessing (wrapping pmndrs/postprocessing)
- **3D pipeline:** Blender (modeling/UV/baking) -> glTF/GLB export -> Draco compression
- **Shading:** GLSL custom shaders + Three Shading Language (TSL) for WebGPU variant
- **Hosting:** Vercel

### Performance Notes

- Fake glow material is a deliberate performance choice: traditional bloom requires a full-screen post-processing pass that blurs the entire scene, while this approach renders glow per-mesh with a simple fragment shader.
- The 3D model was heavily optimized in Blender (merged geometries, decimation, texture atlasing).
- Draco compression on the glTF reduces geometry payload by approximately 90%.
- Total scene weight reported under 6MB for the WebGPU variant.

---

## 2. 3D WebGPU ArchiViz -- Anderson Mancini

- **URL:** https://www.awwwards.com/sites/3d-webgpu-archiviz
- **Award:** Awwwards Honorable Mention
- **Category:** Architecture, Web & Interactive, Real Estate

### What it does

A next-generation architectural visualization that pushes browser rendering toward native quality. The same apartment concept as the Three.js version but rebuilt for WebGPU, achieving higher fidelity post-processing and better frame rates on supported hardware -- all under 6MB total payload.

### 3D Techniques

| Technique | Implementation |
|---|---|
| **Screen Space Global Illumination (SSGI)** | Native WebGPU compute shader for real-time color bleeding and indirect light bounces |
| **Screen Space Reflections (SSR)** | Real-time reflections on floor/glass surfaces without cube maps |
| **Dynamic emissive lighting** | Light sources that cast colored light onto surrounding surfaces in real time |
| **Rich post-processing** | Bloom, SSAO (ambient occlusion), depth of field, vignette, color grading -- all via TSL |
| **PBR materials** | Physically based rendering with metalness/roughness workflow |

### Tech Stack

- **Renderer:** Three.js WebGPU renderer (via TSL -- Three Shading Language)
- **Framework:** React Three Fiber with WebGPU backend
- **3D pipeline:** Blender -> glTF -> Draco compression
- **Shading language:** TSL (replaces GLSL for WebGPU, compiles to WGSL)
- **Starter template:** github.com/ektogamat/r3f-webgpu-starter

### Performance Notes

- WebGPU provides lower driver overhead than WebGL, improving frame rates on the same hardware.
- SSGI via compute shaders is far more efficient than the screen-space tracing approach used in WebGL.
- Fallback to WebGL 2 is necessary for Safari and older browsers (WebGPU not yet universal).
- The under-6MB constraint was achieved through aggressive texture compression (Basis Universal / KTX2) and Draco geometry compression.

---

## 3. VILLA -- 3D Immersive Property

- **URL:** https://www.awwwards.com/sites/villa-3d-immersive-property
- **Award:** Awwwards Nominee
- **Category:** Architecture, Real Estate, XR

### What it does

An immersive 360-degree property walkthrough where users navigate through a luxury villa, exploring rooms, outdoor spaces, and amenities. The experience uses WebGL-based 3D rendering to create a virtual tour of the property, blending traditional real estate presentation with interactive 3D exploration.

### 3D Techniques

| Technique | Implementation |
|---|---|
| **360-degree panoramic navigation** | Equirectangular panorama images mapped onto sphere geometry with hotspot-based navigation |
| **3D model integration** | Architectural model walkthrough with camera path animation |
| **Environment transitions** | Smooth camera transitions between rooms/viewpoints with easing |
| **Lighting simulation** | Baked global illumination with real-time ambient adjustments |
| **Material rendering** | PBR materials for marble, glass, wood, and fabric surfaces |

### Tech Stack

- **Renderer:** Three.js / WebGL
- **3D models:** glTF/GLB format with Draco compression
- **Interaction:** Raycasting for hotspot detection, orbit controls for free-look
- **UI overlay:** HTML/CSS layered over the WebGL canvas

### Performance Notes

- Panoramic approaches (360-degree images) are far lighter than full 3D model rendering: a single equirectangular image is approximately 2-4MB versus 10-30MB for a detailed interior model.
- Progressive loading with low-resolution placeholder textures swapped for high-res on demand.
- Mobile devices receive lower-resolution panoramas and simplified post-processing.

---

## Cross-Cutting Performance Strategies

These optimization patterns appear across all three projects and are essential for any WebGL architecture project:

### Asset Pipeline

1. **Draco compression** -- Reduces mesh geometry by 90-95%. Essential for any glTF-based pipeline.
2. **Basis Universal / KTX2 textures** -- GPU-compressed textures that decompress on the GPU, reducing memory and bandwidth. Support all platforms via a single file.
3. **Texture atlasing** -- Combine multiple material textures into atlas sheets to reduce draw calls.
4. **glTF-Transform** -- CLI tool for optimizing glTF files (dedup, compress, resize textures, prune unused nodes).

### Runtime Optimization

1. **Level of Detail (LOD)** -- Swap to simplified meshes when camera is far away. Can improve frame rates by 30-40% in complex scenes.
2. **Frustum culling** -- Three.js enables this by default; do not disable it.
3. **Instanced rendering** -- For repeated geometry (tiles, railings, fixtures), use InstancedMesh instead of individual objects.
4. **Baked vs. real-time lighting** -- Bake ambient occlusion and indirect lighting in Blender; use real-time only for direct lights and highlights.

### Mobile / Low-End Fallbacks

1. **Device detection** -- Check `navigator.hardwareConcurrency`, GPU renderer string, and screen resolution.
2. **Pixel ratio capping** -- Limit `renderer.setPixelRatio()` to 1.5 on mobile (vs. native 2x/3x).
3. **Reduced post-processing** -- Disable bloom, SSAO, and SSR on mobile; keep only tone mapping.
4. **Static fallback** -- Serve pre-rendered images or video loops instead of live 3D on very low-end devices.

---

## Simplified Alternatives: 80% of the Effect Without Full WebGL

For projects where a full Three.js/WebGL setup is too heavy or complex, the following approaches can achieve most of the visual impact:

### Alternative 1: CSS 3D Transforms + Scroll Animation

**Best for:** Product showcases, room transitions, parallax depth effects.

```css
/* Perspective container for 3D depth */
.scene {
  perspective: 1200px;
  perspective-origin: 50% 50%;
}

/* Individual layers at different Z-depths */
.layer--back   { transform: translateZ(-200px) scale(1.4); }
.layer--middle { transform: translateZ(0); }
.layer--front  { transform: translateZ(100px) scale(0.8); }
```

- GPU-accelerated via compositor (no JavaScript needed for transforms).
- Combine with `scroll-timeline` or IntersectionObserver for scroll-driven 3D parallax.
- Works on all devices, zero library overhead.
- **Limitation:** Only flat planes in 3D space; no true mesh rendering.

### Alternative 2: Canvas 2D + Image Displacement

**Best for:** Image hover effects, liquid/ripple distortions, texture transitions.

```javascript
// Lightweight image displacement with Canvas 2D
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function displaceImage(imageData, mouseX, mouseY, radius, strength) {
  // Sample pixels and offset based on distance from mouse
  // Creates a "liquid glass" distortion effect
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dist = Math.hypot(x - mouseX, y - mouseY);
      if (dist < radius) {
        const offset = (1 - dist / radius) * strength;
        // Remap pixel from offset source position
      }
    }
  }
}
```

- No WebGL context needed; Canvas 2D is universally supported.
- Achieves 80% of the "interactive image distortion" effect seen on many Awwwards sites.
- For better performance, use OffscreenCanvas in a Web Worker.
- **Limitation:** No true 3D geometry, lighting, or PBR materials.

### Alternative 3: Pre-Rendered 3D with Sprite Sequences

**Best for:** 3D model viewers, product configurators, architectural walkthroughs.

- Render 36-72 frames of the 3D model rotating in Blender/Cinema 4D.
- Load as a sprite sheet or image sequence.
- Map scroll position or drag gesture to frame index.
- Total payload: 1-3MB for a smooth 360-degree rotation (vs. 6-30MB for live 3D).
- Example: Apple frequently uses this approach for product pages.
- **Limitation:** Fixed camera path; no free-form orbit or zoom.

### Alternative 4: Lightweight WebGL via OGL or Curtains.js

**Best for:** Image effects, shader transitions, background animations -- without Three.js overhead.

- **OGL** (~24KB minified): Minimal WebGL framework, no scene graph overhead. Ideal for a single full-screen shader effect (noise, grain, color displacement).
- **Curtains.js** (~30KB): Maps DOM images to WebGL planes with custom GLSL shaders. Perfect for image hover distortion, page transitions, and scroll-based displacement.
- Both are approximately 10x smaller than Three.js (~600KB) while covering the most common visual effects.
- **Limitation:** No built-in 3D model loading, physics, or complex scene management.

### Decision Matrix

| Requirement | CSS 3D | Canvas 2D | Sprite Seq. | OGL/Curtains | Three.js |
|---|---|---|---|---|---|
| Parallax depth layers | Yes | -- | -- | -- | Yes |
| Image distortion/hover | -- | Yes | -- | Yes | Yes |
| 3D model viewer | -- | -- | Partial | -- | Yes |
| Shader effects (noise, grain) | -- | -- | -- | Yes | Yes |
| Full interior walkthrough | -- | -- | Partial | -- | Yes |
| Mobile performance | Best | Good | Good | Good | Varies |
| Bundle size | 0 KB | 0 KB | 0 KB | ~25 KB | ~600 KB |
| Browser support | Universal | Universal | Universal | WebGL 1+ | WebGL 2+ |

---

## Key Takeaways for an Architecture/Interior Project

1. **Start with baked lighting.** Real-time GI is expensive and often unnecessary. Bake in Blender, add 1-2 real-time accent lights for interactivity.
2. **Draco + KTX2 are non-negotiable.** Without compression, even a simple room model will exceed 20MB.
3. **Budget 6MB maximum** for the total 3D payload (geometry + textures + shaders). This is the benchmark set by the Anderson Mancini archiviz projects.
4. **Use the fake glow material pattern.** Per-mesh glow shaders are dramatically cheaper than scene-wide bloom post-processing.
5. **Design a mobile fallback from the start.** Detect device capability and serve either reduced-quality 3D or pre-rendered image sequences.
6. **Consider Curtains.js or OGL** if you only need image distortion effects and shader backgrounds -- they deliver high visual impact at a fraction of the complexity and bundle size of Three.js.

---

## Sources

- [Awwwards -- Three.js Archiviz Experience](https://www.awwwards.com/sites/threejs-archiviz-experience)
- [Awwwards -- 3D WebGPU ArchiViz](https://www.awwwards.com/sites/3d-webgpu-archiviz)
- [Awwwards -- VILLA 3D Immersive Property](https://www.awwwards.com/sites/villa-3d-immersive-property)
- [Anderson Mancini (ektogamat) -- GitHub](https://github.com/ektogamat)
- [SSGI WebGPU Demo -- Anderson Mancini](https://ssgi-webgpu-demo.vercel.app/)
- [R3F WebGPU Starter -- GitHub](https://github.com/ektogamat/r3f-webgpu-starter)
- [Awwwards -- Best Three.js Websites](https://www.awwwards.com/websites/three-js/)
- [Awwwards -- Best WebGL Websites](https://www.awwwards.com/websites/webgl/)
- [Three.js Archviz Live Demo](https://threejs-archviz.vercel.app/)
- [glTF-Transform](https://gltf-transform.dev/)
