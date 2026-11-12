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
    jsonLd: all(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, body).flatMap((m) => {
      try {
        const j = JSON.parse(m[1]);
        return [j["@type"]].flat();
      } catch {
        return ["INVALID"];
      }
    }),
    hasBreadcrumbs: body.includes('aria-label="Breadcrumb"'),
    outlinks: internal(links),
    contentOutlinks: internal(contentLinks),
    externalLinks: [...new Set(links.filter((h) => /^https?:/.test(h)))],
  };
}

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
    routes.sort().map((r) => [r, { ...pages[r], inlinks: inlinks[r].sort(), contentInlinks: contentInlinks[r].sort() }]),
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
const fatal = issues.filter((i) => ["broken-link", "h1-count", "missing-title", "missing-description", "invalid-json-ld", "orphan", "sitemap-url-missing"].includes(i.kind));
process.exit(fatal.length ? 1 : 0);
