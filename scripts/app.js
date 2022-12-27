import { WORDS } from "./src/words.js";
import { counter } from "./src/counter.js";
import { startCountdown } from "./src/startCountdown.js";
import { input, currentWord, pastWords } from "./utils/querySelectors.js";
import { languageDropdown } from "./src/components/languageDropdown.js";
import { time } from "./src/time.js";

(() => {

  languageDropdown();

  //en
  //ro
  //de
  //fr
  //es
  //it




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
        //add a second tontheir time
        time.set = time.get + 1000;
        pastWords.append(counter.get !== 1 ? ', ' + WORDS.get[counter.get - 1] : WORDS.get[counter.get - 1])
      }
    }


  });



})();