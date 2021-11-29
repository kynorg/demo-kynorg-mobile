const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Favorite = db.define('favorites', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    }
});

User.belongsToMany(Product, { through: Favorite });
Product.belongsToMany(User, { through: Favorite });

module.exports = Favorite;

