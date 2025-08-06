import BlogTemplate from "@/components/BlogTemplate";

const statutoryAuditPost = {
  title: "Statutory & Internal Audit Firm in Jodhpur",
  content: `
    <h2>When Is a Statutory Audit Mandatory?</h2>
    <p>Companies Act 2013 makes audit compulsory if turnover exceeds <strong>₹40 lakh</strong> or paid-up capital is over <strong>₹25 lakh</strong>.</p>
    
    <h2>Our Audit Methodology</h2>
    <ol>
      <li><strong>Planning & Risk Assessment</strong></li>
      <li><strong>Field Work: Ledger Testing & Stock Verification</strong></li>
      <li><strong>Reporting: CARO Checklist & Management Letter</strong></li>
    </ol>
    
    <h2>Audit Fee Range</h2>
    <ul>
      <li>Small company: <strong>₹50k–₹1.5 lakh</strong></li>
      <li>Medium enterprise: quotation after scoping</li>
    </ul>
  `,
  relatedPosts: [
    {
      title: "Accounting & Payroll Outsourcing",
      description:
        "Comprehensive accounting and payroll services to streamline your business operations.",
      href: "/services/accounting-payroll-jodhpur",
    },
    {
      title: "Virtual CFO Services",
      description:
        "Strategic financial guidance and CFO-level support for small and medium enterprises.",
      href: "/services/virtual-cfo-jodhpur",
    },
    {
      title: "TDS & TCS Compliance",
      description:
        "Comprehensive TDS and TCS compliance services to ensure timely filing and avoid penalties.",
      href: "/services/tds-tcs-compliance-jodhpur",
    },
  ],
};

export default function StatutoryAuditPage() {
  return <BlogTemplate post={statutoryAuditPost} />;
}
