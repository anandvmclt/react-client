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

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer,  composeWithDevTools(
    applyMiddleware(thunk)
  ))

  export default store