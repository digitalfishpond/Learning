/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

(function () {
    "use strict";

    function Person(name, surname) {
        //the 'new' keyword creates an empty object of the type of the function conrtstructor that it is called on, and then fills it with the properties of that function constructor:
        console.log(this); //logs "Person {}"
        this.name = name;
        this.surname = surname;
        console.log(this); //logs eg. "Person {name: "John", surname: "Doe"}
    }

    var john = new Person("John", "Doe");

    var jane = new Person("Jane", "Doe");

    //the following line will add this functionality to every object that is based on Person (short of calling them 'instances').
    Person.prototype.getFormalName = function () { return this.surname + ", " + this.name; };

    //That getFormalName function can now be called from objects that were created from Person, and 'this' will be set to be the extending object:
    console.log(john.getFormalName());
    
}());