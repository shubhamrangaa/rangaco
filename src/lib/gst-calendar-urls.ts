// Kept apart from src/content/gst-calendar.ts so the client calendar can build links without bundling the content.
import { monthLabel } from "./dates";

export const GST_CALENDAR_PATH = "/gst-calendar";
/** "2026-11" (or any date in that month) -> "november-2026" */
export const monthSlug = (month: string) => monthLabel(month).toLowerCase().replace(" ", "-");
export const monthHref = (month: string) => `${GST_CALENDAR_PATH}/${monthSlug(month)}`;
export const dateHref = (date: string) => `${monthHref(date)}/${Number(date.slice(8))}`;
export const itemHref = (item: string) => `${GST_CALENDAR_PATH}/due-dates/${item}`;
