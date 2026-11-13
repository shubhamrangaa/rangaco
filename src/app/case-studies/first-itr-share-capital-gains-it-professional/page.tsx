import { Quote, Star } from "lucide-react";
import type { TocItem } from "@/components/blog/ArticleLayout";
import CaseStudyLayout, { caseStudyMetadata } from "@/components/case-studies/CaseStudyLayout";
import Cta from "@/components/ui/Cta";
import { getCaseStudy } from "@/content/case-studies";
import { whatsappHref } from "@/content/site";
import { TESTIMONIALS } from "@/content/testimonials";

const study = getCaseStudy("/case-studies/first-itr-share-capital-gains-it-professional");
export const metadata = caseStudyMetadata(study);

// Parth's published Google review. Swap for the approved long-form quote once Parth signs off.
const review = TESTIMONIALS.find((t) => t.name === "Parth C.")!;

const TOC: TocItem[] = [
  { id: "challenge", label: "The challenge" },
  { id: "solution", label: "What we did" },
  { id: "result", label: "The result" },
  { id: "before-after", label: "Before and after" },
  { id: "testimonial", label: "What Parth says" },
];

export default function Page() {
  return (
    <CaseStudyLayout study={study} toc={TOC}>
      <h2 id="challenge" className="!mt-0">The challenge</h2>
      <p>
        Parth, a salaried IT professional, came to us through an existing client. It was Parth&apos;s first ITR, and it
        wasn&apos;t a simple one.
      </p>
      <ul>
        <li>Shares bought and sold during the year, with no idea how the gains were taxed.</li>
        <li>Unsure which ITR form and which tax regime applied.</li>
        <li>Form 16 covered the salary, but the AIS also showed trades, interest and dividends.</li>
        <li>Worried a first-time mistake would lead to a notice.</li>
      </ul>

      <h2 id="solution">What we did</h2>
      <h3>Filed the ITR correctly</h3>
      <ul>
        <li>Matched Form 16, the broker&apos;s capital gains report and the AIS, line by line.</li>
        <li>Split every share sale into short-term and long-term gains.</li>
        <li>Compared both regimes on Parth&apos;s numbers and chose the right ITR form.</li>
        <li>Walked Parth through the computation before filing.</li>
      </ul>
      <h3>Stayed on call all year</h3>
      <p>After filing, Parth kept us on a retainer for questions through the year:</p>
      <ul>
        <li>A tax check before selling shares: short- or long-term, and how much of the ₹1.25 lakh yearly exemption on long-term equity gains is left.</li>
        <li>How tax-loss harvesting works, and why losses carry forward only if the ITR is filed by the due date.</li>
        <li>How FD interest, bonds, ETFs and shares are each taxed.</li>
      </ul>
      <p className="text-[15px] text-ink-muted">
        We explain the tax side of each option. We don&apos;t recommend stocks, funds or bonds; Parth makes those
        choices.
      </p>

      <h2 id="result">The result</h2>
      <ul>
        <li>First return filed on time, with salary, capital gains and other income reported.</li>
        <li>Parth understands every number in it.</li>
        <li>Tax is now a quick message before a decision, not a scramble at filing time.</li>
      </ul>

      <div className="!mt-10 rounded-3xl bg-brand-soft p-6 min-[760px]:p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-brand">Filing your ITR?</p>
        <p className="mt-2 text-[22px] font-medium leading-snug tracking-[-0.01em] text-ink">
          Salary plus shares, FDs or a property sale? We&apos;ll file it and explain every number.
        </p>
        <div className="mt-6 flex flex-col gap-3 min-[520px]:flex-row">
          <Cta href={whatsappHref("Hi, I want help filing my ITR.")} icon="whatsapp">File my ITR</Cta>
          <Cta href="/services/itr-filing-jodhpur" variant="soft" icon="arrow">See ITR filing plans</Cta>
        </div>
      </div>

      <h2 id="before-after">Before and after</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th></th><th>Before</th><th>With Ranga &amp; Company</th></tr></thead>
          <tbody>
            <tr><td>ITR</td><td>Unsure of form, regime and what to report</td><td>Right form and regime, filed on time</td></tr>
            <tr><td>Share sales</td><td>Didn&apos;t know how gains were taxed</td><td>Each sale classified and taxed correctly</td></tr>
            <tr><td>Records</td><td>Form 16 only</td><td>Form 16, broker report and AIS matched</td></tr>
            <tr><td>During the year</td><td>Tax thought about once a year</td><td>Tax check before big decisions</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="testimonial">What Parth says</h2>
      <figure className="card !mt-6 p-7">
        <div className="flex items-center justify-between">
          <Quote aria-hidden="true" className="h-7 w-7 text-brand/30" />
          <span className="flex gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />)}
          </span>
        </div>
        <blockquote className="!mt-5 !border-0 !pl-0 text-[24px] font-medium leading-snug tracking-[-0.02em] text-ink">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 border-t border-line pt-4 text-[15px]">
          <span className="block font-medium text-ink">{study.client.name}</span>
          <span className="text-ink-muted">
            {study.client.role} ·{" "}
            <a href={review.sourceUrl} target="_blank" rel="noopener">{review.context}</a>
          </span>
        </figcaption>
      </figure>

      <p className="!mt-12 border-t border-line pt-6 text-sm text-ink-muted">
        Shared with the client&apos;s permission. Tax figures apply to share sales from 23 July 2024. Ranga &amp; Company
        is a tax consultancy, not a SEBI-registered investment adviser, and nothing here is investment advice. Every
        client&apos;s situation is different.
      </p>
    </CaseStudyLayout>
  );
}
