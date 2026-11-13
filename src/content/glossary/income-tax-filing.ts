import type { GlossaryTerm } from "./types";

export const INCOME_TAX_FILING: GlossaryTerm[] = [
  {
    slug: "income-tax-return",
    question: "What is an income tax return (ITR)?",
    term: "Income tax return",
    abbr: "ITR",
    category: "Income tax",
    definition:
      "An income tax return (ITR) is the form you file with the Income Tax Department to report your income, deductions and tax paid for a year, and to claim any refund due.",
    metaDescription:
      "An income tax return (ITR) reports your income, deductions and tax paid for the year. Which ITR form to use, due dates, late filing and e-verification.",
    facts: [
      ["Filed on", "incometax.gov.in (e-filing portal)"],
      ["Due dates, FY 2025-26", "31 July 2026 (no business income); 31 August 2026 (non-audit business); 21 November 2026 (audit cases, extended)"],
      ["Belated return", "Until 31 December 2026, with a late fee"],
      ["Verification", "E-verify within 30 days (Aadhaar OTP, net banking or DSC)"],
      ["Late fee", "₹5,000, or ₹1,000 if total income is up to ₹5 lakh"],
    ],
    sections: [
      {
        heading: "Which ITR form should you use?",
        table: {
          head: ["Form", "Who uses it"],
          rows: [
            ["ITR-1 (Sahaj)", "Resident individuals with salary or pension up to ₹50 lakh and no business income"],
            ["ITR-2", "Individuals and HUFs with capital gains, foreign assets or more complex income, but no business"],
            ["ITR-3", "Individuals and HUFs with business or professional income on regular books"],
            ["ITR-4 (Sugam)", "Presumptive income under 44AD, 44ADA or 44AE, up to ₹50 lakh"],
            ["ITR-5 / 6 / 7", "Firms and LLPs / companies / trusts and institutions"],
          ],
        },
      },
      {
        heading: "Who must file",
        bullets: [
          "Anyone whose income before deductions exceeds the basic exemption limit",
          "Anyone with foreign assets or foreign income, even below the limit",
          "People with TDS or TCS of ₹25,000 or more (₹50,000 for senior citizens)",
          "Businesses with turnover above ₹60 lakh or professionals with receipts above ₹10 lakh",
          "Anyone who wants to claim a refund or carry forward a loss",
        ],
      },
      {
        heading: "Filing step by step",
        steps: [
          "Download AIS and Form 26AS; match them with Form 16, bank interest and capital-gains statements",
          "Pay any balance tax as self-assessment tax",
          "Choose the right ITR form and assessment year, review the pre-filled data, add missing income and deductions",
          "Submit and e-verify within 30 days",
        ],
      },
    ],
    mistakes: [
      "Choosing ITR-1 when you sold shares or mutual funds in the year",
      "Not reporting savings and FD interest that appears in AIS",
      "Submitting the return but forgetting to e-verify it",
    ],
    faqs: [
      { q: "Who must file an income tax return?", a: "Anyone whose income before deductions exceeds the basic exemption limit, plus people with foreign assets, high-value transactions or TDS of ₹25,000 or more, among other conditions." },
      { q: "Can I file my ITR after the due date?", a: "Yes, as a belated return by 31 December of the assessment year, with a late fee of up to ₹5,000. After that, only an updated return (ITR-U) is possible." },
      { q: "What happens if I don't e-verify my ITR?", a: "A return not verified within 30 days is treated as never filed, so late fees and loss of refund can follow." },
    ],
    related: ["belated-return", "revised-return", "form-26as", "annual-information-statement"],
    services: ["itr-filing-jodhpur"],
    posts: ["/blog/belated-itr-filing-31-december-2026", "/blog/small-business-itr-jodhpur"],
  },
  {
    slug: "belated-return",
    question: "What is a belated return?",
    term: "Belated return",
    category: "Income tax",
    definition:
      "A belated return is an income tax return filed after the original due date but before the end of the assessment year's extended window, which is 31 December. It carries a late fee and some lost benefits.",
    facts: [
      ["Section", "139(4) of the 1961 Act"],
      ["Last date, AY 2026-27", "31 December 2026"],
      ["Late fee (234F)", "₹5,000, or ₹1,000 if total income is up to ₹5 lakh"],
      ["Interest (234A)", "1% a month on unpaid tax from the original due date"],
      ["Regime", "Taxed under the new regime"],
    ],
    sections: [
      {
        heading: "What you lose by filing late",
        bullets: [
          "The option to choose the old tax regime",
          "Carry-forward of business and capital losses (house property loss and unabsorbed depreciation still carry forward)",
          "Refund interest for the months before you file",
        ],
      },
      {
        heading: "How to file",
        steps: [
          "Pay the late fee and any tax due through e-Pay Tax",
          "Select the assessment year and filing section 139(4) in the ITR",
          "File and e-verify within 30 days",
        ],
      },
    ],
    mistakes: [
      "Waiting until the last week of December, when the portal is slowest",
      "Selecting 139(1) instead of 139(4), which makes the return defective",
    ],
    faqs: [
      { q: "What is the last date to file a belated return for AY 2026-27?", a: "31 December 2026, unless assessment is completed earlier." },
      { q: "Can I claim the old regime in a belated return?", a: "Generally no. The old regime has to be chosen in a return filed by the original due date, so belated returns are taxed under the new regime." },
      { q: "Can a belated return be revised?", a: "Yes, under section 139(5), within the time allowed for revising returns for that year." },
    ],
    related: ["income-tax-return", "updated-return", "revised-return", "new-tax-regime"],
    services: ["itr-filing-jodhpur"],
    posts: ["/blog/belated-itr-filing-31-december-2026"],
  },
  {
    slug: "revised-return",
    question: "What is a revised return?",
    term: "Revised return",
    category: "Income tax",
    definition:
      "A revised return is a fresh income tax return filed to correct a mistake or omission in a return you already filed, replacing the original one.",
    facts: [
      ["Section", "139(5) of the 1961 Act"],
      ["Last date, AY 2026-27", "31 March 2027 (after the Finance Act, 2026 change), or earlier if assessment completes"],
      ["Earlier years", "31 December of the assessment year"],
      ["How many times", "No fixed limit, within the deadline"],
      ["Covers", "Original and belated returns"],
    ],
    sections: [
      {
        heading: "When to revise",
        bullets: [
          "You missed income, such as interest, capital gains or a second salary",
          "You claimed a wrong deduction or chose the wrong ITR form",
          "Bank account or other details were wrong",
        ],
      },
      {
        heading: "How to file",
        steps: [
          "Choose 'Revised return under section 139(5)' when filing",
          "Enter the acknowledgement number and date of the original return",
          "File the complete corrected return, not just the change, and e-verify it",
        ],
      },
      {
        heading: "Revised return or updated return?",
        paras: [
          "A revised return can increase or reduce your tax. After the revision window closes, the only option is an updated return (ITR-U), which can only increase tax and comes with additional tax.",
        ],
      },
    ],
    mistakes: [
      "Revising only the changed figure instead of filing a complete return",
      "Using a revised return to respond to a defective-return notice; that needs a reply under section 139(9)",
    ],
    faqs: [
      { q: "What is the last date to revise an ITR for AY 2026-27?", a: "31 March 2027 under the Finance Act, 2026 change, or earlier if the assessment is completed before that." },
      { q: "Can I revise my return after getting a refund?", a: "Yes, within the deadline. Any change in tax will adjust the refund or create a demand." },
      { q: "How many times can I revise my income tax return?", a: "There is no fixed limit. You can revise as many times as needed within the deadline; each revised return replaces the previous one." },
    ],
    related: ["income-tax-return", "updated-return", "belated-return", "rectification"],
    services: ["itr-filing-jodhpur"],
  },
  {
    slug: "updated-return",
    question: "What is an updated return (ITR-U)?",
    metaDescription: "An updated return (ITR-U) lets you report missed income up to 48 months after the assessment year, with 25–70% additional tax. Rules and limits.",
    term: "Updated return",
    abbr: "ITR-U",
    category: "Income tax",
    definition:
      "An updated return (ITR-U) lets you report income you missed after the normal and belated deadlines have passed, within 48 months from the end of the assessment year, by paying additional tax.",
    facts: [
      ["Section", "139(8A) of the 1961 Act"],
      ["Time limit", "48 months from the end of the assessment year"],
      ["Additional tax", "25% to 70% of the extra tax and interest, depending on delay"],
      ["Purpose", "Only to increase income or tax; not for refunds or losses"],
    ],
    sections: [
      {
        heading: "Additional tax by delay",
        table: {
          head: ["Filed within", "Additional tax"],
          rows: [
            ["12 months from end of AY", "25%"],
            ["24 months", "50%"],
            ["36 months", "60%"],
            ["48 months", "70%"],
          ],
        },
      },
      {
        heading: "When you cannot file ITR-U",
        bullets: [
          "To claim or increase a refund, or to reduce tax",
          "To file a loss return or increase a loss",
          "When a search, survey or assessment or reassessment is pending or completed for that year",
        ],
      },
    ],
    example:
      "You forgot ₹2 lakh of FD interest in your AY 2025-26 return. Filing ITR-U in mid-2026 (within 12 months of AY-end) means paying the tax and interest on it plus 25% of that amount as additional tax.",
    mistakes: [
      "Waiting for a notice; once proceedings start, ITR-U is no longer available",
      "Trying to use ITR-U to claim a refund",
    ],
    faqs: [
      { q: "How long do I have to file an updated return?", a: "48 months from the end of the relevant assessment year." },
      { q: "Can I claim a refund through ITR-U?", a: "No. An updated return can only increase your income or tax." },
      { q: "Can I file ITR-U if I never filed a return?", a: "Yes, provided it results in tax payable and no proceedings are pending for that year." },
    ],
    related: ["belated-return", "revised-return", "income-tax-return", "tax-assessment"],
    services: ["itr-filing-jodhpur", "income-tax-notice-reply-jodhpur"],
    posts: ["/blog/belated-itr-filing-31-december-2026"],
  },
  {
    slug: "income-tax-refund",
    question: "What is an income tax refund?",
    term: "Income tax refund",
    category: "Income tax",
    definition:
      "An income tax refund is money the Income Tax Department returns when the tax you paid through TDS, TCS or advance tax is more than the tax you actually owe for the year.",
    metaDescription:
      "An income tax refund is excess TDS or advance tax paid back to you. How to claim it in your ITR, track it, and why refunds get delayed.",
    facts: [
      ["How to claim", "Through your income tax return; no separate application"],
      ["Paid to", "A pre-validated bank account linked to your PAN"],
      ["Interest", "0.5% a month under section 244A (taxable)"],
      ["Track at", "incometax.gov.in → View filed returns"],
    ],
    sections: [
      {
        heading: "Why refunds happen",
        bullets: [
          "Your employer deducted more TDS than needed, for example before you declared investments",
          "Banks deducted TDS on FD interest though your total income is low",
          "You paid more advance tax than your final liability",
        ],
      },
      {
        heading: "Why refunds get delayed",
        bullets: [
          "The return is not e-verified",
          "The bank account is not pre-validated or the PAN is inoperative",
          "Income in your return doesn't match AIS or Form 26AS",
          "The department proposes to adjust it against an older demand under section 245",
        ],
      },
    ],
    mistakes: [
      "Not pre-validating a new bank account before filing",
      "Ignoring a section 245 intimation, which lets the adjustment go through",
    ],
    faqs: [
      { q: "Why is my income tax refund delayed?", a: "Common reasons are an unverified return, a bank account that isn't pre-validated, a mismatch with AIS or Form 26AS, or a proposed adjustment against an older demand." },
      { q: "Is the interest on a tax refund taxable?", a: "Yes. Interest on an income tax refund is taxable as income from other sources in the year you receive it." },
      { q: "How long does a refund take?", a: "Many refunds arrive within a few weeks of e-verification, but processing checks and mismatches can stretch it to months." },
    ],
    related: ["income-tax-return", "tds", "form-26as", "tax-assessment"],
    services: ["itr-filing-jodhpur", "income-tax-notice-reply-jodhpur"],
  },
  {
    slug: "advance-tax",
    question: "What is advance tax?",
    metaDescription: "Advance tax is income tax paid in four instalments during the year if your tax after TDS is ₹10,000 or more. Due dates, who pays and interest for missing it.",
    term: "Advance tax",
    category: "Income tax",
    definition:
      "Advance tax is income tax paid in instalments during the financial year, instead of all at once after it ends, by anyone whose tax for the year after TDS is ₹10,000 or more.",
    facts: [
      ["Who pays", "Anyone with tax of ₹10,000+ after TDS (business owners, investors, landlords, freelancers)"],
      ["Exempt", "Resident senior citizens with no business or professional income"],
      ["Instalments", "15 June, 15 September, 15 December, 15 March"],
      ["Presumptive (44AD/44ADA)", "Single instalment of 100% by 15 March"],
      ["Interest", "234B for short payment, 234C for late instalments, 1% a month"],
    ],
    sections: [
      {
        heading: "Instalment schedule",
        table: {
          head: ["Due date", "Cumulative tax to pay"],
          rows: [
            ["15 June", "15%"],
            ["15 September", "45%"],
            ["15 December", "75%"],
            ["15 March", "100%"],
          ],
        },
      },
      {
        heading: "How to calculate and pay",
        steps: [
          "Estimate your income for the full year, including capital gains already made",
          "Work out the tax, then subtract expected TDS and TCS",
          "If the balance is ₹10,000 or more, pay the cumulative percentage due by each date",
          "Pay online through e-Pay Tax as 'Advance tax' for the correct assessment year",
        ],
      },
      {
        heading: "Capital gains during the year",
        paras: [
          "If you sell property or shares mid-year, you can't predict the gain in advance, so no 234C interest applies on that gain as long as you pay the tax on it in the instalments that fall after the sale.",
        ],
      },
    ],
    mistakes: [
      "Salaried people with large interest or rental income assuming TDS covers everything",
      "Paying advance tax under the wrong assessment year",
      "Skipping the 15 March instalment and paying everything at filing time with interest",
    ],
    faqs: [
      { q: "Who needs to pay advance tax?", a: "Anyone whose tax liability for the year, after TDS and TCS, is ₹10,000 or more. Resident senior citizens without business income are exempt." },
      { q: "What is the next advance tax due date?", a: "Instalments are due on 15 June, 15 September, 15 December and 15 March of the financial year." },
      { q: "What happens if I don't pay advance tax?", a: "You pay interest of 1% a month under section 234B on the shortfall and under 234C for missed instalments." },
    ],
    related: ["income-tax", "tds", "capital-gains-tax", "presumptive-taxation"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "form-16",
    question: "What is Form 16?",
    term: "Form 16",
    category: "TDS & TCS",
    definition:
      "Form 16 is the certificate an employer gives each employee showing salary paid and income tax deducted at source during the financial year. It is the main document for filing a salaried ITR.",
    facts: [
      ["Issued by", "Employer (the deductor)"],
      ["Due by", "15 June after the financial year"],
      ["Part A", "TDS deducted and deposited, generated from the TRACES portal"],
      ["Part B", "Salary breakup, exemptions, deductions and tax computation"],
      ["Related", "Form 16A for non-salary TDS; Form 16B for TDS on property"],
    ],
    sections: [
      {
        heading: "What to check in your Form 16",
        bullets: [
          "Your PAN and the employer's TAN are correct",
          "TDS in Part A matches Form 26AS",
          "The regime used (old or new) is the one you intend to file under",
          "Deductions you declared appear in Part B",
        ],
      },
      {
        heading: "Changed jobs during the year?",
        paras: [
          "You'll get a Form 16 from each employer. Add the salaries together in your return and claim the standard deduction only once. Tax often falls short because each employer applied the lower slabs, so check whether you owe extra.",
        ],
      },
    ],
    mistakes: [
      "Filing only from Form 16 and missing interest income in AIS",
      "Claiming the standard deduction twice with two Form 16s",
    ],
    faqs: [
      { q: "When do I get Form 16?", a: "Employers must issue it by 15 June following the end of the financial year." },
      { q: "Can I file ITR without Form 16?", a: "Yes. Use salary slips and the TDS shown in Form 26AS or AIS to fill in your return." },
      { q: "What is the difference between Form 16 and Form 16A?", a: "Form 16 covers TDS on salary. Form 16A covers TDS on other payments such as interest, professional fees or rent." },
    ],
    related: ["tds", "form-26as", "standard-deduction", "payroll"],
    services: ["itr-filing-jodhpur", "tds-tcs-compliance-jodhpur"],
  },
  {
    slug: "form-26as",
    question: "What is Form 26AS?",
    metaDescription: "Form 26AS is your annual tax credit statement showing TDS, TCS and taxes paid against your PAN. How to read it and fix TDS that is missing.",
    term: "Form 26AS",
    category: "Income tax",
    definition:
      "Form 26AS is your annual tax credit statement on the income tax portal, showing TDS and TCS deducted against your PAN, advance and self-assessment tax paid, and refunds.",
    facts: [
      ["Where", "incometax.gov.in → e-File → View Form 26AS (via TRACES)"],
      ["Shows", "TDS, TCS, advance tax, self-assessment tax, refunds"],
      ["Used for", "Claiming tax credit in your ITR"],
      ["Wider view", "AIS includes everything in 26AS plus interest, dividends and transactions"],
    ],
    sections: [
      {
        heading: "Why it matters",
        paras: [
          "The department gives you credit only for tax that appears against your PAN in Form 26AS. If an employer or tenant deducted TDS but didn't deposit it or quoted the wrong PAN, it won't appear, and you won't get credit until they correct their TDS return.",
        ],
      },
      {
        heading: "Fixing a mismatch",
        steps: [
          "Compare TDS certificates (Form 16, 16A, 16B) with 26AS",
          "Ask the deductor to file a correction statement for wrong PAN or amount",
          "Wait for the updated 26AS before filing, or claim only what appears",
        ],
      },
    ],
    mistakes: [
      "Claiming TDS from a certificate that never appears in 26AS",
      "Not checking 26AS after buying property, where TDS under 194-IA appears against the seller",
    ],
    faqs: [
      { q: "What is the difference between Form 26AS and AIS?", a: "Form 26AS shows taxes deducted, collected and paid. AIS is broader and also shows interest, dividends, share and mutual fund transactions and other reported income." },
      { q: "Why is my TDS not showing in Form 26AS?", a: "The deductor may not have filed or deposited it yet, or may have used a wrong PAN. Ask them to file or correct their TDS return." },
      { q: "Is Form 26AS still needed?", a: "Yes. It remains the basis for tax credit, even though AIS gives a wider picture of your financial year." },
    ],
    related: ["annual-information-statement", "tds", "form-16", "income-tax-refund"],
    services: ["itr-filing-jodhpur", "tds-tcs-compliance-jodhpur"],
    posts: ["/blog/belated-itr-filing-31-december-2026", "/blog/income-tax-notice-types-and-replies"],
  },
  {
    slug: "annual-information-statement",
    question: "What is the Annual Information Statement (AIS)?",
    metaTitle: "AIS: Meaning and How to Use It",
    metaDescription: "The Annual Information Statement (AIS) lists your interest, dividends, share trades, TDS and more for the year. How to read it and fix wrong entries.",
    term: "Annual Information Statement",
    abbr: "AIS",
    category: "Income tax",
    definition:
      "The Annual Information Statement (AIS) is a detailed record on the income tax portal of your financial transactions for the year, reported by banks, employers, brokers and others, used to pre-fill and check your return.",
    facts: [
      ["Where", "incometax.gov.in → AIS"],
      ["Includes", "Salary, interest, dividends, share and mutual fund trades, rent, GST turnover, foreign remittances, TDS/TCS"],
      ["Summary", "Taxpayer Information Summary (TIS) totals each category"],
      ["Feedback", "You can mark entries as incorrect, duplicate or not yours"],
    ],
    sections: [
      {
        heading: "Why AIS matters",
        paras: [
          "Your return is checked against AIS when it is processed. Income that appears in AIS but not in your return is the single most common trigger for 143(1) adjustments and compliance emails.",
        ],
      },
      {
        heading: "Using AIS before you file",
        steps: [
          "Download AIS and TIS as PDF or JSON",
          "Match each item with your own records: savings interest, FD interest, dividends, sale of shares",
          "Give feedback on wrong entries, for example a transaction that isn't yours",
          "Include every correct item in your return",
        ],
      },
    ],
    mistakes: [
      "Ignoring small savings interest that adds up and shows in AIS",
      "Reporting full sale value of shares as income instead of computing the capital gain",
    ],
    faqs: [
      { q: "Is AIS the same as Form 26AS?", a: "No. Form 26AS covers taxes deducted and paid. AIS also includes interest, dividends, securities transactions and other reported information." },
      { q: "What should I do if AIS shows a transaction that isn't mine?", a: "Submit feedback on the AIS entry marking it as not yours or incorrect. The reporting entity is asked to confirm or correct it." },
      { q: "Do I have to report everything in AIS?", a: "Report every correct item. Where AIS is wrong, give feedback and file based on the correct figures, keeping your proof." },
    ],
    related: ["form-26as", "income-tax-return", "tax-assessment"],
    services: ["itr-filing-jodhpur", "income-tax-notice-reply-jodhpur"],
    posts: ["/blog/income-tax-notice-types-and-replies"],
  },
  {
    slug: "tax-assessment",
    question: "What is a tax assessment?",
    term: "Tax assessment",
    category: "Income tax",
    definition:
      "Tax assessment is the process by which the Income Tax Department checks a return and fixes the taxpayer's final income and tax, either automatically or through a detailed scrutiny.",
    metaDescription:
      "Tax assessment is how the Income Tax Department checks your return and fixes your final tax. Summary, scrutiny, faceless and reassessment, explained.",
    facts: [
      ["Summary", "Automated processing, ending in a 143(1) intimation"],
      ["Scrutiny", "Detailed review after a 143(2) notice, mostly faceless"],
      ["Best judgment", "Section 144, when a taxpayer doesn't respond"],
      ["Reassessment", "Sections 147–148A, generally within 3 years 3 months (5 years 3 months if ₹50 lakh+ escaped)"],
      ["Replies", "e-Proceedings on incometax.gov.in"],
    ],
    sections: [
      {
        heading: "Types of assessment",
        table: {
          head: ["Type", "Section", "What triggers it"],
          rows: [
            ["Self-assessment", "140A", "You pay balance tax before filing"],
            ["Summary", "143(1)", "Every return, automatically"],
            ["Scrutiny", "143(2) / 143(3)", "Selection based on risk parameters or information mismatches"],
            ["Best judgment", "144", "No return or no response to notices"],
            ["Reassessment", "147 / 148A / 148", "Information suggesting income escaped tax"],
          ],
        },
      },
      {
        heading: "Faceless assessment",
        paras: [
          "Most scrutiny assessments are faceless: notices and replies are exchanged through e-Proceedings, and personal hearings, if allowed, are held by video conference. You rarely need to visit the Jodhpur income tax office at Paota.",
        ],
      },
    ],
    mistakes: [
      "Treating a 143(1) intimation with a demand as final instead of checking it",
      "Missing the response date on a 143(2) or 148A notice",
    ],
    faqs: [
      { q: "What is a 143(1) intimation?", a: "It is the result of the automated processing of your return. It confirms the return, or shows a refund, demand or adjustment. A demand you disagree with can be corrected through rectification." },
      { q: "How long can the department reopen an assessment?", a: "For notices since 1 September 2024, generally within 3 years and 3 months from the end of the assessment year, or 5 years and 3 months if escaped income is ₹50 lakh or more." },
      { q: "Do I need to visit the income tax office for scrutiny?", a: "Usually not. Scrutiny is mostly faceless and handled online, with hearings by video conference if allowed." },
    ],
    related: ["rectification", "income-tax-return", "annual-information-statement", "tax-consultant"],
    services: ["income-tax-notice-reply-jodhpur", "income-tax-advisory-jodhpur"],
    posts: ["/blog/income-tax-notice-types-and-replies"],
  },
  {
    slug: "rectification",
    question: "What is rectification under section 154?",
    term: "Rectification of mistakes",
    category: "Income tax",
    definition:
      "Rectification is a request to the Income Tax Department under section 154 to correct a mistake apparent from the record in an order or intimation, such as a TDS credit or deduction wrongly left out in a 143(1) intimation.",
    metaTitle: "Rectification u/s 154: Meaning & How to File",
    metaDescription:
      "Rectification under section 154 corrects obvious mistakes in a tax order or 143(1) intimation, like missed TDS credit. When to use it and how to file online.",
    facts: [
      ["Section", "154 of the 1961 Act"],
      ["For", "Mistakes apparent from the record, not debatable issues"],
      ["Time limit", "4 years from the end of the financial year in which the order was passed"],
      ["How", "Online request on the e-filing portal (Services → Rectification)"],
    ],
    sections: [
      {
        heading: "When rectification is the right tool",
        bullets: [
          "TDS shown in Form 26AS wasn't credited in the 143(1) intimation",
          "A deduction you claimed correctly was disallowed through a processing error",
          "Arithmetic or tax-calculation errors in the intimation",
        ],
        note: "If the mistake is yours, for example you forgot to report income or claim a deduction, file a revised return (if still in time) instead.",
      },
      {
        heading: "Filing a rectification request",
        steps: [
          "Log in to incometax.gov.in → Services → Rectification",
          "Select the order or intimation and the type of request (reprocess, tax credit mismatch, data correction)",
          "Upload corrected details or schedules where needed and submit",
          "Track the status; the revised order shows the corrected demand or refund",
        ],
      },
    ],
    mistakes: [
      "Using rectification to raise a new argument that needs an appeal",
      "Filing rectification when the real issue is a TDS mismatch the deductor must correct",
    ],
    faqs: [
      { q: "What is a mistake apparent from record?", a: "An obvious error that can be seen from the documents on record without debate, such as a wrong calculation or TDS credit left out." },
      { q: "How long do I have to file a rectification request?", a: "Within four years from the end of the financial year in which the order or intimation was passed." },
      { q: "Rectification or revised return: which do I need?", a: "Use rectification for the department's processing errors. Use a revised return to correct your own mistakes, if the revision deadline hasn't passed." },
    ],
    related: ["tax-assessment", "revised-return", "income-tax-refund"],
    services: ["income-tax-notice-reply-jodhpur", "itr-filing-jodhpur"],
    posts: ["/blog/income-tax-notice-types-and-replies"],
  },
];
