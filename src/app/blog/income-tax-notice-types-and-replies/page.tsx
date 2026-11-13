import Link from "next/link";
import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/income-tax-notice-types-and-replies");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "first-steps", label: "First: check it's genuine" },
  { id: "notice-types", label: "Notice types at a glance" },
  { id: "how-to-reply", label: "How to reply online" },
  { id: "if-you-ignore", label: "If you ignore a notice" },
  { id: "new-act", label: "Notices under the new Act" },
];

const NOTICES = [
  { s: "143(1)", what: "Intimation after your return is processed: confirms it, or shows a refund, demand or adjustment.", time: "Respond only if you disagree; proposed adjustments under 143(1)(a) give 30 days" },
  { s: "139(9)", what: "Defective return: something is missing or inconsistent (wrong form, unpaid tax, missing schedule).", time: "15 days, or the return can be treated as invalid" },
  { s: "245", what: "The department plans to adjust your refund against an older outstanding demand.", time: "Usually 30 days to agree or disagree" },
  { s: "133(6)", what: "Request for information, often about high-value transactions in your AIS.", time: "Date stated in the notice" },
  { s: "142(1)", what: "Inquiry asking for documents or explanations, or asking you to file a return.", time: "Date stated in the notice" },
  { s: "143(2)", what: "Scrutiny: your return has been picked for detailed assessment.", time: "Date stated in the notice; get professional help" },
  { s: "148A / 148", what: "Reassessment: the department believes income escaped tax. 148A is the show-cause stage.", time: "Date stated in the notice; often short" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>Check every notice on the e-filing portal&apos;s <strong>Authenticate notice</strong> service before acting on it.</>,
  <>A <strong>143(1) intimation</strong> is the most common and usually routine; <strong>143(2)</strong> and <strong>148A</strong> are the ones that need an expert.</>,
  <>A <strong>defective return notice (139(9))</strong> gives you only <strong>15 days</strong> to fix the return.</>,
  <>All replies go through <strong>e-Proceedings</strong> on incometax.gov.in; most cases are faceless, with no office visit.</>,
  <>Ignoring a notice can lead to a <strong>best-judgment assessment</strong> and a penalty of <strong>₹10,000</strong> per default.</>,
];

const FAQS: Faq[] = [
  {
    q: "How do I check if an income tax notice is genuine?",
    a: "Every genuine notice carries a Document Identification Number (DIN). Use the 'Authenticate notice/order issued by ITD' service on incometax.gov.in, or log in and check e-Proceedings. Do not click links or pay demands from emails or SMS until you have verified the notice.",
  },
  {
    q: "How long do I have to reply to a 139(9) defective return notice?",
    a: "15 days from the date of the notice, unless you get an extension. If you don't fix the defect in time, the return can be treated as invalid, as if you never filed it.",
  },
  {
    q: "What happens if I ignore an income tax notice?",
    a: "The Assessing Officer can complete a best-judgment assessment under section 144 based on the information available, and a penalty of ₹10,000 per default can apply under section 272A. Ignoring a 139(9) notice can make your return invalid.",
  },
  {
    q: "Can I ask for more time to reply?",
    a: "Yes. You can request an adjournment through e-Proceedings before the deadline, giving a reason. It is at the officer's discretion, so request it early and don't assume it will be granted.",
  },
  {
    q: "Do I need to visit the income tax office in Jodhpur?",
    a: "Usually not. Most assessments are faceless and replies are filed online. If a personal hearing is allowed, it is generally held by video conference.",
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <h2 id="first-steps">First: check the notice is genuine</h2>
      <p>
        Fake income tax emails and SMS messages are common. Before you reply or pay anything, check the notice&apos;s{" "}
        <strong>Document Identification Number (DIN)</strong> with the <em>Authenticate notice/order issued by ITD</em>{" "}
        service on incometax.gov.in, or log in and look under <em>Pending Actions → e-Proceedings</em>. If it isn&apos;t
        there, treat it with suspicion.
      </p>
      <p>Then note three things: the section it was issued under, the assessment year, and the response date.</p>

      <h2 id="notice-types">Income tax notice types at a glance</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th>Section</th><th>What it means</th><th>Time to respond</th></tr></thead>
          <tbody>
            {NOTICES.map((n) => (
              <tr key={n.s}>
                <td className="whitespace-nowrap font-medium text-ink">{n.s}</td>
                <td>{n.what}</td>
                <td>{n.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Always go by the date printed on your notice. Response windows for 142(1), 143(2) and 148A are set notice by
        notice, and some are as short as a week.
      </p>

      <h3>Reassessment time limits</h3>
      <p>
        For notices issued since 1 September 2024, reassessment is generally possible within <strong>3 years and 3
        months</strong> from the end of the assessment year, extended to <strong>5 years and 3 months</strong> where the
        income that escaped tax is ₹50 lakh or more.
      </p>

      <h2 id="how-to-reply">How to reply online</h2>
      <ol>
        <li>Log in to incometax.gov.in and open <strong>Pending Actions → e-Proceedings</strong>.</li>
        <li>Open the notice and read exactly what is being asked; reply to each point separately.</li>
        <li>Prepare supporting documents as PDFs: bank statements, Form 16, AIS extracts, purchase deeds, invoices.</li>
        <li>Choose <strong>Submit Response</strong>, attach the documents and submit before the deadline.</li>
        <li>Download the acknowledgement and keep it with the notice.</li>
      </ol>
      <p>
        For a 143(1) adjustment you disagree with after it is final, the fix is usually a rectification request under
        section 154 or a revised return, not a reply. For a 139(9) notice, you file a corrected return in response.
      </p>

      <h2 id="if-you-ignore">If you ignore a notice</h2>
      <ul>
        <li>The officer can make a <strong>best-judgment assessment</strong> under section 144 using whatever data they have.</li>
        <li>A <strong>penalty of ₹10,000</strong> per default can apply under section 272A.</li>
        <li>An unanswered 139(9) notice can make your <strong>return invalid</strong>, which brings late fees and lost refunds.</li>
      </ul>

      <h2 id="new-act">Notices under the new Income-tax Act</h2>
      <p>
        The <Link href="/blog/income-tax-act-2025-changes">Income-tax Act, 2025</Link> replaced the 1961 Act from 1 April
        2026, with new section numbers. Notices for <strong>AY 2026-27 and earlier years</strong> are still governed by
        the 1961 Act under the new Act&apos;s savings clause, so the sections above remain the ones you will see on most
        notices issued in 2026 and 2027.
      </p>
      <p>
        <strong>Got a notice?</strong> Send us a photo or PDF on WhatsApp. We&apos;ll tell you what it means and what it
        takes to close it. <Link href="/services/income-tax-notice-reply-jodhpur">Notice replies</Link> start at ₹7,500,
        and if the notice is about a return you haven&apos;t filed yet, see{" "}
        <Link href="/blog/belated-itr-filing-31-december-2026">how to file a belated return</Link>.
      </p>
    </ArticleLayout>
  );
}
