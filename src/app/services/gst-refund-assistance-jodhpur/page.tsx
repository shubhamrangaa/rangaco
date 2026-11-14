import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("gst-refund-assistance-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Do exporters under an LUT need to claim a GST refund?",
    a: "Yes, if they have unused input tax credit. Exporting under an LUT means no IGST is paid on the export, so the GST paid on purchases piles up in the credit ledger and is claimed back through Form RFD-01.",
  },
  {
    q: "Who can claim a refund under the inverted duty structure?",
    a: "A business whose GST rate on inputs is higher than the rate on its outputs, so credit accumulates faster than it can be used. The refund covers credit on input goods only, not on input services or capital goods.",
  },
  {
    q: "Can I get back money left in my GST cash ledger?",
    a: "Yes. Excess balance in the electronic cash ledger, such as tax deposited twice or under the wrong head, can be refunded through Form RFD-01 under the excess cash ledger category.",
  },
  {
    q: "What does a deficiency memo on a refund claim mean?",
    a: "It means the officer found the application incomplete, usually a missing document or a figure that doesn't match the returns. The memo (Form RFD-03) is issued within 15 days, and you must file a fresh, corrected application.",
  },
  {
    q: "How much does GST refund assistance cost in Jodhpur?",
    a: `Ranga & Company charges ${service.price}. The fee covers the RFD-01 filing, replies to the officer's queries and follow-up until the refund order.`,
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who can claim a GST refund</a></li>
      <li><a href="#included">What&apos;s included</a></li>
      <li><a href="#steps">How a refund claim goes</a></li>
      <li><a href="#docs">Documents needed</a></li>
      <li><a href="#timeline">Time limits and timelines</a></li>
      <li><a href="#fees">Fees</a></li>
      <li><a href="#mistakes">Why refunds get stuck</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who can claim a GST refund</h2>
      <p>A <Link href="/glossary/gst-refund">GST refund</Link> returns money that a business has paid or accumulated but cannot use. The claims we handle:</p>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Situation</th><th>What you get back</th></tr>
      </thead>
      <tbody>
      <tr><td>Export of goods or services under a <Link href="/glossary/letter-of-undertaking">letter of undertaking</Link></td><td>Unused input tax credit</td></tr>
      <tr><td>Inverted duty structure: inputs taxed higher than outputs</td><td>Credit that has piled up on input goods</td></tr>
      <tr><td>Excess balance in the electronic cash ledger</td><td>Cash deposited but not used</td></tr>
      </tbody>
      </table>
      </div>
      <p>Most exporters, including Jodhpur&apos;s handicraft and furniture exporters, ship under an LUT, which keeps working capital out of IGST but leaves <Link href="/glossary/input-tax-credit">input tax credit</Link> to be claimed back every period.</p>

      <h2 id="included">2. What&apos;s included</h2>
      <ul>
      <li>Checking eligibility, the refund category and the two-year time limit.</li>
      <li>Reconciling GSTR-1, GSTR-3B and <Link href="/glossary/gstr-2b">GSTR-2B</Link> with shipping bills and bank realisation records.</li>
      <li>Computing the refund amount and filing Form RFD-01 with its statements.</li>
      <li>Tracking the ARN, replying to deficiency memos and show-cause notices, and following up until the refund order.</li>
      </ul>
      <p>The refund amount is decided by the GST officer. Our job is to file a claim that is complete and reconciled, so it isn&apos;t cut or sent back. Your regular returns are handled by our <Link href="/services/gst-return-filing-jodhpur">GST return filing service</Link>.</p>

      <h2 id="steps">3. How a refund claim goes</h2>
      <ol>
      <li><strong>Eligibility check.</strong> We confirm the category, the period and the relevant date from which the time limit runs.</li>
      <li><strong>Reconciliation.</strong> Export values in invoices, shipping bills and GSTR-1 must match; credit claimed must appear in GSTR-2B.</li>
      <li><strong>RFD-01 filed.</strong> The refund amount is debited from your ledger and the portal issues an ARN.</li>
      <li><strong>Scrutiny.</strong> The officer acknowledges the claim in RFD-02, or issues a deficiency memo in RFD-03 within 15 days.</li>
      <li><strong>Provisional refund.</strong> For export (zero-rated) claims, 90% can be released provisionally.</li>
      <li><strong>Queries.</strong> If the officer proposes to reject part of the claim, a notice in RFD-08 is answered in RFD-09.</li>
      <li><strong>Refund order.</strong> The final order (RFD-06) is issued and the money is credited to your bank account registered on the GST portal.</li>
      </ol>

      <h2 id="docs">4. Documents needed</h2>
      <ul>
      <li>GSTR-1 and GSTR-3B for the refund period.</li>
      <li>Export invoices with shipping bills or bills of export.</li>
      <li>Bank realisation certificates or foreign inward remittance records for exports of services.</li>
      <li>The LUT acknowledgement for the financial year.</li>
      <li>Purchase invoices supporting the credit claimed, and your GSTR-2B.</li>
      <li>A bank account in the business&apos;s name, validated on the GST portal.</li>
      </ul>

      <h2 id="timeline">5. Time limits and timelines</h2>
      <ul>
      <li><strong>Two years</strong> from the relevant date to file. For exports of goods, that is the date of export.</li>
      <li><strong>15 days</strong> for the officer to acknowledge the claim or issue a deficiency memo.</li>
      <li><strong>60 days</strong> from a complete application for the final decision. Interest is payable to you if the refund is delayed beyond that.</li>
      </ul>
      <p>In our experience, refunds we file are credited in <strong>4–8 weeks</strong> on average.</p>

      <h2 id="fees">6. Fees</h2>
      <p>Our fee is <strong>{service.price}</strong>.</p>

      <h2 id="mistakes">7. Why refunds get stuck</h2>
      <ul>
      <li>Claiming credit on invoices that don&apos;t appear in GSTR-2B.</li>
      <li>Export values that differ between the shipping bill, the invoice and GSTR-1.</li>
      <li>Including credit on input services or capital goods in an inverted duty claim.</li>
      <li>Forgetting to renew the LUT for the new financial year.</li>
      <li>A bank account that isn&apos;t validated on the portal, so the payment fails.</li>
      <li>Missing the two-year limit on older shipments.</li>
      </ul>
    </ServicePage>
  );
}
