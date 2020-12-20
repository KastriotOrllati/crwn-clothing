import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';




class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <Route exact={true} path='/' component={HomePage}/>
      <Route exact={true} path='/shop' component={ShopPage}/>
      </div>
    );
  }
}

export default App;
