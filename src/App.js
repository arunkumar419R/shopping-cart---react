import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Registration} from './components/Registration';
import {Login} from './components/Login';
import {ProductsList} from './components/ProductsList';
import {Product} from './components/Product';
import {CheckOut} from './components/CheckOut';
import Modal from 'react-modal';
//import {MyLayOut} from './components/MyLayOut'

Modal.setAppElement('#root');
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/" component = {Login} exact></Route>
          <Route path = "/login" component = {Login} ></Route>
          <Route path = "/registration" component = {Registration}></Route>
          <Route path = "/products" component = {ProductsList}></Route>
          <Route path = "/product/:productId" component = {Product}></Route>
          <Route path = "/checkOut" component = {CheckOut}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
