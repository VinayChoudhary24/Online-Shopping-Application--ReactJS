import React from 'react'
import "./CheckoutProduct.css";

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import StarIcon from '@mui/icons-material/Star';

import { useStateValue } from "./StateProvider";


//Add PROPS to the CheckoutProduct function i.e {id, title, price, image, rating}
export default function CheckoutProduct({ id, image, title, price, rating}) {

//S4.16-- pull the Items from the basket
const [{ basket }, dispatch] = useStateValue();

//S4.16-- Create Function
  const removeFromBasket = () => {
//Remove the items
     dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
  //ADD this CASE InTHE REDUCER.JS    
     })    
  }

  return (
    <div className='checkoutProduct'>
    {/*S4.14-- checkoutProducts has a IMAGE, TITLE, PRICE, RATING and REMOVE FROM BASKET, go to */}
      <img className='checkoutProduct__image'src={image}
      alt=""
      />

    {/*right section for the checkoutProduct*/}
    <div className='checkoutProduct__info'>
      <p className='checkoutProduct__title'>{title}</p>
      <p className="checkoutProduct__price">
        <CurrencyRupeeIcon 
        className="checkoutCurrency__RupeeIcon"
        />
        <span className="checkoutCurrency__price">{price}</span>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_, i) => ( 
              <p>    
                <StarIcon />
              </p>
          ))}
       </div>

    {/*S4.16-- Add Event to the Button and Create Function RemoveFromBAsket*/}   
       <button onClick={removeFromBasket}>Remove from Basket</button> {/*Now RENDER OUT THE PRODUCTS IN CHECKOUT.JS*/}        
     </div>  
    </div>
  )
}
