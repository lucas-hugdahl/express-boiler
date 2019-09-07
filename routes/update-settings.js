const mongoose = require('mongoose');
const Settings = require('../models/settings');
const CONSTANTS = require('../config/config');
mongoose.connect(CONSTANTS.DB_AUTH, {useNewUrlParser: true});

module.exports = (req, res) => {
  const data = req.body;
  let currentTime = Date.now();
  
  if (data) {
    data.created = currentTime;
    updateSettings(data)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err || "Please try again");
    });
  } else {
    res.status(500).send(err || "Try again");
  }
}

function updateSettings(data) {
  return new Promise((resolve, reject) => {
    var NewSettings = new Settings(data);
    NewSettings.save(function(err) {
      if (!err) {
        resolve("Success");
      } else {
        reject(err);
      }
    });
  });
}