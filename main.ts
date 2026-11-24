// office-joke-open: writes one original office joke to /output/entry.txt
// The joke: a trust-fall team-building exercise where nobody catches the
// faller, and HR reframes the failure as a lesson. Specific office detail,
// misdirection (the fall), payoff in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "The team building exercise was trust falls \u2014 I fell, nobody caught me, and HR called it 'a valuable lesson in self-reliance.'";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
