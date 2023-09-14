
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css'

import Men from '../images/category/men.jpg';
import Women from '../images/category/women.avif';
import Kids from '../images/category/kids.avif';
import Beauty from '../images/category/beauty.jpg';

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div className="category-container">
      <div className="category" onClick={() => handleCategoryClick('Men')}>
        <h3>MEN</h3>
        <img src={Men} alt="Men's Category" />
      </div>
      <div className="category" onClick={() => handleCategoryClick('Women')}>
        <h3>WOMEN</h3>
        <img src={Women} alt="Women's Category" />
      </div>
      <div className="category" onClick={() => handleCategoryClick('Kids')}>
        <h3>KIDS</h3>
        <img src={Kids} alt="Kids' Category" />
      </div>
      <div className="category" onClick={() => handleCategoryClick('Beauty')}>
        <h3>BEAUTY</h3>
        <img src={Beauty} alt="Beauty Category" />
      </div>
    </div>
  );
}

export default Category;
