
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './vieworders.css'

const Vieworders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order/orders'); // Replace with your API endpoint
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Details</h2>
      <table className="view-orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Address</th>
            <th>Product</th>
            <th>Payment Type</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.order_id}</td>
              <td>{order.User ? order.User.username : 'N/A'}</td>
              <td>{order.User ? order.User.address : 'N/A'}</td>
              <td>{order.Product ? order.Product.product_brand : 'N/A'}</td>
              <td>{order.payment_type}</td>
              <td>{order.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vieworders;
