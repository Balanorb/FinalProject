var express = require('express');
var router = express.Router();
var controller = require('./controllers');

router.get('/', controller.main);
router.get('/about', controller.about);
router.get('/valami', controller.valami);
router.post('/new', controller.new);

module.exports = router;