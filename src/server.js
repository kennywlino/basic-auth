'use strict';
const express = require('express');
const PORT = process.env.PORT || 3002;
const router = require('./auth/router');

// sets up express app
const app = express();

// process JSON input and puts it in req.body
app.use(express.json());

// process FORM input and puts it on req.body
app.use(express.urlencoded({ extended: true }));

app.use(router);

function start() {
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {
  app,
  start,
};