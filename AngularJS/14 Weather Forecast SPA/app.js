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



forecastApp.controller = ('homepageController', ["$scope" , function($scope){

}]);

forecastApp.controller = ('forecastController', ["$scope" , function($scope){

}]);
