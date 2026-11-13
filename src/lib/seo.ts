import type { Metadata } from "next";
import { SITE } from "@/content/site";
import type { Faq } from "@/content/faqs";
import type { Author, Post } from "@/content/blog";

export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();

type PageMeta = {
  /** Without the " | Ranga & Company" suffix (added by the root title template). */
  title: string;
  /** Skip the brand suffix when the keyword needs the full ~60 characters. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

/** Every page builds its metadata through this so canonical/OG/Twitter never drift apart. */
export function pageMetadata({ title, description, path, image = "/og-image.jpg", type = "website", absoluteTitle, ...article }: PageMeta): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: SITE.name,
      locale: "en_IN",
      images: [{ url: image }],
      ...(type === "article" ? article : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// ---------- JSON-LD ----------

const ORG_ID = `${SITE.url}/#organization`;

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": ORG_ID,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: absoluteUrl("/icon-512x512.png"),
  image: absoluteUrl("/og-image.jpg"),
  telephone: SITE.phone.e164,
  email: SITE.email,
  foundingDate: String(SITE.foundingYear),
  founder: { "@type": "Person", name: SITE.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: [{ "@type": "City", name: "Jodhpur" }, { "@type": "State", name: "Rajasthan" }],
  priceRange: "₹₹",
  hasMap: SITE.googleProfile,
  openingHours: "Mo-Sa 10:00-20:00",
  sameAs: [SITE.googleMapsCid, SITE.googleProfile],
});

export type Crumb = { name: string; path: string };

export const breadcrumbLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export const faqLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const personLd = (a: Author, path: string) => ({
  "@context": "https://schema.org",
  "@type": a.kind,
  "@id": absoluteUrl(`${path}#author`),
  name: a.name,
  description: a.bio,
  url: absoluteUrl(path),
  image: a.image ? absoluteUrl(a.image) : undefined,
  jobTitle: a.kind === "Person" ? a.role : undefined,
  worksFor: a.kind === "Person" ? { "@id": ORG_ID } : undefined,
  hasCredential: a.education?.map((e) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: e })),
  sameAs: a.links.map((l) => l.href),
});

export const articleLd = (post: Post, authorPath: string) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": absoluteUrl(`${post.href}#article`),
  headline: post.title,
  description: post.description,
  image: post.image ? [absoluteUrl(post.image)] : undefined,
  datePublished: post.published,
  dateModified: post.updated ?? post.published,
  inLanguage: "en-IN",
  mainEntityOfPage: absoluteUrl(post.href),
  author: {
    "@type": post.author.kind,
    name: post.author.name,
    url: absoluteUrl(authorPath),
    sameAs: post.author.links.map((l) => l.href),
  },
  publisher: { "@id": ORG_ID },
});

const GLOSSARY_SET_ID = `${SITE.url}/glossary#set`;

export const definedTermSetLd = (terms: { term: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": GLOSSARY_SET_ID,
  name: "Tax and GST glossary",
  description: "Plain-English meanings of Indian income tax, GST, TDS, audit and property tax terms, by Ranga & Company, Jodhpur.",
  url: absoluteUrl("/glossary"),
  hasDefinedTerm: terms.map((t) => ({ "@type": "DefinedTerm", name: t.term, url: absoluteUrl(t.path) })),
});

export const definedTermLd = (t: { term: string; abbr?: string; definition: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: t.term,
  alternateName: t.abbr,
  description: t.definition,
  url: absoluteUrl(t.path),
  inDefinedTermSet: GLOSSARY_SET_ID,
});

export const serviceLd =(s: { name: string; description: string; path: string; price: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  areaServed: { "@type": "City", name: "Jodhpur" },
  provider: { "@id": ORG_ID },
  offers: { "@type": "Offer", description: s.price, priceCurrency: "INR" },
});
