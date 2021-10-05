const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  'kynorg_mobile_db',
  'postgres',
  'Mesculentus1100',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);
