app.factory('mainFactory', ['$http',function ($http) {
	var factory = {};

	factory.join = function(id, user, callback){
		$http.post('/join/'+id+ "/" +user).then(function(returned_data){
	      if(typeof(callback) == "function"){
	      		console.log(returned_data.data);
	          callback(returned_data.data);
	        } 			
		})
	    .catch(function(err){
	    console.log(err);
	    });			
	}

	factory.delete =function(id){
		$http.delete('/event/'+id).then(function(returned_data){
	      if(typeof(callback) == "function"){
	          callback(returned_data.data);
	        } 			
		})
	    .catch(function(err){
	    console.log(err);
	    });		
	}

	factory.getEvents = function(callback){
		$http.get('/event').then(function(returned_data){
	      if(typeof(callback) == "function"){
	          callback(returned_data.data);
	        } 			
		})
	    .catch(function(err){
	    console.log(err);
	    });		
	}

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