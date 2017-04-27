app.factory('mainFactory', ['$http',function ($http) {
	var factory = {};

	  factory.create = function(event, callback){
	    console.log(event)
	    $http.post('/event', event).then(function(returned_data){
	      if(typeof(callback) == "function"){
	          callback(returned_data.data);
	        }      
	    })
	    .catch(function(err){
	    console.log(err);
	    });
	  }

	return factory;
}])