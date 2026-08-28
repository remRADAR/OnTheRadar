# On The Radar

Independent React frontend reconstruction of the public FUEL studio experience, built as a responsive editorial portfolio for the remRADAR OnTheRadar project.

## Run locally

```bash
pnpm install
pnpm dev
```

The production build is validated with:

```bash
pnpm check
pnpm build
```

## Routes

The frontend provides `/`, `/about`, `/work/portfolio`, `/work/portfolio/:slug`, and `/contact`, with direct-route fallback support from the included static server configuration.

## Architecture

Content is separated from presentation in `client/src/data/siteContent.ts`. The adapter boundary in `client/src/lib/cms.ts` is intentionally shaped so a future WordPress REST or GraphQL source can replace local content without rewriting page components. The detailed site map, content model, CMS requirements, responsive rules, and design tokens are documented in [`docs/architecture.md`](docs/architecture.md).

## Visual direction

The interface follows the **Editorial Signal** system documented in [`ideas.md`](ideas.md): near-black and warm-white editorial surfaces, signal-orange activation moments, oversized Space Grotesk display type, DM Mono metadata, indexed sections, asymmetric compositions, and restrained motion with reduced-motion support.

## Reference independence

The implementation does not embed or proxy Framer and does not depend on the reference website remaining online. Images are used as original visual replacements and are referenced through project-lifecycle asset URLs.

## Verification

The initialized web runtime passed TypeScript checking and the production build. Representative desktop screenshots were captured for the home, About, Portfolio, and Contact routes. Full breakpoint-by-breakpoint browser verification remains to be completed before production launch.
