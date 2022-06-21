import React from "react";

//import CSS
import "./Product.css";

//S1.8--Import Indian Rupee Icon
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

//S1.8--Import Rating Icon
import StarIcon from '@mui/icons-material/Star';

//import useStateValue
import { useStateValue } from "./StateProvider";

//S1.10-- Passing PROPS as Parameter to Function to ADD Different Products Details{ PROPS }
export default function Product({ id, title, price, image, rating }) {

 //S4.5-- this will pull the information from the data layer 
  const [{ basket }, dispatch] = useStateValue();

 //S4.5-- Create addToBasket Event
 const addToBasket = () => {
 //Dispatch the Product/item into the data layer
 
 //S4.6-- Add Dispatch, Go to Header.js
   dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      image: image,
      price:  price,
      rating: rating,
    },
   }); 
 };
 
  return (
    <div className="product">

      {/*S1.8-- Building PRODUCTS, products Consists of TITLE, RATING, PRICE, IMAGE and ADD TO BASKET BUTTON*/}
      <div className="product__info">

        {/*TITLE*/}
        <p className="product__title">
          {title} {/*S1.10--PASS THE PROPS VALUE HERE i.e TITLE, and this {title} will render the ORIGINAL VALUE From the Home.JS Title Component, DO THE SAME FOR PRICE, IMAGE AND RATINGS BELOW */}
        </p>
        {/*PRICE*/}
        <p className="product__price">
        <CurrencyRupeeIcon 
        className="Currency__RupeeIcon"
        />
        <span className="currency__price">{price}</span>
        </p>
        {/*RATING*/}
        <div className="product__rating">

    {/*S1.10-- Add this Array(rating).fill.... to Arrange and make Ratings Dynamic*/}
          {Array(rating).fill().map((_, i) => ( 
              <p>
         {/*IT WILL SHOW FIVE STARS  BECAUSE WE HAVE PASSED RATING IN HOME.JS i.e {5}*/}    
                <StarIcon />
              </p>
          ))}

        </div>
      </div>
      <img //pass the  {image} prop in src here, it will render  from home.js
      src={image} alt=""
      />

   {/*S4.5-- ADD ONCLICK EVENT, Create addToBasket Function */}   
      <button onClick={addToBasket}>Add to Basket</button>

    </div>
  );
}

