import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("statutory-audit-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Who signs the audit report when I work with Ranga & Company?",
    a: "Our partner CA firm. Ranga & Company is a tax consultancy, so we prepare your books, schedules and audit file, and a practising chartered accountant from the partner firm conducts the audit and signs the report with a UDIN.",
  },
  {
    q: "Can the same CA do both the statutory audit and the tax audit?",
    a: "Yes. A company's statutory auditor can also do its tax audit under section 44AB. Doing both together is common, because the tax audit report relies on the audited financial statements.",
  },
  {
    q: "When must a company hold its AGM and file audited accounts?",
    a: "Within six months of the financial year end, so by 30 September for a 31 March year-end; the first AGM can be held within nine months. The audited financial statements are then filed with the Registrar of Companies in Form AOC-4 within 30 days of the AGM.",
  },
  {
    q: "Do I need a tax audit if I file under presumptive taxation?",
    a: "Usually not. Under section 44AD, a tax audit applies only if you declare profit below 8% (6% for digital receipts) while your income exceeds the basic exemption limit, or if you leave the scheme during its five-year lock-in.",
  },
  {
    q: "What is CARO and does it apply to my company?",
    a: "CARO 2020 is the Companies (Auditor's Report) Order, which adds specific checks on assets, loans, stock and statutory dues to the audit report. It does not apply to one-person companies, small companies, or private companies that are not a holding or subsidiary of a public company and have capital and reserves of up to ₹1 crore, bank borrowings of up to ₹1 crore and revenue of up to ₹10 crore.",
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">When an audit is mandatory</a></li>
      <li><a href="#roles">What we do, and who signs</a></li>
      <li><a href="#steps">How the audit runs</a></li>
      <li><a href="#docs">Documents for the audit file</a></li>
      <li><a href="#dates">Due dates</a></li>
      <li><a href="#fees">Audit fee range</a></li>
      <li><a href="#mistakes">What delays an audit</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. When an audit is mandatory</h2>
      <ul>
      <li><strong>Companies:</strong> under the <strong>Companies Act, 2013</strong>, every company must have its accounts audited every year, whatever its size or profit. See <Link href="/glossary/statutory-audit">what a statutory audit is</Link>.</li>
      <li><strong>LLPs:</strong> once turnover exceeds <strong>₹40 lakh</strong> or partners&apos; contribution exceeds <strong>₹25 lakh</strong> in a financial year.</li>
      <li><strong>Businesses and professionals:</strong> a <Link href="/glossary/tax-audit">tax audit</Link> under section 44AB of the 1961 Act applies for FY 2025-26 when business turnover exceeds ₹1 crore (₹10 crore if cash receipts and payments are each within 5%), or professional receipts exceed ₹50 lakh (₹75 lakh if cash receipts are within 5%).</li>
      </ul>
      <p>A proprietor or firm can need a tax audit without any statutory audit, and a company usually needs both. Traders deciding between regular books and <Link href="/glossary/presumptive-taxation">presumptive taxation</Link> should read our <Link href="/blog/small-business-itr-jodhpur">small-business ITR guide</Link> first.</p>

      <h2 id="roles">2. What we do, and who signs</h2>
      <p>Ranga & Company is a tax consultancy, not a CA firm. We prepare your books, schedules and audit file; the audit itself is conducted, and the report signed, by our partner CA firm.</p>
      <ul>
      <li><strong>Our part:</strong> closing the books, reconciliations, schedules, the fixed asset register and answers to the auditor&apos;s queries.</li>
      <li><strong>The partner CA firm&apos;s part:</strong> planning the audit, testing, the audit opinion, the CARO report where it applies, the tax audit report in Forms 3CA/3CB and 3CD, and the <Link href="/glossary/udin">UDIN</Link> on every signed document.</li>
      </ul>
      <p>Only a <Link href="/glossary/chartered-accountant">practising chartered accountant</Link> can sign an audit report. Checking who will sign is the first step in our guide to <Link href="/blog/top-ca-firms-in-jodhpur">choosing a CA firm in Jodhpur</Link>.</p>

      <h2 id="steps">3. How the audit runs</h2>
      <ol>
      <li><strong>Scoping.</strong> Which audits apply, the reporting deadlines and the fee.</li>
      <li><strong>Book closure.</strong> Ledgers finalised; bank, GST and TDS reconciled; depreciation and closing stock booked.</li>
      <li><strong>Planning and risk assessment</strong> by the auditor, using the trial balance and last year&apos;s file.</li>
      <li><strong>Field work.</strong> Ledger testing, vouching, confirmations and stock verification.</li>
      <li><strong>Reporting.</strong> The audit report, with the CARO checklist where applicable and a management letter on weaknesses found.</li>
      <li><strong>Filing.</strong> The tax audit report is uploaded on the income tax portal before the ITR; a company files its audited accounts with the ROC after the AGM.</li>
      </ol>

      <h2 id="docs">4. Documents for the audit file</h2>
      <ul>
      <li>Trial balance, ledgers and last year&apos;s audited accounts.</li>
      <li>Bank statements and bank reconciliations for every account.</li>
      <li>Fixed asset register with purchase bills for additions.</li>
      <li>Closing stock statement and the valuation method used.</li>
      <li>Balance confirmations from major debtors, creditors and lenders.</li>
      <li>GST returns including GSTR-9, and TDS returns with Form 26AS.</li>
      <li>A list of related parties and of suppliers registered as micro or small enterprises.</li>
      <li>For companies: minutes, statutory registers and board resolutions.</li>
      </ul>

      <h2 id="dates">5. Due dates</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>What</th><th>Due</th></tr>
      </thead>
      <tbody>
      <tr><td>Company AGM (31 March year-end)</td><td>30 September</td></tr>
      <tr><td>Company accounts to ROC (AOC-4)</td><td>Within 30 days of the AGM</td></tr>
      <tr><td>LLP statement of accounts (Form 8)</td><td>30 October</td></tr>
      <tr><td>Tax audit report, FY 2025-26</td><td>21 October 2026 (extended from 30 September)</td></tr>
      <tr><td>ITR for audit cases, FY 2025-26</td><td>21 November 2026</td></tr>
      </tbody>
      </table>
      </div>
      <p>Missing a required tax audit costs 0.5% of turnover, up to ₹1.5 lakh, under section 271B.</p>

      <h2 id="fees">6. Audit fee range</h2>
      <p>Audit support is priced <strong>{service.price.toLowerCase()}</strong>.</p>
      <ul>{service.priceNotes?.map((t) => <li key={t}>{t}</li>)}</ul>

      <h2 id="mistakes">7. What delays an audit</h2>
      <ul>
      <li>Small private companies assuming they don&apos;t need an audit until the ROC deadline is close.</li>
      <li>Books still incomplete when the auditor arrives.</li>
      <li>No stock records, so closing stock can&apos;t be verified.</li>
      <li>Missing the cash-receipts test that raises the tax audit limit to ₹10 crore.</li>
      <li>Not tracking payments to micro and small suppliers beyond 45 days, which the tax audit report must disclose.</li>
      <li>Filing the ITR before the tax audit report is uploaded and accepted.</li>
      </ul>
    </ServicePage>
  );
}
