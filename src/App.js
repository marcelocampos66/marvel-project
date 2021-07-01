import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import HeroesList from './pages/HeroesList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route path="/heroes-list" component={HeroesList} />
    </Switch>
  );
}

export default App;
