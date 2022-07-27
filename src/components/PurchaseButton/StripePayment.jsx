import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import StripeCheckout from "react-stripe-checkout";

function StripePayment({ cart, setCart, handlePrice }) {
  const [product ,setProduct] = useState({
    name: "Cart",
    price: 10,
    productBy: "Shop"
  });


  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`https://inventory-billing.herokuapp.com/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE ", response);
      const {status} = response;
      console.log("STATUS ", status)
    }).catch(error => console.log(error));

  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-center">Make a payment and place your Order</div>
        <div className="d-flex justify-content-center my-3">
        <StripeCheckout 
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Make Payment" 
        amount={1 * 100}
        shippingAddress
        billingAddress
         >
          <button className="btn btn-success blue m4">Place Order</button>
        </StripeCheckout></div>

      </header>
    </div>
  );
}

export default StripePayment;
