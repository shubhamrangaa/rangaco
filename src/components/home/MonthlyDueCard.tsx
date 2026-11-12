import { CalendarClock } from "lucide-react";
import { MONTHLY_DUE } from "@/content/calendar";

/** Infographic: the three recurring monthly deadlines on a 1-31 track. */
export default function MonthlyDueCard() {
  return (
    <figure className="card relative mx-auto w-full max-w-md p-6 shadow-[0_30px_60px_-30px_rgb(16_16_16/0.25)] min-[760px]:p-7">
      <figcaption className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-ink">
          <CalendarClock aria-hidden="true" className="h-4 w-4 text-brand" /> Every month
        </span>
        <span className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink-muted">Recurring due dates</span>
      </figcaption>

      <div className="relative mt-8 h-14" aria-hidden="true">
        <div className="absolute inset-x-0 top-6 h-px bg-line" />
        <div className="absolute left-0 top-6 h-px w-[64%] bg-linear-to-r from-brand/0 via-brand/60 to-brand" />
        {MONTHLY_DUE.map((d) => (
          <div key={d.day} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${((d.day - 1) / 30) * 100}%` }}>
            <span className="block text-[11px] font-medium text-ink-muted">{d.day}</span>
            <span className="mx-auto mt-2 block h-3 w-3 rounded-full border-2 border-white bg-brand shadow-[0_0_0_4px_rgb(18_137_72/0.12)]" />
          </div>
        ))}
        <span className="absolute right-0 top-0 text-[11px] text-ink-muted">31</span>
      </div>

      <ul className="mt-4 space-y-2">
        {MONTHLY_DUE.map((d) => (
          <li key={d.day} className="flex items-center gap-4 rounded-2xl border border-line/80 bg-paper/60 px-4 py-3 transition-transform ease-spring hover:-translate-y-0.5">
            <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-white text-ink shadow-[0_1px_2px_rgb(16_16_16/0.06)]">
              <span className="text-[15px] font-semibold leading-none">{d.day}</span>
              <span className="mt-0.5 text-[9px] uppercase tracking-wider text-ink-muted">th</span>
            </span>
            <span>
              <span className="block text-[15px] font-medium text-ink">{d.label}</span>
              <span className="block text-sm text-ink-muted">{d.detail}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-muted">We send reminders before each one.</p>
    </figure>
  );
}
