/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

//Notice that 'instanceof' and 'typeof' are operators, not functions!

(function () {
    "use strict";

    var a = 3;
    console.log(typeof a);//logs 'number' -- !!!NOT Number!!! 'number' is a primitive, 'Number' is an object with additional properties.

    var b = "hello";
    console.log(typeof b);//logs 'String'

    var c = {};
    console.log(typeof c);//logs 'object'

    var d = [];
    console.log(typeof d);//logs: 'object'!!! not ideal...

    // #1 
    // to get a more meaningful output about an array's type, use the following. Obviously, the .call() sets the 'this' value of the Object on which 'toString' is called to be 'd'
    console.log(Object.prototype.toString.call(d));

    // #2 
    // notice that these output the Object that the primitives are related to, even though they are in fact set as primitives
    console.log(Object.prototype.toString.call(a));
    console.log(Object.prototype.toString.call(b));
    console.log(Object.prototype.toString.call(c));

    console.log("___________________________________________\n\n");

    function Person(name) {
        this.name = name;
    }

    var e = new Person('Jane');

    console.log("The following happens with 'var e = new Person('Jane');");

    console.log("\nconsole.log(e) -->");
    console.log(e);

    console.log("\nconsole.log(typeof e) --> ");
    console.log(typeof e);

    console.log("\nconsole.log(Object.prototype.toString.call(e)) --> ");
    console.log(Object.prototype.toString.call(e));

    console.log("\nconsole.log(e.name) --> ");
    console.log(e.name);

    // #3 
    // in the following line, 'e instance Person' MUST be in brackets or it will be included in the resolution of the instanceof operation.
    console.log("\nconsole.log(e instanceof Person) --> " );
    console.log(e instanceof Person);
}());