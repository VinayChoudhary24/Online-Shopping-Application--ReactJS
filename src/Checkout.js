import React from "react";
import "./Checkout.css";

import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";


export default function Checkout() {
  //S4.15-- pull the  products from the Basket with the help of the useStateValue HOOK //S7.1-- Pull the USer Here 
  const [{ basket, user }, dispatch] = useStateValue();

  return (
  //S2.7-- There are Two Sections for Checkout Page i.e LEFT & RIGHT  
    <div className="checkout">
      
      {/*S2.7-- Make the left(CONSISTS OF AD and LIST) and  right(CONSISTS OF PAYMENTS) sections*/}
      <div className="checkout__left">
        <img 
        className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
         alt=""
        />

      <div>
     {/*S7.2-- pull the User and Email so that it Reflects on the Checkout Page*/}
    {/*<h3>Hello, {user?.email}</h3>*/}
        <h2 className="checkout__title">
          Your Shopping Basket</h2>

{/*S2.8--ADD CheckoutProduct HERE */}     
        {/*CheckoutProduct*/}

    {/*S4.15-- Render  the CheckoutProducts */}
    {basket.map(item => (
      <CheckoutProduct 
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      />
    ))} 
    
    </div>
   </div>

   {/*THIS IS THE RIGHT SECTION*/}
     <div className="checkout_ _right">
      
  {/*S2.10-- Create Subtotal.JS and Render Subtotal Component here*/}    
      <Subtotal />      
     </div>  
    </div>
  );
}
