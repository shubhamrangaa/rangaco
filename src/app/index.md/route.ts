// The homepage as plain Markdown for AI agents and LLM crawlers, built from src/content so it
// never drifts from the HTML page. The canonical Link header keeps search engines indexing "/" instead.
import { SITE, yearsInPractice } from "@/content/site";
import { SERVICES, serviceHref } from "@/content/services";
import { HOME_FAQS } from "@/content/faqs";
import { MONTHLY_DUE, YEARLY_CALENDAR } from "@/content/calendar";
import { POSTS, formatDate } from "@/content/blog";
import { CASE_STUDIES } from "@/content/case-studies";
import { TESTIMONIALS, TRUSTED_BY } from "@/content/testimonials";
import { latestItrYear, itrHref } from "@/content/itr-years";
import { GLOSSARY } from "@/content/glossary";
import { STEPS } from "@/components/home/HowItWorks";
import { FEATURES } from "@/components/home/WhyUs";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function GET() {
  const itr = latestItrYear();
  const a = SITE.address;
  const fullAddress = `${a.street}, ${a.locality}, ${a.region} ${a.postalCode}, India`;
  const fyOrder = [...YEARLY_CALENDAR].sort((x, y) => (x.month + 8) % 12 - (y.month + 8) % 12 || x.day - y.day);

  const md = `# ${SITE.name}: tax consultant in Jodhpur for income tax and GST

> ${SITE.name} is a tax consultancy in ${a.locality}, ${a.region}, in practice since ${SITE.foundingYear}. It files income tax returns, handles GST registration and returns, TDS/TCS, accounting and payroll, virtual CFO work and replies to income-tax notices. It is not a chartered accountant (CA) firm: statutory audits, tax audits and certificates are signed by a partner CA firm.

This is the Markdown version of ${SITE.url}/ (canonical HTML page). Site index for AI agents: ${absoluteUrl("/llms.txt")}

## Key facts

- **Name:** ${SITE.name}
- **What it is:** a tax consultancy, not a CA firm. Work that must be signed by a practising chartered accountant (statutory audits, tax audits, certificates) is done by a partner CA firm.
- **Founded:** ${SITE.foundingYear} by ${SITE.founder} (${yearsInPractice()}+ years in practice)
- **Office:** ${fullAddress}
- **Hours:** ${SITE.hours.display}
- **Phone and WhatsApp:** ${SITE.phone.display}
- **Email:** ${SITE.email}
- **Google Business Profile:** ${SITE.googleProfile}
- **Serves:** Jodhpur and the rest of Rajasthan. Most clients work fully online: documents on WhatsApp or email, returns e-verified with an Aadhaar OTP.
- **Fees:** published starting prices (below); the final quote follows a free document check.
- **Individual clients include employees of:** ${TRUSTED_BY.map((c) => c.name).join(", ")}.

## Services and starting fees

| Service | Starting fee | What it covers |
| --- | --- | --- |
${SERVICES.map((s) => `| [${s.h1}](${absoluteUrl(serviceHref(s.slug))}) | ${s.price} | ${s.summary} |`).join("\n")}

All services: ${absoluteUrl("/services")}

## How it works

${STEPS.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join("\n")}

## Why clients choose ${SITE.name}

${FEATURES.map((f) => `- **${f.title}.** ${f.body}`).join("\n")}

## Tax due dates

### ITR due dates for FY ${itr.fy} (AY ${itr.ay})

${itr.deadlines.map((d) => `- **${d.label}:** ${formatDate(d.date)}${d.note ? ` (${d.note})` : ""}`).join("\n")}

Full guide: ${absoluteUrl(itrHref(itr.year))}

### Every month

${MONTHLY_DUE.map((d) => `- **${d.day}th:** ${d.label}, ${d.detail.toLowerCase()}`).join("\n")}

### Standard yearly due dates (April to March)

CBDT and CBIC sometimes extend these; the ITR dates above include this year's extensions.

${fyOrder.map((e) => `- **${e.day} ${MONTHS[e.month - 1]}:** ${e.label}`).join("\n")}

Every GST due date by month and by return: ${absoluteUrl("/gst-calendar")}

## Frequently asked questions

${HOME_FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## What clients say

${TESTIMONIALS.map((t) => `> "${t.quote}"\n>\n> ${t.name}, ${t.context}${t.sourceUrl ? ` (${t.sourceUrl})` : ""}`).join("\n\n")}

## Case studies

${CASE_STUDIES.map((c) => `- [${c.title}](${absoluteUrl(c.href)}): ${c.description}`).join("\n")}

## Guides from the blog

${POSTS.map((p) => `- [${p.title}](${absoluteUrl(p.href)}): ${p.description}`).join("\n")}

## Reference

- [ITR filing ${itr.year} guide (AY ${itr.ay})](${absoluteUrl(itrHref(itr.year))})
- [GST calendar](${absoluteUrl("/gst-calendar")}): every GST return due date, by month and by return
- [Tax and GST glossary](${absoluteUrl("/glossary")}): ${GLOSSARY.length} terms explained in plain English
- [About ${SITE.name}](${absoluteUrl("/about")})

## Contact

Call or WhatsApp ${SITE.phone.display}, email ${SITE.email}, or visit ${fullAddress} (${SITE.hours.display}).
`;

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE.url}/>; rel="canonical"`,
    },
  });
}
