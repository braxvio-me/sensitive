# Design System: Architectural Editorialism

<!-- impeccable:design-schema 1 -->

## Visual Authority & Reference

- Primary Visual Reference: `ui/` directory (`desktop-full (1).png`, `hero-desktop.png`, `cta-desktop.png`, `faq-desktop.png`, `pricing-desktop.png`, `footer-desktop.png`, `mobile-full.png`) modeled on the precision and craft of GitNimble.
- Aesthetic Direction: **Architectural Editorialism** — minimal, tactile, precise, engineering-driven, editorial, and quietly confident.
- Tone: Institutional credibility, durability, long-term horizons, and genuine product substance.
- One colour family: the brand blue sampled from the Braxvio mark, on warm-neutral greys. No green, amber, sky or purple accents anywhere in the UI. Semantic red is reserved for form errors.

## Design Tokens

### Color Palette (CSS Custom Properties, `src/app/globals.css`)

```css
:root {
  --bg-primary: #FAFAFA;
  --bg-secondary: #F3F4F5;
  --surface-elevated: #FFFFFF;
  --surface-contrast: #121314;
  --text-primary: #141518;
  --text-secondary: #4B4F55;
  --text-tertiary: #6A6E75;
  --border-subtle: #E6E7EA;
  --border-strong: #D3D5DA;
  --accent-cobalt: #0055D4;       /* buttons, fills */
  --accent-cobalt-hover: #0046AF;
  --accent-text: #0055D4;         /* links, highlighted words, icons */
  --accent-surface: #EDF3FD;      /* monogram / avatar tint */
  --accent-technical: #2B8FB3;    /* hero linework only */
  --status-live: #0055D4;
  --status-muted: #8B9097;
  --danger: #B42318;
  --danger-surface: #FEF3F2;
  --focus-ring: #0055D4;
}

[data-theme="dark"] {
  --bg-primary: #0C0D0F;
  --bg-secondary: #141518;
  --surface-elevated: #17191C;
  --surface-contrast: #F5F5F4;
  --text-primary: #F2F3F5;
  --text-secondary: #AEB3BA;
  --text-tertiary: #878C94;
  --border-subtle: #24272C;
  --border-strong: #33373E;
  --accent-cobalt: #2563EB;
  --accent-cobalt-hover: #1D4ED8;
  --accent-text: #7AAEFF;         /* lighter so links pass 4.5:1 on dark surfaces */
  --accent-surface: #142441;
  --accent-technical: #4AA9CF;
  --status-live: #5B9BFF;
  --status-muted: #6E737B;
  --danger: #F97066;
  --danger-surface: #2A1413;
  --focus-ring: #7AAEFF;
}
```

- `dark:` utilities follow `[data-theme="dark"]` (the site toggle), via `@custom-variant dark` in `globals.css`.
- The saved theme is applied by an inline script in `layout.tsx` before first paint.

### Typography Hierarchy

- **Font Family**: `var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace**: Geist Mono, used only for `<kbd>` keyboard hints. Never as decoration for labels, metadata or "technical" flavour.
- **Display / page H1**: 40px (mobile) / 52–68px (desktop), tracking -0.035em, line-height ~1.06, weight 700. One highlighted phrase may use `--accent-text`.
- **Section H2**: 30px (mobile) / 36–48px (desktop), tracking -0.025em, line-height 1.1–1.2, weight 700.
- **H3**: 17–22px, tracking -0.015em, weight 600.
- **Body**: 15–18px, line-height 1.625, measure ≤ 68ch.
- **Meta / labels**: 13–14px sentence case, `--text-tertiary`. No uppercase tracking-wide labels.

### Spacing & Layout Geometry

- **Max Content Width**: 1240px (`.content-container`, layered so `max-w-*` utilities narrow it per page).
- **Grid**: Responsive 12-column layout with fluid gutters (20px mobile, 32px desktop).
- **Corner Radii**: pills only for buttons and small controls; 10px inputs; 16px (`rounded-2xl`) cards, windows and banners.
- **Elevation**: cards use a 1px border, no shadow. Only floating mockups (hero window, command palette) carry an offset soft shadow.
- **Dividers**: 1px `--border-subtle`; `--border-strong` for the top rule of ruled lists.

## Composition Rules

- **No eyebrows or kickers.** No pill or small-caps label above a heading; the heading carries the section.
- **No decorative numbering.** Numbers only where order matters (the 5-step partnership process).
- **No pseudo-technical labels** (`foo.console // bar`, `system.runtime.spec`, "Cluster Healthy", "Ledger"). Use plain language.
- **Ruled lists over icon cards.** Principles, pillars and disciplines are lists with a top hairline, not same-size boxes.
- **No nested cards.**

## Interactive Components & States

- **Buttons** (`.btn` + `.btn-primary` / `.btn-secondary`, optional `.btn-sm`): pill, 44px min height (36px small), hover colour shift, 0.98 press, disabled at 60% opacity, spinner while submitting.
- **Links** (`.link-accent`): `--accent-text`, semibold, underline on hover.
- **Fields** (`.field`, `.field-label`, `.form-error`): sentence-case labels above inputs, "(optional)" marks optional fields, errors announced with `role="alert"`.
- **Focus**: 2px `--focus-ring` outline, 2px offset, on every interactive element.
- **Venture status** (`VentureStatus`): neutral text with a 7px dot. Live = solid `--status-live`; Private Beta = solid `--status-muted`; In Development = hollow `--status-muted` ring. No tinted pill backgrounds.
- **Accordion (FAQ)**: hairline-separated items, grid-row height transition, `aria-expanded` / `aria-controls`.
- **Hero venture window**: macOS chrome, venture switcher with `aria-pressed`, 30s auto-rotation driven by a progress underline, Pause/Resume control, pauses on hover and keyboard focus, off under reduced motion.
- **Command palette** (⌘K / Ctrl K): venture rows come from `content/ventures.ts`, grouped results, combobox + listbox semantics.
- **Venture cards** (`VentureCard`): whole card is the link target (stretched link).
