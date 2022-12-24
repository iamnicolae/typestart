(() => {

  const WORDS = ["start", "dull", "coffee", "food", "apple", "mar", "cantar", "predeal"];
  let TIME = 10000;
  let counter = 0;
  //let myVar;

  document.querySelector('#input').addEventListener('input', (event) => {
    //console.log(event.target.value);

    if (event.target.value === "start") {
      const myVar = setInterval(myTimer, 10);

      function myTimer() {
        TIME = TIME - 10;
        console.log(TIME)
        document.querySelector(".timer").innerHTML = "0" + TIME / 1000 + "s";
        if (TIME == 0) {
          clearInterval(myVar);

          TIME = 10000;
          counter = 0;
          document.querySelector(".timer").innerHTML = "10:00s";
          document.querySelector('.word').textContent = "";
          document.querySelector('#input').value = "";

        }
      }
    }

    if (WORDS[counter] === event.target.value) {
      //console.log(WORDS[counter]);
      //console.log(counter)
      counter++;
      document.querySelector('.word').textContent = WORDS[counter];
      document.querySelector('#input').value = "";
    }



  });



})();