# HAV Digital Solutions

Static landing page for HAV Digital Solutions, deployed through Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Pages build settings

- Build command: `npm run build`
- Build output directory: `dist`

The deployable static assets, including `_headers`, live in `public/` and are copied to `dist/` by Vite.
