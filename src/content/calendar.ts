// Standard statutory due dates (CBDT/CBIC can extend them). Month is 1-12.
export type CalendarEvent = { month: number; day: number; label: string; kind: "itr" | "gst" | "tds" | "advance" };

export const YEARLY_CALENDAR: CalendarEvent[] = [
  { month: 4, day: 30, label: "TDS deposit for March", kind: "tds" },
  { month: 5, day: 31, label: "Q4 TDS return", kind: "tds" },
  { month: 6, day: 15, label: "Advance tax 15% · Form 16", kind: "advance" },
  { month: 7, day: 31, label: "ITR (no business income) · Q1 TDS return", kind: "itr" },
  { month: 8, day: 31, label: "ITR (non-audit business)", kind: "itr" },
  { month: 9, day: 15, label: "Advance tax 45%", kind: "advance" },
  { month: 9, day: 30, label: "Tax audit report", kind: "itr" },
  { month: 10, day: 31, label: "ITR (audit cases) · Q2 TDS return", kind: "itr" },
  { month: 12, day: 15, label: "Advance tax 75%", kind: "advance" },
  { month: 12, day: 31, label: "GSTR-9 annual return · Belated ITR", kind: "gst" },
  { month: 1, day: 31, label: "Q3 TDS return", kind: "tds" },
  { month: 3, day: 15, label: "Advance tax 100%", kind: "advance" },
];

export const MONTHLY_DUE: { day: number; label: string; detail: string }[] = [
  { day: 7, label: "TDS deposit", detail: "Tax deducted last month" },
  { day: 11, label: "GSTR-1", detail: "Outward supplies (monthly filers)" },
  { day: 20, label: "GSTR-3B", detail: "Summary return and tax payment" },
];
