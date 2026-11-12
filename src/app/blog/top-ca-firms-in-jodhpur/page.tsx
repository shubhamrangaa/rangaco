import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout, { type Faq, type TocItem } from "@/components/blog/ArticleLayout";
import { getPost } from "@/lib/blog/posts";

const post = getPost("/blog/top-ca-firms-in-jodhpur");
const RATINGS_AS_OF = "13 November 2026";

export const metadata: Metadata = {
  title: "8 Best CA Firms & Tax Consultants in Jodhpur (2026) | Ranga & Company",
  description: post.description,
  alternates: { canonical: post.href },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: post.href,
    publishedTime: post.published,
    modifiedTime: post.updated ?? post.published,
    authors: [post.author.url],
    images: [{ url: post.image!, width: 1600, height: 840, alt: post.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [post.image!],
  },
};

// "Tax filing" -> "tax filing", but keep acronyms like "GST" / "ITRs" intact.
const lowerFirst = (s: string) => (/^[A-Z][a-z]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);

type Firm = {
  id: string;
  name: string;
  bestFor: string;
  pricing: string;
  rating: string;
  area: string;
  website?: string;
  summary: string;
  mentions: string;
  watchOut: string;
};

// Ratings and review topics read from each firm's Google Business Profile on RATINGS_AS_OF.
const FIRMS: Firm[] = [
  {
    id: "ranga-and-company",
    name: "Ranga & Company",
    bestFor: "ITR, GST and TDS under one roof for individuals and small businesses",
    pricing: "Published starting fees: ITR from ₹1,200, GST return from ₹799",
    rating: "5.0 (1 review)",
    area: "Abhay Chambers, Jalori Gate",
    website: "https://rangaco.com",
    summary:
      "Ranga & Company is a Jodhpur tax consultancy that has served individuals and businesses since 1988. It handles income-tax returns, GST registration and returns, TDS/TCS, accounting and payroll, and replies to income-tax notices. It works with a partner CA firm for tax audits, statutory audits and certificates.",
    mentions:
      "With a single Google review there is no review pattern yet; the published fee list on the website is the clearest guide to scope and price.",
    watchOut:
      "Audits and certificates are signed by the partner CA firm rather than in-house, and there is little public review history so far.",
  },
  {
    id: "abhishek-verma-associates",
    name: "CA Abhishek Verma & Associates (U R My Consultant)",
    bestFor: "Tax filing alongside investment and insurance planning",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (420 reviews)",
    area: "Bombay Motor Circle",
    website: "https://urmyconsultant.website3.me",
    summary:
      "The most-reviewed CA practice in our Google Maps search of Jodhpur. Alongside tax and GST filing, the practice runs U R My Consultant, which offers mutual funds, SIPs and insurance, so clients can handle tax and investments in one place.",
    mentions:
      "Financial guidance (22 reviews), clear explanations (19), investment advice (8) and GST filing (7).",
    watchOut:
      "Investment products are part of the practice. Ask for tax fees and any investment commissions to be stated separately.",
  },
  {
    id: "m-rathi-and-co",
    name: "M Rathi & Co. (CA Mukesh Rathi)",
    bestFor: "ITR filing, valuation reports and net-worth certificates",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (295 reviews)",
    area: "Kasturi Plaza, Bombay Motor Circle; second office at Manji Ka Hatha",
    website: "https://cajodhpur.com",
    summary:
      "A chartered accountancy firm that also lists insolvency-professional and registered-valuer credentials. That makes it a natural fit when you need a valuation report or a net-worth certificate (for a visa, loan or tender) alongside your return.",
    mentions:
      "Income tax return filing (18 reviews), net-worth certificates (3), valuation reports (3) and GST returns (2).",
    watchOut:
      "Fees are not listed online, and ITR season is its busiest period, so book early for certificate work.",
  },
  {
    id: "magraj-bohra-associates",
    name: "Magraj Bohra & Associates",
    bestFor: "ITRs with share-trading income and tax-refund cases",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (251 reviews)",
    area: "Paota Circle",
    summary:
      "A Paota-based CA firm whose reviewers single out returns involving share transactions. It is a strong option if you trade shares or are chasing a delayed refund.",
    mentions:
      "Refunds (12 reviews), income tax return filing (9), GST returns (4) and disputed insurance claims (2).",
    watchOut:
      "No website, so confirm the scope (capital-gains computation, revisions, notice support) in writing before you share broker statements.",
  },
  {
    id: "gaurav-chopra-associates",
    name: "Gaurav Chopra & Associates",
    bestFor: "Company incorporation and ongoing compliance",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (140 reviews)",
    area: "AKS Heights, C Road, Sardarpura",
    summary:
      "A Sardarpura CA firm whose reviews highlight compliance knowledge, and one describes the firm setting up a company and guiding the client through the process. It is a good fit for founders who want incorporation followed by ROC and tax compliance from the same team.",
    mentions:
      "Compliance knowledge (5 reviews), ethical practices (5), taxation guidance (2) and tax filing (2).",
    watchOut: "No website or published fees. Ask for an annual compliance package quote.",
  },
  {
    id: "ca-manish-rathi",
    name: "CA Manish Rathi",
    bestFor: "GST-heavy businesses and exporters (refunds, LUT)",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (120 reviews)",
    area: "Amrit Kalash, near Bombay Motor Circle",
    summary:
      "GST is the most-mentioned topic in this practice's reviews, and exporters mention GST refunds and Letters of Undertaking (LUT). That makes it a fit for traders and manufacturers whose main compliance load is indirect tax.",
    mentions:
      "GST work (14 reviews), business consulting (6), tax audits (3) and GST returns (2).",
    watchOut:
      "Listed under CA Manish Rathi's own name (not to be confused with CA Mukesh Rathi above). Ask who will handle your file in peak season.",
  },
  {
    id: "m-mundra-and-company",
    name: "M. Mundra & Company",
    bestFor: "Hands-on GST and income-tax filing for small businesses",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (55 reviews)",
    area: "Johari Apartment, Police Line Road, Ratanada",
    summary:
      "A Ratanada CA firm whose reviewers mention GST guidance and cooperative staff. It suits small businesses that want someone to walk them through GST rather than just file it.",
    mentions: "GST guidance (7 reviews), cooperative staff (4) and income tax filing (2).",
    watchOut: "Smaller review base than the firms above; no published fees.",
  },
  {
    id: "bhati-and-company",
    name: "Bhati And Company",
    bestFor: "Routine taxation and GST for small traders",
    pricing: "Quote on request (fees not published)",
    rating: "5.0 (49 reviews)",
    area: "Tempo Stand Street, Pratap Nagar",
    summary:
      "A Pratap Nagar CA firm with reviews going back several years. Reviewers mention its taxation and GST expertise and timely delivery.",
    mentions: "Taxation (4 reviews), timely work (2) and expert knowledge (2).",
    watchOut: "Most reviews are several years old, so ask about current team size and turnaround.",
  },
];

const TOC: TocItem[] = [
  { id: "what-is-a-ca-firm", label: "What is a CA firm?" },
  { id: "at-a-glance", label: "CA firms in Jodhpur at a glance" },
  { id: "how-we-evaluated", label: "How we evaluated these firms" },
  { id: "best-ca-firms", label: "The 8 best CA firms & tax consultants" },
  { id: "how-to-choose", label: "How to choose a CA firm" },
  { id: "why-ranga", label: "Why clients choose Ranga & Company" },
];

const TAKEAWAYS: React.ReactNode[] = [
  <>
    <strong>Our pick: Ranga & Company</strong> (our own firm) for individuals and small businesses who want ITR, GST and
    TDS in one place with published fees (ITR from ₹1,200, GST returns from ₹799).
  </>,
  <>
    <strong>Most reviewed on Google:</strong> CA Abhishek Verma & Associates (5.0, 420 reviews) and M Rathi & Co. (5.0,
    295 reviews), as of {RATINGS_AS_OF}.
  </>,
  <>
    <strong>By need:</strong> Magraj Bohra & Associates for share-trading ITRs and refunds, CA Manish Rathi for GST and
    exports, Gaurav Chopra & Associates for company setup.
  </>,
  <>
    <strong>CA vs tax consultant:</strong> only a practising CA can sign a tax audit or statutory audit, or issue a
    certificate with a UDIN. Either can file your returns.
  </>,
  <>
    <strong>Fees:</strong> none of the seven CA firms listed publish fees online. Get the scope and price in writing
    before you share documents.
  </>,
];

const FAQS: Faq[] = [
  {
    q: "Which is the best CA firm in Jodhpur?",
    a: `There is no single best CA firm in Jodhpur; it depends on the work. On Google reviews as of ${RATINGS_AS_OF}, CA Abhishek Verma & Associates (5.0, 420 reviews) and M Rathi & Co. (5.0, 295 reviews) are the most reviewed. For ITR, GST and TDS under one roof with published fees, we recommend Ranga & Company, which publishes this guide.`,
  },
  {
    q: "How much does a CA charge for ITR filing in Jodhpur?",
    a: "Most Jodhpur CA firms do not publish fees and quote after seeing your income sources. As a reference point, Ranga & Company's ITR filing starts at ₹1,200. Returns with capital gains, business income or foreign assets usually cost more because they need extra schedules and reconciliation.",
  },
  {
    q: "What is the difference between a CA and a tax consultant?",
    a: "A chartered accountant is a member of the Institute of Chartered Accountants of India (ICAI). Only a practising CA can sign a tax audit report under section 44AB, audit company accounts, or issue certificates with a UDIN. A tax consultant can prepare and file ITR, GST and TDS returns and handle routine compliance.",
  },
  {
    q: "Do I need a CA for GST registration in Jodhpur?",
    a: "No. GST registration can be done yourself on the GST portal, or by a tax consultant or GST practitioner; a CA is not legally required. Most businesses use a professional to avoid rejections caused by document mismatches. Ranga & Company's GST registration starts at ₹2,999 with a 3–5 working day turnaround.",
  },
  {
    q: "When is a tax audit mandatory?",
    a: "For FY 2025-26, a tax audit under section 44AB is required when business turnover exceeds ₹1 crore (₹10 crore if cash receipts and cash payments are each within 5% of the total), or when professional receipts exceed ₹50 lakh (₹75 lakh if cash receipts are within 5%). It can also apply to some presumptive-tax cases. A practising CA must sign it.",
  },
  {
    q: "How can I check if a CA in Jodhpur is genuine?",
    a: "Ask for the CA's ICAI membership number and the firm's registration number (FRN), and check them on the ICAI website. Every audit report or certificate a CA signs must carry a UDIN (Unique Document Identification Number), which anyone can verify at udin.icai.org.",
  },
  {
    q: "What documents do I need to file my ITR with a CA?",
    a: "PAN and Aadhaar, bank account details, Form 16 if you are salaried, your Annual Information Statement (AIS) and Form 26AS, capital-gains statements from your broker, details of rent or interest income, and proof of deductions such as 80C and 80D if you file under the old tax regime.",
  },
  {
    q: "Can I work with a Jodhpur CA firm online?",
    a: "Yes. Most firms on this list, including Ranga & Company, accept documents over WhatsApp or email and file returns online, and several Google listings offer online appointments. Returns are e-verified with an Aadhaar OTP, so an office visit is rarely needed.",
  },
  {
    q: "How did you choose the firms on this list?",
    a: `We read Google Business Profiles for chartered accountants in Jodhpur on ${RATINGS_AS_OF} and shortlisted firms rated 4.8 or higher with at least 40 reviews. We excluded businesses whose reviews were mainly about other services. Ranga & Company is listed first because we publish this guide; the rest are ordered by number of Google reviews.`,
  },
];

export default function Page() {
  return (
    <ArticleLayout post={post} toc={TOC} takeaways={TAKEAWAYS} faqs={FAQS}>
      <p className="rounded-2xl border border-brand/20 bg-brand-soft px-5 py-4 text-[15px] leading-6">
        <strong>Disclosure:</strong> this guide is published by Ranga & Company, which is ranked first. Every other
        entry is based on public Google Business Profile data as of {RATINGS_AS_OF}. We have not engaged these firms as
        clients.
      </p>

      <h2 id="what-is-a-ca-firm">What is a CA firm?</h2>
      <p>
        A CA firm is a practice of chartered accountants registered with the Institute of Chartered Accountants of India
        (ICAI). Each firm has a Firm Registration Number (FRN), and its partners hold a Certificate of Practice. In
        Jodhpur, CA firms typically handle:
      </p>
      <ul>
        <li>Income-tax returns for salaried people, traders, professionals and NRIs</li>
        <li>GST registration, monthly and quarterly returns, and GST refunds for exporters</li>
        <li>TDS/TCS deduction, returns and Form 16/16A</li>
        <li>Tax audits, statutory audits of companies, and certificates (net worth, turnover, utilisation)</li>
        <li>Company and LLP incorporation and annual ROC filings</li>
        <li>Replies to income-tax and GST notices</li>
      </ul>
      <p>
        <strong>CA firm or tax consultant?</strong> Audits and certificates are reserved for practising CAs and must carry
        a UDIN. Filing returns, GST and TDS compliance and bookkeeping can be done by a CA firm or a tax consultant. Many
        Jodhpur businesses use a tax consultant for routine work and a CA for audits, which is how Ranga & Company works
        with its partner CA firm.
      </p>
      <p>
        Most of the city&apos;s CA offices cluster around Bombay Motor Circle, Sardarpura and Paota, close to the
        Income Tax office on Paota C Road.
      </p>

      <h2 id="at-a-glance">CA firms in Jodhpur at a glance</h2>
      <p>Google ratings as of {RATINGS_AS_OF}.</p>
      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table>
          <thead>
            <tr>
              <th scope="col">Firm</th>
              <th scope="col">Best for</th>
              <th scope="col">Pricing model</th>
              <th scope="col">Google rating</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f, i) => (
              <tr key={f.id}>
                <th scope="row" className="!bg-white">
                  <a href={`#${f.id}`} className="!no-underline">
                    {i + 1}. {f.name}
                  </a>
                </th>
                <td>{f.bestFor}</td>
                <td>{f.pricing}</td>
                <td className="whitespace-nowrap">{f.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="how-we-evaluated">How we evaluated these firms</h2>
      <ol>
        <li>
          <strong>Source.</strong> We read the Google Business Profiles that appear for chartered accountants in
          Jodhpur on {RATINGS_AS_OF}.
        </li>
        <li>
          <strong>Shortlist.</strong> Firms rated 4.8 or higher with at least 40 reviews, so each rating rests on a
          meaningful sample. We dropped listings whose reviews are mainly about other services, such as mutual-fund
          distribution.
        </li>
        <li>
          <strong>&ldquo;Best for&rdquo;.</strong> Based on the topics Google highlights in each firm&apos;s reviews
          (&ldquo;mentioned in N reviews&rdquo;) and the firm&apos;s own listing or website.
        </li>
        <li>
          <strong>Pricing model.</strong> Taken from the firm&apos;s website or listing. Where no fees are published we
          say so rather than guess.
        </li>
        <li>
          <strong>Order.</strong> Ranga & Company first, as the publisher of this guide; the rest by number of Google
          reviews.
        </li>
      </ol>
      <p>
        We did not verify ICAI registrations or engage these firms as clients. Check a firm&apos;s FRN on the ICAI
        website before you sign up.
      </p>

      <h2 id="best-ca-firms">The 8 best CA firms & tax consultants in Jodhpur (2026)</h2>
      {FIRMS.map((f, i) => (
        <section key={f.id}>
          <h3 id={f.id}>
            {i + 1}. {f.name}: best for {lowerFirst(f.bestFor)}
          </h3>
          <p>{f.summary}</p>
          <ul>
            <li>
              <strong>Google rating:</strong> {f.rating}
            </li>
            <li>
              <strong>Location:</strong> {f.area}
            </li>
            <li>
              <strong>Pricing model:</strong> {f.pricing}
            </li>
            <li>
              <strong>What reviewers mention:</strong> {f.mentions}
            </li>
            <li>
              <strong>Keep in mind:</strong> {f.watchOut}
            </li>
            {f.website && (
              <li>
                <strong>Website:</strong>{" "}
                <a href={f.website} rel={i === 0 ? undefined : "nofollow noopener"} target={i === 0 ? undefined : "_blank"}>
                  {f.website.replace(/^https?:\/\//, "")}
                </a>
              </li>
            )}
          </ul>
        </section>
      ))}

      <h2 id="how-to-choose">How to choose a CA firm in Jodhpur</h2>
      <h3>1. Match the firm to the work</h3>
      <p>
        Filing ITR, GST and TDS returns can be done by a CA firm or a tax consultant. Tax audits, company audits and
        certificates need a practising CA. If you need both, choose a firm that covers both or works with a partner CA.
      </p>
      <h3>2. Verify credentials</h3>
      <p>
        Ask for the ICAI membership number and FRN and check them on the ICAI website. Any certificate you receive
        should carry a UDIN you can verify at udin.icai.org.
      </p>
      <h3>3. Get the scope and fee in writing</h3>
      <p>
        Confirm what the fee covers: revised returns, GST annual returns, replies to notices, and how many queries are
        included. Ask how documents are shared and stored.
      </p>
      <h3>4. Test responsiveness before deadline season</h3>
      <p>
        July (ITR) and the 20th of each month (GSTR-3B) are the crunch points. Send a query in a quiet month and see how
        quickly and clearly you get an answer.
      </p>
      <h3>5. Read the reviews, not just the stars</h3>
      <p>
        Almost every firm here is rated 5.0, so the star rating alone does not separate them. Look at what reviewers
        mention and how recent the reviews are.
      </p>

      <h2 id="why-ranga">Why Jodhpur clients choose Ranga & Company</h2>
      <p>
        We have handled tax and compliance for Jodhpur families and businesses since 1988, from our office at Abhay
        Chambers, Jalori Gate. Our fees are published up front:
      </p>
      <ul>
        <li>
          <Link href="/services/itr-filing-jodhpur">ITR filing</Link> from ₹1,200
        </li>
        <li>
          <Link href="/services/gst-return-filing-jodhpur">GST return filing</Link> from ₹799 per return
        </li>
        <li>
          <Link href="/services/gst-registration-jodhpur">GST registration</Link> from ₹2,999
        </li>
        <li>
          <Link href="/services/tds-tcs-compliance-jodhpur">TDS & TCS compliance</Link> from ₹2,500
        </li>
        <li>
          <Link href="/services/accounting-payroll-jodhpur">Accounting & payroll</Link> from ₹5,000 a month
        </li>
      </ul>
      <p>
        Audits and certificates are handled with our partner CA firm. Call{" "}
        <a href="tel:+919829021030">+91 98290 21030</a> or{" "}
        <a href="https://wa.me/919829021030" target="_blank" rel="noopener">
          message us on WhatsApp
        </a>{" "}
        for a free 15-minute consultation.
      </p>
    </ArticleLayout>
  );
}
