// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var settingsSchema = new Schema({
  winner: String,
  created: String
});

// the schema is useless so far
// we need to create a model using it
var Settings = mongoose.model('Settings', settingsSchema);

// make this available to our users in our Node applications
module.exports = Settings;