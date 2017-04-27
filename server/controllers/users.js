var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = {

	create: function(req,res){
		if(req.body.password != req.body.passwordConfirm){
			res.json({errors:"Password does not match"})
		}
		else{
			if(req.body.password){
				req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
			}
			User.create(req.body,function(err,user){
		        if(err){
		            res.json(err);
		        }
		        else{
		            console.log('Created User!',user);
					res.json(user);
		        }	
			})
		}	
	},
	login: function(req,res){
		User.findOne({email:req.body.email}, function(err,user){
			if(err){
				res.json(err);
			}
			else if(!user){
				res.json({errors: "This email does not exist!"});
			}
			else if(bcrypt.compareSync(req.body.password, user.password)){
				res.json(user);
			}
			else{
				res.json({errors:"Sorry wrong password"});
			}
		})
	}
	
}