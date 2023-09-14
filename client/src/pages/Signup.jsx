
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import the useLocation hook
import axios from 'axios';
import './signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation(); // Add this line to use the location object

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users/create', {
        username,
        email,
        password,
      });

      console.log('User created:', response.data);
      setSuccessMessage('User created successfully!');
      setErrorMessage('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('please enter a valid details.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <div className="tab-links">
        <Link to="/signup" className={`tab-link ${location.pathname === '/signup' ? 'active' : ''}`}>
          Signup
        </Link>
        <Link to="/login" className={`tab-link ${location.pathname === '/login' ? 'active' : ''}`}>
          Login
        </Link>
        <div className="tab-divider"></div>
      </div>
      {successMessage && <div className="message success-message">{successMessage}</div>}
      {errorMessage && <div className="message error-message">{errorMessage}</div>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default Signup;
