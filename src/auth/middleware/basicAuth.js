'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { UsersModel } = require('../models/users.model');

module.exports = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts[1];
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    const user = await UsersModel.findOne({ where: { username }});
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
      next();
    } else {
      next('Invalid user');
    }
  } catch(e) {
    res.status(403).send('Error creating user');
  }
};