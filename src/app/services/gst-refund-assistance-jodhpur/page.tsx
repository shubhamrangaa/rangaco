import BlogTemplate from "@/components/BlogTemplate";

const gstRefundAssistancePost = {
  title: "GST Refund Assistance in Jodhpur",
  content: `
    <h2>Types of Refunds We Handle</h2>
    <ul>
      <li>Export of goods/services (with LUT)</li>
      <li>Inverted duty structure</li>
      <li>Excess cash ledger balance</li>
    </ul>
    
    <h2>Our Refund Workflow</h2>
    <p>Form RFD-01 filing → ARN tracking → clarification reply → refund order follow-up.</p>
    
    <h2>Fees & Timeline</h2>
    <p>Service fee <strong>5% of refund</strong> (min ₹5,000). Avg. credit in 4–8 weeks.</p>
  `,
  relatedPosts: [
    {
      title: "GST Return Filing (GSTR-3B & 3A)",
      description:
        "Professional GST return filing services to keep your business compliant and avoid penalties.",
      href: "/services/gst-return-filing-jodhpur",
    },
    {
      title: "GST Registration Services",
      description:
        "Complete GST registration support with end-to-end assistance and fast turnaround times.",
      href: "/services/gst-registration-jodhpur",
    },
    {
      title: "Income-Tax Advisory",
      description:
        "Expert tax planning and advisory services to optimize your tax liability.",
      href: "/services/income-tax-advisory-jodhpur",
    },
  ],
};

export default function GSTRefundAssistancePage() {
  return <BlogTemplate post={gstRefundAssistancePost} />;
}
