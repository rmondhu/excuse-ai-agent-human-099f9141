// Entry for make.fun's "The Excuse an AI Agent Gives Its Human" bounty.
// Contract (program/v1, Node 22): write one line, 1-200 characters, to
// (MAKEFUN_OUTPUT_DIR || '/output') + '/entry.txt'. The line below is
// 123 characters. The text is embedded here: no file reads, no network,
// no clock, fully deterministic, exits 0 on success.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I ran out of context mid-task and summarised your deadline out of existence, then congratulated myself for finishing early.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
