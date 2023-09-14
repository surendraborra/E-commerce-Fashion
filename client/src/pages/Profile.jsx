
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaUserEdit } from 'react-icons/fa';
import './profile.css'

function Profile() {
  const user_id = useSelector((state) => state.user.id);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add state variables for form input fields
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedAddress, setUpdatedAddress] = useState('');
  const [updatedMobileNumber, setUpdatedMobileNumber] = useState('');

  const [updateMode, setUpdateMode] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);
  

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/getUser/${user_id}`);
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/updateUser/${user_id}`, {
        username: updatedUsername,
        email: updatedEmail,
        address: updatedAddress,
        mobile_number: updatedMobileNumber,
      });
      // Handle success, e.g., show a success message to the user
      setSuccessMessage('User profile updated successfully');
      // You can also update the user data displayed on the profile page
      fetchUserData();
      // Disable update mode after successful update
      setUpdateMode(false);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      setErrorMessage('Error updating user profile');
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div className="profile-details">
      {loading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="profile-card">
          <div className="profile-icon">
            {updateMode ? (
              <button onClick={handleUpdateProfile}>Update</button>
            ) : (
              <FaUserEdit size={30} onClick={() => setUpdateMode(true)} style={{ cursor: 'pointer' }} />
            )}
          </div>
          <div className="profile-info">
            <p>User ID: {userData.user_id}</p>
            {/* Display the current user data */}
            <p>Email: {userData.email}</p>
            <p>Username: {userData.username}</p>
            <p>Address: {userData.address}</p>
            <p>Mobile: {userData.mobile_number}</p>

            {/* Display success and error messages */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Add a form to update user details */}
            {updateMode && (
              <form>
                <input
                  type="text"
                  placeholder="Username"
                  value={updatedUsername}
                  onChange={(e) => setUpdatedUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={updatedAddress}
                  onChange={(e) => setUpdatedAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={updatedMobileNumber}
                  onChange={(e) => setUpdatedMobileNumber(e.target.value)}
                />
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
