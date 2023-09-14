const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  product_brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  product_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Add a static method for searching products
Product.searchProducts = async (query) => {
  try {
    const products = await Product.findAll({
      where: {
        [sequelize.Op.or]: [
          { product_brand: { [sequelize.Op.iLike]: `%${query}%` } },
          { product_category: { [sequelize.Op.iLike]: `%${query}%` } },
          { product_type: { [sequelize.Op.iLike]: `%${query}%` } },
          { product_description: { [sequelize.Op.iLike]: `%${query}%` } },
        ],
      },
    });

    return products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

module.exports =Product ;
