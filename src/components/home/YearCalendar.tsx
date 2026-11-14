import { YEARLY_CALENDAR, type CalendarEvent } from "@/content/calendar";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

// Financial year order: April -> March.
const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const fyIndex = (m: number) => (m + 8) % 12;

const KIND: Record<CalendarEvent["kind"], { label: string; dot: string }> = {
  itr: { label: "Income tax return", dot: "bg-brand" },
  advance: { label: "Advance tax", dot: "bg-amber-500" },
  tds: { label: "TDS", dot: "bg-sky-500" },
  gst: { label: "GST annual", dot: "bg-violet-500" },
};

/** Infographic: the financial year as a 12-column timeline of statutory due dates. */
export default function YearCalendar() {
  const byMonth = MONTHS.map((_, i) => YEARLY_CALENDAR.filter((e) => fyIndex(e.month) === i).sort((a, b) => a.day - b.day));
  return (
    <section aria-labelledby="calendar-heading" className="mx-auto max-w-6xl px-4 py-24 min-[760px]:py-32">
      <SectionHeading
        id="calendar-heading"
        eyebrow="Compliance calendar"
        title="The tax year at a glance"
        lede="The standard due dates we track for every client, April to March. CBDT and CBIC sometimes extend them; we keep you posted when they do."
      />

      <ul className="reveal mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted" aria-label="Legend">
        {Object.values(KIND).map((k) => (
          <li key={k.label} className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${k.dot}`} />{k.label}</li>
        ))}
      </ul>

      <div className="reveal mt-6 overflow-x-auto rounded-3xl border border-line bg-white [scrollbar-width:thin]">
        <ol className="grid min-w-[880px] grid-cols-12">
          {MONTHS.map((m, i) => (
            <li key={m} className={`group flex min-h-56 flex-col p-3 transition-colors ease-spring hover:bg-paper ${i ? "border-l border-line" : ""}`}>
              <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{m}</span>
              <ul className="mt-4 space-y-3">
                {byMonth[i].map((e) => (
                  <li key={e.label} className="text-[13px] leading-snug text-ink">
                    <span className="flex items-center gap-1.5 font-medium tabular-nums">
                      <span className={`h-1.5 w-1.5 rounded-full ${KIND[e.kind].dot}`} />
                      {e.day} {m}
                    </span>
                    <span className="mt-0.5 block text-ink-muted">{e.label}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-3 text-xs text-ink-muted min-[960px]:hidden">Scroll sideways to see the full year.</p>
      <Link href="/gst-calendar" className="mt-5 inline-block text-sm font-medium text-brand hover:underline">Every monthly and quarterly GST due date: open the GST calendar →</Link>
    </section>
  );
}
