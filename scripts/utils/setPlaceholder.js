export function setPlaceholder(theWord, input, currentWord) {
  if (theWord === undefined) {
    input.placeholder = "";
    currentWord.textContent = "No more words";
  } else {
    input.placeholder = `type \"${theWord}\"`;
  }
}