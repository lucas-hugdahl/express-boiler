const mongoose = require('mongoose');
const exampleSchema = require('../../models/example');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    exampleSchema.find({}, (err, item) => {
        if(!err) {
            res.status(200).send(item);
        } else {
            res.status(500).send();
        }
    })
}