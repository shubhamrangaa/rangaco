import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/services/ServiceIcon";
import { getService, serviceHref } from "@/content/services";
import { POSTS, type Post } from "@/content/blog";

type Props = {
  /** Service slugs to feature. */
  services: string[];
  /** Exclude this href from the posts list (the current page). */
  currentHref?: string;
  heading?: string;
  maxPosts?: number;
  /** Post hrefs to show first, in this order. */
  pinnedPosts?: string[];
};

/** The interlinking block used at the bottom of articles and service pages. */
export default function RelatedLinks({ services, currentHref, heading = "Keep reading", maxPosts = 3, pinnedPosts = [] }: Props) {
  // Most topically related first (shared services), newest as the tie-break (POSTS is newest-first).
  const overlap = (p: Post) => p.services.filter((s) => services.includes(s)).length;
  const pin = (p: Post) => (pinnedPosts.includes(p.href) ? pinnedPosts.length - pinnedPosts.indexOf(p.href) : 0);
  const posts: Post[] = POSTS.filter((p) => p.href !== currentHref)
    .map((p, i) => ({ p, i }))
    .sort((a, b) => pin(b.p) - pin(a.p) || overlap(b.p) - overlap(a.p) || a.i - b.i)
    .slice(0, maxPosts)
    .map(({ p }) => p);
  return (
    <section aria-labelledby="related-heading" className="mt-24">
      <h2 id="related-heading" className="text-title font-medium text-ink">{heading}</h2>

      {services.length > 0 && (
        <>
          <p className="mt-8 text-xs font-medium uppercase tracking-wider text-ink-muted">Related services</p>
          <ul className="mt-3 grid gap-3 min-[760px]:grid-cols-3">
            {services.map((slug) => {
              const s = getService(slug);
              return (
                <li key={slug}>
                  <Link href={serviceHref(slug)} className="card card-hover group flex h-full items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1 font-medium text-ink group-hover:text-brand">
                        {s.name} in Jodhpur
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 opacity-0 transition-[opacity,transform] ease-spring group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">{s.price}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {posts.length > 0 && (
        <>
          <p className="mt-10 text-xs font-medium uppercase tracking-wider text-ink-muted">From the blog</p>
          <ul className="mt-3 grid gap-3 min-[760px]:grid-cols-3">
            {posts.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="card card-hover group block h-full p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{p.category}</span>
                  <span className="mt-2 block font-medium leading-snug text-ink group-hover:text-brand">{p.title}</span>
                  <span className="mt-2 line-clamp-2 block text-sm text-ink-muted">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">All articles →</Link>
        </>
      )}
    </section>
  );
}
