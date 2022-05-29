import { getAllProductsReducer, getProductByIdReducer } from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";
import {registerNewUserReducer} from "./reducer/userReducer";
import { loginReducer } from "./reducer/userReducer";
import { combineReducers } from 'redux';
import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer,
    cartReducer : cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}
}
// eslint-disable-next-line 
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer, initialState,  composeWithDevTools(
    applyMiddleware(thunk)
  ))

  export default store