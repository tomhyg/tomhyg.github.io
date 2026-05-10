# Tom Huyghe — Design System

Personal portfolio brand system for **Tom Huyghe**, an Embedded Systems & Fullstack engineer based in Paris, France. The system is bilingual (FR / EN) and serves two distinct visitor audiences:

1. **MedTech / surgical robotics recruiters** — looking for evidence of C firmware mastery, ESP32-S3, clinical validation, IEC 62304 / ISO 14971 process literacy.
2. **Freelance clients** — looking for fast, shippable web product work in React / Vite / Node.js / Firebase, with AI integrations.

The portfolio must feel like the work of a "senior engineer who ships real products" — calm, technical, precise, but never cold or hacker-coded.

## Sources provided

| File | Role |
|---|---|
| `uploads/unnamed.png` | Tom's portrait, on a coral-orange gradient (576×576). Used in hero / about. → `assets/portrait.png` |
| `uploads/IMG_0344-0347.JPG` | Four abstract grainy "ripple / halftone" artworks. Used as project accent imagery and section break textures. → `assets/texture-{cyan,teal,violet,amber}.jpg` |

No codebase or Figma was provided. The visual system below is therefore **proposed from brief + photo + textures**, not extracted from existing production. Treat all of it as a v1 to iterate against.

## Index

```
README.md                 ← you are here
SKILL.md                  ← Agent-Skills entrypoint
colors_and_type.css       ← CSS custom properties (color, type, spacing, motion)
fonts/                    ← downloaded webfont files (currently empty — see Type below)
assets/                   ← portrait + 4 texture artworks
preview/                  ← design-system spec cards (rendered in the Design System tab)
ui_kits/portfolio/        ← portfolio website kit — index.html + JSX components
```

## Brand at a glance

- **Voice**: senior, plainspoken, French-rooted, no hype. "I build" not "I architect solutions for".
- **Tone**: technical credibility first, warmth second. No emoji. No "wizard" / "ninja" / "rockstar".
- **Palette**: deep ink near-black base · violet electric accent (`#7C5CFF`) · soft warm portrait foreground.
- **Type**: `Geist` (UI / display) + `Geist Mono` (technical labels, tags, code).
- **Motif**: grainy-halftone "signal" textures, used sparingly as project accents — a quiet nod to oscilloscopes / sensor data, not a brand pattern.

---

## Content fundamentals

The whole portfolio is bilingual. All copy is written EN-first then FR-mirror, and **the language toggle (FR / EN) lives in the top-right of the nav**. Defaults to browser locale.

### Voice

- **First person, restrained.** "I'm Tom" / "Je suis Tom". Never "we", never third person.
- **You-addressing the reader** for action lines: "If you're hiring for surgical robotics, here's what I bring." / "Si tu recrutes en robotique chirurgicale, voici ce que j'apporte." (`tu` for FR — direct, not stiff `vous`).
- **Show the work, don't sell it.** Numbers > adjectives. "50+ patients validated", "IEC 62304 Class B", "10ms control loop" beat "highly experienced".
- **Bilingual mirror, not bilingual blend.** Each page renders in one language at a time. No FR/EN slashes mid-sentence.

### Casing

- Section labels and tag chips: `UPPERCASE` with wide tracking (`0.08em`), set in mono.
- Headings: sentence case. "Embedded systems, end-to-end." — never Title Case.
- Body: sentence case. Standard punctuation, French quotes `« »` in FR copy.

### Tone examples (specific, copy-from)

| Surface | EN | FR |
|---|---|---|
| Hero kicker | `EMBEDDED · FULLSTACK · PARIS` | `EMBARQUÉ · FULLSTACK · PARIS` |
| Hero headline | "I build medical devices and the software around them." | « Je conçois des dispositifs médicaux et les logiciels qui les entourent. » |
| Hero subhead | "Freelance engineer working on regulated MedTech firmware and fullstack web products." | « Ingénieur freelance, je travaille sur du firmware MedTech régulé et des produits web fullstack. » |
| Project tag (mono) | `IEC 62304 · ESP32-S3 · AWS IoT` | (kept identical — these are technical specs) |
| CTA primary | "Get in touch" | « Me contacter » |
| CTA secondary | "Download CV" | « Télécharger CV » |
| Empty / "more" | "More on request." | « Sur demande. » |

### What we never write

- "Passionate", "synergy", "leverage", "unlock", "world-class", "cutting-edge".
- Emoji of any kind. No 🚀, no 💡, no checkmarks-as-emoji.
- "Hacker", "ninja", "wizard", "rockstar".
- Marketing exclamation points. Periods only.
- AI buzzword soup. "Gemini pipeline" is OK because it names a real tool; "AI-powered next-gen experience" is not.

### Numbers and units

- Always with their unit, no spacing in EN (`50ms`, `10kHz`), French-style space in FR (`50 ms`, `10 kHz`).
- Counts: `50+ patients`, `5 projects`, `3 years`. Plus sign for ranges that grow.
- Dates: `2024 — present` (em dash, both sides spaced) for ranges; `Mar 2024` in EN, `mars 2024` in FR.

