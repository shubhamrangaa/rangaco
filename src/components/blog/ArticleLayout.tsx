import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, RefreshCw } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import { authorHref, formatDate, type Post } from "@/content/blog";
import type { Faq } from "@/content/faqs";
import { articleLd, pageMetadata } from "@/lib/seo";
import AuthorBadge from "./AuthorBadge";

export type TocItem = { id: string; label: string };

export const postMetadata = (post: Post): Metadata =>
  pageMetadata({
    title: post.metaTitle ?? post.title,
    absoluteTitle: post.absoluteTitle,
    description: post.description,
    path: post.href,
    image: post.image,
    type: "article",
    publishedTime: post.published,
    modifiedTime: post.updated ?? post.published,
    authors: [post.author.links[0]?.href ?? ""],
  });

type Props = {
  post: Post;
  toc: TocItem[];
  takeaways?: React.ReactNode[];
  faqs: Faq[];
  children: React.ReactNode;
};

export default function ArticleLayout({ post, toc, takeaways, faqs, children }: Props) {
  const showUpdated = post.updated && post.updated !== post.published;
  const fullToc: TocItem[] = [
    ...(takeaways ? [{ id: "key-takeaways", label: "Key takeaways" }] : []),
    ...toc,
    ...(faqs.length ? [{ id: "faq", label: "Frequently asked questions" }] : []),
  ];

  return (
    <main className="bg-paper">
      <JsonLd data={articleLd(post, authorHref(post.author))} />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
        <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: post.href }]} />

        <header className="max-w-4xl">
          <span className="inline-block rounded-full border border-line bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
            {post.category}
          </span>
          <h1 className="mt-5 text-display font-normal text-ink">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lede text-ink-muted">{post.description}</p>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            <div className="flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              <dt>Published</dt>
              <dd><time dateTime={post.published}>{formatDate(post.published)}</time></dd>
            </div>
            {showUpdated && (
              <div className="flex items-center gap-1.5">
                <RefreshCw aria-hidden="true" className="h-4 w-4" />
                <dt>Updated</dt>
                <dd><time dateTime={post.updated}>{formatDate(post.updated!)}</time></dd>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-4 w-4" />
              <dt className="sr-only">Reading time</dt>
              <dd>{post.readMinutes} min read</dd>
            </div>
          </dl>
          <div className="mt-6"><AuthorBadge author={post.author} /></div>
        </header>

        {post.image && (
          <Image
            src={post.image}
            alt=""
            width={1600}
            height={840}
            priority
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="mt-10 w-full rounded-3xl border border-line"
          />
        )}

        <div className="mt-12 grid gap-12 min-[1024px]:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden min-[1024px]:block">
            <nav aria-label="On this page" className="sticky top-28 text-sm">
              <p className="mb-3 font-medium text-ink">On this page</p>
              <ul className="space-y-2 border-l border-line">
                {fullToc.map((t) => (
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
                {fullToc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-ink-muted hover:text-ink">{t.label}</a></li>
                ))}
              </ul>
            </details>

            {takeaways && (
              <section id="key-takeaways" aria-labelledby="key-takeaways-heading" className="card scroll-mt-28 p-6 min-[760px]:p-8">
                <h2 id="key-takeaways-heading" className="text-title font-medium text-ink">Key takeaways</h2>
                <ul className="mt-4 space-y-3 text-[17px] leading-relaxed text-ink-body">
                  {takeaways.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <article className="prose-rc mt-4">{children}</article>

            {faqs.length > 0 && (
              <section aria-labelledby="faq" className="mt-16">
                <h2 id="faq" className="mb-6 scroll-mt-28 text-title font-medium text-ink">Frequently asked questions</h2>
                <FaqList faqs={faqs} />
              </section>
            )}

            <div className="card mt-16 p-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">About the author</p>
              <AuthorBadge author={post.author} />
              {post.author.kind === "Person" && (
                <Link href={authorHref(post.author)} className="mt-4 inline-block text-sm font-medium text-brand">
                  More from {post.author.name.split(" ")[0]} →
                </Link>
              )}
            </div>
          </div>
        </div>

        <RelatedLinks services={post.services} currentHref={post.href} />
        <CtaBand />
      </div>
    </main>
  );
}
