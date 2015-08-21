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

// it is possible to write custom services that are accessible from other controllers through DI:
myApp.service('nameService', function(){
    var self = this;
    this.name = "Denis Poisson";
    this.nameLength = function(){
        return self.name.length;
    };
});

// inject the service just like any other service in teh controller parameters:
myApp.controller('mainController', ['$scope','$location', '$log', "nameService", function($scope, $location, $log, nameService) {

    $log.log(nameService.name);
    $log.log(nameService.nameLength());
    $log.info($location.path());

    // the local scope name is set to the singleton's name value
    $scope.name = nameService.name;
    // a watcher is set on the scope to check for changes and update the namesService.name value accordingly
    $scope.$watch("name", function() {
       nameService.name = $scope.name;
    });

}]);
myApp.controller('secondController', ['$scope','$location', '$log', 'nameService', function($scope, $location, $log, nameService) {

    $log.info($location.path());
    // the local scope name is set to the singleton's name value
    $scope.name = nameService.name;


}]);