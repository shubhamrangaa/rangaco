import Link from "next/link";
import ArticleLayout, { postMetadata, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/content/blog";
import type { Faq } from "@/content/faqs";

const post = getPost("/blog/property-sale-capital-gains-tax-jodhpur");
export const metadata = postMetadata(post);

const TOC: TocItem[] = [
  { id: "short-or-long", label: "Short-term or long-term?" },
  { id: "rates", label: "Tax rates and the indexation choice" },
  { id: "examples", label: "Two worked examples" },
  { id: "dlc-rate", label: "Selling below the DLC rate" },
  { id: "tds", label: "TDS when you buy or sell" },
  { id: "exemptions", label: "Ways to save tax: 54, 54F, 54EC" },
  { id: "reporting", label: "Reporting the sale" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>Property held for <strong>more than 24 months</strong> gives long-term capital gains, taxed at <strong>12.5% without indexation</strong>.</>,
  <>If you&apos;re a <strong>resident individual or HUF</strong> and bought before <strong>23 July 2024</strong>, you can pay <strong>20% with indexation</strong> instead, whichever is lower.</>,
  <>If the sale price is below the <strong>DLC rate</strong>, tax is worked out on the DLC value (with a 10% tolerance).</>,
  <>The <strong>buyer deducts 1% TDS</strong> when the price or stamp value is ₹50 lakh or more, and files Form 26QB.</>,
  <>Reinvesting in a house (<strong>section 54/54F</strong>, up to ₹10 crore) or <strong>54EC bonds</strong> (up to ₹50 lakh) can cut the tax to zero.</>,
];

const FAQS: Faq[] = [
  {
    q: "How is tax calculated on selling a plot or house held for more than two years?",
    a: "The gain is long-term and taxed at 12.5% without indexation. Resident individuals and HUFs who acquired the property before 23 July 2024 can instead compute tax at 20% with indexation and pay whichever is lower. Add 4% health and education cess, and surcharge if applicable.",
  },
  {
    q: "Is indexation still available on property sales?",
    a: "Only as an option for resident individuals and HUFs on land or buildings acquired before 23 July 2024. They can choose 20% with indexation instead of 12.5% without. Property bought on or after 23 July 2024 gets 12.5% without indexation.",
  },
  {
    q: "Who deducts TDS on a property sale?",
    a: "The buyer. Under section 194-IA, a buyer of property worth ₹50 lakh or more (sale price or stamp duty value) deducts 1% TDS from the payment to a resident seller and deposits it with Form 26QB. For an NRI seller, the buyer deducts tax under section 195 at higher rates.",
  },
  {
    q: "How can I save capital gains tax on selling property?",
    a: "Reinvest the gain in a residential house under section 54 (or the full sale proceeds under 54F if you sold a plot or other asset), up to ₹10 crore, or invest up to ₹50 lakh in 54EC bonds within six months. Money not reinvested before the ITR due date can be parked in the Capital Gains Account Scheme.",
  },
  {
    q: "What if I sell below the DLC rate in Rajasthan?",
    a: "If the stamp duty value (the DLC rate in Rajasthan) is more than 110% of the sale price, the stamp duty value is treated as your sale price for capital gains under section 50C. The buyer may also be taxed on the difference.",
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <h2 id="short-or-long">Short-term or long-term?</h2>
      <p>
        For land and buildings, the line is <strong>24 months</strong>. Sell within 24 months of buying and the profit is
        a short-term capital gain, added to your income and taxed at your slab rate. Hold longer than 24 months and it is a
        long-term capital gain (LTCG), taxed at a flat rate.
      </p>

      <h2 id="rates">Tax rates and the indexation choice</h2>
      <p>
        For transfers on or after <strong>23 July 2024</strong>, LTCG on property is taxed at <strong>12.5% without
        indexation</strong>. There is one important option: if you are a <strong>resident individual or HUF</strong> and
        bought the property <strong>before 23 July 2024</strong>, you can work out the tax both ways and pay the lower of:
      </p>
      <ul>
        <li><strong>12.5%</strong> on the gain without indexation, or</li>
        <li><strong>20%</strong> on the gain after indexing the purchase cost with the Cost Inflation Index (CII).</li>
      </ul>
      <p>Health and education cess of 4% applies on top, plus surcharge at higher income levels.</p>

      <h2 id="examples">Two worked examples</h2>
      <p>Both sales below happened in FY 2025-26 (CII 376), before cess.</p>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th></th><th>Plot in Pal Road</th><th>Flat in Shastri Nagar</th></tr></thead>
          <tbody>
            <tr><td>Bought</td><td>2012-13 for ₹20 lakh (CII 200)</td><td>2018-19 for ₹50 lakh (CII 280)</td></tr>
            <tr><td>Sold</td><td>₹80 lakh</td><td>₹70 lakh</td></tr>
            <tr><td>12.5% without indexation</td><td>Gain ₹60 lakh → <strong>₹7,50,000</strong></td><td>Gain ₹20 lakh → ₹2,50,000</td></tr>
            <tr><td>20% with indexation</td><td>Indexed cost ₹37.6 lakh, gain ₹42.4 lakh → ₹8,48,000</td><td>Indexed cost ₹67.14 lakh, gain ₹2.86 lakh → <strong>₹57,143</strong></td></tr>
            <tr><td>Better option</td><td>12.5%</td><td>20% with indexation</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The pattern: for property bought long ago that has appreciated a lot, 12.5% usually wins. For recent purchases
        with modest gains, indexation usually wins. Always run both.
      </p>

      <h2 id="dlc-rate">Selling below the DLC rate</h2>
      <p>
        In Rajasthan, stamp duty is charged on the <strong>DLC (District Level Committee) rate</strong>. Under section
        50C, if the DLC value is more than <strong>110% of the agreed price</strong>, the DLC value is treated as your
        sale price for capital gains. If you believe the DLC rate is higher than the property&apos;s fair value, you can
        ask for a reference to the Valuation Officer.
      </p>

      <h2 id="tds">TDS when you buy or sell</h2>
      <ul>
        <li><strong>Resident seller:</strong> the buyer deducts <strong>1% TDS</strong> under section 194-IA if the price or the stamp value is <strong>₹50 lakh or more</strong>, deposits it with <strong>Form 26QB</strong> within 30 days from the end of the month, and gives the seller Form 16B.</li>
        <li><strong>NRI seller:</strong> the buyer deducts tax under section 195 on the gain at the applicable rate, which is much higher. NRI sellers can apply for a lower-deduction certificate before the sale.</li>
      </ul>
      <p>
        Buyers who forget the TDS face interest and late fees. If you buy property regularly as a business, our{" "}
        <Link href="/services/tds-tcs-compliance-jodhpur">TDS service</Link> can handle the filings.
      </p>

      <h2 id="exemptions">Ways to save tax: sections 54, 54F and 54EC</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead><tr><th>Section</th><th>You sold</th><th>Reinvest in</th><th>Key conditions</th></tr></thead>
          <tbody>
            <tr><td>54</td><td>A residential house</td><td>Another residential house in India</td><td>Buy 1 year before or 2 years after, or build within 3 years; exemption capped at ₹10 crore</td></tr>
            <tr><td>54F</td><td>A plot or any other long-term asset</td><td>A residential house in India</td><td>Invest the net sale proceeds; you must not own more than one other house; capped at ₹10 crore</td></tr>
            <tr><td>54EC</td><td>Land or building</td><td>Specified bonds (NHAI, REC, PFC, IRFC)</td><td>Within 6 months of sale; up to ₹50 lakh; 5-year lock-in</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        If you haven&apos;t reinvested by the ITR due date, deposit the amount in the <strong>Capital Gains Account
        Scheme</strong> at a bank before the due date to keep the exemption open.
      </p>

      <h2 id="reporting">Reporting the sale</h2>
      <ol>
        <li>Pay <strong>advance tax</strong> on the gain in the instalment after the sale, to avoid interest.</li>
        <li>Report it in <strong>Schedule CG</strong> of ITR-2 (or ITR-3 if you have business income), with purchase and sale dates, costs and any exemption claimed.</li>
        <li>Check that the buyer&apos;s 1% TDS shows in your Form 26AS and AIS.</li>
      </ol>
      <p>
        For sales from 1 April 2026, these rules continue under the{" "}
        <Link href="/blog/income-tax-act-2025-changes">Income-tax Act, 2025</Link> with new section numbers, so confirm
        the current references when you file.
      </p>
      <p>
        <strong>Selling soon?</strong> Talk to us before you sign. We&apos;ll compare both tax options, check the DLC value
        and plan any reinvestment. See <Link href="/services/income-tax-advisory-jodhpur">tax advisory</Link> and{" "}
        <Link href="/services/itr-filing-jodhpur">ITR filing</Link>.
      </p>
    </ArticleLayout>
  );
}
