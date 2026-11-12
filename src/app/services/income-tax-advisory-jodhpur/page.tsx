import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("income-tax-advisory-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  { q: "Is tax planning only for high earners?", a: "No. Even moderate incomes can benefit by maximising deductions such as Section 80C, 80D and claiming the rebate under Section 87A." },
  { q: "Can I switch between old & new regime every year?", a: "Salaried individuals can opt in or out each year by filing Form 10-IE, while business taxpayers can switch only once." },
  { q: "Does advisory fee qualify as a deductible expense?", a: "For businesses, yes—it's a professional expense. For individual taxpayers, it is not deductible." },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#why-planning">Why Proactive Tax Planning Matters</a>
      </li>
      <li><a href="#who-needs">Who Should Seek Tax Advisory?</a>
      </li>
      <li><a href="#strategies">Top Tax-Saving Strategies</a>
      </li>
      <li><a href="#local">Local Insights: Jodhpur-Specific Considerations</a>
      </li>
      <li><a href="#mistakes">Common Mistakes & How to Avoid Them</a>
      </li>
      <li><a href="#checklist">Year-Round Tax-Planning Checklist</a>
      </li>
      <li><a href="#cta">How Rangaco Can Help</a>
      </li>
      <li><a href="#service-faq">FAQs</a>
      </li>
      </ol>
      </nav>
      <h2 id="why-planning">1. Why Proactive Tax Planning Matters</h2>
      <p>Tax planning isn’t a <strong>last-week-of-July scramble</strong>—it’s an all-year activity that helps you:</p>
      <ul>
      <li><strong>Minimise liability legally</strong> by choosing the right deductions & regimes.</li>
      <li><strong>Improve cash flow</strong>—knowing advance-tax outgo lets you budget better.</li>
      <li><strong>Unlock investments</strong> (ELSS, PPF, NPS, Section 80D health cover) that double as wealth-builders.</li>
      <li><strong>Avoid penalties</strong> for wrong estimates or late payments.</li>
      </ul>
      <h2 id="who-needs">2. Who Should Seek Tax Advisory?</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Category</th><th>Why Advisory Helps</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>Salaried individuals</td><td>Optimise HRA, LTA, new vs old regime selection.</td>
      </tr>
      <tr><td>Freelancers & consultants</td><td>Take advantage of presumptive taxation (Sec 44ADA).</td>
      </tr>
      <tr><td>Small-business owners</td><td>Plan advance-tax, depreciation schedules, partner remuneration.</td>
      </tr>
      <tr><td>HUFs & family businesses</td><td>Split income, claim 80C/80D for multiple members.</td>
      </tr>
      <tr><td>First-time investors</td><td>Align tax-saving options with long-term goals.</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h2 id="strategies">3. Top Tax-Saving Strategies (Old Regime)</h2>
      <ol>
      <li><strong>Section 80C (₹1.5 lakh limit):</strong> Mix of ELSS funds (3-yr lock-in) + PPF for balance of risk & safety.</li>
      <li><strong>Section 80CCD(1B) (₹50k extra):</strong> NPS contribution—great for retirement & extra deduction.</li>
      <li><strong>Health insurance premiums (80D):</strong> Up to ₹25k (₹50k for senior-citizen parents).</li>
      <li><strong>Home-loan interest (24b):</strong> Up to ₹2 lakh yearly deduction.</li>
      <li><strong>New vs Old Tax Regime comparison:</strong> If you can’t exhaust deductions, new regime’s lower slab may win; run the numbers each April.</li>
      </ol>
      <p><strong>Tip:</strong> Keep Form 12BB ready for proof submission to your Jodhpur employer by January.</p>
      <h2 id="local">4. Local Insights: Jodhpur-Specific Considerations</h2>
      <ul>
      <li><strong>Handicraft exporters & textile traders</strong>—export under a <strong>Letter of Undertaking (LUT)</strong> to avoid paying IGST upfront, and claim <Link href="/services/gst-refund-assistance-jodhpur">GST refunds</Link> on unused input credit.</li>
      <li><strong>Homestay and Airbnb hosts</strong>: short stays that include services are usually taxed as <em>business income</em>, not house property, so get the classification right before you file.</li>
      <li><strong>Agricultural land on city outskirts:</strong> Check if capital-gain exemption under <em>rural agricultural land</em> applies before selling.</li>
      </ul>
      <p>See also: <Link href="/services/gst-registration-jodhpur">GST Registration & Compliance for Jodhpur SMEs</Link>
      </p>
      <h2 id="mistakes">5. Common Mistakes & How to Avoid Them</h2>
      <ul>
      <li>Waiting till July to invest—<strong>ELSS NAV may spike</strong>; spread SIPs across the year.</li>
      <li>Ignoring <strong>advance-tax</strong>; if liability exceeds ₹10k, pay in 4 instalments (15 Jun, 15 Sep, 15 Dec, 15 Mar).</li>
      <li>Mixing business & personal expenses—maintain separate accounts to claim accurate deductions.</li>
      </ul>
      <h2 id="checklist">6. Year-Round Tax-Planning Checklist</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Quarter</th><th>Action Items</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>Apr–Jun</td><td>Choose tax regime, start 80C SIPs, pay Q1 advance-tax.</td>
      </tr>
      <tr><td>Jul–Sep</td><td>Review cash flow, top-up health cover, pay Q2 advance-tax.</td>
      </tr>
      <tr><td>Oct–Dec</td><td>Invest in NPS, collect rent receipts, pay Q3 advance-tax.</td>
      </tr>
      <tr><td>Jan–Mar</td><td>Max out deductions, submit proofs to employer, final advance-tax.</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h2 id="cta">7. How Rangaco Can Help</h2>
    </ServicePage>
  );
}
