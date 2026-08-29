#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const ok = (msg) => console.log(`  ✅ ${msg}`);
const warn = (msg) => console.log(`  ⚠️  ${msg}`);
const fail = (msg) => console.log(`  ❌ ${msg}`);
const info = (msg) => console.log(`  ℹ️  ${msg}`);

let issues = 0;

// ── 1. Core files ──
console.log("\n📁 Core files:");
const coreFiles = [
  "package.json",
  "vite.config.ts",
  "vercel.json",
  ".gitignore",
  "src/routes/__root.tsx",
  "src/routes/index.tsx",
  "src/styles.css",
  "src/lib/site-data.ts",
];
for (const f of coreFiles) {
  existsSync(join(ROOT, f)) ? ok(f) : (fail(f), issues++);
}

// ── 2. Environment ──
console.log("\n🔐 Environment:");
if (existsSync(join(ROOT, ".env"))) {
  const env = readFileSync(join(ROOT, ".env"), "utf8");
  const hasPort = /VITE_PORT/.test(env);
  hasPort ? ok(".env has VITE_PORT") : (warn(".env missing VITE_PORT"), issues++);
} else {
  warn(".env file missing (optional)");
}

// ── 3. Dependencies ──
console.log("\n📦 Dependencies:");
const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };

const required = ["react", "react-dom", "@tanstack/react-router", "tailwindcss"];
for (const dep of required) {
  deps[dep] ? ok(dep) : (fail(`${dep} missing`), issues++);
}

const recommended = ["framer-motion", "scroll-craft", "lucide-react"];
for (const dep of recommended) {
  deps[dep] ? ok(dep) : (warn(`${dep} not installed`));
}

const unwanted = ["three", "@react-three/fiber", "@react-three/drei"];
for (const dep of unwanted) {
  deps[dep] ? (warn(`${dep} still installed (can remove)`)) : ok(`${dep} removed`);
}

// ── 4. Build output ──
console.log("\n🏗️  Build output:");
const vercelOutput = join(ROOT, ".vercel", "output");
const staticDir = join(vercelOutput, "static");
const funcDir = join(vercelOutput, "functions", "__server.func");
const configJson = join(vercelOutput, "config.json");

existsSync(configJson) ? ok(".vercel/output/config.json") : (fail(".vercel/output/config.json missing — run npm run build"), issues++);
existsSync(staticDir) ? ok(".vercel/output/static/") : (warn(".vercel/output/static/ missing"));
existsSync(funcDir) ? ok(".vercel/output/functions/__server.func/") : (warn("SSR function missing"));

// ── 5. Port ──
console.log("\n🔌 Dev server:");
try {
  const viteConf = readFileSync(join(ROOT, "vite.config.ts"), "utf8");
  const portMatch = viteConf.match(/port:\s*(\d+)/);
  portMatch ? ok(`Vite port: ${portMatch[1]}`) : warn("Port not found in vite.config.ts");
} catch {
  warn("Cannot read vite.config.ts");
}

// ── 6. Domain / deploy ──
console.log("\n🌐 Domain & deploy:");
const vercelJson = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
vercelJson.outputDirectory === ".vercel/output"
  ? ok("vercel.json outputDirectory correct")
  : (fail("vercel.json outputDirectory wrong"), issues++);

const hasRewrites = !!vercelJson.rewrites;
!hasRewrites ? ok("No rewrites (SSR compatible)") : (warn("Rewrites present — may break SSR"));

// ── 7. Security headers ──
console.log("\n🔒 Security:");
const securityFile = join(ROOT, "src", "lib", "security-headers.ts");
if (existsSync(securityFile)) {
  const sec = readFileSync(securityFile, "utf8");
  const hasNosniff = /nosniff/.test(sec);
  const hasCSP = /content-security-policy/.test(sec);
  hasNosniff ? ok("x-content-type-options: nosniff") : warn("nosniff missing");
  hasCSP ? warn("CSP present (may conflict with Vercel)") : ok("No CSP (Vercel handles it)");
} else {
  warn("security-headers.ts not found");
}

// ── 8. SEO ──
console.log("\n🔍 SEO:");
const sitemap = join(ROOT, "public", "sitemap.xml");
const robots = join(ROOT, "public", "robots.txt");
const ogImage = join(ROOT, "public", "og-image.jpg");
existsSync(sitemap) ? ok("sitemap.xml") : (warn("sitemap.xml missing"), issues++);
existsSync(robots) ? ok("robots.txt") : (warn("robots.txt missing"), issues++);
existsSync(ogImage) ? ok("og-image.jpg") : (warn("og-image.jpg missing"));

// ── 9. Images ──
console.log("\n🖼️  Images:");
const assetsDir = join(ROOT, "src", "assets");
if (existsSync(assetsDir)) {
  const webpFiles = ["hero-site.webp", "work-otantik.webp", "work-olina.webp", "work-wv.webp", "work-kata.webp"];
  for (const f of webpFiles) {
    existsSync(join(assetsDir, f)) ? ok(f) : warn(`${f} missing`);
  }
} else {
  warn("src/assets/ directory missing");
}

// ── Summary ──
console.log("\n" + "─".repeat(40));
if (issues === 0) {
  console.log("✅ All checks passed! Ready to deploy.\n");
} else {
  console.log(`❌ ${issues} issue(s) found. Fix before deploying.\n`);
}

process.exit(issues === 0 ? 0 : 1);
