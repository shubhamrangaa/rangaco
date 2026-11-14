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
    gst-calendar.ts  GST due dates for /gst-calendar, generated from rules (see "Roll the GST calendar forward")
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
3. Thumbnail: add `design/thumbnails/<slug>.svg` (1600×840; copy an existing one for the card/pill style) and run `npm run thumbnails` to render `public/blog/<slug>.png`. Set `image` on the post. Rendering needs a Chromium binary (`CHROME_BIN`, or `npx playwright install chromium-headless-shell`).

The sitemap, blog index, author page and related-links blocks pick it up automatically.

**Add next year's ITR guide** – copy the first entry in `src/content/itr-years.ts`, update dates/FAQs/sources, and create `src/app/itr-filing-<year>-jodhpur/page.tsx` (three lines; copy the previous year's). Older years automatically show an "archived" notice linking to the newest.

**Roll the GST calendar forward** – `/gst-calendar` (the hub, one page per calendar month such as `/gst-calendar/gst-due-dates-november`, and one per return such as `/gst-calendar/gstr-3b-due-date`) is generated from the rules in `src/content/gst-calendar.ts`. Each year, move `GST_CALENDAR_RANGE` and `GST_CALENDAR_FY`, update the year in the item `h1`s, and bump `GST_CALENDAR_REVIEWED`. URLs stay the same: each month page shows the next occurrence of its month on every deploy. When CBIC extends a date, add one line to `DATE_CHANGES`. The checks at the bottom of the file fail the build if a rule produces a wrong date.

**AI agents** – `/llms.txt` and `/index.md` (the homepage as Markdown) are route handlers in `src/app` built from `src/content`, so they update with the site. Add a new hub page to `src/app/llms.txt/route.ts` by hand.

**Add a testimonial** – only with the client's permission; append to `src/content/testimonials.ts`.

## Conventions

- Pages are static. Keep client components (`"use client"`) to small islands (`MobileNav`, `Countdown`).
- Calls to action are real links (`tel:`, `wa.me`, internal pages) via `Cta`, so they work without JavaScript.
- Every inner page renders `Breadcrumbs` (visible trail + `BreadcrumbList` schema). One `<h1>` per page.
- Motion uses CSS only: spring curves in `globals.css` (`ease-spring*` utilities), scroll reveals via `.reveal`. Everything respects `prefers-reduced-motion`.
- Never put a year in the URL of a page that recurs every year (calendars, due dates, yearly guides). Put the year in the title and H1 and update the page in place, so it keeps its rankings.
- Facts about the firm must be accurate: Ranga & Company is a tax consultancy; audits and certificates are signed by a partner CA firm. Don't describe the firm as a CA firm.
- Tax content quoting dates or thresholds should cite the year it applies to and be reviewed by the partner CA.
