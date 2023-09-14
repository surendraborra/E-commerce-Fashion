
const cloudinary = require('cloudinary').v2;
const Product = require('../models/Product');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');



cloudinary.config({
  cloud_name: 'dhyiohcxw',
  api_key: '194635957535994',
  api_secret: '7HruVDyS2OiKJ0KfxBbZy9qvbd4'
});

const uploadProduct = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const {
      product_brand,
      product_category,
      product_type,
      product_description,
      product_price,
      product_quantity,
    } = req.body;
    const image_url = result.secure_url;

    const createdProduct = await Product.create({
      product_brand,
      product_category,
      product_type,
      product_description,
      product_price,
      product_quantity,
      image_url,
    });

    res.status(200).json({ success: true, message: 'Product data saved successfully', product: createdProduct });
  } catch (error) {
    console.error('Error saving product data:', error);
    res.status(500).json({ success: false, message: 'Failed to save product data' });
  }
};
const getProducts = async (req, res) => {
  try {
    const { brand, price, category, type } = req.query;

    // Build a filter object based on the provided filter parameters
    const filter = {};

    if (brand) {
      const lowercaseBrand = brand.toLowerCase(); // Convert the input to lowercase
      filter.product_brand = { [Op.iLike]: `%${lowercaseBrand}%` }; // Use iLike for case-insensitive search
    }

    if (price) {
      filter.product_price = parseFloat(price); // Assuming price is a numeric field
    }

    if (category !== 'All') {
      filter.product_category = category; // Filter by category
    }

    if (type !== 'All') {
      filter.product_type = type;
    }

    const products = await Product.findAll({
      where: filter,
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log('Fetching product with ID:', productId);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      product_brand,
      product_category,
      product_type,
      product_description,
      product_price,
      product_quantity,
    } = req.body;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Update the product data
    await product.update({
      product_brand,
      product_category,
      product_type,
      product_description,
      product_price,
      product_quantity,
    });

    res.status(200).json({ success: true, message: 'Product data updated successfully' });
  } catch (error) {
    console.error('Error updating product data:', error);
    res.status(500).json({ success: false, message: 'Failed to update product data' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Delete the product
    await product.destroy();

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    const products = await Product.findAll({
      where: {
        [Sequelize.Op.or]: [
          { product_brand: { [Sequelize.Op.iLike]: `%${query}%` } },
          { product_category: { [Sequelize.Op.iLike]: `%${query}%` } },
          { product_type: { [Sequelize.Op.iLike]: `%${query}%` } },
          { product_description: { [Sequelize.Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching all products:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


module.exports = {
  uploadProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProducts,
  searchProducts,
  getAllProducts,
};
