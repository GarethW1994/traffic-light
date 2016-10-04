var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval(){
        counter++;
        showNumber(counter);
        // write some code here
        if (counter > 0) {
          go();
        }
        else if (counter >= 30 && counter <= 40) {
          caution();
        }
        else {
          stop();
        }
        };

}

setInterval(interval, 500);
