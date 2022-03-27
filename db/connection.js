const knex = require('knex');
const configuration = require('./config');

export const connection = knex(configuration[process.env.NODE_ENV]);
