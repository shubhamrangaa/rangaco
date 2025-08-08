import BlogTemplate from "@/components/BlogTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Statutory & Internal Audit Services in Jodhpur | Professional Audit Firm | RangaCo",
  description:
    "Professional statutory and internal audit services in Jodhpur. Mandatory audit for companies with turnover above ₹40 lakh. Complete audit methodology with planning, fieldwork, and reporting. Audit fees from ₹50k to ₹1.5 lakh.",
  keywords:
    "statutory audit Jodhpur, internal audit services, audit firm Jodhpur, statutory audit services, audit consultant Jodhpur, audit services Rajasthan, audit fees, audit methodology, CARO checklist, management letter, audit planning, audit fieldwork, audit reporting",
  openGraph: {
    title:
      "Statutory & Internal Audit Services in Jodhpur | Professional Audit Firm",
    description:
      "Professional statutory and internal audit services in Jodhpur. Mandatory audit for companies with turnover above ₹40 lakh. Audit fees from ₹50k to ₹1.5 lakh.",
    type: "website",
    locale: "en_IN",
    url: "https://rangaco.com/services/statutory-audit-jodhpur",
    siteName: "RangaCo",
    images: [
      {
        url: "/service-4-409fe6.png",
        width: 1200,
        height: 630,
        alt: "Statutory & Internal Audit Services in Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Statutory & Internal Audit Services in Jodhpur | Professional Audit Firm",
    description:
      "Professional statutory and internal audit services in Jodhpur. Mandatory audit for companies with turnover above ₹40 lakh.",
    images: ["/service-4-409fe6.png"],
  },
  alternates: {
    canonical: "https://rangaco.com/services/statutory-audit-jodhpur",
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
