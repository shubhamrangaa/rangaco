import type { NextConfig } from "next";
import { ITEM_SLUGS } from "./src/lib/gst-calendar-urls";

const MONTHS = "january|february|march|april|may|june|july|august|september|october|november|december";

const isProd = process.env.NODE_ENV === "production";

// Pages are static, so a nonce-based CSP would force dynamic rendering.
// 'unsafe-inline' scripts stay allowed for Next's inline bootstrap and JSON-LD.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // No includeSubDomains: mail subdomains (autodiscover etc.) are hosted by Microsoft.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["lucide-react"] },
  async headers() {
    // Dev tooling needs eval and HMR websockets, so the CSP is production-only.
    return isProd ? [{ source: "/:path*", headers: securityHeaders }] : [];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:path*", destination: "/blog", permanent: true },
      { source: "/test-button", destination: "/", permanent: true },
      { source: "/small-business-itr-jodhpur", destination: "/blog/small-business-itr-jodhpur", permanent: true },
      // The GST calendar's first URLs carried the year (/gst-calendar/november-2026/20, /gst-calendar/due-dates/gstr-3b).
      ...Object.entries(ITEM_SLUGS).map(([item, slug]) => ({ source: `/gst-calendar/due-dates/${item}`, destination: `/gst-calendar/${slug}`, permanent: true })),
      { source: "/gst-calendar/due-dates/:item", destination: "/gst-calendar/:item-due-date", permanent: true },
      { source: `/gst-calendar/:month(${MONTHS})-:year(\\d{4})/:day(\\d{1,2})?`, destination: "/gst-calendar/gst-due-dates-:month", permanent: true },
    ];
  },
};

export default nextConfig;
