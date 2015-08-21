/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50*/
/*global define */

// Every function has a 'prototype' property 
// It is ONLY used when using the function as a constructor.
// The .prototype property of a constructor function sets the __proto__ property of any object that is created from it (before or after creation).

(function () {
    "use strict";

// #1 
// using a function as a constructor
    console.log("#1 ____________using a function as a constructor______________________________\n\n");
    
    
    
    function Person(firstname, lastname) {
        console.log(this);
        this.firstname = firstname;
        this.lastname = lastname;
        console.log('Hello from inside the Person function');
    }
    


// #2 
// creating objects from that constructor function
    console.log("\n#2 ____________creating objects_______________________________________________\n\n");
    
    
    var john = new Person('John', 'Doe');
    console.log(john);
    
    var jane = new Person('Jane', 'Doe');
    console.log(jane);
    
// #3
// setting a new property on the the .prototype property of the constructor function.
    console.log("\n#3 ____________creating Person.prototype.getFullName___________________________\n\n");
       
    Person.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    
// #4 
// the property that was set on the .prototype property of the constructor function is available on objects created form it.
    console.log("\n#4 ____________Person.prototype.getFullName() is called as john.getFullName()___\n\n");
    
    console.log(john.getFullName());
    
}());