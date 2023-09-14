// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/orders', orderController.createOrder);
router.get('/orders/:user_id', orderController.getOrderDetailsByUserId);
router.get('/orders', orderController.getAllOrders);
module.exports = router;