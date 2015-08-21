/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50*/
/*global define */

//A closure is a function that has access to the parent scope, even after the parent function has closed

(function () {
    "use strict";

// #1 
// variables declared outside of a function have global scope:
    console.log("#1 ____________Variable with global scope______________________________\n\n");
    
    
    var a = "declared in global context";
    function logGlobalA() {
        console.log(a);
    }
    logGlobalA();
    
    
// #2 
// variables declared inside of a function have local scope (unless they are declared without the 'var' keyword in which case they will be global):
    console.log("\n#2 ____________Variable with local scope_______________________________\n\n");

    
    function logLocalA() {
        var a = "declared inside function context";
        console.log(a);
    }
    logLocalA(); // logs the local value of a inside logLocalA
    logGlobalA(); // assigning a value to local variable a did not affect the global varaiable a: They are two distinct variables, and the local one died when its containing function ended.
    
    
// #3 
// Sometimes, you want a local variable to keep its value from one invocation of its function to the next.
// in the next example, we don't want the counter variable to be global (changeable by anything other than the function itself)
// but the fact that the counter is declared and initialised inside the function means that a new object is created with the value '0' every time -- not ideal!
    console.log("\n#3 ____________Variable with local scope_______________________________\n\n");
    
    
    function add() {
        var counter = 0;
        counter++;
        console.log(counter);
    }

    add();
    add();
    add();
    
// #4 
// So we can make a closure.
// We wrap the functionality of the function in a function that gets returned from a containing IIFE (Immediately Invoked Function Expression).
// The variable we wish to make persist its value is initialised outside that returned function -- in the returned function's outer context.    
// That IIFE is set to be the value of the variable called 'add2'.
// Because 'counter' is declared in the outer context of the returned function, its value remains available, persisting even after the execution context is dead. 
    console.log("\n#4 ____________Closure________________________________________________\n\n");
    
    
    var add2 = (function () {
        var counter = 0;
        return function () {
            counter++;
            console.log(counter);
        };
    }());

    add2();
    add2();
    add2();
    
 
// #5 
// Here the variable is declared outside of a function that is saved into an array. 
// The value of the variable 'i' is also persisted here, so that when the functions that are pushed to the array are called, i's value is always 3
// This is because the value of the outer lexical context's i was 3 when the for loop failed and stopped increasing it, 
// and that value persists even though the outer execution context is dead
    console.log("\n#5 ____________Unwanted Closure_______________________________________\n\n");
    
    
    function functionGenerator() {
        var arr = [];
        var i;
        for (i = 0; i < 3; i++) {
            arr.push(
                function () {
                    console.log(i);
                }
            );
        }
        return arr;
    }
    
    var myArray = functionGenerator();

    myArray[0]();
    myArray[1]();
    myArray[2]();
    
// #5
// To avoid persistent values and instead get the value that was available at the creation of the function, the following trick can be used:
// wrap the function that should end up with the value as it stood at its creation within an IIFE that takes a parameter. 
// The value to be snapshot is then passed through the immediate invocation's argument, 
// and it is now the new variable that the inner function looks at when it is called to run. 
// That new variable doesn't get changed: just a new instance is created with each invocation of the parent function.
// So when the function is called from the array, its outer lexical context's 'j' variable still has the value it had when it was created.
    console.log("\n#5 ____________Solution to Unwanted Closure____________________________\n\n");
    
    
    function functionGenerator2() {
        var arr = [];
        var i;
        for (i = 0; i < 3; i++) {
            arr.push(
                (function (j) {
                    return function () {
                        console.log(j);
                    };
                }(i))
            );
        }
        return arr;
    }
    
    var myArray2 = functionGenerator2();

    myArray2[0]();
    myArray2[1]();
    myArray2[2]();
    
}());