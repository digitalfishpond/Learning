var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
// By default, directives have access to the model on its parent controller. This can be dangerous. By adding the 'scope' property
//      as an empty JS object {}, you isolate the directive's scope.
// If you WANT to access properties from the parent directive:
// You can specify what properties from the parent controller the custom directive has access to with the following steps.
// 1. Add a new custom attribute to the tag in which you invoke the directive, 
// 2. As the value to this new attribute, type the normalised name of the Controller's attribute to be seen.
// 3. Back in the code of the custom directive, in the 'scope' property's object, add a property with the name 
// of the new attribute you just created in the html, normalised to camelCase. (person-name --> personName)
// 4. As the value for this new property, specify a string with one of the four symbols: 
//  "=" for an object
//  "@" for text
//  "&" for a function

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "="
       }
   }
});
