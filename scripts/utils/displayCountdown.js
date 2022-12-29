import { countdownTimer } from "./querySelectors.js";

export function displayCountdown(time) {
  let seconds = Math.floor(time / 1000).toFixed(0);
  let milliseconds = ((time / 1000) - Math.floor(time / 1000)).toFixed(2);

  countdownTimer.innerHTML = `0${seconds}:${(milliseconds + "").split(".")[1]}s`;
}