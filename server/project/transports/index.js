const express = require('express');
const controller = require('./transports.controller.js')();
const router = express.Router();

router.get('/', controller.query);
router.post('/add', controller.save);
router.put('/archive/:id', controller.archive);

module.exports = {
  name: 'Transport',
  router: router,
  version: '1.0.0',
};