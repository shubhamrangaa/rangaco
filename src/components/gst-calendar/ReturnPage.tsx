import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import DueBadge from "@/components/gst-calendar/DueBadge";
import { GST_FILERS, GST_ITEMS, GST_PAGE_MONTHS, QRMP_STATE_GROUPS, eventsOf, itemCopy, type GstItemId } from "@/content/gst-calendar";
import { glossaryHref } from "@/content/glossary";
import { longDate, weekday } from "@/lib/dates";
import { GST_CALENDAR_PATH, itemHref, monthHref } from "@/lib/gst-calendar-urls";

const EVERY = { quarter: "Every quarter", "half-year": "Twice a year", year: "Once a year" };

/** The page for one return or deadline, e.g. /gst-calendar/gstr-3b-due-date. */
export default function ReturnPage({ id }: { id: GstItemId }) {
  const item = GST_ITEMS[id];
  const events = eventsOf(id);
  const late = ["return", "payment"].includes(item.kind);
  const filers = [...new Set(events.flatMap((e) => e.filers))];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero crumbs={[{ name: "GST calendar", path: GST_CALENDAR_PATH }, { name: item.name, path: itemHref(id) }]} eyebrow={item.plain} title={item.h1} lede={item.what} />

      <div className="mt-10 max-w-[860px]">
        <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {[
            ["Who it applies to", item.who],
            ["When", item.when],
            ["How often", item.every ? EVERY[item.every] : "Every month"],
            [item.kind === "info" ? "Good to know" : item.kind === "optional" ? "If you skip it" : "If you miss it", item.ifMissed],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-1 px-5 py-3.5 min-[560px]:grid-cols-[170px_minmax(0,1fr)] min-[560px]:gap-4">
              <dt className="text-sm text-ink-muted">{k}</dt>
              <dd className="text-[15px] leading-relaxed text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="item-dates" className="mt-14">
          <h2 id="item-dates" className="text-title font-medium text-ink">Every {item.name} date in this calendar</h2>
          <div className="prose-rc mt-6 overflow-x-auto rounded-2xl border border-line">
            <table>
              <thead>
                <tr><th>For the period</th><th>{item.kind === "info" ? "Date" : "Due date"}</th><th>For</th><th><span className="sr-only">Status</span></th></tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr key={`${e.date}-${e.variant}`}>
                    <td className="whitespace-nowrap">{e.period}</td>
                    <td className="whitespace-nowrap">
                      {/* Link only when that month's page currently shows this year's month. */}
                      {GST_PAGE_MONTHS.includes(e.date.slice(0, 7)) ? <Link href={monthHref(e.date)}>{longDate(e.date)}</Link> : longDate(e.date)}
                      <span className="block text-sm">{weekday(e.date)}</span>
                    </td>
                    <td>{e.variant ?? e.filers.map((f) => GST_FILERS[f].label).join(", ")}{e.note ? `. ${e.note}` : ""}</td>
                    <td className="text-right"><DueBadge date={e.date} late={late} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {id === "gstr-3b" && (
          <section aria-labelledby="qrmp-states" className="mt-14">
            <h2 id="qrmp-states" className="text-title font-medium text-ink">22nd or 24th: which states file when</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-body">Quarterly (QRMP) filers get two extra or four extra days after the 20th, depending on where the business is registered.</p>
            <dl className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {QRMP_STATE_GROUPS.map((g) => (
                <div key={g.day} className="grid gap-1 px-5 py-3.5 min-[560px]:grid-cols-[170px_minmax(0,1fr)] min-[560px]:gap-4">
                  <dt className="text-sm text-ink-muted">{g.name}: the {g.day}{g.day === 22 ? "nd" : "th"}</dt>
                  <dd className="text-[15px] leading-relaxed text-ink">{g.states}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section aria-labelledby="item-ready" className="mt-14">
          <h2 id="item-ready" className="text-title font-medium text-ink">What to keep ready</h2>
          <ul className="mt-5 space-y-2.5">
            {item.ready.map((r) => (
              <li key={r} className="flex gap-3 text-[17px] leading-relaxed text-ink-body">
                <Check aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
            <Link href={GST_CALENDAR_PATH} className="text-brand hover:underline">Open the full GST calendar →</Link>
            {item.glossary && <Link href={glossaryHref(item.glossary)} className="text-brand hover:underline">Glossary: how it works →</Link>}
            {item.post && <Link href={item.post} className="text-brand hover:underline">Read the full guide →</Link>}
          </p>
        </section>

        <section aria-labelledby="item-faq" className="mt-14">
          <h2 id="item-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
          <FaqList faqs={itemCopy(id).faqs} />
        </section>

        {filers.length > 0 && (
          <p className="mt-10 text-sm text-ink-muted">
            Shown on the calendar for: {filers.map((f) => GST_FILERS[f].label.toLowerCase()).join(", ")}.
          </p>
        )}
      </div>

      <RelatedLinks services={item.services} pinnedPosts={item.post ? [item.post] : []} heading="Get help with this" />
      <CtaBand />
    </main>
  );
}
