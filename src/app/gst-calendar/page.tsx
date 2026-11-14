import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import CalendarIsland from "@/components/gst-calendar/CalendarIsland";
import { formatDate } from "@/content/blog";
import {
  GST_CALENDAR_FAQS,
  GST_CALENDAR_FY,
  GST_CALENDAR_REVIEWED,
  GST_CYCLES,
  GST_FILERS,
  GST_ITEMS,
  GST_ITEM_IDS,
  GST_MONTHS,
  eventsIn,
  isDue,
} from "@/content/gst-calendar";
import { istToday, monthLabel } from "@/lib/dates";
import { GST_CALENDAR_PATH, itemHref, monthHref } from "@/lib/gst-calendar-urls";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `GST Calendar ${GST_CALENDAR_FY}: All Due Dates`,
  description: `Interactive GST calendar for FY ${GST_CALENDAR_FY}: GSTR-1, GSTR-3B, QRMP, CMP-08 and GSTR-9 due dates. See what is due today, what just passed and what comes next.`,
  path: GST_CALENDAR_PATH,
});

export default function GstCalendarPage() {
  // The month at build time; the calendar moves to the visitor's own month once it knows the date.
  const built = istToday().slice(0, 7);
  const month = GST_MONTHS.includes(built) ? built : built < GST_MONTHS[0] ? GST_MONTHS[0] : GST_MONTHS.at(-1)!;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[{ name: "GST calendar", path: GST_CALENDAR_PATH }]}
        eyebrow={`FY ${GST_CALENDAR_FY}`}
        title={`GST calendar ${GST_CALENDAR_FY}`}
        lede="Every GST due date of the year on one page: what is due today, what just passed and what comes next. Pick any date to see what it means, who it applies to and what a late filing costs."
      />

      <CalendarIsland month={month} followToday />

      <p className="mt-4 text-sm text-ink-muted">
        Standard statutory dates, reviewed <time dateTime={GST_CALENDAR_REVIEWED}>{formatDate(GST_CALENDAR_REVIEWED)}</time>. CBIC can extend any of them by
        notification; we update the calendar when it does.
      </p>

      <section aria-labelledby="cycle-heading" className="mt-24">
        <h2 id="cycle-heading" className="text-title font-medium text-ink">How the GST cycle works</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
          GST follows a fixed rhythm: report what you sold, see the credit you earned on what you bought, then pay the difference. How often you do it depends on
          how you are registered.
        </p>
        <div className="mt-8 grid gap-4 min-[900px]:grid-cols-3">
          {GST_CYCLES.map((c) => (
            <div key={c.filer} className="card reveal p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-brand">{c.rhythm}</p>
              <h3 className="mt-2 text-xl font-medium text-ink">{GST_FILERS[c.filer].label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{GST_FILERS[c.filer].who}</p>
              <ol className="mt-6">
                {c.steps.map((s, i) => (
                  <li key={s.item} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < c.steps.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-4 w-px bg-line" />}
                    <span aria-hidden="true" className="relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-brand bg-white" />
                    <span className="min-w-0 text-[15px] leading-relaxed text-ink-body">
                      <span className="block text-sm font-medium text-ink">{s.when}</span>
                      <Link href={itemHref(s.item)} className="font-medium text-brand hover:underline">{GST_ITEMS[s.item].name}</Link>: {s.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="months-heading" className="mt-24">
        <h2 id="months-heading" className="text-title font-medium text-ink">GST due dates month by month</h2>
        <ul className="mt-8 grid gap-3 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {GST_MONTHS.map((m) => {
            const due = eventsIn(m).filter(isDue);
            const yearly = [...new Set(due.filter((e) => ["year", "half-year"].includes(GST_ITEMS[e.item].every ?? "")).map((e) => GST_ITEMS[e.item].name))];
            return (
              <li key={m}>
                <Link href={monthHref(m)} className="card card-hover group flex h-full items-center justify-between gap-4 p-5">
                  <span>
                    <span className="block font-medium text-ink group-hover:text-brand">{monthLabel(m)}</span>
                    <span className="mt-1 block text-sm text-ink-muted">
                      {new Set(due.map((e) => e.date)).size} due dates{yearly.length ? ` · ${yearly.join(", ")}` : ""}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] ease-spring group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="returns-heading" className="mt-24">
        <h2 id="returns-heading" className="text-title font-medium text-ink">Due dates by return</h2>
        <ul className="mt-8 grid gap-3 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {GST_ITEM_IDS.map((id) => (
            <li key={id}>
              <Link href={itemHref(id)} className="card card-hover group block h-full p-5">
                <span className="font-medium text-ink group-hover:text-brand">{GST_ITEMS[id].name}</span>
                <span className="mt-1 block text-sm text-ink-muted">{GST_ITEMS[id].plain}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="calendar-faq" className="mt-24 max-w-[760px]">
        <h2 id="calendar-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
        <FaqList faqs={GST_CALENDAR_FAQS} />
      </section>

      <RelatedLinks
        services={["gst-return-filing-jodhpur", "gst-registration-jodhpur", "gst-refund-assistance-jodhpur"]}
        pinnedPosts={["/blog/gstr-9-annual-return-fy-2025-26"]}
        heading="Get help with GST"
      />
      <CtaBand title="Never miss a GST due date" body="We file GSTR-1 and GSTR-3B for Jodhpur businesses every month, reconciled with GSTR-2B. Send us your invoices on WhatsApp." />
    </main>
  );
}
