import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import CalendarIsland from "@/components/gst-calendar/CalendarIsland";
import { GST_ITEMS, GST_MONTHS, eventsIn, monthCopy, monthFromSlug } from "@/content/gst-calendar";
import { monthLabel, shiftMonth, shortDate, weekday } from "@/lib/dates";
import { GST_CALENDAR_PATH, dateHref, itemHref, monthHref, monthSlug } from "@/lib/gst-calendar-urls";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ month: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => GST_MONTHS.map((m) => ({ month: monthSlug(m) }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const month = monthFromSlug((await params).month);
  if (!month) return {};
  const { title, description } = monthCopy(month);
  return pageMetadata({ title, description, path: monthHref(month) });
}

export default async function MonthPage({ params }: Params) {
  const month = monthFromSlug((await params).month);
  if (!month) notFound();
  const label = monthLabel(month);
  const copy = monthCopy(month);
  const events = eventsIn(month);
  const dates = [...new Set(events.map((e) => e.date))];
  const [prev, next] = [shiftMonth(month, -1), shiftMonth(month, 1)].map((m) => (GST_MONTHS.includes(m) ? m : null));

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[{ name: "GST calendar", path: GST_CALENDAR_PATH }, { name: label, path: monthHref(month) }]}
        eyebrow="GST calendar"
        title={`GST due dates in ${label}`}
        lede={copy.note}
      />

      <CalendarIsland month={month} />

      <section aria-labelledby="month-table" className="mt-24">
        <h2 id="month-table" className="text-title font-medium text-ink">Every GST date in {label}</h2>
        <div className="prose-rc mt-8 overflow-x-auto rounded-2xl border border-line">
          <table>
            <thead>
              <tr><th>Date</th><th>What</th><th>For the period</th><th>Who it applies to</th></tr>
            </thead>
            <tbody>
              {dates.map((d) =>
                events.filter((e) => e.date === d).map((e, i, all) => (
                  <tr key={`${d}-${e.item}-${e.variant}`}>
                    {i === 0 && (
                      <td rowSpan={all.length} className="whitespace-nowrap">
                        <Link href={dateHref(d)}>{shortDate(d)}</Link>
                        <span className="block text-sm text-ink-muted">{weekday(d)}</span>
                      </td>
                    )}
                    <td>
                      <Link href={itemHref(e.item)}>{GST_ITEMS[e.item].name}</Link>
                      <span className="block text-sm">{GST_ITEMS[e.item].plain}</span>
                    </td>
                    <td className="whitespace-nowrap">{e.period}</td>
                    <td>{e.variant ?? GST_ITEMS[e.item].who}{e.note ? `. ${e.note}` : ""}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <nav aria-label="Other months" className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[15px] font-medium">
        {prev ? (
          <Link href={monthHref(prev)} className="group inline-flex items-center gap-2 text-ink hover:text-brand">
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:-translate-x-0.5" />
            {monthLabel(prev)}
          </Link>
        ) : <span />}
        <Link href={GST_CALENDAR_PATH} className="text-brand hover:underline">Full GST calendar</Link>
        {next ? (
          <Link href={monthHref(next)} className="group inline-flex items-center gap-2 text-ink hover:text-brand">
            {monthLabel(next)}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:translate-x-0.5" />
          </Link>
        ) : <span />}
      </nav>

      <section aria-labelledby="month-faq" className="mt-24 max-w-[760px]">
        <h2 id="month-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
        <FaqList faqs={copy.faqs} />
      </section>

      <RelatedLinks services={["gst-return-filing-jodhpur", "gst-registration-jodhpur", "accounting-payroll-jodhpur"]} heading="Get help with GST" />
      <CtaBand />
    </main>
  );
}
