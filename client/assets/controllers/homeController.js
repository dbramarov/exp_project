app.controller('homeController',["$scope","userFactory","$location","$cookies",function ($scope,userFactory,$location,$cookies) {

    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        $location.url("/");
    }

}]);