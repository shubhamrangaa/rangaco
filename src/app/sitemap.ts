import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { SERVICES, serviceHref } from "@/content/services";
import { AUTHORS, POSTS, authorHref } from "@/content/blog";
import { ITR_YEARS, itrHref } from "@/content/itr-years";
import { CASE_STUDIES } from "@/content/case-studies";

/** Generated from the content layer, so new services, posts, authors and ITR years appear automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;
  const now = new Date();
  const latestPost = POSTS.map((p) => p.updated ?? p.published).sort().at(-1)!;

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({ url: url(serviceHref(s.slug)), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...ITR_YEARS.map((y, i) => ({ url: url(itrHref(y.year)), lastModified: new Date(y.published), changeFrequency: (i === 0 ? "weekly" : "yearly") as "weekly" | "yearly", priority: i === 0 ? 0.9 : 0.5 })),
    { url: url("/blog"), lastModified: new Date(latestPost), changeFrequency: "weekly", priority: 0.8 },
    ...POSTS.map((p) => ({ url: url(p.href), lastModified: new Date(p.updated ?? p.published), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...Object.values(AUTHORS)
      .filter((a) => a.kind === "Person")
      .map((a) => ({ url: url(authorHref(a)), lastModified: new Date(latestPost), changeFrequency: "monthly" as const, priority: 0.5 })),
    { url: url("/case-studies"), lastModified: new Date(CASE_STUDIES[0].updated ?? CASE_STUDIES[0].published), changeFrequency: "monthly", priority: 0.7 },
    ...CASE_STUDIES.map((c) => ({ url: url(c.href), lastModified: new Date(c.updated ?? c.published), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: url("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
