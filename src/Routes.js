import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import Details from './components/Details/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/details/:id" exact component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
