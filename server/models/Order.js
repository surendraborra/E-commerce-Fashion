const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const User =require('./User')
const Product = require('./Product')

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_type: {
    type: DataTypes.ENUM('cod', 'online'),
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.ENUM('paid', 'unpaid'),
    allowNull: false,
  },
});
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsTo(Product, { foreignKey: 'product_id' });


module.exports = Order;
