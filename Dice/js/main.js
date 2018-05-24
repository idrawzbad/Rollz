/*
===================================
Loading Various Scripts
===================================
*/
var l = new Loader();
l.require([


  // Scripts Loaded here. Organize this accordingly

    // Value Scripts
    "js/values/values.js",

    // Logic Scripts
    "js/logic/displays.js",
    "js/logic/modbuttons.js",
    "js/logic/resetbutton.js",
    "js/logic/adventure.js"


  ],


    function() {
        // Callback
        console.log('All Scripts Loaded');
    });
