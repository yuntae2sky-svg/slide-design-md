# ZHRAS — Slide Design System

> Technical aqua — clean white content slides with Aqua / Deep Ocean brand slides, for a recirculating aquaculture (RAS) equipment maker. Credible, precise, water-clear.

---

## 1. Overview

- **Style**: Technical BtoB, water-clear
- **Mood**: Precise, calm, engineered (not playful)
- **Audience**: Aquaculture operators, EPC/trading partners, investors, overseas buyers (English-first; Korean/Chinese supported)
- **Aspect Ratio**: 16:9 (13.33in x 7.5in, 1920 x 1080 px @144 ppi)

### Design Philosophy

White, quiet content slides carry the data; the brand color (Aqua `#2A93AE`) is reserved for the cover, closing and one top accent line per slide. The hexagon from the emblem is the only decorative motif. Numbers and labels use a monospaced "instrument" face; headings stay plain and readable. Color is a signal (status, delta, section), never decoration.

---

## 2. Color Palette

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | white | `#FFFFFF` | Content slide background (default) |
| Background Alt | foam | `#F2FAFC` | Alternate rows, aside panels |
| Brand Background | aqua | `#2A93AE` | Cover, closing, brand slides (white text only for large text) |
| Dark Background | deepOcean | `#0B3F57` | Section dividers, dark slides, table headers |
| Primary Text | deepOcean | `#0B3F57` | Titles, headings (11.27:1 on white) |
| Body Text | body | `#1E3A47` | Body copy, table cells (11.99:1 on white) |
| Muted Text | muted | `#4B6B79` | Captions, page numbers, notes (5.71:1 on white) |
| Accent (text) | aquaDeep | `#136F8A` | Section labels, links, small accent text (5.72:1 on white) |
| Accent (graphic) | aqua | `#2A93AE` | Top bar, charts, icons, large shapes (3.57:1 — never small text) |
| Highlight on dark | ice | `#8FE3F0` | Small accent text on Deep Ocean only (7.74:1) |
| Accent Light | aquaTint | `#E8F4F8` | Accent area background (Deep Ocean text 10.05:1) |
| Border | border | `#D5E2E7` | Card borders, table rules, dividers |

### Semantic Colors (status)

| Role | Name | Hex | BG Hex | Usage |
|------|------|-----|--------|-------|
| Positive | green | `#17703F` | `#E6F4EC` | Normal, within range, completed (6.13:1 on white) |
| Warning | amber | `#A85A00` | `#FFF4E6` | Watch, approaching limit (5.09:1 on white) |
| Negative | red | `#C62828` | `#FDECEC` | Alarm, out of range, risk (5.62:1 on white) |

### Color Rules

