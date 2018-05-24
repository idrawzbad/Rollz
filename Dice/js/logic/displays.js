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

// Last Item Display
function LastItemDisplay() {
  document.getElementById('lastitemimage').src = lastitemimage;
  document.getElementById('lastitemtitle').innerHTML = "Last Item:" + lastitemtitle;
  document.getElementById('lastitempower').innerHTML = "Power:" + lastitempower;
  document.getElementById('lastitemslots').innerHTML = "Slots:" + lastitemslots;
}

// Slot check - hide button 123 if slot is 0
function SlotCheck() {
  var modbuttons = document.getElementById("modbuttons");

  // Hide mod buttons after slot reaches 1
  if (slots <= 0) {
    modbuttons.style.pointerEvents = "none";
    modbuttons.style.opacity ="0.2";
  }
  else {
    modbuttons.style.pointerEvents = "auto";
    modbuttons.style.opacity ="1";
  }
};
