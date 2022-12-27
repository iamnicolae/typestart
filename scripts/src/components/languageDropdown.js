import { WORDS_EN } from "../../../data/wordsEN.js";
import { WORDS_RO } from "../../../data/wordsRO.js";
import { WORDS_FR } from "../../../data/wordsFR.js";
import { WORDS_ES } from "../../../data/wordsES.js";
import { WORDS_DE } from "../../../data/wordsDE.js";
import { WORDS_IT } from "../../../data/wordsIT.js";
import { WORDS } from "../words.js";
import { buttonsLang, dropdownList, dropdownCurrent, dropdownArrow } from "../../utils/querySelectors.js";
import { toggleDropdown } from "../../utils/toggleDropdown.js";

export function languageDropdown() {
  toggleDropdown();

  buttonsLang.forEach(button => {
    button.addEventListener('click', (e) => {
      const btnClicked = e.target;

      buttonsLang.forEach(button => {
        button.classList.remove("current_lang");
        dropdownList.style.display = 'none';
      });

      btnClicked.classList.add("current_lang");
      dropdownCurrent.innerHTML = btnClicked.innerHTML;
      dropdownArrow.style.transform = "rotate(360deg)";

      switch (btnClicked.dataset.lang) {
        case "EN":
          WORDS.set = WORDS_EN;
          break;
        case "RO":
          WORDS.set = WORDS_RO;
          break;
        case "FR":
          WORDS.set = WORDS_FR;
          break;
        case "ES":
          WORDS.set = WORDS_ES;
          break;
        case "DE":
          WORDS.set = WORDS_DE;
          break;
        case "IT":
          WORDS.set = WORDS_IT;
          break;
        default:
          WORDS.set = WORDS_EN;
      }
    })
  })
}