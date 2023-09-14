import React, { useEffect, useState } from 'react';
import './viewusers.css'

const Viewusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your API endpoint or wherever it's stored
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/getAllUsers'); // Replace with your API endpoint
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="view-users-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile_number</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.mobile_number}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewusers;
