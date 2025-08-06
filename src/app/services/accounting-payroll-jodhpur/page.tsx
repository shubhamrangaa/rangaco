import BlogTemplate from "@/components/BlogTemplate";

const accountingPayrollPost = {
  title: "Outsourced Accounting & Payroll Services in Jodhpur",
  content: `
    <h2>Core Bookkeeping Tasks We Handle</h2>
    <ul>
      <li>Sales, purchase and bank entries in Tally/Zoho</li>
      <li>Monthly GST and TDS reconciliation</li>
      <li>Year-end financial statements</li>
    </ul>
    
    <h2>Payroll Made Simple</h2>
    <p>Employees receive payslips on time; PF, ESI and PT returns filed before due dates.</p>
    
    <h2>Pricing & Software Options</h2>
    <p>Starter plan: <strong>₹5,000/month</strong> for up to 200 vouchers. Choose Tally, Zoho Books or QuickBooks.</p>
  `,
  relatedPosts: [
    {
      title: "Statutory & Internal Audit",
      description:
        "Professional audit services to ensure compliance and financial transparency.",
      href: "/services/statutory-audit-jodhpur",
    },
    {
      title: "Virtual CFO Services",
      description:
        "Strategic financial guidance and CFO-level support for small and medium enterprises.",
      href: "/services/virtual-cfo-jodhpur",
    },
    {
      title: "GST Return Filing",
      description:
        "Professional GST return filing services to keep your business compliant and avoid penalties.",
      href: "/services/gst-return-filing-jodhpur",
    },
  ],
};

export default function AccountingPayrollPage() {
  return <BlogTemplate post={accountingPayrollPost} />;
}
