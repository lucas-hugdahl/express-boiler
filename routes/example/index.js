var express = require('express');
var router = express.Router();
const create = require('./Create')
const read = require('./Read')
const update = require('./Update')
const deleteTodos = require('./Delete')

/* CREATE User */
router.get('/', (req, res) => {res.send("Forbidden")});
router.put('/create', create);
router.get('/read', read);
router.patch('/update', update);
router.delete('/delete', deleteTodos);

module.exports = router;
