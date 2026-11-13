import Link from "next/link";
import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/gstr-9-annual-return-fy-2025-26");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "due-date", label: "Due date" },
  { id: "who-must-file", label: "Who must file GSTR-9" },
  { id: "gstr-9c", label: "When GSTR-9C applies" },
  { id: "late-fee", label: "Late fees" },
  { id: "checklist", label: "Reconciliation checklist" },
  { id: "mistakes", label: "Common mistakes" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>GSTR-9 for <strong>FY 2025-26</strong> is due on <strong>31 December 2026</strong>, one return per GSTIN.</>,
  <>It is <strong>optional</strong> if your aggregate turnover for the year is <strong>up to ₹2 crore</strong>.</>,
  <>Above <strong>₹5 crore</strong>, you also file <strong>GSTR-9C</strong>, a self-certified reconciliation of your books with your returns.</>,
  <>Late fees run per day, from <strong>₹50</strong> to <strong>₹200</strong> depending on turnover, until the full annual return is filed.</>,
  <>GSTR-9 <strong>cannot be revised</strong>, so reconcile books, GSTR-1, GSTR-3B and GSTR-2B before you file.</>,
];

const FAQS: Faq[] = [
  {
    q: "What is the due date for GSTR-9 for FY 2025-26?",
    a: "The due date for GSTR-9 and GSTR-9C for FY 2025-26 is 31 December 2026, unless the government extends it by notification.",
  },
  {
    q: "Is GSTR-9 mandatory if my turnover is below ₹2 crore?",
    a: "No. Filing GSTR-9 is optional for registered taxpayers whose aggregate turnover for the financial year is up to ₹2 crore. Many small businesses still file it voluntarily as a year-end check on their returns.",
  },
  {
    q: "Who has to file GSTR-9C?",
    a: "Taxpayers with aggregate turnover above ₹5 crore must file GSTR-9C, a reconciliation statement between audited books and the annual return. It is self-certified by the taxpayer; a CA's certification is no longer required.",
  },
  {
    q: "What is the late fee for GSTR-9?",
    a: "Under Notification 07/2023-Central Tax, the combined CGST and SGST late fee is ₹50 a day for turnover up to ₹5 crore and ₹100 a day for ₹5–20 crore, both capped at 0.04% of turnover, and ₹200 a day above ₹20 crore, capped at 0.5% of turnover.",
  },
  {
    q: "Can I revise GSTR-9 after filing?",
    a: "No. GSTR-9 cannot be revised once filed. Any extra tax you discover during reconciliation should be paid through Form DRC-03 with interest before or along with filing the annual return.",
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <h2 id="due-date">GSTR-9 due date for FY 2025-26</h2>
      <p>
        The annual return for the financial year April 2025 to March 2026 is due on <strong>31 December 2026</strong>.
        It is filed separately for each GSTIN, so a business registered only in Rajasthan files one return; a business
        with GSTINs in several states files one per state.
      </p>

      <h2 id="who-must-file">Who must file GSTR-9</h2>
      <ul>
        <li><strong>Mandatory:</strong> regular taxpayers with aggregate turnover above <strong>₹2 crore</strong> in FY 2025-26.</li>
        <li><strong>Optional:</strong> regular taxpayers with aggregate turnover up to ₹2 crore.</li>
        <li>
          <strong>Not required:</strong> composition taxpayers (they file GSTR-4), casual taxable persons, non-resident
          taxable persons, input service distributors, and TDS/TCS deductors under GST.
        </li>
      </ul>
      <p>
        Aggregate turnover is counted on your PAN across all GSTINs in India, including exempt and export supplies.
      </p>

      <h2 id="gstr-9c">When GSTR-9C applies</h2>
      <p>
        If your aggregate turnover is above <strong>₹5 crore</strong>, you also file <strong>GSTR-9C</strong>, a
        reconciliation statement between your audited financial statements and GSTR-9. It is self-certified by the
        taxpayer. The difference between turnover, tax and input tax credit in your books and in your returns has to
        be explained line by line.
      </p>

      <h2 id="late-fee">Late fees</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th>Aggregate turnover</th><th>Late fee (CGST + SGST)</th><th>Maximum</th></tr></thead>
          <tbody>
            <tr><td>Up to ₹5 crore</td><td>₹50 a day</td><td>0.04% of turnover</td></tr>
            <tr><td>₹5 crore to ₹20 crore</td><td>₹100 a day</td><td>0.04% of turnover</td></tr>
            <tr><td>Above ₹20 crore</td><td>₹200 a day</td><td>0.5% of turnover</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The fee keeps running until the <strong>complete</strong> annual return is filed, which includes GSTR-9C where
        it applies.
      </p>

      <h2 id="checklist">Reconciliation checklist before you file</h2>
      <ol>
        <li><strong>Sales:</strong> match turnover in your books with GSTR-1 and GSTR-3B, month by month.</li>
        <li><strong>Input tax credit:</strong> match ITC in your books with GSTR-2B and GSTR-3B. Credit not in GSTR-2B is the most common problem.</li>
        <li><strong>Credit and debit notes:</strong> check they are reported in the right period.</li>
        <li><strong>Reverse charge:</strong> confirm tax paid on RCM purchases (rent from unregistered persons, legal fees, freight).</li>
        <li><strong>Amendments:</strong> FY 2025-26 corrections made in returns up to the cut-off date go in the amendment tables.</li>
        <li><strong>HSN summary:</strong> outward and inward supplies by HSN code, as required for your turnover.</li>
        <li><strong>Extra tax:</strong> pay any shortfall through <strong>DRC-03</strong> with interest before filing.</li>
      </ol>

      <h2 id="mistakes">Common mistakes we fix</h2>
      <ul>
        <li>Claiming ITC in the annual return that never appeared in GSTR-2B.</li>
        <li>Reporting the same invoice twice: once in the year and again as an amendment.</li>
        <li>Leaving exempt and nil-rated sales out of turnover.</li>
        <li>Filing GSTR-9 but forgetting GSTR-9C, so the late fee keeps running.</li>
      </ul>
      <p>
        Getting your monthly returns right is what makes GSTR-9 easy. Our{" "}
        <Link href="/services/gst-return-filing-jodhpur">GST return filing</Link> plans reconcile with GSTR-2B every
        month, and exporters with unused credit can claim it back through{" "}
        <Link href="/services/gst-refund-assistance-jodhpur">GST refunds</Link>.
      </p>
    </ArticleLayout>
  );
}
