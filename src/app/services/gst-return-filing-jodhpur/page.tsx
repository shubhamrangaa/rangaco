import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("gst-return-filing-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Can I switch from monthly to quarterly GST returns?",
    a: "Yes, if your aggregate turnover is up to ₹5 crore you can opt into the QRMP scheme on the GST portal. You then file GSTR-1 and GSTR-3B quarterly, but still pay tax monthly through PMT-06 by the 25th for the first two months of each quarter.",
  },
  {
    q: "Can I revise a GSTR-3B after filing it?",
    a: "No. GSTR-3B cannot be revised once filed. Errors are adjusted in a later period's return within the time limits in the law, which is why we reconcile sales and input tax credit before filing, not after.",
  },
  {
    q: "Can I file GSTR-3B before paying the tax due?",
    a: "No. GSTR-3B can only be submitted once the tax shown in it is paid in cash or set off against credit. Until then the late fee of ₹50 a day runs and unpaid tax carries 18% a year interest.",
  },
  {
    q: "What happens if I miss GST returns for several months?",
    a: "Late fees and interest build up for every period, and missing two returns in a row blocks e-way bill generation. A return can't be filed at all once three years have passed from its due date, and continued non-filing can lead to cancellation of registration.",
  },
  {
    q: "What does your GST return filing service include each month?",
    a: "Preparing and filing GSTR-1 and GSTR-3B, reconciling your purchases with GSTR-2B, creating the tax challan with a payment reminder, and sending a WhatsApp confirmation and PDF copy of every filed return.",
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
      <li><a href="#steps">Our monthly filing process</a></li>
      <li><a href="#docs">What we need from you</a></li>
      <li><a href="#dates">Due dates and late fees</a></li>
      <li><a href="#fees">Fees</a></li>
      <li><a href="#mistakes">Common mistakes</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who this is for</h2>
      <p>Every regular GST-registered business in Rajasthan must file <Link href="/glossary/gst-returns">GST returns</Link> for every period it is registered, including months with no sales. This service suits:</p>
      <ul>
      <li><strong>Monthly filers</strong>, and businesses with turnover above ₹5 crore, who must file monthly.</li>
      <li><strong>QRMP filers</strong> (turnover up to ₹5 crore) who file quarterly but pay tax every month.</li>
      <li><strong>Traders, manufacturers and service providers</strong> who buy from many suppliers and need every rupee of credit matched.</li>
      <li><strong>Exporters</strong> who file under an <Link href="/glossary/letter-of-undertaking">LUT</Link> and later claim unused credit back.</li>
      </ul>
      <p>Composition dealers file different returns (CMP-08 and GSTR-4); see the <Link href="/glossary/composition-scheme">composition scheme</Link> for how they work.</p>

      <h2 id="included">2. What&apos;s included</h2>
      <ul>
      <li>Preparing and uploading <strong>GSTR-1</strong> (sales) and <strong>GSTR-3B</strong> (summary and tax payment).</li>
      <li>Matching your purchase entries with <Link href="/glossary/gstr-2b">GSTR-2B</Link> and flagging every mismatch before you claim credit.</li>
      <li>Creating the tax challan and reminding you to pay before the due date.</li>
      <li>A WhatsApp confirmation and a PDF copy of each filed return.</li>
      </ul>
      <p>Refund claims are a separate service: exporters and businesses with an inverted duty structure can claim unused credit back through <Link href="/services/gst-refund-assistance-jodhpur">GST refunds</Link>. If your books need keeping too, see <Link href="/services/accounting-payroll-jodhpur">accounting and payroll</Link>.</p>

      <h2 id="steps">3. Our monthly filing process</h2>
      <ol>
      <li><strong>You send the month&apos;s data</strong>: a sales and purchase export from Tally or Zoho Books, an Excel sheet, or invoices on WhatsApp or email.</li>
      <li><strong>Invoice review.</strong> Supplier invoices are accepted, rejected or kept pending in the Invoice Management System (IMS) before GSTR-2B is generated.</li>
      <li><strong>GSTR-1.</strong> We prepare your sales return with the right place of supply and HSN summary, and file it.</li>
      <li><strong>Reconciliation.</strong> After GSTR-2B is generated on the 14th, we match it line by line with your purchase register and list suppliers whose invoices are missing.</li>
      <li><strong>GSTR-3B.</strong> We compute tax net of eligible credit, including any reverse-charge tax, and create the challan for you to pay.</li>
      <li><strong>Filing and confirmation.</strong> Once tax is paid we file GSTR-3B and send you the PDF.</li>
      </ol>

      <h2 id="docs">4. What we need from you</h2>
      <ul>
      <li>Sales invoices, or a sales register, with credit and debit notes.</li>
      <li>Purchase and expense bills carrying GST, including rent, freight and professional fees.</li>
      <li>Details of rent paid to unregistered landlords and other <Link href="/glossary/reverse-charge-mechanism">reverse-charge</Link> purchases.</li>
      <li>Export invoices and shipping bills, if you export.</li>
      <li>Any advances received against future supplies.</li>
      </ul>

      <h2 id="dates">5. Due dates and late fees (FY 2026-27)</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Return</th><th>Monthly filers</th><th>QRMP filers (Rajasthan)</th></tr>
      </thead>
      <tbody>
      <tr><td>GSTR-1</td><td>11th of next month</td><td>13th after the quarter</td></tr>
      <tr><td>IFF (optional B2B invoices)</td><td>—</td><td>13th, months 1–2</td></tr>
      <tr><td>PMT-06 tax payment</td><td>—</td><td>25th, months 1–2</td></tr>
      <tr><td>GSTR-3B</td><td>20th of next month</td><td>24th after the quarter</td></tr>
      <tr><td>GSTR-9 annual return</td><td colSpan={2}>31 December after the financial year</td></tr>
      </tbody>
      </table>
      </div>
      <p>A late GSTR-1 or GSTR-3B costs <strong>₹50 a day</strong> (₹20 for a nil return), capped by turnover, and tax paid late carries <strong>18% a year</strong> interest. Our monthly plans exist to prevent both. For every date this year, including extensions, see the <Link href="/gst-calendar">GST calendar</Link>; for the annual return, read our <Link href="/blog/gstr-9-annual-return-fy-2025-26">GSTR-9 guide for FY 2025-26</Link>.</p>

      <h2 id="fees">6. Fees</h2>
      <p>Plans are priced <strong>{service.price.toLowerCase()}</strong>. Send us a month&apos;s sales and purchase data for a free document check before you sign up.</p>

      <h2 id="mistakes">7. Common mistakes</h2>
      <ul>
      <li>Claiming credit from the purchase register for invoices that aren&apos;t in GSTR-2B.</li>
      <li>Claiming blocked credit, such as GST on staff food or most cars.</li>
      <li>Missing reverse charge on rent paid to an unregistered landlord for a shop or office.</li>
      <li>Charging CGST and SGST on a sale to another state, which should carry IGST.</li>
      <li>Skipping nil returns in quiet months, which still attract late fees.</li>
      <li>Filing GSTR-1 late, which delays your customers&apos; credit and strains the relationship.</li>
      </ul>
    </ServicePage>
  );
}
