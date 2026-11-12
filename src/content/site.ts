// Single source of truth for business facts. Change a phone number or address here only.
export const SITE = {
  name: "Ranga & Company",
  url: "https://rangaco.com",
  tagline: "Tax consultants in Jodhpur since 1990",
  description:
    "Tax consultants in Jodhpur since 1990. ITR, GST, TDS, accounting and notice replies under one roof, with a partner CA firm for audits.",
  foundingYear: 1990,
  founder: "Jugal Kishore Ranga",
  email: "kr@rangaco.com",
  phone: { display: "+91 98290 21030", e164: "+919829021030" },
  whatsapp: "919829021030",
  address: {
    street: "2nd Floor, A7, Abhay Chambers, near Canara Bank, Jalori Gate",
    locality: "Jodhpur",
    region: "Rajasthan",
    regionCode: "IN-RJ",
    postalCode: "342001",
    country: "IN",
  },
  geo: { lat: 26.2837, lng: 73.0147 },
  googleProfile: "https://share.google/XC9wW8eei4KBh1r28",
  googleMapsCid: "https://maps.google.com/?cid=17480435237555029031",
  gaId: "G-VR86F4PW6B",
} as const;

export const yearsInPractice = () => new Date().getFullYear() - SITE.foundingYear;

export const telHref = `tel:${SITE.phone.e164}`;
export const whatsappHref = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];
