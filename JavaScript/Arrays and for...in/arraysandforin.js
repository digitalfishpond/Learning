/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

(function () {
    "use strict";

    // #4: by adding a name:value pair to the array prototype, we are actually adding a property to an object, but the contents of the array are also properties of the object, so we are in effect adding a new item to the array
    Array.prototype.thisCoolCustomProperty = 'some useful value on Array.prototype, not an item in "arr"';

    // #1: an array is an object with name:value properties. Here we specify the values, and the name of each value is its index.
    var arr = ['John', 'Jane', 'Jim'];

    // #2: here prop will become a number: the index of each item. This Number is actually the name of the item on the name:value pair.
    // #3: var prop is declared outside of the for...in loop for clarity as it would be scoped to the container anyway, and not just to the loop as in other languages.
    var prop;
    for (prop in arr) {
        console.log(prop + ': ' + arr[prop]);
    }


    console.log('\n-------------------------------------------\n\n');


    // #5: the for...in loop is therefore a dangerous way of iterating through the elements of an array. A better way is a regular for loop:
    var i;
    for (i = 0; i < arr.length; i++) {
        console.log(i + ": " + arr[i]);
    }


    console.log('\n-------------------------------------------\n\n');

    // #6: alternatively protect the for...in loop with an if statement that checks if the property belongs to the object itself or somewhere on the proto chain
    var prop2;
    for (prop2 in arr) {
        if (arr.hasOwnProperty(prop2)) {
            console.log(prop2 + ' in if-protected for..in loop: ' + arr[prop2]);
        }
    }
}());