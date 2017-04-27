var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/welcome.html',
		})
		.when('/register', {
			templateUrl: 'partials/register.html',
		})
	    .when("/login", {
	        templateUrl:"partials/login.html"
	    })	
	    .when("/home", {
	        templateUrl:"partials/home.html"
	    })		    		
		.otherwise({
			redirectTo: '/'
		})	
});