import React, { useState } from 'react';
import axios from 'axios';
import './addproducts.css';

const Addproducts = () => {
  const [formData, setFormData] = useState({
    product_brand: '',
    product_category: '',
    product_type: '',
    product_description: '',
    product_price: '',
    product_quantity: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageData = new FormData();
      imageData.append('image', formData.image);
      imageData.append('product_brand', formData.product_brand);
      imageData.append('product_category', formData.product_category);
      imageData.append('product_type', formData.product_type);
      imageData.append('product_description', formData.product_description);
      imageData.append('product_price', formData.product_price);
      imageData.append('product_quantity', formData.product_quantity);



      await axios.post('http://localhost:3001/product/upload', imageData);

      // Handle success or display a success message
      console.log('Product data posted successfully');

      setFormData({
        product_brand: '',
        product_category: '',
        product_type: '',
        product_description: '',
        product_price: '',
        product_quantity: '',
        image: null,
      });
    } catch (error) {
      // Handle error or display an error message
      console.error('Error posting product data:', error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label htmlFor="product_brand"></label>
      <input
        type="text"
        id="product_brand"
        name="product_brand"
        placeholder="Product Brand"
        value={formData.product_brand}
        onChange={handleChange}
      />

      <label htmlFor="product_category"></label>
      <input
        type="text"
        id="product_category"
        name="product_category"
        placeholder="Product Category"
        value={formData.product_category}
        onChange={handleChange}
      />

      <label htmlFor="product_type"></label>
      <input
        type="text"
        id="product_type"
        name="product_type"
        placeholder="Product Type"
        value={formData.product_type}
        onChange={handleChange}
      />

      <label htmlFor="product_description"></label>
      <input
        type="text"
        id="product_description"
        name="product_description"
        placeholder="Product Description"
        value={formData.product_description}
        onChange={handleChange}
      />

      <label htmlFor="product_price"></label>
      <input
        type="text"
        id="product_price"
        name="product_price"
        placeholder="Product Price"
        value={formData.product_price}
        onChange={handleChange}
      />

      <label htmlFor="product_quantity"></label>
      <input
        type="text"
        id="product_quantity"
        name="product_quantity"
        placeholder="Product Quantity"
        value={formData.product_quantity}
        onChange={handleChange}
      />

      <div className="file-label">
        <label htmlFor="image"></label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Addproducts;