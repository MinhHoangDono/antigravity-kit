#!/usr/bin/env node

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = path.resolve(__dirname, "../.agent");
const TARGET_DIR = path.join(process.cwd(), ".agent");

// ── helpers ──────────────────────────────────────────────────────────────────

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (ans) => { rl.close(); resolve(ans.trim().toLowerCase()); }));
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function countFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) count += countFiles(path.join(dir, entry.name));
    else count++;
  }
  return count;
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  const command = process.argv[2] ?? "init";

  if (command !== "init") {
    console.error(`Unknown command: ${command}\nUsage: ag-kit init`);
    process.exit(1);
  }

  console.log("\n  AntigravityKit — AI Agent Toolkit");
  console.log("  15 agents · 36 skills · 16 workflows\n");

  // Guard: .agent/ already exists
  if (fs.existsSync(TARGET_DIR)) {
    const answer = await ask("  .agent/ already exists. Overwrite? (y/N) ");
    if (answer !== "y" && answer !== "yes") {
      console.log("  Aborted — nothing changed.\n");
      process.exit(0);
    }
    fs.rmSync(TARGET_DIR, { recursive: true, force: true });
    console.log("  Removed existing .agent/");
  }

  console.log(`  Installing into ${process.cwd()}/`);
  copyDir(TEMPLATE_DIR, TARGET_DIR);

  const total = countFiles(TARGET_DIR);
  console.log(`  Done! Installed .agent/ (${total} files)\n`);
  console.log("  Next steps:");
  console.log("    1. Open this project in Antigravity / any AI coding assistant");
  console.log("    2. Type /plan, /cook, /debug, or any workflow to get started");
  console.log("    3. See .agent/ARCHITECTURE.md for the full reference\n");
}

main().catch((err) => { console.error(err.message); process.exit(1); });
