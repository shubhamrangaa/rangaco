import BlogTemplate from "@/components/BlogTemplate";

const itrFilingPost = {
  title: "Income-Tax Return (ITR) Filing in Jodhpur",
  content: `
    <h2>Why Timely ITR Filing Matters</h2>
    <p>Missing the 31 July due date attracts late-fee up to ₹5,000 and higher chances of notice. A correct return also unlocks faster refunds and smoother loan processing.</p>
    
    <h2>Our 3-Step ITR Process</h2>
    <ol>
      <li><strong>Document Review</strong> – Upload Form 16, bank statements, trading summaries, rental details.</li>
      <li><strong>Return Preparation</strong> – We select the right ITR form, claim 80C, 80D and house-rent deductions.</li>
      <li><strong>E-Filing & Acknowledgment</strong> – Return filed within 24 hours; you receive an ITR-V instantly.</li>
    </ol>
    
    <h2>Required Documents & Pricing</h2>
    <ul>
      <li>PAN, Aadhaar, Form 16 / Profit-and-Loss statement</li>
      <li>Interest and dividend certificates</li>
      <li>Proof of tax-saving investments</li>
    </ul>
    <p>Prices start at <strong>₹1,200</strong> for salaried individuals and <strong>₹2,500</strong> for businesses.</p>
  `,
  relatedPosts: [
    {
      title: "Income-Tax Advisory in Jodhpur",
      description:
        "Expert tax planning and advisory services to optimize your tax liability and maximize savings.",
      href: "/services/income-tax-advisory-jodhpur",
    },
    {
      title: "Income-Tax Notice Reply Support",
      description:
        "Professional assistance with income tax notices and scrutiny proceedings.",
      href: "/services/income-tax-notice-reply-jodhpur",
    },
    {
      title: "Outsourced Accounting & Payroll",
      description:
        "Comprehensive accounting and payroll services to streamline your business operations.",
      href: "/services/accounting-payroll-jodhpur",
    },
  ],
};

export default function ITRFilingPage() {
  return <BlogTemplate post={itrFilingPost} />;
}
