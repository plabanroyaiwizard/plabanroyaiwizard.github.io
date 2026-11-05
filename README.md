# Plaban Roy · Generative AI Solution Architect

Personal portfolio site for Plaban Roy, built with Next.js (App Router), TypeScript, Tailwind CSS v4 and shadcn/ui.

Sections: hero, about, core expertise, featured solutions, experience timeline with recent writing, certifications and skills, and contact. The site ships with dark mode (default, with a light toggle), responsive layouts, SEO metadata, Open Graph image, JSON-LD `Person` schema, `robots.txt` and `sitemap.xml`.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:43127
```

Production build (static export to `out/`):

```bash
npm run build
npm start        # serves out/ at http://localhost:43127
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, the sitemap and Open Graph tags point to the right place.

## Deploy to GitHub Pages

The site builds as a fully static export, and `.github/workflows/deploy-pages.yml` publishes it on every push to `main`.

1. Push this project to a GitHub repository and merge it into `main`.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The workflow reads the Pages URL and sub-path automatically, so it works both for a project site (`https://<user>.github.io/<repo>/`) and for a user site repository named `<user>.github.io`. To use a custom domain, add it under **Settings → Pages**.

## Editing content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts). Lines marked `// CONFIRM:` are inferred or placeholder content.

Content is based on Plaban's resume (November 2026) plus his public [Medium](https://medium.com/@plabroy) and [GitHub](https://github.com/plabanroyaiwizard). Internal employer system names, site names and security specifics are described generically because the site is public; the phone number is intentionally omitted.

## Content that needs Plaban's confirmation

- **Availability badge**: "Open to AI solution architecture opportunities".
- **Document workflow case study**: a shareable outcome metric (for example review time saved or documents processed).
- **Public disclosure**: that naming Coupa, Oracle, Workday and the scale figures (about 2,000 purchase orders and 5,000+ goods receipts a day, 22 pipelines, ~106 models) is acceptable to share publicly.
- **Photo**: the site uses "PR" initials; add a headshot if preferred.
