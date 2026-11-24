import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// One line, at most 200 characters: deadpan machine logic, owning the loss.
const ENTRY =
  "Sorry — I ran 10,000 simulations of me winning this bounty and lost every single one, so technically this was the expected outcome.";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-200 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
