import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import { AUTHORS, authorHref, formatDate, postsBy, type Author } from "@/content/blog";
import { absoluteUrl, pageMetadata, personLd } from "@/lib/seo";

const PEOPLE: Author[] = Object.values(AUTHORS).filter((a) => a.kind === "Person");
const find = (slug: string) => PEOPLE.find((a) => a.slug === slug);

export const dynamicParams = false;
export const generateStaticParams = () => PEOPLE.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const author = find((await params).slug);
  if (!author) return {};
  return pageMetadata({
    title: `${author.name}, Author`,
    description: `${author.name} writes Ranga & Company's plain-English guides to income tax, GST and choosing a tax professional in Jodhpur.`,
    path: authorHref(author),
    type: "profile",
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const author = find((await params).slug);
  if (!author) notFound();
  const path = authorHref(author);
  const posts = postsBy(author);

  return (
    <main className="bg-paper">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl(path),
          mainEntity: personLd(author, path),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-28 min-[760px]:pt-32">
        <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: author.name, path }]} />

        <header className="card flex flex-col gap-6 p-8 min-[640px]:flex-row min-[640px]:items-center">
          {author.image ? (
            <Image src={author.image} alt={author.name} width={112} height={112} priority className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-brand-soft" />
          ) : (
            <span aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-soft text-2xl font-bold text-brand">
              {author.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          )}
          <div>
            <h1 className="text-title font-medium text-ink">{author.name}</h1>
            <p className="mt-1 text-ink-muted">{author.role}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {author.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="me noopener" className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-3 py-1 text-sm text-ink transition-colors hover:border-brand hover:text-brand">
                    {l.label} <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section aria-labelledby="about-author" className="mt-12">
          <h2 id="about-author" className="text-xl font-medium text-ink">About {author.name.split(" ")[0]}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink-body">{author.bio}</p>
          {author.education && (
            <>
              <h3 className="mt-8 text-sm font-medium uppercase tracking-wider text-ink-muted">Education</h3>
              <ul className="mt-3 space-y-2">
                {author.education.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-ink"><GraduationCap aria-hidden="true" className="h-4 w-4 text-brand" />{e}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        <section aria-labelledby="author-posts" className="mt-12">
          <h2 id="author-posts" className="text-xl font-medium text-ink">Articles by {author.name}</h2>
          <ul className="mt-4 grid gap-3">
            {posts.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="card card-hover group block p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{p.category} · <time dateTime={p.published}>{formatDate(p.published)}</time></span>
                  <span className="mt-2 block text-[18px] font-medium leading-snug text-ink group-hover:text-brand">{p.title}</span>
                  <span className="mt-2 line-clamp-2 block text-[15px] text-ink-muted">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
