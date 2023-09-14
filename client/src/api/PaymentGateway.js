import React, { useState } from 'react';
import './paymentgateway.css';
function PaymentGateway({ onSubmit }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
   setTimeout(() => {
    onSubmit();
    setPaymentSubmitted(true);
  }, 500);
};



  return (
    <div className="payment-gateway-container">


{paymentSubmitted ? (
        <div className="payment-success">
          <p>Payment submitted successfully!</p>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (

      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            placeholder='1234-5678-9012-3456'
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
            maxLength="23"
            required
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <div className="row">
          <div className="column">
            <label>
              Expiry Date:
              <input
                type="text"
                placeholder='12/24'
                pattern="\d{2}/\d{2}"
                title="Please enter the expiry date in the format MM/YY"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>
          </div>
          <div className="column">
            <label>
              CVV:
              <input
                type="text"
                placeholder='123'
                pattern="\d{3}"
                maxLength="3"
                required
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </label>
          </div>
        </div>
        <label>
          Cardholder Name:
          <input
            type="text"
            value={name}
            placeholder='john wick'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
       )}
    </div>
  );
}

export default PaymentGateway;