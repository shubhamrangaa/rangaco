import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/content/PageHero";
import CtaBand from "@/components/content/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import { GLOSSARY_CATEGORIES, glossaryHref, sortedGlossary, termLabel } from "@/content/glossary";
import { definedTermSetLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tax & GST Glossary: 50 Terms Explained",
  description:
    "Plain-English meanings of income tax, GST, TDS, audit and property tax terms, from ITR and HRA to input tax credit, with rates, due dates and examples.",
  path: "/glossary",
});

const anchor = (c: string) => `topic-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`;

export default function GlossaryIndex() {
  const terms = sortedGlossary();
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <JsonLd data={definedTermSetLd(terms.map((t) => ({ term: t.term, path: glossaryHref(t.slug) })))} />
      <PageHero
        crumbs={[{ name: "Glossary", path: "/glossary" }]}
        title="Tax and GST glossary"
        lede={`${terms.length} terms from your tax notices, payslips and GST returns, explained in plain English with rates, due dates and examples.`}
      />

      <nav aria-label="Topics" className="mt-10 flex flex-wrap gap-2">
        {GLOSSARY_CATEGORIES.map((c) => (
          <a key={c} href={`#${anchor(c)}`} className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors ease-spring hover:border-brand hover:text-brand">
            {c} <span className="text-ink-muted">{terms.filter((t) => t.category === c).length}</span>
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-14">
        {GLOSSARY_CATEGORIES.map((c) => (
          <section key={c} id={anchor(c)} aria-labelledby={`h-${anchor(c)}`} className="scroll-mt-28">
            <h2 id={`h-${anchor(c)}`} className="text-title font-medium text-ink">{c}</h2>
            <ul className="mt-5 grid gap-3 min-[760px]:grid-cols-2 min-[1024px]:grid-cols-3">
              {terms.filter((t) => t.category === c).map((t) => (
                <li key={t.slug}>
                  <Link href={glossaryHref(t.slug)} className="card card-hover group block h-full p-5">
                    <span className="font-medium text-ink group-hover:text-brand">{termLabel(t)}</span>
                    <span className="mt-2 line-clamp-2 block text-sm text-ink-muted">{t.definition}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand />
    </main>
  );
}
