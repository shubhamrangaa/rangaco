import { SITE } from "./site";

export type Author = {
  slug: string;
  kind: "Person" | "Organization";
  name: string;
  role: string;
  bio: string;
  education?: string[];
  links: { label: string; href: string }[];
};

export const AUTHORS = {
  shubham: {
    slug: "shubham-ranga",
    kind: "Person",
    name: "Shubham Ranga",
    role: "Writer, Ranga & Company",
    bio: "Shubham writes Ranga & Company's guides on income tax, GST and choosing the right tax professional in Jodhpur, turning the questions clients ask most into plain-English answers.",
    education: ["B.Tech, Computer Science"],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/shubhamrangaa/" }],
  },
  team: {
    slug: "ranga-and-company",
    kind: "Organization",
    name: SITE.name,
    role: SITE.tagline,
    bio: SITE.description,
    links: [{ label: "Website", href: SITE.url }],
  },
} satisfies Record<string, Author>;

export const authorHref = (a: Author) => (a.kind === "Person" ? `/blog/author/${a.slug}` : "/about");

export type Post = {
  href: string;
  title: string;
  /** <title> without the site suffix; falls back to title. */
  metaTitle?: string;
  absoluteTitle?: boolean;
  description: string;
  category: "Comparisons" | "Guides";
  published: string; // ISO date
  updated?: string; // ISO date, only when the post changed after publishing
  readMinutes: number;
  image?: string;
  author: Author;
  /** Pinned first in the homepage "From the blog" section. */
  featured?: boolean;
  /** Service slugs this post should link to (interlinking block). */
  services: string[];
};

// Newest first. The blog index, sitemap, author pages and related-links blocks read from here.
export const POSTS: Post[] = [
  {
    href: "/blog/belated-itr-filing-31-december-2026",
    title: "Missed the ITR Deadline? How to File a Belated Return Before 31 December 2026",
    metaTitle: "Belated ITR Filing: Last Date 31 December 2026",
    description:
      "Missed the 31 July or 31 August deadline for AY 2026-27? File a belated return by 31 December 2026. Late fee, regime rules, losses and the steps, explained.",
    category: "Guides",
    published: "2026-11-13",
    readMinutes: 7,
    image: "/blog/belated-itr-filing-31-december-2026.jpg",
    author: AUTHORS.shubham,
    services: ["itr-filing-jodhpur", "income-tax-notice-reply-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    href: "/blog/gstr-9-annual-return-fy-2025-26",
    title: "GSTR-9 Annual Return for FY 2025-26: Due Date, Who Must File and Late Fees",
    metaTitle: "GSTR-9 for FY 2025-26: Due Date & Late Fee",
    description:
      "GSTR-9 for FY 2025-26 is due 31 December 2026. Who must file, the ₹2 crore exemption, when GSTR-9C applies, late fees and a reconciliation checklist.",
    category: "Guides",
    published: "2026-11-13",
    readMinutes: 7,
    image: "/blog/gstr-9-annual-return-fy-2025-26.jpg",
    author: AUTHORS.shubham,
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur", "gst-refund-assistance-jodhpur"],
  },
  {
    href: "/blog/income-tax-notice-types-and-replies",
    title: "Got an Income Tax Notice? What Each Notice Means and How to Reply",
    metaTitle: "Income Tax Notice Types and How to Reply",
    description:
      "A plain-English guide to income tax notices under sections 143(1), 139(9), 142(1), 143(2), 148A and 245: what each means, how long you have and how to reply.",
    category: "Guides",
    published: "2026-11-13",
    readMinutes: 8,
    image: "/blog/income-tax-notice-types-and-replies.jpg",
    author: AUTHORS.shubham,
    services: ["income-tax-notice-reply-jodhpur", "itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    href: "/blog/income-tax-act-2025-changes",
    title: "The Income-tax Act, 2025: What Changed From 1 April 2026",
    metaTitle: "Income-tax Act 2025: What Changed in 2026",
    description:
      "The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026. What the tax year means, what stays the same and how your next ITR is affected.",
    category: "Guides",
    published: "2026-11-13",
    readMinutes: 7,
    image: "/blog/income-tax-act-2025-changes.jpg",
    author: AUTHORS.shubham,
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur", "tds-tcs-compliance-jodhpur"],
  },
  {
    href: "/blog/property-sale-capital-gains-tax-jodhpur",
    title: "Selling Property in Jodhpur: Capital Gains Tax, TDS and How to Save Tax",
    metaTitle: "Capital Gains Tax on Property Sale in Jodhpur",
    description:
      "Selling a house or plot in Jodhpur? How capital gains are taxed, the 12.5% vs 20% indexation choice, 1% TDS for buyers, and exemptions under sections 54 and 54EC.",
    category: "Guides",
    published: "2026-11-13",
    readMinutes: 9,
    image: "/blog/property-sale-capital-gains-tax-jodhpur.jpg",
    author: AUTHORS.shubham,
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur", "tds-tcs-compliance-jodhpur"],
  },
  {
    href: "/blog/top-ca-firms-in-jodhpur",
    title: "8 Best CA Firms & Tax Consultants in Jodhpur (2026): Fees, Google Reviews & How to Choose",
    metaTitle: "8 Best CA Firms & Tax Consultants in Jodhpur (2026)",
    absoluteTitle: true,
    description:
      "Compare 8 CA firms and tax consultants in Jodhpur on services, pricing and Google ratings, plus a checklist for choosing one for ITR, GST and audits.",
    category: "Comparisons",
    published: "2026-11-13",
    readMinutes: 12,
    image: "/blog/top-ca-firms-in-jodhpur.jpg",
    featured: true,
    author: AUTHORS.shubham,
    services: ["itr-filing-jodhpur", "gst-return-filing-jodhpur", "statutory-audit-jodhpur"],
  },
  {
    href: "/blog/small-business-itr-jodhpur",
    title: "Small-Business ITR Filing in Jodhpur: Presumptive 44AD/44ADA Guide",
    metaTitle: "Small Business ITR in Jodhpur: 44AD/44ADA",
    description:
      "Regular books vs presumptive 44AD/44ADA, audit triggers, ITR-3 vs ITR-4, deadlines and documents for Jodhpur traders and small businesses.",
    category: "Guides",
    published: "2025-08-10",
    readMinutes: 10,
    image: "/blog/small-business-itr-jodhpur.jpg",
    author: AUTHORS.team,
    services: ["itr-filing-jodhpur", "accounting-payroll-jodhpur", "statutory-audit-jodhpur"],
  },
];

export const getPost = (href: string) => {
  const post = POSTS.find((p) => p.href === href);
  if (!post) throw new Error(`Unknown post ${href}`);
  return post;
};

export const postsBy = (author: Author) => POSTS.filter((p) => p.author.slug === author.slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
