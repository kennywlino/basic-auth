'use strict';

const { sequelizeDB } = require('./src/auth/models');
const { start } = require('./src/server');

sequelizeDB.sync()
  .then(() => {
    console.log('Sucessful connection');
    start();
  })
  .catch(e => console.error(e));