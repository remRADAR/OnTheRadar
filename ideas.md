# On The Radar — Design Direction

## Theme Name: Editorial Signal

**Very Brief Intro:** A monochrome editorial studio interface with hard black fields, white typography, and controlled signal-orange accents. The mood is premium, spatial, and decisive: part art-direction portfolio, part operating system for ambitious brands.

**Probability:** 0.06

## Theme Name: Soft Brutalist Gallery

**Very Brief Intro:** A pale mineral canvas with oversized type, asymmetrical image blocks, and tactile paper-like surfaces. The tone is warm, cultured, and deliberately human.

**Probability:** 0.03

## Theme Name: Chromatic Night Shift

**Very Brief Intro:** A dark visual laboratory with electric color accents, cinematic imagery, and kinetic transitions. It communicates velocity and experimentation without losing a premium edge.

**Probability:** 0.08

## Chosen Approach: Editorial Signal

### Design Movement
Contemporary Swiss editorial design crossed with art-direction portfolio websites: strict typographic hierarchy, asymmetric composition, modular systems, and occasional oversized imagery treated like a printed spread.

### Core Principles
1. **Black is the stage.** Large black surfaces create visual authority; white type carries the signal.
2. **Orange is an instrument.** A single hot-orange accent marks action, category, and moments of emphasis rather than becoming decoration.
3. **Structure over ornament.** Thin rules, indexed labels, and precise spacing make the interface feel intentional and CMS-ready.
4. **Images are evidence.** Every image has a compositional job, an art direction, and an explicit responsive crop.

### Color Philosophy
The palette is intentionally narrow: near-black #0C0C0C, warm white #F3F1EC, gray #A5A19B, and signal orange #FF5C35. The low-key background lets typography and imagery dominate, while orange creates a visible thread through CTAs, indices, hover states, and small brand marks.

### Layout Paradigm
A full-bleed editorial canvas with a persistent utility header, indexed sections, and asymmetrical split compositions. Desktop uses offset columns and tall image fields; mobile becomes a single-column sequence with preserved numbering and crop intent rather than a generic card stack.

### Signature Elements
- Numbered section markers such as `(01)` and `(02)` aligned to the left edge of each chapter.
- Thin orange rules and orange micro-labels that behave like registration marks.
- Oversized display text paired with small mono metadata, creating a printed-spread rhythm.

### Interaction Philosophy
Interactions should feel like a physical layout responding to attention. Links shift with a quick underline or orange edge, image frames lift slightly on hover, and accordion answers open with restrained motion. Every interactive element has a visible focus state and remains useful without motion.

### Animation
Use short, high-contrast transitions: 180–260ms for buttons and nav, 500–800ms for image reveals and section entrances. Animate only opacity and transform. Use a small stagger for repeated work cards. Disable non-essential movement with `prefers-reduced-motion: reduce`.

### Typography System
Use **Space Grotesk** for display and interface headings, with **DM Mono** for indices, metadata, and labels. Display headlines use tight tracking and a fluid `clamp()` scale. Body copy stays narrow and calm at 15–17px with generous line-height. Navigation uses uppercase mono labels with generous tracking.

### Brand Essence
**On The Radar is a creative studio for brands that need sharper visual systems, faster iteration, and an unmistakable point of view.** Personality: **precise, energetic, editorial**.

### Brand Voice
Headlines are concise and declarative. CTAs are active and specific. Microcopy sounds like a confident studio partner, not a software dashboard.

Example lines:
- “Make the signal impossible to miss.”
- “Pick a direction. We’ll shape the system.”

### Wordmark & Logo
A custom wordmark uses a compact radar-sweep symbol: three nested quarter-arc strokes intersected by a single orange registration line. The wordmark sits in uppercase with a slightly compressed grotesk treatment; the symbol can stand alone as the favicon.

### Signature Brand Color
**Signal Orange — #FF5C35.** It is the ownable color that indicates momentum, action, and the exact point where an idea becomes visible.

## Reference Blueprint

The public reference exposes routes for `/`, `/about`, `/work/portfolio`, portfolio detail routes, and `/contact`. Shared structure includes a top navigation with Home, Portfolio, About, Contact, a CEO profile chip, section indices, a showreel CTA, and a repeated footer CTA.

The home route is modeled as an editorial scroll sequence: hero, about narrative, portfolio preview, premium services, pricing, testimonial/metrics, archive, stats, article list, FAQ, and footer. The About route contains studio positioning, process, team, awards, clients, and stats. The Portfolio route contains an indexed project list. The Contact route contains a cinematic split hero and accessible inquiry form, followed by FAQ and the shared conversion footer.

## WordPress-Ready Content Boundary

The frontend consumes typed content objects through a CMS service boundary. Local content is the initial adapter; a future WordPress REST or GraphQL adapter can provide the same `SiteSettings`, `Page`, `Project`, `Service`, `Plan`, `FaqItem`, `TeamMember`, `Stat`, `Article`, `MediaAsset`, and `NavigationItem` contracts without changing the page components.

## Style Decisions

- The reference’s dark, image-led editorial composition is the ground truth for layout and rhythm.
- Content is separated from presentation in `client/src/data/siteContent.ts` and `client/src/lib/cms.ts`.
- Original/remote editorial imagery is used as lawful visual replacement material rather than embedding the Framer runtime or copying its implementation.
