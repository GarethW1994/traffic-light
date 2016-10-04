captureTimeChange(captureTrafficLightChange);

function captureTrafficLightChange(number){
    //write your code here!;
    // number is the value entered in the text on the screen
   if (number > 40) {
      go();
    }
    else if (number >= 30 && number <= 40) {
      caution();
    }
    else {
      stop();
    } 
};
