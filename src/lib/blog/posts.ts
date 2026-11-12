export const SITE_URL = "https://rangaco.com";

export type Author = {
  kind: "Person" | "Organization";
  name: string;
  bio: string;
  url: string;
};

export type Post = {
  href: string;
  title: string;
  description: string;
  category: string;
  published: string; // ISO date
  updated?: string; // ISO date, only when the post changed after publishing
  readMinutes: number;
  image?: string;
  author: Author;
};

export const AUTHORS = {
  shubham: {
    kind: "Person",
    name: "Shubham Ranga",
    bio: "B.Tech in Computer Science. Writes on tax and compliance for Ranga & Company.",
    url: "https://www.linkedin.com/in/shubhamrangaa/",
  },
  team: {
    kind: "Organization",
    name: "Ranga & Company",
    bio: "Tax consultants in Jodhpur since 1988.",
    url: SITE_URL,
  },
} satisfies Record<string, Author>;

// Newest first. The blog index, sitemap and article headers all read from here.
export const POSTS: Post[] = [
  {
    href: "/blog/top-ca-firms-in-jodhpur",
    title:
      "8 Best CA Firms & Tax Consultants in Jodhpur (2026): Fees, Google Reviews & How to Choose",
    description:
      "Compare 8 Jodhpur CA firms and tax consultants on services, pricing model and Google ratings, with a checklist for choosing the right one for ITR, GST and audit work.",
    category: "Comparisons",
    published: "2026-11-13",
    readMinutes: 12,
    image: "/blog/top-ca-firms-in-jodhpur.jpg",
    author: AUTHORS.shubham,
  },
  {
    href: "/small-business-itr-jodhpur",
    title: "Small-Business ITR Filing in Jodhpur: Presumptive 44AD/44ADA Guide",
    description:
      "Regular books vs presumptive 44AD/44ADA, audit triggers, ITR-3 vs ITR-4, deadlines and documents for Jodhpur traders and SMEs.",
    category: "Guides",
    published: "2025-08-10",
    readMinutes: 10,
    author: AUTHORS.team,
  },
  {
    href: "/itr-filing-2025-jodhpur",
    title: "ITR Filing in Jodhpur 2025: Forms, Documents & Deadlines",
    description:
      "Which ITR form to use, documents, deadlines and penalties for individuals filing income tax returns in Jodhpur.",
    category: "Guides",
    published: "2025-08-06",
    readMinutes: 8,
    author: AUTHORS.team,
  },
];

export const getPost = (href: string) => {
  const post = POSTS.find((p) => p.href === href);
  if (!post) throw new Error(`Unknown post ${href}`);
  return post;
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
