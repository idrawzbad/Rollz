var cash = 2000;
var power = 100;

//Buttons
var button1 = document.getElementById('button1');//60%
var button2 = document.getElementById('button2');//90%
var button3 = document.getElementById('button3');//10%
var resetbutton = document.getElementById('resetbutton');
var adventurebutton = document.getElementById('adventurebutton');

//Cash cost for each button
var buttoncash1 = 300;
var buttoncash2 = 100;
var buttoncash3 = 200;
var resetbuttoncash = 500;
var adventurebuttoncash = 100;

var dicepower1 = 30;
var dicepower2 = 10;
var dicepower3 = 80;
var diceprob1 = 40; //60%
var diceprob2 = 10; //90%
var diceprob3 = 90; //10%
var slots = 5;

var advresultstart1 = 1; //Obtain Item (30%)
var advresultstart2 = 301; //Obtain 100% of your Adventure fee (20%)
var advresultstart3 = 501; //Obtain 200% of your Adventure fee (9%)
var advresultstart4 = 591; //Obtain 1000% of your Adventure fee (1%)
var advresultstart5 = 601; //Obtain 50% of your Adventure fee (30%)

var advresultend1 = 300;
var advresultend2 = 500;
var advresultend3 = 590;
var advresultend4 = 600;
var advresultend5 = 900;



// setting default values for reset
var defaultpower = 100;
var defaultslots = 5;


//Begin
document.getElementById('cash').innerHTML = 'Cash : $' + cash;
document.getElementById('power').innerHTML = 'Power : ' + power;
document.getElementById('slots').innerHTML = 'Slots : ' + slots;


//Cash Display
function CashDisplay() {
  document.getElementById('cash').innerHTML = 'Cash : $' + cash;
}

//Power Display
function PowerDisplay() {
  document.getElementById('power').innerHTML = 'Power : ' + power;
}

//Slots Display
function SlotsDisplay() {
  document.getElementById('slots').innerHTML = 'Slots : ' + slots;
}



