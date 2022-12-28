import { counter } from "./counter.js";
import { WORDS } from "./words.js";
import { time } from "./time.js";
import { input, currentWord, countdownTimer } from "../utils/querySelectors.js";
import { hasGameStarted } from "../utils/hasGameStarted.js";

export function wonGame() {
  counter.set = 0;
  time.set = 10000;
  WORDS.set = WORDS.get;
  hasGameStarted.set = false;
  countdownTimer.innerHTML = "10:00s";
  currentWord.innerHTML = "<span class=\"type_gamewon\">Congratulation, you won the game.</span> Type <span class=\"type_start\">start</span> to play again";
  input.value = "";
  input.placeholder = `start`;
}