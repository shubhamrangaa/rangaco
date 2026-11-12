import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import { itrHref, latestItrYear } from "@/content/itr-years";
import type { Faq } from "@/content/faqs";

const service = getService("itr-filing-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  { q: "Can I file ITR from outside India if I reside in Jodhpur?", a: "Yes—portal is online worldwide; use Indian mobile for OTP." },
  { q: "Do I need a CA to file?", a: "Not legally. However, a CA helps in complex cases (capital gains, foreign assets, presumptive turnover)." },
  { q: "How long should I keep tax records?", a: "Minimum 6 years from the end of the relevant Assessment Year; 10 years if you have foreign assets." },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who Must File an ITR?</a>
      </li>
      <li><a href="#forms">ITR Forms: Which One Applies to You?</a>
      </li>
      <li><a href="#docs">Documents Checklist</a>
      </li>
      <li><a href="#steps">Step-by-Step e-Filing Process</a>
      </li>
      <li><a href="#deadlines">Deadlines, Late Fees & Penalties</a>
      </li>
      <li><a href="#benefits">Benefits of Timely Filing</a>
      </li>
      <li><a href="#post">After Filing: Refunds & Verification</a>
      </li>
      <li><a href="#service-faq">FAQs</a>
      </li>
      </ol>
      </nav>
      <h2 id="who">1. Who Must File an ITR?</h2>
      <p>You <strong>must</strong> file an ITR for a financial year if:</p>
      <ul>
      <li>Your total income <em>before</em> deductions exceeded the <strong>basic exemption limit</strong>: ₹4 lakh under the new regime (from FY 2025-26) or ₹2.5 lakh under the old regime.</li>
      <li>You had <strong>foreign assets/income</strong> or signed as <strong>DSC</strong> for a company.</li>
      <li>Aggregate <strong>TDS/TCS ≥ ₹25,000</strong> (₹50k for senior citizens).</li>
      <li>Your <strong>business turnover exceeded ₹60 lakh</strong> or <strong>professional receipts exceeded ₹10 lakh</strong>.</li>
      </ul>
      <p><strong>Pro tip for Jodhpur freelancers:</strong> Even if income is below threshold, filing an ITR helps while applying for home loans or visas.</p>
      <h2 id="forms">2. ITR Forms: Which One Applies to You?</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>ITR Form</th><th>Who should use it?</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>ITR-1 (Sahaj)</td><td>Salaried / pension + one house property + other income ≤ ₹50 lakh.</td>
      </tr>
      <tr><td>ITR-2</td><td>Capital gains, &gt; ₹50 lakh income, multiple house properties.</td>
      </tr>
      <tr><td>ITR-3</td><td>Business or professional income (proprietorship, consultants).</td>
      </tr>
      <tr><td>ITR-4 (Sugam)</td><td>Presumptive income under Sec 44AD/44ADA/44AE.</td>
      </tr>
      </tbody>
      </table>
      </div>
      <p><em>(ITR-5/6/7 cover firms, companies & trusts and are beyond this article’s scope.)</em>
      </p>
      <h2 id="docs">3. Documents Checklist</h2>
      <ol>
      <li><strong>PAN & Aadhaar</strong> (linked).</li>
      <li><strong>Form 16</strong> / salary slips.</li>
      <li><strong>Bank interest statements</strong> (Form 16A).</li>
      <li><strong>Capital-gains statements</strong> (e.g., Zerodha Console for shares).</li>
      <li><strong>Investment proofs</strong> (80C, 80D, NPS).</li>
      <li><strong>Rent receipts</strong> for HRA.</li>
      <li><strong>Balance sheet & P&L</strong> (for business/consultants).</li>
      <li>Last year’s ITR acknowledgement (for reference).</li>
      </ol>
      <p><strong>Keep PDFs in a dedicated “Tax” folder for the year</strong>—saves time during upload.</p>
      <h2 id="steps">4. Step-by-Step e-Filing Process</h2>
      <h3>Step 1 – Register / Log in</h3>
      <p>Go to <strong>incometax.gov.in</strong> → ’Login’. First-timers click <em>Register</em>, using PAN as user ID.</p>
      <h3>Step 2 – Start New Filing</h3>
      <p>Navigate: <em>e-File → Income Tax Returns → File ITR</em> → the relevant Assessment Year (<em>2026-27</em> for income earned in FY 2025-26) → <em>Online</em>.</p>
      <h3>Step 3 – Select Status & Form</h3>
      <p>Choose <em>Individual</em> / <em>HUF</em> / <em>Company</em>, then pick the ITR form suggested.</p>
      <h3>Step 4 – Pre-fill & Verify Data</h3>
      <p>Most salary details auto-load via AIS/TRACES. Cross-check with Form 16.</p>
      <h3>Step 5 – Claim Deductions</h3>
      <p>Enter Section 80C, 80D, donations (80G), etc. Let the portal recompute tax.</p>
      <h3>Step 6 – Choose Tax Regime</h3>
      <p>Compare tax payable under <em>new</em> and <em>old</em> regime. The portal shows both figures.</p>
      <h3>Step 7 – Pay Tax / Verify Refund</h3>
      <p>If tax payable &gt; prepaid (TDS + advance), generate challan & pay via net-banking. Otherwise, confirm refund.</p>
      <h3>Step 8 – Submit & e-Verify</h3>
      <p>Submit return, then e-verify instantly via Aadhaar OTP/bank account/DSC. <em>Unverified ITRs are invalid after 30 days.</em>
      </p>
      <h2 id="deadlines">5. Deadlines, Late Fees & Penalties</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Who / what</th><th>Usual due date</th><th>Late fee (Sec 234F)</th></tr>
      </thead>
      <tbody>
      <tr><td>No business income (ITR-1, ITR-2)</td><td>31 July</td><td>—</td></tr>
      <tr><td>Non-audit business or profession (ITR-3, ITR-4)</td><td>31 August (from AY 2026-27)</td><td>—</td></tr>
      <tr><td>Tax-audit cases</td><td>31 October</td><td>—</td></tr>
      <tr><td>Belated return</td><td>31 December</td><td>₹1,000 (income up to ₹5 lakh) / ₹5,000</td></tr>
      <tr><td>Updated return (ITR-U)</td><td>Within 48 months</td><td>Additional 25%–70% tax</td></tr>
      </tbody>
      </table>
      </div>
      <p>CBDT often extends these dates. For this year&apos;s exact dates, see our <Link href={itrHref(latestItrYear().year)}>ITR filing {latestItrYear().year} guide</Link>. Interest under <strong>sections 234A/B/C</strong> also applies to late payment.</p>
      <h2 id="benefits">6. Benefits of Timely Filing</h2>
      <ul>
      <li><strong>Avoid penalties</strong> & prosecution.</li>
      <li><strong>Faster refunds</strong>—ITD processes most within 7-14 days.</li>
      <li><strong>Proof of income</strong> for loans, visas, tender bids.</li>
      <li><strong>Carry-forward losses</strong> (capital & business) for up to 8 years.</li>
      </ul>
      <h2 id="post">7. After Filing: Refunds & Verification</h2>
      <ul>
      <li>Track refund on the <strong>ITR dashboard → <em>View Filed Returns</em></strong>.</li>
      <li>If refund is delayed &gt; 30 days, raise a ticket via <em>Grievances</em> or call CPC Bengaluru (toll-free).</li>
      <li>You may receive an <em>intimation u/s 143(1)</em>—don’t panic; it’s an automated summary. Respond only if there’s a mismatch.</li>
      </ul>
      <p>See also: <Link href="/services/income-tax-advisory-jodhpur">Income-Tax Advisory & Planning in Jodhpur</Link>
      </p>
    </ServicePage>
  );
}
