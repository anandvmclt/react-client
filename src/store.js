import { getAllProductsReducer, getProductByIdReducer } from "./reducer/productReducer";
import addTocartReducer from "./reducer/cartReducer";
import { combineReducers } from 'redux';
import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer,
    addTocartReducer : addTocartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
  addTocartReducer : {cartItems : cartItems}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer, initialState,  composeWithDevTools(
    applyMiddleware(thunk)
  ))

  export default store