import type { Metadata } from "next";
import BlogTemplate from "@/components/BlogTemplate";

export const metadata: Metadata = {
  title:
    "Small-Business ITR Filing in Jodhpur | Presumptive 44AD/44ADA (AY 2025–26)",
  description:
    "Step-by-step ITR filing for Jodhpur traders & SMEs. Choose regular books vs presumptive 44AD/44ADA, see audit triggers (44AB), ITR-3 vs ITR-4, deadlines, documents, and common mistakes. Updated & verified for AY 2025–26.",
  alternates: {
    canonical: "/small-business-itr-jodhpur",
  },
  openGraph: {
    title:
      "Small-Business ITR Filing in Jodhpur | Presumptive 44AD/44ADA (AY 2025–26)",
    description:
      "A beginner-friendly, CA-approved guide to file your business ITR in Jodhpur. Presumptive 44AD/44ADA, audit triggers, ITR-3 vs ITR-4, deadlines & more.",
    url: "https://www.rangaco.com/small-business-itr-jodhpur",
    type: "article",
    images: [
      {
        url: "/og/small-business-itr-jodhpur.jpg",
        width: 1200,
        height: 630,
        alt: "Small-Business ITR Filing in Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Small-Business ITR Filing in Jodhpur | Presumptive 44AD/44ADA (AY 2025–26)",
    description:
      "A beginner-friendly, CA-approved guide to file your business ITR in Jodhpur. Presumptive 44AD/44ADA, audit triggers, ITR-3 vs ITR-4, deadlines & more.",
    images: ["/og/small-business-itr-jodhpur.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentHtml = `

<hr />

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
  <h2 class="text-xl font-semibold text-blue-500 mb-2">Table of Contents</h2>
  <ol class="list-decimal list-inside space-y-1 text-blue-700">
    <li><a href="#who" class="hover:underline">Who this guide is for</a></li>
    <li><a href="#decision" class="hover:underline">Quick decision: regular vs presumptive</a></li>
    <li><a href="#limits" class="hover:underline">Eligibility & limits (44AD/44ADA)</a></li>
    <li><a href="#forms" class="hover:underline">Pick the right ITR form (ITR-3 vs ITR-4)</a></li>
    <li><a href="#steps" class="hover:underline">Step-by-step filing flow for Jodhpur businesses</a></li>
    <li><a href="#audit" class="hover:underline">Audit triggers you must know (44AB)</a></li>
    <li><a href="#examples" class="hover:underline">Two real-world Jodhpur examples</a></li>
    <li><a href="#deadlines" class="hover:underline">Deadlines, late fees & e-verification</a></li>
    <li><a href="#docs" class="hover:underline">Documents checklist (downloadable)</a></li>
    <li><a href="#mistakes" class="hover:underline">Common mistakes we fix a lot</a></li>
    <li><a href="#faqs" class="hover:underline">FAQs (Jodhpur edition)</a></li>
    <li><a href="#cta" class="hover:underline">Next step & local help</a></li>
  </ol>
</div>

<h2 id="who" class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Who this guide is for</h2>
<ul class="list-disc list-inside space-y-2 mb-6">
  <li><strong>Marble/stone, textiles, handicrafts</strong> traders; kirana & retail; cafés; D2C/e-commerce sellers</li>
  <li><strong>Service providers</strong>: salons, repair shops, photographers, caterers, small agencies</li>
  <li><strong>Professionals</strong>: architects, doctors, designers, developers operating as individuals/HUFs</li>
</ul>
<p class="mb-4">If you're a freelancer/consultant: also see <a href="/freelancer-itr-jodhpur" class="text-blue-600 hover:underline"><strong>ITR for Freelancers – Jodhpur</strong></a>.</p>

<h2 id="decision" class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Quick decision: regular vs presumptive</h2>
<p class="mb-4"><strong>Regular (books of account)</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
  <li>Maintain books, claim <strong>actual expenses/depreciation</strong>, and compute net profit.</li>
  <li>File <strong>ITR-3</strong>. Good when margins are thin or you need precise reporting (bank/VC).</li>
</ul>
<p class="mb-4"><strong>Presumptive (no detailed books)</strong></p>
<ul class="list-disc list-inside space-y-2 mb-6">
  <li>Declare a <strong>fixed % of turnover/receipts</strong> as income; books generally not required.</li>
  <li>Businesses: <strong>44AD</strong> (6% digital / 8% cash turnover). Professionals: <strong>44ADA</strong> (50% of gross receipts). File <strong>ITR-4 (Sugam)</strong> if eligible.</li>
</ul>
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
  <p class="text-yellow-800"><em>Rule of thumb:</em> If your true margin is <strong>≤ the presumptive %</strong>, presumptive often wins on time, audit relief, and predictability.</p>
</div>

<h2 id="limits" class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Eligibility & limits (44AD/44ADA)</h2>
<ul class="list-disc list-inside space-y-2 mb-4">
  <li><strong>44AD (businesses)</strong>: Eligible up to <strong>₹3 crore</strong> if cash receipts ≤5% (i.e., ≥95% digital); otherwise standard cap <strong>₹2 crore</strong>.</li>
  <li><strong>44ADA (professionals)</strong>: Receipts up to <strong>₹75 lakh</strong> if cash receipts ≤5%; otherwise <strong>₹50 lakh</strong>.</li>
  <li><strong>44AE</strong>: Transporters owning ≤10 goods carriages (different presumptive rules).</li>
</ul>
<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
  <p class="text-red-800"><strong>Five-year caution (44AD):</strong> If you use 44AD and later don't declare presumptive profit in a subsequent year (and taxable income exceeds the basic exemption), you may <strong>lose 44AD for the next 5 AYs</strong> and may need <strong>books + audit</strong>. Plan your switch carefully.</p>
</div>

<h2 id="forms" class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Pick the right ITR form (ITR-3 vs ITR-4)</h2>
<div class="overflow-x-auto mb-6">
  <table class="min-w-full border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Situation</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Use this form</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Business under presumptive 44AD/44AE</td>
        <td class="border border-gray-300 px-4 py-2 font-medium"><strong>ITR-4 (Sugam)</strong></td>
        <td class="border border-gray-300 px-4 py-2">Simple presumptive schedules</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Profession under 44ADA</td>
        <td class="border border-gray-300 px-4 py-2 font-medium"><strong>ITR-4 (Sugam)</strong></td>
        <td class="border border-gray-300 px-4 py-2">50% deemed income schema</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Regular books (any business/profession)</td>
        <td class="border border-gray-300 px-4 py-2 font-medium"><strong>ITR-3</strong></td>
        <td class="border border-gray-300 px-4 py-2">Full P&L, BS, depreciation</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Ineligible for presumptive (limits/conditions)</td>
        <td class="border border-gray-300 px-4 py-2 font-medium"><strong>ITR-3</strong></td>
        <td class="border border-gray-300 px-4 py-2">Avoid defective return</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-sm text-gray-600 mb-6"><em>Also note key ITR-4 ineligibilities (e.g., total income > ₹50L, >1 house property, certain capital gains, etc.).</em></p>

<h2 id="steps" class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Step-by-step filing flow for Jodhpur businesses</h2>
<div class="space-y-4 mb-6">
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 1 – Choose scheme & form</h3>
    <p class="text-gray-700">Decide regular vs presumptive; pick <strong>ITR-3</strong> or <strong>ITR-4</strong>.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 2 – Collect documents</h3>
    <p class="text-gray-700">Bank statements; UPI/POS & payment-gateway reports; sales/purchase registers; expense proofs; <strong>GST returns</strong> if registered; Form 26AS/AIS.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 3 – Login to portal</h3>
    <p class="text-gray-700">Go to <strong>incometax.gov.in</strong> → e-File → Income Tax Returns → File ITR (AY <strong>2025–26</strong>).</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 4 – Prefill & verify</h3>
    <p class="text-gray-700">Reconcile <strong>AIS/26AS</strong> with your books/gateway; fix mismatches before compute.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 5 – Enter income</h3>
    <p class="text-gray-700"><strong>Presumptive:</strong> report turnover/receipts; system computes deemed income (6%/8% for 44AD; 50% for 44ADA).<br />
    <strong>Regular:</strong> enter P&L, depreciation, interest, add-backs.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 6 – Claim deductions</h3>
    <p class="text-gray-700">80C/80D/80CCD(1B)/80G, etc.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 7 – Compute tax & pay challan</h3>
    <p class="text-gray-700">Compare <strong>old vs new regime</strong>; pick lower tax. Pay challan if tax payable > prepaid.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 8 – Submit & e-verify</h3>
    <p class="text-gray-700">Submit return, then e-verify within <strong>30 days</strong> (Aadhaar OTP / bank EVC / DSC) or return becomes invalid.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Step 9 – Save documents</h3>
    <p class="text-gray-700">Save ITR-V & acknowledgment → keep with FY file.</p>
  </div>
</div>

<h2 id="audit" class="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Audit triggers you must know (44AB)</h2>
<ul class="list-disc list-inside space-y-2 mb-4">
  <li><strong>Standard audit</strong>: Business turnover > <strong>₹1 crore</strong> (professionals > <strong>₹50 lakh</strong>).</li>
  <li><strong>Higher ₹10 crore threshold</strong> if cash receipts AND cash payments ≤5% (≥95% digital) — a big relief for digital-first traders.</li>
  <li><strong>Presumptive users</strong> declaring below 6%/8% (44AD) or 50% (44ADA) with taxable income above basic exemption must maintain books + audit.</li>
</ul>
<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
  <p class="text-green-800"><strong>Takeaway:</strong> If you're mostly digital and under the presumptive caps, you can often avoid audit entirely.</p>
</div>

<h2 id="examples" class="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Real-world Jodhpur examples</h2>
<div class="space-y-6 mb-6">
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">A) Sojati Gate marble trader (Business – considering 44AD)</h3>
    <ul class="list-disc list-inside space-y-1 text-gray-700">
      <li>FY turnover: <strong>₹1.90 crore</strong>; <strong>98% digital</strong> (POS/NEFT/UPI)</li>
      <li>Rough books show margin ~<strong>7%</strong></li>
      <li><strong>If 44AD</strong> → deemed income <strong>6%</strong> of digital = <strong>₹11.4 lakh</strong></li>
      <li><strong>If regular</strong> → report ~<strong>₹13.3 lakh</strong> (with books, potential audit tests still apply)</li>
    </ul>
    <p class="text-gray-700 mt-2"><strong>Outcome:</strong> 44AD keeps compliance light and reduces tax base; trader chooses presumptive.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">B) Clock Tower design studio (Professional – 44ADA)</h3>
    <ul class="list-disc list-inside space-y-1 text-gray-700">
      <li>Gross receipts: <strong>₹58 lakh</strong>; <strong>96% digital</strong> → under <strong>₹75 lakh</strong> cap with 95% digital condition</li>
      <li><strong>44ADA</strong> → declare <strong>50%</strong> of ₹58L = <strong>₹29L</strong>; no detailed books</li>
      <li>Regular route could land near ₹24–26L after expenses but needs full books and may trip audit depending on thresholds.</li>
    </ul>
    <p class="text-gray-700 mt-2"><strong>Outcome:</strong> Consistency + simplicity valued → <strong>44ADA</strong> chosen, with a light internal expense log for discipline. </p>
  </div>
</div>

<h2 id="deadlines" class="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Deadlines, late fees & e-verification (AY 2025–26)</h2>
<div class="overflow-x-auto mb-6">
  <table class="min-w-full border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Task</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Date (AY 2025-26)</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Late fee (Sec 234F)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-medium">ITR due date (non-audit cases)</td>
        <td class="border border-gray-300 px-4 py-2 font-medium">15 September 2025</td>
        <td class="border border-gray-300 px-4 py-2">—</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-medium">Belated/Revised return</td>
        <td class="border border-gray-300 px-4 py-2 font-medium">31 December 2025</td>
        <td class="border border-gray-300 px-4 py-2">₹1,000 (≤ ₹5L income) / ₹5,000 (> ₹5L)</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-medium">ITR-U (Updated Return)</td>
        <td class="border border-gray-300 px-4 py-2 font-medium">Within 48 months</td>
        <td class="border border-gray-300 px-4 py-2">Additional 25%–50% tax</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-medium">E-verification</td>
        <td class="border border-gray-300 px-4 py-2 font-medium">Within 30 days</td>
        <td class="border border-gray-300 px-4 py-2">Return becomes invalid</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
  <p class="text-blue-800"><strong>Pro tip:</strong> On presumptive, pay <strong>advance tax</strong> in time (100% by 15 March for 44ADA users) to avoid 234B/C interest.</p>
</div>

<h2 id="docs" class="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Documents checklist (downloadable)</h2>
<div class="space-y-4 mb-6">
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Business documents</h3>
    <p class="text-gray-700">Bank statements; UPI/POS & payment-gateway settlements; sales/purchase registers; expense bills; loan statements; <strong>GSTR-1/3B</strong>.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Professional documents</h3>
    <p class="text-gray-700">Invoices; receipts; TDS certificates (16A/26Q); rent agreement; expense proofs.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Common documents</h3>
    <p class="text-gray-700">PAN & Aadhaar (linked); previous ITR; <strong>Form 26AS</strong> & <strong>AIS</strong>; deduction proofs (80C/80D/80CCD(1B)/80G); HRA rent receipts.</p>
  </div>
</div>
<p class="text-blue-600 mb-6">Download PDF → <a href="/assets/jodhpur-sme-itr-docs-2025.pdf" class="hover:underline"><strong>Small-Business ITR Docs – Jodhpur (2025)</strong></a></p>

<h2 id="mistakes" class="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Common mistakes we fix a lot</h2>
<ol class="list-decimal list-inside space-y-3 mb-6">
  <li><strong>Picking ITR-4 when ineligible</strong> (limits breached / multiple house properties / complex capital gains).</li>
  <li><strong>Reporting &lt;6%/8% (44AD) or &lt;50% (44ADA)</strong> with taxable income but skipping audit/books.</li>
  <li><strong>Ignoring AIS/26AS mismatches</strong> → adjustments/notices.</li>
  <li><strong>Claiming personal spends as business</strong> (mobile/fuel/travel) with no policy → disallowances.</li>
  <li><strong>Switching in/out of 44AD casually</strong> → 5-year restriction can block presumptive later.</li>
  <li><strong>Not e-verifying within 30 days</strong> → return becomes <strong>invalid</strong>.</li>
</ol>
<p class="text-blue-600 mb-6">Need help with mismatches? See <a href="/ais-mismatch-jodhpur" class="hover:underline"><strong>Fix AIS/26AS Mismatches (Jodhpur)</strong></a>.</p>

<h2 id="faqs" class="text-2xl font-bold text-gray-900 mt-8 mb-4">11. FAQs (Jodhpur edition)</h2>
<div class="space-y-6 mb-6">
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Q. Where is the Income-Tax Office in Jodhpur?</h3>
    <p class="text-gray-700">Aayakar Bhawan, Paota C Road, Jodhpur – 342010. (Commonly referred to as "Lal Maidan, Paota C Road".)</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Q. I have an Amazon storefront and a small outlet. Can I use 44AD?</h3>
    <p class="text-gray-700">Yes, if combined turnover meets 44AD limits/conditions (including the 95% digital rule for the ₹3 crore cap).</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Q. Can I claim depreciation under presumptive?</h3>
    <p class="text-gray-700">Depreciation is deemed allowed in presumptive income (no separate claim). Chapter VI-A deductions (80C/80D/80G etc.) can still apply.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Q. Do I need GST to file ITR?</h3>
    <p class="text-gray-700">No. ITR is income-tax; GST is separate. If registered, ensure ITR ↔ GST figures are consistent.</p>
  </div>
  <div class="border border-gray-200 rounded-lg p-4">
    <h3 class="font-semibold text-gray-900 mb-2">Q. How long should I keep records?</h3>
    <p class="text-gray-700">Keep ITR + key proofs for <strong>at least 6 years</strong> (longer if foreign assets/complex matters). This aligns with typical reassessment windows.</p>
  </div>
</div>

<h2 id="cta" class="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Next step & local help</h2>
<p class="mb-4"><strong>Want a 20-minute eligibility check (free)?</strong></p>
<p class="mb-6">We'll confirm if <strong>44AD/44ADA</strong> fits you, estimate tax under <strong>old vs new regime</strong>, and file your ITR end-to-end.</p>


<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
  <p class="text-green-800 font-semibold mb-2">Ready to file stress-free?</p>
  <p class="text-green-700 mb-4">Rangaco's Jodhpur office can e-file your return, review deductions, and chase refunds—so you don't have to.</p>
  <a href="https://wa.me/919414047471?text=Hi%2C%20I%20need%20help%20with%20small%20business%20ITR%20filing%20in%20Jodhpur" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 gap-2 transition-colors">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
    </svg>
    WhatsApp Us
  </a>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">References</h3>
<ul class="list-disc list-inside space-y-2 mb-6">
  <li>CBDT extended AY 2025–26 due date to 15 Sep 2025 (Circular 06/2025; PIB).</li>
  <li>ITR-4 FAQs (official portal): 44AD ₹3 cr (≤5% cash), 44ADA ₹75L (≤5% cash), due date & rules.</li>
  <li>Tax audit threshold ₹10 cr when cash receipts/payments ≤5%.</li>
  <li>E-verification window 30 days.</li>
  <li>ITR-U window 48 months (latest coverage).</li>
  <li>Late fee u/s 234F ₹1,000/₹5,000.</li>
</ul>
`;

export default function Page() {
  const post = {
    title:
      "Small-Business ITR Filing in Jodhpur (AY 2025–26): Presumptive Tax (44AD/44ADA), Audit Triggers & Step-by-Step Guide",
    content: contentHtml,
    relatedPosts: [
      {
        title: "ITR Filing in Jodhpur (2025)",
        description:
          "Deadlines, pricing, FAQs and step-by-step process to file your ITR in Jodhpur.",
        href: "/itr-filing-2025-jodhpur",
      },
      {
        title: "Income-Tax Advisory – Jodhpur",
        description:
          "Plan taxes proactively with regime comparison, deductions and business structuring.",
        href: "/services/income-tax-advisory-jodhpur",
      },
      {
        title: "TDS/TCS Compliance – Jodhpur",
        description:
          "Monthly TDS returns, challans and certificates for growing SMEs and agencies.",
        href: "/services/tds-tcs-compliance-jodhpur",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Small-Business ITR Filing & Advisory",
    serviceType: "Income-Tax Return Filing",
    areaServed: "Jodhpur, IN",
    provider: {
      "@type": "LocalBusiness",
      name: "Rangaco Tax Consultants",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jodhpur",
        addressRegion: "RJ",
        postalCode: "342010",
        addressCountry: "IN",
      },
    },
  } as const;

  return (
    <>
      <BlogTemplate post={post} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
