var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var event = require('../controllers/event.js')

module.exports = function(app){

	app.post('/login', function(req, res) {
		users.login(req, res);
	});
	app.post('/users', function(req, res) {
		users.create(req, res);
	});
	app.get('/event',function(req,res){
	event.index(req,res);
	});
	app.post('/event', function(req, res) {
	event.create(req, res);
	});
}