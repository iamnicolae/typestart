import { words } from "./src/words.js";
import { counter } from "./src/counter.js";
import { startCountdown } from "./src/startCountdown.js";
import { input, currentWord } from "./utils/querySelectors.js";
import { languageDropdown } from "./src/languageDropdown.js";
import { hasGameStarted } from "./utils/hasGameStarted.js";
import { calculateWPM } from "./utils/calculateWPM.js";
import { localDB } from "./utils/localDB.js";
import { statisticsTable, highscoreTable } from "./utils/querySelectors.js";
import { fillStatistics } from "./src/fillStatistics.js";
import { getMaxScore } from "./utils/getMaxScore.js";
import { setScore } from "./utils/setScore.js";
import { setPlaceholder } from "./utils/setPlaceholder.js";
import { setTime } from "./utils/setTime.js";
import { resetInput } from "./utils/resetInput.js";

(() => {

  languageDropdown();

  if (highscoreTable) {
    const statistics = localDB.get.reverse();

    if (statistics.length > 0) {
      highscoreTable.innerHTML = fillStatistics(getMaxScore(statistics));
      statisticsTable.innerHTML = fillStatistics(statistics);
    }
  }

  input && input.addEventListener('input', (event) => {
    const typedWord = event.target.value.toLowerCase();

    if (typedWord === "start" && !hasGameStarted.get) {
      hasGameStarted.set = true;
      startCountdown();
      resetInput(words.get[counter.get], currentWord);
      setScore(0, 0, "");
    } else {
      setPlaceholder(words.get[counter.get], input, currentWord);

      if (words.get[counter.get] === typedWord) {
        counter.set = counter.get + 1;
        resetInput(words.get[counter.get], currentWord);
        setTime();
        setScore(counter.get, calculateWPM(), counter.get !== 1 ? ', ' + words.get[counter.get - 1] : words.get[counter.get - 1]);
        setPlaceholder(words.get[counter.get], input, currentWord);
      }
    }
  });
})();