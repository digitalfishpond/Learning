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

myApp.directive("searchResult", function() {

    return {

        restrict: 'AECM',

        // templateUrl redirects to an external template so that custom directives don't get weighed down with template html
        templateUrl: "directives/searchresult.html",

        replace: true
    }
})