app.controller('homeController',["$sce","$scope","userFactory",'mainFactory',"$location","$cookies",function ($sce,$scope,userFactory,mainFactory,$location,$cookies) {
    $scope.user = $cookies.get('user_name');
    $scope.events = [];
    $scope.errors = [];
 
    if(!$scope.user){
        $location.url('/')
    }

    var main = function(){
        mainFactory.getEvents(function(data){
            $scope.events = data.event;
        })
    }
    main();

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

    $scope.delete = function(id){
        mainFactory.delete(id)
            main();
    }

    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        $location.url("/");
    }

    $scope.urlBuilder = function(location){
        return $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyCKTWbPjOUEEwcQThyVaw3TL_ETeMZIcik&q=" + location);
    }

    $scope.join = function(id){
        mainFactory.join(id, $scope.user, function(data){
            if(data.error){
                if(typeof(data.error)=='object'){
                    angular.forEach(data.error, function(v,k){
                        $scope.errors.push(data.error[k].message)
                    });
                    $location.url('/home');
                }
                else{
                    $scope.errors.push(data.error);
                    $location.url('/home');
                }
            }
            
        })
        main();
    }

    $scope.home = function(){
        $location.url('/home');
    }

    $scope.crt = function(){
        $location.url('/create');
    }
}]);