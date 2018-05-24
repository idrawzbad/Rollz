
//Reset Button Logic
resetbutton.onclick = function () {
  //Cash Check
  if (cash >= resetbuttoncash) {
    cash = cash - resetbuttoncash;
    slots = 5;
    CashDisplay();


    message = "You've Reset your item! " + "Your last item had " + power + " power" + "<br>";
    $("#outcome").append(message);

    // save current item as last item & display it
    lastitempower = power;
    lastitemslots = slots;
    lastitemimage = document.getElementById('itemimage').src;
    lastitemtitle = document.getElementById('itemtitle').innerHTML;
    LastItemDisplay();

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

  }
  else {
    document.getElementById('placeholder').innerHTML = 'No Money';
  }
};
