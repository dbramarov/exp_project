var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

        username: {
          type: String,
          required: "Need a username.",
          minlength: 1
        },
        email: {
        	type: String,
        	required:"Must have a valid email",
        	unique:true,
            validate: {
                validator: function(value){
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
                }, message: "Invalid email, please try again!"
            },
        },
        password: {
        	type:String,
        	required:"Must have a password",
        	minlength: 7,
	        validate: {
	          validator: function( value ) {
	            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
	          },
	          message: "Password failed, must be at least 8 characters long."
	        }
        },
        event: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
},{timestamps:true});

var User = mongoose.model('User', UserSchema);