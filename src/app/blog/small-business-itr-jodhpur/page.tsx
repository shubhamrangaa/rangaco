import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/small-business-itr-jodhpur");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "who", label: "Who this guide is for" },
  { id: "decision", label: "Quick decision: regular vs presumptive" },
  { id: "limits", label: "Eligibility & limits (44AD/44ADA)" },
  { id: "forms", label: "Pick the right ITR form (ITR-3 vs ITR-4)" },
  { id: "steps", label: "Step-by-step filing flow for Jodhpur businesses" },
  { id: "audit", label: "Audit triggers you must know (44AB)" },
  { id: "examples", label: "Two real-world Jodhpur examples" },
  { id: "deadlines", label: "Deadlines, late fees & e-verification" },
  { id: "docs", label: "Documents checklist" },
  { id: "mistakes", label: "Common mistakes we fix a lot" },
];

const FAQS: Faq[] = [
  { q: "Q. Where is the Income-Tax Office in Jodhpur?", a: "Aayakar Bhawan, Paota C Road, Jodhpur – 342010. (Commonly referred to as \"Lal Maidan, Paota C Road\".)" },
  { q: "Q. I have an Amazon storefront and a small outlet. Can I use 44AD?", a: "Yes, if combined turnover meets 44AD limits/conditions (including the 95% digital rule for the ₹3 crore cap)." },
  { q: "Q. Can I claim depreciation under presumptive?", a: "Depreciation is deemed allowed in presumptive income (no separate claim). Chapter VI-A deductions (80C/80D/80G etc.) can still apply." },
  { q: "Q. Do I need GST to file ITR?", a: "No. ITR is income-tax; GST is separate. If registered, ensure ITR ↔ GST figures are consistent." },
  { q: "Q. How long should I keep records?", a: "Keep ITR + key proofs for at least 6 years (longer if foreign assets/complex matters). This aligns with typical reassessment windows." },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} faqs={FAQS}>
      <hr />
      <h2 id="who">1. Who this guide is for</h2>
      <ul>
      <li><strong>Marble/stone, textiles, handicrafts</strong> traders; kirana & retail; cafés; D2C/e-commerce sellers</li>
      <li><strong>Service providers</strong>: salons, repair shops, photographers, caterers, small agencies</li>
      <li><strong>Professionals</strong>: architects, doctors, designers, developers operating as individuals/HUFs</li>
      </ul>
      <p>If you’re a freelancer/consultant: also see <strong>ITR for Freelancers – Jodhpur</strong>.</p>
      <h2 id="decision">2. Quick decision: regular vs presumptive</h2>
      <p><strong>Regular (books of account)</strong>
      </p>
      <ul>
      <li>Maintain books, claim <strong>actual expenses/depreciation</strong>, and compute net profit.</li>
      <li>File <strong>ITR-3</strong>. Good when margins are thin or you need precise reporting (bank/VC).</li>
      </ul>
      <p><strong>Presumptive (no detailed books)</strong>
      </p>
      <ul>
      <li>Declare a <strong>fixed % of turnover/receipts</strong> as income; books generally not required.</li>
      <li>Businesses: <strong>44AD</strong> (6% digital / 8% cash turnover). Professionals: <strong>44ADA</strong> (50% of gross receipts). File <strong>ITR-4 (Sugam)</strong> if eligible.</li>
      </ul>
      <p><em>Rule of thumb:</em> If your true margin is <strong>≤ the presumptive %</strong>, presumptive often wins on time, audit relief, and predictability.</p>
      <h2 id="limits">3. Eligibility & limits (44AD/44ADA)</h2>
      <ul>
      <li><strong>44AD (businesses)</strong>: Eligible up to <strong>₹3 crore</strong> if cash receipts ≤5% (i.e., ≥95% digital); otherwise standard cap <strong>₹2 crore</strong>.</li>
      <li><strong>44ADA (professionals)</strong>: Receipts up to <strong>₹75 lakh</strong> if cash receipts ≤5%; otherwise <strong>₹50 lakh</strong>.</li>
      <li><strong>44AE</strong>: Transporters owning ≤10 goods carriages (different presumptive rules).</li>
      </ul>
      <p><strong>Five-year caution (44AD):</strong> If you use 44AD and later don’t declare presumptive profit in a subsequent year (and taxable income exceeds the basic exemption), you may <strong>lose 44AD for the next 5 AYs</strong> and may need <strong>books + audit</strong>. Plan your switch carefully.</p>
      <h2 id="forms">4. Pick the right ITR form (ITR-3 vs ITR-4)</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Situation</th><th>Use this form</th><th>Why</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>Business under presumptive 44AD/44AE</td><td><strong>ITR-4 (Sugam)</strong></td><td>Simple presumptive schedules</td>
      </tr>
      <tr><td>Profession under 44ADA</td><td><strong>ITR-4 (Sugam)</strong></td><td>50% deemed income schema</td>
      </tr>
      <tr><td>Regular books (any business/profession)</td><td><strong>ITR-3</strong></td><td>Full P&L, BS, depreciation</td>
      </tr>
      <tr><td>Ineligible for presumptive (limits/conditions)</td><td><strong>ITR-3</strong></td><td>Avoid defective return</td>
      </tr>
      </tbody>
      </table>
      </div>
      <p><em>Also note key ITR-4 ineligibilities (e.g., total income &gt; ₹50L, &gt;1 house property, certain capital gains, etc.).</em>
      </p>
      <h2 id="steps">5. Step-by-step filing flow for Jodhpur businesses</h2>
      <h3>Step 1 – Choose scheme & form</h3>
      <p>Decide regular vs presumptive; pick <strong>ITR-3</strong> or <strong>ITR-4</strong>.</p>
      <h3>Step 2 – Collect documents</h3>
      <p>Bank statements; UPI/POS & payment-gateway reports; sales/purchase registers; expense proofs; <strong>GST returns</strong> if registered; Form 26AS/AIS.</p>
      <h3>Step 3 – Login to portal</h3>
      <p>Go to <strong>incometax.gov.in</strong> → e-File → Income Tax Returns → File ITR (AY <strong>2025–26</strong>).</p>
      <h3>Step 4 – Prefill & verify</h3>
      <p>Reconcile <strong>AIS/26AS</strong> with your books/gateway; fix mismatches before compute.</p>
      <h3>Step 5 – Enter income</h3>
      <p><strong>Presumptive:</strong> report turnover/receipts; system computes deemed income (6%/8% for 44AD; 50% for 44ADA).<br /><strong>Regular:</strong> enter P&L, depreciation, interest, add-backs.</p>
      <h3>Step 6 – Claim deductions</h3>
      <p>80C/80D/80CCD(1B)/80G, etc.</p>
      <h3>Step 7 – Compute tax & pay challan</h3>
      <p>Compare <strong>old vs new regime</strong>; pick lower tax. Pay challan if tax payable &gt; prepaid.</p>
      <h3>Step 8 – Submit & e-verify</h3>
      <p>Submit return, then e-verify within <strong>30 days</strong> (Aadhaar OTP / bank EVC / DSC) or return becomes invalid.</p>
      <h3>Step 9 – Save documents</h3>
      <p>Save ITR-V & acknowledgment → keep with FY file.</p>
      <h2 id="audit">6. Audit triggers you must know (44AB)</h2>
      <ul>
      <li><strong>Standard audit</strong>: Business turnover &gt; <strong>₹1 crore</strong> (professionals &gt; <strong>₹50 lakh</strong>).</li>
      <li><strong>Higher ₹10 crore threshold</strong> if cash receipts AND cash payments ≤5% (≥95% digital) — a big relief for digital-first traders.</li>
      <li><strong>Presumptive users</strong> declaring below 6%/8% (44AD) or 50% (44ADA) with taxable income above basic exemption must maintain books + audit.</li>
      </ul>
      <p><strong>Takeaway:</strong> If you’re mostly digital and under the presumptive caps, you can often avoid audit entirely.</p>
      <h2 id="examples">7. Real-world Jodhpur examples</h2>
      <h3>A) Sojati Gate marble trader (Business – considering 44AD)</h3>
      <ul>
      <li>FY turnover: <strong>₹1.90 crore</strong>; <strong>98% digital</strong> (POS/NEFT/UPI)</li>
      <li>Rough books show margin ~<strong>7%</strong>
      </li>
      <li><strong>If 44AD</strong> → deemed income <strong>6%</strong> of digital = <strong>₹11.4 lakh</strong>
      </li>
      <li><strong>If regular</strong> → report ~<strong>₹13.3 lakh</strong> (with books, potential audit tests still apply)</li>
      </ul>
      <p><strong>Outcome:</strong> 44AD keeps compliance light and reduces tax base; trader chooses presumptive.</p>
      <h3>B) Clock Tower design studio (Professional – 44ADA)</h3>
      <ul>
      <li>Gross receipts: <strong>₹58 lakh</strong>; <strong>96% digital</strong> → under <strong>₹75 lakh</strong> cap with 95% digital condition</li>
      <li><strong>44ADA</strong> → declare <strong>50%</strong> of ₹58L = <strong>₹29L</strong>; no detailed books</li>
      <li>Regular route could land near ₹24–26L after expenses but needs full books and may trip audit depending on thresholds.</li>
      </ul>
      <p><strong>Outcome:</strong> Consistency + simplicity valued → <strong>44ADA</strong> chosen, with a light internal expense log for discipline. </p>
      <h2 id="deadlines">8. Deadlines, late fees & e-verification (AY 2025–26)</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Task</th><th>Date (AY 2025-26)</th><th>Late fee (Sec 234F)</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>ITR due date (non-audit cases)</td><td>15 September 2025</td><td>—</td>
      </tr>
      <tr><td>Belated/Revised return</td><td>31 December 2025</td><td>₹1,000 (≤ ₹5L income) / ₹5,000 (&gt; ₹5L)</td>
      </tr>
      <tr><td>ITR-U (Updated Return)</td><td>Within 48 months</td><td>Additional 25%–50% tax</td>
      </tr>
      <tr><td>E-verification</td><td>Within 30 days</td><td>Return becomes invalid</td>
      </tr>
      </tbody>
      </table>
      </div>
      <p><strong>Pro tip:</strong> On presumptive, pay <strong>advance tax</strong> in time (100% by 15 March for 44ADA users) to avoid 234B/C interest.</p>
      <h2 id="docs">9. Documents checklist</h2>
      <h3>Business documents</h3>
      <p>Bank statements; UPI/POS & payment-gateway settlements; sales/purchase registers; expense bills; loan statements; <strong>GSTR-1/3B</strong>.</p>
      <h3>Professional documents</h3>
      <p>Invoices; receipts; TDS certificates (16A/26Q); rent agreement; expense proofs.</p>
      <h3>Common documents</h3>
      <p>PAN & Aadhaar (linked); previous ITR; <strong>Form 26AS</strong> & <strong>AIS</strong>; deduction proofs (80C/80D/80CCD(1B)/80G); HRA rent receipts.</p>
      <p>Download PDF → <strong>Small-Business ITR Docs – Jodhpur (2025)</strong>
      
      </p>
      <h2 id="mistakes">10. Common mistakes we fix a lot</h2>
      <ol>
      <li><strong>Picking ITR-4 when ineligible</strong> (limits breached / multiple house properties / complex capital gains).</li>
      <li><strong>Reporting &lt;6%/8% (44AD) or &lt;50% (44ADA)</strong> with taxable income but skipping audit/books.</li>
      <li><strong>Ignoring AIS/26AS mismatches</strong> → adjustments/notices.</li>
      <li><strong>Claiming personal spends as business</strong> (mobile/fuel/travel) with no policy → disallowances.</li>
      <li><strong>Switching in/out of 44AD casually</strong> → 5-year restriction can block presumptive later.</li>
      <li><strong>Not e-verifying within 30 days</strong> → return becomes <strong>invalid</strong>.</li>
      </ol>
      <p>Need help with mismatches? See <strong>Fix AIS/26AS Mismatches (Jodhpur)</strong>
      .</p>
      <h2 id="cta">11. Next step & local help</h2>
      <p><strong>Want a 20-minute eligibility check (free)?</strong>
      </p>
      <p>We’ll confirm if <strong>44AD/44ADA</strong> fits you, estimate tax under <strong>old vs new regime</strong>, and file your ITR end-to-end.</p>
      <h3>References</h3>
      <ul>
      <li>CBDT extended AY 2025–26 due date to 15 Sep 2025 (Circular 06/2025; PIB).</li>
      <li>ITR-4 FAQs (official portal): 44AD ₹3 cr (≤5% cash), 44ADA ₹75L (≤5% cash), due date & rules.</li>
      <li>Tax audit threshold ₹10 cr when cash receipts/payments ≤5%.</li>
      <li>E-verification window 30 days.</li>
      <li>ITR-U window 48 months (latest coverage).</li>
      <li>Late fee u/s 234F ₹1,000/₹5,000.</li>
      </ul>
    </ArticleLayout>
  );
}
