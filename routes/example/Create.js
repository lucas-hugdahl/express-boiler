const mongoose = require('mongoose');
const exampleSchema = require('../../models/example');
var Schema = mongoose.Schema;



module.exports = (req, res) => {
    // res.status(201).send(req.body);
    //create a new todo
    let newExample = exampleSchema({
        name: req.body.name
    });
    //save the new task
    newExample.save((err, todo) => {
        if(!err) {
            res.status(201).send(todo);
        } else {
            console.log(err);
            res.status(500).send();
        }
    });
}