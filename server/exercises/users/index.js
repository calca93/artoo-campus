var express = require('express');
var router = express.Router();
var controller = require('./users.controller')();

router.get('/', controller.query);
// router.post('/', controller.save);
// router.delete('/', controller.remove);

module.exports = {
   name: "users router",
   version: '0.1.0',
   router: router,
};