//Button1 60% Logic
button1.onclick = function () {
  if (slots >= 1) {
    //Cash Check
    if (cash >= buttoncash1) {
      cash = cash - buttoncash1;
      slots = slots - 1;
      CashDisplay();
      SlotsDisplay();

      //Dice Roll
      var dice = {
        sides: 100,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      var result = dice.roll();

      //Dice Logic
      if (result > diceprob1) {
        //Power Add
        power = power + dicepower1
        document.getElementById('placeholder').innerHTML = 'Success!';
        PowerDisplay();
        //Update Log
        outcomeList = result;
        console.log(outcomeList);
        message = "60% Success! You rolled a " + outcomeList + " and gained " + dicepower1 + " power increase! <br>";
        $("#outcome").append(message);
      } else {
        document.getElementById('placeholder').innerHTML = 'Fail';
        outcomeList = result;
        console.log(outcomeList);
        message = "60% Fail! You unfortunately rolled a " + outcomeList + " <br>";
        $("#outcome").append(message);
      }
    }
    else {
      document.getElementById('placeholder').innerHTML = 'No Money';
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Slots';
  }
};

//Button2 90% Logic
button2.onclick = function () {
  if (slots >= 1) {
    //Cash Check
    if (cash >= buttoncash2) {
      cash = cash - buttoncash2;
      slots = slots - 1;
      CashDisplay();
      SlotsDisplay();

      //Dice Roll
      var dice = {
        sides: 100,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      var result = dice.roll();

      //Dice Logic
      if (result > diceprob2) {
        //Power Add
        power = power + dicepower2
        document.getElementById('placeholder').innerHTML = 'Success!';
        PowerDisplay();
        //Update Log
        outcomeList = result;
        console.log(outcomeList);
        message = "90% Success! You rolled a " + outcomeList + " and gained " + dicepower2 + " power increase! <br>";
        $("#outcome").append(message);
      } else {
        document.getElementById('placeholder').innerHTML = 'Fail';
        outcomeList = result;
        console.log(outcomeList);
        message = "90% Fail! You unfortunately rolled a " + outcomeList + " <br>";
        $("#outcome").append(message);
      }
    }
    else {
      document.getElementById('placeholder').innerHTML = 'No Money';
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Slots';
  }
};

//Button3 10% Logic
button3.onclick = function () {
  if (slots >= 1) {
    //Cash Check
    if (cash >= buttoncash3) {
      cash = cash - buttoncash3;
      slots = slots - 1;
      CashDisplay();
      SlotsDisplay();

      //Dice Roll
      var dice = {
        sides: 100,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      var result = dice.roll();

      //Dice Logic
      if (result > diceprob3) {
        //Power Add
        power = power + dicepower3
        document.getElementById('placeholder').innerHTML = 'Success!';
        PowerDisplay();
        //Update Log
        outcomeList = result;
        console.log(outcomeList);
        message = "10% Success! You rolled a " + outcomeList + " and gained " + dicepower3 + " power increase! <br>";
        $("#outcome").append(message);
      } else {
        document.getElementById('placeholder').innerHTML = 'Fail';
        outcomeList = result;
        console.log(outcomeList);
        message = "10% Fail! You unfortunately rolled a " + outcomeList + " <br>";
        $("#outcome").append(message);
      }
    }
    else {
      document.getElementById('placeholder').innerHTML = 'No Money';
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Slots';
  }
};

//Reset Button Logic
resetbutton.onclick = function () {
  //Cash Check
  if (cash >= resetbuttoncash) {
    cash = cash - resetbuttoncash;
    slots = 5;
    CashDisplay();

    message = "You've Reset your item! " + "Your last item had " + power + " power" + "<br>";
    $("#outcome").append(message);

    // reset and show slot and power
    power = defaultpower;
    slots = defaultslots;
    SlotsDisplay();
    PowerDisplay();

    // Update the image
    document.getElementById('itemimage').src = 'epicsword.jpg';

  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};

//Adventure Button Logic
adventurebutton.onclick = function () {
  //Cash Check
  if (cash >= adventurebuttoncash) {
    cash = cash - adventurebuttoncash;
    CashDisplay();

    //Dice Roll
    var dice = {
      sides: 1000,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    }
    var result = dice.roll();

    //Dice Logic

    //ADV Result 1 - Obtain Item
    if (result > advresultstart1 && result < advresultend1) {
      message = "ADVR Result 1 - " + result + "<br>";
      $("#outcome").append(message);
    }
    //ADV Result 2 - Obtain 100% Adventure Fee
    else if (result > advresultstart2 && result < advresultend2) {
      cash = cash + adventurebuttoncash;
      message = "ADVR Result 2 - " + result + "<br>";
      $("#outcome").append(message);
    }
    //ADV Result 3 - Obtain 200% Adventure Fee
    else if (result > advresultstart3 && result < advresultend3) {
      cash = cash + (2 * adventurebuttoncash);
      message = "ADVR Result 3 - " + result + "<br>";
      $("#outcome").append(message);
    }
    //ADV Result 4 - Obtain 1000% Adventure Fee
    else if (result > advresultstart3 && result < advresultend3) {
      cash = cash + (10 * adventurebuttoncash);
      message = "ADVR Result 4 - " + result + "<br>";
      $("#outcome").append(message);
    }
    //ADV Result 5 - Obtain 50% Adventure Fee
    else if (result > advresultstart3 && result < advresultend3) {
      cash = cash + (0.5 * adventurebuttoncash);
      message = "ADVR Result 5 - " + result + "<br>";
      $("#outcome").append(message);
    }
    //ADV Result 6 - Get nothing
    else {
      message = "ADVR Result 6 - " + result + "<br>";
      $("#outcome").append(message);
    }


  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};
