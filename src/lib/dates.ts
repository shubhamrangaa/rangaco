// Calendar-date helpers on plain ISO strings ("2026-11-20", "2026-11"). No time zones: a due date is a date, not an instant.
export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const utc = (iso: string) => new Date(`${iso.length === 7 ? `${iso}-01` : iso}T00:00:00Z`);
const nums = (iso: string) => iso.split("-").map(Number);

export const pad2 = (n: number) => String(n).padStart(2, "0");
/** 0 = Sunday. */
export const dayOfWeek = (iso: string) => utc(iso).getUTCDay();
export const weekday = (iso: string) => WEEKDAYS[dayOfWeek(iso)];
/** "20 November 2026" */
export const longDate = (iso: string) => {
  const [y, m, d] = nums(iso);
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`;
};
/** "20 Nov" */
export const shortDate = (iso: string) => {
  const [, m, d] = nums(iso);
  return `${d} ${MONTH_NAMES[m - 1].slice(0, 3)}`;
};
/** "November 2026" from "2026-11" or a full date. */
export const monthLabel = (iso: string) => {
  const [y, m] = nums(iso);
  return `${MONTH_NAMES[m - 1]} ${y}`;
};
export const addDays = (iso: string, n: number) => new Date(utc(iso).getTime() + n * 864e5).toISOString().slice(0, 10);
/** Whole days from `b` to `a` (positive when `a` is later). */
export const diffDays = (a: string, b: string) => Math.round((utc(a).getTime() - utc(b).getTime()) / 864e5);
export const shiftMonth = (ym: string, by: number) => {
  const [y, m] = nums(ym);
  return new Date(Date.UTC(y, m - 1 + by, 1)).toISOString().slice(0, 7);
};
export const daysInMonth = (ym: string) => {
  const [y, m] = nums(ym);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
};
/** Today's date in India, wherever the visitor (or the build server) is. */
export const istToday = () => new Date(Date.now() + 5.5 * 36e5).toISOString().slice(0, 10);
/** "Today", "Tomorrow", "in 6 days", "3 days ago". */
export const relativeDay = (iso: string, today: string) => {
  const n = diffDays(iso, today);
  if (n === 0) return "Today";
  if (n === 1) return "Tomorrow";
  if (n === -1) return "Yesterday";
  return n > 0 ? `in ${n} days` : `${-n} days ago`;
};
