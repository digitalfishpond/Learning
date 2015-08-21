/**
 * Created by Denis on 18-08-2015.
 */
// ngRoute is a module that allows Routing, convenient for SPAs - $routeProvider and $routeParams become available to be injected
var myApp = angular.module('myApp', ['ngRoute']);

// The .config function is used in conjunction with the 'ng-view' directive in the HTML
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

    $log.info($location.path());

}]);
myApp.controller('secondController', ['$scope','$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {

    $log.info($location.path());
    // $routeParams will have the property 'num' now because it is declared in $routeProvider.when('/second/:num'...
    // maybe worth noting that $routeParams is a singleton unlike $scope which is an exception.
    $scope.num = $routeParams.num || 1;


}]);