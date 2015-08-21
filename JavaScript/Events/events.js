/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50*/
/*global define */


// While everything within the JavaScript Engine runs synchronously, external requests can be handled asynchronously.

// Events are handled as follows:
// for example a click event might be generated. That click event will wait in the Event Queue for the execution context stack to be empty. 
// When the context stack is empty, the event queue gets looked at. If it sees an event in the queue, it will look to see if any functions are listening for that event to run. 


(function () {
    "use strict";

// #1 
// This function simulates a function that takes a long time to run
    function waitThreeSeconds() {
        var ms = 3000 + new Date().getTime();
        var timewaster = 0;
        while (new Date() < ms) { timewaster++; }
        console.log('finished long-running function');
    }

// #2 
// The function to run if a click event is registered -- as per 'addEventListener' below
    function clickHandler() {
    
// #4 
// This will be the last line logged because events are checked AFTER the excecution stack is empty. This means that long running functions can disrupt events by causing a delay.
        console.log('click event!');
    }

// Listen for the click event
    document.addEventListener('click', clickHandler);

// #3 
// Run the whole show
    waitThreeSeconds();
    console.log('finished execution');

}());