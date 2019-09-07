var express = require('express');
var router = express.Router();

const getData = require("./get-data");
const submitVote = require("./submit-vote");
const updateSettings = require("./update-settings");

/* GET home page. */
router.get('/get-data', getData);
router.post('/submit-vote', submitVote);
router.post('/update-settings', updateSettings);

module.exports = router;