- Content slides: white background, one Aqua top bar (h 0.07in, full width). No other colored fills except table headers, KPI card top rules and status pills.
- Aqua `#2A93AE` is a **graphic** color. Text on Aqua must be white and **large (≥ 18pt)**; small text goes on white (Aqua Deep) or Deep Ocean (white/Ice).
- White text on Aqua is 3.57:1 — below AA for small text. If a slide needs small text on a brand-colored background, use Aqua Deep `#136F8A` (5.72:1) or Deep Ocean `#0B3F57` instead.
- Status colors are only for status/delta values, always paired with a text label or sign (never color alone).
- Charts: series order Aqua `#2A93AE` → Deep Ocean `#0B3F57` → Slate `#4B6B79` → Light Aqua `#7CC9DB` (4th series, fills/bars only, direct labels). Prefer ≤ 3 series; label lines directly instead of using a legend.
- No gradients on slide backgrounds. (The emblem's own gradient is part of the logo, not a slide effect.)

---

## 3. Typography

All fonts are open-licensed (SIL OFL, Google Fonts). Install them, or use the fallback.

| Role | Font | Fallback |
|------|------|----------|
| Wordmark / cover display (Latin caps only) | Michroma | Arial (caps, +10% tracking) |
| Headings & body (Latin) | Inter | Calibri / Segoe UI |
| Headings & body (Korean) | Noto Sans KR | Malgun Gothic |
| Headings & body (Chinese) | Noto Sans SC | Microsoft YaHei |
| Labels, numbers, tags (Latin/digits) | Share Tech Mono | Consolas |

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Cover Title | Michroma (Latin caps) or Inter / Noto Sans KR | 40pt | Regular / Bold | white (on Aqua/Deep) |
| Slide Title | Inter / Noto Sans KR | 28pt | Bold | deepOcean |
| Section Label (above title) | Share Tech Mono | 11pt, caps, tracking +12% | Regular | aquaDeep |
| Subtitle | Inter / Noto Sans KR | 14pt | Regular | muted |
| Section Heading | Inter / Noto Sans KR | 16pt | SemiBold | deepOcean |
| Body | Inter / Noto Sans KR | 14pt | Regular | body |
| Table Header | Inter / Noto Sans KR | 12pt | SemiBold | white (on deepOcean) |
| Table Cell | Inter / Noto Sans KR | 12pt | Regular | body |
| KPI Number | Share Tech Mono | 44pt | Regular | deepOcean (status color only for deltas) |
| KPI Unit / Delta | Share Tech Mono | 14pt | Regular | muted / status color |
| Caption / Note | Inter / Noto Sans KR | 10pt | Regular | muted |
| Page Number | Share Tech Mono | 10pt | Regular | muted |

### Typography Rules

- Michroma has no Hangul or Hanzi and is very wide: use it only for short Latin uppercase text (cover title, the logo). Never for body or long titles.
- Body never goes below 12pt; captions never below 10pt.
- Tags and tagline-style labels: Share Tech Mono, uppercase, tracking +12% (same treatment as the logo tagline `SMART RAS EQUIPMENT EXPERT`).
- Numerals in tables/KPIs are monospaced for column alignment; right-align numbers.
- Bold is for titles and key figures only; no italics, no underlines except links.

---

## 4. Layout Grid

### Slide Dimensions

- **Width**: 13.33in / 33.87cm (1920 px)
- **Height**: 7.5in / 19.05cm (1080 px)

### Margins & Zones

```
┌──────────────────────────────────────────────┐
│ Aqua top bar (content slides)    h: 0.07in   │
├──────────────────────────────────────────────┤
│  margin-left: 0.7in      Section label       │
│                          Title (28pt)        │
│  ┌─ Content Zone ─────────────────────────┐  │
│  │  x 0.7in → 12.63in, y 1.75in → 6.75in  │  │
│  └────────────────────────────────────────┘  │
│                          margin-right: 0.7in │
├──────────────────────────────────────────────┤
│ Footer (y 6.95in): emblem 0.32in  ·  page #  │
└──────────────────────────────────────────────┘
```

### Spacing Rules

- Section label → title: 0.08in; title → content: 0.35in.
- Card internal padding: 0.25in; gap between cards: 0.25in.
- Minimum element spacing: 0.15in.
- 12-column grid inside the content zone, 0.25in gutters.
- Logo clear space: **Z-height** of the wordmark on every side (see Logo Usage).

### Logo Usage

Logo files (repo root): `assets/zhras-logo/png/` (high-resolution PNG) and `assets/zhras-logo/svg/` (vector). Names: `zhras-{emblem|logo-horizontal|logo-vertical}-{color|white|aqua}` — **color** = two-tone for light backgrounds, **white** = transparent white for Aqua / Deep Ocean backgrounds, **aqua** = with its own Aqua background.

| Situation | File |
|-----------|------|
| Cover / closing on Aqua `#2A93AE` | `zhras-logo-horizontal-white` or `zhras-logo-vertical-white` (transparent, white) |
| Dark (Deep Ocean) slides | `zhras-*-white` |
| White / light slide, large placement | `zhras-logo-horizontal-color` or `zhras-logo-vertical-color` |
| Footer (every content slide) | `zhras-emblem-color`, height 0.32in (≥ 24 px) |
| Small marks, favicons, avatars | `zhras-emblem-color` or `zhras-emblem-white` |

- Minimum size (the tagline must stay ≥ 6pt, the vertical slogan ≥ 8pt):
  - **On a 13.33in slide (or any projected/printed page): horizontal lockup ≥ 4.0in wide, vertical lockup ≥ 3.5in wide.**
  - Screen at 1:1 pixels (web, app): horizontal ≥ 400 px, vertical ≥ 260 px.
  - Print: horizontal ≥ 100 mm, vertical ≥ 70 mm.
  - Emblem alone: ≥ 24 px on screen, ≥ 8 mm in print (0.32in footer emblem on a slide is fine).
  - Below these sizes use the emblem alone, not a shrunken lockup.
- `zhras-*-aqua` logos carry their own Aqua rectangle: use them as a self-contained panel, never on another background.
- Never recolor, restretch, rotate, outline, add shadows/glows, or place a `color` logo on a dark or busy background. Never retype the wordmark in a font.

---

## 5. Slide Types

### Cover Slide

- Full-bleed Aqua `#2A93AE`. Logo: `zhras-logo-horizontal-white`, top-left (x 0.7in, y 0.65in, width 4.5in; never below 4.0in).
- Title: 40pt white, left-aligned, y ≈ 3.2in, max width 8in. Subtitle 18pt white at 90% (large text only). Date/author in Share Tech Mono 12pt white.
- Decoration: one oversized hexagon **outline** (the emblem's shape), white at 10% opacity, stroke 3pt, cropped by the right/bottom edge. No other graphics.

### Section Divider

- Full-bleed Deep Ocean `#0B3F57`. Section number in Share Tech Mono 96pt Ice `#8FE3F0`; title 36pt white; one-line description 16pt white at 85%.
- Emblem (`zhras-emblem-white`, 0.5in) bottom-left. No hexagon watermark.

### Content Slide (Text + Visual)

- White background, Aqua top bar. Section label (Share Tech Mono, aquaDeep) above the title.
- Left 5 of 12 columns: text (heading + 3–5 bullets, 14pt). Right 7 columns: diagram/photo/chart in a card with `#D5E2E7` border, radius 0.08in.
- Footer: emblem 0.32in left, page number right.

### Data Slide (Table / Chart)

- Title states the finding ("Ammonia stays below 0.5 mg/L at 12 kg/m³"), not the topic.
- Table full width of the content zone; chart in a card; one callout box max (aquaTint background, Aqua left rule 0.05in).

### KPI / Dashboard Slide

- Up to 4 KPI cards in a row. Card: white, border `#D5E2E7`, Aqua top rule 0.05in. Number 44pt Share Tech Mono, label 12pt muted, delta with sign and status color.
- Under the cards: one chart or table. Status pills (green/amber/red) for equipment or water-quality state, with text labels.

### Closing Slide

- Full-bleed Aqua. `zhras-logo-vertical-white` centered (width 4.4in; never below 3.5in), contact lines below in 14pt white (large-text rule applies: 14pt bold or 18pt regular), tagline already in the logo.

---

## 6. Component Patterns

### Tables

- Header row Deep Ocean `#0B3F57` with white SemiBold 12pt. Rows white / foam `#F2FAFC` alternating; 1px `#D5E2E7` horizontal rules, no vertical rules.
- Numbers right-aligned in Share Tech Mono; text left-aligned. Cell padding 0.1in x 0.07in.

### Cards / Callout Boxes

- Radius 0.08in, border 1px `#D5E2E7`, no shadow. Callout: aquaTint `#E8F4F8` background with a 0.05in Aqua left rule; text Deep Ocean.

### Charts

- Axis and gridlines `#D5E2E7`, labels 10–11pt muted. Series colors per Color Rules. Direct labels preferred over legends; legend (if needed) top-left.
- Status bands on process charts use the semantic tints at 100% fill (green/amber/red tints), not saturated colors.

### Icons / Badges

- Line icons, 1.5pt stroke, Deep Ocean or Aqua Deep, 0.3–0.5in. Status badge: pill with tint background, status-color text and a text label (e.g. "NORMAL", "WATCH", "ALARM" in Share Tech Mono 10pt caps).

---

## 7. Do's and Don'ts

### Do

- Keep content slides white with a single Aqua top bar; let the data carry the slide.
- Use Share Tech Mono for numbers, tags and labels; put units next to numbers.
- Keep the logo on a clean background at or above its minimum size (horizontal ≥ 4.0in, vertical ≥ 3.5in on a slide), with Z-height clear space.
- State the finding in slide titles; one message per slide.
- Pair every status color with a text label.

### Don't

- Don't use Aqua `#2A93AE` for small text, or Ice `#8FE3F0` on white.
- Don't use Michroma for Korean/Chinese or for more than a short uppercase title.
- Don't place `two-tone` logos on dark/photo backgrounds or `base` logos on any background other than as their own panel.
- Don't recolor, stretch, rotate, outline or add effects to the logo; don't retype the wordmark.
- Don't add gradients, shadows, stock water-splash graphics or extra hexagon patterns beyond the single outline motif on the cover.

---

## 8. PowerPoint Template

`ZHRAS-template.pptx` (same folder) implements this spec: 16:9 13.33 x 7.5in, theme colors/fonts set, four layouts (**ZHRAS Cover / Section / Content / Closing**) with named placeholders, and five example slides (cover, divider, content + native chart, KPI + table, closing) with speaker notes. Footer emblem, Aqua top bar and page numbers live on the layouts. Build script: `template-src/build.js`.

- Install the fonts before opening it: **Michroma**, **Share Tech Mono**, **Inter** (and Noto Sans KR / Noto Sans SC for Korean / Chinese text) from Google Fonts. PowerPoint does not embed them; without them text falls back to a default font and widths change.
- Sample numbers and text are placeholders — replace them.

---

## 9. Agent Guide

When generating slides with this design system:

```
You are creating a presentation using the ZHRAS slide design system (technical aqua, 16:9, 13.33x7.5in).
Key rules:
- Content slides: white background, one Aqua (#2A93AE) top bar 0.07in, titles Deep Ocean (#0B3F57) 28pt Inter/Noto Sans KR Bold; body #1E3A47 14pt.
- Brand slides (cover/closing): full-bleed Aqua #2A93AE with the white logo (assets/zhras-logo/png/zhras-*-white.png); section dividers use Deep Ocean #0B3F57.
- Numbers, tags, labels and page numbers: Share Tech Mono (uppercase tags, tracking +12%). Michroma only for short Latin uppercase titles/the logo.
- Aqua #2A93AE is for shapes only; small text uses Aqua Deep #136F8A on white or Ice #8FE3F0 on Deep Ocean. White text on Aqua only at >=18pt.
- Status: green #17703F / amber #A85A00 / red #C62828 with tints #E6F4EC / #FFF4E6 / #FDECEC, always with a text label.
- Footer on content slides: two-tone emblem 0.32in + page number. Never recolor/stretch the logo; keep Z-height clear space; on a 13.33in slide the horizontal lockup is >= 4.0in wide and the vertical >= 3.5in.
- The only decorative motif is a single hexagon outline (white 10%) on the cover.

Refer to the full DESIGN.md for color values, typography specs, and layout details.
```
