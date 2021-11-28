const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  'kynorg_mobile_db',
  'postgres',
  '68862253Ba', // 'Mesculentus1100',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);
