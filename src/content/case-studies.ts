import { AUTHORS, type Author } from "./blog";

// Only real clients who have agreed to be named. Body copy lives in src/app/case-studies/<slug>/page.tsx.
export type CaseStudy = {
  href: string;
  /** H1. Leads with the outcome, not the words "case study". */
  title: string;
  /** <title> without the site suffix. */
  metaTitle: string;
  description: string;
  client: { name: string; role: string };
  tags: string[];
  published: string; // ISO date
  updated?: string; // ISO date
  author: Author;
  /** Service slugs for the related-links block. */
  services: string[];
  image?: string;
};

// Newest first.
export const CASE_STUDIES: CaseStudy[] = [
  {
    href: "/case-studies/first-itr-share-capital-gains-it-professional",
    title: "How an IT professional filed a first ITR with share capital gains and stayed tax-ready all year",
    metaTitle: "First ITR With Share Capital Gains, Filed Right",
    description:
      "A salaried IT professional's first ITR had share sales to report. We filed it correctly, then stayed on retainer so every money decision got a tax check first.",
    client: { name: "Parth Chadda", role: "IT professional" },
    tags: ["ITR filing", "Capital gains", "Year-round advisory"],
    published: "2026-11-14",
    author: AUTHORS.shubham,
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur", "income-tax-notice-reply-jodhpur"],
  },
];

export const getCaseStudy = (href: string) => {
  const c = CASE_STUDIES.find((x) => x.href === href);
  if (!c) throw new Error(`Unknown case study ${href}`);
  return c;
};
