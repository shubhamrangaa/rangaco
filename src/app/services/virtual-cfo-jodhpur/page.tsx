import BlogTemplate from "@/components/BlogTemplate";

const virtualCFOPost = {
  title: "Virtual CFO Services for SMEs in Jodhpur",
  content: `
    <h2>Strategic Finance without Full-Time Cost</h2>
    <p>Our Virtual CFO attends board meetings, builds budgets, and sets KPIs so you make data-driven decisions.</p>
    
    <h2>Key Deliverables</h2>
    <ul>
      <li>Monthly MIS dashboard</li>
      <li>Cash-flow forecasting</li>
      <li>Investor deck financials</li>
    </ul>
    
    <h2>Engagement Models</h2>
    <ul>
      <li>Lite: review call + MIS – <strong>₹25k/month</strong></li>
      <li>Growth: on-site visit + budgeting – <strong>₹40k/month</strong></li>
    </ul>
  `,
  relatedPosts: [
    {
      title: "Outsourced Accounting & Payroll",
      description:
        "Comprehensive accounting and payroll services to streamline your business operations.",
      href: "/services/accounting-payroll-jodhpur",
    },
    {
      title: "Statutory & Internal Audit",
      description:
        "Professional audit services to ensure compliance and financial transparency.",
      href: "/services/statutory-audit-jodhpur",
    },
    {
      title: "Income-Tax Advisory",
      description:
        "Expert tax planning and advisory services to optimize your tax liability.",
      href: "/services/income-tax-advisory-jodhpur",
    },
  ],
};

export default function VirtualCFOPage() {
  return <BlogTemplate post={virtualCFOPost} />;
}
