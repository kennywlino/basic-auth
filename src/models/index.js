'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

module.exports = {
  sequelizeDB,
};