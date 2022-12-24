import { resetGame } from "./resetGame.js";
import { setTime } from "../utils/setTime.js";
import { time } from "./time.js";

export function startCountdown() {
  //let TIME = 10000;
  const countdown = setInterval(startTimer, 10);

  function startTimer() {
    let t = time.get - 10;
    time.set = t;
    setTime(t);

    if (t == 0) {
      clearInterval(countdown);
      resetGame();
    }
  }
}