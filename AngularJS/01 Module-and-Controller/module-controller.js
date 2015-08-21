// the string passed in as the first parameter of angular.module is the string set as the value of 'ng-module' in the opening html tag of the dependent html file.
var myApp = angular.module("myApp", []);

// the variable set above now has an associated function 'controller which takes two properties: the name of the controller, (passed as the value of 'ng-controller' in the html file), and a function which will define the behaviour of that part of the html file.
myApp.controller("mainController", function () {

});

