import type { GlossaryTerm } from "./types";

const NEW_REGIME_SLABS = {
  head: ["Taxable income (FY 2025-26)", "New regime rate"],
  rows: [
    ["Up to ₹4 lakh", "Nil"],
    ["₹4 lakh – ₹8 lakh", "5%"],
    ["₹8 lakh – ₹12 lakh", "10%"],
    ["₹12 lakh – ₹16 lakh", "15%"],
    ["₹16 lakh – ₹20 lakh", "20%"],
    ["₹20 lakh – ₹24 lakh", "25%"],
    ["Above ₹24 lakh", "30%"],
  ],
};

export const INCOME_TAX_BASICS: GlossaryTerm[] = [
  {
    slug: "income-tax",
    question: "What is income tax?",
    term: "Income tax",
    category: "Income tax",
    definition:
      "Income tax is a direct tax the central government levies on the income of individuals, HUFs, firms and companies. It is charged on taxable income at rates set every year by the Finance Act.",
    facts: [
      ["Levied by", "Central government, through the Income Tax Department (CBDT)"],
      ["Governing law", "Income-tax Act, 2025 from 1 April 2026; Income-tax Act, 1961 for income up to 31 March 2026"],
      ["Rates set by", "The Finance Act each year (the Union Budget)"],
      ["Who pays", "Individuals, HUFs, firms, LLPs, companies, trusts and others with taxable income"],
      ["Paid through", "TDS, TCS, advance tax and self-assessment tax"],
    ],
    sections: [
      {
        heading: "How your income tax is worked out",
        steps: [
          "Add your income under the five heads: salary, house property, business or profession, capital gains, and other sources",
          "Set off allowed losses to get gross total income",
          "Subtract the deductions your regime allows to get taxable income",
          "Apply slab rates to normal income and special rates to items such as capital gains",
          "Subtract any rebate under section 87A, add surcharge if applicable and 4% health and education cess",
          "Subtract TDS, TCS and advance tax already paid; the balance is payable or refundable",
        ],
      },
      {
        heading: "New regime slab rates",
        paras: ["The new regime is the default for individuals. For FY 2025-26 the slabs are:"],
        table: NEW_REGIME_SLABS,
        note: "A rebate under section 87A makes income up to ₹12 lakh tax-free in the new regime (₹12.75 lakh for salaried people after the ₹75,000 standard deduction). Special-rate income such as capital gains is taxed separately.",
      },
      {
        heading: "Old regime and who should use it",
        paras: [
          "The old regime has higher rates but allows deductions such as 80C, 80D, HRA, LTA and home-loan interest. It usually only wins if your deductions are large. Salaried people can choose each year when they file; people with business income can switch back to the old regime only once.",
        ],
      },
      {
        heading: "The new Income-tax Act, 2025",
        paras: [
          "From 1 April 2026 income tax is governed by the Income-tax Act, 2025. Rates still come from the Finance Act, and the old and new regimes continue; mainly the section numbers and terminology changed, with a single 'tax year' replacing 'previous year' and 'assessment year'.",
        ],
      },
    ],
    mistakes: [
      "Assuming income up to ₹12 lakh is fully tax-free even when part of it is capital gains taxed at special rates",
      "Forgetting the 4% health and education cess when estimating tax",
      "Ignoring interest from savings and fixed deposits, which is taxable and shows up in AIS",
    ],
    faqs: [
      { q: "Is income up to ₹12 lakh tax-free?", a: "Under the new regime for FY 2025-26, yes for normal income: a rebate under section 87A cancels the tax up to ₹12 lakh of taxable income. Salaried people get ₹12.75 lakh after the standard deduction. Capital gains taxed at special rates are not covered." },
      { q: "Is income tax a direct tax?", a: "Yes. It is paid by the person who earns the income, unlike GST, which businesses collect from customers and pay to the government." },
      { q: "Did the new Income-tax Act change tax rates?", a: "No. The Income-tax Act, 2025 restructured the law from 1 April 2026; rates are still set every year by the Finance Act." },
    ],
    related: ["taxable-income", "new-tax-regime", "rebate-87a", "income-tax-return"],
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
    posts: ["/blog/income-tax-act-2025-changes"],
  },
  {
    slug: "taxable-income",
    question: "What is taxable income?",
    term: "Taxable income",
    category: "Income tax",
    definition:
      "Taxable income is the part of your income on which tax is actually calculated: gross total income from all five heads, minus the deductions allowed under your tax regime.",
    metaDescription:
      "Taxable income is your income from all five heads minus allowed deductions: the amount tax is actually calculated on. How to work it out, with an example.",
    facts: [
      ["Formula", "Gross total income − deductions (Chapter VI-A and others)"],
      ["Five heads", "Salary, house property, business/profession, capital gains, other sources"],
      ["Rounding", "Rounded off to the nearest ₹10"],
      ["Not included", "Exempt income such as agricultural income, PPF interest and specified allowances"],
    ],
    sections: [
      {
        heading: "Gross total income vs taxable income",
        table: {
          head: ["Step", "What happens"],
          rows: [
            ["Income under each head", "Salary after standard deduction, rent after 30% deduction, business profit, gains, interest"],
            ["Clubbing and set-off", "Add income clubbed from spouse or minor children; set off allowed losses"],
            ["Gross total income", "The total after set-off"],
            ["Deductions", "80C, 80D, 80G and others in the old regime; mainly employer NPS in the new regime"],
            ["Taxable income", "What tax rates are applied to"],
          ],
        },
      },
      {
        heading: "Special-rate income",
        paras: [
          "Some income is part of taxable income but taxed at fixed rates instead of slabs: for example short-term gains on listed shares (20%) and long-term capital gains (12.5%). These are shown separately in the return.",
        ],
      },
    ],
    example:
      "A salaried person earns ₹14 lakh and ₹40,000 of savings interest under the new regime. After the ₹75,000 standard deduction, taxable income is ₹13,65,000.",
    mistakes: [
      "Leaving out bank interest, dividends and capital gains reported in AIS",
      "Claiming old-regime deductions like 80C while filing under the new regime",
      "Not clubbing income from investments made in a spouse's name",
    ],
    faqs: [
      { q: "Is taxable income the same as salary?", a: "No. Taxable income includes every head of income and is reduced by exemptions and deductions, so it is usually different from your salary." },
      { q: "Does exempt income count in taxable income?", a: "No. Exempt income such as agricultural income or PPF interest is left out, though some of it must still be reported in your return." },
      { q: "Is taxable income rounded?", a: "Yes. Total income is rounded off to the nearest multiple of ₹10 before tax is calculated." },
    ],
    related: ["income-tax", "standard-deduction", "section-80c", "new-tax-regime"],
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    slug: "new-tax-regime",
    question: "What is the new tax regime?",
    metaDescription: "The new tax regime is the default for individuals: lower slab rates but no 80C, 80D or HRA. FY 2025-26 slabs, what you give up and how to choose.",
    term: "New tax regime",
    category: "Income tax",
    definition:
      "The new tax regime is the default way individuals and HUFs are taxed: lower slab rates in exchange for giving up most deductions and exemptions such as 80C, 80D and HRA.",
    facts: [
      ["Law", "Section 115BAC of the 1961 Act (carried into the Income-tax Act, 2025)"],
      ["Default since", "FY 2023-24"],
      ["Tax-free up to", "₹12 lakh with the 87A rebate (₹12.75 lakh for salaried), FY 2025-26"],
      ["Allowed deductions", "₹75,000 standard deduction, employer's NPS contribution, family pension deduction"],
      ["Switching", "Salaried: choose every year when filing. Business income: switch back to old regime only once"],
    ],
    sections: [
      {
        heading: "Slab rates",
        table: NEW_REGIME_SLABS,
      },
      {
        heading: "What you give up",
        bullets: [
          "Section 80C (PPF, ELSS, life insurance, home-loan principal) and 80D (health insurance)",
          "House rent allowance and leave travel allowance exemptions",
          "Interest on a home loan for a self-occupied house",
          "Most other Chapter VI-A deductions",
        ],
      },
      {
        heading: "Which regime is better?",
        paras: [
          "Compare the tax under both. As a rough guide, the old regime only wins when your deductions are large, for example full 80C and 80D plus a big HRA claim or home-loan interest. For most people earning up to ₹12–13 lakh, the new regime is cheaper.",
        ],
        note: "If you file a belated return, you are taxed under the new regime: the old regime can only be chosen in a return filed by the due date.",
      },
    ],
    mistakes: [
      "Declaring investments to the employer under the old regime and then filing under the new regime, or the reverse, without checking the tax difference",
      "Business owners switching regimes without filing Form 10-IEA by the due date",
      "Assuming the regime choice is permanent for salaried people; it can change every year",
    ],
    faqs: [
      { q: "Is the new tax regime compulsory?", a: "No. It is the default, but individuals can opt for the old regime. Salaried people choose each year when filing; people with business income must file Form 10-IEA and can switch back only once." },
      { q: "Can I switch between the old and new tax regime every year?", a: "Salaried people without business income can choose either regime every year when they file. People with business income can switch back to the old regime only once, through Form 10-IEA." },
      { q: "Which tax regime is better for a salary of ₹15 lakh?", a: "It depends on your deductions. Without large claims (80C, 80D, HRA, home loan), the new regime is usually lower. Calculate both before you file." },
    ],
    related: ["income-tax", "rebate-87a", "section-80c", "house-rent-allowance"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "standard-deduction",
    question: "What is the standard deduction?",
    term: "Standard deduction",
    category: "Income tax",
    definition:
      "The standard deduction is a flat amount subtracted from salary or pension income before tax, without any proof of expenses: ₹75,000 under the new regime and ₹50,000 under the old regime.",
    metaDescription:
      "The standard deduction is a flat ₹75,000 (new regime) or ₹50,000 (old regime) cut from salary or pension before tax, with no proof needed.",
    facts: [
      ["New regime", "₹75,000 (from FY 2024-25)"],
      ["Old regime", "₹50,000"],
      ["Family pension", "₹25,000 (new regime) or ₹15,000 (old regime)"],
      ["Who gets it", "Salaried employees and pensioners"],
      ["Proof needed", "None"],
    ],
    sections: [
      {
        heading: "How it is applied",
        paras: [
          "Your employer deducts it automatically while calculating TDS, and it appears in Form 16. In your return, it is subtracted from gross salary under 'Income from salaries'. If you had two employers in a year, you get it only once.",
        ],
      },
      {
        heading: "Who doesn't get it",
        paras: [
          "Business owners, professionals and freelancers paid as consultants (fees with TDS under section 194J) are not salaried, so they cannot claim it. They claim actual business expenses instead.",
        ],
      },
    ],
    example: "A salary of ₹10,75,000 under the new regime becomes ₹10,00,000 of taxable salary after the ₹75,000 standard deduction.",
    mistakes: [
      "Claiming the standard deduction twice when you changed jobs in the year",
      "Freelancers claiming it on professional fees",
    ],
    faqs: [
      { q: "How much is the standard deduction in the new tax regime?", a: "₹75,000 for salaried individuals and pensioners from FY 2024-25. Under the old regime it is ₹50,000." },
      { q: "Do I need to submit proof for the standard deduction?", a: "No. It is a flat deduction allowed to every salaried employee and pensioner without bills or investment proofs." },
      { q: "Can pensioners claim the standard deduction?", a: "Yes. Pension from a former employer is taxed as salary, so the standard deduction applies. Family pension has a separate deduction." },
    ],
    related: ["taxable-income", "new-tax-regime", "form-16", "payroll"],
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    slug: "house-rent-allowance",
    question: "What is house rent allowance (HRA)?",
    term: "House rent allowance",
    abbr: "HRA",
    category: "Income tax",
    definition:
      "House rent allowance (HRA) is a part of salary paid towards rent. Under the old tax regime, salaried employees who pay rent can claim part of it as tax-free; the new regime does not allow the exemption.",
    facts: [
      ["Law", "Section 10(13A) with Rule 2A (1961 Act)"],
      ["Regime", "Old regime only"],
      ["Metro cities (50%)", "Delhi, Mumbai, Kolkata, Chennai"],
      ["Jodhpur", "Non-metro: 40% of salary limit"],
      ["Landlord PAN", "Required if rent exceeds ₹1 lakh a year"],
    ],
    sections: [
      {
        heading: "How the exemption is calculated",
        paras: ["The exempt amount is the lowest of these three ('salary' means basic plus dearness allowance):"],
        table: {
          head: ["Limit", "Jodhpur example (basic ₹6 lakh, HRA ₹2.4 lakh, rent ₹2.4 lakh)"],
          rows: [
            ["HRA actually received", "₹2,40,000"],
            ["Rent paid − 10% of salary", "₹2,40,000 − ₹60,000 = ₹1,80,000"],
            ["40% of salary (non-metro)", "₹2,40,000"],
            ["Exempt (lowest)", "₹1,80,000; the remaining ₹60,000 of HRA is taxable"],
          ],
        },
      },
      {
        heading: "Documents to keep",
        bullets: [
          "Rent receipts or bank transfers to the landlord",
          "A rental agreement",
          "The landlord's PAN if annual rent is more than ₹1 lakh",
        ],
      },
      {
        heading: "No HRA in your salary?",
        paras: [
          "Self-employed people, or employees whose salary has no HRA component, can claim up to ₹60,000 a year under section 80GG in the old regime, subject to conditions such as not owning a house in the same city.",
        ],
      },
    ],
    mistakes: [
      "Claiming HRA while filing under the new regime",
      "Paying rent in cash with no agreement or receipts",
      "Claiming HRA for a house you own and live in",
    ],
    faqs: [
      { q: "Can I claim HRA in the new tax regime?", a: "No. The HRA exemption is available only under the old regime. Compare both regimes before choosing." },
      { q: "Can I claim HRA if I pay rent to my parents?", a: "Yes, if you genuinely pay rent, your parents own the house, and they report the rent as their income. Keep an agreement and bank transfers as proof." },
      { q: "Is Jodhpur a metro city for HRA?", a: "No. Only Delhi, Mumbai, Kolkata and Chennai count as metros for HRA, so the limit for Jodhpur is 40% of salary." },
    ],
    related: ["new-tax-regime", "standard-deduction", "taxable-income", "form-16"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "section-80c",
    question: "What is Section 80C?",
    metaDescription: "Section 80C allows up to ₹1.5 lakh of deductions for PPF, ELSS, EPF, life insurance and home-loan principal under the old regime. What counts, and how.",
    term: "Section 80C",
    category: "Income tax",
    definition:
      "Section 80C lets individuals and HUFs under the old tax regime deduct up to ₹1.5 lakh a year for specified investments and payments, such as EPF, PPF, ELSS, life insurance and home-loan principal.",
    facts: [
      ["Limit", "₹1.5 lakh a year, combined with 80CCC and 80CCD(1)"],
      ["Regime", "Old regime only"],
      ["Who can claim", "Individuals and HUFs"],
      ["Extra NPS deduction", "Up to ₹50,000 more under section 80CCD(1B)"],
    ],
    sections: [
      {
        heading: "What counts under 80C",
        table: {
          head: ["Option", "Lock-in", "Notes"],
          rows: [
            ["Employee PF contribution", "Till retirement/exit", "Deducted from salary automatically"],
            ["PPF", "15 years", "Interest and maturity tax-free"],
            ["ELSS mutual funds", "3 years", "Shortest lock-in; market-linked"],
            ["Life insurance premium", "Policy term", "Premium within limits of sum assured"],
            ["Home-loan principal", "—", "Plus stamp duty and registration in the year paid"],
            ["Children's tuition fees", "—", "Up to two children; tuition fees only"],
            ["5-year tax-saver FD, NSC, SSY", "5 years / varies", "Interest is taxable for FD and NSC"],
          ],
        },
      },
      {
        heading: "Claiming it",
        paras: [
          "Declare your investments to your employer so less TDS is deducted, and submit proofs by the employer's deadline. Anything you miss can still be claimed in your income tax return if you file under the old regime.",
        ],
      },
    ],
    mistakes: [
      "Investing in March in a rush without checking whether the old regime actually saves you tax",
      "Counting the whole EMI as 80C; only the principal part qualifies (interest is separate)",
      "Counting school development fees or transport fees as tuition fees",
    ],
    faqs: [
      { q: "Can I claim 80C in the new tax regime?", a: "No. Section 80C deductions are available only under the old regime." },
      { q: "What is the maximum deduction under 80C?", a: "₹1.5 lakh a year in total across all 80C items. NPS gets an additional ₹50,000 under section 80CCD(1B)." },
      { q: "Which 80C investment has the shortest lock-in?", a: "ELSS mutual funds, with a 3-year lock-in." },
    ],
    related: ["section-80d", "new-tax-regime", "taxable-income", "house-rent-allowance"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "section-80d",
    question: "What is Section 80D?",
    term: "Section 80D",
    category: "Income tax",
    definition:
      "Section 80D gives a deduction under the old tax regime for health insurance premiums and preventive health check-ups paid for yourself, your family and your parents.",
    facts: [
      ["Self, spouse, children", "Up to ₹25,000 (₹50,000 if you are a senior citizen)"],
      ["Parents", "Up to ₹25,000 more (₹50,000 if a parent is a senior citizen)"],
      ["Preventive check-up", "Up to ₹5,000, within the limits above"],
      ["Regime", "Old regime only"],
      ["Payment mode", "Any mode except cash; check-ups can be paid in cash"],
    ],
    sections: [
      {
        heading: "Limits by situation",
        table: {
          head: ["Situation", "Maximum deduction"],
          rows: [
            ["You and parents all under 60", "₹25,000 + ₹25,000 = ₹50,000"],
            ["You under 60, parents senior citizens", "₹25,000 + ₹50,000 = ₹75,000"],
            ["You and parents senior citizens", "₹50,000 + ₹50,000 = ₹1,00,000"],
          ],
        },
      },
      {
        heading: "Senior citizens without insurance",
        paras: [
          "Senior citizens who have no health insurance can claim medical expenditure up to ₹50,000 within the same limit.",
        ],
      },
    ],
    mistakes: [
      "Paying the premium in cash, which disqualifies it",
      "Claiming parents' premium when the parents paid it themselves",
      "Claiming more than one year of a multi-year premium in a single year; it is spread across the policy years",
    ],
    faqs: [
      { q: "How much can I claim under 80D?", a: "Up to ₹25,000 for yourself and family (₹50,000 if senior), plus up to ₹25,000 for parents (₹50,000 if senior), so ₹1 lakh at most." },
      { q: "Is 80D available in the new tax regime?", a: "No. Health insurance premiums are deductible only under the old regime." },
      { q: "Can I claim 80D for my in-laws?", a: "No. Parents-in-law are not covered; only your own parents." },
    ],
    related: ["section-80c", "new-tax-regime", "taxable-income"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "rebate-87a",
    question: "What is the rebate under section 87A?",
    term: "Rebate under section 87A",
    category: "Income tax",
    definition:
      "The section 87A rebate cancels income tax for resident individuals with low taxable income: up to ₹60,000 under the new regime for income up to ₹12 lakh, and up to ₹12,500 under the old regime for income up to ₹5 lakh.",
    metaTitle: "Rebate u/s 87A: Limits and Rules",
    metaDescription:
      "The 87A rebate wipes out tax for resident individuals with taxable income up to ₹12 lakh (new regime) or ₹5 lakh (old regime). Limits, rules and examples.",
    facts: [
      ["New regime (FY 2025-26)", "Up to ₹60,000, if taxable income ≤ ₹12 lakh"],
      ["Old regime", "Up to ₹12,500, if taxable income ≤ ₹5 lakh"],
      ["Who can claim", "Resident individuals only (not HUFs or NRIs)"],
      ["Not available on", "Special-rate income such as capital gains, in the new regime"],
    ],
    sections: [
      {
        heading: "How it works",
        paras: [
          "The rebate is subtracted from your tax before cess. If your taxable income is ₹11.8 lakh under the new regime, your slab tax of ₹58,000 is fully cancelled, so you pay nothing. At ₹12.1 lakh there is no rebate, but marginal relief ensures you don't pay more tax than the income above ₹12 lakh.",
        ],
      },
      {
        heading: "Capital gains and the rebate",
        paras: [
          "In the new regime the rebate doesn't apply to tax on special-rate income such as short-term gains on listed shares. So someone with ₹8 lakh of salary and ₹2 lakh of short-term equity gains still pays tax on the gains.",
        ],
      },
    ],
    mistakes: [
      "Assuming all income up to ₹12 lakh is tax-free, including capital gains",
      "HUFs or NRIs claiming the rebate",
    ],
    faqs: [
      { q: "What is the 87A rebate limit for FY 2025-26?", a: "Up to ₹60,000 for resident individuals with taxable income up to ₹12 lakh under the new regime, and up to ₹12,500 for income up to ₹5 lakh under the old regime." },
      { q: "Can NRIs claim the 87A rebate?", a: "No. The rebate is available only to resident individuals." },
      { q: "Is the 87A rebate available on capital gains?", a: "Not under the new regime for special-rate income such as short-term gains on listed shares or long-term capital gains." },
    ],
    related: ["new-tax-regime", "income-tax", "taxable-income"],
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
  },
  {
    slug: "assessment-year",
    question: "What is an assessment year (AY)?",
    term: "Assessment year",
    abbr: "AY",
    category: "Income tax",
    definition:
      "The assessment year (AY) is the year after the financial year in which income is earned, when that income is assessed and taxed. Income earned in FY 2025-26 is assessed in AY 2026-27.",
    facts: [
      ["Financial / previous year", "The year you earn the income (1 April – 31 March)"],
      ["Assessment year", "The following year, in which the return is filed and processed"],
      ["Example", "FY 2025-26 (April 2025 – March 2026) → AY 2026-27"],
      ["From 1 April 2026", "The Income-tax Act, 2025 uses a single 'tax year' instead"],
    ],
    sections: [
      {
        heading: "Why it matters",
        paras: [
          "Returns, challans and notices refer to the assessment year. Selecting the wrong AY on a tax challan or in a return is a common and annoying mistake: the payment or return ends up in the wrong year and has to be corrected.",
        ],
      },
      {
        heading: "The new 'tax year'",
        paras: [
          "Under the Income-tax Act, 2025, income earned from 1 April 2026 to 31 March 2027 is simply 'tax year 2026-27'. Returns for FY 2025-26 and earlier years still use the old FY/AY terms.",
        ],
        table: {
          head: ["Income earned", "Old terms", "New term"],
          rows: [
            ["Apr 2025 – Mar 2026", "FY 2025-26 / AY 2026-27", "— (1961 Act)"],
            ["Apr 2026 – Mar 2027", "—", "Tax year 2026-27"],
          ],
        },
      },
    ],
    mistakes: [
      "Paying self-assessment tax against the financial year instead of the assessment year",
      "Filing a return for the wrong AY, especially belated returns",
    ],
    faqs: [
      { q: "What is the difference between FY and AY?", a: "The financial year is when you earn income; the assessment year is the following year, when it is assessed. FY 2025-26 corresponds to AY 2026-27." },
      { q: "Which AY should I select for FY 2025-26?", a: "AY 2026-27." },
      { q: "Does the assessment year still exist?", a: "For income up to 31 March 2026, yes. From 1 April 2026 the Income-tax Act, 2025 uses a single 'tax year'." },
    ],
    related: ["income-tax-return", "income-tax", "belated-return"],
    services: ["itr-filing-jodhpur"],
    posts: ["/blog/income-tax-act-2025-changes"],
  },
  {
    slug: "hindu-undivided-family",
    question: "What is a Hindu undivided family (HUF)?",
    metaDescription: "A Hindu undivided family (HUF) is taxed as a separate person with its own PAN and exemption limit. Who can form one, how it saves tax and common mistakes.",
    term: "Hindu undivided family",
    abbr: "HUF",
    category: "Income tax",
    definition:
      "A Hindu undivided family (HUF) is a family unit of persons descended from a common ancestor, with their spouses, that is taxed as a separate person with its own PAN, slab rates and deductions.",
    facts: [
      ["Who can form one", "Hindu, Jain, Sikh and Buddhist families"],
      ["Managed by", "The karta (usually the eldest member)"],
      ["Members", "Coparceners (including daughters) and other members such as spouses"],
      ["Tax status", "Separate taxpayer with its own PAN and basic exemption"],
      ["Deductions", "80C and 80D available in the old regime; standard deduction not applicable"],
    ],
    sections: [
      {
        heading: "Why families use an HUF",
        paras: [
          "Income from HUF property, such as ancestral property or a family business, is taxed in the HUF's hands, which gives the family another basic exemption limit and another set of deductions. In Jodhpur, it is common for joint family businesses and ancestral properties.",
        ],
      },
      {
        heading: "Setting one up",
        steps: [
          "Execute an HUF deed declaring the karta and members",
          "Apply for a PAN in the HUF's name",
          "Open a bank account in the HUF's name",
          "Bring in assets, typically through a gift or inheritance, keeping clubbing rules in mind",
        ],
      },
    ],
    mistakes: [
      "Members transferring their own money to the HUF without consideration, which is clubbed back to the member",
      "Mixing personal and HUF funds in one bank account",
    ],
    faqs: [
      { q: "Does an HUF need a separate PAN?", a: "Yes. An HUF is a separate taxpayer and needs its own PAN and bank account." },
      { q: "Can a daughter be a coparcener in an HUF?", a: "Yes. Since 2005, daughters have the same coparcenary rights as sons." },
      { q: "Can an HUF claim 80C?", a: "Yes, under the old regime, for payments such as life insurance on members' lives and ELSS investments." },
    ],
    related: ["pan", "income-tax", "section-80c"],
    services: ["income-tax-advisory-jodhpur", "itr-filing-jodhpur"],
  },
  {
    slug: "pan",
    question: "What is a permanent account number (PAN)?",
    term: "Permanent account number",
    abbr: "PAN",
    category: "Income tax",
    definition:
      "A PAN is the 10-character alphanumeric identity the Income Tax Department issues to every taxpayer. It is needed to file returns, receive TDS credit and carry out high-value transactions.",
    facts: [
      ["Format", "5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)"],
      ["4th character", "Taxpayer type: P (individual), H (HUF), F (firm/LLP), C (company)"],
      ["Instant e-PAN", "Free on the e-filing portal with an Aadhaar-linked mobile"],
      ["Aadhaar link", "Mandatory for individuals; unlinked PAN becomes inoperative"],
    ],
    sections: [
      {
        heading: "Where you must quote your PAN",
        bullets: [
          "Filing income tax returns and claiming TDS credit",
          "Opening bank, demat and mutual fund accounts",
          "Buying or selling property worth more than ₹10 lakh",
          "Cash deposits above set limits, and GST registration",
        ],
      },
      {
        heading: "Inoperative PAN",
        paras: [
          "If an individual's PAN isn't linked to Aadhaar, it becomes inoperative: refunds are withheld, interest on them stops, and TDS and TCS are charged at higher rates. Link it on the e-filing portal after paying the fee.",
        ],
      },
    ],
    mistakes: [
      "Name or date-of-birth mismatches between PAN and Aadhaar, which block linking",
      "Holding two PANs; only one is allowed and a penalty can apply",
    ],
    faqs: [
      { q: "How can I get a PAN quickly?", a: "Individuals with an Aadhaar-linked mobile number can get a free instant e-PAN on the income tax e-filing portal." },
      { q: "What happens if my PAN is inoperative?", a: "Refunds are withheld and tax is deducted or collected at higher rates. Link PAN with Aadhaar after paying the fee to make it operative again." },
      { q: "What does the 4th letter of a PAN mean?", a: "It shows the taxpayer type, for example P for an individual, H for an HUF, F for a firm and C for a company." },
    ],
    related: ["tan", "income-tax-return", "gstin", "hindu-undivided-family"],
    services: ["itr-filing-jodhpur", "gst-registration-jodhpur"],
  },
];
