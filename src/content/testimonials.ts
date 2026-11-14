// Only real, attributable quotes. Add client quotes here once the client has agreed to be quoted.
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  source: "google" | "client";
  sourceUrl?: string;
  /** Case study href, when this client also has one. */
  caseStudy?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Really helpful company, helped me file my complex taxes on time!!",
    name: "Parth C.",
    context: "Google review",
    source: "google",
    sourceUrl: "https://share.google/XC9wW8eei4KBh1r28",
    caseStudy: "/case-studies/first-itr-share-capital-gains-it-professional",
  },
];

// Companies whose employees are clients. Logo files live in public/logos; width/height are the file's intrinsic size.
export const TRUSTED_BY = [
  { name: "Amazon", src: "/logos/amazon.svg", width: 603, height: 182 },
  { name: "Google", src: "/logos/google.svg", width: 272, height: 92 },
  { name: "Adobe", src: "/logos/adobe.svg", width: 544, height: 143 },
  { name: "Flipkart", src: "/logos/flipkart.svg", width: 67, height: 25 },
  { name: "Housing.com", src: "/logos/housing.png", width: 360, height: 46 },
  { name: "PharmEasy", src: "/logos/pharmeasy.svg", width: 148, height: 41 },
  { name: "Wint Wealth", src: "/logos/wint-wealth.svg", width: 1411, height: 330 },
  { name: "FamPay", src: "/logos/fampay.svg", width: 328, height: 96 },
  { name: "Ringg AI", src: "/logos/ringg-ai.svg", width: 100, height: 21 },
  { name: "Emergent", src: "/logos/emergent.svg", width: 111, height: 24 },
];
