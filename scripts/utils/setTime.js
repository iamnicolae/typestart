import { time } from "../src/time.js";

export function setTime() {
  time.set = time.get + 500;
  time.setTotal = 500;
}