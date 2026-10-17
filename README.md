# Braxvio — Technology Parent Company

> *"We build technology ventures designed to endure."*

Braxvio is a technology parent company focused on building and developing ventures across consumer platforms, enterprise software, and emerging technology. Founded in Africa, Braxvio pursues useful technology, disciplined execution, and businesses built for the long term.

---

## Visual Design Reference & Aesthetic Direction

- **Primary Reference**: Inspired by the precision, typography, and section-by-section discipline of GitNimble as provided in the repository's `ui/` reference assets (`hero-desktop.png`, `desktop-full (1).png`, `cta-desktop.png`, `faq-desktop.png`, etc.).
- **Aesthetic**: **Architectural Editorialism** — minimal, tactile, precise, engineering-driven, editorial, and quietly confident.
- **Visual Signatures**:
  - Precision decorative connection circuitry lines framing the display headline.
  - Interactive macOS-style venture orchestration console (`braxvio.console // portfolio-orchestration`) with live architecture metrics, problem breakdowns, and runtime specs.
  - Keyboard-driven interactive Command Palette (`⌘K`) with real-time filtering across venture architectures.
  - Light and dark mode support via the header's sun/moon toggle.
  - Minimalist accordion FAQ with animated chevron toggles.
  - Dual action pill buttons and responsive 12-column reading grid.

---

## Information Architecture & Routes

| Route | Purpose & Scope | Publication Safeguards |
| :--- | :--- | :--- |
| `/` | Homepage (Hero, Command Palette, Portfolio, Narrative, Trust Grid, FAQ, Dual CTA) | Fully public |
| `/ventures` | Venture Directory with category filtering and keyword search | Filters only verified & approved ventures |
| `/ventures/[slug]` | Dedicated venture architecture profile (e.g. Pharmora, DevPay Africa, Pellmia, EcoLift, Kampus) | `notFound()` 404 for unverified ventures |
| `/about` | Company origin narrative, multi-venture architecture, long-term thesis | Verified institutional narrative |
| `/philosophy` | The Five Operating & Engineering Principles | Detailed editorial standards |
| `/careers` | Talent philosophy and rolling expression of interest form | Zero phantom job requisitions |
| `/contact` | Secure inquiry routing with honeypot bot defense, rate limiting, and server validation | Encrypted endpoints |
| `/privacy` | Privacy Notice & responsible data governance | Truth-based draft framework |
| `/terms` | Terms of Use | Truth-based draft framework |
| `/_not-found` | Branded 404 handler with return navigation | Safeguards private draft links |
| `/sitemap.xml` | Generated sitemap strictly listing published pages | Excludes unpublished drafts |
| `/robots.txt` | Standard robots policy with API route exclusion | Production ready |

---

## Candidate Venture Portfolio

All venture profiles are strictly managed through typed data models (`src/content/ventures.ts`) enforcing publication verification:

1. **Pharmora** (`/ventures/pharmora`): Pharmacy inventory management & medication distribution network. *[Status: Live]*
2. **DevPay Africa** (`/ventures/devpay-africa`): Cross-border compensation and contract compliance for African engineers. *[Status: Private Beta]*
3. **Pellmia** (`/ventures/pellmia`): High-throughput telecom routing, 2FA, and billing infrastructure. *[Status: Private Beta]*
4. **EcoLift** (`/ventures/ecolift`): Commercial waste logistics & certified recycling exchange. *[Status: In Development]*
5. **Kampus** (`/ventures/kampus`): Higher education administrative services & student living marketplace. *[Status: In Development]*

---

## Technical Stack

- **Framework**: Next.js 16 (App Router with Turbopack & React 19)
- **Styling**: Tailwind CSS v4 with custom CSS variables for design tokens (`globals.css`)
- **Typography**: Geist Sans & Geist Mono (`next/font/google`)
- **Icons**: Lucide React with consistent stroke weights
- **State & Theme**: Custom `ThemeProvider` with system preference detection and localStorage persistence
- **Validation & APIs**:
  - `POST /api/contact` — In-memory sliding window rate limiting (5 req/min/IP), honeypot spam detection, email validation, and safe redacted logging.
  - `POST /api/careers` — Talent expression submission handler with privacy consent enforcement.

---

## Local Development & Production Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

### 4. Run Production Server
```bash
npm run start
```

---

## Design System & Impeccable Integration

This project integrates the **Impeccable** design skill (`.agents/skills/impeccable/`):
- `PRODUCT.md` captures confirmed product truth, audience context, and constraints.
- `DESIGN.md` defines tokens, color strategies, and typographic hierarchy.
- Contrast ratios target WCAG 2.2 AA (≥ 4.5:1 body, ≥ 3:1 headings).
- Runs automated quality scans via `.agents/skills/impeccable/scripts/impeccable.cmd detect http://localhost:3000`.

---

## Truth Safeguards & Compliance

In accordance with Braxvio engineering requirements:
- No fabricated customer testimonials, employee portraits, or artificial venture metrics have been introduced.
- Status badges strictly use approved vocabulary: `Live`, `Private Beta`, `In Development`, `In Research`, `Planned`.
- Unpublished ventures are completely isolated from sitemaps, API payloads, and routing layers.
