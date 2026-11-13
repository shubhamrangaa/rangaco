import type { GlossaryTerm } from "./types";

export const BUSINESS_TERMS: GlossaryTerm[] = [
  {
    slug: "chartered-accountant",
    question: "What is a chartered accountant (CA)?",
    term: "Chartered Accountant",
    abbr: "CA",
    category: "Business & audit",
    definition:
      "A chartered accountant (CA) is a member of the Institute of Chartered Accountants of India (ICAI). Only a CA holding a certificate of practice can sign statutory audits, tax audits and many certificates.",
    facts: [
      ["Regulated by", "ICAI, under the Chartered Accountants Act, 1949"],
      ["Reserved work", "Statutory audits, tax audits (44AB), certificates with UDIN"],
      ["Firm ID", "Firm Registration Number (FRN) issued by ICAI"],
      ["Verify", "ICAI member and firm search; UDIN check at udin.icai.org"],
      ["Advertising", "ICAI rules restrict how CAs can advertise or solicit work"],
    ],
    sections: [
      {
        heading: "What only a practising CA can do",
        bullets: [
          "Sign the statutory audit report of a company, or an LLP above the audit limits",
          "Sign a tax audit report (Forms 3CA/3CB and 3CD) under section 44AB",
          "Issue certificates such as net-worth, turnover, fund-utilisation and 15CB certificates",
        ],
      },
      {
        heading: "CA firm or tax consultant?",
        table: {
          head: ["Work", "Tax consultant", "Practising CA"],
          rows: [
            ["ITR, GST, TDS returns", "Yes", "Yes"],
            ["Bookkeeping and payroll", "Yes", "Yes"],
            ["Notice replies (most)", "Yes", "Yes"],
            ["Statutory and tax audits", "No", "Yes"],
            ["Certificates with UDIN", "No", "Yes"],
          ],
        },
        note: "Ranga & Company is a tax consultancy; audits and certificates are signed by our partner CA firm.",
      },
      {
        heading: "How to check a CA before you hire",
        steps: [
          "Ask for their ICAI membership number and the firm's FRN",
          "Verify both on the ICAI website",
          "For any certificate or audit report, check the UDIN at udin.icai.org",
          "Get the scope and fee in writing",
        ],
      },
    ],
    mistakes: [
      "Hiring someone who signs 'CA' without checking membership",
      "Accepting a certificate without a UDIN, which banks and authorities reject",
    ],
    faqs: [
      { q: "Is a CA required to file an income tax return?", a: "No. Any taxpayer can file their own return, and tax consultants file returns for clients. A CA is required only when a tax audit report or a certificate has to be signed." },
      { q: "How do I verify a chartered accountant in Jodhpur?", a: "Ask for their ICAI membership number and firm registration number and check them on the ICAI website. Certificates they issue must carry a UDIN, which can be verified online." },
      { q: "How do I choose a CA firm in Jodhpur?", a: "Match the firm to the work, verify ICAI credentials, compare written quotes, and read recent Google reviews. Our comparison of Jodhpur CA firms walks through it." },
    ],
    related: ["tax-consultant", "statutory-audit", "tax-audit", "udin"],
    services: ["statutory-audit-jodhpur", "itr-filing-jodhpur", "income-tax-advisory-jodhpur"],
    posts: ["/blog/top-ca-firms-in-jodhpur"],
  },
  {
    slug: "tax-consultant",
    question: "What is a tax consultant?",
    term: "Tax consultant",
    category: "Business & audit",
    definition:
      "A tax consultant prepares and files tax returns, handles GST and TDS compliance, plans taxes and represents clients before the tax department. Unlike a practising CA, a tax consultant cannot sign audit reports.",
    facts: [
      ["Typical work", "ITR, GST and TDS filings, tax planning, notice replies, bookkeeping"],
      ["Cannot", "Sign statutory or tax audit reports or CA certificates"],
      ["GST representation", "Enrolled GST practitioners can file returns on clients' behalf"],
      ["Fees at Ranga & Company", "ITR from ₹1,200; GST returns from ₹799 a return"],
    ],
    sections: [
      {
        heading: "What a tax consultant does",
        bullets: [
          "Prepares and files income tax, GST and TDS returns",
          "Plans taxes: regime choice, deductions, advance tax and capital gains",
          "Replies to notices and appears as an authorised representative where the law allows",
          "Keeps books and runs payroll for small businesses",
        ],
      },
      {
        heading: "Questions to ask before you hire",
        steps: [
          "What exactly is included in the fee: revisions, notices, annual returns?",
          "Who will handle my file in July and September, the peak months?",
          "How do you share and store my documents?",
          "Who signs audits or certificates if I need them?",
        ],
      },
    ],
    mistakes: [
      "Choosing purely on the lowest fee and finding notices and revisions billed extra",
      "Sharing portal passwords over open chat without any agreement on data handling",
    ],
    faqs: [
      { q: "Is a tax consultant the same as a CA?", a: "No. A CA is a member of ICAI and can sign audits and certificates. A tax consultant handles returns, compliance and advice but cannot sign audit reports." },
      { q: "How much does a tax consultant charge for ITR filing in Jodhpur?", a: "It depends on your income sources. Ranga & Company's published ITR filing fee starts at ₹1,200; returns with business income or capital gains cost more." },
      { q: "Can a tax consultant reply to income tax notices?", a: "Yes, for most notices. For tax audits or certificates, a practising CA is needed." },
    ],
    related: ["chartered-accountant", "income-tax-return", "tax-assessment"],
    services: ["itr-filing-jodhpur", "income-tax-advisory-jodhpur", "gst-return-filing-jodhpur"],
    posts: ["/blog/top-ca-firms-in-jodhpur"],
  },
  {
    slug: "statutory-audit",
    question: "What is a statutory audit?",
    term: "Statutory audit",
    category: "Business & audit",
    definition:
      "A statutory audit is an audit required by law, in which an independent chartered accountant examines an entity's financial statements and reports whether they give a true and fair view.",
    metaDescription:
      "A statutory audit is an audit required by law, done by a chartered accountant. Who needs one, how it works, and how it differs from a tax audit.",
    facts: [
      ["Companies", "Every company under the Companies Act, 2013, whatever its size"],
      ["LLPs", "Turnover above ₹40 lakh or contribution above ₹25 lakh"],
      ["Auditor", "Practising CA or CA firm, appointed for 5 years at the AGM"],
      ["Output", "Audit report on the financial statements, with CARO where applicable"],
    ],
    sections: [
      {
        heading: "Statutory audit vs tax audit",
        table: {
          head: ["", "Statutory audit", "Tax audit"],
          rows: [
            ["Required by", "Companies Act / LLP Act / other laws", "Income-tax Act (section 44AB)"],
            ["Covers", "The whole financial statements", "Tax-related particulars in Form 3CD"],
            ["Triggered by", "Being a company (always) or LLP above limits", "Turnover or receipts above limits"],
            ["Signed by", "Practising CA", "Practising CA"],
          ],
        },
      },
      {
        heading: "How an audit runs",
        steps: [
          "Planning and risk assessment",
          "Testing ledgers, bank reconciliations and stock",
          "Reviewing compliance with accounting standards",
          "Reporting, including the CARO checklist and a management letter",
        ],
      },
    ],
    mistakes: [
      "Small private companies assuming they don't need an audit",
      "Leaving books incomplete until the auditor arrives, which delays the ROC filing",
    ],
    faqs: [
      { q: "Does a small private limited company need a statutory audit?", a: "Yes. Every company must have its accounts audited each year under the Companies Act, 2013, regardless of turnover or profit." },
      { q: "Who can do a statutory audit?", a: "Only a chartered accountant or a CA firm holding a certificate of practice, appointed as the auditor of the company or LLP." },
      { q: "When does an LLP need an audit?", a: "When turnover exceeds ₹40 lakh or partners' contribution exceeds ₹25 lakh in a financial year." },
    ],
    related: ["tax-audit", "chartered-accountant", "udin"],
    services: ["statutory-audit-jodhpur", "accounting-payroll-jodhpur"],
  },
  {
    slug: "tax-audit",
    question: "What is a tax audit under section 44AB?",
    term: "Tax audit",
    category: "Business & audit",
    definition:
      "A tax audit is an audit of a business's or professional's accounts under section 44AB of the Income-tax Act, required above set turnover or receipt limits, with a report filed by a practising CA.",
    metaTitle: "Tax Audit u/s 44AB: Limits, Due Date & Penalty",
    metaDescription:
      "A tax audit under section 44AB is required above set turnover or receipt limits. Limits, due dates for AY 2026-27, forms 3CA/3CB/3CD and the penalty.",
    facts: [
      ["Section", "44AB of the 1961 Act"],
      ["Business limit", "Turnover above ₹1 crore (₹10 crore if cash receipts and payments are each ≤ 5%)"],
      ["Profession limit", "Receipts above ₹50 lakh (₹75 lakh if cash receipts ≤ 5%)"],
      ["Forms", "3CA or 3CB, with 3CD"],
      ["Due date, AY 2026-27", "21 October 2026 (extended from 30 September)"],
      ["Penalty", "0.5% of turnover, up to ₹1.5 lakh"],
    ],
    sections: [
      {
        heading: "Presumptive cases",
        paras: [
          "A tax audit can also apply when someone under 44AD declares profit below 8% (6% for digital receipts) and their income exceeds the basic exemption limit, or opts out of presumptive taxation within the lock-in period.",
        ],
      },
      {
        heading: "What the auditor checks (Form 3CD)",
        bullets: [
          "Books of account and method of accounting",
          "TDS compliance and disallowances",
          "Cash payments above limits and loans in cash",
          "Payments to related parties and to MSMEs (section 43B(h))",
          "GST turnover reconciliation",
        ],
      },
    ],
    mistakes: [
      "Missing the cash-receipts test that raises the limit to ₹10 crore",
      "Filing the ITR before the audit report is uploaded and accepted",
    ],
    faqs: [
      { q: "What is the tax audit limit for FY 2025-26?", a: "₹1 crore of turnover for businesses (₹10 crore if cash receipts and payments are each within 5%) and ₹50 lakh of receipts for professionals (₹75 lakh if cash receipts are within 5%)." },
      { q: "What is the tax audit due date for AY 2026-27?", a: "CBDT extended it to 21 October 2026, with the ITR for audit cases due by 21 November 2026." },
      { q: "What is the penalty for not getting a tax audit?", a: "0.5% of turnover or gross receipts, up to ₹1.5 lakh, under section 271B." },
    ],
    related: ["statutory-audit", "presumptive-taxation", "chartered-accountant", "udin"],
    services: ["statutory-audit-jodhpur", "itr-filing-jodhpur"],
    posts: ["/blog/small-business-itr-jodhpur"],
  },
  {
    slug: "presumptive-taxation",
    question: "What is presumptive taxation?",
    term: "Presumptive taxation",
    category: "Business & audit",
    definition:
      "Presumptive taxation lets small businesses and professionals declare income as a fixed percentage of turnover or receipts, under sections 44AD, 44ADA and 44AE, instead of keeping full books.",
    metaTitle: "Presumptive Taxation (44AD, 44ADA): Rules",
    metaDescription:
      "Presumptive taxation lets small businesses (44AD) and professionals (44ADA) declare profit as a fixed % of turnover, skipping full books. Limits and rates.",
    facts: [
      ["44AD (business)", "Turnover up to ₹2 crore (₹3 crore if cash receipts ≤ 5%); profit 8%, or 6% for digital receipts"],
      ["44ADA (professionals)", "Receipts up to ₹50 lakh (₹75 lakh if cash ≤ 5%); profit 50%"],
      ["44AE (transporters)", "Up to 10 goods vehicles; fixed income per vehicle per month"],
      ["Eligible", "Resident individuals, HUFs and partnership firms (not LLPs)"],
      ["Advance tax", "100% by 15 March"],
      ["Form", "ITR-4"],
    ],
    sections: [
      {
        heading: "How 44AD works",
        paras: [
          "You declare at least 8% of turnover as profit, or 6% of receipts received digitally. No other business expenses are deducted, and you don't need detailed books. You can declare a higher profit if it is actually higher.",
        ],
        table: {
          head: ["Turnover ₹80 lakh", "Profit declared"],
          rows: [
            ["All received by bank / UPI", "6% = ₹4.8 lakh"],
            ["All received in cash", "8% = ₹6.4 lakh"],
          ],
        },
      },
      {
        heading: "The 5-year lock-in",
        paras: [
          "If you opt for 44AD and then declare lower profit in any of the next five years, you can't use 44AD again for the following five years, and a tax audit may be required. Plan before you switch.",
        ],
      },
    ],
    mistakes: [
      "Using 44AD for commission or agency income, which isn't eligible",
      "LLPs trying to use 44AD; only individuals, HUFs and partnership firms can",
      "Declaring below 8%/6% without books and a tax audit",
    ],
    faqs: [
      { q: "Can freelancers use presumptive taxation?", a: "Yes, specified professionals such as consultants, doctors, architects and IT professionals can use 44ADA, declaring 50% of receipts as income if receipts are up to ₹50 lakh (₹75 lakh if cash is within 5%)." },
      { q: "Do I need to keep books under 44AD?", a: "Detailed books aren't required, but you still need records of turnover, bank statements and GST returns if registered." },
      { q: "Which ITR form is used for presumptive income?", a: "ITR-4 (Sugam), if total income is up to ₹50 lakh and other conditions are met; otherwise ITR-3." },
    ],
    related: ["tax-audit", "advance-tax", "income-tax-return"],
    services: ["itr-filing-jodhpur", "accounting-payroll-jodhpur"],
    posts: ["/blog/small-business-itr-jodhpur"],
  },
  {
    slug: "payroll",
    question: "What is payroll?",
    term: "Payroll",
    category: "Business & audit",
    definition:
      "Payroll is the process of calculating and paying employee salaries, including deductions for TDS, provident fund and ESI, and filing the related statutory returns.",
    facts: [
      ["TDS on salary", "Section 192; quarterly Form 24Q; Form 16 by 15 June"],
      ["EPF", "12% of basic wages each from employee and employer; 20+ employees"],
      ["ESI", "0.75% employee, 3.25% employer; wages up to ₹21,000 a month"],
      ["Professional tax", "Not levied in Rajasthan"],
      ["Payment deadlines", "EPF and ESI by the 15th of the next month; TDS by the 7th"],
    ],
    sections: [
      {
        heading: "Monthly payroll checklist",
        steps: [
          "Record attendance, leave and new joiners or exits",
          "Calculate gross salary, then PF, ESI and TDS deductions",
          "Pay salaries and issue payslips",
          "Deposit TDS by the 7th, and PF and ESI by the 15th",
          "File quarterly TDS returns (24Q) and issue Form 16 annually",
        ],
      },
      {
        heading: "Rajasthan specifics",
        paras: [
          "Rajasthan does not levy professional tax, so Jodhpur payrolls have no PT deduction, unlike states such as Maharashtra or Karnataka. Labour welfare and shops-and-establishments rules still apply.",
        ],
      },
    ],
    mistakes: [
      "Late PF or ESI deposits, which attract interest and damages",
      "Restructuring salary to cut PF in ways the wage definition doesn't allow",
      "Employers deducting TDS under the wrong regime for an employee",
    ],
    faqs: [
      { q: "Is professional tax deducted in Rajasthan?", a: "No. Rajasthan does not levy professional tax on salaries." },
      { q: "When is PF registration mandatory?", a: "Once an establishment has 20 or more employees. Smaller employers can register voluntarily." },
      { q: "Who must be covered under ESI?", a: "Employees earning up to ₹21,000 a month in establishments covered by the ESI Act, typically those with 10 or more employees." },
    ],
    related: ["tds", "form-16", "standard-deduction", "tan"],
    services: ["accounting-payroll-jodhpur", "tds-tcs-compliance-jodhpur"],
  },
  {
    slug: "udin",
    question: "What is a UDIN?",
    metaDescription: "A UDIN is the unique number a chartered accountant generates for every certificate or audit report they sign. Why it matters and how to verify one.",
    term: "Unique Document Identification Number",
    abbr: "UDIN",
    category: "Business & audit",
    definition:
      "A UDIN is an 18-character number a chartered accountant generates on ICAI's portal for every certificate, audit report or attestation they sign, so anyone can verify the document is genuine.",
    metaTitle: "UDIN: Meaning and How to Verify",
    facts: [
      ["Issued by", "ICAI's UDIN portal, generated by the signing CA"],
      ["Mandatory for", "Certificates, audit reports, tax audit reports, attestations"],
      ["Verify at", "udin.icai.org"],
      ["Purpose", "Stops fake certificates and signatures"],
    ],
    sections: [
      {
        heading: "Why it matters to you",
        paras: [
          "Banks, visa offices, tax authorities and government departments verify UDINs. A net-worth certificate for a visa or a turnover certificate for a tender without a valid UDIN can be rejected outright.",
        ],
      },
      {
        heading: "How to verify a UDIN",
        steps: [
          "Go to udin.icai.org and choose 'Verify UDIN'",
          "Enter the UDIN, the document date and the CA's membership number",
          "Check that the document type and figures match what you received",
        ],
      },
    ],
    mistakes: [
      "Accepting a certificate without a UDIN",
      "Not checking that the UDIN details match the certificate's figures",
    ],
    faqs: [
      { q: "Is UDIN mandatory on CA certificates?", a: "Yes. ICAI requires a UDIN for every certificate, audit report and attestation signed by a practising CA." },
      { q: "How do I verify a CA certificate?", a: "Check its UDIN on udin.icai.org using the date and the CA's membership number." },
      { q: "Can a tax consultant issue a UDIN?", a: "No. Only a practising chartered accountant can generate a UDIN for documents they sign." },
    ],
    related: ["chartered-accountant", "statutory-audit", "tax-audit"],
    services: ["statutory-audit-jodhpur"],
    posts: ["/blog/top-ca-firms-in-jodhpur"],
  },
  {
    slug: "udyam-registration",
    question: "What is Udyam registration?",
    term: "Udyam registration",
    category: "Business & audit",
    definition:
      "Udyam registration is the free online registration that classifies a business as a micro, small or medium enterprise (MSME), unlocking benefits such as priority lending, subsidies and protection against delayed payments.",
    metaTitle: "Udyam Registration: MSME Limits & Benefits",
    metaDescription:
      "Udyam registration classifies a business as a micro, small or medium enterprise. Current MSME limits, how to register free, and the 45-day payment rule.",
    facts: [
      ["Portal", "udyamregistration.gov.in (free)"],
      ["Needs", "Aadhaar of the owner or authorised signatory, and the business PAN"],
      ["Micro", "Investment up to ₹2.5 crore and turnover up to ₹10 crore"],
      ["Small", "Investment up to ₹25 crore and turnover up to ₹100 crore"],
      ["Medium", "Investment up to ₹125 crore and turnover up to ₹500 crore"],
    ],
    sections: [
      {
        heading: "Why it matters for tax: section 43B(h)",
        paras: [
          "If you buy from a registered micro or small enterprise, you must pay within 15 days, or within the agreed period up to 45 days. Otherwise, the expense is allowed for income tax only in the year you actually pay. Suppliers with Udyam registration get paid faster; buyers who are late pay more tax.",
        ],
      },
      {
        heading: "Other benefits",
        bullets: [
          "Collateral-free loans and priority-sector lending",
          "Protection under the MSMED Act against delayed payments",
          "Concessions in government tenders and some state schemes",
        ],
      },
    ],
    mistakes: [
      "Paying for a 'Udyam certificate' through a lookalike paid website; the official portal is free",
      "Buyers ignoring the 45-day rule and losing the expense deduction",
    ],
    faqs: [
      { q: "Is Udyam registration free?", a: "Yes. It is free on the official portal, udyamregistration.gov.in." },
      { q: "What is the 45-day payment rule?", a: "Under section 43B(h), payments to registered micro and small suppliers made after 15 days, or after the agreed period of up to 45 days, are deductible only in the year actually paid." },
      { q: "Do traders get Udyam registration?", a: "Yes. Retail and wholesale traders can register on the Udyam portal, mainly for priority-sector lending." },
    ],
    related: ["tax-audit", "presumptive-taxation", "gstin"],
    services: ["accounting-payroll-jodhpur", "gst-registration-jodhpur"],
  },
  {
    slug: "tds",
    question: "What is tax deducted at source (TDS)?",
    term: "Tax deducted at source",
    abbr: "TDS",
    category: "TDS & TCS",
    definition:
      "Tax deducted at source (TDS) is income tax that a payer deducts before paying salary, rent, professional fees, contractor bills or interest, and deposits with the government against the payee's PAN.",
    metaDescription:
      "TDS is income tax deducted by the payer before paying salary, rent, fees or contractors. Rates, due dates, returns and how to check your TDS credit.",
    facts: [
      ["Deposit by", "7th of the next month (30 April for March)"],
      ["Quarterly returns", "31 July, 31 October, 31 January, 31 May"],
      ["Certificates", "Form 16 (salary), 16A (others), 16B (property)"],
      ["Late deposit interest", "1.5% a month from date of deduction"],
      ["Late return fee", "₹200 a day (234E), up to the TDS amount"],
    ],
    sections: [
      {
        heading: "Common TDS sections",
        table: {
          head: ["Section", "Payment", "Rate"],
          rows: [
            ["192", "Salary", "Slab rates"],
            ["194A", "Interest other than on securities", "10%"],
            ["194C", "Contractors", "1% (individual/HUF), 2% (others)"],
            ["194H", "Commission or brokerage", "2%"],
            ["194-I", "Rent: land or building / plant and machinery", "10% / 2%"],
            ["194J", "Professional fees / technical services", "10% / 2%"],
            ["194-IA", "Purchase of property ₹50 lakh+", "1%"],
          ],
        },
        note: "Thresholds apply before TDS is required, and several were revised in Budget 2025. Without a valid PAN, TDS is generally 20%.",
      },
      {
        heading: "TDS compliance cycle",
        steps: [
          "Get a TAN before deducting",
          "Deduct at the right rate when paying or crediting, whichever is earlier",
          "Deposit through challan ITNS 281 by the 7th",
          "File quarterly returns (24Q salary, 26Q others, 27Q non-residents)",
          "Issue TDS certificates within the due dates",
        ],
      },
    ],
    mistakes: [
      "Deducting under the wrong section, for example 194C instead of 194J",
      "Quoting the wrong PAN of the deductee, so credit doesn't reach them",
      "Depositing TDS but filing the quarterly return late",
    ],
    faqs: [
      { q: "What happens if TDS is deducted but not deposited?", a: "The deductor pays interest at 1.5% a month from the date of deduction, plus late fees and possible penalties. The payee can claim credit once it is deposited." },
      { q: "How do I check TDS deducted on my income?", a: "Log in to the income tax e-filing portal and view Form 26AS or the Annual Information Statement (AIS)." },
      { q: "What is the TDS rate without PAN?", a: "Generally 20%, or the applicable rate if higher, under section 206AA." },
    ],
    related: ["tan", "tcs", "form-16", "form-26as", "tds-on-property"],
    services: ["tds-tcs-compliance-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur", "/blog/income-tax-act-2025-changes"],
  },
  {
    slug: "tan",
    question: "What is a TAN?",
    term: "Tax deduction and collection account number",
    abbr: "TAN",
    category: "TDS & TCS",
    definition:
      "A TAN is a 10-character number every person who deducts or collects tax at source must hold and quote in TDS and TCS payments, returns and certificates.",
    metaTitle: "TAN: Meaning, Rules and How to Apply",
    facts: [
      ["Format", "4 letters, 5 digits, 1 letter (e.g. ABCD12345E)"],
      ["Apply with", "Form 49B on the Protean (NSDL) portal"],
      ["Who needs it", "Employers and businesses deducting or collecting tax at source"],
      ["Not needed", "Property buyers (194-IA) and individuals paying rent under 194-IB; they use PAN"],
      ["Penalty", "₹10,000 for not applying when required"],
    ],
    sections: [
      {
        heading: "PAN vs TAN",
        table: {
          head: ["", "PAN", "TAN"],
          rows: [
            ["Identifies", "A taxpayer", "A deductor or collector of tax"],
            ["Used in", "Returns, all tax matters", "TDS/TCS challans, returns, certificates"],
            ["Format", "ABCDE1234F", "ABCD12345E (first 3 letters: jurisdiction)"],
          ],
        },
      },
      {
        heading: "Applying for a TAN",
        steps: [
          "Fill Form 49B online on the Protean (NSDL) TIN portal",
          "Pay the processing fee and submit",
          "Receive the TAN by email; it is also visible on the TRACES portal once registered",
        ],
      },
    ],
    mistakes: [
      "Using PAN instead of TAN in TDS challans (only allowed for 194-IA, 194-IB and 194M)",
      "Applying for a second TAN instead of using the existing one",
    ],
    faqs: [
      { q: "What is the difference between PAN and TAN?", a: "PAN identifies a taxpayer for all income tax purposes. TAN identifies a deductor or collector of tax at source and is used only for TDS and TCS." },
      { q: "Can I use PAN instead of TAN for TDS?", a: "Only in specific cases such as buying property under section 194-IA or paying rent under section 194-IB. Otherwise, deductors must have a TAN." },
      { q: "How long does it take to get a TAN?", a: "Usually a few working days after applying online with Form 49B." },
    ],
    related: ["tds", "pan", "tcs", "payroll"],
    services: ["tds-tcs-compliance-jodhpur"],
    posts: ["/blog/income-tax-act-2025-changes"],
  },
  {
    slug: "tcs",
    question: "What is tax collected at source (TCS)?",
    metaDescription: "Tax collected at source (TCS) is tax a seller collects from the buyer on scrap, cars over ₹10 lakh and foreign remittances. Rates, returns and refunds.",
    term: "Tax collected at source",
    abbr: "TCS",
    category: "TDS & TCS",
    definition:
      "Tax collected at source (TCS) is tax a seller collects from the buyer, over and above the price, on specified sales such as scrap, motor vehicles over ₹10 lakh and foreign remittances, and deposits with the government.",
    facts: [
      ["Section", "206C of the 1961 Act"],
      ["Deposit by", "7th of the next month"],
      ["Quarterly return", "Form 27EQ"],
      ["Certificate", "Form 27D"],
      ["Credit", "Buyer claims it against their tax in the ITR"],
    ],
    sections: [
      {
        heading: "Common TCS cases",
        table: {
          head: ["Transaction", "TCS"],
          rows: [
            ["Sale of scrap", "1%"],
            ["Motor vehicle above ₹10 lakh", "1% of the price"],
            ["Foreign remittance under LRS above ₹10 lakh a year", "20% generally; 5% for education or medical purposes"],
            ["Overseas tour packages", "Varies by amount"],
          ],
        },
        note: "TCS on the sale of goods under section 206C(1H) was withdrawn from 1 April 2025.",
      },
      {
        heading: "For buyers",
        paras: [
          "TCS is not an extra tax: it shows in your Form 26AS and AIS and is adjusted against your tax when you file, so you get it back as a refund if it is more than your liability.",
        ],
      },
    ],
    mistakes: [
      "Buyers forgetting to claim TCS paid on a car or foreign remittance in their ITR",
      "Sellers still collecting TCS on goods under the withdrawn 206C(1H)",
    ],
    faqs: [
      { q: "Is TCS refundable?", a: "TCS is credited against your income tax when you file your return. If it exceeds your liability, the excess is refunded." },
      { q: "What is the TCS on foreign remittances?", a: "Under the Liberalised Remittance Scheme, TCS generally applies at 20% above ₹10 lakh a year, with lower rates for education and medical treatment." },
      { q: "What is the difference between TDS and TCS?", a: "TDS is deducted by the payer from a payment; TCS is collected by the seller from the buyer on top of the price." },
    ],
    related: ["tds", "tan", "form-26as"],
    services: ["tds-tcs-compliance-jodhpur"],
    posts: ["/blog/income-tax-act-2025-changes"],
  },
  {
    slug: "tds-on-property",
    question: "How does TDS on a property purchase work?",
    term: "TDS on property purchase",
    category: "TDS & TCS",
    definition:
      "When you buy property worth ₹50 lakh or more from a resident seller, you must deduct 1% TDS under section 194-IA from the payment and deposit it with Form 26QB.",
    metaTitle: "TDS on Property (194-IA): Rate & Form 26QB",
    metaDescription:
      "Buying property worth ₹50 lakh or more? Deduct 1% TDS under section 194-IA, pay it with Form 26QB and issue Form 16B. Steps, deadlines and penalties.",
    facts: [
      ["Section", "194-IA of the 1961 Act"],
      ["Rate", "1% of the higher of sale price and stamp duty value"],
      ["Threshold", "Consideration or stamp value of ₹50 lakh or more"],
      ["Who deducts", "The buyer (no TAN needed; uses PAN)"],
      ["Pay with", "Form 26QB within 30 days from the end of the month of deduction"],
      ["Certificate", "Form 16B to the seller within 15 days of the 26QB due date"],
    ],
    sections: [
      {
        heading: "Step by step for buyers",
        steps: [
          "Collect the seller's PAN and check it is operative",
          "Deduct 1% from each instalment you pay, including advance payments",
          "File Form 26QB and pay the TDS online (incometax.gov.in → e-Pay Tax)",
          "Download Form 16B from TRACES and give it to the seller",
        ],
      },
      {
        heading: "NRI sellers",
        paras: [
          "If the seller is a non-resident, section 194-IA doesn't apply. The buyer must deduct tax under section 195 on the capital gain at much higher rates, needs a TAN, and files Form 27Q. The seller can apply for a lower-deduction certificate.",
        ],
      },
    ],
    mistakes: [
      "Deducting on the agreement value when the stamp duty (DLC) value is higher",
      "Forgetting TDS on advance and instalment payments",
      "Paying an NRI seller without deducting under section 195",
    ],
    faqs: [
      { q: "Is TDS deducted on property below ₹50 lakh?", a: "No. Section 194-IA applies only when the consideration or stamp duty value is ₹50 lakh or more." },
      { q: "Does the buyer need a TAN for TDS on property?", a: "No. For a resident seller, the buyer uses their PAN with Form 26QB." },
      { q: "What if the buyer doesn't deduct TDS?", a: "The buyer is treated as in default and pays interest and late fees, and may face penalties." },
    ],
    related: ["tds", "capital-gains-tax", "stamp-duty", "form-26as"],
    services: ["tds-tcs-compliance-jodhpur", "income-tax-advisory-jodhpur"],
    posts: ["/blog/property-sale-capital-gains-tax-jodhpur"],
  },
];
