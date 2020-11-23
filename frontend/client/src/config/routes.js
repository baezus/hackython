import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import UserShow from '../pages/UserShow';
import UserNew from '../pages/UserNew';

export default (
  <Switch>
    <Route exact path ="/" component = { Home }/>
    <Route path='/user/new' component = { UserNew }/>
    <Route path='/user/:id' component = { UserShow }/>
  </Switch>
);

