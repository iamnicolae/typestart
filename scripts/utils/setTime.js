import { time } from "../src/time.js";

export function setTime() {
  time.set = time.get + 1000;
  time.setTotal = 1000;
}