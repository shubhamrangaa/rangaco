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
  /** Service slugs this post should link to (interlinking block). */
  services: string[];
};

// Newest first. The blog index, sitemap, author pages and related-links blocks read from here.
export const POSTS: Post[] = [
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
