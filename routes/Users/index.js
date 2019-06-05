var express = require('express');
var router = express.Router();
const create = require('./CreateUsers')

/* CREATE User */
router.post('/create', create);

module.exports = router;
