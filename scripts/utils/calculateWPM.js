import { time } from "../src/time.js";
import { counter } from "../src/counter.js";

export function calculateWPM() {
  return ((counter.get * 60) / (time.getTotal / 1000)).toFixed(2)
}