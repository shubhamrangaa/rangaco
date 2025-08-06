import BlogTemplate from "@/components/BlogTemplate";

const incomeTaxNoticeReplyPost = {
  title: "Income-Tax Notice Reply & Scrutiny Support in Jodhpur",
  content: `
    <h2>Common Notices We Resolve</h2>
    <ul>
      <li><strong>Section 143(1)</strong> adjustment</li>
      <li><strong>Section 143(2)</strong> scrutiny</li>
      <li><strong>Section 148</strong> income escape</li>
    </ul>
    
    <h2>End-to-End Representation</h2>
    <p>We draft replies, upload them on the portal, and attend hearings—online or at the Jodhpur ward office.</p>
    
    <h2>Flat-Fee Packages</h2>
    <p>Notices up to ₹10 lakh demand: <strong>₹7,500</strong><br/>
    Higher complexity quoted after review.</p>
  `,
  relatedPosts: [
    {
      title: "Income-Tax Advisory & Planning",
      description:
        "Expert tax planning and advisory services to optimize your tax liability.",
      href: "/services/income-tax-advisory-jodhpur",
    },
    {
      title: "Statutory & Internal Audit",
      description:
        "Professional audit services to ensure compliance and financial transparency.",
      href: "/services/statutory-audit-jodhpur",
    },
    {
      title: "ITR Filing Services",
      description:
        "Professional ITR filing services with expert guidance and fast processing times.",
      href: "/services/itr-filing-jodhpur",
    },
  ],
};

export default function IncomeTaxNoticeReplyPage() {
  return <BlogTemplate post={incomeTaxNoticeReplyPost} />;
}
