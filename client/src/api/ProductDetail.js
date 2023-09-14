import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import './productdetail.css';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const user_id = useSelector(state => state.user.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct(); 

  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = async (productIdToAdd) => {
    try {
      const response = await axios.post('http://localhost:3001/cart/addToCart', {
        user_id,
        product_id: productIdToAdd,
        quantity: product.quantity, 
      });
      console.log(response.data.message);
  
      localStorage.setItem('user_id', user_id);
      alert('Product added to cart successfully!'); 
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  

  return (
    <div className="product-detail-container">
      <h2>{product.product_brand}</h2>
      <img src={product.image_url} alt={`Product ${product.product_id}`} />
      <p>{product.product_description}</p>
      <p>Price: ${product.product_price }</p>
      <p>type: {product.product_type }</p>
      <p>category: {product.product_category }</p>
      <button className="buy-now-button" onClick={() => handleAddToCart(product.product_id)}>
        Add to Cart
      </button>
      <button className="buy-now-button">
<Link className="buy-now-button" to={`/checkout/${productId}`}>Buy Now</Link>
</button>

    </div>
  );
}

export default ProductDetail;
