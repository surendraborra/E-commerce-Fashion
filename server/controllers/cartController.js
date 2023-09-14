
const Cart = require('../models/Cart'); 
const Product =require('../models/Product')
const User =require('../models/User')

async function addToCart(req, res) {
  try {
    const { user_id, product_id } = req.body;

    const newCartItem = new Cart({
      user_id,
      product_id,
    });

    await newCartItem.save();

    res.json({ success: true, message: 'Product added to cart successfully.' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the product to the cart.' });
  }
}

async function getCartByUserId(req, res) {
  try {
    const user_id = req.params.user_id; // Assuming the user_id is passed as a URL parameter

    const cartItems = await Cart.findAll({
      where: { user_id },
      include: [Product], // Include the associated Product details
    });

    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching cart items.' });
  }
}
async function removeFromCart(req, res) {
  try {
    const cart_id = req.params.cart_id; // Assuming cart_id is passed as a URL parameter

    const deletedCartItem = await Cart.destroy({ where: { cart_id } });

    if (deletedCartItem) {
      res.json({ success: true, message: 'Product removed from the cart successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Product not found in the cart.' });
    }
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ success: false, message: 'An error occurred while removing the product from the cart.' });
  }
}

module.exports = {
  addToCart,
  getCartByUserId,
  removeFromCart,
};
