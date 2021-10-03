const { Sequelize } = require('sequelize');

module.exports = new Sequelize('kynorg_mobile_db', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});
