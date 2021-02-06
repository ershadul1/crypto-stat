import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';
import Navbar from './components/Navbar/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
