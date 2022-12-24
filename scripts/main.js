(() => {

  const WORDS = ["start", "dull", "coffee", "food", "apple", "mar", "cantar", "predeal"];
  const TIME = 10000;
  let counter = 0;



  document.querySelector('#input').addEventListener('input', (event) => {
    //console.log(event.target.value);

    if (WORDS[counter] === event.target.value) {
      console.log(WORDS[counter]);
      console.log(counter)
      counter++;
      document.querySelector('#input').value = "";
    }

  })

})();