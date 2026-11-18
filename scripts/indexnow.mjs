#!/usr/bin/env node
// Tells Bing and the other IndexNow engines (https://www.indexnow.org) that pages changed.
// Run after a production deploy: `npm run indexnow` sends every URL in the live sitemap,
// `npm run indexnow -- /blog/new-post /services` sends only those paths.
const SITE = "https://rangaco.com";
const KEY = "abffeeb6ccadc2a2f86153248c1349ed"; // public by design; must match public/<KEY>.txt
const keyLocation = `${SITE}/${KEY}.txt`;

const get = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.text();
};

// Engines reject the ping unless the key file is live, so catch an undeployed key here.
if ((await get(keyLocation)).trim() !== KEY) throw new Error(`${keyLocation} does not contain the key`);

const paths = process.argv.slice(2);
const urlList = paths.length
  ? paths.map((p) => new URL(p, SITE).href)
  : [...(await get(`${SITE}/sitemap.xml`)).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
