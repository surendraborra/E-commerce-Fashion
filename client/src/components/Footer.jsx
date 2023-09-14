
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = ({ onDashboardClick }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h2>About Us</h2>
          <p>
          Be it clothing, footwear or accessories, glamgarb offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
          </p>
        </div>
        <div className="footer__section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">MEN</Link>
            </li>
            <li>
              <Link to="/products">WOMEN</Link>
            </li>
            <li>
              <Link to="/about">KIDS</Link>
            </li>
            <li>
              <Link to="/contact">BEAUTY</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h2>Contact Us</h2>
          <p>Email: glamgarb@gmail.com</p>
          <p>Phone: +91 9086417890</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Glam Garb. All rights reserved.</p>
        <Link to="/dashboard">DASHBOARD</Link>
      </div>
    </footer>
  );
};

export default Footer;
