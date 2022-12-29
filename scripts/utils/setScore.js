import { points, wpm, pastWords } from "./querySelectors.js";

export function setScore(pointsNo, wpmNo, pastWordsText) {
  pastWordsText === "" ? pastWords.innerHTML = "" : pastWords.append(pastWordsText);
  points.textContent = pointsNo;
  wpm.textContent = wpmNo;
}