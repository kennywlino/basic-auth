'use strict';

const express = require('express');
const { UsersModel } = require('./models/users.model');
const basicAuth = require('./middleware/basicAuth');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

router.post('/signin', basicAuth, async (req, res) => {
  res.status(200).json(req.user);
});

router.post('/signup', async (req, res) => {
  try {
    const record = await UsersModel.create(req.body);
    res.status(201).json(record);
  } catch(e) {
    res.status(403).send('Error creating user');
  }
});

module.exports = router;