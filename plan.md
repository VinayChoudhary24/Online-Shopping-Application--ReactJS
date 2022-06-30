# Getting Started:-
-Building the User Interface With ReactJS [Always Initialize Setup/Environment In BASH Terminal with commands -npm install -g yarn AND npm install -g node AND LS AND NPM START, not in cmd, powershell]

(Install React, Create app with line i.e npx create-react-app Project Name)(React is a JS library for building USER INTERFACE)(Use FIREBASE for hosting and Database{For Pulling the information whenever Needed})(Using Firebase Cloud Funtions For PAYMENTS)

#If face this error-- npm install --no-audit --save --save-exact --loglevel error react react-dom react-scripts cra-template has failed. Use this Line First -- npm cache clean --force and then do again.


#install Firebase with Command-- and npm install  -g firebase-tools & -- npm install firebase in new BASH Terminal

# Part One:-[ Build Header, Home component]
-Getting Started with User Interface, deleting the test and logo files from SRC Folder, clear the DIV section from App.js(put import React from "react"; in first line of App.js)[Delete everything from app.CSS and Put * {
  margin: 0;
}
this line in Index.css to remove the Default Margin]

STEP1.1--1.3:- Create Header.js

STEP1.4--1.11:- Create Basket Icon and Add in Right DIV Section and put the Products in Home component

STEP2.1--2.10:- Building the Basket Page i.e CHECKOUT PAGE(WE will Need REACT ROUTER in order to have Multiple Pages On WEBSITE, it helps in the FUNCTIONALITY of Going BACKWARDS & FORWARD)[--npm install react-router-dom@5.3.3(this version supports SWITCH)]
[INSTAll REACT ROUTER DOM with this command-- npm install react-router-dom, after this 2.1IMPORT react-router to APP.JS and Also   
2.2WRAP the Function App Inside the ROUTER], also adding the LINK to the Amazon & Basket LOGO(<link>)

STEP3.1--3.3:- Creating Subtotal.Js, css and INSTALL LIBRARY for rendering MONEY i.e npm install react-currency-format --save --force.

STEP4.1-4.:--(REQUIRES:- Create STATE PROVIDER.js)REACT CONTEXT API-gives us the functionality to ADD/REMOVE items i.e when clicked on ADD TO BASKET on HOEM-PAGE the item goes the the BASKET-PAGE & when Clicked REMOVE ITEM FROM THE BASKET the item goes back/deleted BECAUSE It uses the DATA LAYER to PUSH/PULL the item in the layer DYNAMICALLY.(REACT CONTEXT API and REDUX Are not the same thing but they are the same PATTERN i.e Dispatching Products and Fetching to Basket(GLOBAL STORE/DATA LAYER))
(Basket Has Different Functionalities:-
1.Inside the Header where the VALUE COUNT CHANGES..
2.Inside the Home where it gets Clicked(Add to Basket) FIRST and the value changes in header..
3.on the Checkout page where it is removed(remove from the basket) and value of header changes..) i.e BASKET FUNCTIONALITY IS SUPER DYNAMIC AND FOR THIS WE USE REACT CONTEXT API(data layer)

STEP5.1-5.7:- Full LOG-IN  Functionality(FRONTEND) 
FIRST CREATE a LOG-IN ROUTE IN APP.JS

STEP6.1-6.9:-USER Authentication  with FIREBASE i.e INSTALl firebase with -- npm install -g firebase-tools and npm i firebase

#we can ADD SLIDER to the Home Components i.e adding SLIDER.js & we Can also use REACT-FLIP-MOVE to add animations to the Checkout PAGE.

STEP7.1-7.2:- USERNAME on Checkout

STEP8.1-8.:- Deploy app with Firebase , Connecting the FRONTEND to firebase DB to pull info(First Step is to RUN Command-- firebase login inside CMD not in BASH terminal, Now command-- Firebase init and run --npm run build in BASH terminal not in CMD & Finally run--firebase deploy in CMD not inBASH  Terminal.)
