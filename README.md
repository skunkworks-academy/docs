# Skunkworks Academy Docs

Docusaurus-based documentation module for `https://docs.skunkworksacademy.com/`.

## Capabilities

- Academy-aligned top navigation
- Responsive light and dark themes
- Local full-text documentation search
- Structured technical and operational documentation
- GitHub pull-request build validation
- GitHub Pages deployment to the custom domain

## Local development

```bash
npm install
npm start
```

The development server opens the documentation site locally with live reload.

## Production validation

```bash
npm run build
npm run serve
```

The static production output is generated in `build/`.

## Content structure

- `docs/` — Markdown documentation pages
- `sidebars.js` — documentation navigation structure
- `docusaurus.config.js` — site, navigation, search, footer, and deployment configuration
- `src/css/custom.css` — Academy visual styling
- `static/` — custom domain declaration and static assets
- `.github/workflows/` — pull-request validation and production deployment

## Publishing

Pull requests targeting `main` run the documentation build. Merges to `main` build and deploy the site using GitHub Pages. Repository Pages settings must use **GitHub Actions** as the source, and the DNS record for `docs.skunkworksacademy.com` must point to the configured GitHub Pages endpoint.

## Contribution rules

Do not commit credentials, API keys, learner records, customer information, private agreements, or production secrets. Documentation changes should identify the intended audience, affected Academy module, validation performed, and review owner.
