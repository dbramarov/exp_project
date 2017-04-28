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
	app.post('/join/:id/:user', function(req, res) {
		event.join(req, res);
	});
	app.delete('/event/:id', function(req, res) {
		event.delete(req, res);
	});

}