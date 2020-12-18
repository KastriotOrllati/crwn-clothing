import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

import './App.css';

const HatsPage = () => (
  <div>
     <h1>HATS PAGE</h1>  
  </div>
);




class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <Route exact={true} path='/' component={HomePage}/>
      <Route exact={true} path='/hats' component={HatsPage}/>
      </div>
    );
  }
}

export default App;
