import type { Faq } from "./faqs";

export type Deadline = { label: string; date: string; note?: string };

export type ItrYear = {
  year: number;
  fy: string;
  ay: string;
  intro: string;
  deadlines: Deadline[];
  /** Year-specific fee table; omit to point at the ITR service page instead. */
  pricing?: { type: string; fee: string }[];
  faqs: Faq[];
  sources?: { label: string; href: string }[];
  published: string;
};

// One entry per assessment year, newest first. To add next year: copy the first entry,
// update the dates and FAQs, and create src/app/itr-filing-<year>-jodhpur/page.tsx.
export const ITR_YEARS: ItrYear[] = [
  {
    year: 2026,
    fy: "2025-26",
    ay: "2026-27",
    published: "2026-11-13",
    intro:
      "Due dates, documents and fees for filing your FY 2025-26 income tax return in Jodhpur. Tax-audit cases have until 21 November 2026, and belated returns can be filed until 31 December 2026.",
    deadlines: [
      { label: "No business income (ITR-1, ITR-2)", date: "2026-07-31" },
      { label: "Non-audit business or profession (ITR-3, ITR-4)", date: "2026-08-31", note: "New 31 August slot from the Finance Act, 2026" },
      { label: "Tax audit report", date: "2026-10-21", note: "Extended by CBDT from 30 September" },
      { label: "ITR for tax-audit cases", date: "2026-11-21", note: "Extended by CBDT from 31 October" },
      { label: "Belated return", date: "2026-12-31", note: "Late fee up to ₹5,000" },
      { label: "Revised return", date: "2027-03-31" },
    ],
    faqs: [
      {
        q: "What is the ITR due date for AY 2026-27?",
        a: "31 July 2026 for taxpayers without business income, and 31 August 2026 for non-audit business or professional income. For tax-audit cases CBDT extended the ITR due date from 31 October to 21 November 2026, and the audit report date to 21 October 2026.",
      },
      {
        q: "I missed the deadline. Can I still file my ITR?",
        a: "Yes. You can file a belated return for AY 2026-27 until 31 December 2026. The late fee is ₹5,000, or ₹1,000 if your total income is up to ₹5 lakh, and interest applies on any unpaid tax. Some losses cannot be carried forward in a belated return.",
      },
      {
        q: "Which ITR form should I use?",
        a: "ITR-1 for resident individuals with salary or pension income up to ₹50 lakh and no business income, ITR-2 if you have capital gains beyond the small exemptions allowed in ITR-1, ITR-3 for business or professional income on regular books, and ITR-4 for presumptive income under sections 44AD, 44ADA or 44AE up to ₹50 lakh.",
      },
      {
        q: "Should I choose the old or the new tax regime?",
        a: "The new regime is the default. It usually suits people with few deductions; the old regime can still win if you claim large 80C, 80D, HRA or home-loan interest deductions. We calculate both before filing and recommend the lower-tax option.",
      },
      {
        q: "How long does an income tax refund take?",
        a: "Most refunds are issued within a few weeks of e-verification, though peak-season returns and returns picked for processing checks can take longer. Make sure your refund bank account is pre-validated on the e-filing portal.",
      },
    ],
    sources: [
      { label: "CBDT press release: due date extension for AY 2026-27 (28 Sep 2026)", href: "https://www.incometaxindia.gov.in/documents/d/guest/cbdt-extends-due-date-for-furnishing-return-of-income-for-ay-2026-27-pdf" },
    ],
  },
  {
    year: 2025,
    fy: "2024-25",
    ay: "2025-26",
    published: "2025-08-06",
    intro:
      "The ITR due date for non-audit taxpayers for AY 2025-26 was extended to 15 September 2025. File your return on time with Ranga & Company.",
    deadlines: [
      { label: "Non-audit taxpayers", date: "2025-09-15", note: "Extended by CBDT Circular 06/2025 from 31 July" },
      { label: "Belated return", date: "2025-12-31", note: "Late fee up to ₹5,000" },
    ],
    pricing: [
      { type: "Salaried (ITR-1)", fee: "₹499" },
      { type: "Capital gains (ITR-2)", fee: "₹999" },
      { type: "Business / freelancers (ITR-3)", fee: "₹1,499" },
      { type: "Presumptive income (ITR-4)", fee: "₹799" },
    ],
    faqs: [
      { q: "Is the ITR deadline really 15 September 2025?", a: "Yes. CBDT Circular 06/2025 extended the due date for non-audit taxpayers from 31 July to 15 September 2025." },
      { q: "What happens if I miss the deadline?", a: "You can still file a belated return till 31 December 2025, but late fees of up to ₹5,000 and interest under sections 234A/B/C will apply." },
      { q: "Can I file jointly for my spouse and me?", a: "Income tax returns are filed individually, but we can prepare both returns together to optimise deductions and coordinate refunds." },
      { q: "Do you compare old vs new tax regimes?", a: "Yes. We run both calculations and recommend the regime that minimises your tax." },
      { q: "How long will my refund take?", a: "Refunds are usually issued within 7–15 days of successful e-verification, but may take longer in peak season." },
    ],
  },
];

export const itrHref = (year: number) => `/itr-filing-${year}-jodhpur`;
export const getItrYear = (year: number) => {
  const y = ITR_YEARS.find((x) => x.year === year);
  if (!y) throw new Error(`Unknown ITR year ${year}`);
  return y;
};
export const latestItrYear = () => ITR_YEARS[0];
