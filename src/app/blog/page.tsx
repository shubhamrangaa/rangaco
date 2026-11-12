import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/content/PageHero";
import { POSTS, formatDate } from "@/content/blog";
import { ITR_YEARS, itrHref } from "@/content/itr-years";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tax & GST Blog for Jodhpur",
  description:
    "Guides and comparisons on income tax, GST and choosing a CA firm or tax consultant in Jodhpur, from Ranga & Company.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
        <PageHero crumbs={[{ name: "Blog", path: "/blog" }]} title="Blog" lede="Plain-English guides to income tax, GST and compliance in Jodhpur." />

        <ul className="mt-12 grid gap-6 min-[760px]:grid-cols-2 min-[1024px]:grid-cols-3">
          {POSTS.map((p) => (
            <li key={p.href} className="reveal">
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
                {p.image && <Image src={p.image} alt="" width={800} height={420} className="w-full border-b border-line" />}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{p.category}</span>
                  <h2 className="mt-2 text-xl font-medium leading-snug text-ink">
                    <Link href={p.href} className="after:absolute after:inset-0 group-hover:text-brand">{p.title}</Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-muted">{p.description}</p>
                  <p className="mt-auto pt-4 text-sm text-ink-muted">
                    <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.readMinutes} min read
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <section aria-labelledby="yearly-guides" className="mt-20">
          <h2 id="yearly-guides" className="text-title font-medium text-ink">Yearly ITR guides</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ITR_YEARS.map((y) => (
              <li key={y.year}>
                <Link href={itrHref(y.year)} className="card card-hover inline-block px-5 py-3 font-medium text-ink">
                  ITR filing {y.year} <span className="text-ink-muted">· AY {y.ay}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
