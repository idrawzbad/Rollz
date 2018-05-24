var cash = 10000;
var power = 100;
var button1 = document.getElementById('button1');//60%
var button2 = document.getElementById('button2');//90%
var button3 = document.getElementById('button3');//10%
var buttoncash1 = 300;
var buttoncash2 = 100;
var buttoncash3 = 200;
var dicepower1 = 30;
var dicepower2 = 10;
var dicepower3 = 80;
var diceprob1 = 40; //60%
var diceprob2 = 10; //90%
var diceprob3 = 90; //10%
var slots = 5;
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
  //Cash Check
  if (cash >= buttoncash1) {
    cash = cash - buttoncash1;
    slots = slots - 1;
    document.getElementById('cash').innerHTML = 'Cash : $' + buttoncash1;
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
      document.getElementById('power').innerHTML = 'Power : ' + power;
      PowerDisplay();
      //Update Log
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "60% Success! You rolled a " + outcomeList + " and gained " + dicepower1 + " power increase! <br>";
      $("#outcome").append(message);
    } else {
      document.getElementById('placeholder').innerHTML = 'Fail';
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "60% Fail! You unfortunately rolled a " + outcomeList + " <br>";
      $("#outcome").append(message);
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};

//Button2 90% Logic
button2.onclick = function () {
  //Cash Check
  if (cash >= buttoncash2) {
    cash = cash - buttoncash2;
    slots = slots - 1;
    document.getElementById('cash').innerHTML = 'Cash : $' + buttoncash2;
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
      document.getElementById('power').innerHTML = 'Power : ' + power;
      PowerDisplay();
      //Update Log
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "90% Success! You rolled a " + outcomeList + " and gained " + dicepower2 + " power increase! <br>";
      $("#outcome").append(message);
    } else {
      document.getElementById('placeholder').innerHTML = 'Fail';
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "90% Fail! You unfortunately rolled a " + outcomeList + " <br>";
      $("#outcome").append(message);
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};

//Button3 10% Logic
button3.onclick = function () {
  //Cash Check
  if (cash >= buttoncash3) {
    cash = cash - buttoncash3;
    slots = slots - 1;
    document.getElementById('cash').innerHTML = 'Cash : $' + buttoncash3;
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
      document.getElementById('power').innerHTML = 'Power : ' + power;
      PowerDisplay();
      //Update Log
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "10% Success! You rolled a " + outcomeList + " and gained " + dicepower3 + " power increase! <br>";
      $("#outcome").append(message);
    } else {
      document.getElementById('placeholder').innerHTML = 'Fail';
      outcomeList = dice.roll();
      console.log(outcomeList);
      message = "10% Fail! You unfortunately rolled a " + outcomeList + " <br>";
      $("#outcome").append(message);
    }
  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};