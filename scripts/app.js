import { WORDS } from "./src/words.js";
import { counter } from "./src/counter.js";
import { startCountdown } from "./src/startCountdown.js";
import { input, currentWord } from "./utils/querySelectors.js";
import { languageDropdown } from "./src/components/languageDropdown.js";

(() => {

  languageDropdown();

  //en
  //ro
  //de
  //fr
  //es
  //it
  //pl

  input.addEventListener('input', (event) => {

    if (event.target.value === "start") {
      console.log(WORDS.get)
      startCountdown();
      currentWord.textContent = WORDS.get[counter.get];
      input.value = "";

    } else {
      if (WORDS.get[counter.get] === event.target.value) {
        counter.set = counter.get + 1;
        currentWord.textContent = WORDS.get[counter.get];
        input.value = "";
      }
    }





  });



})();