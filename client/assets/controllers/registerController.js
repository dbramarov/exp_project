app.controller('registerController',["$scope","userFactory","$location","$cookies",function ($scope,userFactory,$location,$cookies) {
	
    $scope.user = $cookies.get('user_name');
	$scope.messages = [];

    // if(!$scope.user){
    //     $location.url('/')
    // }

    $scope.create = function(){
        userFactory.create($scope.newUser, function(data){
            if(data.errors){
                if(typeof(data.errors) == "object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    })
                }
                else{
                    $scope.messages.push(data.errors);
                }
                $location.url("/register");
            }
            else{
                console.log("USERNAME",data.username)
                $cookies.put("user_name", data.username);
                console.log($cookies.get("user_name"));
                $location.url("/home");
            }
        })
    },
    $scope.login = function(){
    	userFactory.login($scope.user, function(data){
    		if(data.errors){
    			$scope.messages.push(data.errors);
    			$location.url('/login');
    		}
    		else{
    			$cookies.put('user_name',data.username);
    			$scope.user = data;
    			$location.url('/home');
    		}
    	})
    }
}]);