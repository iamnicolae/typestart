import { countdownTimer } from "./querySelectors.js";

export function displayCountdown(TIME) {
  let seconds = Math.floor(TIME / 1000).toFixed(0);
  let milliseconds = ((TIME / 1000) - Math.floor(TIME / 1000)).toFixed(2);

  countdownTimer.innerHTML = `0${seconds}:${(milliseconds + "").split(".")[1]}s`;
}