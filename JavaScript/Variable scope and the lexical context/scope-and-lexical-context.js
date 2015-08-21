/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

(function (){
    
    "use strict";
    
    // #1 
    // b() declares its own myVar, so it doesn't need to go looking up the context chain for declarations or values.
    function a() {
        var myVar = "a's myVar";
        console.log(myVar);
    }
    
    function b() {
        var myVar = "b's myVar";
        console.log(myVar); 
        a();
    }
    
    var myVar = "global's myVar";
    console.log(myVar);
    b();
    console.log(myVar);
    
    
    console.log("\n____________________________________________\n\n");
    
    // #2 
    // here, c() uses the global myVar: 
    // even though it is called by d() and is immediately above it in the context chain, 
    // lexically, it sits in the global context, 
    // so the global context is the next place the JS engine looks when it can't find the value inside c() itself.
    function c() {
        console.log(myVar);
    }
    
    function d() {
        var myVar = "d's myVar";
        console.log(myVar); 
        c();
    }
    
    console.log(myVar);
    d();
    console.log(myVar);
    
    
    console.log("\n____________________________________________\n\n");
    
    // #3 
    // here, e()'s lexical context is F(), 
    // and so it is f()'s myVar value that the JS engine reaches as it climbs out of the lexical chain at the bottom of which c() finds itself. 
    function f() {
        var myVar = "f's myVar";
        console.log(myVar); 
        function e() {
            console.log(myVar);
        }
        e();
    }
    
    console.log(myVar);
    f();
    console.log(myVar);
    
    
    
}());