const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Cart = db.define('carts', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });

module.exports = Cart;

