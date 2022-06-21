import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//S4.3-- Import initialState
import { initialState } from "./reducer";

//S4.4-- Import reducer and StateProvider
import reducer from "./reducer";
import { StateProvider } from "./StateProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
{/*S4.2-- WRAP the APP Inside the <StateProvider> so that EVERY Component can get ACCESS to the Data; Layer. NOW S4.3-- Create reducer.js */} 
   <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
