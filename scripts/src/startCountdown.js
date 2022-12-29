import { resetGame } from "./resetGame.js";
import { displayCountdown } from "../utils/displayCountdown.js";
import { time } from "./time.js";
import { localDB } from "../utils/localDB.js";
import { counter } from "./counter.js";
import { calculateWPM } from "../utils/calculateWPM.js";
import { pastWords, currentLang } from "../utils/querySelectors.js";

export function startCountdown() {
  const countdown = setInterval(startTimer, 10);

  function startTimer() {
    let t = time.get - 10;
    time.set = t;
    displayCountdown(t);

    if (t == 0) {
      clearInterval(countdown);
      const currentScore = localDB.get;

      currentScore.push({
        points: counter.get,
        wpm: calculateWPM(),
        lang: document.querySelector('.current_lang').dataset.lang,
        words: pastWords.innerHTML,
        date: new Date()
      });

      localDB.set = currentScore;

      resetGame();
    }
  }
}