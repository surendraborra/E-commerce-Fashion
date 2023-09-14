
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaShoppingCart, FaCube, FaEnvelope, FaUserFriends } from 'react-icons/fa';
import { AiOutlinePlusCircle, AiOutlineEye } from 'react-icons/ai';
import './dashboard.css';
import Vieworders from './Vieworders';
import Dashboardcontent from './Dashboardcontent';
import Viewusers from './Viewusers';
import Viewproducts from './Viewproducts';
import Addproducts from './Addproducts';
import Contactpage from './Contactpage';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <Dashboardcontent/>
          </div>
        );
      case 'orders':
        return (
          <div className="dashboard-content">
            <Vieworders/>
          </div>
        );
      case 'addproducts':
        return (
          <div className="dashboard-content">
           <Addproducts/>
          </div>
        );
      case 'viewproducts':
        return (
          <div className="dashboard-content">
            <Viewproducts/>
          </div>
        );
      case 'customers':
        return (
          <div className="dashboard-content">
           <Viewusers/>
          </div>
        );
      case 'contact':
        return (
          <div className="dashboard-content">
           <Contactpage/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <ul>
        <li className='sidelist'>
          <Link className="nav-link" onClick={() => setSelectedMenuItem('dashboard')}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li className='sidelist'>
          <Link  className="nav-link" onClick={() => setSelectedMenuItem('orders')}>
            <FaShoppingCart /> Orders
          </Link>
        </li>
        <li className='sidelist' style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaCube style={{ marginRight: '0.5rem' }} /> Products
          </div>
          {isDropdownOpen && (
            <ul className="dropdown" style={{ paddingLeft: "30px" }}>
              <li className='sidelist'>
                <Link  className="nav-link" onClick={() => setSelectedMenuItem('addproducts')}>
                  <AiOutlinePlusCircle /> Add Products
                </Link>
              </li>
              <li className='sidelist'>
                <Link  className="nav-link" onClick={() => setSelectedMenuItem('viewproducts')}>
                  <AiOutlineEye /> View Products
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className='sidelist'>
          <Link  style={{ textDecoration: "none", color: "black" }} onClick={() => setSelectedMenuItem('customers')}>
            <FaUserFriends /> Customers
          </Link>
        </li>
        <li className='sidelist'>
          <Link style={{ textDecoration: "none", color: "black" }} onClick={() => setSelectedMenuItem('contact')}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default Dashboard;
