# slide-design-md

Slide design system inspirations for AI agents.

Curated collection of `DESIGN.md` files that describe presentation design systems in a machine-readable format — so AI agents can generate consistent, on-brand slides.

## What is a Slide DESIGN.md?

A `DESIGN.md` is a plain-text specification of a presentation's visual identity: colors, typography, layout grids, spacing rules, and slide-type patterns. AI agents read this file to produce slides that look intentional and cohesive — without needing access to a template file.

## Browse

| Design System | Style | Slides |
|---------------|-------|--------|
| [CA ADVANCE](./designs/ca-advance/DESIGN.md) | Minimal BtoB — white-base, professional | 16:9 |
| [Tech Keynote](./designs/tech-keynote/DESIGN.md) | Dark, bold, Apple-inspired | 16:9 |
| [Startup Pitch](./designs/startup-pitch/DESIGN.md) | Modern gradient, investor-facing | 16:9 |
| [ZHRAS](./designs/zhras/DESIGN.md) | Technical aqua — RAS equipment maker, white content + Aqua/Deep Ocean brand slides | 16:9 |

## Structure

```
designs/
  ca-advance/
    DESIGN.md          # Design system definition
    preview.png        # Visual preview (optional)
  tech-keynote/
    DESIGN.md
  _template/
    DESIGN.md          # Template for creating new entries
```

## DESIGN.md Sections

Each slide DESIGN.md follows a consistent structure:

1. **Overview** — Design philosophy, intended use, atmosphere
2. **Color Palette** — Color roles, hex values, usage rules
3. **Typography** — Font hierarchy, sizes, weights
4. **Layout Grid** — Slide dimensions, margins, content zones
5. **Slide Types** — Cover, section, content, data, closing patterns
6. **Component Patterns** — Tables, charts, callouts, cards
7. **Do's and Don'ts** — Guardrails for visual consistency
8. **Agent Guide** — Prompt-ready reference for AI agents

## Usage

Copy the relevant `DESIGN.md` into your project and reference it in your AI agent's context:

```
Use the design system defined in DESIGN.md to generate slides.
```

## Contributing

1. Copy `designs/_template/DESIGN.md`
2. Fill in your design system
3. Add a preview image (optional)
4. Submit a PR

## License

MIT
