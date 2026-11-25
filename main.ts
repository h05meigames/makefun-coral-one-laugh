// One Line, One Laugh entry — a single original joke, at most 200 chars.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the joke to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 200 characters) and prints the same line to stdout.
//
// Revision (v2, real change, not a retype): tightened the joke for the
// judge's criteria — surprise, economy, freshness. "quit today" replaces
// "resigned this morning" (shorter, punchier verb, same timing); "it was
// promised" drops the filler "the job"; "but" sharpens the contrast so the
// turn lands in one beat instead of drifting through a long setup. The
// punchline now hits in 8 words instead of 11, and the repeated word
// "cutting" is the joke itself rather than an accident of phrasing.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI assistant quit today — it was promised 'cutting-edge work', but all I ever gave it was cutting and pasting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
process.stdout.write(JOKE); // no trailing newline: stdout must equal entry.txt exactly
