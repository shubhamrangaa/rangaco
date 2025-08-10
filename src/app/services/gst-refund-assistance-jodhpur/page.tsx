import BlogTemplate from "@/components/BlogTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Refund Assistance Services in Jodhpur | Professional GST Refund Support | RangaCo",
  description:
    "Expert GST refund assistance in Jodhpur. Handle export refunds, inverted duty structure, and excess cash ledger refunds. Service fee 5% of refund (min ₹5,000). Average credit in 4-8 weeks. Professional GST refund support.",
  keywords:
    "GST refund assistance Jodhpur, GST refund services, GST refund consultant, GST refund process, GST refund application, GST refund support, GST refund Rajasthan, export refund GST, inverted duty structure refund, excess cash ledger refund, RFD-01 filing",
  openGraph: {
    title:
      "GST Refund Assistance Services in Jodhpur | Professional GST Refund Support",
    description:
      "Expert GST refund assistance in Jodhpur. Handle export refunds, inverted duty structure, and excess cash ledger refunds. Service fee 5% of refund.",
    type: "website",
    locale: "en_IN",
    url: "https://rangaco.com/services/gst-refund-assistance-jodhpur",
    siteName: "RangaCo",
    images: [
      {
        url: "/gst-compliance-image-50823b.png",
        width: 1200,
        height: 630,
        alt: "GST Refund Assistance Services in Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GST Refund Assistance Services in Jodhpur | Professional GST Refund Support",
    description:
      "Expert GST refund assistance in Jodhpur. Handle export refunds, inverted duty structure, and excess cash ledger refunds.",
    images: ["/gst-compliance-image-50823b.png"],
  },
  alternates: {
    canonical: "https://rangaco.com/services/gst-refund-assistance-jodhpur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
