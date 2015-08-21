/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

(function (){
    
    "use strict";
    
    // #1
    // primitives are 'by vaule' --> the value is copied to the new variable so that there are two distinct instances of the value.
    console.log("#1 ____________Primitives: By Value_______________________________\n\n");
    
    var a = 3;
    var b;
    b = a;
    console.log("value of a: " + a);
    console.log("value of b: " + b);
    a = 2;
    console.log("value of a: " + a);
    console.log("value of b: " + b);
    
    // #2
    // objects are by reference --> THere is only one object in memory, and many variables may point to it.
    console.log("#2 ____________Objects: By Reference______________________________\n\n");
    
    var c = {
        name: "Joe",
        surname: "Dunn"};
    var d;
    // setting d to be a referrence to the same object as the one to which c points.
    d = c;
    console.log("value of c.name: " + c.name);
    console.log("value of d.name: " + d.name);
    //only changing the 'name' value of c , not touching d
    c.name = "Jane";
    // the 'name' values of both c and d have been changed (one object being changed, two references to it)
    console.log("value of c.name: " + c.name);
    console.log("value of d.name: " + d.name);
        
}());