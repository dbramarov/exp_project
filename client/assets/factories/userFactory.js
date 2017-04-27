app.factory('userFactory', ['$http',function ($http) {

	var factory = {};

	factory.create = function(newUser, callback){
		$http.post('/users',newUser).then(function(returned_data){
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}			
		})
		.catch(function(err){
			console.log(err);
		});
	},

	factory.login = function(user,callback){
		console.log(user)
		$http.post('/login',user).then(function(returned_data){
			if(typeof(callback) == 'function'){
				callback(returned_data.data);
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}
	return factory;
}])