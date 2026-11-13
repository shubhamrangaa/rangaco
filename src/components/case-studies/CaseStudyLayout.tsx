import type { Metadata } from "next";
import { CalendarDays, RefreshCw } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import AuthorBadge from "@/components/blog/AuthorBadge";
import type { TocItem } from "@/components/blog/ArticleLayout";
import JsonLd from "@/components/ui/JsonLd";
import { authorHref, formatDate } from "@/content/blog";
import type { CaseStudy } from "@/content/case-studies";
import { articleLd, pageMetadata } from "@/lib/seo";

export const caseStudyMetadata = (c: CaseStudy): Metadata =>
  pageMetadata({
    title: c.metaTitle,
    description: c.description,
    path: c.href,
    image: c.image,
    type: "article",
    publishedTime: c.published,
    modifiedTime: c.updated ?? c.published,
    authors: [c.author.links[0]?.href ?? ""],
  });

export default function CaseStudyLayout({ study, toc, children }: { study: CaseStudy; toc: TocItem[]; children: React.ReactNode }) {
  return (
    <main className="bg-paper">
      <JsonLd data={articleLd(study, authorHref(study.author), "Article")} />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
        <PageHero
          crumbs={[{ name: "Case studies", path: "/case-studies" }, { name: study.client.name, path: study.href }]}
          eyebrow={study.tags.join(" · ")}
          title={study.title}
          lede={study.description}
        >
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            <div className="flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              <dt>Published</dt>
              <dd><time dateTime={study.published}>{formatDate(study.published)}</time></dd>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw aria-hidden="true" className="h-4 w-4" />
              <dt>Updated</dt>
              <dd><time dateTime={study.updated ?? study.published}>{formatDate(study.updated ?? study.published)}</time></dd>
            </div>
          </dl>
          <div className="mt-6"><AuthorBadge author={study.author} /></div>
        </PageHero>

        <div className="mt-12 grid gap-12 min-[1024px]:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden min-[1024px]:block">
            <nav aria-label="On this page" className="sticky top-28 text-sm">
              <p className="mb-3 font-medium text-ink">On this page</p>
              <ul className="space-y-2 border-l border-line">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-4 text-ink-muted transition-colors hover:border-brand hover:text-ink">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 max-w-[740px]">
            <details className="mb-8 rounded-2xl border border-line bg-white p-4 min-[1024px]:hidden">
              <summary className="font-medium text-ink">On this page</summary>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-ink-muted hover:text-ink">{t.label}</a></li>
                ))}
              </ul>
            </details>
            <article className="prose-rc">{children}</article>
          </div>
        </div>

        <RelatedLinks services={study.services} />
        <CtaBand title="Get your ITR filed right" body="Salary, shares, FDs or a property sale: send your documents on WhatsApp and we'll take it from there." />
      </div>
    </main>
  );
}
