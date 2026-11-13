#!/usr/bin/env node
// SEO audit over the prerendered build (.next/server/app/**/*.html). Run `npm run build` first.
// Reports broken internal links, orphan pages, inlinks/outlinks, heading and metadata issues,
// and sitemap coverage. Writes seo-report.json; exits 1 if anything is broken.
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const SITE = "https://rangaco.com";
if (!existsSync(ROOT)) {
  console.error("No build output. Run `npm run build` first.");
  process.exit(2);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

const routeOf = (file) => {
  const r = "/" + relative(ROOT, file).replace(/\.html$/, "");
  return r === "/index" ? "/" : r;
};

const decode = (s) =>
  s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
const all = (re, s) => [...s.matchAll(re)];
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

// Redirects declared in next.config.ts count as valid link targets (but are reported).
const redirects = Object.fromEntries(
  all(/source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g, readFileSync("next.config.ts", "utf8")).map((m) => [m[1], m[2]]),
);

const pages = {};
for (const file of walk(ROOT)) {
  const route = routeOf(file);
  if (route.startsWith("/_") || route === "/_not-found") continue;
  const html = readFileSync(file, "utf8");
  // Strip RSC payload scripts so links in serialized props aren't double counted.
  const body = html.replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/g, "");
  const main = body.match(/<div id="main">([\s\S]*)<footer/)?.[1] ?? body;
  const links = all(/<a\b[^>]*>/g, body)
    .map((m) => attr(m[0], "href"))
    .filter(Boolean);
  const contentLinks = all(/<a\b[^>]*>/g, main)
    .map((m) => attr(m[0], "href"))
    .filter(Boolean);
  const internal = (arr) =>
    [...new Set(arr.filter((h) => h.startsWith("/") && !h.startsWith("//")).map((h) => h.split("#")[0] || route))];
  pages[route] = {
    title: decode(body.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ""),
    description: attr(body.match(/<meta name="description"[^>]*>/)?.[0] ?? "", "content") ?? "",
    canonical: attr(body.match(/<link rel="canonical"[^>]*>/)?.[0] ?? "", "href") ?? "",
    h1: all(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g, body).map((m) => decode(m[1])),
    h2: all(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g, main).map((m) => decode(m[1])),
    h3: all(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g, main).map((m) => decode(m[1])),
    ld: all(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, body).map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return { "@type": "INVALID" };
      }
    }),
    headings: all(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g, body).map((m) => [Number(m[1]), decode(m[2])]),
    meta: Object.fromEntries(all(/<meta (?:property|name)="((?:og|twitter):[a-z:]+|robots)" content="([^"]*)"/g, body).map((m) => [m[1], m[2]])),
    lang: html.match(/<html[^>]*lang="([^"]+)"/)?.[1] ?? "",
    ids: new Set(all(/\sid="([^"]+)"/g, body).map((m) => m[1])),
    samePageAnchors: [...new Set(all(/<a\b[^>]*href="#([^"]+)"/g, body).map((m) => m[1]))],
    emptyLinks: all(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, body).filter((m) => !decode(m[2]) && !/aria-label=/.test(m[1])).map((m) => attr(m[0], "href")),
    faqVisible: (main.match(/<details name="faq"/g) || []).length,
    text: decode(main),
    hasBreadcrumbs: body.includes('aria-label="Breadcrumb"'),
    outlinks: internal(links),
    contentOutlinks: internal(contentLinks),
    externalLinks: [...new Set(links.filter((h) => /^https?:/.test(h)))],
  };
}

for (const p of Object.values(pages)) p.jsonLd = p.ld.flatMap((j) => [j["@type"]].flat());

const routes = Object.keys(pages).filter((r) => !["/robots.txt", "/sitemap.xml"].includes(r));
const exists = (p) => routes.includes(p) || ["/robots.txt", "/sitemap.xml"].includes(p) || existsSync(join("public", p));
const issues = [];
const add = (route, kind, detail) => issues.push({ route, kind, detail });

for (const r of routes) {
  const p = pages[r];
  for (const href of p.outlinks) {
    if (exists(href)) continue;
    if (redirects[href]) add(r, "links-to-redirect", `${href} -> ${redirects[href]}`);
    else add(r, "broken-link", href);
  }
  if (p.h1.length !== 1) add(r, "h1-count", `${p.h1.length} h1 tags`);
  if (!p.title) add(r, "missing-title", "");
  else if (p.title.length > 65) add(r, "long-title", `${p.title.length} chars: ${p.title}`);
  if (!p.description) add(r, "missing-description", "");
  else if (p.description.length < 110 || p.description.length > 165) add(r, "description-length", `${p.description.length} chars`);
  const expected = `${SITE}${r === "/" ? "" : r}`;
  if (p.canonical !== expected) add(r, "canonical", `${p.canonical || "missing"} (expected ${expected})`);
  if (r !== "/" && !p.hasBreadcrumbs) add(r, "no-breadcrumbs", "");
  if (r !== "/" && !p.jsonLd.includes("BreadcrumbList")) add(r, "no-breadcrumb-schema", "");
  if (p.jsonLd.includes("INVALID")) add(r, "invalid-json-ld", "");
}

