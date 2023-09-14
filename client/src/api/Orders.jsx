import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './orders.css';

import './orders.css'; 

function Orders() {
  const user_id = useSelector(state => state.user.id);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/order/orders/${user_id}`);
      setOrderDetails(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching order details');
      setLoading(false);
    }
  };

  return (
    <div className='order-details'>
      <h2>Order Details</h2>
      {loading ? (
        <p>Loading order details...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="order-grid">
          {orderDetails.map(order => (
            <div key={order.order_id} className={`order-card ${order.payment_type.toLowerCase()}`}>
              <h3>Order ID: {order.order_id}</h3>
              <p>User: {order.User.username}</p>
              <p>User Address: {order.User.address}</p>
              <p>Product: {order.Product.product_brand} - ID: {order.Product.product_id}</p>
              <p>Payment Type: {order.payment_type}</p>
              <p>Payment Status: {order.payment_status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
