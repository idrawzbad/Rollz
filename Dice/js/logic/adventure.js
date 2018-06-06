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

    //Pull adventure string
    function getRandomText(obj, item) {
      // 1) select which property to operate on.
      var itemArr = obj[item];

      // 2) we already know that the key can only be an integer(between 0 and length -1 )

      // Math.random()   : to generate a random number(between [0-1]).
      // Math.round()    : to round a number to an integer.
      // number % length : to make sure the result would be an integer between 0 and length -1 
      var index = Math.round((Math.random() * itemArr.length)) % itemArr.length;


      return {
        value: itemArr[index],
      }

    }

    //ADV Result 1 - Obtain Item
    if (result > advresultstart1 && result < advresultend1) {
      /*  
      if (confirm("Replace Weapon?")) {
  
          slots = 5;
  
          // save current item as last item & display it
          lastitempower = power;
          lastitemslots = slots;
          lastitemimage = document.getElementById('itemimage').src;
          lastitemtitle = document.getElementById('itemtitle').innerHTML;
          LastItemDisplay();
  
          // change opacity of last item
          document.getElementById('lastitem').style.opacity = "1";
  
          // reset and show slot and power
          power = defaultpower;
          slots = defaultslots;
          SlotsDisplay();
          PowerDisplay();
  
          // Update the image
          document.getElementById('itemimage').src = 'assets/halberd.png';
          document.getElementById('itemtitle').innerHTML = 'The ShatterMoon';
  
          // Hide / Show Mod buttons based on slots left
          SlotCheck();
  
          message = "You've gained a new item! " + "Your last item had " + power + " power. Outcome 1 - Roll:" + result + "<br>";
          $("#outcome").append(message);
      
    } else {
      message = "You threw away the item. Outcome 1 - Roll:" + result + "<br>";
      $("#outcome").append(message);
    }
*/
    }
    //ADV Result 2 - Obtain 100% Adventure Fee
    else if (result > advresultstart2 && result < advresultend2) {
      cash = cash + adventurebuttoncash;

      var answers = [
        "You trip into a pile of poop. But inside the poop you find some gold!",
        "A bandit appears from a tree and threatens you. However, they fall from the tree and die.",
        "A genie appears from no where and says, 'Try again.' ",
        "A troll stops your way and says, 'Pay the toll or none shall pass.' You convince the troll it's reverse day.",
        "You find a box of cereal that has been aged to perfection. Wait a minute... there's a prize!"
      ]

      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

      message = randomAnswer + " You have gained " + adventurebuttoncash + " gold. <br>";
      $("#outcome").append(message);
    }
    //ADV Result 3 - Obtain 200% Adventure Fee
    else if (result > advresultstart3 && result < advresultend3) {
      cash = cash + (2 * adventurebuttoncash);
      var answers = [
        "A sultan appear before you and asks you to find his son. You point at the sun and he pays you to go away.",
        "You find a buried chest. Inside the chest, you find a geocache number and instructions not to take too much.",
        "A mystical crab jumps off your dinner plate and tells you to find his family. You raid the kitchen. ",
        "Ten dwarves are looking for trouble. You jump out and say, 'I AM TROUBLE!' They laugh until they cry and tip you.",
        "You find a wanted poster at a tavern and realize it's you! You promptly turn yourself in for the reward."
      ]

      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

      message = randomAnswer + " You have gained " + (2 * adventurebuttoncash) + " gold. <br>";
      $("#outcome").append(message);
    }
    //ADV Result 4 - Obtain 1000% Adventure Fee
    else if (result > advresultstart4 && result < advresultend4) {
      cash = cash + (10 * adventurebuttoncash);
      var answers = [
        "You discover an oasis in the middle of the desert with a crashed alien ship made of gold parts. You scavenge. ",
        "As you walk through a jungle, you fall into a pit that slides into an abandoned dragon's lair. They left behind some gold. ",
        "An old beggar asks for change. You give them a gold coin. They suddenly morph into a demon and cry uncontrollably.",
        "While walking down a path, an ominous cloud appears overhead and begins raining... GOLD!",
        "A stranger chases after you down the street. 'Mister! You dropped your wallet!' You say nothing."
      ]

      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

      message = randomAnswer + " You have gained " + (10 * adventurebuttoncash) + " gold. <br>";
      $("#outcome").append(message);
    }
    //ADV Result 5 - Obtain 50% Adventure Fee
    else if (result > advresultstart5 && result < advresultend5) {
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
