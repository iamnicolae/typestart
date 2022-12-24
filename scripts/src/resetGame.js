import { counter } from "./counter.js";
import { WORDS } from "./words.js";
import { input, currentWord, countdownTimer } from "../utils/querySelectors.js";

export function resetGame() {
  counter.set = 0;
  WORDS.set = WORDS.get;
  countdownTimer.innerHTML = "10:00s";
  currentWord.textContent = "Type start to begin";
  input.value = "";
}