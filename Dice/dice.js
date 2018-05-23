var dice = {
  sides: 100,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  
  if (result > 50) {
    document.getElementById('placeholder').innerHTML = 'Success';
} else {
  document.getElementById('placeholder').innerHTML = 'Fail';
}
//  printNumber(result);
};




