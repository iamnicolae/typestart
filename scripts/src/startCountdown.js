import { resetGame } from "./resetGame.js";
import { setTime } from "../utils/setTime.js";

export function startCountdown() {
  let TIME = 10000;
  const countdown = setInterval(startTimer, 10);

  function startTimer() {
    TIME = TIME - 10;

    setTime(TIME);

    if (TIME == 0) {
      clearInterval(countdown);
      resetGame();
    }
  }
}