import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './items.css';
import { Link } from 'react-router-dom';

function Items(props) {

  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(props.categoryFilter); 
  const [typeFilter, setTypeFilter] = useState('All'); 

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

  return (
    <div className="products-container shadow">
      <div>
        
        <div className="filters">
          <div className='fill'>
            <label>
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
            <label>
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
              
                  <div className="product-image">
                    <img src={product.image_url} alt={`Product ${product.product_id}`} />
                  </div>
                  <div className="product-details">
                    <h3 className="product-brand">{product.product_brand}</h3>
                    <p className="product-description">{product.product_description}</p>
                    <div className="quantity-price">
                      <p className="product-price">
                        Price: {(product.product_price * product.quantity)}-/Rs
                      </p>
                    </div>
                    <div className="buttons">
                      <button className="add-to-cart-btn">
                        <Link to="/login">Add to Cart</Link>
                      </button>
                      <button className="buy-now-btn">
                        <Link to="/login">Buy Now</Link>
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

export default Items;
