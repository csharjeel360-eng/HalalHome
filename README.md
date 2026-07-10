# Halal Home Calculator

Next.js + Tailwind landing page for an Islamic home financing (Diminishing
Musharaka) calculator, built for the Pakistan market.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Images you need to add

Drop these three files into `/public/images/`. Use the prompts below with any
image generator (Midjourney, DALL·E, Ideogram, etc.) — dimensions are specified
for each so they fit their slot exactly.

### 1. `hero-bg.jpg` — Hero background (no text)
**Size: 1920 × 1080px (16:9), landscape**

> Wide-angle architectural photograph of a modern minimalist mosque courtyard
> at golden hour. Warm sunlight, a deep emerald-green dome partially visible
> in the background, geometric mashrabiya lattice shadows cast across a
> sand-colored stone floor. No people, no text, no logos. Calm, aspirational,
> photorealistic. Warm gold and deep teal tones throughout.

### 2. `how-it-works.jpg` — "How it works" section image
**Size: 1200 × 800px (3:2), landscape**

> Clean photograph of a modern Pakistani home's front entrance. Warm wooden
> door with a brass number plate, a potted plant beside the step, soft
> morning light, muted earthy tones, minimalist composition. No people, no
> text, no visible house numbers or addresses.

### 3. (Optional, for a future page) `family-trust.jpg`
**Size: 1000 × 1000px (square)**

> Simple, warm, minimal-line illustration of a small family standing in
> front of a modest house silhouette. A geometric Islamic lattice pattern
> subtly forms the roofline. Flat design, emerald and gold color palette,
> no text, no faces rendered in detail.

Until you add real images, the page will show a broken image icon in those
two spots — everything else (calculator, layout, colors, fonts) works as-is.

## What's inside

- `app/page.tsx` — assembles the landing page
- `components/Hero.tsx` — full-bleed background hero
- `components/HowItWorks.tsx` — plain-language explainer
- `components/Calculator.tsx` — the interactive calculator (client-side only,
  nothing is sent to a server)
- `components/FAQ.tsx` — SEO-friendly FAQ, expandable
- `components/Footer.tsx`

## Notes on the math

The calculator uses a standard reducing-balance formula, labeled with the
terms a Diminishing Musharaka structure actually uses (rent + ownership
buyout) instead of "interest." This mirrors how banks quote the monthly
figure in practice. It's an estimate — always confirm the exact number with
your bank.

## Deploying

Push this folder to GitHub, then import it on [vercel.com](https://vercel.com)
— zero configuration needed. Free tier is enough for a tool like this.
