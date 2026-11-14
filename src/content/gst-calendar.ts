// GST due dates, generated from the statutory rules below. Standard dates only: CBIC can extend any of them
// by notification, and those one-off changes go in DATE_CHANGES. To roll the calendar forward, move
// GST_CALENDAR_RANGE, check DATE_CHANGES and the hand-written year labels (GST_CALENDAR_FY, item h1s), and bump REVIEWED.
import type { Faq } from "./faqs";
import { MONTH_NAMES, daysInMonth, longDate, monthLabel, pad2, shiftMonth, shortDate, weekday } from "@/lib/dates";
import { monthSlug } from "@/lib/gst-calendar-urls";

export const GST_CALENDAR_REVIEWED = "2026-11-14";
export const GST_CALENDAR_FY = "2026-27";
/** Calendar months covered, inclusive: FY 2026-27 plus the quarter in which its last returns fall due. */
export const GST_CALENDAR_RANGE = { from: "2026-04", to: "2027-06" };

// ---------- Who files what ----------

export type GstFiler = "monthly" | "qrmp" | "composition" | "other";

export const GST_FILERS: Record<GstFiler, { label: string; short: string; who: string }> = {
  monthly: {
    label: "Monthly filers",
    short: "Monthly",
    who: "Regular businesses with turnover above ₹5 crore, and smaller ones that chose monthly returns. GSTR-1 by the 11th and GSTR-3B by the 20th, every month.",
  },
  qrmp: {
    label: "Quarterly (QRMP) filers",
    short: "Quarterly",
    who: "Regular businesses with turnover up to ₹5 crore that opted for the QRMP scheme: returns once a quarter, tax paid every month.",
  },
  composition: {
    label: "Composition dealers",
    short: "Composition",
    who: "Small businesses paying a flat 1–6% of turnover under the composition scheme: one payment a quarter and one return a year.",
  },
  other: {
    label: "Special registrations",
    short: "Others",
    who: "GST TDS deductors, e-commerce operators, input service distributors and foreign suppliers. Most businesses can ignore these.",
  },
};

/** QRMP filers' quarterly GSTR-3B is due on the 22nd or the 24th, by state of registration. */
export const QRMP_STATE_GROUPS = [
  {
    day: 22,
    name: "Group 1",
    states: "Chhattisgarh, Madhya Pradesh, Gujarat, Maharashtra, Karnataka, Goa, Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Dadra & Nagar Haveli and Daman & Diu, Puducherry, Andaman & Nicobar Islands, Lakshadweep",
  },
  {
    day: 24,
    name: "Group 2",
    states: "Rajasthan, Delhi, Haryana, Punjab, Uttar Pradesh, Uttarakhand, Himachal Pradesh, Jammu & Kashmir, Ladakh, Chandigarh, Bihar, Jharkhand, West Bengal, Odisha, Assam, Sikkim, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya",
  },
];

// ---------- What each date means ----------

export type GstItem = {
  /** Shown on the calendar, e.g. "GSTR-3B". */
  name: string;
  /** What it is in a few plain words (under 50 characters: it goes into meta descriptions). */
  plain: string;
  /** return/payment: late fee or interest runs after the date. optional/deadline: a window that closes. info: nothing to file. */
  kind: "return" | "payment" | "optional" | "deadline" | "info";
  /** How often it comes round. Omit for monthly. */
  every?: "quarter" | "half-year" | "year";
  what: string;
  who: string;
  when: string;
  ifMissed: string;
  /** What to keep ready. */
  ready: string[];
  /** H1 and <title> of the item's own page (under 48 characters). */
  h1: string;
  glossary?: string;
  services: string[];
  post?: string;
};

const FILING = ["gst-return-filing-jodhpur"];
const DAILY_FEE = "A daily late fee until it is filed, plus interest at 18% a year on tax paid late.";

