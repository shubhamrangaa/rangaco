import type { Metadata, Viewport } from "next";
import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";
import { organizationLd } from "@/lib/seo";
import "./globals.css";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-dm-serif" });
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Tax Consultant in Jodhpur for ITR & GST | Ranga & Company",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  openGraph: { siteName: SITE.name, locale: "en_IN", type: "website", images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": SITE.address.regionCode,
    "geo.placename": `${SITE.address.locality}, ${SITE.address.region}`,
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = { themeColor: "#128948" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${satoshi.variable}`}>
      <body>
        <JsonLd data={organizationLd()} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-strong focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main">{children}</div>
        <SiteFooter />
      </body>
      <GoogleAnalytics gaId={SITE.gaId} />
    </html>
  );
}
