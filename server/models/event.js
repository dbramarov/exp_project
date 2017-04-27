console.log('Event Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new mongoose.Schema({
	_user:{
		type: Schema.Types.ObjectId, ref: "User"
	}
	title:{
		type:String,
		required:'Needs to have a title.'
	},
	image:{
		type:String,
	},
	text:{
		type: String,
		required: 'Please enter a decription of the event.',
		minlength: 10,
	},
	date:{
		type: Date,
		required: 'Please the date of the event.',
	},
	time:{
		type: String,
		required:'What time does this event start?',
	},
	other:{
		type:String,
	}
},{timestamps:true});

mongoose.model('Event',EventSchema);
var Event = mongoose.model('Evetn');