// Listed in order of importance: this is the order events appear in on a date.
const ITEMS = {
  "gstr-1": {
    name: "GSTR-1",
    plain: "Sales return",
    kind: "return",
    what: "A list of every sale you made in the period, invoice by invoice for business customers. Whatever you report here shows up in your buyers' GSTR-2B, so their input tax credit depends on it.",
    who: "Every regular GST-registered business. Monthly if turnover is above ₹5 crore or you haven't opted for QRMP; quarterly under QRMP.",
    when: "Monthly filers: the 11th of the next month. QRMP filers: the 13th of the month after each quarter.",
    ifMissed: "A late fee of ₹50 a day (₹20 a day for a nil return) until you file, capped between ₹500 and ₹10,000 by turnover. Your buyers can't claim credit on your invoices meanwhile, and GSTR-3B for the period stays locked until GSTR-1 is filed.",
    ready: ["Sales invoices, with the buyer's GSTIN for B2B sales", "Debit and credit notes issued in the period", "HSN-wise summary of what you sold", "Totals of sales to consumers (B2C) and any advances received"],
    h1: "GSTR-1 due dates for 2026-27",
    glossary: "gst-returns",
    services: FILING,
  },
  "gstr-3b": {
    name: "GSTR-3B",
    plain: "Summary return and tax payment",
    kind: "return",
    what: "The return where you total up the period's sales, subtract the input tax credit shown in GSTR-2B and pay the balance. This is the filing that actually moves money to the government.",
    who: "Every regular GST-registered business, even in a period with no sales (a nil return).",
    when: "Monthly filers: the 20th of the next month. QRMP filers: the 22nd or 24th of the month after each quarter, depending on the state (the 24th in Rajasthan).",
    ifMissed: "A late fee of ₹50 a day (₹20 for a nil return), capped between ₹500 and ₹10,000 by turnover, plus interest at 18% a year on tax paid late. Miss two periods in a row and e-way bill generation is blocked.",
    ready: ["Sales and tax totals that match your GSTR-1", "GSTR-2B for the period, reconciled with your purchase register", "Purchases on which you owe tax under reverse charge", "Enough balance in the electronic cash ledger for the tax payable"],
    h1: "GSTR-3B due dates for 2026-27",
    glossary: "gst-returns",
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
  },
  iff: {
    name: "IFF",
    plain: "Optional invoice upload for QRMP filers",
    kind: "optional",
    what: "The Invoice Furnishing Facility lets quarterly filers upload their business-to-business invoices for the first two months of a quarter, so buyers get input tax credit that month instead of waiting for the quarterly GSTR-1.",
    who: "QRMP filers who sell to other GST-registered businesses. It is optional, and limited to ₹50 lakh of invoices a month.",
    when: "The 13th of the next month, for the first and second month of each quarter.",
    ifMissed: "No late fee, because it is optional. The invoices simply go into your quarterly GSTR-1, and your buyers wait longer for their credit.",
    ready: ["B2B sales invoices for the month", "Debit and credit notes issued to registered buyers"],
    h1: "IFF due dates for 2026-27 (QRMP)",
    services: FILING,
  },
  "pmt-06": {
    name: "PMT-06",
    plain: "Monthly tax payment for QRMP filers",
    kind: "payment",
    what: "A challan, not a return. Quarterly filers still pay tax every month: PMT-06 is how you deposit it for the first two months of each quarter, either as a fixed sum the portal works out (35% of the cash tax paid last quarter) or as your own calculation.",
    who: "Businesses in the QRMP scheme. There is nothing to pay if your credit or cash ledger already covers the month's tax, or there is no liability.",
    when: "The 25th of the next month, for the first and second month of each quarter.",
    ifMissed: "No late fee, but interest at 18% a year on the shortfall until you pay it.",
    ready: ["The month's sales and tax, or last quarter's cash tax figure for the fixed-sum method", "Input tax credit available for the month", "Net banking, UPI or a bank challan to pay"],
    h1: "PMT-06 due dates for 2026-27 (QRMP)",
    services: FILING,
  },
  "cmp-08": {
    name: "CMP-08",
    every: "quarter",
    plain: "Quarterly tax payment for composition dealers",
    kind: "payment",
    what: "A short statement of the quarter's turnover, with the composition tax paid alongside it: 1% for traders and manufacturers, 5% for restaurants, 6% for service providers.",
    who: "Businesses registered under the composition scheme.",
    when: "The 18th of the month after each quarter.",
    ifMissed: "Interest at 18% a year on the tax paid late. Skip two quarters in a row and e-way bill generation is blocked.",
    ready: ["Total sales for the quarter", "Purchases on which you owe tax under reverse charge", "Balance in the cash ledger for the tax due"],
    h1: "CMP-08 due dates for 2026-27",
    glossary: "composition-scheme",
    services: FILING,
  },
  "gstr-9": {
    name: "GSTR-9",
    every: "year",
    plain: "Annual return, with GSTR-9C",
    kind: "return",
    what: "A year-end summary of every GSTR-1 and GSTR-3B you filed: sales, input tax credit, tax paid and refunds. Businesses above ₹5 crore also file GSTR-9C, which reconciles the return with the audited books.",
    who: "Regular taxpayers with turnover above ₹2 crore. It is optional up to ₹2 crore, and GSTR-9C applies above ₹5 crore.",
    when: "31 December after the financial year ends.",
    ifMissed: "A late fee of ₹50 a day for turnover up to ₹5 crore and ₹100 a day for ₹5–20 crore (both capped at 0.04% of turnover), or ₹200 a day above ₹20 crore (capped at 0.5%). GSTR-9 cannot be revised once filed.",
    ready: ["All GSTR-1 and GSTR-3B for the year, reconciled with your books", "GSTR-2B totals against the credit you claimed", "HSN-wise summary of sales", "Audited financial statements, if GSTR-9C applies"],
    h1: "GSTR-9 and GSTR-9C due date calendar",
    glossary: "gst-returns",
    services: ["gst-return-filing-jodhpur", "statutory-audit-jodhpur"],
    post: "/blog/gstr-9-annual-return-fy-2025-26",
  },
  "gstr-4": {
    name: "GSTR-4",
    every: "year",
    plain: "Annual return for composition dealers",
    kind: "return",
    what: "The once-a-year return that sums up a composition dealer's four CMP-08 statements, along with the purchases made during the year.",
    who: "Everyone who was under the composition scheme for any part of the financial year.",
    when: "30 June after the financial year ends. It was 30 April until FY 2023-24.",
    ifMissed: "A late fee of ₹50 a day up to ₹2,000, or ₹20 a day up to ₹500 if no tax was payable for the year.",
    ready: ["The four CMP-08 statements for the year", "Purchases from registered and unregistered suppliers, and imports", "Tax paid under reverse charge"],
    h1: "GSTR-4 due date for composition dealers",
    glossary: "composition-scheme",
    services: FILING,
  },
  "itc-cutoff": {
    name: "ITC cut-off",
    every: "year",
    plain: "Last day to claim last year's input tax credit",
    kind: "deadline",
    what: "30 November is the final date to claim input tax credit on invoices from the previous financial year, to report credit notes for that year, and to correct mistakes in that year's GSTR-1 or GSTR-3B. Filing the annual return earlier closes the window sooner.",
    who: "Every regular GST-registered business.",
    when: "30 November after the financial year ends, or the date you file the annual return, whichever is earlier.",
    ifMissed: "The credit is lost for good. It cannot be claimed in a later return, and errors left in last year's GSTR-1 can no longer be amended.",
    ready: ["Last year's purchase register, matched with GSTR-2B", "Supplier invoices that were booked late or missed", "Credit notes for last year's sales", "Any GSTR-1 corrections still pending"],
    h1: "Last date to claim ITC for FY 2025-26",
    glossary: "input-tax-credit",
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
  },
  "itc-04": {
    name: "ITC-04",
    every: "half-year",
    plain: "Job work statement",
    kind: "return",
    what: "A statement of the goods you sent to job workers and what came back, so the credit on those goods stays valid.",
    who: "Manufacturers who send inputs or capital goods out for job work. Half-yearly if turnover is above ₹5 crore, once a year otherwise.",
    when: "25 October for April to September, and 25 April for October to March (or for the whole year, if turnover is up to ₹5 crore).",
    ifMissed: "There is no automatic late fee, but a general penalty of up to ₹25,000 can be levied. Inputs not back within one year, or capital goods within three, are treated as sold and taxed.",
    ready: ["Delivery challans for goods sent to each job worker", "Details of goods received back, or supplied straight from the job worker's premises"],
    h1: "ITC-04 due dates for 2026-27 (job work)",
    services: FILING,
  },
  "qrmp-option": {
    name: "QRMP choice",
    every: "quarter",
    plain: "Last day to switch monthly or quarterly filing",
    kind: "optional",
    what: "Businesses with turnover up to ₹5 crore can choose, quarter by quarter, whether to file GSTR-1 and GSTR-3B monthly or quarterly (the QRMP scheme). The choice for a quarter closes at the end of its first month.",
    who: "Regular taxpayers with turnover up to ₹5 crore who want to change how often they file. If your current setting suits you, there is nothing to do.",
    when: "30 April, 31 July, 31 October and 31 January, each for the quarter that month begins.",
    ifMissed: "No penalty. You stay on your current frequency for this quarter and can switch for the next one.",
    ready: ["Your latest GSTR-3B, filed: the portal won't let you switch otherwise", "A view on whether your buyers need your invoices every month"],
    h1: "QRMP opt-in and opt-out dates for 2026-27",
    services: FILING,
  },
  lut: {
    name: "LUT",
    every: "year",
    plain: "Exporters' Letter of Undertaking for the new year",
    kind: "deadline",
    what: "A Letter of Undertaking (Form RFD-11) lets exporters ship goods or services without paying IGST first. It is valid for one financial year, so a fresh one is needed before the first export after 1 April.",
    who: "Exporters, and suppliers to SEZ units, who export without paying IGST.",
    when: "Before your first export of the new financial year; in practice, by 31 March.",
    ifMissed: "Exports made without a valid LUT have to go out on payment of IGST, which you then claim back as a refund, tying up cash for weeks.",
    ready: ["GST portal login with the authorised signatory's DSC or EVC", "Names and addresses of two witnesses", "Last year's LUT reference number"],
    h1: "LUT renewal date for exporters (FY 2027-28)",
    glossary: "letter-of-undertaking",
    services: ["gst-refund-assistance-jodhpur", "gst-return-filing-jodhpur"],
  },
  "cmp-02": {
    name: "CMP-02",
    every: "year",
    plain: "Last day to opt in to the composition scheme",
    kind: "optional",
    what: "Small businesses that want to pay GST at a flat rate under the composition scheme from 1 April must tell the portal in Form CMP-02 before the financial year starts.",
    who: "Regular taxpayers with turnover up to ₹1.5 crore (₹50 lakh for service providers) who want to move to composition.",
    when: "31 March, for the financial year starting 1 April.",
    ifMissed: "You stay a regular taxpayer for the whole year and can opt in only from the next one.",
    ready: ["Last year's turnover, to confirm you are within the limit", "Stock details: Form ITC-03, which reverses credit on stock, is due within 60 days of switching"],
    h1: "Composition scheme opt-in date (CMP-02)",
    glossary: "composition-scheme",
    services: ["gst-registration-jodhpur", "gst-return-filing-jodhpur"],
  },
  "gstr-2b": {
    name: "GSTR-2B",
    plain: "Your input tax credit statement is ready",
    kind: "info",
    what: "Nothing to file. On the 14th the portal generates GSTR-2B, a statement of the input tax credit you can claim, built from what your suppliers reported. Check it against your purchase register before you file GSTR-3B.",
    who: "Monthly filers every month. QRMP filers get theirs once a quarter.",
    when: "Generated on the 14th of the next month.",
    ifMissed: "No penalty, but credit claimed in GSTR-3B that isn't in GSTR-2B can be reversed with interest. Chase suppliers whose invoices are missing.",
    ready: ["Your purchase register for the period", "A list of supplier invoices missing from the statement"],
    h1: "GSTR-2B generation dates for 2026-27",
    glossary: "gstr-2b",
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
  },
  "gstr-7": {
    name: "GSTR-7",
    plain: "Return for TDS deducted under GST",
    kind: "return",
    what: "A monthly return of the 2% GST TDS that government bodies and notified buyers deduct from payments to suppliers on contracts above ₹2.5 lakh.",
    who: "Government departments, local authorities, PSUs and other notified deductors. Not ordinary businesses.",
    when: "The 10th of the next month.",
    ifMissed: "A late fee of ₹50 a day, capped at ₹2,000, plus interest at 18% a year on TDS deposited late. Suppliers can't use the credit until it is filed.",
    ready: ["Payments made to each supplier and the TDS deducted", "Suppliers' GSTINs"],
    h1: "GSTR-7 due dates for 2026-27 (GST TDS)",
    services: FILING,
  },
  "gstr-8": {
    name: "GSTR-8",
    plain: "Return for e-commerce operators",
    kind: "return",
    what: "A monthly statement of the sales made through an online marketplace and the tax collected at source (TCS) on them.",
    who: "E-commerce operators such as online marketplaces. Sellers on those marketplaces don't file it.",
    when: "The 10th of the next month.",
    ifMissed: "A daily late fee until it is filed, plus interest at 18% a year on TCS deposited late. Sellers can't see the TCS credit until then.",
    ready: ["Supplier-wise sales and returns through the platform", "TCS collected on each supplier's net sales"],
    h1: "GSTR-8 due dates for 2026-27 (e-commerce)",
    services: FILING,
  },
  "gstr-5": {
    name: "GSTR-5",
    plain: "Return for non-resident taxable persons",
    kind: "return",
    what: "A monthly return of sales, imports and tax for foreign businesses that supply in India without a fixed place of business here.",
    who: "Non-resident taxable persons holding a temporary GST registration.",
    when: "The 13th of the next month, or within 7 days of the registration expiring, whichever is earlier.",
    ifMissed: DAILY_FEE,
    ready: ["Sales and import details for the month", "The advance tax deposited at registration"],
    h1: "GSTR-5 due dates for 2026-27",
    services: FILING,
  },
  "gstr-6": {
    name: "GSTR-6",
    plain: "Return for input service distributors",
    kind: "return",
    what: "A monthly return in which a head office, registered as an input service distributor, passes the credit on shared services such as audit fees or software to its branches.",
    who: "Businesses registered as an Input Service Distributor, which companies sharing common services across GSTINs have had to be since April 2025.",
    when: "The 13th of the next month.",
    ifMissed: "A daily late fee until it is filed, and the branches can't claim the distributed credit in time.",
    ready: ["Invoices for common services received at the head office", "Turnover of each branch, which decides how the credit is split"],
    h1: "GSTR-6 due dates for 2026-27 (ISD)",
    services: FILING,
  },
  "gstr-5a": {
    name: "GSTR-5A",
    plain: "Return for overseas online service providers",
    kind: "return",
    what: "A monthly return for foreign companies selling online services, such as streaming or software subscriptions, to consumers in India.",
    who: "Overseas online service (OIDAR) and online money gaming suppliers registered in India. Not Indian businesses.",
    when: "The 20th of the next month.",
    ifMissed: DAILY_FEE,
    ready: ["The month's sales to unregistered customers in India, state by state"],
    h1: "GSTR-5A due dates for 2026-27 (OIDAR)",
    services: FILING,
  },
} satisfies Record<string, GstItem>;

