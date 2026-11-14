import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("virtual-cfo-jodhpur");
const accounting = getService("accounting-payroll-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "What is the difference between a virtual CFO and an accountant?",
    a: "An accountant records transactions and keeps you compliant; a virtual CFO uses those numbers to plan. That means budgets, cash-flow forecasts, KPIs and financials for investors, reviewed with you every month. The books need to be up to date first.",
  },
  {
    q: "Which virtual CFO plan suits a Jodhpur SME?",
    a: `Lite suits owners who want a monthly MIS and a review call; it starts ${service.price.toLowerCase()}. Growth suits businesses that also want a budget built and someone on site, since it adds an on-site visit and budgeting.`,
  },
  {
    q: "How often will I get MIS reports?",
    a: "Every month. The MIS dashboard is prepared once the month's books are closed, so the numbers you review match your accounts.",
  },
  {
    q: "Can a virtual CFO prepare financials for investors?",
    a: "Yes. Investor deck financials are part of the service: historical results, projections and the key numbers investors ask about, built from books that reconcile.",
  },
  {
    q: "Will the virtual CFO attend our board meetings?",
    a: "Yes. Our virtual CFO attends board meetings, presents the numbers and the budget review, and helps set the KPIs the business is run against.",
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who needs a virtual CFO</a></li>
      <li><a href="#included">Key deliverables</a></li>
      <li><a href="#steps">How an engagement starts and runs</a></li>
      <li><a href="#docs">What we need from you</a></li>
      <li><a href="#calendar">The cash calendar we plan around</a></li>
      <li><a href="#fees">Engagement models</a></li>
      <li><a href="#mistakes">Common finance mistakes in growing SMEs</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who needs a virtual CFO</h2>
      <p>A virtual CFO gives you strategic finance without the cost of a full-time hire. It fits Jodhpur SMEs that:</p>
      <ul>
      <li>Have grown past the point where the owner can track cash and margins in their head.</li>
      <li>Have an accountant keeping the books, but nobody turning them into decisions.</li>
      <li>Are raising money from investors and need financials that hold up.</li>
      <li>Hold board meetings and want the numbers presented and challenged properly.</li>
      <li>Export or sell on credit, and need to plan working capital around long receivable cycles.</li>
      </ul>

      <h2 id="included">2. Key deliverables</h2>
      <ul>
      <li><strong>Monthly MIS dashboard:</strong> the month&apos;s results and cash position, compared with budget.</li>
      <li><strong>Cash-flow forecasting:</strong> a rolling forecast that includes tax outflows, so GST, TDS and advance tax never surprise you.</li>
      <li><strong>Budgets and KPIs:</strong> an annual budget, reviewed every month, and the few numbers the business is run on.</li>
      <li><strong>Investor deck financials:</strong> historical results and projections, ready for an investor conversation.</li>
      <li><strong>Board meetings:</strong> our virtual CFO attends, presents and helps you make data-driven decisions.</li>
      </ul>
      <p><strong>Not included:</strong> day-to-day bookkeeping, which is our <Link href={`/services/${accounting.slug}`}>accounting and payroll service</Link> ({accounting.price}), and audits, which are signed by our partner CA firm through our <Link href="/services/statutory-audit-jodhpur">audit support service</Link>.</p>

      <h2 id="steps">3. How an engagement starts and runs</h2>
      <ol>
      <li><strong>Discovery.</strong> We learn how the business makes money, where cash gets stuck and what decisions are coming.</li>
      <li><strong>Books check.</strong> MIS is only as good as the books under it, so we check that they are current and reconciled.</li>
      <li><strong>Set-up.</strong> We agree the KPIs, the MIS format and the budget for the year.</li>
      <li><strong>Monthly cycle.</strong> Books are closed, the MIS is prepared, and we review it with you on a call or, on the Growth plan, on site.</li>
      <li><strong>Forecast update.</strong> The cash-flow forecast rolls forward each month with actuals.</li>
      <li><strong>Board and investors.</strong> Board packs and investor financials are built from the same numbers.</li>
      </ol>

      <h2 id="docs">4. What we need from you</h2>
      <ul>
      <li>Access to your books in Tally, Zoho Books or QuickBooks.</li>
      <li>Bank statements and loan statements with repayment schedules.</li>
      <li>Debtor and creditor ageing, and stock reports if you hold inventory.</li>
      <li>A payroll summary.</li>
      <li>The last two or three years&apos; financial statements and income tax returns.</li>
      <li>Your order book or sales pipeline, for forecasting.</li>
      </ul>

      <h2 id="calendar">5. The cash calendar we plan around</h2>
      <p>Tax payments are the cash outflows owners most often forget. For FY 2026-27, the forecast builds in:</p>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>When</th><th>Outflow</th></tr>
      </thead>
      <tbody>
      <tr><td>7th of each month</td><td>TDS deducted last month</td></tr>
      <tr><td>20th of each month</td><td>GST through GSTR-3B (monthly filers)</td></tr>
      <tr><td>15 June / 15 Sep / 15 Dec / 15 Mar</td><td><Link href="/glossary/advance-tax">Advance tax</Link>: 15%, 45%, 75% and 100% of the year&apos;s tax</td></tr>
      </tbody>
      </table>
      </div>
      <p>Planning the tax itself, such as regime choice or capital gains, sits with our <Link href="/services/income-tax-advisory-jodhpur">tax advisory service</Link>.</p>

      <h2 id="fees">6. Engagement models</h2>
      <p>Plans are priced <strong>{service.price.toLowerCase()}</strong>.</p>
      <ul>{service.priceNotes?.map((t) => <li key={t}>{t}</li>)}</ul>

      <h2 id="mistakes">7. Common finance mistakes in growing SMEs</h2>
      <ul>
      <li>Treating profit as cash, then running short when receivables stretch.</li>
      <li>Building MIS on books that haven&apos;t been reconciled.</li>
      <li>Setting a budget in April and never comparing it with actuals.</li>
      <li>Leaving advance tax and GST out of the cash forecast.</li>
      <li>Mixing the promoters&apos; personal spending with the business&apos;s.</li>
      <li>Paying micro and small suppliers late: beyond 45 days, the expense becomes deductible only when paid, under the <Link href="/glossary/udyam-registration">MSME payment rule</Link>.</li>
      </ul>
    </ServicePage>
  );
}
