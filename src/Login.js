import React, { useState } from 'react';
import "./Login.css";

import { Link } from "react-router-dom";

import { auth } from "./firebase";

//S6.3-- import usehistory 
import { useHistory } from "react-router-dom";


function Login() {

 //S6.3-- Create History Function
 const history = useHistory(); //This Allows us to Programmatically change the URL 

//S5.5-- Track the E-MIAL & PASSWORD input fields with the  help of this
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('') ; //PASS this email, setEmail & password, setPassword values to input to TRACK email, password and TYPING
 
 //S5.7-- Create signIn & Register Function with EVENT, NOW GO TO FIREBASE.COM, ENABLE signIn Method Email/Password and INSTALL FIREBASE NOW(BASH), go to firebase.js
  const signIn = e => {
    e.preventDefault(); //the preventDefa ult Event will PREVENT from REFRESHING of Page

   //S6.3--Some FIREBASE SignIn STUFF
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
         .catch(error => alert) 
  } //go to App.jsS6.4-track the USER
  const register = e => {
    e.preventDefault();

  //S6.2--Some FIREBASE Register STUFF, it will create a USER with Email & Password, Now we pull USEHISTORY from React-Router
  auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //S6.3-- it created a NEW USER
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))  
  }

  return (
    <div className='login'>
  {/*S5.4- Building the Login page Components i.e IMAGE, E-MAIL, PASSWORD, BUTTONS(sign-in, create account) & put the IMAGE inside the <LINK> which will take the USER to HOME*/}
  <Link to='/'> {/* '/' Means HOME.JS*/}
  <img className='login__logo'
   src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
   alt=''
  />
  </Link>
{/*S5.4- This is the Login Container*/}
    <div className='login__container'>
      <h1>Sign-in</h1>

      {/*FORM is Used For SUBMISSIONS*/}
      <form>
        <h5>E-mail</h5>
        {/*S5.6- PASS the VALUE here */}
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} /> {/*E-mail is MAPPED with this*/}

        <h5>Password</h5>
        {/*for PASSWORD input type is password, so that it is not visible*/}
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        {/*Password is MAPPED with this*/} 

   {/*S5.7-- add onClick EVENT and link  it with the Function signIn, do the same for REGISTERBUTTON*/}
      <button type='submit' onClick={signIn}className='login__signInButton'>Sign In</button>   
      </form>

     <p>
       By signing-in you agree to Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
     </p>

     <button type='submit' onClick={register}
     className='login__registerButton'>Create your Amazon Account</button> 
    </div>

    </div>
  )
}

export default Login