export type GstItemId = keyof typeof ITEMS;
export const GST_ITEMS: Record<GstItemId, GstItem> = ITEMS;
export const GST_ITEM_IDS = Object.keys(ITEMS) as GstItemId[];
export const isGstItemId = (s: string): s is GstItemId => s in ITEMS;

/** The repeating cycle for each kind of filer, in the order it happens. */
export const GST_CYCLES: { filer: GstFiler; rhythm: string; steps: { when: string; item: GstItemId; text: string }[] }[] = [
  {
    filer: "monthly",
    rhythm: "Every month",
    steps: [
      { when: "11th", item: "gstr-1", text: "Report last month's sales." },
      { when: "14th", item: "gstr-2b", text: "The portal shows the input tax credit you can claim." },
      { when: "20th", item: "gstr-3b", text: "Set that credit against your sales and pay the balance." },
    ],
  },
  {
    filer: "qrmp",
    rhythm: "Pay monthly, file quarterly",
    steps: [
      { when: "13th", item: "iff", text: "Optionally upload B2B invoices for months one and two." },
      { when: "25th", item: "pmt-06", text: "Pay the tax for months one and two by challan." },
      { when: "13th after the quarter", item: "gstr-1", text: "Report the quarter's sales." },
      { when: "22nd or 24th after the quarter", item: "gstr-3b", text: "File the quarter's summary and pay what is left." },
    ],
  },
  {
    filer: "composition",
    rhythm: "Once a quarter, once a year",
    steps: [
      { when: "18th after the quarter", item: "cmp-08", text: "Declare the quarter's turnover and pay the flat-rate tax." },
      { when: "30 June", item: "gstr-4", text: "File one annual return for the year." },
    ],
  },
];

// ---------- The dates ----------

export type GstEvent = {
  /** ISO date, "2026-11-20". */
  date: string;
  item: GstItemId;
  filers: GstFiler[];
  /** What the filing covers: "October 2026", "Jul–Sep 2026", "FY 2025-26". */
  period: string;
  /** Which filers this particular date is for, when the item has more than one date. */
  variant?: string;
  /** One-off changes, e.g. an extension. */
  note?: string;
};

/** Notified one-off changes to a standard date. */
const DATE_CHANGES: { item: GstItemId; from: string; to: string; note: string }[] = [
  { item: "gstr-3b", from: "2026-04-20", to: "2026-04-21", note: "Extended by one day, from 20 April 2026, by Notification 01/2026-Central Tax." },
];

const MON = MONTH_NAMES.map((m) => m.slice(0, 3));
const REGULAR: GstFiler[] = ["monthly", "qrmp"];
/** "FY 2025-26" from its starting year. */
const fy = (start: number) => `FY ${start}-${String(start + 1).slice(2)}`;

/** Every date that falls in one calendar month ("2026-11"). */
function monthEvents(month: string): GstEvent[] {
  const [y, m] = month.split("-").map(Number);
  const prev = shiftMonth(month, -1);
  const [py, pm] = prev.split("-").map(Number);
  const lastMonth = monthLabel(prev);
  // Returns filed in April, July, October and January also close a quarter.
  const quarterEnd = pm % 3 === 0;
  const quarter = `${MON[(pm + 9) % 12]}–${MON[pm - 1]} ${py}`;
  const on = (day: number, item: GstItemId, filers: GstFiler[], period: string, variant?: string): GstEvent => ({ date: `${month}-${pad2(day)}`, item, filers, period, variant });

  const out = [
    on(10, "gstr-7", ["other"], lastMonth),
    on(10, "gstr-8", ["other"], lastMonth),
    on(11, "gstr-1", ["monthly"], lastMonth, "Monthly filers"),
    on(13, "gstr-5", ["other"], lastMonth),
    on(13, "gstr-6", ["other"], lastMonth),
    on(14, "gstr-2b", quarterEnd ? REGULAR : ["monthly"], lastMonth, quarterEnd ? "Monthly filers, and the quarter's statement for QRMP filers" : "Monthly filers"),
    on(20, "gstr-3b", ["monthly"], lastMonth, "Monthly filers"),
    on(20, "gstr-5a", ["other"], lastMonth),
  ];
  if (quarterEnd)
    out.push(
      on(13, "gstr-1", ["qrmp"], quarter, "Quarterly (QRMP) filers"),
      on(18, "cmp-08", ["composition"], quarter),
      ...QRMP_STATE_GROUPS.map((g) => on(g.day, "gstr-3b", ["qrmp"], quarter, `QRMP filers in ${g.name} states${g.day === 24 ? ", including Rajasthan" : ""}`)),
    );
  else out.push(on(13, "iff", ["qrmp"], lastMonth), on(25, "pmt-06", ["qrmp"], lastMonth));

  if (m % 3 === 1) out.push(on(daysInMonth(month), "qrmp-option", REGULAR, `${MON[m - 1]}–${MON[m + 1]} ${y}`));
  if (m === 4) out.push(on(25, "itc-04", REGULAR, `Oct ${y - 1}–Mar ${y}`, "Half-yearly filers; the full year if turnover is up to ₹5 crore"));
  if (m === 10) out.push(on(25, "itc-04", REGULAR, `Apr–Sep ${y}`, "Turnover above ₹5 crore"));
  if (m === 6) out.push(on(30, "gstr-4", ["composition"], fy(y - 1)));
  if (m === 11) out.push(on(30, "itc-cutoff", REGULAR, fy(y - 1)));
  if (m === 12) out.push(on(31, "gstr-9", REGULAR, fy(y - 1)));
  if (m === 3) out.push(on(31, "lut", REGULAR, fy(y)), on(31, "cmp-02", ["composition"], fy(y)));
  return out;
}

export const GST_MONTHS: string[] = [];
for (let m = GST_CALENDAR_RANGE.from; m <= GST_CALENDAR_RANGE.to; m = shiftMonth(m, 1)) GST_MONTHS.push(m);

export const GST_EVENTS: GstEvent[] = GST_MONTHS.flatMap(monthEvents)
  .map((e) => {
    const change = DATE_CHANGES.find((c) => c.item === e.item && c.from === e.date);
    return change ? { ...e, date: change.to, note: change.note } : e;
  })
  .sort((a, b) => a.date.localeCompare(b.date) || GST_ITEM_IDS.indexOf(a.item) - GST_ITEM_IDS.indexOf(b.item));

/** Dates with at least one entry, in order. Each has its own page. */
export const GST_DATES = [...new Set(GST_EVENTS.map((e) => e.date))];

export const eventsOn = (date: string) => GST_EVENTS.filter((e) => e.date === date);
export const eventsIn = (month: string) => GST_EVENTS.filter((e) => e.date.startsWith(month));
export const eventsOf = (item: GstItemId) => GST_EVENTS.filter((e) => e.item === item);
/** "GSTR-3B for October 2026" */
export const eventTitle = (e: GstEvent) => `${GST_ITEMS[e.item].name} for ${e.period}`;
/** False for GSTR-2B: it appears on the calendar but nothing is due. */
export const isDue = (e: GstEvent) => GST_ITEMS[e.item].kind !== "info";

