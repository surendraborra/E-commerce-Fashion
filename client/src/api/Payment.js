import React, { useState } from 'react';
import './payment.css';
import PaymentGateway from './PaymentGateway';
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showOnlineOptions, setShowOnlineOptions] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const userId = useSelector(state => state.user.id);
  const { productId } = useParams();
  const navigate=useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOnlineOptions(false);
  };

  const handlePayment = async () => {
    try {
      let payment_type = '';
      let payment_status = '';

      if (selectedOption === 'cash_on_delivery') {
        payment_type = 'cod';
        payment_status = 'unpaid';
      } 
      else if(selectedOption ===  'credit_card'){
        payment_type = 'online';
          payment_status ='paid';
        }
      
      else {
        payment_type = selectedOption;
        payment_status ='paid';
      }

      const response = await fetch('http://localhost:3001/order/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          payment_type: payment_type,
          payment_status: payment_status,
        }),
      });

      if (response.ok) {
        console.log('Order created successfully');
        payment_status = 'paid';
        setPaymentStatus('success');
        window.alert('Payment successful! Your order has been placed.');
        navigate('/orders/:user_id')
      } else {
        const data = await response.json();
        console.error('Error creating order:', data.message);
        setPaymentStatus('failure');

      }
    } catch (error) {
      console.error('Error creating order:', error.message);
      setPaymentStatus('failure');
  
    }
  };

  let paymentDetails = null;

  if (selectedOption === 'credit_card') {
    paymentDetails = <PaymentGateway onSubmit={handlePayment} />;
  } else if (selectedOption === 'cash_on_delivery') {
    paymentDetails = <p>You've selected Cash on Delivery.</p>;
  }
  else if (selectedOption === 'google_pay') {
    paymentDetails = <p>You've selected google_pay.</p>;
  }
  else if (selectedOption === 'paypal') {
    paymentDetails = <p>You've selected paypal.</p>;
  }
  else if (selectedOption === 'apple_pay') {
    paymentDetails = <p>You've selected apple_pay.</p>;
  }
  let message = null;

  if (paymentStatus === 'success') {
    message = <p>Payment successful! Your order has been placed.</p>;
  } else if (paymentStatus === 'failure') {
    message = <p>Payment failed. Please try again later.</p>;
  }

  return (
    <div className="payment-container">
      <h2>Select Payment Option</h2>
      <div className="payment-options">
        <button
          className={`payment-option ${selectedOption === 'cash_on_delivery' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('cash_on_delivery')}
        >
          Cash on Delivery
        </button>
        <button
          className={`payment-option ${selectedOption === 'online' ? 'selected' : ''}`}
          onClick={() => {
            handleOptionSelect('online');
            setShowOnlineOptions(true);
          }}
        >
          Online Payment
        </button>
      </div>

      {showOnlineOptions && (
        <div className="online-payment-options">
          <button
            className={`payment-option ${selectedOption === 'credit_card' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('credit_card')}
          >
            Credit Card
          </button>
          <button
            className={`payment-option ${selectedOption === 'paypal' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('paypal')}
          >
            PayPal
          </button>
          <button
            className={`payment-option ${selectedOption === 'apple_pay' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('apple_pay')}
          >
            Apple Pay
          </button>
          <button
            className={`payment-option ${selectedOption === 'google_pay' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('google_pay')}
          >
            Google Pay
          </button>
        </div>
       )
    }


      <div className="payment-details">{paymentDetails}</div>
      <button className="proceed-button" onClick={handlePayment}>
          Placr Order
        </button>
        {message && <div className="payment-message">{message}</div>}
    </div>

  );
};

export default Payment;