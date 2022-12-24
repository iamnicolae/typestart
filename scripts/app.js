import { WORDS_EN } from "../data/wordsEN.js";
import { counter } from "./src/counter.js";
import { startCountdown } from "./src/startCountdown.js";

(() => {
  let TIME = 10000;
  //let counter = 0;

  document.querySelector('#input').addEventListener('input', (event) => {
    //console.log(event.target.value);
    //console.log(counter)

    if (event.target.value === "start") {
      startCountdown();
    }

    if (WORDS_EN[counter.get] === event.target.value) {
      //console.log(WORDS[counter]);
      //console.log(counter)
      counter.set = counter.get + 1;
      document.querySelector('.word').textContent = WORDS_EN[counter.get];
      document.querySelector('#input').value = "";
    }



  });



})();