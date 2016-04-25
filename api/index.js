var express = require('express');
var router = express.Router();
var controller = require('./controllers');

router.get('/', controller.main);
router.get('/user', controller.usertest);
router.get('/about', controller.about);
router.get('/valami', controller.valami);


module.exports = router;