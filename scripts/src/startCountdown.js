import { counter } from "./counter.js";

export function startCountdown() {
  let TIME = 10000;
  const countdown = setInterval(startTimer, 10);

  function startTimer() {
    TIME = TIME - 10;

    document.querySelector(".timer").innerHTML = "0" + TIME / 1000 + "s";
    if (TIME == 0) {
      clearInterval(countdown);

      TIME = 10000;
      counter.set = 0;
      document.querySelector(".timer").innerHTML = "10:00s";
      document.querySelector('.word').textContent = "";
      document.querySelector('#input').value = "";

    }
  }
}