// ---- Structured data, headings, social tags, duplicates ----
const abs = (r) => `${SITE}${r === "/" ? "" : r}`;
const routeOfUrl = (u) => (u?.startsWith(SITE) ? u.slice(SITE.length) || "/" : null);
for (const r of routes) {
  const p = pages[r];
  const canonical = abs(r);
  const byType = (t) => p.ld.filter((j) => [j["@type"]].flat().includes(t));
  for (const [t, n] of Object.entries(p.jsonLd.reduce((a, t) => ((a[t] = (a[t] || 0) + 1), a), {})))
    if (n > 1) add(r, "schema-duplicate-type", `${t} x${n}`);

  for (const b of byType("BreadcrumbList")) {
    const items = b.itemListElement || [];
    items.forEach((it, i) => {
      if (it.position !== i + 1) add(r, "schema-breadcrumb", `position ${it.position} at index ${i}`);
      if (!it.name || !it.item) add(r, "schema-breadcrumb", `item ${i + 1} missing name/item`);
      const ir = routeOfUrl(it.item);
      if (ir && !routes.includes(ir)) add(r, "schema-breadcrumb", `item points to missing page ${ir}`);
    });
    if (items.at(-1)?.item !== canonical) add(r, "schema-breadcrumb", `last item ${items.at(-1)?.item} != canonical`);
    if (items[0]?.item !== SITE && items[0]?.item !== `${SITE}/`) add(r, "schema-breadcrumb", "first item is not the homepage");
  }
  for (const f of byType("FAQPage")) {
    const qs = f.mainEntity || [];
    if (!qs.length) add(r, "schema-faq", "no questions");
    if (p.faqVisible && qs.length !== p.faqVisible) add(r, "schema-faq", `${qs.length} in schema vs ${p.faqVisible} visible`);
    for (const q of qs) {
      if (!q.name || !q.acceptedAnswer?.text) add(r, "schema-faq", "question without name/answer");
      else if (!p.text.includes(q.name) || !p.text.includes(q.acceptedAnswer.text)) add(r, "schema-faq", `not visible on page: ${q.name.slice(0, 50)}`);
    }
  }
  for (const d of byType("DefinedTerm")) {
    if (!d.name || !d.description) add(r, "schema-term", "missing name/description");
    if (d.url !== canonical) add(r, "schema-term", `url ${d.url} != canonical`);
    if (!d.inDefinedTermSet) add(r, "schema-term", "missing inDefinedTermSet");
    if (d.description && !p.text.includes(d.description)) add(r, "schema-term", "description not visible on page");
  }
  for (const set of byType("DefinedTermSet"))
    for (const t of set.hasDefinedTerm || []) {
      const tr = routeOfUrl(t.url);
      if (!tr || !routes.includes(tr)) add(r, "schema-termset", `term url missing: ${t.url}`);
    }
  for (const a of byType("BlogPosting")) {
    if (!a.headline || a.headline.length > 110) add(r, "schema-article", `headline ${a.headline?.length ?? 0} chars (max 110)`);
    if (!a.datePublished || !a.author?.name || !a.image) add(r, "schema-article", "missing datePublished/author/image");
    if (a.mainEntityOfPage !== canonical) add(r, "schema-article", "mainEntityOfPage != canonical");
  }
  for (const s of byType("Service")) if (s.url !== canonical || !s.provider) add(r, "schema-service", "url/provider");
  if (!byType("AccountingService").length) add(r, "schema-org", "organization schema missing");

  // Headings: one h1 first, no skipped levels, no empty or repeated h2s.
  const levels = p.headings.map(([l]) => l);
  if (levels[0] !== 1) add(r, "heading-order", `first heading is h${levels[0]}`);
  levels.forEach((l, i) => i && l > levels[i - 1] + 1 && add(r, "heading-skip", `h${levels[i - 1]} -> h${l}: "${p.headings[i][1].slice(0, 40)}"`));
  p.headings.filter(([, t]) => !t).forEach(([l]) => add(r, "heading-empty", `h${l}`));
  const h2s = p.headings.filter(([l]) => l === 2).map(([, t]) => t);
  h2s.filter((t, i) => h2s.indexOf(t) !== i).forEach((t) => add(r, "heading-duplicate", t));

  // Social tags, indexing, language, anchors, empty links.
  for (const k of ["og:title", "og:description", "og:url", "og:image", "twitter:card"]) if (!p.meta[k]) add(r, "social-tag", `missing ${k}`);
  if (p.meta["og:url"] && p.meta["og:url"] !== canonical) add(r, "social-tag", `og:url ${p.meta["og:url"]} != canonical`);
  if (/noindex/.test(p.meta.robots || "")) add(r, "noindex", p.meta.robots);
  if (!p.lang) add(r, "html-lang", "missing");
  p.samePageAnchors.filter((id) => !p.ids.has(id)).forEach((id) => add(r, "broken-anchor", `#${id}`));
  p.emptyLinks.forEach((h) => add(r, "empty-link-text", h));
}
const dupes = (key) => {
  const seen = {};
  for (const r of routes) (seen[pages[r][key]] ??= []).push(r);
  for (const [v, rs] of Object.entries(seen)) if (v && rs.length > 1) rs.forEach((r) => add(r, `duplicate-${key}`, `shared with ${rs.filter((x) => x !== r).join(", ")}`));
};
dupes("title");
dupes("description");

