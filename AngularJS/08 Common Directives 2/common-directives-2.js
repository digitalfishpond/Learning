var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $log) {
    
    $scope.rules = [
        { ruledetail: "must be 5 characters long" },
        { ruledetail: "must not be used elsewhere" },
        { ruledetail: "must be representative" }
    ];
    
    $scope.flag = false;
    
    $scope.updateFlag = function () {
        if ($scope.flag === true) {
            $scope.flag = false;
        } else {
            $scope.flag = true;
        }
    };
   
}]);