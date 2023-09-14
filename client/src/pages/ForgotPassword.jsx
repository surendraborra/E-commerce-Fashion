
import React, { useState } from 'react';
import axios from 'axios';
import './forgotpassword.css'
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false); // Add a state to control the form display
const navigate =useNavigate();
  const handleCheckEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/checkemail', {
        email,
      });

      if (response.data.exists) {
        // If email exists, show the reset password form
        setShowResetForm(true);
      } else {
        setMessage('Email not found');
      }
    } catch (error) {
      console.error('Error checking email:', error);
      setMessage('An error occurred while checking the email');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/resetpassword', {
        email,
        newPassword,
      });

      setMessage(response.data.message);
      window.alert(response.data.message);
      navigate('/login')
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('An error occurred while resetting the password');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCheckEmail}>Check Email</button>
      {showResetForm && (
        <>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
