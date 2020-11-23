import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import UserShow from '../pages/UserShow';
import UserNew from '../components/UserNew';
import ChatBox from '../components/ChatBox';

export default (
  <Switch>
    <Route exact path ="/" component = { Home }/>
    <Route exact path='/user/new' component = { UserNew }/>
    <Route exact path='/user/:id' component = { UserShow }/>
    <Route exact path="/room/:roomId" component = { ChatBox } />
  </Switch>
);

