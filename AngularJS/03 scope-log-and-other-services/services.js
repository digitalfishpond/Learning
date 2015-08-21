var myApp = angular.module('myApp', []);

// $scope, $log, $filter are injected by angular. They do not have to be defined explicitely, but they can be added to.
// note: injected services are iterated (in the identical order) as an array first, the last index of which is the containing function. This is to survive minification.
myApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope, $log, $filter) {

    console.log("########################################");
    
    // The $scope object is injected by angular, and can be injected anywhere from the arguments 
    $scope.name = "Andrew";
    $scope.getname = function () {
        return $scope.name;
    };
        
    console.log($scope);
    console.log("$scope.getname returns: " + $scope.getname());
    
    console.log("########################################");
    
    // The $log object is an angular object that is useful for logging to the console in a pre-define format. It replaces console.log with extra functionality/
    $log.log("this is a log using $log.log");
    $log.info("this is an info using $log.info");
    $log.debug("this is a debug comment using $log.debug");
    $log.warn("this is a warning using $log.warning");
    $log.error("this is an error using $log.error");
    
    console.log("########################################");
    
    // $filter is used for formatting data displayed to the user.
    $log.log("$scope.name = " + $scope.name);
    $log.log("$filter('uppercase')($scope.name) = " + $filter("uppercase")($scope.name));
    
    console.log("########################################");
}]);
