const express = require('express');
const router = express.Router();
const controller = require('./transports.controller.js')();

router.get('/', controller.query);
router.get('/reset', controller.reset);
router.post('/', controller.save);
router.put('/status/:id', controller.archive);
router.put('/:id', controller.update);

module.exports = {
  name: 'Transport',
  router: router,
  version: '1.0.0',
};