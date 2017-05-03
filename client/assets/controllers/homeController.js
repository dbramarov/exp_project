app.controller('homeController',["$sce","$scope","userFactory",'mainFactory',"$location","$cookies",function ($sce,$scope,userFactory,mainFactory,$location,$cookies) {
    $scope.user = $cookies.get('user_name');
    $scope.events = [];
    $scope.errors = [];
    $scope.date = new Date();
 
    if(!$scope.user){
        $location.url('/')
    }

    var main = function(){
        mainFactory.getEvents(function(data){
            $scope.events = data.event;
            console.log($scope.events)
        })
    }
    main();

    $scope.create = function(){
        $scope.newEvent.user = $scope.user;
        if($scope.newEvent.date <= $scope.date){
            $scope.errors.push("Please enter a future date. Thank you.")
            $location.url("/create");

        }
        else{  
            mainFactory.create($scope.newEvent, function(data){
                if(data.errors){
                    console.log(data.errors);
                    $scope.errors = data.errors;
                    $location.url("/create");
                }
                else{
                    $scope.errors = [];
                    $location.url("/home");
                }
                
            })
        }
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
            else{
            $scope.errors = []
            main();
            }
        })
        $scope.errors = []
        main();
    }

    $scope.home = function(){
        $location.url('/home');
    }

    $scope.crt = function(){
        $location.url('/create');
    }
}]);