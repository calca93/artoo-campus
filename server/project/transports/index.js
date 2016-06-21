const express = require('express');
const router = express.Router();
const controller = require('./transports.controller.js')();

router.get('/', controller.query);
router.get('/reset', controller.reset);
router.get('/:id', controller.getById);
router.post('/', controller.save);
router.post('/:id', controller.update);
router.put('/archive/:id', controller.archive);

module.exports = {
  name: 'Transport',
  router: router,
  version: '1.0.0',
};