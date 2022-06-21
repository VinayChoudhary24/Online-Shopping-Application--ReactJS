//This File Contains Left DIV Section[Amazon LOGO], Middle DIV[Search Bar], Right DIV[Sign-in, return&orders, Prime, Basket]
//The Right DIV Section Contains Multiple DIV Sections For SIGN-IN, RETURNS, PRIME And BASket.

//S1:- rfce
import React from "react";

//S1.1 Import header.css
import "./Header.css";


//S1.3-- Install Material UI for Icons i.e(material-ui.com) first run this line--  npm install @mui/material @emotion/react @emotion/styled and then this line-- npm install @mui/icons-material(this for ICONS)

//S1.3-- import the SearchIcon from @node_modules>@mui>icon-material>Search
import SearchIcon from "@mui/icons-material/Search";

//S1.4-- After Adding Div Add the ICON for ShoppingBasket
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

//S2.9-- Import Link so that we can Click on the LOGO
import { Link } from "react-router-dom";

//import USESATEVALUE
import { useStateValue } from "./StateProvider";

import { auth } from "./firebase";


function Header() {

 //S4.7-- use USESTATEVALE TO PULL THE INFORMATION IN HEADER BASKET HERE, now change the value for shoppingbasket below
  const [{ basket, user }, dispatch] = useStateValue(); //S6.9-- add USER

  //S6.9-- Create Function handleAuthentication
  const handleAuthentication = () => {
    if (user) {
      auth.signOut(); 
    }
  }

  return (
    //S1.1Create Different DIV SEctions For Left, Middle And Right Under Main Header DIV. specify className for styling, Put the images src and and Input for Search Bar and
    //this is the MAIN Header Conmponent   
    <div className='header'>
      
  {/*S2.9- WRAP the IMAGE inside the LINK and SET TO='/', Now we can CLICK on the  AMAZON LOGO and it will redirect us to the home page */}
  <Link to="/" style={{ textDecoration: 'none' }}> {/*Uing STYLE='none' to REMOVE the line under the Link*/}
  <img
      //1.1--this  is the left component
         className="header__logo"

         /*This is the amazon logo */ 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         alt=""
         />
  </Link>    
      

         {/*this is the Middle Component */}
         <div
         className="header__search">
          
          {/*input section is for the search bar and type is set to text */}
          <input
          className="header__searchInput" type="text" />

        {/*S1.3-- Add this to Render  SearchIcon*/}
        <SearchIcon
        className="header__searchIcon" />

       </div>

         {/* this is the Right Side Component*/}
         <div className="header__nav">
          
    {/*S5.2-- Surround this DIV inside <link> and SET the Link to LOG-IN Page, now go to app.js*/} {/*S6.9-- put !user && for Smooth SignIn and signOut*/}
     <Link to={!user && '/login'} style={{ textDecoration: 'none' }}> {/*Uing STYLE='none' to REMOVE the line under the Link*/}

    {/*S6.9-- make this DIV Clickable, create a function(handleAuthentication) for CLICK */}     
          <div onClick=    {handleAuthentication}className='header__option'>
           <span 
           className='header__optinLineOne'>Hello Guest</span>
           <span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span> {/*S6.9--  add sign-out*/}
          </div>
      </Link>

          <div className='header__option'>
          <span 
            className='header__optinLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <div className='header__option'>
          <span 
            className='header__optinLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
          
          
  {/*S2.9- WRAP the BASKET DIV Section inside the LINK and SET TO='/checkout', Now we can CLICK on the Basket LOGO and it will redirect us to the Checkout page */}
          <Link to="/checkout">
          {/*S1.4-- Add DIV Section For the Basket*/}
          <div className="header__optionBasket">

            {/*Add this to render ShoppingBasket*/}
            <ShoppingBasketIcon />

    {/*Add Span to ADD the Count To the basket (There is SPACE BETWEEN The header__optionLineTwo & the header__basketCount i.e Means TWO Different CLASSNAMES), after this STYLE THIS*/}        
            <span className="header__optionLineTwo            
            header__basketCount">{basket.length}</span> {/*S4.8-- put thebasket value inside the SPAN to {basket?.length}, WRAP it inside{} and Use ? for Optional-Chaining i.r it will handle the ERRORS, This will ADD Number to BASKET in HEADER when we Click on ADD TO BASKET, NOW complete the Subtotal from subtotal.js*/}
         </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;