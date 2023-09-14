
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';
import { Link } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchResults = location.state.searchResults || [];
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

 
  const filteredResults = searchResults.filter((product) => {
  
    if (brandFilter && !product.product_brand.toLowerCase().includes(brandFilter.toLowerCase())) {
      return false;
    }

    if (priceFilter && parseFloat(product.product_price) > parseFloat(priceFilter)) {
      return false;
    }

    if (categoryFilter && categoryFilter !== 'All' && product.product_category !== categoryFilter) {
      return false;
    }

    if (typeFilter && typeFilter !== 'All' && product.product_type !== typeFilter) {
      return false;
    }

    return true;
  });

  return (
    <div className="search-results">
      <div className="filters-container">

        <div className="filters">
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
          <label>
            Brand:
            <input
              type="text"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </label>
          
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

          <div className="search-results">
      <div className="filters-container">
      </div>
      <div className="results">

        <div className="product-grid">
          {filteredResults.map((product) => (
            <div key={product.product_id} className="product-card">
              <img src={product.image_url} alt={product.product_brand} />
              <h3>{product.product_brand}</h3>
              <p>{product.product_description}</p>
              <p>Price: ${product.product_price}</p>
              <div className="product-buttons">
                <Link to="/login">
                  <button className="add-to-cart">Add to Cart</button>
                </Link>
                <Link to="/login">
                  <button className="buy-now">Buy Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchResultsPage;