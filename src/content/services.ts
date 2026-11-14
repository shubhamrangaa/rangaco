export type ServiceIcon =
  | "receipt"
  | "badge"
  | "file-spreadsheet"
  | "landmark"
  | "shield-check"
  | "book-open"
  | "line-chart"
  | "lightbulb"
  | "refresh"
  | "mail-warning";

export type Service = {
  slug: string;
  /** Short label for nav, cards and breadcrumbs. */
  name: string;
  /** Page H1. Keep the primary keyword + "Jodhpur". */
  h1: string;
  /** <title> without the " | Ranga & Company" suffix. Aim for <= 42 chars. */
  metaTitle: string;
  /** 140-160 chars. */
  metaDescription: string;
  /** One line for cards. */
  summary: string;
  price: string;
  /** What the price covers and how other tiers are priced; shown in the page's fees section. */
  priceNotes?: string[];
  icon: ServiceIcon;
  related: string[];
  /** Shown on the homepage grid. */
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "itr-filing-jodhpur",
    name: "ITR Filing",
    h1: "Income Tax Return (ITR) Filing in Jodhpur",
    metaTitle: "ITR Filing in Jodhpur from ₹1,200",
    metaDescription:
      "Income tax return filing in Jodhpur for salaried people, traders and professionals. Right ITR form, every deduction claimed, e-verified. From ₹1,200.",
    summary: "Salaried, business, capital gains and NRI returns, filed and e-verified.",
    price: "From ₹1,200",
    icon: "receipt",
    related: ["income-tax-advisory-jodhpur", "income-tax-notice-reply-jodhpur", "gst-return-filing-jodhpur"],
    featured: true,
  },
  {
    slug: "gst-registration-jodhpur",
    name: "GST Registration",
    h1: "GST Registration in Jodhpur",
    metaTitle: "GST Registration in Jodhpur from ₹2,999",
    metaDescription:
      "GST registration in Jodhpur in 3–5 working days. We file REG-01, upload KYC and answer portal queries so your GSTIN isn't rejected. From ₹2,999.",
    summary: "GSTIN in 3–5 working days, with portal queries handled for you.",
    price: "From ₹2,999",
    icon: "badge",
    related: ["gst-return-filing-jodhpur", "gst-refund-assistance-jodhpur", "tds-tcs-compliance-jodhpur"],
    featured: true,
  },
  {
    slug: "gst-return-filing-jodhpur",
    name: "GST Return Filing",
    h1: "GST Return Filing (GSTR-1 & GSTR-3B) in Jodhpur",
    metaTitle: "GST Return Filing in Jodhpur from ₹799",
    metaDescription:
      "Monthly and quarterly GSTR-1 and GSTR-3B filing in Jodhpur with GSTR-2B reconciliation, so you keep every rupee of input tax credit. From ₹799 a return.",
    summary: "GSTR-1 and GSTR-3B on time, reconciled with GSTR-2B.",
    price: "From ₹799 / return",
    icon: "file-spreadsheet",
    related: ["gst-registration-jodhpur", "gst-refund-assistance-jodhpur", "accounting-payroll-jodhpur"],
    featured: true,
  },
  {
    slug: "tds-tcs-compliance-jodhpur",
    name: "TDS & TCS",
    h1: "TDS & TCS Compliance in Jodhpur",
    metaTitle: "TDS & TCS Return Filing in Jodhpur",
    metaDescription:
      "TDS and TCS deposits, quarterly returns and Form 16/16A for Jodhpur businesses. Challans on time, corrections handled. Packages from ₹2,500 a quarter.",
    summary: "Monthly deposits, quarterly returns and Form 16/16A.",
    price: "From ₹2,500 / quarter",
    priceNotes: ["The starting package covers up to 200 deductee lines a quarter", "Correction statements are billed separately"],
    icon: "landmark",
    related: ["accounting-payroll-jodhpur", "statutory-audit-jodhpur", "virtual-cfo-jodhpur"],
    featured: true,
  },
  {
    slug: "statutory-audit-jodhpur",
    name: "Audit & Assurance",
    h1: "Statutory & Tax Audit Support in Jodhpur",
    metaTitle: "Statutory & Tax Audit Support in Jodhpur",
    metaDescription:
      "Statutory and tax audit support for Jodhpur companies, LLPs and firms. We prepare your books and schedules; reports are signed by our partner CA firm.",
    summary: "Audit-ready books, with reports signed by our partner CA firm.",
    price: "From ₹50,000",
    priceNotes: ["Small company: ₹50,000 to ₹1.5 lakh", "Medium enterprise: quoted after scoping"],
    icon: "shield-check",
    related: ["accounting-payroll-jodhpur", "virtual-cfo-jodhpur", "tds-tcs-compliance-jodhpur"],
    featured: true,
  },
  {
    slug: "accounting-payroll-jodhpur",
    name: "Accounting & Payroll",
    h1: "Accounting & Payroll Services in Jodhpur",
    metaTitle: "Accounting & Payroll in Jodhpur",
    metaDescription:
      "Outsourced bookkeeping and payroll for Jodhpur businesses in Tally, Zoho Books or QuickBooks, with GST and TDS reconciled monthly. From ₹5,000 a month.",
    summary: "Bookkeeping in Tally or Zoho, payslips, PF and ESI.",
    price: "From ₹5,000 / month",
    priceNotes: ["Starter plan: up to 200 vouchers a month", "Your choice of Tally, Zoho Books or QuickBooks"],
    icon: "book-open",
    related: ["statutory-audit-jodhpur", "virtual-cfo-jodhpur", "gst-return-filing-jodhpur"],
    featured: true,
  },
  {
    slug: "virtual-cfo-jodhpur",
    name: "Virtual CFO",
    h1: "Virtual CFO Services for SMEs in Jodhpur",
    metaTitle: "Virtual CFO Services in Jodhpur",
    metaDescription:
      "Part-time CFO for Jodhpur SMEs: monthly MIS, cash-flow forecasts, budgets and investor-ready financials, without a full-time salary. From ₹25,000 a month.",
    summary: "MIS, cash-flow forecasts and budgets without a full-time CFO.",
    price: "From ₹25,000 / month",
    priceNotes: ["Lite: monthly MIS and a review call, ₹25,000 a month", "Growth: adds an on-site visit and budgeting, ₹40,000 a month"],
    icon: "line-chart",
    related: ["accounting-payroll-jodhpur", "statutory-audit-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    slug: "income-tax-advisory-jodhpur",
    name: "Tax Advisory",
    h1: "Income Tax Advisory & Planning in Jodhpur",
    metaTitle: "Income Tax Planning & Advisory in Jodhpur",
    metaDescription:
      "Tax planning in Jodhpur for salaried people, business owners and families: old vs new regime, capital gains, HUF and advance tax, explained plainly.",
    summary: "Regime choice, capital gains and advance tax, planned ahead.",
    price: "Custom pricing",
    icon: "lightbulb",
    related: ["itr-filing-jodhpur", "income-tax-notice-reply-jodhpur", "tds-tcs-compliance-jodhpur"],
  },
  {
    slug: "gst-refund-assistance-jodhpur",
    name: "GST Refunds",
    h1: "GST Refund Assistance in Jodhpur",
    metaTitle: "GST Refund Assistance in Jodhpur",
    metaDescription:
      "GST refunds for Jodhpur exporters and businesses with inverted duty or excess cash balance. RFD-01 filed, queries answered, order followed up.",
    summary: "Export, inverted-duty and excess-balance refunds, tracked to credit.",
    price: "5% of refund (min ₹5,000)",
    icon: "refresh",
    related: ["gst-return-filing-jodhpur", "gst-registration-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    slug: "income-tax-notice-reply-jodhpur",
    name: "Notice Replies",
    h1: "Income Tax Notice Reply & Scrutiny Support in Jodhpur",
    metaTitle: "Income Tax Notice Reply in Jodhpur",
    metaDescription:
      "Got an income tax notice? We read it, draft the reply, upload it on the portal and represent you in Jodhpur hearings. Flat fee from ₹7,500.",
    summary: "Notices read, replies drafted and filed, hearings attended.",
    price: "From ₹7,500",
    priceNotes: ["Flat fee for notices with a demand of up to ₹10 lakh", "Higher-complexity cases are quoted after we review the notice"],
    icon: "mail-warning",
    related: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur", "statutory-audit-jodhpur"],
  },
];

export const getService = (slug: string) => {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
};

export const serviceHref = (slug: string) => `/services/${slug}`;
