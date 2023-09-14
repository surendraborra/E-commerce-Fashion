
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.css';

function Products() {
  const user_id = useSelector(state => state.user.id);
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All'); // Default to "All"
  const [typeFilter, setTypeFilter] = useState('All'); // Default to "All"

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [brandFilter, priceFilter, categoryFilter, typeFilter]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/product/products', {
        params: {
          brand: brandFilter.toLowerCase(),
          price: priceFilter,
          category: categoryFilter,
          type: typeFilter,
        },
      });

      const productsWithQuantity = response.data.map(product => ({
        ...product,
        quantity: 1,
      }));
      setProducts(productsWithQuantity);
      setLoading(false);
    } catch (error) {
      setError('Error fetching products');
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    const product = products.find(product => product.product_id === productId);

    try {
      const response = await axios.post('http://localhost:3001/cart/addToCart', {
        user_id,
        product_id: productId,
        quantity: product.quantity,
      });
      console.log(response.data.message);

      localStorage.setItem('user_id', user_id);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const onQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.product_id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  return (
    <div className="products-container shadow">
      <div >
        <div className="filters">
          <div className='fill'>
          <label >
            Brand:
            <input
              type="text"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            />
          </label>
          </div>
          <div className='fill'>
          <label>
            Price:
            <input
              type="number"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </label>
          </div>
          <div className='fill'>
          <label >
            Category:
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Beauty">Beauty</option>
            </select>
          </label>
          </div>
          <div className='fill'>
          <label>
            Type:
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Shirts">Shirts</option>
              <option value="T-Shirts">T-Shirts</option>
              <option value="Jeans">Jeans</option>
              {/* Add more type options as needed */}
            </select>
          </label>
          </div>
        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <ul className="product-items">
            {products.length === 0 ? (
              <p>No products found based on the selected filters.</p>
            ) : (
              products.map(product => (
                <li key={product.product_id} className="product-item">
                  {/* Product details */}
                  <Link to={`/product/${product.product_id}`} className="product-detail-link">
                    <div className="product-image">
                      <img src={product.image_url} alt={`Product ${product.product_id}`} />
                    </div>
                  </Link>
                  <div className="product-details">
                    <Link to={`/product/${product.product_id}`} className="product-detail-link">
                      <h3 className="product-brand">{product.product_brand}</h3>
                      <p className="product-description">{product.product_description}</p>
                    </Link>
                    <div className="quantity-price">
                      <label htmlFor={`quantitySelect_${product.product_id}`}>Qty:</label>
                      <select
                        id={`quantitySelect_${product.product_id}`}
                        value={product.quantity}
                        onChange={(event) => onQuantityChange(product.product_id, event)}
                      >
                        {[1, 2, 3, 4, 5].map(quantity => (
                          <option key={quantity} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                      <p className="product-price">
                        Price: {(product.product_price * product.quantity)}-/Rs
                      </p>
                    </div>
                    <div className="buttons">
                      <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.product_id)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Products;

