"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Cta from "@/components/ui/Cta";
import type { GstEvent, GstFiler, GstItem } from "@/content/gst-calendar";
import { whatsappHref } from "@/content/site";
import { MONTH_NAMES, addDays, dayOfWeek, diffDays, longDate, monthLabel, shiftMonth, shortDate, weekday } from "@/lib/dates";
import { dateHref } from "@/lib/gst-calendar-urls";
import DueBadge from "./DueBadge";
import { useToday } from "./useToday";

export type CalendarItem = Pick<GstItem, "name" | "plain" | "kind" | "every" | "what" | "who" | "ifMissed">;

type Props = {
  events: GstEvent[];
  items: Record<string, CalendarItem>;
  filers: Record<GstFiler, { short: string; who: string }>;
  /** Months that can be shown, "2026-04" … in order. */
  months: string[];
  initialMonth: string;
  /** Open on the current month once the visitor's date is known (the hub), instead of staying on `initialMonth`. */
  followToday?: boolean;
};

type Filter = GstFiler | "all";
// `flex` sizes each tab to its label, so the sliding pill can be placed with the same numbers.
const FILTERS: { id: Filter; flex: number }[] = [
  { id: "all", flex: 0.7 },
  { id: "monthly", flex: 1.05 },
  { id: "qrmp", flex: 1.15 },
  { id: "composition", flex: 1.45 },
  { id: "other", flex: 0.95 },
];
const FLEX_TOTAL = FILTERS.reduce((n, f) => n + f.flex, 0);

// One colour per kind of filer; "all" marks dates that apply to every regular taxpayer. Amber is kept for "just passed".
const TONES: Record<Filter, { dot: string; chip: string }> = {
  all: { dot: "bg-ink", chip: "bg-ink/[0.08] text-ink" },
  monthly: { dot: "bg-brand", chip: "bg-brand-soft text-brand-dark" },
  qrmp: { dot: "bg-sky-500", chip: "bg-sky-100/80 text-sky-800" },
  composition: { dot: "bg-violet-500", chip: "bg-violet-100/80 text-violet-800" },
  other: { dot: "bg-slate-400", chip: "bg-slate-200/70 text-slate-700" },
};
const toneOf = (e: GstEvent) => TONES[e.filers.length > 1 ? "all" : e.filers[0]];

/** How long a passed due date stays flagged as "just passed". */
const RECENT_DAYS = 10;
/** The timeline band and the lists look this far back and ahead of today. */
const BACK_DAYS = 14;
const AHEAD_DAYS = 45;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ARROWS: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };

const eyebrow = "text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted";
const roundButton =
  "flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.05] text-ink transition-[transform,background-color,opacity] ease-spring-snappy hover:bg-ink/10 active:scale-90 disabled:pointer-events-none disabled:opacity-30";
const mon = (iso: string) => MONTH_NAMES[Number(iso.slice(5, 7)) - 1].slice(0, 3);
const days = (n: number) => (n === 1 ? "day" : "days");

