var forecastApp = angular.module("forecastApp" , ['ngRoute' , 'ngResource']);

forecastApp.config(function($routeProvider) {
    $routeProvider
        .when('/homepage', {
            templateUrl: 'pages/homepage.html',
            controller: 'homepageController'
        }).when('/forecastpage', {
            templateUrl: 'pages/forecastpage.html',
            controller: 'forecastController'
        }).otherwise('/homepage', {
            templateUrl: 'pages/homepage.html',
            controller: 'homepageController'
        })
});

forecastApp.service("cityNameService", function(){
    this.cityName = "Lodz, PL";
});

forecastApp.controller('homepageController', ["$scope", "cityNameService", function($scope , cityNameService) {
    $scope.cityName = cityNameService.cityName;
    $scope.$watch("cityName" , function(){
       cityNameService.cityName = $scope.cityName;
    });
}]);

forecastApp.controller('forecastController', ["$scope", "cityNameService", function($scope , cityNameService) {
    $scope.cityName = cityNameService.cityName;
}]);
