
import React from 'react';
import './page.css';
import Belt from '../images/category/belts.jpeg'
import Wallet from '../images/category/wallets.jpg'
import Shirt from '../images/category/shirts.jpg'
import Suit from '../images/category/suits.jpeg'
import Saree from '../images/category/saree.png'
import Lipstick from '../images/category/lipstick.jpg'
import Facewash from '../images/category/facewash.avif'
import Shoe from '../images/category/shoe.jpg'
import Spray from '../images/category/spray.jpeg'
import Tshirt from '../images/category/tshirts.jpeg'
import Jeans from '../images/category/jeans.avif'
import Shampoo from '../images/category/shampoo.avif'

function Page() {
  return (
    <div className="grid-container">
     
      <div className="grid">
     
        <div className="grid-item">
          <div className="part"><img  src={Belt} alt=""/><h3>Belts</h3></div>
          <div className="part"><img  src={Wallet} alt=""/><h3>Wallets</h3></div>
          <div className="part"><img  src={Shirt} alt=""/><h3>Shirts</h3></div>
          <div className="part"><img  src={Suit} alt=""/><h3>Suits</h3></div>
        </div>
  
        <div className="grid-item">

          <div className="part"><img  src={Saree} alt=""/><h3>Sarees</h3></div>
          <div className="part"><img  src={Lipstick} alt=""/><h3>Lipstick</h3></div>
          <div className="part"><img  src={Facewash} alt=""/><h3>Facewash</h3></div>
          <div className="part"><img  src={Shoe} alt=""/><h3>Shoes</h3></div>
        </div>
        <div className="grid-item">
          <div className="part"><img  src={Spray} alt=""/><h3>Spray</h3></div>
          <div className="part"><img  src={Tshirt} alt=""/><h3>Tshirt</h3></div>
          <div className="part"><img  src={Jeans} alt=""/><h3>Jeans</h3></div>
          <div className="part"><img  src={Shampoo} alt=""/><h3>Shampoo</h3></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
