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

        if (counter > 40) {
          go();
        }
        else if (counter >= 30 && counter <= 40) {
          caution();
        }
        else if (counter < 29){
          stop();
        }

        if (counter === 60) {
          counter = 0;
        }


        showNumber(counter);
      }


setInterval(interval, 500);
