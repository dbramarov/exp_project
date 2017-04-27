var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		Event.find({})
			.populate('_user')
			.exec(function(err,event){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			res.json({event});
		});
	},
	create: function(req,res){
		console.log(req.body);
		Event.create({_user:req.body.user,title:req.body.title, image:req.body.image, text:req.body.text, date: req.body.date, time:req.body.time},function(err,event){
			if (err){
				res.json(err);
			}
			else{
				console.log('Product Made!', product);
				res.json(product);
			}
		});
	}


}