// The same FAQ question on two pages competes with itself in search and AI answers.
const faqOwners = {};
for (const r of routes)
  for (const f of pages[r].ld.filter((j) => j["@type"] === "FAQPage"))
    for (const q of f.mainEntity || []) (faqOwners[q.name.toLowerCase()] ??= []).push(r);
for (const [q, rs] of Object.entries(faqOwners)) if (rs.length > 1) add(rs.join(" + "), "duplicate-faq", q);

// Glossary H1s are written as the question people search.
for (const r of routes.filter((x) => x.startsWith("/glossary/")))
  if (!/^(What|How) .+\?$/.test(pages[r].h1[0] || "")) add(r, "glossary-h1", pages[r].h1[0]);

// Inlinks from other pages (any link, incl. nav/footer) and from page content only.
const inlinks = Object.fromEntries(routes.map((r) => [r, []]));
const contentInlinks = Object.fromEntries(routes.map((r) => [r, []]));
for (const r of routes) {
  for (const t of pages[r].outlinks) if (t !== r && inlinks[t]) inlinks[t].push(r);
  for (const t of pages[r].contentOutlinks) if (t !== r && contentInlinks[t]) contentInlinks[t].push(r);
}
for (const r of routes) {
  if (r !== "/" && inlinks[r].length === 0) add(r, "orphan", "no page links here");
  else if (r !== "/" && contentInlinks[r].length === 0) add(r, "nav-only", "linked only from header/footer, not from page content");
}

// Sitemap coverage.
const sitemap = readFileSync(join(ROOT, "sitemap.xml.body"), "utf8");
const inSitemap = all(/<loc>([^<]+)<\/loc>/g, sitemap).map((m) => m[1].replace(SITE, "") || "/");
for (const r of routes) if (!inSitemap.includes(r)) add(r, "not-in-sitemap", "");
for (const u of inSitemap) if (!routes.includes(u)) add(u, "sitemap-url-missing", "");

const report = {
  generatedAt: new Date().toISOString(),
  pages: Object.fromEntries(
    routes.sort().map((r) => {
      const rest = Object.fromEntries(Object.entries(pages[r]).filter(([k]) => !["ld", "ids", "text"].includes(k)));
      return [r, { ...rest, inlinks: inlinks[r].sort(), contentInlinks: contentInlinks[r].sort() }];
    }),
  ),
  issues,
};
writeFileSync("seo-report.json", JSON.stringify(report, null, 2));

const pad = (s, n) => String(s).padEnd(n);
console.log(`\n${pad("Page", 46)}${pad("In", 5)}${pad("In(content)", 13)}Out  H1  H2  H3`);
for (const r of routes.sort()) {
  const p = report.pages[r];
  console.log(`${pad(r, 46)}${pad(p.inlinks.length, 5)}${pad(p.contentInlinks.length, 13)}${pad(p.outlinks.length, 5)}${pad(p.h1.length, 4)}${pad(p.h2.length, 4)}${p.h3.length}`);
}
const byKind = issues.reduce((a, i) => ((a[i.kind] ??= []).push(i), a), {});
console.log(`\n${issues.length} issue(s)`);
for (const [k, list] of Object.entries(byKind)) {
  console.log(`\n${k} (${list.length})`);
  for (const i of list) console.log(`  ${i.route}  ${i.detail}`);
}
const fatal = issues.filter((i) => ["broken-link", "broken-anchor", "h1-count", "missing-title", "missing-description", "invalid-json-ld", "orphan", "sitemap-url-missing", "noindex", "duplicate-title"].includes(i.kind) || i.kind.startsWith("schema-"));
process.exit(fatal.length ? 1 : 0);
