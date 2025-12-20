const express = require('express');
const ussdRoutes = require('./routes/ussd.routes');

const app = express();
app.use(express.json());

app.use('/ussd', ussdRoutes);

module.exports = app;