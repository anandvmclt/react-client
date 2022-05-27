import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';

import HomeScreen from './components/screens/HomeScreen';
import ProductdescSreen from './components/screens/ProductdescSreen';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Cartscreen from './components/screens/Cartscreen';
import RegisterScreen from './components/screens/RegisterScreen';
import LoginScreen from './components/screens/LoginScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
          <BrowserRouter>
       <Route path="/" component={HomeScreen} exact/>
       <Route path="/product/:id" component={ProductdescSreen} />
       <Route path="/cart" component={Cartscreen} />
       <Route path="/register" component={RegisterScreen} />
       <Route path="/login" component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
