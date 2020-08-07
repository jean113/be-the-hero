const knex = require('knex');
const configuration = require('../../knexfile');
const connection = knex(configuration.development); //base de dados usado somente no desenvolvimento - olhar no arqquivo knex.js

module.exports = connection;