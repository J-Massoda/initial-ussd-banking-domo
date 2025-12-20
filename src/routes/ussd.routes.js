const express = require('express');
const router = express.Router();
const controller = require('../ussd/controller');

router.post('/callback', controller.handleRequest);

module.exports = router;