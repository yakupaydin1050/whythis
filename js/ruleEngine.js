// RuleEngine decides which rule is active

import { getRandomCategory } from "./emojiEngine.js";

let currentRule = null;

export function initializeRule() {
  currentRule = getRandomCategory();
  console.log("Current hidden rule:", currentRule);
}

export function getCurrentRule() {
  return currentRule;
}