---

## Visual foundations

### Colors

The system is **dark-first** — there is no light mode in v1. The portfolio is one dark surface, broken up by elevation, not by inversion.

- `--bg-0` `#07070B` — page base. Not pure black; a 4% blue-violet bias so the violet accent reads as part of the same family.
- `--bg-1` `#0E0E14` — card / section base, +1 elevation.
- `--bg-2` `#16161F` — input / inset, recessed.
- `--bg-3` `#1E1E29` — hover lift on cards.
- `--border` `#25252F` — 1px hairlines. Used everywhere — borders, not shadows, do most of the elevation work.
- `--border-strong` `#383844` — focus / active border.
- `--fg-1` `#F4F4F8` — primary text.
- `--fg-2` `#B4B4C0` — secondary text, body copy on dark.
- `--fg-3` `#6E6E7A` — tertiary, captions, mono labels.
- `--fg-4` `#42424E` — disabled / decorative grid lines.
- `--accent` `#7C5CFF` — violet electric. Used for one thing per view: a hero word, a hover, a focus ring. Never a fill on big surfaces.
- `--accent-soft` `#B794FF` — accent text on hover, gradient stop.
- `--accent-deep` `#5538DB` — pressed / shadow-tint.
- `--success` `#3FD18D` — clinical-validated badges.
- `--warn` `#FFB454` — "in progress" badges.

A warm **portrait coral** (`#FF8E6B`) and four **texture accents** (cyan, teal, violet, amber) live as imagery, not as UI tokens — they appear inside artwork crops, never as button fills.

### Typography

- **Display + UI**: `Geist` — geometric sans, technical neutrality, slightly tighter than Inter. Weights: 400 / 500 / 600 / 700.
- **Mono**: `Geist Mono` — for tag chips, project specs, code, section eyebrows.
- **Fallback stack**: `system-ui, -apple-system, "Segoe UI", sans-serif` / `ui-monospace, "SF Mono", Menlo, monospace`.

