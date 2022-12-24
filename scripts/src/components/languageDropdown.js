import { WORDS_EN } from "../../../data/wordsEN.js";
import { WORDS_RO } from "../../../data/wordsRO.js";
import { WORDS } from "../words.js";
import { buttonsLang } from "../../utils/querySelectors.js";

export function languageDropdown() {
  buttonsLang.forEach(item => {
    item.addEventListener('click', (e) => {
      switch (e.target.dataset.lang) {
        case "EN":
          WORDS.set = WORDS_EN;
          break;
        case "RO":
          WORDS.set = WORDS_RO;
          break;
        default:
          WORDS.set = WORDS_EN;
      }
    })
  })
}