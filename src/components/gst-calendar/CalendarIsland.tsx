import { GST_EVENTS, GST_FILERS, GST_ITEMS, GST_MONTHS } from "@/content/gst-calendar";
import GstCalendar, { type CalendarItem } from "./GstCalendar";

// Only what the calendar shows goes to the browser; the long-form copy stays on the server.
const items: Record<string, CalendarItem> = Object.fromEntries(
  Object.entries(GST_ITEMS).map(([id, { name, plain, kind, every, what, who, ifMissed }]) => [id, { name, plain, kind, every, what, who, ifMissed }]),
);

/** The interactive calendar with its data. `followToday` opens on the current month instead of `month`. */
export default function CalendarIsland({ month, followToday }: { month: string; followToday?: boolean }) {
  return <GstCalendar events={GST_EVENTS} items={items} filers={GST_FILERS} months={GST_MONTHS} initialMonth={month} followToday={followToday} />;
}