/** Interactive GST calendar: where today sits, a month grid, a panel explaining the selected day, and what just passed or comes next. */
export default function GstCalendar({ events, items, filers, months, initialMonth, followToday = false }: Props) {
  const today = useToday();
  const [filter, setFilter] = useState<Filter>("all");
  const [picked, setPicked] = useState<{ month?: string; date?: string; dir: number }>({ dir: 1 });
  const panel = useRef<HTMLDivElement>(null);

  const thisMonth = today?.slice(0, 7);
  const month = picked.month ?? (followToday && thisMonth && months.includes(thisMonth) ? thisMonth : initialMonth);

  const visible = filter === "all" ? events : events.filter((e) => e.filers.includes(filter));
  const byDate = new Map<string, GstEvent[]>();
  for (const e of visible) byDate.set(e.date, [...(byDate.get(e.date) ?? []), e]);

  const isDue = (e: GstEvent) => items[e.item].kind !== "info";
  const runsLate = (e: GstEvent) => ["return", "payment"].includes(items[e.item].kind);
  const names = (es: GstEvent[]) => [...new Set(es.map((e) => items[e.item].name))].join(" · ");
  const periods = (es: GstEvent[]) => [...new Set(es.map((e) => e.period))].join(", ");

  const dueDates = [...byDate.keys()].filter((d) => byDate.get(d)!.some(isDue));
  const dueOn = (d: string) => (byDate.get(d) ?? []).filter(isDue);
  const next = today ? dueDates.find((d) => d >= today) : undefined;
  const last = today ? dueDates.findLast((d) => d < today) : undefined;
  const justPassed = (d: string) => Boolean(today && d < today && diffDays(d, today) >= -RECENT_DAYS && dueOn(d).some(runsLate));
  const dueThisMonth = dueDates.filter((d) => d.startsWith(month));
  // Until a day is picked, the panel follows the month on screen: today, or that month's next due date.
  const date = picked.date ?? (today && thisMonth === month ? today : (dueThisMonth.find((d) => !today || d >= today) ?? dueThisMonth[0] ?? `${month}-01`));
  const selected = byDate.get(date) ?? [];

  const show = (m: string) => months.includes(m) && setPicked((p) => ({ ...p, month: m, dir: m < month ? -1 : 1 }));
  const select = (d: string, reveal = false) => {
    const m = d.slice(0, 7);
    setPicked({ date: d, month: months.includes(m) ? m : month, dir: m < month ? -1 : 1 });
    if (reveal) panel.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  // Arrow keys walk the grid, across month ends too. Enter or Space picks the focused day, as on any button.
  const onGridKey = (e: KeyboardEvent) => {
    const from = (e.target as HTMLElement).dataset.date;
    const step = ARROWS[e.key];
    if (!from || !step) return;
    e.preventDefault();
    const to = addDays(from, step);
    if (!months.includes(to.slice(0, 7))) return;
    show(to.slice(0, 7));
    requestAnimationFrame(() => document.getElementById(`gc-${to}`)?.focus());
  };

  // Always six full weeks, so the page below doesn't jump as months change. Days outside the month are quiet tiles.
  const gridStart = addDays(`${month}-01`, -dayOfWeek(`${month}-01`));
  const cells = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
  const [year, monthNo] = month.split("-").map(Number);
  const filterIndex = FILTERS.findIndex((f) => f.id === filter);
  const filterOffset = FILTERS.slice(0, filterIndex).reduce((n, f) => n + f.flex, 0);

  const band = today ? Array.from({ length: BACK_DAYS + AHEAD_DAYS + 1 }, (_, i) => addDays(today, i - BACK_DAYS)) : [];
  const recent = today ? dueDates.filter((d) => d < today && diffDays(d, today) >= -BACK_DAYS).reverse() : [];
  const soon = today ? dueDates.filter((d) => d >= today && diffDays(d, today) <= AHEAD_DAYS) : [];
  const later = today ? dueDates.filter((d) => diffDays(d, today) > AHEAD_DAYS && dueOn(d).some((e) => items[e.item].every)).slice(0, 6) : [];

  return (
    <section aria-labelledby="gc-heading" className="mt-10">
      <h2 id="gc-heading" className="sr-only">Interactive GST calendar</h2>

      {/* Who you are */}
      <div className="flex flex-col gap-3 min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:gap-5">
        <fieldset className="relative flex shrink-0 rounded-full bg-ink/[0.05] p-1 min-[1000px]:w-[30rem]">
          <legend className="sr-only">Show due dates for</legend>
          <span
            aria-hidden="true"
            className="absolute inset-y-1 rounded-full bg-white shadow-[0_1px_3px_rgb(16_16_16/0.12),0_0_0_1px_rgb(16_16_16/0.03)] transition-[left,width] ease-spring-snappy"
            style={{ left: `calc(0.25rem + (100% - 0.5rem) * ${filterOffset / FLEX_TOTAL})`, width: `calc((100% - 0.5rem) * ${FILTERS[filterIndex].flex / FLEX_TOTAL})` }}
          />
          {FILTERS.map((f) => (
            <label
              key={f.id}
              style={{ flex: f.flex }}
              className="relative z-10 flex min-w-0 cursor-pointer items-center justify-center gap-1.5 rounded-full py-2 text-[13px] font-medium text-ink-muted transition-colors ease-spring-snappy hover:text-ink has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand"
            >
              <input type="radio" name="gc-filter" className="sr-only" checked={filter === f.id} onChange={() => setFilter(f.id)} />
              {f.id !== "all" && <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${TONES[f.id].dot}`} />}
              {f.id === "all" ? "All" : filers[f.id].short}
            </label>
          ))}
        </fieldset>
        <p key={filter} className="animate-rise text-sm leading-relaxed text-ink-muted">
          {filter === "all" ? "Every GST due date. Pick how you file to see only yours." : filers[filter].who}
        </p>
      </div>

      {/* A soft tray holding the cards, so the calendar reads as one tool. */}
      <div className="-mx-2 mt-5 space-y-2 rounded-[2rem] bg-ink/[0.04] p-2 min-[760px]:mx-0">
        {/* Where today sits */}
        <div className="card p-5 min-[760px]:p-7">
          {!today ? (
            <div aria-hidden="true" className="animate-pulse">
              <div className="grid grid-cols-2 gap-6 min-[760px]:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={i ? "" : "col-span-2 min-[760px]:col-span-1"}>
                    <div className="h-3 w-16 rounded-full bg-ink/[0.06]" />
                    <div className="mt-4 h-9 w-32 max-w-full rounded-xl bg-ink/[0.06]" />
                    <div className="mt-3 h-3 w-40 max-w-full rounded-full bg-ink/[0.06]" />
                  </div>
                ))}
              </div>
              <div className="mt-12 h-16 rounded-xl bg-ink/[0.04]" />
              <div className="mt-2 h-4" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7 min-[760px]:grid-cols-3">
                <Stat
                  label="Today"
                  live
                  value={shortDate(today)}
                  unit={weekday(today)}
                  detail={
                    dueOn(today).length
                      ? `Due today: ${names(dueOn(today))}`
                      : byDate.has(today)
                        ? `Nothing to file. ${names(byDate.get(today)!)} for ${periods(byDate.get(today)!)} is generated today.`
                        : "Nothing to file today."
                  }
                  onClick={() => select(today, true)}
                  className="col-span-2 min-[760px]:col-span-1"
                />
                <Stat
                  label="Next due"
                  value={!next ? "–" : next === today ? "Today" : String(diffDays(next, today))}
                  unit={!next || next === today ? "" : `${days(diffDays(next, today))} to go`}
                  detail={next ? `${shortDate(next)} · ${names(dueOn(next))}` : "This calendar ends here."}
                  onClick={next ? () => select(next, true) : undefined}
                  delay={60}
                />
                <Stat
                  label="Just passed"
                  value={last ? String(-diffDays(last, today)) : "–"}
                  unit={last ? `${days(-diffDays(last, today))} ago` : ""}
                  detail={last ? `${shortDate(last)} · ${names(dueOn(last))}` : "No due date has passed yet."}
                  warn={last && justPassed(last) ? "Not filed? The late fee grows daily." : undefined}
                  onClick={last ? () => select(last, true) : undefined}
                  delay={120}
                />
              </div>

              {/* Two weeks back, six weeks ahead: one bar per due date, taller when more falls due. */}
              <div key={filter} className="relative mt-12">
                <div className="relative h-16 overflow-hidden rounded-xl bg-ink/[0.04]">
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 bg-ink/[0.05]" style={{ width: `${(BACK_DAYS / band.length) * 100}%` }} />
                  <div aria-hidden="true" className="absolute inset-0 flex gap-px min-[760px]:gap-0.5">
                    {band.map((d, i) => (
                      <span key={d} className="relative flex-1">
                        {d.endsWith("-01") && i > 0 && <span className="absolute inset-y-0 left-0 w-px bg-ink/10" />}
                        {(d.endsWith("-01") || (i === 0 && Number(d.slice(8)) < 25)) && (
                          <span className="absolute left-1.5 top-1.5 text-[10px] font-medium uppercase leading-none tracking-wider text-ink-muted">{mon(d)}</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-end gap-px min-[760px]:gap-0.5">
                    {band.map((d, i) => {
                      const es = dueOn(d);
                      if (!es.length) return <span key={d} className="flex-1" />;
                      return (
                        <button
                          key={d}
                          type="button"
                          title={`${shortDate(d)}: ${names(es)}`}
                          aria-label={`${longDate(d)}: ${names(es)}`}
                          onClick={() => select(d, true)}
                          style={{ height: `${Math.min(100, 40 + es.length * 20)}%`, animationDelay: `${i * 10}ms` }}
                          className={`animate-rise flex-1 origin-bottom rounded-t-[3px] transition-[transform,filter] ease-spring-snappy hover:scale-y-[1.08] hover:brightness-110 ${d < today ? (justPassed(d) ? "bg-amber-400" : "bg-ink/20") : toneOf(es[0]).dot}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-1 -top-2 w-px bg-ink-strong" style={{ left: `${((BACK_DAYS + 0.5) / band.length) * 100}%` }}>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">Today</span>
                </div>
                <div aria-hidden="true" className="mt-2 flex gap-px text-[10px] tabular-nums leading-4 text-ink-muted min-[760px]:gap-0.5">
                  {band.map((d) => (
                    <span key={d} className="relative h-4 flex-1">
                      {dueOn(d).length > 0 && d !== today && <span className="absolute left-1/2 hidden -translate-x-1/2 min-[760px]:block">{Number(d.slice(8))}</span>}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Month grid + the selected day */}
        <div className="grid items-start gap-2 min-[1000px]:grid-cols-[minmax(0,1fr)_23rem]">
          <div className="card overflow-hidden p-3 min-[760px]:p-6">
            <div className="flex items-center justify-between gap-3 px-1 pt-1 min-[760px]:px-0 min-[760px]:pt-0">
              <p key={month} aria-live="polite" className="animate-rise text-2xl font-medium tracking-[-0.02em] text-ink">
                {MONTH_NAMES[monthNo - 1]} <span className="text-ink-muted">{year}</span>
              </p>
              <div className="flex items-center gap-1.5">
                {today && thisMonth !== month && months.includes(thisMonth!) && (
                  <button type="button" onClick={() => select(today)} className="animate-rise mr-1 rounded-full bg-ink-strong px-3.5 py-1.5 text-sm font-medium text-white transition-transform ease-spring-snappy active:scale-95">
                    Today
                  </button>
                )}
                <button type="button" aria-label="Previous month" disabled={month === months[0]} onClick={() => show(shiftMonth(month, -1))} className={roundButton}>
                  <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                </button>
                <button type="button" aria-label="Next month" disabled={month === months.at(-1)} onClick={() => show(shiftMonth(month, 1))} className={roundButton}>
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* The whole range at a glance: jump to a month, see where the once-a-year dates fall. */}
            <div className="relative mt-5 hidden rounded-2xl bg-ink/[0.04] p-1 min-[760px]:block">
              <div className="relative flex">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 rounded-xl bg-white shadow-[0_1px_3px_rgb(16_16_16/0.12)] transition-transform ease-spring-snappy"
                  style={{ width: `${100 / months.length}%`, transform: `translateX(${months.indexOf(month) * 100}%)` }}
                />
                {months.map((mo) => {
                  const mark = visible.find((e) => e.date.startsWith(mo) && ["year", "half-year"].includes(items[e.item].every ?? ""));
                  return (
                    <button
                      key={mo}
                      type="button"
                      title={monthLabel(mo)}
                      aria-current={mo === month ? "true" : undefined}
                      onClick={() => show(mo)}
                      className={`relative z-10 flex min-w-0 flex-1 flex-col items-center rounded-xl pb-1 pt-1.5 text-[13px] font-medium transition-colors ease-spring-snappy hover:text-ink ${mo === month ? "text-ink" : thisMonth && mo < thisMonth ? "text-ink-muted/50" : "text-ink-muted"}`}
                    >
                      <span className="flex items-center gap-1">
                        {mo === thisMonth && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />}
                        {mon(mo)}
                        {(mo === months[0] || mo.endsWith("-01")) && <span className="text-[10px] font-normal">’{mo.slice(2, 4)}</span>}
                      </span>
                      <span className="h-3.5 max-w-full truncate px-0.5 text-[10px] font-normal leading-[0.875rem]">{mark ? items[mark.item].name : ""}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div aria-hidden="true" className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted min-[760px]:gap-1.5 min-[760px]:text-left">
              {WEEKDAYS.map((d) => <span key={d} className="py-1.5 min-[760px]:px-2.5">{d}</span>)}
            </div>
            <div key={month} onKeyDown={onGridKey} style={{ "--dir": picked.dir } as CSSProperties} className="animate-slide grid grid-cols-7 gap-1 min-[760px]:gap-1.5">
              {cells.map((d) => {
                const es = byDate.get(d) ?? [];
                if (!d.startsWith(month))
                  return (
                    <button
                      key={d}
                      type="button"
                      tabIndex={-1}
                      disabled={!months.includes(d.slice(0, 7))}
                      aria-label={`${longDate(d)}: ${es.length ? names(es) : "nothing due"}`}
                      onClick={() => select(d)}
                      className="flex min-h-11 flex-col items-center gap-1 rounded-xl bg-ink/[0.015] p-1 text-[13px] tabular-nums text-ink-muted/45 transition-[background-color,transform] ease-spring-snappy enabled:hover:bg-ink/[0.05] enabled:active:scale-95 min-[760px]:min-h-24 min-[760px]:items-start min-[760px]:rounded-2xl min-[760px]:p-2"
                    >
                      <span className="flex h-6 min-w-6 items-center justify-center px-1">{Number(d.slice(8))}</span>
                      <span className="flex h-1.5 gap-0.5 px-1 opacity-40 saturate-0">
                        {es.slice(0, 3).map((e, j) => <span key={j} className={`h-1.5 w-1.5 rounded-full ${toneOf(e).dot}`} />)}
                      </span>
                    </button>
                  );
                const past = Boolean(today && d < today);
                const flagged = justPassed(d);
                const faded = past && !flagged ? "opacity-45 saturate-0" : "";
                return (
                  <button
                    key={d}
                    id={`gc-${d}`}
                    data-date={d}
                    type="button"
                    aria-pressed={d === date}
                    aria-label={`${weekday(d)}, ${longDate(d)}: ${es.length ? names(es) : "nothing due"}`}
                    onClick={() => select(d)}
                    className={`group flex min-h-11 flex-col items-center gap-1 rounded-xl p-1 transition-[background-color,box-shadow,transform] ease-spring-snappy active:scale-95 min-[760px]:min-h-24 min-[760px]:items-stretch min-[760px]:gap-1.5 min-[760px]:rounded-2xl min-[760px]:p-2 ${
                      d === date
                        ? "relative z-10 bg-white shadow-[0_0_0_1.5px_var(--color-ink-strong),0_10px_24px_-12px_rgb(16_16_16/0.4)]"
                        : flagged
                          ? "bg-amber-50 hover:bg-amber-100/70"
                          : "bg-ink/[0.035] hover:bg-ink/[0.07]"
                    }`}
                  >
                    <span
                      className={`relative flex h-6 min-w-6 items-center justify-center self-center rounded-full px-1 text-[13px] tabular-nums transition-transform ease-spring-snappy group-hover:scale-110 min-[760px]:self-start ${
                        d === today ? "bg-brand font-semibold text-white" : past ? "text-ink-muted/60" : es.length ? "font-medium text-ink" : "text-ink-muted"
                      }`}
                    >
                      {d === today && <span className="pulse-dot absolute inset-0 rounded-full bg-brand/40" />}
                      <span className="relative">{Number(d.slice(8))}</span>
                    </span>
                    {/* Names on wide screens, dots on phones. */}
                    <span className={`hidden w-full flex-col gap-1 min-[760px]:flex ${faded}`}>
                      {es.slice(0, 2).map((e, j) => (
                        <span
                          key={j}
                          className={`truncate rounded-md px-1.5 py-0.5 text-left text-[11px] font-medium leading-4 ${items[e.item].kind === "info" ? "text-ink-muted outline-1 -outline-offset-1 outline-dashed outline-ink/20" : flagged ? "bg-amber-200/70 text-amber-900" : toneOf(e).chip}`}
                        >
                          {items[e.item].name}
                        </span>
                      ))}
                      {es.length > 2 && <span className="self-start rounded-md bg-ink/[0.06] px-1.5 text-[10px] font-medium leading-4 text-ink-muted">+{es.length - 2}</span>}
                    </span>
                    <span className={`flex h-1.5 gap-0.5 min-[760px]:hidden ${faded}`}>
                      {es.slice(0, 3).map((e, j) => (
                        <span key={j} className={`h-1.5 w-1.5 rounded-full ${items[e.item].kind === "info" ? "border border-ink-muted" : flagged ? "bg-amber-500" : toneOf(e).dot}`} />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 px-1 pb-1 text-xs text-ink-muted min-[760px]:px-0 min-[760px]:pb-0">
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand" />Today</li>
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" />Passed in the last {RECENT_DAYS} days</li>
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-ink" />Every regular taxpayer</li>
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full border border-dashed border-ink-muted" />Nothing to file</li>
            </ul>
          </div>

          <div ref={panel} aria-live="polite" className="card scroll-mt-28 overflow-hidden min-[1000px]:sticky min-[1000px]:top-24">
            <div key={`${date}-${filter}`} className="animate-rise p-5 min-[760px]:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex items-center gap-3.5">
                  <span className="text-[56px] font-medium leading-none tracking-[-0.04em] tabular-nums text-ink">{Number(date.slice(8))}</span>
                  <span className="text-[17px] font-medium leading-snug text-ink">
                    {MONTH_NAMES[Number(date.slice(5, 7)) - 1]} {date.slice(0, 4)}
                    <span className="block text-sm font-normal text-ink-muted">{weekday(date)}</span>
                  </span>
                </h3>
                <DueBadge date={date} late={selected.some(runsLate)} className="mt-1.5" />
              </div>

              {selected.length === 0 ? (
                <div className="mt-6 rounded-2xl bg-ink/[0.035] p-5">
                  <p className="text-[15px] text-ink">Nothing is due on this day{filter === "all" ? "" : ` for ${filers[filter].short.toLowerCase()} filers`}.</p>
                  {next && (
                    <button type="button" onClick={() => select(next)} className="group mt-3 flex items-center gap-1.5 text-left text-sm font-medium text-brand">
                      Next due date: {shortDate(next)}, {names(dueOn(next))}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform ease-spring group-hover:translate-x-0.5" />
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <div className="mt-5 space-y-1.5">
                    {selected.map((e, i) => {
                      const item = items[e.item];
                      return (
                        <details key={`${e.item}-${e.variant}`} name="gc-day" open={i === 0} className="group animate-rise rounded-2xl bg-ink/[0.035] px-4 transition-colors ease-spring-snappy open:bg-ink/[0.035] hover:bg-ink/[0.055]" style={{ animationDelay: `${60 + i * 50}ms` }}>
                          <summary className="flex list-none items-center gap-3 py-3.5 [&::-webkit-details-marker]:hidden">
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center gap-2">
                                <span className={`rounded-md px-1.5 py-0.5 text-xs font-medium leading-4 ${item.kind === "info" ? "text-ink-muted outline-1 -outline-offset-1 outline-dashed outline-ink/25" : toneOf(e).chip}`}>{item.name}</span>
                                <span className="truncate text-sm text-ink-muted">{e.period}</span>
                              </span>
                              <span className="mt-1.5 block text-[15px] font-medium leading-snug text-ink">{item.plain}</span>
                            </span>
                            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted transition-transform ease-spring group-open:rotate-180" />
                          </summary>
                          <div className="space-y-3 pb-4 text-[15px] leading-relaxed text-ink-body">
                            {e.variant && <p className="text-sm font-medium text-ink">{e.variant}</p>}
                            {e.note && <p className="rounded-xl bg-amber-100/70 px-3 py-2 text-sm text-amber-900">{e.note}</p>}
                            <p>{item.what}</p>
                            <dl className="space-y-3 border-t border-ink/[0.07] pt-3">
                              <div>
                                <dt className={eyebrow}>Who it applies to</dt>
                                <dd className="mt-1">{item.who}</dd>
                              </div>
                              <div>
                                <dt className={eyebrow}>{item.kind === "info" ? "Good to know" : item.kind === "optional" ? "If you skip it" : "If you miss it"}</dt>
                                <dd className="mt-1">{item.ifMissed}</dd>
                              </div>
                            </dl>
                          </div>
                        </details>
                      );
                    })}
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Cta href={dateHref(date)} variant="dark" icon="arrow">Full guide to {shortDate(date)}</Cta>
                    <Cta href={whatsappHref(`Hi, I need help with ${names(selected).replaceAll(" · ", ", ")} due on ${longDate(date)}.`)} variant="soft" icon="whatsapp">
                      Ask us on WhatsApp
                    </Cta>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Near term, then the long view */}
        {today && (
          <div key={filter} className="animate-rise grid gap-2 min-[760px]:grid-cols-2 min-[1000px]:grid-cols-3">
            <Agenda title="Just passed" empty={`No due date in the last ${BACK_DAYS} days.`} dates={recent} onPick={select} line={(d) => ({ title: names(dueOn(d)), sub: periods(dueOn(d)), late: dueOn(d).some(runsLate) })} />
            <Agenda title="Coming up" empty={`Nothing due in the next ${AHEAD_DAYS} days.`} dates={soon} onPick={select} line={(d) => ({ title: names(dueOn(d)), sub: periods(dueOn(d)), late: false })} />
            <div className="relative overflow-hidden rounded-3xl bg-ink-strong p-5 text-white min-[760px]:col-span-2 min-[760px]:p-6 min-[1000px]:col-span-1">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-brand/40 blur-[70px]" />
              <h3 className="relative text-[11px] font-medium uppercase tracking-[0.08em] text-white/60">Further ahead</h3>
              {later.length === 0 && <p className="relative mt-4 text-sm text-white/60">No yearly or quarterly dates beyond the next {AHEAD_DAYS} days in this calendar.</p>}
              <ul className="relative mt-3 grid gap-x-6 min-[760px]:grid-cols-2 min-[1000px]:grid-cols-1">
                {later.map((d) => {
                  const es = dueOn(d).filter((e) => items[e.item].every);
                  return (
                    <li key={d}>
                      <button type="button" onClick={() => select(d, true)} className="group -mx-2 flex w-[calc(100%+1rem)] items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-[background-color,transform] ease-spring-snappy hover:bg-white/[0.07] active:scale-[0.98]">
                        <span className="w-16 shrink-0 text-sm tabular-nums text-white/60">
                          {shortDate(d)}
                          {d.slice(0, 4) !== today.slice(0, 4) && <span className="block text-[11px]">{d.slice(0, 4)}</span>}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[15px] font-medium">{names(es)}</span>
                          <span className="block truncate text-sm text-white/55">{items[es[0].item].plain}</span>
                        </span>
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-white/40 transition-[color,transform] ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** A big number with its label, in the row above the timeline. Clicking it opens that day. */
function Stat({ label, value, unit, detail, warn, live, onClick, delay = 0, className = "" }: {
  label: string;
  value: string;
  unit: string;
  detail: string;
  warn?: string;
  live?: boolean;
  onClick?: () => void;
  delay?: number;
  className?: string;
}) {
  return (
    <button type="button" disabled={!onClick} onClick={onClick} style={{ animationDelay: `${delay}ms` }} className={`animate-rise group flex min-w-0 flex-col text-left disabled:cursor-default ${className}`}>
      <span className={`flex items-center gap-2 ${eyebrow}`}>
        {live && (
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inset-0 rounded-full bg-brand" />
            <span className="relative h-2 w-2 rounded-full bg-brand" />
          </span>
        )}
        {label}
        <ArrowRight aria-hidden="true" className="h-3 w-3 -translate-x-1 opacity-0 transition-[opacity,transform] ease-spring group-hover:translate-x-0 group-hover:opacity-100 group-disabled:hidden" />
      </span>
      <span className="mt-3 flex items-baseline gap-2 text-ink">
        <span className="text-[40px] font-medium leading-none tracking-[-0.03em] tabular-nums transition-transform ease-spring-snappy group-active:scale-95">{value}</span>
        {unit && <span className="text-[15px] text-ink-muted">{unit}</span>}
      </span>
      <span className="mt-2.5 text-sm leading-snug text-ink-muted">{detail}</span>
      {warn && <span className="mt-1.5 text-xs font-medium text-amber-700">{warn}</span>}
    </button>
  );
}

function Agenda({ title, empty, dates, line, onPick }: {
  title: string;
  empty: string;
  dates: string[];
  line: (date: string) => { title: string; sub: string; late: boolean };
  onPick: (date: string, reveal: boolean) => void;
}) {
  return (
    <div className="card p-3 min-[760px]:p-4">
      <h3 className={`px-2 pt-2 ${eyebrow}`}>{title}</h3>
      {dates.length === 0 && <p className="px-2 py-4 text-sm text-ink-muted">{empty}</p>}
      <ul className="mt-2">
        {dates.map((d) => {
          const { title: what, sub, late } = line(d);
          return (
            <li key={d}>
              <button type="button" onClick={() => onPick(d, true)} className="group flex w-full items-center gap-3.5 rounded-2xl p-2 text-left transition-[background-color,transform] ease-spring-snappy hover:bg-ink/[0.04] active:scale-[0.98]">
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-ink/[0.045] transition-transform ease-spring-snappy group-hover:scale-105">
                  <span className="text-[17px] font-semibold leading-none tabular-nums text-ink">{Number(d.slice(8))}</span>
                  <span className="mt-1 text-[10px] font-medium uppercase leading-none tracking-wider text-ink-muted">{mon(d)}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-medium text-ink">{what}</span>
                  <span className="block truncate text-sm text-ink-muted">{weekday(d).slice(0, 3)} · {sub}</span>
                </span>
                <DueBadge date={d} late={late} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
