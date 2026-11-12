import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { POSTS, formatDate } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Tax & Compliance Blog for Jodhpur | Ranga & Company",
  description:
    "Guides and comparisons on income tax, GST and compliance for individuals and businesses in Jodhpur, from Ranga & Company.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[700px]:pt-32">
        <h1 className="text-display font-normal text-ink">Blog</h1>
        <p className="mt-4 max-w-2xl text-lede text-ink-muted">
          Plain-English guides to income tax, GST and compliance for Jodhpur.
        </p>

        <div className="mt-12 grid gap-6 min-[700px]:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-brand"
            >
              {p.image && (
                <Image src={p.image} alt="" width={800} height={420} className="w-full border-b border-line" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{p.category}</span>
                <h2 className="mt-2 text-xl font-medium leading-snug text-ink group-hover:text-brand">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ink-muted">{p.description}</p>
                <p className="mt-auto pt-4 text-sm text-ink-muted">
                  <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.readMinutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
