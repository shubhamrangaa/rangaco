import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("income-tax-notice-reply-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "Should I pay an income tax demand before replying?",
    a: "Not until you have checked it. Many demands in a 143(1) intimation come from a TDS mismatch or a deduction the processing missed, and can be corrected through rectification under section 154. If the demand is right, paying it promptly stops further interest.",
  },
  {
    q: "What is the difference between a 143(1) intimation and a 143(2) notice?",
    a: "A 143(1) intimation is the automated result of processing your return and is often routine. A 143(2) notice means your return has been picked for scrutiny, and an officer will ask for evidence; that one needs a careful, documented reply.",
  },
  {
    q: "Is a section 148 notice serious?",
    a: "Yes. A 148A or 148 notice means the department believes income escaped tax for that year and wants to reopen the assessment. The 148A show-cause stage is your best chance to stop the reopening, so reply with evidence before the deadline.",
  },
  {
    q: "Can I file a revised return instead of replying to a notice?",
    a: "Only in some cases. For a 139(9) defective return notice, filing the corrected return is the reply. For scrutiny or reassessment, a revised return does not replace a reply. For AY 2026-27, a return can be revised until 31 March 2027, unless the assessment finishes first.",
  },
  {
    q: "How much does an income tax notice reply cost in Jodhpur?",
    a: `Ranga & Company charges ${service.price.toLowerCase()}: a ${service.priceNotes?.[0].toLowerCase()}. ${service.priceNotes?.[1]}.`,
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#notices">Notices we handle</a></li>
      <li><a href="#included">What&apos;s included</a></li>
      <li><a href="#steps">How we close a notice</a></li>
      <li><a href="#docs">Documents to send</a></li>
      <li><a href="#timeline">How long you have to reply</a></li>
      <li><a href="#fees">Fees</a></li>
      <li><a href="#mistakes">Mistakes that make notices worse</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="notices">1. Notices we handle</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
      <thead>
      <tr><th>Section</th><th>What it means</th></tr>
      </thead>
      <tbody>
      <tr><td>143(1)</td><td>Intimation after processing: a refund, a demand or an adjustment to your return.</td></tr>
      <tr><td>139(9)</td><td>Defective return: a schedule, form or tax payment is missing or inconsistent.</td></tr>
      <tr><td>245</td><td>The department wants to adjust your refund against an older demand.</td></tr>
      <tr><td>133(6) / 142(1)</td><td>Requests for information or documents, often about high-value entries in your AIS.</td></tr>
      <tr><td>143(2)</td><td>Scrutiny: your return has been selected for detailed assessment.</td></tr>
      <tr><td>148A / 148</td><td>Reassessment: the department believes income escaped tax.</td></tr>
      </tbody>
      </table>
      </div>
      <p>Salaried people, traders, professionals and property sellers all get these, most often when the return doesn&apos;t match the <Link href="/glossary/annual-information-statement">Annual Information Statement</Link> or <Link href="/glossary/form-26as">Form 26AS</Link>. For what each notice means in detail, read <Link href="/blog/income-tax-notice-types-and-replies">income tax notice types and how to reply</Link>.</p>

      <h2 id="included">2. What&apos;s included</h2>
      <ul>
      <li>Reading the notice and telling you plainly what it asks and what it will take to close.</li>
      <li>Checking your return against AIS, Form 26AS and your own records.</li>
      <li>Drafting a point-by-point reply with supporting documents.</li>
      <li>Uploading the reply on the e-filing portal and keeping the acknowledgement.</li>
      <li>Representing you at hearings, online or at the Jodhpur ward office.</li>
      </ul>
      <p>Where the right fix isn&apos;t a reply, we tell you: a wrong 143(1) adjustment is usually cleared by <Link href="/glossary/rectification">rectification</Link>, and missed income by a <Link href="/glossary/revised-return">revised</Link> or <Link href="/glossary/updated-return">updated return</Link>.</p>

      <h2 id="steps">3. How we close a notice</h2>
      <ol>
      <li><strong>Send us the notice</strong> as a photo or PDF on WhatsApp. We reply within one working day.</li>
      <li><strong>Verify it.</strong> Every genuine notice has a Document Identification Number (DIN) that can be checked on the portal. We note the section, the assessment year and the response date.</li>
      <li><strong>Find the cause.</strong> We compare what the notice raises with your return, AIS and documents.</li>
      <li><strong>Draft the reply.</strong> Each point in the notice gets its own answer, backed by a document.</li>
      <li><strong>File it</strong> through e-Proceedings before the deadline, or ask for an adjournment if more time is genuinely needed.</li>
      <li><strong>Follow through</strong> on any further questions or hearing until the officer passes an order or closes the proceeding.</li>
      </ol>

      <h2 id="docs">4. Documents to send</h2>
      <ul>
      <li>The notice itself, and any earlier notices or orders for the same year.</li>
      <li>The ITR and computation for the assessment year in question.</li>
      <li>Form 16 or 16A, and your AIS and Form 26AS.</li>
      <li>Bank statements for the year.</li>
      <li>Proof for the item questioned: a sale or purchase deed, a capital gains statement, investment proofs, loan confirmations or invoices.</li>
      </ul>

      <h2 id="timeline">5. How long you have to reply</h2>
      <ul>
      <li><strong>139(9) defective return:</strong> 15 days, or the return can be treated as invalid.</li>
      <li><strong>143(1)(a) proposed adjustment:</strong> 30 days to respond.</li>
      <li><strong>245 refund adjustment:</strong> usually 30 days.</li>
      <li><strong>142(1), 143(2), 148A:</strong> the date printed on the notice, sometimes as short as a week.</li>
      </ul>
      <p>For notices issued since 1 September 2024, reassessment is generally possible within 3 years and 3 months from the end of the assessment year, or 5 years and 3 months if the escaped income is ₹50 lakh or more. Notices for AY 2026-27 and earlier stay under the 1961 Act even after the <Link href="/blog/income-tax-act-2025-changes">Income-tax Act, 2025</Link> took effect.</p>

      <h2 id="fees">6. Fees</h2>
      <p>Replies are priced <strong>{service.price.toLowerCase()}</strong>.</p>
      <ul>{service.priceNotes?.map((t) => <li key={t}>{t}</li>)}</ul>

      <h2 id="mistakes">7. Mistakes that make notices worse</h2>
      <ul>
      <li>Ignoring it: the officer can make a best-judgment assessment under section 144, and a ₹10,000 penalty can apply under section 272A.</li>
      <li>Acting on an email or SMS link without checking the DIN on the portal.</li>
      <li>Paying a demand that rectification would have cancelled.</li>
      <li>Sending a one-line reply or a pile of documents without explaining each point.</li>
      <li>Missing the 15-day window on a 139(9) notice and losing the return and its refund.</li>
      </ul>
      <p>Haven&apos;t filed the return a notice refers to? See <Link href="/blog/belated-itr-filing-31-december-2026">how to file a belated return by 31 December 2026</Link>.</p>
    </ServicePage>
  );
}
