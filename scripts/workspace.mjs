#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const WORKSPACE = join(ROOT, ".workspace");
const REGISTRY = join(WORKSPACE, "registry.json");

console.log("\n🔧 Workspace setup:\n");

// ── 1. Create .workspace directory ──
if (!existsSync(WORKSPACE)) {
  mkdirSync(WORKSPACE, { recursive: true });
  console.log("  ✅ Created .workspace/");
} else {
  console.log("  ✅ .workspace/ exists");
}

// ── 2. Create empty registry if missing ──
if (!existsSync(REGISTRY)) {
  const empty = {
    version: 1,
    created: new Date().toISOString(),
    components: [],
    themes: [],
    templates: [],
  };
  writeFileSync(REGISTRY, JSON.stringify(empty, null, 2));
  console.log("  ✅ Created empty registry.json");
} else {
  console.log("  ✅ registry.json exists");
}

// ── 3. Summary ──
const reg = JSON.parse(readFileSync(REGISTRY, "utf8"));
console.log(`\n📦 Registry contents:`);
console.log(`   Components: ${reg.components.length}`);
console.log(`   Themes: ${reg.themes.length}`);
console.log(`   Templates: ${reg.templates.length}`);
console.log(`\n✅ Workspace ready at .workspace/\n`);
