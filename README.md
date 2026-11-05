# Plaban Roy · Generative AI Solution Architect

Personal portfolio site for Plaban Roy, built with Next.js (App Router), TypeScript, Tailwind CSS v4 and shadcn/ui.

Sections: hero, about, core expertise, featured solutions, experience timeline with recent writing, certifications and skills, and contact. The site ships with dark mode (default, with a light toggle), responsive layouts, SEO metadata, Open Graph image, JSON-LD `Person` schema, `robots.txt` and `sitemap.xml`.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:43127
```

Production build:

```bash
npm run build
npm start        # http://localhost:43127
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, the sitemap and Open Graph tags point to the right place.

## Editing content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts). Lines marked `// CONFIRM:` are inferred or placeholder content.

Public sources used: [about.me/plaban_roy](https://about.me/plaban_roy), [Medium @plabroy](https://medium.com/@plabroy), [GitHub plabanroyaiwizard](https://github.com/plabanroyaiwizard) (certificates repo), and the Corporations Canada registry entry for OmCare AI Inc. The LinkedIn profile could not be fetched.

## Content that needs Plaban's confirmation

- **Headline title**: "Solution Architect, Generative AI" (his Medium byline says "Senior Data Engineer · Architecting AI Systems for Enterprise Analytics").
- **Email**: `hello@plabanroy.ai` is a placeholder.
- **Domain**: `https://plabanroy.ai` is a placeholder (`site.url`).
- **Availability badge**: "Open to GenAI architecture roles and advisory work".
- **Hero stats**: "1M+", "~60%" and "3 industries" are drawn from his articles, not verified project metrics.
- **Sanofi role**: exact title, start date, and how much of the regulatory document intelligence work can be described publicly.
- **OmCare AI Inc.**: title (Founder & Director assumed) and dates (registered July 2024; end date unknown).
- **Earlier experience**: employers, titles and dates before OmCare.AI are not public; the "Software Engineer, Machine Learning" entry is generic.
- **Polypharmacy case study**: whether it was built at OmCare.AI and how to describe it.
- **Certifications**: the listed items are course certificates from his GitHub repo. Add any professional cloud or AI certifications he holds.
- **Skills**: the GenAI and agentic skills are inferred from his writing.
- **Photo**: the site uses "PR" initials; add a headshot if preferred.
