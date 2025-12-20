const express = require('express');
const router = express.Router();
const controller = require('../ussd/controller');

router.post('/callback', controller.handleRequest);

module.exports = router;

app.get('/', (req, res) => {
  res.send('USSD Banking API is running');
});

import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('USSD Banking API is running');
});

app.post('/ussd', (req, res) => {
  res.send('USSD endpoint');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
