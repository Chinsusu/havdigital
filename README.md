# HAV Digital Solutions

Static Astro site for HAV Digital Solutions, deployed through Cloudflare Pages.

## Requirements

- Node.js 22.12 or newer (Cloudflare Pages also reads `.node-version`)
- npm 9.6.5 or newer

## Local development

```bash
npm ci
npm run dev
```

`src/pages/` owns every public route. Shared layouts and brand components live in
`src/layouts/` and `src/components/`. Files that must be copied to the deployment
root unchanged, including `_headers`, `robots.txt`, and `sitemap.xml`, live in
`public/`.

## Production build

```bash
npm run build
npm run verify
npm run preview
```

Astro produces a fully static site in `dist/`. The only intentional client-side
JavaScript is the versioned consent/event module at
`public/assets/analytics.v1.js`; page rendering does not require JavaScript.

## Measurement

- Google Search Console property: `sc-domain:havdigital.com`
- Google Analytics 4 measurement ID: `G-ZK5R31BNP4`
- Cloudflare Web Analytics: automatic RUM setup in the Cloudflare account
- Consent: Google Analytics is not loaded until the visitor opts in; the choice
  is stored under `hav_analytics_consent_v1`
- Supported funnel events: `view_product`, `select_plan`, `start_checkout`,
  `sign_up`, `purchase`, `contact_sales`

The current landing page emits `view_product`, `select_plan`, and
`contact_sales`. Checkout/account code should call
`window.havAnalytics.track()` for the remaining events when those journeys
exist. Do not send email addresses, credentials, free-form support text, or
payment data in event parameters.

## Cloudflare Pages build settings

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

Astro emits page files such as `dist/terms.html`. Cloudflare Pages serves these
at their extensionless counterparts (`/terms`) and redirects `.html` requests to
the clean URL. `src/pages/404.astro` becomes the root-level `dist/404.html`
fallback.

`privacy`, `terms`, `refund-policy`, `acceptable-use`, and `sla` intentionally
remain `noindex,follow` until the owner confirmations in `docs/legal/` are
completed. `status` remains noindex until it is backed by real monitoring, and
`api-docs` remains noindex until a real API contract is published.
