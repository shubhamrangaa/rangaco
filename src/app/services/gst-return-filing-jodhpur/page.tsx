import BlogTemplate from "@/components/BlogTemplate";

const gstReturnFilingPost = {
  title: "GST Return Filing (GSTR-3B & GSTR-1) in Jodhpur",
  content: `
    <h2>Avoid Late Fees & Interest</h2>
    <p>GSTR-3B late fee is ₹50 per day; interest is 18% on unpaid tax. Our monthly filing plans prevent both.</p>
    
    <h2>Reconciliation for 100% Input-Tax Credit</h2>
    <p>We match purchase entries with <strong>GSTR-2B</strong>. Any mismatch is flagged so you never lose credit.</p>
    
    <h2>Monthly Service Deliverables</h2>
    <ul>
      <li>GSTR-3B & GSTR-1 preparation and upload</li>
      <li>Challan creation and tax-payment reminder</li>
      <li>WhatsApp confirmation plus PDF copy of filed return</li>
    </ul>
    <p>Plans from <strong>₹799</strong> per return.</p>
  `,
  relatedPosts: [
    {
      title: "GST Registration Services",
      description:
        "Complete GST registration support with end-to-end assistance and fast turnaround times.",
      href: "/services/gst-registration-jodhpur",
    },
    {
      title: "GST Refund Assistance",
      description:
        "Professional assistance with GST refund applications and processing.",
      href: "/services/gst-refund-assistance-jodhpur",
    },
    {
      title: "Accounting & Payroll Outsourcing",
      description:
        "Comprehensive accounting and payroll services to streamline your business operations.",
      href: "/services/accounting-payroll-jodhpur",
    },
  ],
};

export default function GSTReturnFilingPage() {
  return <BlogTemplate post={gstReturnFilingPost} />;
}
