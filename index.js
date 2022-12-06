'use strict';

const { sequelizeDB } = require('./src/auth/models');
const { start } = require('./src/server');

sequelizeDB.sync()
  .then(() => {
    console.log('Successful connection');
    start();
  })
  .catch(e => console.error(e));