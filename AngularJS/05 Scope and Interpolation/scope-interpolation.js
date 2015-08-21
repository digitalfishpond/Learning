var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {
    
    //this variable will now be usable directly in the html with double curly brackets and without the "$scope." prefix eg. {{ userFirstName }}
    $scope.userFirstName = "Emilia";
    
}]);