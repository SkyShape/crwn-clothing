import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { div } from 'prelude-ls';
import ShopPage from './pages/shop/Shop';

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>   
    </div>
  );
}

export default App;
