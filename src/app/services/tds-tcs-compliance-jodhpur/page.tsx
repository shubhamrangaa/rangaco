import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("tds-tcs-compliance-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Does a small business in Jodhpur need a TAN?",
    a: "Yes, if it has to deduct or collect tax at source. Firms and companies paying rent, contractors or professionals above the thresholds need one, as does any employer deducting TDS on salary. Individuals and HUFs generally deduct on business payments only if their accounts were tax-audited in the previous year.",
  },
  {
    q: "What is the late fee for a TDS return?",
    a: "₹200 for every day of delay under section 234E, up to the total TDS in the return. Interest on late deposits is charged separately, so filing on time matters even when the tax is already paid.",
  },
  {
    q: "Can a TDS return be corrected after filing?",
    a: "Yes. A correction statement can be filed on TRACES to fix a wrong PAN, amount, section or challan detail. We handle corrections; they are billed separately from the quarterly package.",
  },
  {
    q: "Is TCS still collected on the sale of goods?",
    a: "No. TCS on the sale of goods under section 206C(1H) was withdrawn from 1 April 2025. TCS still applies to items such as scrap, motor vehicles above ₹10 lakh and foreign remittances.",
  },
  {
    q: "Do I need to deduct TDS on office rent?",
    a: "Yes, if you are required to deduct TDS and the rent crosses the threshold, which is ₹50,000 a month from FY 2025-26. Rent for land or a building attracts 10% TDS under section 194-I of the 1961 Act, deposited by the 7th of the next month.",
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who has to deduct or collect tax</a></li>
      <li><a href="#included">What&apos;s included</a></li>
      <li><a href="#steps">The monthly and quarterly cycle</a></li>
      <li><a href="#docs">What we need from you</a></li>
      <li><a href="#dates">Due dates and penalties</a></li>
      <li><a href="#fees">Fees</a></li>
      <li><a href="#mistakes">Common mistakes</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who has to deduct or collect tax at source</h2>
      <ul>
      <li><strong>Employers</strong> deducting <Link href="/glossary/tds">TDS</Link> on salary and issuing <Link href="/glossary/form-16">Form 16</Link>. Our <Link href="/services/accounting-payroll-jodhpur">payroll service</Link> runs the salary side.</li>
      <li><strong>Firms, LLPs and companies</strong> paying rent, contractors, professional fees, commission or interest above the thresholds.</li>
      <li><strong>Proprietors and HUFs</strong> whose accounts were tax-audited in the previous year, for the same business payments.</li>
      <li><strong>Sellers collecting <Link href="/glossary/tcs">TCS</Link></strong>, for example on scrap or on motor vehicles priced above ₹10 lakh.</li>
      </ul>
      <p>Each of them needs a <Link href="/glossary/tan">TAN</Link>. Buying a property worth ₹50 lakh or more works differently: the buyer deducts 1% using their PAN, explained in <Link href="/glossary/tds-on-property">TDS on property purchases</Link>.</p>
      <p><strong>The new Act:</strong> deductions made from 1 April 2026 fall under the <Link href="/blog/income-tax-act-2025-changes">Income-tax Act, 2025</Link>, which groups TDS provisions into tables with new section references. Deposits, quarterly statements and certificates work the same way. This page uses the familiar 1961 Act section numbers, which most invoices and contracts still quote.</p>

      <h2 id="included">2. What&apos;s included</h2>
      <ul>
      <li>TAN application, if you don&apos;t have one, and PAN validation of every deductee.</li>
      <li>Working out the right section and rate for each payment.</li>
      <li>Accurate challan creation (ITNS 281) for monthly deposits.</li>
      <li>Quarterly TDS and TCS statements, prepared, validated and filed.</li>
      <li>Form 16 and 16A generated from TRACES and sent to employees and vendors.</li>
      </ul>
      <p><strong>Not included in the quarterly package:</strong> correction statements for errors found later, which are billed separately.</p>

      <h2 id="steps">3. The monthly and quarterly cycle</h2>
      <ol>
      <li><strong>Onboarding.</strong> We check your TAN and TRACES registration and validate the PAN of each regular vendor and employee.</li>
      <li><strong>Every month.</strong> You send the month&apos;s payments: salary sheet, rent, contractor and professional bills. We compute TDS and send you the challan.</li>
      <li><strong>By the 7th.</strong> You pay the challan; we record it against the right deductees.</li>
      <li><strong>Every quarter.</strong> We prepare the statements (24Q for salary, 26Q for other resident payments, 27Q for non-residents, 27EQ for TCS), validate them and file before the due date.</li>
      <li><strong>Certificates.</strong> Form 16A is downloaded from TRACES and shared after each quarter; Form 16 after the year.</li>
      <li><strong>Defaults.</strong> We check TRACES for short-payment or PAN errors and fix them with a correction statement.</li>
      </ol>

      <h2 id="docs">4. What we need from you</h2>
      <ul>
      <li>TAN and previous TDS returns, if you have filed before.</li>
      <li>A vendor list with PANs, and any lower-deduction certificates vendors have given you.</li>
      <li>Monthly ledgers or bills for rent, contractors, professional fees, commission and interest.</li>
      <li>The salary register and employees&apos; investment declarations, for salary TDS.</li>
      <li>Challans already paid this year.</li>
      <li>For TCS: sales invoices on which tax was collected, with buyer PANs.</li>
      </ul>

      <h2 id="dates">5. Due dates and penalties</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>What</th><th>Due date</th></tr>
      </thead>
      <tbody>
      <tr><td>Monthly deposit</td><td>7th of the next month (30 April for March)</td></tr>
      <tr><td>Q1 (Apr–Jun) statement</td><td>31 July</td></tr>
      <tr><td>Q2 (Jul–Sep) statement</td><td>31 October</td></tr>
      <tr><td>Q3 (Oct–Dec) statement</td><td>31 January</td></tr>
      <tr><td>Q4 (Jan–Mar) statement</td><td>31 May</td></tr>
      <tr><td>Form 16 to employees</td><td>15 June</td></tr>
      </tbody>
      </table>
      </div>
      <p>These are the standard dates for FY 2026-27; CBDT can extend them. Late deposit costs <strong>1.5% a month</strong> interest from the date of deduction, a late statement costs <strong>₹200 a day</strong> under section 234E, and a payee without a valid PAN faces TDS of generally 20%.</p>

      <h2 id="fees">6. Fees</h2>
      <p>Packages are priced <strong>{service.price.toLowerCase()}</strong>.</p>
      <ul>{service.priceNotes?.map((t) => <li key={t}>{t}</li>)}</ul>

      <h2 id="mistakes">7. Common mistakes</h2>
      <ul>
      <li>Deducting under the wrong section, for example 194C instead of 194J for professional fees.</li>
      <li>Quoting a wrong deductee PAN, so the credit never reaches their <Link href="/glossary/form-26as">Form 26AS</Link>.</li>
      <li>Depositing on time but filing the quarterly statement late.</li>
      <li>Not deducting at all: 30% of the expense can then be disallowed in your own income tax return.</li>
      <li>Still collecting TCS on sales of goods under the withdrawn section 206C(1H).</li>
      <li>Leaving old section codes in Tally or Zoho Books after April 2026.</li>
      </ul>
    </ServicePage>
  );
}
