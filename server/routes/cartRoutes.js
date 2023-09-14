
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/addToCart', cartController.addToCart);
router.get('/cart/:user_id', cartController.getCartByUserId);
router.delete('/remove/:cart_id', cartController.removeFromCart);

module.exports = router;