export const monthFromSlug = (slug: string) => GST_MONTHS.find((m) => monthSlug(m) === slug);

// ---------- Page copy built from the data ----------

/** One or two lines on what makes each calendar month different (index 0 = January). */
export const MONTH_NOTES = [
  "A quarter-end month: QRMP filers file GSTR-1 and GSTR-3B for October to December, composition dealers pay through CMP-08, and the choice between monthly and quarterly filing for January to March closes on the 31st.",
  "A plain month with only the regular cycle. The window to switch between monthly and quarterly filing for April to June opens on 1 February.",
  "The last month of the financial year. Exporters renew their Letter of Undertaking and small businesses opt in to composition by 31 March, and it is the time to reconcile the year's books with your returns.",
  "The first month of the financial year. March's returns close out the old year, job work statements (ITC-04) are due on the 25th, the QRMP choice for April to June closes on the 30th, and a fresh invoice series starts on 1 April.",
  "A plain month with only the regular cycle. QRMP filers pay April's tax by challan on the 25th.",
  "Composition dealers file GSTR-4, their annual return for the previous financial year, by 30 June.",
  "A quarter-end month: QRMP filers file GSTR-1 and GSTR-3B for April to June, composition dealers pay through CMP-08, and the QRMP choice for July to September closes on the 31st.",
  "A plain month with only the regular cycle. QRMP filers pay July's tax by challan on the 25th.",
  "A plain month on the calendar, and a good one to start matching last year's purchases with GSTR-2B: the cut-off for last year's input tax credit is 30 November.",
  "A quarter-end month: QRMP filers file for July to September, composition dealers pay through CMP-08, larger manufacturers file ITC-04 on the 25th, and the QRMP choice for October to December closes on the 31st.",
  "30 November is the cut-off for last year's input tax credit, credit notes and corrections. Most businesses make them in the October returns: GSTR-1 on the 11th and GSTR-3B on the 20th.",
  "GSTR-9, the annual return for the previous financial year, is due on 31 December, along with GSTR-9C for businesses above ₹5 crore.",
];

