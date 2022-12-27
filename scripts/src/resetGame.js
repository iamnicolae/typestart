import { counter } from "./counter.js";
import { WORDS } from "./words.js";
import { input, currentWord, countdownTimer } from "../utils/querySelectors.js";

export function resetGame() {
  counter.set = 0;
  WORDS.set = WORDS.get;
  countdownTimer.innerHTML = "10:00s";
  currentWord.innerHTML = "<span class=\"type_gameover\">Game over.</span> Type <span class=\"type_start\">start</span> to begin";
  input.value = "";
}