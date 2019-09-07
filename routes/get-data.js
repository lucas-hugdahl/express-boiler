const mongoose = require('mongoose');
const Setting = require('../models/settings');
const Vote = require('../models/vote');
const CONSTANTS = require('../config/config');
mongoose.connect(CONSTANTS.DB_AUTH, {useNewUrlParser: true});

module.exports = (req, res) => {
    let allVotes = null;
    let dataObj = {};

    getSettings()
    .then((settings) => {
      dataObj.settings = settings
      return getVotes()
    })
    .then((voteData) => {
      dataObj.votes = voteData
      res.status(200).send(dataObj);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err);
    }) 
}
function getSettings() {
  return new Promise((resolve, reject) => {
     //Get settings
      Setting.find({}, null, { sort: { created : -1 } }, function(err, settings) {
        if (!err) {
          // console.log(settings)
          resolve(settings[0]);
        } else {
          reject(err);
        }
      });
  });
}

function getVotes() {
  return new Promise((resolve, reject) => {
     //Get all votes
     Vote.find((err, votes) => {
        if (!err) {
          //loop through votes and convert to percentage
          let total = votes.length;
          let girlVotes = 0;
          let boyVotes = 0;
          
          votes.forEach((v) => {
            if (v.vote == 'girl') {
              girlVotes += 1;
            } else {
              boyVotes += 1;
            }
          });

          let boyPercentage = (boyVotes / total);
          let girlPercentage = (girlVotes / total);

          resolve({boy: boyPercentage, girl: girlPercentage});
        } else {
          reject(err);
        }
     });
  });
}




