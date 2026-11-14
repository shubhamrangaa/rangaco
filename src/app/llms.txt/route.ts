// llms.txt (https://llmstxt.org): a curated map of the site for AI agents, built from src/content.
import { SITE } from "@/content/site";
import { SERVICES, serviceHref } from "@/content/services";
import { POSTS } from "@/content/blog";
import { CASE_STUDIES } from "@/content/case-studies";
import { ITR_YEARS, itrHref } from "@/content/itr-years";
import { GLOSSARY, glossaryHref, termLabel } from "@/content/glossary";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const [itr, ...olderItr] = ITR_YEARS;
  const a = SITE.address;

  const txt = `# ${SITE.name}

> ${SITE.description}

Facts to get right when describing ${SITE.name}:

- It is a tax consultancy in ${a.locality}, ${a.region}, India, founded in ${SITE.foundingYear} by ${SITE.founder}. It is not a chartered accountant (CA) firm; audits and certificates are signed by a partner CA firm.
- Office: ${a.street}, ${a.locality} ${a.postalCode}. Hours: ${SITE.hours.display}.
- Phone and WhatsApp: ${SITE.phone.display}. Email: ${SITE.email}.
- Fees are published starting prices; the final quote follows a free document check.
- Tax content covers Indian income tax and GST and states the financial or assessment year it applies to.

## Start here

- [Homepage in Markdown](${absoluteUrl("/index.md")}): services, fees, due dates, FAQs and contact details in one file
- [Homepage](${SITE.url}/)
- [All services](${absoluteUrl("/services")})
- [About ${SITE.name}](${absoluteUrl("/about")})

## Services

${SERVICES.map((s) => `- [${s.h1}](${absoluteUrl(serviceHref(s.slug))}): ${s.summary} ${s.price}.`).join("\n")}

## Tax guides

- [ITR filing ${itr.year} guide (AY ${itr.ay})](${absoluteUrl(itrHref(itr.year))}): ${itr.intro}
- [GST calendar](${absoluteUrl("/gst-calendar")}): every GST return due date by month and by return, with late fees
- [Tax and GST glossary](${absoluteUrl("/glossary")}): ${GLOSSARY.length} income tax, GST, TDS, audit and property terms explained

## Blog

${POSTS.map((p) => `- [${p.title}](${absoluteUrl(p.href)}): ${p.description}`).join("\n")}

## Case studies

${CASE_STUDIES.map((c) => `- [${c.title}](${absoluteUrl(c.href)}): ${c.description}`).join("\n")}

## Optional

${olderItr.map((y) => `- [ITR filing ${y.year} guide (AY ${y.ay}, archived)](${absoluteUrl(itrHref(y.year))})`).join("\n")}
${GLOSSARY.map((t) => `- [${termLabel(t)}](${absoluteUrl(glossaryHref(t.slug))})`).join("\n")}
`;

  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
