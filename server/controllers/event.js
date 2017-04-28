var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		Event.find({})
			.populate('other')
			.exec(function(err,event){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			else{
				res.json({event});
			}
		});
	},
	create: function(req,res){
		console.log(req.body);
		Event.create({user:req.body.user,title:req.body.title, image:req.body.image, text:req.body.text, date: req.body.date, time:req.body.time},function(err,event){
			if (err){
				res.json(err);
			}
			else{
				console.log('Event Made!', event);
				res.json(event);
			}
		});
	},
	join: function(req, res){
		User.findOne({username: req.params.user}, function(err, user){
			console.log(user)
			if(err){
				res.json(err);
			}
			else{
				if(user.event.length > 0){
					for (var i=0; i< user.event.length; i++){
						console.log(user.event[i])
						if(user.event[i] == req.params.id){
							return res.json({error:"You are already going"});
							break;
						}
					}
				}
					Event.findOne({_id: req.params.id},function(err,event2){
						if(err){
							res.json(err);
						}
						else{
							user.event.push(event2);
							user.save(function(err){
								if(err){
									res.json(err);
								}
							});
							event2.other.push(user);
							event2.save(function(err){
								if(err){
									res.json(err);
								}
							});
							// res.json(event2);
						}
					});
			}


		});
	},
	delete: function(req, res){
		Event.deleteOne({_id: req.params.id}, function(err, event){
			if(err){
				res.json(err);
			}
			else{
				res.json(event)
			}		
		})
	},
}