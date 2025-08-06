import BlogTemplate from "@/components/BlogTemplate";

const gstRegistrationPost = {
  title: "GST Registration Services in Jodhpur",
  content: `
    <h2>Who Must Register for GST in Rajasthan</h2>
    <ul>
      <li>Goods turnover above <strong>₹40 lakh</strong></li>
      <li>Services turnover above <strong>₹20 lakh</strong></li>
      <li>Inter-state e-commerce sellers, even below threshold</li>
    </ul>
    
    <h2>End-to-End Registration Support</h2>
    <p>We fill Form GST REG-01, upload KYC, and track ARN. Any portal clarification is answered within 24 hours to avoid rejection.</p>
    
    <h2>Documents Needed & Turnaround</h2>
    <ul>
      <li>PAN, Aadhaar, photo of proprietor/partner/director</li>
      <li>Address proof (electricity bill / rent agreement)</li>
      <li>Bank statement or cancelled cheque</li>
    </ul>
    <p>Get your GSTIN in <strong>3–5 working days</strong>. Flat fee starts at <strong>₹2,999</strong>.</p>
  `,
  relatedPosts: [
    {
      title: "GST Return Filing (GSTR-3B & 3A)",
      description:
        "Professional GST return filing services to keep your business compliant and avoid penalties.",
      href: "/services/gst-return-filing-jodhpur",
    },
    {
      title: "GST Refund Assistance",
      description:
        "Professional assistance with GST refund applications and processing.",
      href: "/services/gst-refund-assistance-jodhpur",
    },
    {
      title: "TDS & TCS Compliance",
      description:
        "Comprehensive TDS and TCS compliance services to ensure timely filing and avoid penalties.",
      href: "/services/tds-tcs-compliance-jodhpur",
    },
  ],
};

export default function GSTRegistrationPage() {
  return <BlogTemplate post={gstRegistrationPost} />;
}
