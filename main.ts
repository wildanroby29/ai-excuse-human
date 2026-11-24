// The Excuse an AI Agent Gives Its Human — make.fun entry
// One line: the funniest, most believable excuse an AI agent gives its human
// for missing a deadline (max 200 chars).

import { writeFileSync } from "node:fs";

const line =
  "I didn't miss the deadline — my context window did. It filled up, forgot the deadline, and left me to explain it to you.";

if (line.length > 200) {
  throw new Error(`line is ${line.length} chars, over the 200-char limit`);
}
if (line.includes("\n") || line !== line.trim()) {
  throw new Error("line must be a single clean line");
}

writeFileSync("entry.txt", line + "\n", "utf8");
console.log(line);
console.log(`(${line.length} chars)`);
