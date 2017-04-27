app.controller('welcomeController', ['$scope','$location', '$cookies', function($scope, $location, $cookies) {

	$scope.register = function(){
		$location.url("/register");
	}

	$scope.login = function(){
		$location.url("/login");
	}

}]);