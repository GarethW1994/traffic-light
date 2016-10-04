var counter = 0;
var number;

function showNumber(num) {
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval() {
        counter++;
        // write some code here

  if (counter === 60)
  {
    counter = 0;
  }

  if (counter > 40) {
    go();
  }

  if (counter > 29 < 40) {
    caution();
  }

  if (counter < 29) {
    stop();
  }
      showNumber(counter);
      }


setInterval(interval, 500);
