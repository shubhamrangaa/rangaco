import type { GlossaryTerm } from "./types";

export const GST_TERMS: GlossaryTerm[] = [
  {
    slug: "gst",
    question: "What is goods and services tax (GST)?",
    term: "Goods and services tax",
    abbr: "GST",
    category: "GST",
    definition:
      "GST is India's indirect tax on the supply of goods and services, in force since 1 July 2017. Businesses collect it from customers, claim credit for GST paid on purchases, and pay the difference to the government.",
    facts: [
      ["In force since", "1 July 2017"],
      ["Within a state", "CGST + SGST (e.g. Jodhpur to Jaipur)"],
      ["Between states / imports", "IGST"],
      ["Main slabs (from 22 Sep 2025)", "5% and 18%, with 40% for select luxury and sin goods"],
      ["Registration in Rajasthan", "Turnover above ₹40 lakh (goods) or ₹20 lakh (services)"],
      ["Rajasthan state code", "08"],
    ],
    sections: [
      {
        heading: "How GST flows through a sale",
        steps: [
          "A supplier charges GST on its invoice and collects it from the buyer",
          "The supplier reports the sale in GSTR-1 and pays tax in GSTR-3B",
          "The business buyer claims the GST it paid as input tax credit",
          "Only the final consumer bears the tax; each business pays GST on its value addition",
        ],
      },
      {
        heading: "Who must register",
        bullets: [
          "Businesses with aggregate turnover above ₹40 lakh (goods) or ₹20 lakh (services) in Rajasthan",
          "Anyone making inter-state supplies of goods, regardless of turnover",
          "Most sellers on e-commerce platforms, and those paying tax under reverse charge",
          "Voluntary registration is allowed for anyone who wants to claim input tax credit",
        ],
      },
      {
        heading: "The 2025 rate rationalisation",
        paras: [
          "From 22 September 2025, the GST Council folded the old 12% and 28% slabs into a simpler structure: most items now fall under 5% or 18%, with a 40% rate for a small set of luxury and sin goods. Always confirm the current rate for your HSN code before invoicing.",
        ],
      },
    ],
    mistakes: [
      "Charging CGST+SGST on a sale to another state, which should be IGST",
      "Using a pre-September 2025 rate for an item whose slab changed",
      "Registering late after crossing the threshold, which brings tax plus interest on past sales",
    ],
    faqs: [
      { q: "What is the GST registration limit in Rajasthan?", a: "₹40 lakh of annual turnover for suppliers of goods and ₹20 lakh for service providers, with compulsory registration for inter-state sales of goods regardless of turnover." },
      { q: "What is the difference between CGST, SGST and IGST?", a: "CGST and SGST are charged together on sales within a state and shared between the centre and the state. IGST is charged on inter-state sales and imports." },
      { q: "What are the current GST rates?", a: "Since 22 September 2025, most goods and services fall in two main slabs, 5% and 18%, with 40% for select luxury and sin goods and special rates for a few items such as gold." },
    ],
    related: ["gstin", "input-tax-credit", "gst-returns", "composition-scheme"],
    services: ["gst-registration-jodhpur", "gst-return-filing-jodhpur"],
    posts: ["/blog/gstr-9-annual-return-fy-2025-26"],
  },
  {
    slug: "gstin",
    question: "What is a GSTIN?",
    term: "GST identification number",
    abbr: "GSTIN",
    category: "GST",
    definition:
      "A GSTIN is the 15-character number every GST-registered business gets, one for each state it is registered in. It is built from the state code, the business's PAN, an entity number and a check digit.",
    metaTitle: "GSTIN: Meaning, Format and How to Verify",
    facts: [
      ["Length", "15 characters"],
      ["Characters 1–2", "State code (Rajasthan = 08)"],
      ["Characters 3–12", "PAN of the business"],
      ["Character 13", "Entity number for that PAN in the state"],
      ["Character 14 / 15", "'Z' by default / check digit"],
    ],
    sections: [
      {
        heading: "Reading a GSTIN",
        paras: [
          "A Jodhpur business with PAN ABCDE1234F registered once in Rajasthan would have a GSTIN like 08ABCDE1234F1Z5. If the same PAN registers a second business vertical in Rajasthan, the 13th character becomes 2.",
        ],
      },
      {
        heading: "Verify a supplier's GSTIN",
        steps: [
          "Go to gst.gov.in → Search Taxpayer → Search by GSTIN",
          "Check that the status is Active and the legal name matches the invoice",
          "Check return-filing status, since your input tax credit depends on the supplier filing",
        ],
      },
    ],
    mistakes: [
      "Paying suppliers without checking that their GSTIN is active",
      "Quoting the wrong buyer GSTIN on invoices, which sends the ITC to someone else",
    ],
    faqs: [
      { q: "What is the GST state code for Rajasthan?", a: "08. Every Rajasthan GSTIN starts with 08." },
      { q: "Can one PAN have more than one GSTIN?", a: "Yes. A business needs a separate GSTIN for each state it operates in, and can have more than one in a state for separate business verticals." },
      { q: "How do I check if a GSTIN is genuine?", a: "Use 'Search Taxpayer' on gst.gov.in to confirm the GSTIN is active and belongs to the business named on the invoice." },
    ],
    related: ["gst", "pan", "input-tax-credit", "e-invoicing"],
    services: ["gst-registration-jodhpur"],
    posts: ["/blog/gstr-9-annual-return-fy-2025-26"],
  },
  {
    slug: "input-tax-credit",
    question: "What is input tax credit (ITC)?",
    term: "Input tax credit",
    abbr: "ITC",
    category: "GST",
    definition:
      "Input tax credit (ITC) lets a GST-registered business subtract the GST it paid on purchases from the GST it collects on sales, so tax is paid only on the value it adds.",
    metaDescription:
      "Input tax credit (ITC) lets GST-registered businesses deduct GST paid on purchases from GST collected on sales. Conditions, blocked credits and an example.",
    facts: [
      ["Law", "Sections 16–18 of the CGST Act"],
      ["Key condition", "The invoice must appear in your GSTR-2B"],
      ["Time limit", "30 November after the financial year, or the annual return date if earlier"],
      ["Blocked credits", "Section 17(5): most motor vehicles, food, club memberships, personal use"],
      ["Order of use", "IGST credit first, then CGST and SGST"],
    ],
    sections: [
      {
        heading: "Conditions to claim ITC",
        steps: [
          "You hold a tax invoice or debit note from a registered supplier",
          "You have received the goods or services",
          "The supplier has reported the invoice, so it appears in your GSTR-2B",
          "The supplier has actually paid the tax",
          "You pay the supplier within 180 days, or reverse the credit until you do",
        ],
      },
      {
        heading: "Credit you cannot claim",
        bullets: [
          "Motor vehicles for carrying people (with exceptions such as for transport businesses)",
          "Food and beverages, outdoor catering, beauty treatment, health services",
          "Club and gym memberships, travel benefits to employees",
          "Goods or services for personal use, or lost, stolen or given as free samples",
          "Construction of immovable property on your own account",
        ],
      },
    ],
    example:
      "A Jodhpur furniture maker pays ₹18,000 GST on wood and sells furniture with ₹30,000 GST. With ITC, it pays only ₹12,000 to the government.",
    mistakes: [
      "Claiming ITC from your purchase register when the invoice isn't in GSTR-2B",
      "Claiming credit on blocked items such as staff food or cars",
      "Not reversing credit when a supplier isn't paid within 180 days",
    ],
    faqs: [
      { q: "Why can't I claim ITC that is in my books?", a: "The most common reason is that the supplier hasn't reported the invoice, so it isn't in your GSTR-2B. Follow up with the supplier before claiming." },
      { q: "Can composition dealers claim ITC?", a: "No. Businesses under the composition scheme pay tax at a flat rate on turnover and cannot claim input tax credit." },
      { q: "What is the last date to claim ITC for FY 2025-26?", a: "30 November 2026, or the date you file the FY 2025-26 annual return if that is earlier." },
    ],
    related: ["gstr-2b", "gst-returns", "reverse-charge-mechanism", "gst-refund"],
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
    posts: ["/blog/gstr-9-annual-return-fy-2025-26"],
  },
  {
    slug: "gstr-2b",
    question: "What is GSTR-2B?",
    term: "GSTR-2B",
    category: "GST",
    definition:
      "GSTR-2B is a monthly auto-drafted statement on the GST portal showing the input tax credit available to you, based on invoices your suppliers have reported. It does not change once generated.",
    facts: [
      ["Generated", "On the 14th of the following month"],
      ["Built from", "Suppliers' GSTR-1/IFF, plus import data (ICEGATE)"],
      ["Nature", "Static: fixed for the period once generated"],
      ["Used for", "Deciding the ITC you claim in GSTR-3B"],
      ["Linked to", "The Invoice Management System (IMS), where you accept or reject invoices"],
    ],
    sections: [
      {
        heading: "How to use GSTR-2B every month",
        steps: [
          "Review supplier invoices in the Invoice Management System and accept, reject or keep them pending",
          "Download GSTR-2B after the 14th",
          "Match it with your purchase register: invoice number, GSTIN, taxable value and tax",
          "Claim in GSTR-3B only the credit that appears in GSTR-2B and is otherwise eligible",
          "Chase suppliers whose invoices are missing",
        ],
      },
    ],
    mistakes: [
      "Claiming credit for invoices missing from GSTR-2B and hoping they appear later",
      "Not reviewing invoices in IMS before 2B is generated",
    ],
    faqs: [
      { q: "What is the difference between GSTR-2A and GSTR-2B?", a: "GSTR-2A updates continuously as suppliers file. GSTR-2B is a fixed monthly statement generated on the 14th and is the basis for claiming ITC." },
      { q: "An invoice is missing from my GSTR-2B. What should I do?", a: "Ask the supplier to report it in their GSTR-1 or IFF. It will appear in a later month's GSTR-2B, when you can claim it." },
      { q: "When is GSTR-2B generated?", a: "On the 14th of the month following the tax period." },
    ],
    related: ["input-tax-credit", "gst-returns", "gstin"],
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
    posts: ["/blog/gstr-9-annual-return-fy-2025-26"],
  },
  {
    slug: "gst-returns",
    question: "What are GST returns?",
    term: "GST returns",
    category: "GST",
    definition:
      "GST returns are the periodic statements a registered business files on the GST portal to report its sales, purchases, tax collected and input tax credit, and to pay tax due.",
    metaDescription:
      "GST returns report a business's sales, purchases, tax and input credit. GSTR-1, GSTR-3B and GSTR-9 due dates and late fees, explained simply.",
    facts: [
      ["GSTR-1", "Sales: 11th of next month (quarterly filers: 13th after quarter)"],
      ["GSTR-3B", "Summary and payment: 20th (Rajasthan QRMP: 24th after quarter)"],
      ["GSTR-9", "Annual return: 31 December after the financial year"],
      ["Late fee, GSTR-3B", "₹50 a day (₹20 for nil) plus 18% interest a year"],
      ["Composition", "CMP-08 quarterly by the 18th; GSTR-4 annually by 30 April"],
    ],
    sections: [
      {
        heading: "Monthly or quarterly?",
        paras: [
          "Businesses with turnover up to ₹5 crore can opt for the QRMP scheme: GSTR-1 and GSTR-3B are filed quarterly, but tax is paid monthly through PMT-06 by the 25th for the first two months of each quarter.",
        ],
      },
      {
        heading: "Return calendar",
        table: {
          head: ["Return", "What it reports", "Due"],
          rows: [
            ["GSTR-1", "Outward supplies (sales invoices)", "11th monthly / 13th quarterly"],
            ["IFF", "Optional B2B invoices for QRMP filers in months 1–2", "13th"],
            ["GSTR-3B", "Summary of sales, ITC and tax paid", "20th monthly / 24th quarterly (Rajasthan)"],
            ["GSTR-9", "Annual return", "31 December"],
            ["GSTR-9C", "Reconciliation, turnover above ₹5 crore", "31 December"],
          ],
        },
      },
    ],
    mistakes: [
      "Filing GSTR-3B without reconciling ITC with GSTR-2B",
      "Not filing nil returns in months with no sales",
      "Filing GSTR-1 late, which delays your customers' credit",
    ],
    faqs: [
      { q: "What is the due date for GSTR-3B?", a: "The 20th of the following month for monthly filers. Quarterly (QRMP) filers in Rajasthan file by the 24th of the month after the quarter." },
      { q: "Do I have to file GST returns if there were no sales?", a: "Yes. A nil return must still be filed for every period you are registered, or late fees apply." },
      { q: "Who must file GSTR-9?", a: "Regular taxpayers with aggregate turnover above ₹2 crore must file GSTR-9; it is optional below that." },
    ],
    related: ["gstr-2b", "input-tax-credit", "gst", "composition-scheme"],
    services: ["gst-return-filing-jodhpur"],
    posts: ["/blog/gstr-9-annual-return-fy-2025-26"],
  },
  {
    slug: "composition-scheme",
    question: "What is the GST composition scheme?",
    metaDescription: "The GST composition scheme lets small businesses pay GST at a flat 1–6% of turnover with simple returns, but no input credit. Limits, rates and rules.",
    term: "GST composition scheme",
    category: "GST",
    definition:
      "The GST composition scheme lets small businesses pay GST at a low flat rate on turnover with simpler returns, in exchange for giving up input tax credit and inter-state sales.",
    facts: [
      ["Turnover limit", "₹1.5 crore for goods (Rajasthan); ₹50 lakh for service providers"],
      ["Rates", "1% traders and manufacturers, 5% restaurants, 6% service providers"],
      ["Returns", "CMP-08 quarterly (by 18th) and GSTR-4 annually (by 30 April)"],
      ["Cannot", "Claim ITC, collect GST from customers, or make inter-state supplies"],
      ["Invoice", "Bill of supply marked 'composition taxable person'"],
    ],
    sections: [
      {
        heading: "Is composition right for you?",
        paras: [
          "It suits small retailers, kirana stores and restaurants selling mostly to consumers within Rajasthan, where customers don't need input tax credit. It is a poor fit if you sell to other businesses (they can't claim credit on your bills) or buy a lot of taxed inputs (you lose the credit).",
        ],
      },
      {
        heading: "How to opt in",
        steps: [
          "File CMP-02 on the GST portal before the start of the financial year (or at new registration)",
          "Display 'composition taxable person' on your signboard and bills",
          "Issue bills of supply instead of tax invoices",
          "Pay quarterly through CMP-08 and file GSTR-4 annually",
        ],
      },
    ],
    mistakes: [
      "Making an inter-state sale, which is not allowed under composition",
      "Collecting GST from customers on the bill",
      "Crossing the turnover limit during the year without moving to normal registration",
    ],
    faqs: [
      { q: "What is the composition scheme limit in Rajasthan?", a: "₹1.5 crore of aggregate turnover for goods suppliers and restaurants, and ₹50 lakh for service providers." },
      { q: "Can a composition dealer sell outside Rajasthan?", a: "No. Composition dealers cannot make inter-state outward supplies of goods." },
      { q: "Can a composition dealer claim input tax credit?", a: "No. That is the main trade-off for the lower rate and simpler returns." },
    ],
    related: ["gst", "input-tax-credit", "gst-returns", "gstin"],
    services: ["gst-registration-jodhpur", "gst-return-filing-jodhpur"],
  },
  {
    slug: "reverse-charge-mechanism",
    question: "What is the reverse charge mechanism (RCM)?",
    metaDescription: "Under reverse charge (RCM), the buyer pays GST instead of the supplier on certain goods and services. Common RCM cases like rent, legal fees and transport.",
    term: "Reverse charge mechanism",
    abbr: "RCM",
    category: "GST",
    definition:
      "Under the reverse charge mechanism (RCM), the buyer of certain goods or services pays the GST directly to the government instead of the supplier, and then claims it as input tax credit if eligible.",
    facts: [
      ["Law", "Sections 9(3), 9(4) of the CGST Act and 5(3), 5(4) of the IGST Act"],
      ["Payment", "In cash through GSTR-3B; cannot be paid from ITC"],
      ["Credit", "Claimable as ITC in the same month, if otherwise eligible"],
      ["Paperwork", "Self-invoice for purchases from unregistered suppliers; payment voucher"],
    ],
    sections: [
      {
        heading: "Common reverse-charge services for businesses",
        table: {
          head: ["Service", "Who pays GST"],
          rows: [
            ["Goods transport agency (GTA), where GTA hasn't opted for forward charge", "Registered business recipient"],
            ["Legal services from an advocate or law firm", "Business recipient"],
            ["Sponsorship services", "Business recipient"],
            ["Residential dwelling rented to a registered person", "The registered tenant"],
            ["Commercial property rented by an unregistered landlord to a registered person", "The registered tenant"],
            ["Director's services to a company", "The company"],
          ],
        },
      },
    ],
    mistakes: [
      "Missing RCM on rent paid to an unregistered landlord for your shop or office",
      "Paying RCM liability out of ITC instead of cash",
      "Not issuing a self-invoice for the RCM purchase",
    ],
    faqs: [
      { q: "Can I pay reverse charge GST using input tax credit?", a: "No. RCM tax must be paid in cash through GSTR-3B. You can then claim it back as ITC if the purchase is eligible." },
      { q: "Is GST payable under RCM on office rent?", a: "Yes, if a registered business rents commercial property from an unregistered landlord, or rents a residential dwelling, the tenant pays GST under RCM." },
      { q: "Do composition dealers pay RCM?", a: "Yes. Composition dealers must pay tax on reverse-charge purchases at the normal rate and cannot claim credit for it." },
    ],
    related: ["input-tax-credit", "gst", "gst-returns"],
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
  },
  {
    slug: "e-way-bill",
    question: "What is an e-way bill?",
    metaDescription: "An e-way bill is an online document needed to move goods worth more than ₹50,000. How to generate one, validity, Rajasthan rules and penalties.",
    term: "E-way bill",
    category: "GST",
    definition:
      "An e-way bill is an electronic document generated on the GST e-way bill portal before goods worth more than ₹50,000 are moved, recording the consignment, the parties and the vehicle.",
    facts: [
      ["Portal", "ewaybillgst.gov.in"],
      ["Threshold", "Consignment value above ₹50,000 (inter-state)"],
      ["Within Rajasthan", "The state notifies its own limit and exemptions; check the current notification"],
      ["Parts", "Part A (invoice and parties), Part B (vehicle)"],
      ["Validity", "1 day per 200 km for normal cargo"],
    ],
    sections: [
      {
        heading: "Generating an e-way bill",
        steps: [
          "Log in to the e-way bill portal with your GSTIN",
          "Fill Part A: invoice details, HSN, value, supplier and recipient GSTINs, distance",
          "Fill Part B: vehicle number, or let the transporter update it",
          "Give the e-way bill number to the driver; it can be shown on a phone",
        ],
        note: "If you generate an e-invoice, the e-way bill can be generated from the IRN without re-entering invoice data.",
      },
      {
        heading: "If goods are stopped without one",
        paras: [
          "Officers can detain the goods and vehicle and levy a penalty under section 129, which can be as high as twice the tax on the goods. Keep the e-way bill and invoice with every consignment.",
        ],
      },
    ],
    mistakes: [
      "Not updating Part B when the vehicle changes mid-route",
      "Letting the e-way bill expire on long trips instead of extending it",
      "Splitting one consignment into several invoices to stay under the limit",
    ],
    faqs: [
      { q: "When is an e-way bill required?", a: "For the movement of goods worth more than ₹50,000 in a consignment, with exemptions for certain goods and short distances. States set their own rules for movement within the state." },
      { q: "How long is an e-way bill valid?", a: "One day for every 200 km for normal cargo, counted from when Part B is first entered." },
      { q: "Who generates the e-way bill?", a: "The supplier, the recipient or the transporter can generate it; usually the supplier does." },
    ],
    related: ["e-invoicing", "hsn-sac-code", "gstin"],
    services: ["gst-return-filing-jodhpur", "gst-registration-jodhpur"],
  },
  {
    slug: "e-invoicing",
    question: "What is e-invoicing under GST?",
    metaDescription: "E-invoicing means reporting B2B invoices to the government IRP to get an IRN and QR code. Who must use it, how it works and what happens without an IRN.",
    term: "E-invoicing",
    category: "GST",
    definition:
      "E-invoicing is the system under which larger businesses report each B2B invoice to the government's Invoice Registration Portal (IRP) and get an Invoice Reference Number (IRN) and QR code before issuing it.",
    facts: [
      ["Mandatory for", "Businesses with aggregate turnover above ₹5 crore in any year since 2017-18"],
      ["Covers", "B2B invoices, credit and debit notes, exports"],
      ["Output", "Invoice Reference Number (IRN) and signed QR code"],
      ["Reporting window", "30 days from invoice date for businesses with turnover of ₹10 crore or more"],
      ["Benefit", "Invoice data flows into GSTR-1 and the e-way bill automatically"],
    ],
    sections: [
      {
        heading: "How it works",
        steps: [
          "Create the invoice in your accounting software (Tally, Zoho and others integrate with the IRP)",
          "Upload it to the IRP, which validates it and returns an IRN and QR code",
          "Print the QR code on the invoice and send it to the buyer",
          "The details auto-populate your GSTR-1 and can generate the e-way bill",
        ],
      },
      {
        heading: "What happens without an IRN",
        paras: [
          "A B2B invoice that should have been e-invoiced but wasn't is not a valid invoice, so your buyer can't claim input tax credit on it, and penalties can apply.",
        ],
      },
    ],
    mistakes: [
      "Crossing ₹5 crore turnover and not switching to e-invoicing from the next year",
      "Reporting invoices after the 30-day window when turnover is ₹10 crore or more",
    ],
    faqs: [
      { q: "Is e-invoicing mandatory for my business?", a: "Yes, if your aggregate turnover exceeded ₹5 crore in any financial year from 2017-18 onwards, for B2B invoices and exports." },
      { q: "Do I need e-invoicing for B2C sales?", a: "No. E-invoicing applies to B2B supplies and exports, not sales to consumers." },
      { q: "What is an IRN?", a: "The Invoice Reference Number, a unique 64-character number the IRP assigns to each registered e-invoice." },
    ],
    related: ["e-way-bill", "gstin", "gst-returns", "hsn-sac-code"],
    services: ["gst-return-filing-jodhpur", "accounting-payroll-jodhpur"],
  },
  {
    slug: "hsn-sac-code",
    question: "What are HSN and SAC codes?",
    term: "HSN and SAC codes",
    category: "GST",
    definition:
      "HSN (Harmonised System of Nomenclature) codes classify goods and SAC (Services Accounting Codes) classify services under GST. The code decides the GST rate and must be shown on invoices.",
    metaTitle: "HSN and SAC Codes: Meaning & GST Rules",
    facts: [
      ["HSN", "For goods; internationally standardised"],
      ["SAC", "For services; starts with 99"],
      ["Digits on invoices", "4 digits if turnover is up to ₹5 crore; 6 digits above ₹5 crore"],
      ["Also needed in", "GSTR-1 HSN summary, e-way bills, e-invoices"],
    ],
    sections: [
      {
        heading: "Why the code matters",
        paras: [
          "The GST rate follows the classification, so a wrong HSN can mean charging the wrong rate. With the 2025 rate rationalisation, many HSN codes moved slabs, so check the current rate for each code you sell.",
        ],
      },
      {
        heading: "Finding the right code",
        steps: [
          "Search by product or service on the GST portal's HSN/SAC search",
          "Use the most specific code that describes what you sell",
          "Keep a master list of codes and rates in your billing software",
        ],
      },
    ],
    mistakes: [
      "Using a generic 2-digit chapter code on invoices",
      "Not updating rates after the September 2025 GST rate changes",
    ],
    faqs: [
      { q: "How many HSN digits do I need on invoices?", a: "4 digits if your aggregate turnover was up to ₹5 crore in the previous year, and 6 digits above ₹5 crore." },
      { q: "What is the difference between HSN and SAC?", a: "HSN codes classify goods; SAC codes classify services and start with 99." },
      { q: "Where do I find the HSN code for my product?", a: "Use the HSN/SAC search on the GST portal, or ask your tax consultant to confirm the classification and current rate." },
    ],
    related: ["gst", "e-invoicing", "e-way-bill"],
    services: ["gst-registration-jodhpur", "gst-return-filing-jodhpur"],
  },
  {
    slug: "letter-of-undertaking",
    question: "What is a letter of undertaking (LUT)?",
    metaDescription: "A letter of undertaking (LUT) lets exporters ship goods or services without paying IGST upfront. How to file Form RFD-11, validity and conditions.",
    term: "Letter of undertaking",
    abbr: "LUT",
    category: "GST",
    definition:
      "A letter of undertaking (LUT) is a declaration filed on the GST portal that lets exporters ship goods or services without paying IGST upfront, and then claim refunds of unused input tax credit.",
    facts: [
      ["Form", "RFD-11 on the GST portal"],
      ["Validity", "One financial year; file a fresh one before each year"],
      ["Who can file", "Registered exporters not prosecuted for tax evasion above ₹2.5 crore"],
      ["Also covers", "Supplies to SEZ units and developers"],
    ],
    sections: [
      {
        heading: "Export with LUT or pay IGST?",
        table: {
          head: ["Route", "Cash flow", "Refund claimed"],
          rows: [
            ["Under LUT", "No IGST paid on exports", "Unused input tax credit"],
            ["IGST paid", "Pay IGST, then get it back", "IGST paid on exports"],
          ],
        },
        paras: [
          "Most exporters, including Jodhpur's handicraft and furniture exporters, use LUT to avoid blocking working capital in IGST.",
        ],
      },
      {
        heading: "Filing an LUT",
        steps: [
          "Log in to gst.gov.in → Services → User Services → Furnish LUT",
          "Select the financial year and confirm the declarations",
          "Sign with DSC or EVC and submit; download the ARN acknowledgement",
          "Quote the LUT reference on export invoices",
        ],
      },
    ],
    mistakes: [
      "Forgetting to renew the LUT for the new financial year",
      "Not receiving export proceeds in time, which can make IGST payable with interest",
    ],
    faqs: [
      { q: "How long is a GST LUT valid?", a: "For the financial year it is filed for. A new LUT must be filed for each year." },
      { q: "Is an LUT needed for exporting services?", a: "Yes, to export services without paying IGST; the same LUT covers goods and services." },
      { q: "Is there a fee to file an LUT?", a: "No. It is filed online on the GST portal free of charge." },
    ],
    related: ["gst-refund", "input-tax-credit", "gst"],
    services: ["gst-refund-assistance-jodhpur", "gst-return-filing-jodhpur"],
  },
  {
    slug: "gst-refund",
    question: "What is a GST refund?",
    term: "GST refund",
    category: "GST",
    definition:
      "A GST refund is the return of excess GST to a business, most often to exporters and to businesses whose input tax rate is higher than their output tax rate (an inverted duty structure).",
    metaDescription:
      "A GST refund returns excess GST to a business, most often exporters and firms with an inverted duty structure. When you can claim it and how RFD-01 works.",
    facts: [
      ["Form", "RFD-01 on the GST portal"],
      ["Time limit", "2 years from the relevant date"],
      ["Decision", "Within 60 days of a complete application"],
      ["Provisional", "90% for zero-rated (export) claims"],
      ["Interest", "Payable by the government if refund is delayed beyond 60 days"],
    ],
    sections: [
      {
        heading: "Types of refund",
        table: {
          head: ["Situation", "What you get back"],
          rows: [
            ["Export under LUT", "Unused input tax credit"],
            ["Export with IGST paid", "The IGST paid (goods: processed via customs shipping bill)"],
            ["Inverted duty structure", "Credit piled up because inputs are taxed higher than outputs"],
            ["Excess cash ledger", "Cash deposited but not used"],
            ["Supplies to SEZ", "Unused credit or IGST paid"],
          ],
        },
      },
      {
        heading: "How a claim goes",
        steps: [
          "File RFD-01 with statements of invoices, shipping bills or BRCs",
          "Get an acknowledgement; respond to any deficiency memo (RFD-03) by refiling",
          "Receive provisional refund (exports) and the final order (RFD-06)",
          "The amount is credited to your registered bank account",
        ],
      },
    ],
    mistakes: [
      "Claiming refund on invoices not appearing in GSTR-2B",
      "Mismatched export values between shipping bills and invoices",
      "Missing the two-year time limit",
    ],
    faqs: [
      { q: "How long does a GST refund take?", a: "The law requires a decision within 60 days of a complete application. Exporters can receive 90% provisionally sooner. Delays usually come from missing documents or deficiency memos." },
      { q: "What is the time limit to claim a GST refund?", a: "Two years from the relevant date, which depends on the type of refund; for exports of goods it runs from the date of export." },
      { q: "Do exporters with IGST paid need to file RFD-01?", a: "Not for goods: the shipping bill is treated as the refund application. Service exporters and LUT exporters file RFD-01." },
    ],
    related: ["letter-of-undertaking", "input-tax-credit", "gst-returns"],
    services: ["gst-refund-assistance-jodhpur", "gst-return-filing-jodhpur"],
  },
];
