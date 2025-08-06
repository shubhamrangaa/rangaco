import BlogTemplate from "@/components/BlogTemplate";

const tdsTcsCompliancePost = {
  title: "TDS & TCS Compliance Services in Jodhpur",
  content: `
    <h2>Key TDS/TCS Deadlines for FY 2025-26</h2>
    <ul>
      <li>Tax deposit: <strong>7th</strong> of next month</li>
      <li>Q1 return: <strong>31 July</strong> | Q2: 31 Oct | Q3: 31 Jan | Q4: 31 May</li>
    </ul>
    
    <h2>How We Keep You Compliant</h2>
    <ul>
      <li>PAN validation & TAN application (if required)</li>
      <li>Accurate challan creation (ITNS-281)</li>
      <li>Form 16/16A generation and distribution</li>
    </ul>
    
    <h2>Packages & Support</h2>
    <p>Up to 200 lines per quarter from <strong>₹2,500</strong>. Correction statements billed separately.</p>
  `,
  relatedPosts: [
    {
      title: "TAN Application & PAN Services",
      description:
        "Professional assistance with TAN application and PAN-related services for compliance.",
      href: "/services/tds-tcs-compliance-jodhpur#tan",
    },
    {
      title: "Statutory & Internal Audit",
      description:
        "Professional audit services to ensure compliance and financial transparency.",
      href: "/services/statutory-audit-jodhpur",
    },
    {
      title: "Virtual CFO for SMEs",
      description:
        "Strategic financial guidance and CFO-level support for small and medium enterprises.",
      href: "/services/virtual-cfo-jodhpur",
    },
  ],
};

export default function TDSTCSCompliancePage() {
  return <BlogTemplate post={tdsTcsCompliancePost} />;
}
