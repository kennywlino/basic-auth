'use strict';

const { sequelizeDB } = require('./index');

const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

const UsersModel = sequelizeDB.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// hash the plain text password before saving the user
UsersModel.beforeCreate(async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
});

module.exports = {
  UsersModel,
};