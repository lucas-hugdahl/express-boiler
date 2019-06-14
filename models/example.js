// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var exampleSceme = new Schema({
	name: String
	
});

// the schema is useless so far
// we need to create a model using it
var todos = mongoose.model('exampleItems', exampleSceme);

// make this available to our users in our Node applications
module.exports = todos;