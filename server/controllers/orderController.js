
// orderController.js
const Order = require('../models/Order');
const User = require('../models/User')
const Product = require('../models/Product')

// Create a new order
async function createOrder(req, res)  {
  try {
    const { user_id, product_id, payment_type, payment_status } = req.body;

    // You might want to validate the input data here before creating the order

    const order = await Order.create({
      user_id,
      product_id,
      payment_type,
      payment_status, // Assuming initial status is unpaid
    });

    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

// Get order details by user ID
async function getOrderDetailsByUserId(req, res) {
  try {
    const user_id = req.params.user_id;

    const orderDetails = await Order.findAll({
      where: { user_id },
      include: [
        { model: User, attributes: ['username', 'address'] },
        { model: Product, attributes: ['product_brand', 'product_id'] },
      ],
    });

    res.json(orderDetails);
  } catch (error) {
    console.error('Error fetching order details:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching order details.' });
  }
}

// Get all orders
async function getAllOrders(req, res) {
  try {
    const allOrders = await Order.findAll({
      include: [
        { model: User, attributes: ['username', 'address'] },
        { model: Product, attributes: ['product_brand', 'product_id'] },
      ],
    });

    res.json(allOrders);
  } catch (error) {
    console.error('Error fetching all orders:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching all orders.' });
  }
}

module.exports = {
  createOrder,
  getOrderDetailsByUserId,
  getAllOrders, // Add the new controller here
}
