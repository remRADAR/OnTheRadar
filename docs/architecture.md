# On The Radar — Frontend Architecture

## Scope and status

This repository contains an independent React frontend reconstruction of the public FUEL reference experience at `https://fuel.framer.website/`. It does not iframe, proxy, or depend on the Framer runtime. The current content source is local structured TypeScript data; the CMS boundary is ready for a future WordPress REST or GraphQL adapter.

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Editorial studio homepage with hero, about, portfolio preview, services, pricing, stats, archive, FAQ, and conversion footer. |
| `/about` | Studio positioning, process, team, recognition, and stats. |
| `/work/portfolio` | Indexed portfolio list. |
| `/work/portfolio/:slug` | Shareable project detail page. |
| `/contact` | Inquiry form, FAQ, showreel link, and direct email CTA. |

## Component map

The shared application shell lives in `client/src/App.tsx` and contains `SiteHeader`, `SiteFooter`, `Layout`, and metadata handling. Page sections are kept in route-level components under `client/src/pages/`. Repeated visual primitives include section labels, signal buttons, project cards, service rows, plan cards, stats, FAQ details, and portfolio detail layouts.

## Content model

`client/src/data/siteContent.ts` defines typed contracts for `MediaAsset`, `NavigationItem`, `Project`, `Service`, `Plan`, `FaqItem`, `Stat`, `TeamMember`, and `PageSeo`. Global settings, navigation, projects, services, plans, FAQ items, stats, and team members are structured as local adapter data.

## CMS API requirements

`client/src/lib/cms.ts` exposes the initial adapter methods: `getSiteSettings`, `getNavigation`, `getProjects`, `getServices`, `getPlans`, `getFaqs`, `getStats`, and `getTeam`. A WordPress adapter should map REST or GraphQL responses into the same contracts. Editable fields should include copy, links, ordering, years, categories, media URLs, alt text, crop/aspect intent, SEO title, SEO description, and canonical URLs.

## Media model

Major imagery is referenced through project-lifecycle storage URLs and carries explicit alt text and aspect intent. The data boundary is designed to accept CMS-provided responsive image variants later. Images use lazy loading outside the first visible content and preserve their crop through `object-fit: cover`.

## Responsive rules

At desktop widths, the site uses asymmetric editorial grids, offset project cards, split contact layouts, and multi-column stat and pricing sections. Below 800px, navigation becomes an accessible menu, grids collapse to one column, section spacing decreases, and image blocks preserve a tall, deliberate crop. The document uses `overflow-x: hidden` and fluid `clamp()` sizing to prevent unintended horizontal overflow.

## Design tokens

The visual system is documented in `client/src/index.css`: near-black `#0C0C0C`, warm white `#F3F1EC`, muted gray `#A5A19B`, divider `#2A2A28`, and signal orange `#FF5C35`. Display and interface text use Space Grotesk; indices and metadata use DM Mono. Motion uses transform and opacity with a custom ease-out and a complete reduced-motion override.

## Verification notes

The project typecheck and production build passed in the initialized web runtime. Representative desktop screenshots were captured for `/`, `/about`, `/work/portfolio`, and `/contact`. Remaining visual validation across every requested breakpoint is `UNVERIFIED` and should be completed in a browser pass before a production launch.
