import Link from "next/link";
import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/belated-itr-filing-31-december-2026");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "can-you-still-file", label: "Can you still file?" },
  { id: "cost", label: "What filing late costs" },
  { id: "what-you-lose", label: "What you lose by filing late" },
  { id: "how-to-file", label: "How to file a belated return" },
  { id: "after-31-december", label: "If you miss 31 December too" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>You can still file your ITR for <strong>FY 2025-26 (AY 2026-27)</strong> as a belated return under section 139(4) until <strong>31 December 2026</strong>.</>,
  <>The late fee under section 234F is <strong>₹5,000</strong>, or <strong>₹1,000</strong> if your total income is up to ₹5 lakh, plus 1% a month interest on any unpaid tax.</>,
  <>A belated return is filed under the <strong>new tax regime</strong>: the old regime can only be chosen in a return filed by the original due date.</>,
  <>Business and capital losses <strong>cannot be carried forward</strong> from a belated return.</>,
  <>Miss 31 December too, and the only route left is an <strong>updated return (ITR-U)</strong> with 25%–70% extra tax.</>,
];

const FAQS: Faq[] = [
  {
    q: "Can I file my ITR after the due date for AY 2026-27?",
    a: "Yes. If you missed the 31 July 2026 deadline (no business income) or the 31 August 2026 deadline (non-audit business income), you can file a belated return under section 139(4) until 31 December 2026, with a late fee.",
  },
  {
    q: "What is the late fee for filing ITR after the due date?",
    a: "The late fee under section 234F is ₹5,000. If your total income is up to ₹5 lakh, it is capped at ₹1,000. Interest under section 234A of 1% a month also applies on any tax still unpaid after the original due date.",
  },
  {
    q: "Can I choose the old tax regime in a belated return?",
    a: "Generally no. The option to use the old regime must be exercised in a return filed by the original due date under section 139(1), so a belated return is taxed under the new regime. Business owners must also have filed Form 10-IEA by the due date to opt out.",
  },
  {
    q: "Can I revise a belated return?",
    a: "Yes. A belated return can be revised under section 139(5). For AY 2026-27, the window to revise runs until 31 March 2027 following the Finance Act, 2026 changes, or until assessment is completed if that is earlier.",
  },
  {
    q: "What happens if I miss the 31 December 2026 deadline?",
    a: "You can no longer file a normal or belated return for AY 2026-27. You can file an updated return (ITR-U) within 48 months from the end of the assessment year, paying 25% to 70% additional tax, but not to claim a refund or report a loss.",
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <h2 id="can-you-still-file">Can you still file your ITR for AY 2026-27?</h2>
      <p>
        Yes. The original due dates for income earned in FY 2025-26 were <strong>31 July 2026</strong> if you have no
        business income and <strong>31 August 2026</strong> for non-audit business or professional income. If you missed
        yours, section 139(4) lets you file a <strong>belated return until 31 December 2026</strong>, or until your
        assessment is completed if that happens first.
      </p>
      <p>
        Tax-audit cases have a later original date (extended by CBDT to 21 November 2026), so they are not belated yet.
        See our <Link href="/itr-filing-2026-jodhpur">ITR filing 2026 guide</Link> for every due date this year.
      </p>

      <h2 id="cost">What filing late costs</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th>Charge</th><th>Amount</th><th>Applies when</th></tr></thead>
          <tbody>
            <tr><td>Late fee (section 234F)</td><td>₹5,000</td><td>Return filed after the due date</td></tr>
            <tr><td>Late fee, small taxpayers</td><td>₹1,000</td><td>Total income up to ₹5 lakh</td></tr>
            <tr><td>Interest (section 234A)</td><td>1% a month</td><td>On tax still unpaid after the due date</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        If your income is below the basic exemption limit and you are filing only to claim a refund, the late fee
        generally does not apply. Pay the fee and any tax due through e-Pay Tax on the portal <em>before</em> you submit
        the return, so it shows up in the return.
      </p>

      <h2 id="what-you-lose">What you lose by filing late</h2>
      <h3>The old tax regime</h3>
      <p>
        The choice of the old regime has to be made in a return filed by the original due date. A belated return is
        therefore taxed under the <strong>new regime</strong>. If you planned to claim large 80C, 80D, HRA or home-loan
        interest deductions, run the numbers before you file: our{" "}
        <Link href="/services/income-tax-advisory-jodhpur">tax advisory</Link> team can tell you what the switch costs.
      </p>
      <h3>Carrying forward losses</h3>
      <p>
        Business losses and capital losses (for example, from shares or property) can be set off within the same year,
        but they <strong>cannot be carried forward</strong> to future years from a belated return. Losses from house
        property and unabsorbed depreciation are the exceptions.
      </p>
      <h3>Interest on your refund</h3>
      <p>
        Refund interest on a belated return runs from the date you file, not from 1 April. Every month you wait costs
        you interest the department would otherwise pay.
      </p>

      <h2 id="how-to-file">How to file a belated return</h2>
      <ol>
        <li>Download your <strong>AIS and Form 26AS</strong> and match them with your Form 16, bank interest and capital-gains statements.</li>
        <li>Pay the <strong>late fee and any tax due</strong> through e-Pay Tax on incometax.gov.in.</li>
        <li>Log in, choose <em>File Income Tax Return</em>, select <strong>AY 2026-27</strong> and the filing type <strong>139(4) – Belated</strong>.</li>
        <li>Pick the right ITR form, check the pre-filled data, add the fee and tax challans, and submit.</li>
        <li><strong>E-verify within 30 days</strong> with an Aadhaar OTP. An unverified return is treated as never filed.</li>
      </ol>

      <h2 id="after-31-december">If you miss 31 December too</h2>
      <p>
        After 31 December 2026 you cannot file a normal or belated return for AY 2026-27. The remaining option is an{" "}
        <strong>updated return (ITR-U)</strong>, allowed within 48 months from the end of the assessment year. It comes
        with <strong>25% to 70% additional tax</strong> depending on how late you are, and it cannot be used to claim a
        refund or report a loss. If you have already received a notice for the year, see{" "}
        <Link href="/blog/income-tax-notice-types-and-replies">what each income tax notice means</Link>.
      </p>
      <p>
        <strong>Short on time?</strong> Send your documents on WhatsApp and we&apos;ll file your belated return, usually
        within one working day. <Link href="/services/itr-filing-jodhpur">ITR filing</Link> starts at ₹1,200.
      </p>
    </ArticleLayout>
  );
}
