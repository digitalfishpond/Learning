/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

(function (){
    
    "use strict";
    
    // #1
    // the second greet overrides the first.
    console.log("#1 ___________________________________________\n\n");
    
    var greet = 'Hello!';
    var greet = '¡Hola!';
    
    console.log(greet);
    
    // #2 
    // A solution to this is to create objects that can be containers, then a specific version (namespace?) can be invoked.
    console.log("\n#2 ___________________________________________\n\n");
    
    var english = {};
    var spanish = {};
    
    english.greet = 'Hello!';
    spanish.greet = '¡Hola!';
    
    console.log(english);
    console.log(spanish);
    console.log(english.greet);
    
    // #3
    // you can have many levels
    // by creating objects within objects:
    console.log("\n#3 ___________________________________________\n\n");
   
    english.gretings = {};
    english.gretings.greet1 = "Heyah!";
    english.gretings.greet2 = "Hi!";
    console.log(english.gretings.greet2);
    
    // #4
    // or you can get the same result with object literal syntax:
    console.log("\n#4 ___________________________________________\n\n");
    
    var french = {
        greetings: {
            greet1: 'Bonjour!',
            greet2: 'Salut!'
        }
    };
    console.log(french);
    console.log(french.greetings.greet2);
    
}());