const list = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);
/** Longest version that still fits a search snippet (the SEO audit allows 110-165 characters). */
const describe = (lead: string, names: string[], tail: string) => {
  for (let n = names.length; n > 1; n--) {
    const s = `${lead} ${names.slice(0, n).join(", ")}${n < names.length ? " and more" : ""}. ${tail}`;
    if (s.length <= 165) return s;
  }
  return `${lead} ${names[0]}${names.length > 1 ? " and more" : ""}. ${tail}`;
};

export function dateCopy(date: string) {
  const events = eventsOn(date);
  const names = [...new Set(events.map((e) => GST_ITEMS[e.item].name))];
  const full = longDate(date);
  // Brand suffix only when it fits in the 65-character title limit.
  let title = `${full} GST Due Date: ${names[0]}`;
  for (const n of names.slice(1)) if (`${title}, ${n}`.length <= 62) title += `, ${n}`;
  const due = events.filter(isDue);
  const faqs: Faq[] = [
    {
      q: `Which GST returns are due on ${full}?`,
      a: due.length
        ? `${weekday(date)}, ${full} is the due date for ${list(due.map((e) => `${eventTitle(e)}${e.variant ? ` (${e.variant})` : ""}`))}.`
        : `Nothing has to be filed on ${full}. It is the day the GST portal generates ${list(events.map(eventTitle))}.`,
    },
    ...events.slice(0, 3).map((e) => ({
      q: `Who does ${eventTitle(e)}${e.variant ? ` (${e.variant})` : ""} on ${shortDate(date)} apply to?`,
      a: GST_ITEMS[e.item].who,
    })),
    { q: `What happens if I miss ${eventTitle(events[0])} on ${full}?`, a: GST_ITEMS[events[0].item].ifMissed },
  ];
  return {
    title,
    absoluteTitle: title.length > 47,
    description: describe(`GST on ${weekday(date)}, ${full}:`, events.map(eventTitle), "Who it applies to, what to keep ready and what a late filing costs."),
    faqs,
  };
}

export function monthCopy(month: string) {
  const label = monthLabel(month);
  const events = eventsIn(month).filter(isDue);
  const first = events[0];
  const last = events.at(-1)!;
  const byDate = [...new Set(events.map((e) => e.date))].map((d) => `${shortDate(d)}: ${list([...new Set(events.filter((e) => e.date === d).map((e) => GST_ITEMS[e.item].name))])}`);
  const periods = [...new Set(events.filter((e) => ["return", "payment"].includes(GST_ITEMS[e.item].kind)).map((e) => e.period))];
  const faqs: Faq[] = [
    { q: `What are the GST due dates in ${label}?`, a: `${byDate.join("; ")}.` },
    { q: `Which periods do the GST returns due in ${label} cover?`, a: `Returns and payments due in ${label} cover ${list(periods)}.` },
    { q: `What is the last GST due date in ${label}?`, a: `${eventTitle(last)}, on ${weekday(last.date)}, ${longDate(last.date)}. ${GST_ITEMS[last.item].who}` },
  ];
  return {
    title: `GST Due Dates in ${label}: Full Calendar`,
    description: `All ${events.length} GST due dates in ${label}, from ${GST_ITEMS[first.item].name} on ${shortDate(first.date)} to ${GST_ITEMS[last.item].name} on ${shortDate(last.date)}, with who files each one and what a late filing costs.`,
    note: MONTH_NOTES[Number(month.slice(5)) - 1],
    faqs,
  };
}

