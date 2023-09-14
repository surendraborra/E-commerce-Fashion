
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './cart.css'

function Cart() {
  const user_id = useSelector((state) => state.user.id);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cart/cart/${user_id}`);
      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching cart items');
      setLoading(false);
    }
  };

  const removeItemFromCart = async (cart_id) => {
    try {
      await axios.delete(`http://localhost:3001/cart/remove/${cart_id}`);
      fetchCartItems();
    } catch (error) {
      setError('Error removing item from cart');
    }
  };

  return (
    <div className="cart-details">
      <h2>Cart</h2>
      {loading ? (
        <p>Loading cart details...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.cart_id} className="cart-item">
              <p>Product: {item.Product.product_brand} - ID: {item.Product.product_id}</p>
              <p>Quantity: 1</p>
              <p>Price: {item.Product.product_price}</p>
              <img src={item.Product.image_url} alt={`Product: ${item.Product.product_brand}`} />
              <button onClick={() => removeItemFromCart(item.cart_id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
