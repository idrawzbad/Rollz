//Button1 60% Logic
button1.onclick = function () {
  if (slots >= 1) {
    //Cash Check
    if (cash >= buttoncash1) {
      cash = cash - buttoncash1;
      slots = slots - 1;
      CashDisplay();
      SlotsDisplay();

      // Hide / Show Mod buttons based on slots left
        SlotCheck();

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

        // Hide / Show Mod buttons based on slots left
        SlotCheck();

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

      // Hide / Show Mod buttons based on slots left
      SlotCheck();

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
