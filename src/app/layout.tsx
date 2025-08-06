import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Tax Consultant in Jodhpur - Income Tax & GST Filing | Ranga & Company",
  description:
    "35+ years helping Rajasthan businesses stay compliant. Fast ITR, GST 3B, TDS & audit under one roof. Expert tax consultants in Jodhpur for Income Tax & GST filing.",
  keywords:
    "tax consultant jodhpur, income tax filing jodhpur, GST filing jodhpur, CA firm jodhpur, tax services rajasthan, ITR filing jodhpur, GST registration jodhpur, audit services jodhpur",
  authors: [{ name: "Ranga & Company" }],
  creator: "Ranga & Company",
  publisher: "Ranga & Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rangaco.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Tax Consultant in Jodhpur - Income Tax & GST Filing | Ranga & Company",
    description:
      "35+ years helping Rajasthan businesses stay compliant. Fast ITR, GST 3B, TDS & audit under one roof. Expert tax consultants in Jodhpur.",
    url: "https://rangaco.com",
    siteName: "Ranga & Company",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ranga & Company - Tax Consultants in Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tax Consultant in Jodhpur - Income Tax & GST Filing | Ranga & Company",
    description:
      "35+ years helping Rajasthan businesses stay compliant. Expert tax consultants in Jodhpur for Income Tax & GST filing.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#128948" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jodhpur, Rajasthan" />
        <meta name="geo.position" content="26.2389;73.0243" />
        <meta name="ICBM" content="26.2389, 73.0243" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Ranga & Company",
              description:
                "Tax Consultant in Jodhpur for Income Tax & GST Filing",
              url: "https://rangaco.com",
              logo: "https://rangaco.com/LogoRangaCo.svg",
              image: "https://rangaco.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A7, Abhay Chambers, Jalori Gate",
                addressLocality: "Jodhpur",
                addressRegion: "Rajasthan",
                postalCode: "342001",
                addressCountry: "IN",
              },
              telephone: "+919829021030",
              email: "kr@rangaco.com",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.2389,
                longitude: 73.0243,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "₹₹",
              serviceArea: {
                "@type": "City",
                name: "Jodhpur",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tax Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ITR Filing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GST Registration",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GST Return Filing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Audit & Assurance",
                    },
                  },
                ],
              },
              sameAs: ["https://wa.me/919829021030"],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
