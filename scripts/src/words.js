import { WORDS_EN } from "../../data/wordsEN.js";
import { randomizeArray } from "../utils/randomizeArray.js";

export const WORDS = {
  current: randomizeArray(WORDS_EN),
  get get() {
    return this.current;
  },
  set set(new_words) {
    return this.current = randomizeArray(new_words);
  }
}