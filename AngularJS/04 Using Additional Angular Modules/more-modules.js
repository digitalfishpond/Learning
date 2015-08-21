// Additional modules must first be imported in the html (see index.html)
// ngMessages (the name of an additional module) is added in the array of dependencies as a string. This module ngMessages is used in the html.
// ngResource -- this particular module makes a new service available: $resource, which can be injected in the controller below
var myApp = angular.module('myApp', ["ngMessages", "ngResource"]);

// note: injected services are iterated (in the identical order) as an array, the last index of which is the containing function. This is to survive minification.
myApp.controller('mainController', ['$resource', function ($resource) {

    console.log($resource);
}]);