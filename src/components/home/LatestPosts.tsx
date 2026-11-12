import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, formatDate } from "@/content/blog";
import SectionHeading from "./SectionHeading";

export default function LatestPosts() {
  return (
    <section aria-labelledby="latest-heading" className="mx-auto max-w-6xl px-4 py-24 min-[760px]:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading id="latest-heading" eyebrow="From the blog" title="Guides for Jodhpur taxpayers" />
        <Link href="/blog" className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-brand">
          All articles <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:translate-x-1" />
        </Link>
      </div>
      <ul className="mt-12 grid gap-4 min-[760px]:grid-cols-2">
        {POSTS.slice(0, 2).map((p) => (
          <li key={p.href} className="reveal">
            <Link href={p.href} className="card card-hover group flex h-full flex-col overflow-hidden">
              {p.image && <Image src={p.image} alt="" width={800} height={420} className="w-full border-b border-line" />}
              <span className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{p.category}</span>
                <span className="mt-2 text-[19px] font-medium leading-snug text-ink group-hover:text-brand">{p.title}</span>
                <span className="mt-2 line-clamp-2 text-[15px] text-ink-muted">{p.description}</span>
                <span className="mt-auto pt-4 text-sm text-ink-muted">
                  <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.readMinutes} min read
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
