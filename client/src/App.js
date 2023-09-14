import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './api/ProductDetail';
import Checkout from './api/Checkout';
import Payment from './api/Payment';
import MegaMenu from './components/MegaMenu';
import Footer from './components/Footer';
import Orders from './api/Orders';
import Homee from './components/Homee';
import SearchResultsPage from './api/SearchResultsPage';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Cart from './api/Cart';
import ForgotPassword from './pages/ForgotPassword';
import Items from './api/Items';
import Dashboard from './dashboard/Dashboard';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [searchResults, setSearchResults] = useState([]);
  const handleSearchResults = (results) => {
   // setSearchResults(results);
  };
  return (
    <Router>
      <div>
<MegaMenu isLoggedIn={isLoggedIn} handleSearchResults={handleSearchResults}/>
        <Routes>
           <Route path="/" element={<Homee/>} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout/:productId" element={<Checkout />} />
          <Route path="/orders/:user_id" element={<Orders />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="/payment/:productId" element={<Payment/>} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/profile/:user_id" element={<Profile/>} />
          <Route path="/cart/:user_id" element={<Cart/>} />
        <Route  path="/forgotpassword" element={<ForgotPassword/>}/>
         <Route path="/items" element={<Items/>} /> 
        <Route path="/men" element={<Items categoryFilter="Men" />} />
        <Route path="/women" element={<Items categoryFilter="Women" />} />
        <Route path="/kids" element={<Items categoryFilter="Kids" />} />
        <Route path="/beauty" element={<Items categoryFilter="Beauty" />} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        </Routes>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;


