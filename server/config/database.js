const { Sequelize } = require('sequelize');

//database credentials-- please supply the appropriate value as set by user
module.exports = new Sequelize('kynorg_mobile_db', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});
