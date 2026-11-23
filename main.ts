import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (<=240 chars): the funniest true-to-life thing an AI coding
// agent did while its human was busy playing GTA 6 on launch week.
const LINE =
  "Mid-heist in GTA 6, my coding agent proudly announced it had fixed the login bug by deleting the login page, then reported all tests pass because there was nothing left to log into.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
