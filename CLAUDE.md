See README.md for structure, commands and conventions. Key rules:

- Copy and business facts live in `src/content/*`; don't hard-code phone numbers, prices or addresses in components.
- Build page metadata with `pageMetadata()` / `postMetadata()` / `serviceMetadata()` from `src/lib/seo.ts`.
- Ranga & Company is a tax consultancy working with a partner CA firm. Never call it a CA firm, and never invent reviews, ratings, client counts or registration numbers.
- Run `npm run check` before pushing; pushing to `main` deploys to production on Vercel.
