export function randomizeArray(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());

}