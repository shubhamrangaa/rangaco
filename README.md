# Ranga & Company website

Marketing site for Ranga & Company, tax consultants in Jodhpur. Live at <https://rangaco.com>.

Next.js 16 (App Router, fully static) · React 19 · Tailwind CSS 4 · TypeScript · deployed on Vercel from `main`.

## Commands

```bash
npm run dev        # local dev server on http://localhost:3000
npm run check      # lint + typecheck + production build (run before pushing)
npm run audit:seo  # crawl the built site: broken links, orphans, headings, metadata
```

## How the code is organised

```
src/
  content/     All copy and business facts as typed data. Start here for most edits.
    site.ts        name, phone, WhatsApp, address, founding year, nav
    services.ts    the 10 services: slug, H1, meta title/description, price, related links
    blog.ts        authors and posts registry (drives /blog, author pages, sitemap)
    itr-years.ts   one entry per assessment year for the yearly ITR guides
    faqs.ts        homepage FAQs
    testimonials.ts  real, attributable client quotes only
    calendar.ts    statutory due dates for the homepage infographics
  lib/seo.ts   pageMetadata() + JSON-LD builders. Every page's metadata goes through it.
  components/
    layout/    SiteHeader, MobileNav, SiteFooter, Breadcrumbs, Logo
    content/   PageHero, FaqList, RelatedLinks (interlinking block), CtaBand
    home/      homepage sections and infographics
    services/  ServicePage layout, ServiceIcon
    blog/      ArticleLayout, AuthorBadge
    itr/       ItrYearGuide template, Countdown
    ui/        Cta (link-based buttons), JsonLd
  app/         routes only; pages stay thin and read from src/content
```

## Common tasks

**Change a phone number, address or price** – edit `src/content/site.ts` or `src/content/services.ts`. Header, footer, structured data and pages update together.

**Add a blog post**
1. Add an entry to `POSTS` in `src/content/blog.ts` (newest first) with the services it should link to.
2. Create `src/app/blog/<slug>/page.tsx` using `ArticleLayout` and `postMetadata(post)` (copy an existing post).
3. Optional header image: 1600×840 JPG in `public/blog/`.

The sitemap, blog index, author page and related-links blocks pick it up automatically.

**Add next year's ITR guide** – copy the first entry in `src/content/itr-years.ts`, update dates/FAQs/sources, and create `src/app/itr-filing-<year>-jodhpur/page.tsx` (three lines; copy the previous year's). Older years automatically show an "archived" notice linking to the newest.

**Add a testimonial** – only with the client's permission; append to `src/content/testimonials.ts`.

## Conventions

- Pages are static. Keep client components (`"use client"`) to small islands (`MobileNav`, `Countdown`).
- Calls to action are real links (`tel:`, `wa.me`, internal pages) via `Cta`, so they work without JavaScript.
- Every inner page renders `Breadcrumbs` (visible trail + `BreadcrumbList` schema). One `<h1>` per page.
- Motion uses CSS only: spring curves in `globals.css` (`ease-spring*` utilities), scroll reveals via `.reveal`. Everything respects `prefers-reduced-motion`.
- Facts about the firm must be accurate: Ranga & Company is a tax consultancy; audits and certificates are signed by a partner CA firm. Don't describe the firm as a CA firm.
- Tax content quoting dates or thresholds should cite the year it applies to and be reviewed by the partner CA.
