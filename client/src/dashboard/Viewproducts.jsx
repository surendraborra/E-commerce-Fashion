import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewproducts.css'

const Viewproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/product/getallproducts') 
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="viewproducts-container">
      <h2>Product Table</h2>
      <table className="viewproducts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.product_id}</td>
              <td>{product.product_brand}</td>
              <td>{product.product_category}</td>
              <td>{product.product_type}</td>
              <td>{product.product_description}</td>
              <td>{product.product_price}</td>
              <td>{product.product_quantity}</td>
              <td>
            {product.image_url &&<img src={product.image_url} alt="Product Image" height="100px" width="100px"/>}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewproducts;
