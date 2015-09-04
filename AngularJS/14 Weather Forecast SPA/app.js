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

forecastApp.controller('homepageController', ["$scope", "cityNameService", function($scope , $resource, cityNameService) {
    $scope.cityName = cityNameService.cityName;
    $scope.$watch("cityName" , function(){
       cityNameService.cityName = $scope.cityName;
    });

}]);

forecastApp.controller('forecastController', ["$scope", "$resource", "cityNameService", function($scope , $resource, cityNameService) {
    $scope.cityName = cityNameService.cityName;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }} );
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.cityName, cnt: 2});
    console.log($scope.weatherResult);
}]);
