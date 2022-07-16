import React, { useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Cart from "../../components/cart/cart";
import "./bill.css";

import StripePayment from "../../components/PurchaseButton/StripePayment";

const Bill = () => {
   
 
  return (
    <div>
      <Navbar />
      
      <StripePayment/>
    </div>
  );
};

export default Bill;
