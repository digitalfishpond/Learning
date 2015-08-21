var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    
    // defining these two variables to be bound in the html
    $scope.handle = ' ';
    $scope.handleToLower = function () {
        return $filter('lowercase')($scope.handle);
    };
    
}]);