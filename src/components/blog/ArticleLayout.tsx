import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, Clock, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { POSTS, SITE_URL, formatDate, type Post } from "@/lib/blog/posts";

export type Faq = { q: string; a: string };
export type TocItem = { id: string; label: string };

type Props = {
  post: Post;
  toc: TocItem[];
  takeaways: React.ReactNode[];
  faqs: Faq[];
  children: React.ReactNode;
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

function AuthorBadge({ post }: { post: Post }) {
  const { author } = post;
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand"
      >
        {initials(author.name)}
      </span>
      <div className="leading-tight">
        <a
          href={author.url}
          rel="author noopener"
          target={author.kind === "Person" ? "_blank" : undefined}
          className="font-medium text-ink hover:text-brand"
        >
          {author.name}
        </a>
        <p className="text-sm text-ink-muted">{author.bio}</p>
      </div>
    </div>
  );
}

export default function ArticleLayout({ post, toc, takeaways, faqs, children }: Props) {
  const url = `${SITE_URL}${post.href}`;
  const showUpdated = post.updated && post.updated !== post.published;
  const related = POSTS.filter((p) => p.href !== post.href).slice(0, 3);
  const fullToc: TocItem[] = [
    { id: "key-takeaways", label: "Key takeaways" },
    ...toc,
    { id: "faq", label: "Frequently asked questions" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image: post.image ? [`${SITE_URL}${post.image}`] : undefined,
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        inLanguage: "en-IN",
        mainEntityOfPage: url,
        author: {
          "@type": post.author.kind,
          name: post.author.name,
          url: post.author.url,
        },
        publisher: {
          "@type": "Organization",
          name: "Ranga & Company",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512x512.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[700px]:pt-32">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
          <ol className="flex min-w-0 items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <Link href="/blog" className="hover:text-ink">Blog</Link>
            </li>
            <li aria-current="page" className="flex min-w-0 items-center gap-1.5 text-ink">
              <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{post.title}</span>
            </li>
          </ol>
        </nav>

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
              <dd>
                <time dateTime={post.published}>{formatDate(post.published)}</time>
              </dd>
            </div>
            {showUpdated && (
              <div className="flex items-center gap-1.5">
                <RefreshCw aria-hidden="true" className="h-4 w-4" />
                <dt>Updated</dt>
                <dd>
                  <time dateTime={post.updated}>{formatDate(post.updated!)}</time>
                </dd>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-4 w-4" />
              <dt className="sr-only">Reading time</dt>
              <dd>{post.readMinutes} min read</dd>
            </div>
          </dl>

          <div className="mt-6">
            <AuthorBadge post={post} />
          </div>
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

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28 text-sm">
              <p className="mb-3 font-medium text-ink">On this page</p>
              <ul className="space-y-2 border-l border-line">
                {fullToc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-ink-muted hover:border-brand hover:text-ink"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 max-w-[740px]">
            <details className="mb-8 rounded-2xl border border-line bg-white p-4 lg:hidden">
              <summary className="cursor-pointer font-medium text-ink">On this page</summary>
              <ul className="mt-3 space-y-2 text-sm">
                {fullToc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-ink-muted hover:text-ink">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <section
              id="key-takeaways"
              aria-labelledby="key-takeaways-heading"
              className="scroll-mt-28 rounded-3xl border border-line bg-white p-6 min-[700px]:p-8"
            >
              <h2 id="key-takeaways-heading" className="text-title font-medium text-ink">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3 text-[17px] leading-relaxed text-ink-body">
                {takeaways.map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <article className="article mt-4">
              {children}

              <h2 id="faq">Frequently asked questions</h2>
              {faqs.map((f) => (
                <section key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </section>
              ))}
            </article>

            <div className="mt-16 rounded-3xl border border-line bg-white p-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
                About the author
              </p>
              <AuthorBadge post={post} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-24">
            <h2 id="related-heading" className="text-title font-medium text-ink">
              Related reading
            </h2>
            <div className="mt-6 grid gap-4 min-[700px]:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-medium leading-snug text-ink group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-muted">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
