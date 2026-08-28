# Verification notes

On 2026-08-28, the live FUEL preview exposed 13 sitemap routes: homepage, About, Contact, Portfolio index, four portfolio details, four blog articles, and a 404 route. The local export rendered the homepage at `http://127.0.0.1:4173/` with the same observable navigation, section text, project links, and local `/assets/` image paths. No form was submitted. Remaining verification includes representative subroutes, mobile viewport behavior, console/network errors, and final repository build/hosting checks.

The local directory-style routes `/about/` and `/contact/` rendered successfully after adding `index.html` entry points. About exposed the studio/process/team/awards/stats content; Contact exposed the inquiry fields, FAQ, showreel link, email CTA, and local media. The contact form was not submitted.

The local `/work/portfolio/` route rendered successfully with the portfolio index and project links. The nested `/work/portfolio/vellfire-calibration/` entry point loaded only the Framer footer and a blank viewport, indicating the same route-specific hydration issue seen on `.html` subroutes; it requires a safe static-export patch before final handoff.

After patching two captured modules to resolve their local CMS URL base and removing 25 skipped telemetry script tags from route HTML, `/work/portfolio/vellfire-calibration/` rendered successfully with its hero, project metadata, Live Preview link, related work, FAQ, and footer. This confirms the patched nested route works through a local static server.
