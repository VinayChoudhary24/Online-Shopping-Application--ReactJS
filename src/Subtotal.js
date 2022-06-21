import React from "react";

import "./Subtotal.css";

//S3.1-- Import CurrencyFormat
import FormatCurrency from "react-currency-format";

//import useStateValue
import { useStateValue } from "./StateProvider";

//import getBasketTotal
import { getBasketTotal } from "./reducer";

//S2.11
export default function Subtotal() {

 //S4.9-- Pull the Basket CONTENT from the Data Layer with the help of useStateValue
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>

  {/*S3.2--RenderedText will be displayed  */}
      <FormatCurrency
        renderText={(value) => (
          <>
            <p>
          {/*S4.10-- insert {basket.length}, this will show ITEMS in The SUBTOTAL, now go to reducer and build SELECTOR*/}    
              Subtotal ({basket?.length} items): 
              
          {/*S4.13-- pass VALUE, now Create  Checkoutproduct.js.js*/}     
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">  <input type="checkbox" /> This order contains a gift</small>
           </>
        )}
        decimalScale={2}

    //S4.12-- set Value To getBasketTotal(basket), now pass value inse<strong>    
        value={getBasketTotal(basket)} //TOTAL AMOUNT
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR "}   
      />
    
    {/*S3.3-- add checkout BUTTON*/}
    <button>Proceed to Checkout</button>
    </div>
  );
}
