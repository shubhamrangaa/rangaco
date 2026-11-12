import { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rangaco.com";

  const blog: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...POSTS.filter((p) => p.href.startsWith("/blog/")).map((p) => ({
      url: `${baseUrl}${p.href}`,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [
    ...blog,
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/small-business-itr-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/itr-filing-2025-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/itr-filing-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/gst-registration-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/gst-return-filing-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/tds-tcs-compliance-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/statutory-audit-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/accounting-payroll-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/virtual-cfo-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/income-tax-advisory-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/gst-refund-assistance-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/income-tax-notice-reply-jodhpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
