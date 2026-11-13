import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleAlert, Info, Lightbulb } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import { GLOSSARY, GLOSSARY_REVIEWED, getTerm, glossaryHref, termLabel, type GlossaryTerm } from "@/content/glossary";
import { formatDate } from "@/content/blog";
import { definedTermLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => GLOSSARY.map((t) => ({ slug: t.slug }));

// First sentence of the definition, topped up to a useful length for search snippets.
const metaDescription = (t: GlossaryTerm) => {
  if (t.metaDescription) return t.metaDescription;
  const first = t.definition.match(/^.+?\.(\s|$)/)?.[0].trim() ?? t.definition;
  return first.length >= 110 ? first : `${first} Meaning, rules and examples, explained simply.`;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTerm((await params).slug);
  if (!t) return {};
  return pageMetadata({
    title: t.metaTitle ?? `${termLabel(t)}: Meaning & Rules`,
    description: metaDescription(t),
    path: glossaryHref(t.slug),
  });
}

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTerm((await params).slug);
  if (!t) notFound();
  const path = glossaryHref(t.slug);
  // Declared related terms plus terms that point here, so every related link is two-way.
  const backlinks = GLOSSARY.filter((o) => o.related.includes(t.slug) && !t.related.includes(o.slug)).map((o) => o.slug);
  const related = [...t.related, ...backlinks].slice(0, 12).map(getTerm).filter((r): r is GlossaryTerm => Boolean(r));

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <JsonLd data={definedTermLd({ term: t.term, abbr: t.abbr, definition: t.definition, path })} />
      <PageHero crumbs={[{ name: "Glossary", path: "/glossary" }, { name: t.abbr ?? t.term, path }]} eyebrow={`Glossary · ${t.category}`} title={t.question}>
        <p className="mt-4 text-sm text-ink-muted">
          Reviewed <time dateTime={GLOSSARY_REVIEWED}>{formatDate(GLOSSARY_REVIEWED)}</time> by Ranga &amp; Company
        </p>
      </PageHero>

      <div className="mt-10 max-w-[760px]">
        <p className="rounded-3xl border border-brand/20 bg-brand-soft p-6 text-[19px] leading-relaxed text-ink">
          <strong className="font-semibold">{t.abbr ?? t.term}:</strong> {t.definition}
        </p>

        <section aria-labelledby="at-a-glance" className="mt-8">
          <h2 id="at-a-glance" className="text-xs font-medium uppercase tracking-wider text-ink-muted">At a glance</h2>
          <dl className="mt-3 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {t.facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-5 py-3.5 min-[560px]:grid-cols-[200px_minmax(0,1fr)] min-[560px]:gap-4">
                <dt className="text-sm text-ink-muted">{k}</dt>
                <dd className="text-[15px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="prose-rc mt-4">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paras?.map((p) => <p key={p}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              {s.steps && <ol>{s.steps.map((b) => <li key={b}>{b}</li>)}</ol>}
              {s.table && (
                <div className="overflow-x-auto rounded-2xl border border-line">
                  <table>
                    <thead><tr>{s.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{s.table.rows.map((r) => <tr key={r.join("|")}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              {s.note && (
                <p className="flex gap-3 rounded-2xl bg-paper px-4 py-3 text-[15px]">
                  <Info aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  <span>{s.note}</span>
                </p>
              )}
            </section>
          ))}
        </div>

        {t.example && (
          <aside aria-label="Example" className="card mt-10 flex gap-4 p-6">
            <Lightbulb aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-[16px] leading-relaxed text-ink-body"><strong className="text-ink">Example:</strong> {t.example}</p>
          </aside>
        )}

        {t.mistakes && (
          <section aria-labelledby="mistakes" className="mt-14">
            <h2 id="mistakes" className="text-title font-medium text-ink">Common mistakes</h2>
            <ul className="mt-5 space-y-3">
              {t.mistakes.map((m) => (
                <li key={m} className="flex gap-3 text-[16px] leading-relaxed text-ink-body">
                  <CircleAlert aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-rose-500" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="term-faq" className="mt-14">
          <h2 id="term-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
          <FaqList faqs={t.faqs} />
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-terms" className="mt-14">
            <h2 id="related-terms" className="text-xl font-medium text-ink">Related terms</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={glossaryHref(r.slug)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors ease-spring hover:border-brand hover:text-brand">
                    {termLabel(r)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/glossary" className="inline-block rounded-full px-4 py-2 text-sm font-medium text-brand hover:underline">All terms →</Link>
              </li>
            </ul>
          </section>
        )}
      </div>

      <RelatedLinks services={t.services} pinnedPosts={t.posts} heading="Get help with this" maxPosts={3} />
      <CtaBand />
    </main>
  );
}