> ⚠️ **Substitution flag**: I have not been provided with the TTF/WOFF2 files for Geist. The `colors_and_type.css` references the [Vercel Geist Google Fonts mirror](https://fonts.google.com/specimen/Geist) via `<link>` import, which is the closest match. If you have the licensed Geist files, please drop them in `fonts/` and I'll switch to a self-hosted `@font-face` block.

#### Scale

| Token | Size / Line | Weight / Tracking | Use |
|---|---|---|---|
| `--t-display` | 80 / 88 | 600 / -0.02em | Hero headline only, desktop |
| `--t-display-sm` | 56 / 60 | 600 / -0.02em | Hero, mobile / section opener |
| `--t-h1` | 40 / 48 | 600 / -0.015em | Section title |
| `--t-h2` | 28 / 36 | 600 / -0.01em | Sub-section, project name |
| `--t-h3` | 20 / 28 | 500 / -0.005em | Card title |
| `--t-body` | 16 / 26 | 400 / 0 | Default body |
| `--t-body-sm` | 14 / 22 | 400 / 0 | Secondary body |
| `--t-caption` | 13 / 20 | 500 / 0 | Captions, meta |
| `--t-mono-eyebrow` | 12 / 16 | 500 / 0.08em UPPER | Section eyebrows, tags |
| `--t-mono-sm` | 12 / 18 | 400 / 0 | Code, tech tags inline |

### Spacing

8-pt base, with a 4-pt half-step.

`--s-1: 4` · `--s-2: 8` · `--s-3: 12` · `--s-4: 16` · `--s-5: 24` · `--s-6: 32` · `--s-7: 48` · `--s-8: 64` · `--s-9: 96` · `--s-10: 128`.

Section vertical rhythm is `--s-9` (96) on desktop, `--s-7` (48) on mobile.

### Backgrounds

- **No gradients on UI surfaces.** No bluish-purple gradient sweeps. The base is flat dark ink.
- **One full-bleed texture per project hero**, blended at `mix-blend-mode: screen` and `opacity: 0.18`, so the violet/cyan/amber grain appears as ambient color rather than a picture.
- **Global noise**: a static 1.5%-opacity SVG noise overlay on `<body>` pinned at `position: fixed`, to keep flat blacks from looking digitally flat. This is the most important "feel" detail — it makes the dark surface read as paper-grade, not screen-grade.
- **Section breaks**: hairline `1px solid var(--border)` rules, never shadows, never gradients.

### Animation

- **Easing**: `cubic-bezier(0.2, 0.7, 0.2, 1)` — confident, no bounce. Aliased as `--ease`.
- **Duration**: `--motion-fast: 120ms` (hover/focus), `--motion: 220ms` (UI transitions), `--motion-slow: 480ms` (entrances).
- **No bounces, no springs, no parallax.** This is an engineering portfolio — motion is functional, not decorative.
- **Entrance**: 12px upward translation + opacity 0 → 1, staggered 60ms between items in a list.
- **Reduced motion**: respect `prefers-reduced-motion` — disable entrance animations, keep hover state changes (still useful for affordance).

### States

- **Hover** (links, cards): `color` shifts to `--fg-1`, `border-color` to `--border-strong`, accent letters glow to `--accent-soft`. No translate, no shadow lift — only color and border.
- **Active / press**: `transform: translateY(1px)` for buttons. No squish.
- **Focus-visible**: `2px solid var(--accent)` ring, offset by `2px`, on every interactive element. The ring is the primary use of `--accent`.
- **Disabled**: opacity `0.4`, cursor `not-allowed`, no color change.

### Borders & radii

- All borders are **1px hairlines**. Never 2px outlines, never thick frames.
- Radii are restrained: `--r-1: 4px` (inputs, chips) · `--r-2: 8px` (buttons, small cards) · `--r-3: 12px` (project cards) · `--r-4: 20px` (hero canvas crop). Nothing larger; no fully-rounded "pill" buttons except for tag chips.
- **Cards** are defined by `border + bg-1`, not by shadow. Shadow is reserved for elevated overlays (menus, language popover) and uses `--shadow-1` (a soft cool-cast shadow, not warm).

### Shadows

- `--shadow-1: 0 4px 16px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset` — overlays.
- `--shadow-glow: 0 0 0 1px var(--accent), 0 0 24px rgba(124,92,255,0.3)` — used only on focused / featured elements (e.g. the active project card during keyboard nav).

### Transparency / blur

- **Only** on the sticky top nav: `background: rgba(7,7,11,0.72); backdrop-filter: blur(12px);`. Triggered only after scroll > 24px.
- Never on cards. Never on modals (we use solid `--bg-1` overlays).

### Imagery

- The portrait is rendered in a **20px-radius square**, with the original coral background preserved (do not desaturate). On dark, the warm coral pops naturally — that's intentional.
- The four texture artworks are project accents. Each project gets one, used as a 16:9 hero crop with screen-blend at low opacity. Pairing:
  - **PULSAR** (cardiac wearable) → `texture-cyan.jpg` (bluish, "signal" feel)
  - **BABYCAM** (vision / TFLite) → `texture-amber.jpg` (warm, "lens" feel)
  - **Brooklyn Intelligence** → `texture-violet.jpg` (matches accent)
  - **Les Biquettes** → `texture-teal.jpg` (cooler, more domestic)
  - **TheSleepGuard** (HRV) → `texture-amber.jpg` (warm again — sleep)
- All other imagery is either screenshots of real product (placeholder boxes for now) or omitted.

### Layout rules

- Max content width: **1240px**, gutter `--s-7` (48px).
- The nav is sticky-top; the language toggle is the rightmost item.
- Skills section is a **two-column split** at ≥960px — Embedded on the left, Web on the right, separated by a vertical hairline. Stacks below 960px.
- Project list is a single column on mobile, **2-up on tablet, asymmetric 60/40 staggered on desktop** (cards alternate weight to keep the eye moving without parallax).
- Footer is a single line: `© 2025 Tom Huyghe · Paris · LinkedIn · GitHub · Malt`.

---

## Iconography

- **No icon font.** No Material Icons, no Font Awesome.
- **Lucide**, via the React package on CDN, is the canonical icon set. Stroke-based, 1.5px weight, 20×20 default, 24×24 in nav. Rationale: matches the technical-but-elegant feel without being cartoony.
- **Brand marks** (LinkedIn, GitHub, Malt) are loaded as inline SVGs — not from Lucide, since simple-icons gives more accurate brand shape. Stored as files in `assets/icons/brand/` so they can be edited and re-colored.
- **Logos**: there is no Tom Huyghe wordmark / monogram yet — the navbar uses the literal text `Tom Huyghe` set in `Geist 600`, with a 4×4 violet square (the "cursor block") to its left as a bullet. **This is a placeholder logo treatment.** If you want a real mark, flag it and I'll explore.
- **No emoji.** Never. Even where another portfolio might use 🇫🇷 / 🇬🇧 for the language toggle, we use the text `FR` / `EN` instead.
- **No unicode glyphs as decoration** — no `→` arrows hand-typed in copy, no `★`. Arrows are Lucide `ArrowRight`.
- Icons inherit `currentColor` so they tint to whatever text color they sit beside. Default is `--fg-2`; on hover, parent shifts to `--fg-1` and the icon follows.

> ⚠️ **CDN substitution flag**: Lucide is loaded from `https://unpkg.com/lucide-react@latest`. If the portfolio is going to be deployed on a strict-CSP or offline host, swap to npm-installed Lucide and remove the CDN.

---

## Quick start (for a downstream agent)

1. `<link rel="stylesheet" href="colors_and_type.css">` at the top of any HTML file.
2. Use the variables. Don't hardcode hex.
3. Pull React + Babel via the pinned UMD links from the project guidance.
4. Compose using the components in `ui_kits/portfolio/` — `Nav`, `Hero`, `About`, `SkillsSplit`, `ProjectCard`, `Contact`, `Footer`.
5. Read each section's "What we never write" / "Tone examples" before drafting copy.
