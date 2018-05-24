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
    document.getElementById('message-box').innerHTML = 'No Money';
  }
};
