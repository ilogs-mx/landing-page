# AGENTS.md

## Reality Check
- `README.md` is still the default Astro starter text. Do not trust it for repo behavior; use `package.json`, `astro.config.mjs`, and `src/` instead.

## Commands
- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview built site: `npm run preview`
- Astro CLI passthrough: `npm run astro -- <command>`
- Verified repo-local check: `npm run build`
- `npm run astro -- check` is not currently usable without first installing `@astrojs/check` and `typescript`; Astro prompts interactively because they are not in `package.json`.
- No lint, test, or CI config exists in this repo as of now.

## App Shape
- This is a single-package Astro 5 static site, not a monorepo.
- Main landing page entrypoint: `src/pages/index.astro`
- Legal/docs pages are generated from `src/content/documents/*.md` by `src/pages/documents/[slug].astro` using Astro content collections.
- Content schema lives in `src/content/config.ts`; document frontmatter must include `title`, `description`, `author`, `date`, and `tags`.
- Shared site chrome for the marketing pages is in `src/layouts/Layout.astro`; document pages use `src/layouts/MarkdownLayout.astro`.

## Styling And Assets
- Tailwind is wired through `@tailwindcss/vite` in `astro.config.mjs`, and the actual Tailwind import is in `src/styles/global.css` via `@import "tailwindcss"`.
- Path aliases come from `tsconfig.json`: `@layouts/*`, `@components/*`, `@assets/*`, `@utils/*`.
- The site relies on static assets from `public/` and SVG imports from `src/assets/`.

## Quirks Worth Knowing
- `npm run build` currently succeeds but emits a CSS warning from `src/styles/global.css` because the file uses `::root` instead of `:root`.
- There are two similarly misspelled utility files, `src/utils/constains.ts` and `src/utils/contants.ts`; check imports carefully before renaming or editing either.
- `src/pages/FAQPage.astro` builds to `/FAQPage/` with the uppercase route name because the filename is capitalized.

## Deployment
- `dockerfile.prod` builds the static Astro site and serves `dist/` from nginx on port `8080` using `nginx/nginx.conf`.
