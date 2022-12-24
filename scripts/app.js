import { WORDS_EN } from "../data/wordsEN.js";
import { counter } from "./src/counter.js";
import { startCountdown } from "./src/startCountdown.js";
import { input, currentWord } from "./utils/querySelectors.js"

(() => {
  input.addEventListener('input', (event) => {

    if (event.target.value === "start") {
      startCountdown();
    }

    if (WORDS_EN[counter.get] === event.target.value) {
      counter.set = counter.get + 1;
      currentWord.textContent = WORDS_EN[counter.get];
      input.value = "";
    }



  });



})();