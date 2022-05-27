import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';

import HomeScreen from './components/screens/HomeScreen';
import ProductdescSreen from './components/screens/ProductdescSreen';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Cartscreen from './components/screens/Cartscreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
          <BrowserRouter>
       <Route path="/" component={HomeScreen} exact/>
       <Route path="/product/:id" component={ProductdescSreen} />
       <Route path="/cart" component={Cartscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
