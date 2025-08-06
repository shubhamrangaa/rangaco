import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITR Filing in Jodhpur 2025 | Chartered Accountants | Ranga & Company",
  description: "Fast, error-free ITR filing in Jodhpur. Deadline extended to 15 September 2025. Chartered accountants with 35+ years' experience. File online or visit us.",
  keywords: "itr filing jodhpur, income tax return jodhpur, itr deadline 2025, ca firm jodhpur, tax filing services jodhpur, itr online filing jodhpur",
  authors: [{ name: "Ranga & Company" }],
  creator: "Ranga & Company",
  publisher: "Ranga & Company",
  metadataBase: new URL("https://rangaco.com"),
  alternates: {
    canonical: "/itr-filing-2025-jodhpur",
  },
  openGraph: {
    title: "ITR Filing in Jodhpur 2025 – Deadline 15 Sep 2025",
    description: "File your Income Tax Return with trusted CAs in Jodhpur. Quick, affordable & compliant.",
    url: "https://rangaco.com/itr-filing-2025-jodhpur",
    siteName: "Ranga & Company",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing Services in Jodhpur - Ranga & Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing Jodhpur 2025 | Ranga & Company",
    description: "Beat the 15 Sep 2025 ITR deadline with expert CAs. Book your slot now.",
    images: ["/twitter-image.jpg"],
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

export default function ITRFilingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 