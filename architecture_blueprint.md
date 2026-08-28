# FUEL Preview Clone — Architecture Blueprint

## Objective and authorization

This is an authorized reconstruction of the publicly accessible FUEL preview site at `https://fuel.framer.website/`, using the provided `remRADAR/framer-clone` exporter as the source implementation. The target is hosted as an independent static export inside `remRADAR/OnTheRadar`. No authentication, CAPTCHA, paywall, form submission, private data, or production mutation was attempted.

## Source and export method

The exporter discovers routes through the source sitemap, renders each route in headless Chromium, captures permitted first-party network responses, rewrites references to local paths, and emits static HTML plus local assets. The export completed on 2026-08-28 with 13 routes and 877 captured assets at approximately 118 MB before repository metadata and dependency cleanup.

The local exporter was patched only in the working copy of `framer-clone` so extensionless asset paths receive a safe `.asset` suffix when needed. This avoids filesystem prefix collisions such as an extensionless file path and a later nested asset path. The target repository contains the generated static output, not the exporter’s `node_modules` or its local working copy.

## Route and component inventory

The complete route inventory is recorded in `site_map.json`. Repeated observable structures include a persistent header navigation, CEO/profile chip, indexed section labels, hero media blocks, project cards, service/pricing rows, FAQ accordions, showreel CTA, article cards, contact form, and footer navigation. The export preserves the original Framer-generated DOM/CSS/JavaScript behavior as static local files rather than reimplementing those components in a framework.

## Runtime and hosting model

The repository is a static host package. `index.html` is the homepage; route-specific HTML files are emitted using hyphenated filenames. `_redirects` and `vercel.json` provide clean-route behavior for compatible static hosts. `sw.js` is included by the exporter to serve local copies for runtime-built Framer URLs. GitHub Pages or another static host should publish the repository root as the site directory.

## Asset boundary

The `assets/` directory contains captured first-party site assets, fonts, scripts, styles, images, and media. Analytics and telemetry domains listed by the exporter were skipped. No source credentials or private API responses were collected. Because this is a full static clone, the asset directory is intentionally large and includes original runtime dependencies needed for visual and interactive fidelity.

## Forms and external actions

The contact form was inspected but not submitted. It is therefore a static visual and interaction clone and does not provide a live form-processing backend. The showreel and any external links retain the behavior observed in the public site. A future implementation should replace form submission with an explicitly authorized endpoint and document its privacy, validation, and retention behavior.

## Risks and open questions

The source export captures CMS content as a snapshot, so changes on the source site require a new authorized export. Some runtime behavior depends on the browser supporting the captured Framer JavaScript and service-worker pathing. A deployed host must be checked for correct MIME types, clean URL rewrites, service-worker scope, large-file limits, and mobile media performance. These deployment-specific checks remain `UNVERIFIED` until the target host is selected and tested.

## References

1. [FUEL preview site](https://fuel.framer.website/)
2. [remRADAR/framer-clone](https://github.com/remRADAR/framer-clone)
3. [remRADAR/OnTheRadar](https://github.com/remRADAR/OnTheRadar)
