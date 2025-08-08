import BlogTemplate from "@/components/BlogTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Return Filing Services in Jodhpur | GSTR-3B & GSTR-1 Filing | RangaCo",
  description:
    "Professional GST return filing services in Jodhpur. File GSTR-3B & GSTR-1 on time to avoid ₹50/day late fees. Input tax credit reconciliation included. Plans from ₹799 per return. Expert GST return filing support.",
  keywords:
    "GST return filing Jodhpur, GSTR-3B filing, GSTR-1 filing, GST return filing services, GST return filing consultant, GST return filing fees, GST return filing online, GST return filing Rajasthan, GST return filing support, GST return filing assistance, input tax credit reconciliation",
  openGraph: {
    title: "GST Return Filing Services in Jodhpur | GSTR-3B & GSTR-1 Filing",
    description:
      "Professional GST return filing services in Jodhpur. File GSTR-3B & GSTR-1 on time to avoid late fees. Plans from ₹799 per return.",
    type: "website",
    locale: "en_IN",
    url: "https://rangaco.com/services/gst-return-filing-jodhpur",
    siteName: "RangaCo",
    images: [
      {
        url: "/service-2-409fe6.png",
        width: 1200,
        height: 630,
        alt: "GST Return Filing Services in Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing Services in Jodhpur | GSTR-3B & GSTR-1 Filing",
    description:
      "Professional GST return filing services in Jodhpur. File GSTR-3B & GSTR-1 on time to avoid late fees.",
    images: ["/service-2-409fe6.png"],
  },
  alternates: {
    canonical: "https://rangaco.com/services/gst-return-filing-jodhpur",
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
