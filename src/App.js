import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
// import Details from './pages/Details';
import HeroesList from './pages/HeroesList';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/search' component={ Search } />
      {/* <Route path='/' component={ Details } /> */}
      <Route path='/heroes-list' component={ HeroesList } />
    </Switch>
  );
}

export default App;
