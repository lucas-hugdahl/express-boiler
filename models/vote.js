// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var voteSchema = new Schema({
 vote: String
});

// the schema is useless so far
// we need to create a model using it
var Vote = mongoose.model('Vote', voteSchema);

// make this available to our users in our Node applications
module.exports = Vote;