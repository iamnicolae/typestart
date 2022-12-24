import { counter } from "./counter.js";
import { input, currentWord, countdownTimer } from "../utils/querySelectors.js";

export function resetGame() {
  counter.set = 0;
  countdownTimer.innerHTML = "10:00s";
  currentWord.textContent = "Type start to begin";
  input.value = "";
}