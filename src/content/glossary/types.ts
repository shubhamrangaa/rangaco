import type { Faq } from "../faqs";

export type GlossaryCategory = "Income tax" | "GST" | "TDS & TCS" | "Business & audit" | "Property & capital gains";

export type GlossarySection = {
  heading: string;
  paras?: string[];
  bullets?: string[];
  /** Rendered as a numbered list. */
  steps?: string[];
  table?: { head: string[]; rows: string[][] };
  /** A short callout under the section (caveats, Jodhpur-specific notes). */
  note?: string;
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Short form shown next to the term, e.g. "TDS". */
  abbr?: string;
  category: GlossaryCategory;
  /** Page H1, phrased as the question people search. */
  question: string;
  /** One or two sentences that answer "what is X" on their own. */
  definition: string;
  /** "At a glance" key facts: [label, value]. */
  facts: [string, string][];
  sections: GlossarySection[];
  example?: string;
  mistakes?: string[];
  faqs: Faq[];
  /** Other glossary slugs. */
  related: string[];
  /** Service slugs this term leads to. */
  services: string[];
  /** Blog post hrefs worth reading next. */
  posts?: string[];
  /** <title> without the site suffix, when the default is too long. */
  metaTitle?: string;
  /** Search snippet (110-160 chars) when the definition's first sentence doesn't fit. */
  metaDescription?: string;
};
