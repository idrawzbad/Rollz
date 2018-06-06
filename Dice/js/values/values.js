var cash = 20000;
var power = 100;
var slots = 5;

// setting default values for reset
var defaultpower = 100;
var defaultslots = 5;

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

//Adventure Odds

var advresultstart1 = 1; //Obtain Item (20%)
var advresultstart2 = 201; //Obtain 100% of your Adventure fee (30%)
var advresultstart3 = 501; //Obtain 200% of your Adventure fee (9%)
var advresultstart4 = 591; //Obtain 1000% of your Adventure fee (1%)
var advresultstart5 = 601; //Obtain 50% of your Adventure fee (30%)

var advresultend1 = 200;
var advresultend2 = 500;
var advresultend3 = 590;
var advresultend4 = 600;
var advresultend5 = 900;

//Adventure Dialogue Strings

var advresultstring_old = {
    string1:"Potato 1 has been located.",
    string2:"Potato 2 has been located.",
    string3:"Potato 3 has been located."
}

var advresults = {
    advresultstring1: ["star wars", "lotr", "moonlight", "avengers"],
    advresultstring2: ["scott pilgrim", "harry potter", "eragon"],
    advresultstring3: ["starbound", "skyrim", "bioshock", "fallout"]
}

//Begin
document.getElementById('cash').innerHTML = 'Cash : $' + cash;
document.getElementById('power').innerHTML = 'Power : ' + power;
document.getElementById('slots').innerHTML = 'Slots : ' + slots;
