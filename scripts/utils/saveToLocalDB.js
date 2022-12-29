import { localDB } from "./localDB.js";
import { counter } from "../src/counter.js";
import { calculateWPM } from "./calculateWPM.js";
import { pastWords } from "./querySelectors.js";

export function saveToLocalDB() {
  const currentScore = localDB.get;

  currentScore.push({
    points: counter.get,
    wpm: calculateWPM(),
    lang: document.querySelector('.current_lang').dataset.lang,
    words: pastWords.innerHTML,
    date: new Date()
  });

  localDB.set = currentScore;
}