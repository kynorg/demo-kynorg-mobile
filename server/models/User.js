const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('users', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accountType: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'client',
  }
});

module.exports = User;
