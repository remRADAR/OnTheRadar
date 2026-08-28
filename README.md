# OnTheRadar

This repository contains an independent static clone of the public FUEL preview site, exported with the authorized [`remRADAR/framer-clone`](https://github.com/remRADAR/framer-clone) pipeline and sourced from [`https://fuel.framer.website/`](https://fuel.framer.website/).

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. The generated `_redirects` and `vercel.json` files support clean-route behavior on compatible static hosts.

## Included routes

The export includes the homepage, About, Contact, Portfolio index, four portfolio detail routes, four article routes, and the captured 404 route. The complete route inventory is in [`site_map.json`](site_map.json).

## Clone architecture

The site is a self-contained static package. HTML pages are stored at the repository root, captured runtime assets live under `assets/`, and the service worker in `sw.js` handles local copies of runtime-built references. The architecture and known limitations are documented in [`architecture_blueprint.md`](architecture_blueprint.md).

Analytics and telemetry domains were intentionally skipped by the exporter. The contact form was inspected but not submitted, so its production submission behavior remains unconfigured and must be connected only with an explicitly authorized form handler.

## Verification status

The source exporter completed route discovery and asset capture for 13 routes and 877 assets. Local route and browser verification must still be run against the selected deployment host before calling the clone production-ready.
