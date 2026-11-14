"use client";

import { diffDays, relativeDay } from "@/lib/dates";
import { useToday } from "./useToday";

/** "In 6 days" / "Today" / "3 days ago" for a date. `late` marks dates where a fee or interest runs once passed. */
export default function DueBadge({ date, late = false, className = "" }: { date: string; late?: boolean; className?: string }) {
  const today = useToday();
  if (!today) return null;
  const n = diffDays(date, today);
  const tone =
    n === 0 ? "bg-brand text-white" : n > 0 ? "bg-brand-soft text-brand-dark" : late && n >= -10 ? "bg-amber-100 text-amber-900" : "bg-paper text-ink-muted";
  const text = relativeDay(date, today);
  return (
    <span className={`animate-rise inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium tabular-nums ${tone} ${className}`}>
      {text[0].toUpperCase() + text.slice(1)}
    </span>
  );
}
