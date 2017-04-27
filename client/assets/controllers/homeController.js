app.controller('homeController',["$scope","userFactory","$location","$cookies",function ($scope,userFactory,$location,$cookies) {
    $scope.user = $cookies.get('user_name');


    $scope.create = function(){
        $scope.newEvent.user = $scope.user;
        mainFactory.create($scope.newEvent, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            else{
                $scope.errors = [];
            }
            $scope.newList = {};
            $location.url("/home");
        })
    }

    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        $location.url("/");
    }

}]);