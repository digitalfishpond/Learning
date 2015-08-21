/**
 * Created by Denis on 18-08-2015.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

myApp.controller('mainController', ['$scope','$location', '$log', function($scope, $location, $log) {



}]);

myApp.controller('secondController', ['$scope','$location', '$log', function($scope, $location, $log) {



}]);

// Here is the custom directive. Its name will be normalised to "search-result" in the html
// Whatever is inserted in the returned object will be the actual directive.
myApp.directive("searchResult", function() {

    return {

        // A: Attribute, E: element, C: Class, M: coMMent
        restrict: 'AECM',

        //this is the output for this custom directive "searchResult" --> "search-result" in the html
        template: "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>Poisson, Denis</h4><p class='list-group-item-text'>Ul. Ziolowa 5, Lodz, 91-364, Poland </p> </a>",

        // replace is false by default. It removes the calling html tags altogether and leaves nothing but the template.
        replace: true
    }
})