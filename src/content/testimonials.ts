// Only real, attributable quotes. Add client quotes here once the client has agreed to be quoted.
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  source: "google" | "client";
  sourceUrl?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Really helpful company, helped me file my complex taxes on time!!",
    name: "Parth C.",
    context: "Google review",
    source: "google",
    sourceUrl: "https://share.google/XC9wW8eei4KBh1r28",
  },
];
