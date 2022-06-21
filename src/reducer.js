//S4.3-- Create a initialState
export const initialState = {
  basket: [], //In the  Beginning the Basket is empty

  //S6.6-- add user, go to App.js
  user: null
}

//S4.11--BUILD SELECTOR(very powerful) for TOTAL AMOUNT DISPLAY, now go to subtotal.js and give the value
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


//S4.4 Create a Reducer Which will DISPATCH the Products, it takes two parameters-STATE of the Product and ACTION(ADD/REMOVE) to be Performed, after this add Click Event on button add to basket, product.js 
const reducer = (state, action) => {
 
   switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item] //This Code Means Whenever we click ADD TO BASKET it Will return us CURRENT STATE of the Basket PLUS the ACTION Performed
      };

  //S4.16-- Add the REMOVE CASE to remove item
     case 'REMOVE_FROM_BASKET':

  //We Use INDEX because we want Particular item to be REMOVED   
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

  //Copy the Current State of the BAsket
  let newBasket = [...state.basket];
  
//IMPORTANT:- Some WEBSITES uses same ID'S for the PRODUCTS so by this METHOD we only Remove the Particular Item  
  if (index >= 0) {
  //This Means Found an Item inside the BASKET with the ID  
    newBasket.splice(index, 1); //herewe PASS the index and SPLICE it by 1 i.e this will go to the  item and remove just ONE ITEM
  } else {
 //did not found the item   
    console.warn(
      `cant remove the product (id: $(action.id) as its not in the basket!)`
    )
  }

  //This is the New BASKET AFter Items REMOVED
    return {
      ...state, 
      basket: newBasket
    }

  //S6.8 add case i.e listener for set_user
    case "SET_USER":
      return {
        ...state,
        user: action.user
      } //now, add the user to basket & sign-out from header.js

      default:
        return state;
   }
};

export default reducer;