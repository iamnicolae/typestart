import { resetGame } from "./resetGame.js";
import { displayCountdown } from "../utils/displayCountdown.js";
import { time } from "./time.js";
import { calculateWPM } from "../utils/calculateWPM.js";

export function startCountdown() {
  const countdown = setInterval(startTimer, 10);

  function startTimer() {
    let t = time.get - 10;
    time.set = t;
    displayCountdown(t);

    if (t == 0) {
      clearInterval(countdown);
      calculateWPM();
      resetGame();
    }
  }
}