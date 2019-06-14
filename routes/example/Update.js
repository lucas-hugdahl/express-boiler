//error codes: 1000 = user not found
const mongoose = require('mongoose');
const exampleSchema = require('../../models/example');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    exampleSchema.findById(req.body._id, (err, item) => {
        if(!err) {
            item.name = req.body.name
            item.save((err) => {
                if(!err) {
                    res.send(item);
                } else {
                    console.log(err);
                    res.status(500).send();
                }
            });
        } else {
            if(err) {
                console.log(err);
                res.status(500).send();
            };
        };
    });
}