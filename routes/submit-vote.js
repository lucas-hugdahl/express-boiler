const mongoose = require('mongoose');
const Vote = require('../models/vote');
const CONSTANTS = require('../config/config');
mongoose.connect(CONSTANTS.DB_AUTH, {useNewUrlParser: true});

module.exports = (req, res) => {
  const data = req.body;
  if (data.vote && data.vote == 'boy' || data.vote == 'girl') {
    submitVote(data)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err || "Please try again");
    });
  } else {
      res.status(500).send("Invalid vote");
      console.log("here")
  }
}

function submitVote(data) {
  return new Promise((resolve, reject) => {
    var NewVote = new Vote(data);
    NewVote.save(function(err) {
      if (!err) {
        resolve("Success");
      } else {
        reject(err);
      }
    });
  });
}



