'use strict';

require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3002;
const router = require('./auth/router');
const notFound = require('./auth/middleware/404');
const errorHandler = require('./auth/middleware/500');

// sets up express app
const app = express();

// process JSON input and puts it in req.body
app.use(express.json());

// process FORM input and puts it on req.body
app.use(express.urlencoded({ extended: true }));

app.use(router);

// using our custom middleware to handle errors
app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {
  app,
  start,
};