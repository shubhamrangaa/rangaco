import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/content/PageHero";
import CtaBand from "@/components/content/CtaBand";
import { CASE_STUDIES } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Case Studies: ITR & Tax Advisory",
  description:
    "How Ranga & Company helps clients with ITR filing, capital gains and year-round tax advice: the problem, what we did and what changed.",
  path: "/case-studies",
});

export default function CaseStudiesIndex() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
        <PageHero
          crumbs={[{ name: "Case studies", path: "/case-studies" }]}
          title="Client case studies"
          lede="Real clients, real tax problems: what was wrong, what we did, and what changed."
        />

        <ul className="mt-12 grid gap-6 min-[760px]:grid-cols-2">
          {CASE_STUDIES.map((c) => (
            <li key={c.href} className="reveal">
              <article className="card card-hover group relative flex h-full flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{c.tags.join(" · ")}</span>
                <h2 className="mt-2 text-xl font-medium leading-snug text-ink">
                  <Link href={c.href} className="after:absolute after:inset-0 group-hover:text-brand">{c.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{c.description}</p>
                <p className="mt-auto pt-4 text-sm font-medium text-ink">
                  {c.client.name} <span className="font-normal text-ink-muted">· {c.client.role}</span>
                </p>
              </article>
            </li>
          ))}
        </ul>

        <CtaBand />
      </div>
    </main>
  );
}
