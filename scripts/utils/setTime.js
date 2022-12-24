import { countdownTimer } from "./querySelectors.js";

export function setTime(TIME) {
  countdownTimer.innerHTML = "0" + TIME / 1000 + "s";
}