import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import Cta from "@/components/ui/Cta";
import { getService, serviceHref } from "@/content/services";
import { SITE, telHref, whatsappHref, yearsInPractice } from "@/content/site";
import { formatDate } from "@/content/blog";
import { itrHref, latestItrYear, type ItrYear } from "@/content/itr-years";
import { pageMetadata } from "@/lib/seo";
import Countdown from "./Countdown";

export const itrYearMetadata = (y: ItrYear): Metadata =>
  pageMetadata({
    title: `ITR Filing ${y.year} Jodhpur: AY ${y.ay} Due Dates`,
    description: y.intro.length <= 160 ? y.intro : `${y.intro.slice(0, 157).replace(/\s+\S*$/, "")}…`,
    path: itrHref(y.year),
  });

const STEPS = [
  ["Upload documents", "On WhatsApp or by email."],
  ["Expert review", "We check every income source against your AIS and Form 26AS."],
  ["Tax optimisation", "Both regimes compared; every eligible deduction applied."],
  ["Your approval", "You see the computation before anything is filed."],
  ["E-filing & e-verification", "Usually within one working day of complete documents."],
  ["Post-filing support", "Help with refunds and processing notices for a year."],
];

const DOCUMENTS = [
  "PAN and Aadhaar (linked)",
  "Form 16 (Parts A & B) or salary slips",
  "Annual Information Statement (AIS) and Form 26AS",
  "Bank statements and interest certificates",
  "Capital-gains statements from your broker",
  "Rent receipts or HRA proofs",
  "Investment proofs for 80C, 80D, NPS (old regime)",
];

export default function ItrYearGuide({ year }: { year: ItrYear }) {
  const latest = latestItrYear();
  const isArchive = latest.year !== year.year;
  const itrService = getService("itr-filing-jodhpur");
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: itrService.name, path: serviceHref(itrService.slug) },
          { name: `ITR filing ${year.year}`, path: itrHref(year.year) },
        ]}
        eyebrow={`FY ${year.fy} · AY ${year.ay}`}
        title={`ITR filing in Jodhpur ${year.year} (AY ${year.ay})`}
        lede={year.intro}
      >
        {isArchive ? (
          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-[15px] text-amber-900">
            This guide covers AY {year.ay} and is kept for reference. For the current year, see the{" "}
            <Link href={itrHref(latest.year)} className="font-medium underline underline-offset-4">ITR filing {latest.year} guide</Link>.
          </p>
        ) : (
          <Countdown deadlines={year.deadlines} />
        )}
        <div className="mt-8 flex flex-col gap-3 min-[520px]:flex-row">
          <Cta href={whatsappHref(`Hi, I need help filing my ITR for AY ${year.ay}.`)} icon="whatsapp">Send documents on WhatsApp</Cta>
          <Cta href={telHref} variant="soft" icon="phone">Call now</Cta>
        </div>
      </PageHero>

      <div className="prose-rc mt-16 max-w-[740px]">
        <h2 id="deadlines">ITR due dates for AY {year.ay}</h2>
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table>
            <thead><tr><th>Who / what</th><th>Due date</th><th>Note</th></tr></thead>
            <tbody>
              {year.deadlines.map((d) => (
                <tr key={d.label}>
                  <td>{d.label}</td>
                  <td className="whitespace-nowrap"><time dateTime={d.date}>{formatDate(d.date)}</time></td>
                  <td>{d.note ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why-us">Why file with Ranga &amp; Company?</h2>
        <ul>
          <li><strong>{yearsInPractice()}+ years</strong> of tax filing in Jodhpur, since {SITE.foundingYear}.</li>
          <li><strong>End-to-end support:</strong> computation, filing, e-verification and notices.</li>
          <li><strong>Both regimes compared</strong> before we file.</li>
          <li><strong>Wide coverage:</strong> clients across Jodhpur, Pali, Bikaner, Barmer, Nagaur and Osian.</li>
        </ul>

        <h2 id="how-it-works">How our online ITR process works</h2>
        <ol>
          {STEPS.map(([t, b]) => <li key={t}><strong>{t}:</strong> {b}</li>)}
        </ol>

        <h2 id="documents">Documents you&apos;ll need</h2>
        <ul className="!list-none !pl-0">
          {DOCUMENTS.map((d) => (
            <li key={d} className="flex items-start gap-2"><CircleCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand" />{d}</li>
          ))}
        </ul>

        <h2 id="pricing">Fees</h2>
        {year.pricing ? (
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table>
              <thead><tr><th>Return type</th><th>Fee for AY {year.ay}</th></tr></thead>
              <tbody>{year.pricing.map((r) => <tr key={r.type}><td>{r.type}</td><td>{r.fee}</td></tr>)}</tbody>
            </table>
          </div>
        ) : (
          <p>ITR filing starts at <strong>{itrService.price.replace("From ", "")}</strong>. See <Link href={serviceHref(itrService.slug)}>ITR filing in Jodhpur</Link> for what&apos;s included.</p>
        )}

        {year.sources && (
          <>
            <h2 id="sources">Sources</h2>
            <ul>{year.sources.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener">{s.label}</a></li>)}</ul>
          </>
        )}
      </div>

      <section aria-labelledby="itr-faq" className="mt-16 max-w-[740px]">
        <h2 id="itr-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
        <FaqList faqs={year.faqs} />
      </section>

      <RelatedLinks services={["itr-filing-jodhpur", "income-tax-advisory-jodhpur", "income-tax-notice-reply-jodhpur"]} heading="Related services and guides" maxPosts={2} />
      <CtaBand />
    </main>
  );
}
