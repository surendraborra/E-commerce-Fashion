import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { FiLogOut, FiList } from 'react-icons/fi';
import {Link} from 'react-router-dom'
import { logoutUserWithRefresh } from '../redux/actions';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import kid1 from "../images/kid1.jpeg"
import kid2 from "../images/kid2.jpeg"
import kid3 from "../images/kid3.jpeg"
import logo from "../images/logo.png"
import beauty1 from "../images/beauty1.jpeg"
import beauty2 from "../images/beauty2.jpeg"
import beauty3 from "../images/beauty3.png"
import './megamenu.css';
const MegaMenu = ({ isLoggedIn }) => {
  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    navigate(`/${category.toLowerCase()}`);
  };
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/product/search-products?query=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
navigate('/search-results', { state: { searchResults: data } });

      } else {
        console.error('Error searching products:', response.statusText);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };
  

  const handleLogout = () => {

    dispatch(logoutUserWithRefresh());
  };

  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);

  const handleMenuEnter1 = () => {
    setShowMenu1(true);
  };

  const handleMenuLeave1 = () => {
    setShowMenu1(false);
  };

  const handleMenuEnter2 = () => {
    setShowMenu2(true);
  };

  const handleMenuLeave2 = () => {
    setShowMenu2(false);
  };
  const handleMenuEnter3 = () => {
    setShowMenu3(true);
  };

  const handleMenuLeave3 = () => {
    setShowMenu3(false);
  };
  const handleMenuEnter4 = () => {
    setShowMenu4(true);
  };

  const handleMenuLeave4 = () => {
    setShowMenu4(false);
  };
  return (
    <Navbar expand="lg" className='navbar shadow'>
      <Navbar.Toggle aria-controls="mega-menu" className="custom-toggler"/>
      <Navbar.Collapse id="mega-menu" >
        <Nav className="mr-auto">
          
          <div><img src={logo}  width="130px" alt=""/></div>
         
          <NavDropdown
            title="MEN"
            id="men-dropdown-1"
            show={showMenu1}

            onMouseEnter={handleMenuEnter1}
            onMouseLeave={handleMenuLeave1}
           
            onClick={() => handleCategoryClick('men')}
            
          > 

           
                        <div className="mega-menu-content">
              <div className="row">
                <div className="col-md-12" >
                   <h6 className="moving-text">[Looking good isn't self-importance; it's self-respect ] ////////////      [Style is the perfection of a point of view] ////////[A well-tied tie is the first serious step in life.]</h6>
                   

                  <div className="row">
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Topwear</h6></li></Link>
                        <Link className='link'><li>T-Shirts</li></Link>
                        
                        <Link className='link'><li>Shirts</li></Link>
                        <Link className='link'><li>Sweaters</li></Link>
                        <Link className='link'><li>Jackets</li></Link>
                        <Link className='link'><li>Suits</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Watches</h6></li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>bags&Backpacks</h6></li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Bottomwear</h6></li></Link>

                        <Link className='link'><li>Jeans</li></Link>
                        <Link className='link'><li>Trousers</li></Link>
                        <Link className='link'><li>Shorts</li></Link>
                        <Link className='link'><li>Joggers&Track Pants</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Gadgets</h6></li></Link>
                        <Link className='link'><li>Smart Wearables</li></Link>
                        <Link className='link'><li>Wallets</li></Link>
                        <Link className='link'><li>Belts</li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Footwear</h6></li></Link>
                        <Link className='link'><li>Casual Shoes</li></Link>
                        <Link className='link'><li>Sports Shoes</li></Link>
                        <Link className='link'><li>Sneakers</li></Link>
                        <Link className='link'><li>Socks</li></Link>
                        <Link className='link'><li>Flip Flops</li></Link>
                        <Link className='link'><li>Sandals</li></Link>

                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <Link>
                        <li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZNfGXHLWdgOp3zhOkwn1-V4V3yaogbUxtNv658wQfDMTSZYU5hjy1Vz_Hd1DyI1hi7w&usqp=CAU' height="110px" width="323px" alt=""/></li></Link>
                      <hr/>
                      <Link>
                      <li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fVvG7zt8jYxd1fehaV-fHCPQ1vIu8l5ufw&usqp=CAU' width="323px" height="110px" alt=""/></li></Link>
                      </ul>
                    
                  
                    </div>
                    <div className="col-md-3" style={{paddingRight:"7px"}}>
                    

                    <Link>
                     <img src='data:image/jpeg;base64,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' width="323px" height="250px" alt=""/></Link>
                    </div>
                 
                  </div>
                
                </div>
              </div>
            </div>

          </NavDropdown>
          
          <NavDropdown
            title="WOMEN"
            id="women-dropdown-2"
            show={showMenu2}
            onMouseEnter={handleMenuEnter2}
            onMouseLeave={handleMenuLeave2}
            onClick={() => handleCategoryClick('women')}
          >
<div className="mega-menu-content">
              <div className="row">
                <div className="col-md-12" >
                   <h6 className="moving-text">[Looking good isn't self-importance; it's self-respect ] ////////////      [Style is the perfection of a point of view] ////////[A well-tied tie is the first serious step in life.]</h6>
                   

                  <div className="row">
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Topwear</h6></li></Link>
                        <Link className='link'><li>Sarees</li></Link>
                        
                        <Link className='link'><li>Shirts&T-Shirts</li></Link>
                        <Link className='link'><li>Crop Tops</li></Link>
                        <Link className='link'><li>Kurtha</li></Link>
                        <Link className='link'><li>Westren Tops</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Watches</h6></li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>bags&Backpacks</h6></li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Bottomwear</h6></li></Link>

                        <Link className='link'><li>Jeans</li></Link>
                        <Link className='link'><li>Trousers</li></Link>
                        <Link className='link'><li>Shorts</li></Link>
                        <Link className='link'><li>Joggers&Track Pants</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Gadgets</h6></li></Link>
                        <Link className='link'><li>Smart Wearables</li></Link>
                        <Link className='link'><li>Wallets</li></Link>
                        <Link className='link'><li>Belts</li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Footwear</h6></li></Link>
                        <Link className='link'><li>Casual Shoes</li></Link>
                        <Link className='link'><li>Sports Shoes</li></Link>
                        <Link className='link'><li>Sneakers</li></Link>
                        <Link className='link'><li>Socks</li></Link>
                        <Link className='link'><li>Flip Flops</li></Link>
                        <Link className='link'><li>Sandals</li></Link>

                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <Link>
                        <li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxBe7HiK3SqPv3K6iqeHLny5lqH4NHDQcmQ&usqp=CAU' height="110px" width="323px" alt=""/></li></Link>
                      <hr/>
                      <Link>
                      <li><img src='https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/10/women-00-scaled.jpg?ssl=1' width="323px" height="110px" alt=""/></li></Link>
                      </ul>
                    
                  
                    </div>
                    <div className="col-md-3" style={{paddingRight:"7px"}}>
                    

                    <Link>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYKa85z3VYnjrgiH4a-E2b-jR9Gr8pPQ5cg&usqp=CAU'width="323px" height="250px" alt=""/></Link>
                    </div>
                 
                  </div>
                
                </div>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="KIDS"
            id="men-dropdown-1"
            show={showMenu3}
            onMouseEnter={handleMenuEnter3}
            onMouseLeave={handleMenuLeave3}
            onClick={() => handleCategoryClick('kids')}
            
          > 
           
                        <div className="mega-menu-content">
              <div className="row">
                <div className="col-md-12" >
                   <h6 className="moving-text">[Looking good isn't self-importance; it's self-respect ] ////////////      [Style is the perfection of a point of view] ////////[A well-tied tie is the first serious step in life.]</h6>
                   

                  <div className="row">
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Topwear</h6></li></Link>
                        <Link className='link'><li>T-Shirts</li></Link>
                        
                        <Link className='link'><li>Shirts</li></Link>
                        <Link className='link'><li>Sweaters</li></Link>
                        <Link className='link'><li>Jackets</li></Link>
                        <Link className='link'><li>Suits</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Watches</h6></li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>bags&Backpacks</h6></li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Bottomwear</h6></li></Link>

                        <Link className='link'><li>Jeans</li></Link>
                        <Link className='link'><li>Trousers</li></Link>
                        <Link className='link'><li>Shorts</li></Link>
                        <Link className='link'><li>Joggers&Track Pants</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Gadgets</h6></li></Link>
                        <Link className='link'><li>Smart Wearables</li></Link>
                        <Link className='link'><li>Wallets</li></Link>
                        <Link className='link'><li>Belts</li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Footwear</h6></li></Link>
                        <Link className='link'><li>Casual Shoes</li></Link>
                        <Link className='link'><li>Sports Shoes</li></Link>
                        <Link className='link'><li>Sneakers</li></Link>
                        <Link className='link'><li>Socks</li></Link>
                        <Link className='link'><li>Flip Flops</li></Link>
                        <Link className='link'><li>Sandals</li></Link>

                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <Link>
                        <li><img src={kid1} height="110px" width="323px" alt=""/></li></Link>
                      <hr/>
                      <Link>
                      <li><img src={kid2} width="323px" height="110px" alt=""/></li></Link>
                      </ul>
                    
                  
                    </div>
                     <div className="col-md-3" > 
                    

                    <Link>
                     <img src={kid3} width="323px" height="250px" alt=""/></Link>
                    </div>
                 
                  </div>
                
                </div>
              </div>
            </div>



          </NavDropdown>


          <NavDropdown
            title="BEAUTY"
            id="men-dropdown-1"
            show={showMenu4}
            onMouseEnter={handleMenuEnter4}
            onMouseLeave={handleMenuLeave4}
            onClick={() => handleCategoryClick('beauty')}
            
          > 
           
                        <div className="mega-menu-content">
              <div className="row">
                <div className="col-md-12" >
                   <h6 className="moving-text">[Looking good isn't self-importance; it's self-respect ] ////////////      [Style is the perfection of a point of view] ////////[A well-tied tie is the first serious step in life.]</h6>
                   

                  <div className="row">
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>MAKEUP</h6></li></Link>
                        <Link className='link'><li>Lipstick</li></Link>
                        
                        <Link className='link'><li>Lip glass</li></Link>
                        <Link className='link'><li>Kajal</li></Link>
                        <Link className='link'><li>Eyeshadow</li></Link>
                        <Link className='link'><li>Foundation</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Baby Care</h6></li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Masks</h6></li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Skincare&Body</h6></li></Link>

                        <Link className='link'><li>Moisturiser</li></Link>
                        <Link className='link'><li>Serum</li></Link>
                        <Link className='link'><li>Face Wash</li></Link>
                        <Link className='link'><li>Body Lotion</li></Link>
                        <hr/>
                        <Link style={{textDecoration:"none"}}><li><h6>Fragrances</h6></li></Link>
                        <Link className='link'><li>Perfume</li></Link>
                        <Link className='link'><li>Deodoant</li></Link>
                        <Link className='link'><li>Body Mist</li></Link>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <ul>
                        <Link style={{textDecoration:"none"}}><li><h6>Hair Care</h6></li></Link>
                        <Link className='link'><li>Shampoo</li></Link>
                        <Link className='link'><li>Hair Oil</li></Link>
                        <Link className='link'><li>Hair Cream</li></Link>
                        <Link className='link'><li>Hair Gel</li></Link>
                        <Link className='link'><li>Hair Serum</li></Link>
                        <Link className='link'><li>Hair color</li></Link>

                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <Link>
                        <li><img src={beauty1} height="110px" width="323px" alt=""/></li></Link>
                      <hr/>
                      <Link>
                      <li><img src={beauty2} width="323px" height="110px" alt=""/></li></Link>
                      </ul>
                    
                  
                    </div>
                     <div className="col-md-3" > 
                    

                    <Link>
                     <img src={beauty3} width="323px" height="250px" alt=""/></Link>
                    </div>
                 
                  </div>
                
                </div>
              </div>
            </div>
          </NavDropdown>
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type="submit" onClick={handleSearch}>
      <FaSearch />
    </button>
  </div>
<div className='headerr'>
      <div className="search-bar">
      </div>
      <div className="user-cart">
        {isLoggedIn ? (
          // Render these elements if user is logged in
          <>
            <div className='usericon'>
              <Link to="/orders/:user_id" style={{ textDecoration: 'none', color: 'black' }}>
                <FiList  className="menu-icon" />
              </Link>
            </div>
            <div className='usericon'>
              <Link to="/cart/:user_id" style={{ textDecoration: 'none', color: 'black' }}>
                <FaShoppingCart className="menu-icon" />
              </Link>
            </div>
            <div className='usericon'>
              <Link to="/profile/:user_id" style={{ textDecoration: 'none', color: 'black' }}>
                <FaUser className="menu-icon" />
              </Link>
            </div>
            <div className='usericon' onClick={handleLogout}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <FiLogOut  className="menu-icon" />
              </Link>
            </div>
          </>
        ) : (
          // Render these elements if user is not logged in
          <>
            <div className='carticon'>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                <FaUser  />
              </Link>
            </div>
            <div className='carticon'>
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
              <FaShoppingCart  />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MegaMenu;
