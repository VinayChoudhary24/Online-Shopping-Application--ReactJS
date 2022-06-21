//S4.1--These IMPORT/EXPORT set-ups the REACT CONTEXT API, after this GO TO Index.js and WRAP the Components(S4.2)

import React, { createContext,  useContext, useReducer } from "react";

//This Prepares the DATA LAYER
export const StateContext = createContext();

//This WRAPS OUR APP and Provides Data Layer to EVERY COMPONENT inside the APP.
export const StateProvider = ({ reducer, initialState, children }) => (<StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
</StateContext.Provider>
); //initialState Means:- How the Data Layer will look-like in the BEGINNING.
//reducer Means:- How we MANIPULATE/PLAY with the Data Layer. Reducer Helps in Dispatch of the Products i.e Click on Add to Basket and reducer will DISPATCH the Product to DATA LAYER>>to>>Basket.

 
//This PULLS Information from the Data Layer.
export const useStateValue = () => useContext(StateContext);