import Link from "next/link";
import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/income-tax-act-2025-changes");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "what-happened", label: "What happened" },
  { id: "tax-year", label: "The 'tax year'" },
  { id: "what-stays", label: "What stays the same" },
  { id: "which-law", label: "Which law applies to your return" },
  { id: "what-to-do", label: "What to do now" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>The <strong>Income-tax Act, 2025</strong> replaced the Income-tax Act, 1961 from <strong>1 April 2026</strong>.</>,
  <>It is a rewrite, not a new tax: <strong>536 sections</strong> in 23 chapters and 16 schedules, in simpler language.</>,
  <>&ldquo;Previous year&rdquo; and &ldquo;assessment year&rdquo; are replaced by a single <strong>tax year</strong>.</>,
  <>Tax <strong>rates and slabs</strong> are still set every year by the Finance Act; the Act itself did not change them.</>,
  <>Your return for <strong>FY 2025-26</strong> (filed in 2026) is still under the <strong>1961 Act</strong>. The first return under the new Act is for tax year 2026-27, filed in 2027.</>,
];

const FAQS: Faq[] = [
  {
    q: "When did the new Income-tax Act come into force?",
    a: "The Income-tax Act, 2025 came into force on 1 April 2026, replacing the Income-tax Act, 1961. It received presidential assent in August 2025.",
  },
  {
    q: "Has my income tax rate changed because of the new Act?",
    a: "No. The new Act restructures and simplifies the law; tax rates and slabs continue to be set each year by the Finance Act. Any change to your tax comes from the annual budget, not from the change of Act.",
  },
  {
    q: "Which law applies to the ITR I file in 2026?",
    a: "Income earned in FY 2025-26 is taxed under the Income-tax Act, 1961 and reported for AY 2026-27, including belated returns filed until 31 December 2026. Income earned from 1 April 2026 falls under the Income-tax Act, 2025.",
  },
  {
    q: "What is a 'tax year' under the Income-tax Act, 2025?",
    a: "The tax year is the financial year in which you earn the income, from 1 April to 31 March. It replaces the two old terms, 'previous year' and 'assessment year'. Tax year 2026-27 runs from 1 April 2026 to 31 March 2027.",
  },
  {
    q: "Do deductions like 80C and 80D still exist under the new Act?",
    a: "Yes. The deductions available under the old tax regime were carried into the new Act, but under new section numbers. Forms, notices and certificates will gradually show the new references.",
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <h2 id="what-happened">What happened</h2>
      <p>
        Parliament passed the <strong>Income-tax Act, 2025</strong> in August 2025, and it took effect on{" "}
        <strong>1 April 2026</strong>. It replaces the Income-tax Act, 1961, which had been amended so many times over six
        decades that it had become hard to read even for professionals.
      </p>
      <p>
        The new Act has <strong>536 sections</strong> arranged in <strong>23 chapters</strong> and{" "}
        <strong>16 schedules</strong>. Much of the detail that used to sit in long provisos now sits in tables and
        schedules, and obsolete provisions have been removed.
      </p>

      <h2 id="tax-year">The &ldquo;tax year&rdquo; replaces two confusing terms</h2>
      <p>
        Under the 1961 Act, income earned in the <em>previous year</em> was taxed in the following{" "}
        <em>assessment year</em>: income from April 2025 to March 2026 was &ldquo;FY 2025-26, AY 2026-27&rdquo;. The new
        Act uses one term, the <strong>tax year</strong>, which is simply the financial year in which you earn the income.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th>Income earned</th><th>Old Act terms</th><th>New Act term</th></tr></thead>
          <tbody>
            <tr><td>1 Apr 2025 – 31 Mar 2026</td><td>FY 2025-26 / AY 2026-27</td><td>Still under the 1961 Act</td></tr>
            <tr><td>1 Apr 2026 – 31 Mar 2027</td><td>—</td><td>Tax year 2026-27</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="what-stays">What stays the same</h2>
      <ul>
        <li><strong>Rates and slabs</strong> are still announced in each year&apos;s budget and enacted by the Finance Act.</li>
        <li><strong>Both regimes</strong> continue: the new regime by default, the old regime with its deductions as an option.</li>
        <li><strong>Deductions and exemptions</strong> such as 80C, 80D, HRA and home-loan interest carry over, under new section numbers.</li>
        <li><strong>TDS, advance tax and the return process</strong> work the same way; TDS provisions are now grouped into tables.</li>
        <li><strong>Faceless assessment</strong> continues, with notices and replies through the e-filing portal.</li>
      </ul>

      <h2 id="which-law">Which law applies to your return</h2>
      <p>
        This is the part that confuses people most. Your return for <strong>FY 2025-26</strong>, including a{" "}
        <Link href="/blog/belated-itr-filing-31-december-2026">belated return filed by 31 December 2026</Link>, is filed
        under the <strong>1961 Act</strong>. So are notices, appeals and reassessments for earlier years, which the new
        Act&apos;s savings clause keeps under the old law (see{" "}
        <Link href="/blog/income-tax-notice-types-and-replies">income tax notices explained</Link>).
      </p>
      <p>
        The first return under the new Act will be for <strong>tax year 2026-27</strong>, filed in 2027. Form names,
        section references and certificates will look different then, even though the tax you pay is decided by the same
        kinds of rules.
      </p>

      <h2 id="what-to-do">What to do now</h2>
      <ol>
        <li><strong>Individuals:</strong> nothing changes for your 2026 filing. Label this year&apos;s documents &ldquo;tax year 2026-27&rdquo; to avoid confusion next year.</li>
        <li><strong>Employers:</strong> make sure payroll software uses the new section references for salary TDS from April 2026.</li>
        <li><strong>Businesses:</strong> update TDS section codes in Tally, Zoho Books or your ERP, and check vendor contracts that quote old section numbers.</li>
        <li><strong>Everyone:</strong> when an adviser quotes a section number, ask which Act it is under.</li>
      </ol>
      <p>
        Planning for the first year under the new Act is a good time for a review. Our{" "}
        <Link href="/services/income-tax-advisory-jodhpur">tax advisory</Link> team can walk you through what changes for
        your income, and our <Link href="/services/tds-tcs-compliance-jodhpur">TDS service</Link> keeps your deductions on
        the right sections.
      </p>
    </ArticleLayout>
  );
}
