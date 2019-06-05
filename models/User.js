// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
	organization_id: String,
	first_name: String,
	last_name: String,
	email: String,
	password: String,

	//0: disabled
	//1: first login/not activated
	//2: active
	account_status: Number,
	date_added: String,
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('users', userSchema);

// make this available to our users in our Node applications
module.exports = User;