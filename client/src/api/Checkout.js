import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams ,Link} from 'react-router-dom';
import './checkout.css'

function Checkout() {
  const user_id = useSelector(state => state.user.id);
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:3001/users/getUser/${user_id}`);
        setUser(userResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchUserData();
    fetchProduct();
  }, [user_id, productId]);

  const handleUpdateDetailsClick = () => {
    setIsUpdatingDetails(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedDetails = {
      address: event.target.address.value,
      mobile_number: event.target.mobile_number.value,
    };

    try {
      await axios.put(`http://localhost:3001/users/updateUser/${user_id}`, updatedDetails);
      setUser({ ...user, ...updatedDetails });
      setIsUpdatingDetails(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className="checkout-container shadow">
      <div className="product-details">
        <h3>Product information</h3>
        <h2>{product.product_brand}</h2>
        <img src={product.image_url} alt={`Product ${product.product_id}`} height='100px' width='100px'/>
        <p>{product.product_description}</p>
        <p>Price: ${product.product_price}</p>
      </div>
      {(!user.address || !user.mobile_number) ? (
        <div className="user-details">
          {isUpdatingDetails ? (
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="address" placeholder="New Address" />
              <input type="text" name="mobile_number" placeholder="New Mobile Number" />
              <button type="submit">Save Details</button>
            </form>
          ) : (
            <div>
              {(!user.address) && <p>Please enter your address.</p>}
              {(!user.mobile_number) && <p>Please enter your mobile number.</p>}
              <button className="update-details-button" onClick={handleUpdateDetailsClick}>
                Update Details
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="user-details shadow">
          <h2>delivery Information</h2>
          <p>Name :{user.username}</p>
          <p>Address: {user.address}</p>
          <p>Mobile: {user.mobile_number}</p>
          <p>Product:{product.product_brand}</p>
          <p>Price: ${product.product_price}</p>
          <p>QUANTITY : 1</p>
          <div>
          <button className="confirm-button"><Link style={{textDecoration:'none'}} to={`/payment/${productId}`} >Place Order</Link></button></div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
