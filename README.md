# Anish — AI & Full-Stack Engineering Portfolio

A complete Next.js App Router portfolio with a custom engineering-studio design, four project case studies, dark/light themes, and an original SVG/CSS system diagram. Pages are statically rendered and export to `out/`.

## Run locally

Requirements: Node.js 22 LTS or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. In PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run lint
npm run typecheck
npm run build
```

`npm run build` creates the static website in `out/`. Deploy that directory manually to Vercel, Netlify, GitHub Pages, Cloudflare Pages, or another host you control. Use `npm run preview` after building to serve the production files locally.

## Personalize before sharing publicly

1. Copy `.env.example` to `.env.local` and set your real domain, GitHub, LinkedIn, and email. These are public, build-time values; restart the dev server or rebuild after changing them. Defaults and profile information live in `lib/config.ts`.
2. Place your actual resume at **`public/resume.pdf`**. Resume buttons display an availability message until this file exists. Never place an empty or fake PDF there.
3. Add the actual employer and employment dates in `data/experience.ts`. Empty fields are omitted from the page.
4. Add any shareable project repository/live URLs in `data/projects.ts`. Review the contribution summaries against your exact responsibilities. No company names, employment dates, metrics, client names, testimonials, or project links are fabricated.
5. Replace `https://your-domain.com` through `NEXT_PUBLIC_SITE_URL` for correct canonical URLs, the sitemap, and Person structured data.

## Contact form

The site deliberately has no fake email backend. Without `NEXT_PUBLIC_CONTACT_ENDPOINT`, the form explains that delivery is not connected and never claims to send a message. Email and social buttons use real configured values or show an honest availability notice.

To activate delivery, supply an HTTPS endpoint you control or a compatible form service that accepts JSON:

```json
{ "name": "Name", "email": "person@example.com", "message": "Message" }
```

The endpoint must allow your portfolio origin via CORS and return a successful 2xx response only after accepting delivery. It should perform server-side input validation, rate limiting, and spam protection. The client includes required fields, length limits, a honeypot, duplicate-submission prevention, a 15-second timeout, and explicit error handling. Configure provider API keys as **server-only environment variables in your endpoint**, never `NEXT_PUBLIC_*` values. The static portfolio cannot keep secrets or run an email service.

## Structure

- `app/` — shared layout, homepage, project routes, not-found page, theme styles, SVG favicon, robots, sitemap.
- `components/` — navigation, profile links, hero/system diagram, project illustrations, sections, contact form, footer, scroll reveal.
- `data/` — typed projects, skills, learning roadmap, professional experience, navigation.
- `lib/config.ts` — central profile and public environment configuration.
- `public/` — static assets; put your resume here.
- `tests/` — browser checks for routes, mobile widths, navigation, themes, contact states, and accessibility.

## Design & behavior

Charcoal, mint/cyan, technical diagrams, editorial typography, custom project visualizations, and restrained CSS motion. Illustrations are conceptual and do not impersonate actual product screenshots. No stock images, fabricated dashboards, large animation dependency, or remote font requests.

Dark is the default theme. A theme toggle persists locally when storage is available. The inline theme bootstrap avoids a theme flash. Reduced-motion settings disable nonessential animations. Navigation supports keyboard focus, Escape, outside clicks, and mobile layouts. Main content is server rendered; only interactive controls and progressive scroll reveals require client JavaScript.

## Browser checks

```sh
npm run test:e2e
```

Tests use the locally installed Chrome channel. Alternatively run `npx playwright install chromium` and remove `channel: "chrome"` in `playwright.config.ts`. Screenshots and test reports are ignored by Git. On Windows, start `npm run preview` in a separate terminal first so the test runner reuses it.

The installed Next.js lint toolchain currently includes a development-only `braces` advisory (through `fast-glob`). npm's suggested forced fix downgrades the Next.js ESLint configuration by two major versions; it has intentionally not been applied. These lint dependencies are not shipped in the static website. Recheck with `npm audit` as upstream releases become available.

## Deployment ownership

This repository is a standalone Next.js project with no automatic deployment integration. Deployment happens only through the provider and account you choose.

## Optional next steps

Supply genuine project screenshots, add your real PDF and contact details, connect the form, and point your custom domain at your chosen host. The implementation intentionally avoids adding analytics or third-party tracking.
