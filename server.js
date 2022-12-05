'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const PORT = process.env.PORT || 3002;

// sets up express app
const app = express();

// process JSON input and puts it in req.body
app.use(express.json());

// process FORM input and puts it on req.body
app.use(express.urlencoded({ extended: true }));

function start() {
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {
  app,
  start,
};