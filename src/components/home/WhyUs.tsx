import Link from "next/link";
import { ArrowRight, Clock, Layers, Star } from "lucide-react";
import { SITE } from "@/content/site";
import SectionHeading from "./SectionHeading";

export const FEATURES = [
  { icon: Star, title: `Family-run since ${SITE.foundingYear}`, body: "Three decades of Jodhpur returns, notices and audits. You deal with the same people every year." },
  { icon: Clock, title: "One-day turnaround", body: "Most filings are completed within a single working day of receiving complete documents." },
  { icon: Layers, title: "One roof", body: "ITR, GST, TDS, payroll and notices handled together, with our partner CA firm for audits and certificates." },
];

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="why-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 min-[760px]:py-32">
      <SectionHeading id="why-heading" eyebrow="Why Ranga & Company" title="A local practice that knows your file" />
      <ul className="mt-12 grid gap-4 min-[760px]:grid-cols-3">
        {FEATURES.map((f) => (
          <li key={f.title} className="reveal card p-7">
            <f.icon aria-hidden="true" className="h-6 w-6 text-brand" />
            <h3 className="mt-6 text-[19px] font-medium text-ink">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{f.body}</p>
          </li>
        ))}
      </ul>
      <Link href="/about" className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand">
        More about us
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
