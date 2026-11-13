#!/usr/bin/env node
// Renders design/thumbnails/*.svg to public/blog/*.png (1600×840) with the site's Satoshi font.
// Needs a Chromium binary: set CHROME_BIN, or install one with `npx playwright install chromium-headless-shell`.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir, homedir } from "node:os";
import { join, resolve, basename } from "node:path";

const findChrome = () => {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  const cache = join(homedir(), "Library/Caches/ms-playwright");
  for (const dir of existsSync(cache) ? readdirSync(cache).filter((d) => d.startsWith("chromium_headless_shell")) : []) {
    const bin = join(cache, dir, "chrome-headless-shell-mac-arm64/chrome-headless-shell");
    if (existsSync(bin)) return bin;
  }
  throw new Error("No Chromium found. Set CHROME_BIN.");
};

const chrome = findChrome();
const font = resolve("src/app/fonts/Satoshi-Variable.woff2");
const only = process.argv.slice(2);
const tmp = mkdtempSync(join(tmpdir(), "thumbs-"));

for (const file of readdirSync("design/thumbnails").filter((f) => f.endsWith(".svg"))) {
  const slug = basename(file, ".svg");
  if (only.length && !only.includes(slug)) continue;
  const html = join(tmp, `${slug}.html`);
  writeFileSync(
    html,
    `<!doctype html><meta charset="utf-8"><style>@font-face{font-family:Satoshi;src:url("file://${font}") format("woff2");font-weight:300 900}html,body{margin:0;width:1600px;height:840px;overflow:hidden}svg{display:block}</style>${readFileSync(join("design/thumbnails", file), "utf8")}`,
  );
  const out = resolve("public/blog", `${slug}.png`);
  execFileSync(chrome, ["--headless", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1600,840", "--virtual-time-budget=2000", `--screenshot=${out}`, `file://${html}`], { stdio: "ignore" });
  console.log("rendered", out);
}
