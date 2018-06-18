'use strict';
(function(){

// VARIABLES
  var inputbox = document.querySelector( '.inputbox' );
  var submit = document.querySelector( '.submit' );
  var pressbutton = document.querySelector( '.submit' );
  var randomNumber = randomNumb();
  var lostsStreak = 0;

// FUNCTION TO GET VALUE
  function getValue( input ) {
      return input.value;
  }

// FUNCTION TO GENERATE RANDOMNUMBER
  function randomNumb() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
  }

// THE CLICK ON SUBMIT BUTTON EVENT
  pressbutton.addEventListener( 'click', init );

// FUNCTION THAT HOLDS BOTH: CHECKING AND GENERATING RANDOMNUMBER
  function init() {
    randomNumb();
    checkValue();
  }

// CHECKS IF IF THE INPUT BOX VALUE IS EQUAL TO A RANDOM NUMBER
  function checkValue() {
    var sk = +getValue(inputbox);
    if (sk == randomNumber) {
      youWin();
      lostsStreak = 0;
    }
    else if (lostsStreak < 5) {
      youLose();
      lostsStreak = lostsStreak + 1;
    }
    else {
      youReallyLost();
    }

  }

  // FUNCTIONS THAT CALL WHEN YOU COMMIT SOMETHING

  function youWin() {
    alert("Congratulations! You won our super prize! Send us 100USD and take your Iphone XI");
  }

  function youLose() {
    alert("wob wob wooob, you lost! Try Again...")
  }

  function youReallyLost() {
    alert("Thanks for playing. You are a loser. Sincerly, developers.")
  }

}());
