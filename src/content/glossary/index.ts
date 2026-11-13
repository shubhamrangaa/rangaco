import { SERVICES } from "../services";
import { POSTS } from "../blog";
import { INCOME_TAX_BASICS } from "./income-tax-basics";
import { INCOME_TAX_FILING } from "./income-tax-filing";
import { GST_TERMS } from "./gst";
import { BUSINESS_TERMS } from "./business";
import { PROPERTY_TERMS } from "./property";
import type { GlossaryCategory, GlossaryTerm } from "./types";

export type { GlossaryCategory, GlossarySection, GlossaryTerm } from "./types";

/** Date the glossary was last reviewed for accuracy; update when terms are re-checked. */
export const GLOSSARY_REVIEWED = "2026-11-14";

export const GLOSSARY: GlossaryTerm[] = [...INCOME_TAX_BASICS, ...INCOME_TAX_FILING, ...GST_TERMS, ...BUSINESS_TERMS, ...PROPERTY_TERMS];

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = ["Income tax", "GST", "TDS & TCS", "Business & audit", "Property & capital gains"];

export const glossaryHref = (slug: string) => `/glossary/${slug}`;
export const getTerm = (slug: string) => GLOSSARY.find((t) => t.slug === slug);
export const termLabel = (t: GlossaryTerm) => (t.abbr ? `${t.term} (${t.abbr})` : t.term);
export const sortedGlossary = () => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));

// Build-time integrity check: a typo in a slug fails the build instead of shipping a dead link.
{
  const slugs = new Set<string>();
  const services = new Set(SERVICES.map((s) => s.slug));
  const posts = new Set(POSTS.map((p) => p.href));
  const problems: string[] = [];
  for (const t of GLOSSARY) {
    if (slugs.has(t.slug)) problems.push(`duplicate slug ${t.slug}`);
    slugs.add(t.slug);
  }
  for (const t of GLOSSARY) {
    t.related.forEach((r) => !slugs.has(r) && problems.push(`${t.slug}: unknown related term ${r}`));
    t.services.forEach((s) => !services.has(s) && problems.push(`${t.slug}: unknown service ${s}`));
    t.posts?.forEach((p) => !posts.has(p) && problems.push(`${t.slug}: unknown post ${p}`));
    if (t.faqs.length < 2) problems.push(`${t.slug}: needs at least 2 FAQs`);
  }
  if (problems.length) throw new Error(`Glossary content errors:\n${problems.join("\n")}`);
}
