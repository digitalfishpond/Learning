/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

// all methods have access to call() , apply(), bind() 

(function (){
    
    "use strict";
   
    // an object that includes a property that is a function that uses the 'this' keyword
    var person = {
       firstname: 'John',
       lastname: 'Doe',
       getFullName: function() {
           
           // here 'this' will point to the containing object (so 'person')
           var fullname = this.firstname + ' ' + this.lastname;
           return fullname;
           
       }
    };
    
    // a variable that is a function that uses the 'this' keyword. As it is, 'this' refers to the global context, so 'window' in this case, which doesn't have a 'getFullName' property.
    var logName = function(lang1, lang2) {
     
        console.log('logged: ' + this.getFullName());
        console.log('arguments: ' + lang1 + ' , ' + lang2);
    };
   
    
    // #1
    // .call() --> takes n + 1 arguments: the first argument being the object that 'this' should refer to, and the arguments required by teh function
    console.log("#1 ____________.call()_______________________________\n");
    
    

    logName.call(person, 'en', 'fr');
    
        
    // #2
    // .apply() --> takes 2 arguments: the object that 'this' should refer to, and an array of arguments.
    console.log("\n#2 ____________.apply()_______________________________\n");
    
    
    var logPersonNameWithApply = logName.apply(person, ['en', 'jp']);
    
    
    // #3
    // .bind() --> a ew variable is set with the value being the function followed by .bind() which takes 1 argument: the object that 'this' should refer to. 
    // That new varia\ble is then called with the same effect as the original function, only this time 'this' is set to the required object.
    console.log("\n#3 ____________.bind()_______________________________\n");
    
    
    var logPersonName = logName.bind(person);
    logPersonName('en' , 'pl');
    

        
}());