import type { GlossaryTerm } from "./types";

export const PROPERTY_TERMS: GlossaryTerm[] = [
  {
    slug: "capital-gains-tax",
    question: "What is capital gains tax?",
    term: "Capital gains tax",
    category: "Property & capital gains",
    definition:
      "Capital gains tax is income tax on the profit from selling a capital asset such as property, shares, mutual funds or gold. The rate depends on the asset and on whether the gain is short-term or long-term.",
    facts: [
      ["Long-term after", "12 months (listed shares, equity funds); 24 months (property, most other assets)"],
      ["Listed equity, short-term", "20%"],
      ["Listed equity, long-term", "12.5% on gains above ₹1.25 lakh a year"],
      ["Property, long-term", "12.5% without indexation (20% with indexation option for pre-23 July 2024 purchases)"],
      ["Reported in", "Schedule CG of ITR-2 or ITR-3"],
    ],
    sections: [
      {
        heading: "Rates for transfers from 23 July 2024",
        table: {
          head: ["Asset", "Short-term", "Long-term"],
          rows: [
            ["Listed shares, equity mutual funds", "20% (held ≤ 12 months)", "12.5% above ₹1.25 lakh"],
            ["Land and buildings", "Slab rate (held ≤ 24 months)", "12.5%, or 20% with indexation for resident individuals/HUFs who bought before 23 July 2024"],
            ["Unlisted shares, gold, others", "Slab rate (held ≤ 24 months)", "12.5%"],
            ["Debt mutual funds (bought from April 2023)", "Slab rate", "Slab rate"],
          ],
        },
      },
      {
        heading: "Working out the gain",
        steps: [
          "Sale price (or stamp duty value for property, if more than 110% of the price)",
          "Minus transfer costs such as brokerage",
          "Minus the cost of acquisition and improvement (indexed, if you use the indexation option)",
          "Minus exemptions such as sections 54, 54F or 54EC",
        ],
      },
      {
        heading: "Saving capital gains tax",
        bullets: [
          "Section 54: reinvest gains from a house in another house",
          "Section 54F: reinvest proceeds from other assets, such as a plot, in a house",
          "Section 54EC: invest up to ₹50 lakh in specified bonds within 6 months",
          "Harvest equity gains up to ₹1.25 lakh a year, which are tax-free",
        ],
      },
    ],
    mistakes: [
      "Not paying advance tax in the quarter after a large sale",
      "Ignoring the stamp duty value when the agreed price is lower",
      "Claiming indexation on property bought after 23 July 2024",
    ],
    faqs: [
      { q: "What is the tax on long-term capital gains from shares?", a: "12.5% on long-term gains from listed shares and equity mutual funds above ₹1.25 lakh in a financial year, for transfers from 23 July 2024." },
      { q: "Is indexation still available?", a: "Only for resident individuals and HUFs selling land or buildings acquired before 23 July 2024, who can pay 20% with indexation instead of 12.5% without." },
      { q: "How long must I hold property for long-term capital gains?", a: "More than 24 months." },
    ],
    related: ["cost-inflation-index", "section-54-exemption", "stamp-duty", "tds-on-property"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur"],
  },
  {
    slug: "cost-inflation-index",
    question: "What is the cost inflation index (CII)?",
    metaDescription: "The cost inflation index (CII) adjusts purchase cost for inflation to cut capital gains tax. CII table, the indexation formula and when you can still use it.",
    term: "Cost inflation index",
    abbr: "CII",
    category: "Property & capital gains",
    definition:
      "The cost inflation index (CII) is a yearly number notified by CBDT to adjust an asset's purchase cost for inflation (indexation), which reduces the taxable long-term capital gain.",
    facts: [
      ["Base year", "2001-02 = 100"],
      ["FY 2025-26", "376"],
      ["Formula", "Indexed cost = Cost × CII of sale year ÷ CII of purchase year"],
      ["Who can still use it", "Resident individuals and HUFs selling land or buildings bought before 23 July 2024 (with the 20% rate)"],
    ],
    sections: [
      {
        heading: "CII by year",
        table: {
          head: ["Financial year", "CII"],
          rows: [
            ["2001-02", "100"],
            ["2010-11", "167"],
            ["2012-13", "200"],
            ["2015-16", "254"],
            ["2018-19", "280"],
            ["2020-21", "301"],
            ["2022-23", "331"],
            ["2023-24", "348"],
            ["2024-25", "363"],
            ["2025-26", "376"],
          ],
        },
        note: "For assets bought before 1 April 2001, the cost is taken as the fair market value on 1 April 2001.",
      },
      {
        heading: "Indexation since July 2024",
        paras: [
          "From 23 July 2024, long-term gains on most assets are taxed at 12.5% without indexation. Resident individuals and HUFs selling land or buildings bought before that date can still compute tax at 20% with indexation and pay whichever is lower.",
        ],
      },
    ],
    example:
      "A plot bought in 2012-13 for ₹20 lakh and sold in 2025-26 for ₹80 lakh: indexed cost = ₹20 lakh × 376 ÷ 200 = ₹37.6 lakh, so the indexed gain is ₹42.4 lakh. At 20% that is ₹8.48 lakh, versus ₹7.5 lakh at 12.5% without indexation, so the seller pays ₹7.5 lakh.",
    mistakes: [
      "Using the CII of the calendar year instead of the financial year",
      "Indexing the cost of property bought after 23 July 2024",
    ],
    faqs: [
      { q: "What is the CII for FY 2025-26?", a: "376, with 2001-02 as the base year at 100." },
      { q: "Is indexation available on gold or mutual funds?", a: "Not for transfers from 23 July 2024; the option is retained only for land and buildings bought before that date by resident individuals and HUFs." },
      { q: "How is indexed cost calculated?", a: "Multiply the purchase cost by the CII of the year of sale and divide by the CII of the year of purchase." },
    ],
    related: ["capital-gains-tax", "section-54-exemption", "stamp-duty"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur"],
  },
  {
    slug: "section-54-exemption",
    question: "What is the Section 54 exemption?",
    term: "Section 54 exemption",
    category: "Property & capital gains",
    definition:
      "Section 54 exempts long-term capital gains from selling a residential house if the gain is reinvested in another residential house in India within the allowed time, up to ₹10 crore.",
    metaTitle: "Section 54 Exemption: Rules and Limits",
    metaDescription:
      "Section 54 exempts long-term gains from selling a house when you buy or build another house in India. Time limits, the ₹10 crore cap and the CGAS rule.",
    facts: [
      ["Who", "Individuals and HUFs"],
      ["Sold", "A residential house held for more than 24 months"],
      ["Reinvest in", "A residential house in India"],
      ["Timing", "Buy 1 year before or 2 years after; construct within 3 years"],
      ["Cap", "₹10 crore of exemption"],
      ["Two houses", "Allowed once in a lifetime if the gain is up to ₹2 crore"],
    ],
    sections: [
      {
        heading: "Sections 54, 54F and 54EC compared",
        table: {
          head: ["", "54", "54F", "54EC"],
          rows: [
            ["You sold", "A residential house", "Any other long-term asset (e.g. a plot)", "Land or building"],
            ["Invest in", "A residential house", "A residential house", "NHAI, REC, PFC or IRFC bonds"],
            ["Amount to invest", "The capital gain", "The net sale proceeds", "The gain, up to ₹50 lakh"],
            ["Deadline", "1 yr before / 2 yrs after (3 to build)", "Same as 54", "6 months from sale"],
          ],
        },
      },
      {
        heading: "Capital Gains Account Scheme",
        paras: [
          "If you haven't bought or built the new house by your ITR due date, deposit the unused gain in a Capital Gains Account Scheme (CGAS) account at a bank before that date. Unused amounts after the time limit become taxable.",
        ],
      },
      {
        heading: "The 3-year lock-in",
        paras: [
          "If you sell the new house within 3 years, the exemption is reversed: the earlier gain is reduced from the cost of the new house when computing tax on its sale.",
        ],
      },
    ],
    mistakes: [
      "Missing the CGAS deposit before the ITR due date",
      "Claiming 54 on a plot sale; that needs 54F with the full proceeds reinvested",
      "Buying the new house in a spouse's sole name without advice; it can complicate the claim",
    ],
    faqs: [
      { q: "Can I buy two houses under section 54?", a: "Once in a lifetime, if the long-term capital gain is up to ₹2 crore, you can invest in two residential houses." },
      { q: "Is there a limit on section 54 exemption?", a: "Yes. The exemption is capped at ₹10 crore of capital gains." },
      { q: "Can I claim section 54 for a house bought abroad?", a: "No. The new house must be in India." },
    ],
    related: ["capital-gains-tax", "cost-inflation-index", "stamp-duty", "tds-on-property"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur"],
  },
  {
    slug: "stamp-duty",
    question: "What is stamp duty?",
    term: "Stamp duty",
    category: "Property & capital gains",
    definition:
      "Stamp duty is a state tax paid on documents such as property sale deeds, gift deeds and leases. In Rajasthan, it is charged on the higher of the agreed price and the government's DLC rate for the property.",
    facts: [
      ["Levied by", "The state government (Rajasthan Stamp Act)"],
      ["Value used", "Higher of agreed price and DLC (District Level Committee) rate"],
      ["Paid via", "E-stamping or e-GRAS, before registration"],
      ["Income tax link", "Section 50C for sellers; 80C deduction for home buyers (old regime)"],
    ],
    sections: [
      {
        heading: "Stamp duty and income tax",
        table: {
          head: ["Who", "Effect"],
          rows: [
            ["Seller", "If the DLC value exceeds 110% of the price, the DLC value is treated as the sale price for capital gains (section 50C)"],
            ["Buyer", "If the DLC value exceeds 110% of the price, the difference can be taxed as the buyer's income (section 56(2)(x))"],
            ["Home buyer", "Stamp duty and registration charges count under 80C (old regime) in the year paid"],
            ["Future sale", "Stamp duty paid is part of the cost of acquisition"],
          ],
        },
      },
      {
        heading: "Paying it in Rajasthan",
        steps: [
          "Check the DLC rate for the property's area and category",
          "Work out duty and registration fee at the current notified rates",
          "Pay through e-stamping or e-GRAS",
          "Register the deed at the sub-registrar's office",
        ],
        note: "Rates and concessions (for example for women buyers) change by state notification; confirm the current rate before you sign.",
      },
    ],
    mistakes: [
      "Agreeing a price well below the DLC rate without considering 50C and 56(2)(x)",
      "Forgetting to claim stamp duty under 80C in the year of purchase",
    ],
    faqs: [
      { q: "What is the DLC rate in Rajasthan?", a: "The DLC rate is the minimum property value fixed by the District Level Committee for each area. Stamp duty is charged on the higher of the DLC value and the agreed price." },
      { q: "Can I claim a tax deduction for stamp duty?", a: "Yes, under section 80C in the old tax regime, within the ₹1.5 lakh limit, for a residential house in the year you pay it." },
      { q: "What if I sell property below the DLC rate?", a: "If the DLC value is more than 110% of the price, it is treated as the sale price for capital gains, and the buyer may be taxed on the difference." },
    ],
    related: ["capital-gains-tax", "tds-on-property", "section-80c"],
    services: ["income-tax-advisory-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur"],
  },
];
