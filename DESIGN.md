# Design System: Architectural Editorialism

<!-- impeccable:design-schema 1 -->

## Visual Authority & Reference

- Primary Visual Reference: `ui/` directory (`desktop-full (1).png`, `hero-desktop.png`, `cta-desktop.png`, `faq-desktop.png`, `pricing-desktop.png`, `footer-desktop.png`, `mobile-full.png`) modeled on the precision and craft of GitNimble.
- Aesthetic Direction: **Architectural Editorialism** — minimal, tactile, precise, engineering-driven, editorial, and quietly confident.
- Tone: Institutional credibility, durability, long-term horizons, and genuine product substance.

## Design Tokens

### Color Palette (CSS Custom Properties)

```css
:root {
  --bg-primary: #F7F6F2;
  --bg-secondary: #EFEEE8;
  --surface-elevated: #FFFFFF;
  --surface-contrast: #141513;
  --text-primary: #171816;
  --text-secondary: #5C5D57;
  --text-tertiary: #878880;
  --border-subtle: #E6E4DC;
  --border-strong: #DCDAD2;
  --accent-primary: #1B4E66;
  --accent-hover: #133A4D;
  --accent-surface: #EAF1F4;
  --accent-cobalt: #0066FF;
  --accent-technical: #38A3B5;
  --signal-live: #15803D;
  --signal-beta: #0284C7;
  --signal-dev: #D97706;
}

[data-theme="dark"] {
  --bg-primary: #0D0E0F;
  --bg-secondary: #141618;
  --surface-elevated: #191B1E;
  --surface-contrast: #FAF9F5;
  --text-primary: #EDEDEA;
  --text-secondary: #9FA199;
  --text-tertiary: #6E706A;
  --border-subtle: #24272B;
  --border-strong: #32363C;
  --accent-primary: #38BDF8;
  --accent-hover: #7DD3FC;
  --accent-surface: #102A38;
  --accent-cobalt: #3B82F6;
  --accent-technical: #2DD4BF;
  --signal-live: #22C55E;
  --signal-beta: #38BDF8;
  --signal-dev: #F59E0B;
}
```

### Typography Hierarchy

- **Font Family**: `var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace Family**: `var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Display**: 44px (mobile) / 64px–72px (desktop), tracking -0.035em, line-height 1.08, font-weight 700.
- **H1**: 32px (mobile) / 44px (desktop), tracking -0.025em, line-height 1.15, font-weight 600.
- **H2**: 24px (mobile) / 32px (desktop), tracking -0.02em, line-height 1.25, font-weight 600.
- **H3**: 18px (mobile) / 20px (desktop), tracking -0.015em, line-height 1.35, font-weight 600.
- **Body**: 15px–16px, line-height 1.625, tracking -0.01em, font-weight 400.
- **Caption / Meta**: 12px–13px, line-height 1.45, font-weight 500.

### Spacing & Layout Geometry

- **Max Content Width**: 1240px (constrained, high-legibility desktop reading container).
- **Grid**: Responsive 12-column layout with fluid gutters (16px mobile, 32px desktop).
- **Corner Radii**:
  - Buttons / Controls: Full pill (`rounded-full`) for CTAs; 8px (`rounded-lg`) for input fields and cards.
  - Windows / Mockup Panels: 16px (`rounded-2xl`) with subtle 1px border and soft diffused elevation.
- **Dividers**: 1px crisp borders matching `--border-subtle`. No heavy offset shadows.

### Interactive Components & States

- **Primary Button**: Solid vibrant accent, pill geometry, white text, subtle hover lift, visible keyboard focus ring.
- **Secondary Button**: Elevated surface with 1px border, primary text, subtle hover background change.
- **Accordion (FAQ)**: Border-bottom separated list items with smooth height transitions, rotating chevron icon, and full keyboard accessibility.
- **Mockup Terminal / Window**: macOS window header with red/yellow/green indicator lights, title text, and clean interactive panes.
- **Status Badges**: Small rounded pill tags with subtle tinted background and colored indicator dot for venture states (Live, Private Beta, In Development).
