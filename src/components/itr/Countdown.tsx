"use client";

import { useSyncExternalStore } from "react";
import type { Deadline } from "@/content/itr-years";

const endOfDayIST = (iso: string) => new Date(`${iso}T23:59:59+05:30`).getTime();

function nextDeadline(deadlines: Deadline[], now: number) {
  return deadlines.filter((d) => endOfDayIST(d.date) > now).sort((a, b) => endOfDayIST(a.date) - endOfDayIST(b.date))[0];
}

// A one-second clock as an external store: no effects, and null during SSR.
const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};
const getSnapshot = () => Math.floor(Date.now() / 1000) * 1000;
const getServerSnapshot = () => null;

/** Counts down to the next upcoming deadline; renders nothing once all have passed. */
export default function Countdown({ deadlines }: { deadlines: Deadline[] }) {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (now === null) return null;
  const next = nextDeadline(deadlines, now);
  if (!next) return null;
  const diff = endOfDayIST(next.date) - now;
  const parts = [
    [Math.floor(diff / 864e5), "days"],
    [Math.floor((diff % 864e5) / 36e5), "hrs"],
    [Math.floor((diff % 36e5) / 6e4), "min"],
    [Math.floor((diff % 6e4) / 1e3), "sec"],
  ] as const;
  return (
    <div className="card mt-8 inline-flex flex-wrap items-center gap-6 px-6 py-5" role="timer" aria-live="off">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Next deadline</p>
        <p className="mt-1 font-medium text-ink">{next.label}</p>
      </div>
      <dl className="flex gap-4 tabular-nums">
        {parts.map(([v, l]) => (
          <div key={l} className="text-center">
            <dd className="text-[28px] font-medium leading-none tracking-[-0.02em] text-ink">{String(v).padStart(2, "0")}</dd>
            <dt className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">{l}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
