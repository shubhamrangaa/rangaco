// Kept apart from src/content/gst-calendar.ts so the client calendar and next.config.ts can build links without the content.
// URLs never carry a year: each page keeps its address (and its rankings) while the dates on it roll forward every year.
import { MONTH_NAMES } from "./dates";

export const GST_CALENDAR_PATH = "/gst-calendar";

/** "2026-11" (or any date in November) -> "gst-due-dates-november" */
export const monthSlug = (month: string) => `gst-due-dates-${MONTH_NAMES[Number(month.slice(5, 7)) - 1].toLowerCase()}`;
export const monthHref = (month: string) => `${GST_CALENDAR_PATH}/${monthSlug(month)}`;

/** Items whose page is not "<item>-due-date" because nothing is filed on the date. */
export const ITEM_SLUGS: Record<string, string> = {
  "gstr-2b": "gstr-2b-generation-date",
  "itc-cutoff": "last-date-to-claim-itc",
  lut: "lut-renewal-date",
  "qrmp-option": "qrmp-opt-in-date",
};
/** "gstr-3b" -> "gstr-3b-due-date" */
export const itemSlug = (item: string) => ITEM_SLUGS[item] ?? `${item}-due-date`;
export const itemHref = (item: string) => `${GST_CALENDAR_PATH}/${itemSlug(item)}`;
