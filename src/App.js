import React, { useEffect } from "react";

import "./App.css";

//S1.2-- Import header.js to Render the Header.js Components
import Header from "./Header";

//S1.5-- import home.js With CTRL+Space key
import Home from "./Home";

//S2.1-- Import React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//S2.6-- Import Checkout
import Checkout from "./Checkout";

import Login from "./Login";

//S6.5-- import auth so to attach it with the listener(useEffect)
import { auth } from "./firebase";

import { useStateValue } from "./StateProvider";

function App() {
  //S6.7-- pull the dispatch
  const [{}, dispatch] = useStateValue();

//S6.4-- ADD a LISTENER that will Always keep track of who/USER signIn
 useEffect(() => {
//will only runs once when the app component loads i.e when a USER signIn

//S6.5--ATTACH THE AUTH
 auth.onAuthStateChanged(authUser => {
  console.log('USER IS >>', authUser);

  if (authUser) {
    //S6.8--if the user logged In/ was logged In
     dispatch({
      type: 'SET_USER',
      user: authUser
     })
  } else {
    //S6.8--the user logged out
     dispatch({
      type: 'SET_USER',
      user: null
     }) //add listener in reducer.js
  }
 })
 }, []) //now add User in reducer.js(6.6)


  return (
    //GS:- Replace App with app(BEM)
   //S2.2-- WRAP this code Inside <ROUTER></Router>
<Router> 
 <div className="app">

  {/*S2.7-- Remove The Header Component(<Header />) from belowand PASTE it Down Here Because we want to Render HEADER Regarless of Home & Checkout Components, Now Build Checkout.js*/}
  {/*<Header /> S5.3-- Remove the Header from Global Level so it dosent appear on the login page */}

  {/*S2.3--Using SWITCH for different CASES/STATEMENTS and we Put HEADER & HOME inside the SWITCH*/}
  <Switch>

  {/*S5.1-- Create a <  ROUTE> for LOG-in */}
     <Route path='/login'>
       <Login /> {/*Login Component, create login.js*/}
     </Route> {/*Now go to header.js and Surround hello guest and sign-in DIV inside the <link>*/}    


    {/*S2.5-- Here we DEFINE Specific ROUTE again for Header, Which Gives Us the CHECKOUT PAGE i.e we dont need Home page in Checkout page*/}
    <Route path="/checkout">
      <Header /> {/*S5.3*/}

    {/*S2.6-- Create the CHECKOUT COMPONENT i.e Create Checkout.js&css and RENDER HERE*/}
    <Checkout />

      </Route>

      {/*S1.2--Render The Header Component here i.e Header.js, After rendering We need To style all the classes One By One*/}
      {/*S2.4--DEFINE <Route></Route> For SPECIFIC ROUTES/PATH for HEADER & HOME to Render/Behave Accordingly*/}
     <Route path="/"> 
     <Header /> {/*S5.3*/}

      {/*S1.5-- Create a file Home.js and  Adding The HOME Component*/}
      <Home />
     </Route>  
    </Switch>   
   </div>
  </Router>
 );
}

export default App;
