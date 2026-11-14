import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("accounting-payroll-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Which accounting software do you keep books in?",
    a: "Tally, Zoho Books or QuickBooks. We can keep your books in whichever you already use, so your history stays in one place.",
  },
  {
    q: "How much does outsourced bookkeeping cost in Jodhpur?",
    a: `${service.price} at Ranga & Company, for sales, purchase and bank entries, monthly GST and TDS reconciliation, and year-end financial statements. The plan depends on how many vouchers you post each month.`,
  },
  {
    q: "What are the monthly payroll deadlines for a Jodhpur employer?",
    a: "TDS on salaries must be deposited by the 7th of the following month, and PF and ESI contributions by the 15th. Salary TDS is reported quarterly, and Form 16 is due by 15 June. Rajasthan levies no professional tax.",
  },
  {
    q: "Is GST and TDS reconciliation part of the bookkeeping?",
    a: "Yes. Every month we match the GST in your books with your returns and GSTR-2B, and the TDS in your books with the challans paid, so differences are fixed before they reach a return or an audit.",
  },
  {
    q: "Why reconcile the bank account every month?",
    a: "Because unreconciled entries hide missed sales, duplicate payments and bank charges. Left alone, they surface at year-end, just when the income tax return or audit is due.",
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who this is for</a></li>
      <li><a href="#included">What&apos;s included</a></li>
      <li><a href="#steps">How a month runs</a></li>
      <li><a href="#docs">What we need from you</a></li>
      <li><a href="#dates">Monthly and yearly deadlines</a></li>
      <li><a href="#fees">Fees and software</a></li>
      <li><a href="#mistakes">Common mistakes</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who this is for</h2>
      <ul>
      <li><strong>Proprietors and partnership firms</strong> that have outgrown a diary and a bank statement, or that maintain regular books instead of declaring <Link href="/glossary/presumptive-taxation">presumptive income</Link>.</li>
      <li><strong>LLPs and private companies</strong>, which must keep books that will stand up to a <Link href="/glossary/statutory-audit">statutory audit</Link>.</li>
      <li><strong>Employers</strong> who need payslips, PF and ESI handled every month without hiring an in-house accountant.</li>
      <li><strong>GST-registered businesses</strong> that want the books and the returns to agree.</li>
      </ul>

      <h2 id="included">2. What&apos;s included</h2>
      <p><strong>Bookkeeping</strong></p>
      <ul>
      <li>Sales, purchase, expense and bank entries in Tally, Zoho Books or QuickBooks.</li>
      <li>Monthly GST reconciliation against <Link href="/glossary/gstr-2b">GSTR-2B</Link>, and TDS reconciliation against challans.</li>
      <li>Year-end financial statements, ready for your income tax return or audit.</li>
      </ul>
      <p><strong>Payroll</strong></p>
      <ul>
      <li>Salary calculation and payslips for every employee, on time.</li>
      <li>PF and ESI returns filed before the due dates.</li>
      </ul>
      <p>Monthly MIS, budgets and cash-flow forecasts are part of our <Link href="/services/virtual-cfo-jodhpur">virtual CFO service</Link>, not the bookkeeping plan.</p>

      <h2 id="steps">3. How a month runs</h2>
      <ol>
      <li><strong>Set-up, once.</strong> We take opening balances from your last balance sheet, set up the chart of accounts and agree how you&apos;ll send documents.</li>
      <li><strong>You send the month&apos;s papers</strong>: bills, invoices and bank statements, on WhatsApp or email.</li>
      <li><strong>Entries.</strong> Every voucher is posted to the right ledger with its GST and TDS.</li>
      <li><strong>Reconciliation.</strong> Bank, GST and TDS are matched, and open items are listed for you.</li>
      <li><strong>Payroll.</strong> Attendance in, gross pay, PF, ESI and TDS deductions out, payslips issued.</li>
      <li><strong>Year-end.</strong> Closing entries and depreciation, then financial statements for your <Link href="/services/itr-filing-jodhpur">ITR</Link> or auditor.</li>
      </ol>

      <h2 id="docs">4. What we need from you</h2>
      <ul>
      <li>Last year&apos;s balance sheet and income tax return.</li>
      <li>Bank statements for every business account.</li>
      <li>Sales invoices, purchase bills and expense bills.</li>
      <li>Loan statements and details of any assets bought.</li>
      <li>For payroll: each employee&apos;s PAN, Aadhaar, UAN, bank details, salary structure and monthly attendance.</li>
      </ul>

      <h2 id="dates">5. Monthly and yearly deadlines</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>When</th><th>What is due</th></tr>
      </thead>
      <tbody>
      <tr><td>7th</td><td>TDS deposit for last month (March: 30 April)</td></tr>
      <tr><td>11th / 20th</td><td>GSTR-1 / GSTR-3B for monthly filers</td></tr>
      <tr><td>15th</td><td>PF and ESI contributions</td></tr>
      <tr><td>Quarterly</td><td>TDS returns, including salary TDS</td></tr>
      <tr><td>15 June</td><td><Link href="/glossary/form-16">Form 16</Link> to employees</td></tr>
      </tbody>
      </table>
      </div>
      <p>Payroll rules for FY 2026-27, per the <Link href="/glossary/payroll">payroll</Link> glossary entry: EPF applies to establishments with 20 or more employees at 12% of basic wages from each side; ESI covers employees earning up to ₹21,000 a month at 0.75% (employee) and 3.25% (employer). Rajasthan does not levy professional tax.</p>

      <h2 id="fees">6. Fees and software</h2>
      <p>Plans are priced <strong>{service.price.toLowerCase()}</strong>.</p>
      <ul>{service.priceNotes?.map((t) => <li key={t}>{t}</li>)}</ul>

      <h2 id="mistakes">7. Common mistakes</h2>
      <ul>
      <li>Running personal and business spending through the same account.</li>
      <li>Claiming <Link href="/glossary/input-tax-credit">input tax credit</Link> from the books when the invoice isn&apos;t in GSTR-2B.</li>
      <li>Paying a supplier with <Link href="/glossary/udyam-registration">Udyam registration</Link> after 45 days, which defers the expense deduction to the year you pay.</li>
      <li>Depositing PF or ESI late, which brings interest and damages.</li>
      <li>Leaving the year&apos;s entries to March, so errors surface only when the return is due.</li>
      </ul>
      <p>Choosing between regular books and presumptive tax? Our <Link href="/blog/small-business-itr-jodhpur">small-business ITR guide</Link> compares the two.</p>
    </ServicePage>
  );
}
