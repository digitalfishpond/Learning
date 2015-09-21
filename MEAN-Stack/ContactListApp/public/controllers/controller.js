myApp.controller('appController', ['$scope', '$http', function($scope, $http){

	console.log("hello from controller");

	$http.get('/contactlist').success(function (response) {
		console.log('I got the data I requested');
		$scope.contactlist = response;
	});

}]);