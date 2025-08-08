import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google Font - DM Serif Display
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

// Local Font - Satoshi
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

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
    google: "G-VR86F4PW6B",
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
        {/* Preconnect to external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Favicon configuration for all devices */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
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

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-VR86F4PW6B`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VR86F4PW6B', {
                page_title: 'Ranga & Company - Tax Consultants in Jodhpur',
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />

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
      <body
        className={`${dmSerifDisplay.variable} ${satoshi.variable} font-satoshi antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