export function itemCopy(id: GstItemId) {
  const item = GST_ITEMS[id];
  const faqs: Faq[] = [
    { q: `When is ${item.name} due in ${GST_CALENDAR_FY}?`, a: item.when },
    { q: `Who does ${item.name} apply to?`, a: item.who },
    { q: `What happens if I miss ${item.name}?`, a: item.ifMissed },
  ];
  return {
    title: item.h1,
    description: `${item.name} dates for ${GST_CALENDAR_FY} in one table. ${item.plain}: who it applies to, what to keep ready and the cost of missing it.`,
    faqs,
  };
}

export const GST_CALENDAR_FAQS: Faq[] = [
  {
    q: "What are the GST due dates every month?",
    a: "For monthly filers, GSTR-1 is due on the 11th and GSTR-3B on the 20th of the next month. GSTR-2B, the input tax credit statement, is generated on the 14th in between. TDS deductors and e-commerce operators file GSTR-7 and GSTR-8 by the 10th.",
  },
  {
    q: "What are the GST due dates under the QRMP scheme?",
    a: "In the first two months of a quarter, QRMP filers can upload B2B invoices through the IFF by the 13th and must pay tax through PMT-06 by the 25th. After the quarter ends, GSTR-1 is due on the 13th and GSTR-3B on the 22nd or 24th, depending on the state. Rajasthan is in the 24th group.",
  },
  {
    q: "Do GST due dates move if they fall on a Sunday or a public holiday?",
    a: "No. The GST portal accepts returns every day of the year, and a due date changes only when CBIC issues a notification. For example, GSTR-3B for March 2026 was extended by one day, to 21 April 2026, by Notification 01/2026-Central Tax.",
  },
  {
    q: "What happens if I miss a GST due date?",
    a: "For GSTR-1 and GSTR-3B, a late fee of ₹50 a day (₹20 for a nil return) runs until you file, and tax paid late carries interest at 18% a year. Missing two periods in a row blocks e-way bill generation, and a return cannot be filed at all once three years have passed from its due date.",
  },
  {
    q: "What are the GST due dates for composition dealers?",
    a: "Composition dealers pay tax once a quarter through CMP-08, by the 18th of the month after the quarter, and file one annual return, GSTR-4, by 30 June after the financial year ends.",
  },
];

// ---------- Self-check: runs at build, so a bad rule fails `npm run check` instead of publishing a wrong date ----------
const due = (item: GstItemId, period: string, variant = "") => GST_EVENTS.find((e) => e.item === item && e.period === period && (e.variant ?? "").includes(variant))?.date;
const expectations: [string | undefined, string][] = [
  [due("gstr-1", "October 2026"), "2026-11-11"],
  [due("gstr-3b", "October 2026"), "2026-11-20"],
  [due("gstr-3b", "March 2026"), "2026-04-21"], // the notified extension
  [due("gstr-1", "Jul–Sep 2026"), "2026-10-13"],
  [due("gstr-3b", "Jul–Sep 2026", "Rajasthan"), "2026-10-24"],
  [due("gstr-3b", "Oct–Dec 2026", "Group 1"), "2027-01-22"],
  [due("cmp-08", "Jan–Mar 2027"), "2027-04-18"],
  [due("pmt-06", "November 2026"), "2026-12-25"],
  [due("gstr-9", "FY 2025-26"), "2026-12-31"],
  [due("gstr-4", "FY 2026-27"), "2027-06-30"],
  [due("qrmp-option", "Jan–Mar 2027"), "2027-01-31"],
];
for (const [got, want] of expectations) if (got !== want) throw new Error(`GST calendar rule broken: expected ${want}, got ${got}`);
for (const e of GST_EVENTS) if (Number(e.date.slice(8)) > daysInMonth(e.date.slice(0, 7))) throw new Error(`GST calendar: ${e.date} is not a real date`);
