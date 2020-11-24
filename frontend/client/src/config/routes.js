import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../components/Home';
// import UserShow from '../pages/UserShow';
import UserNew from '../components/UserNew';
import ChatBox from '../components/ChatBox';
import RoomPage from '../pages/RoomPage';

export default (
  <Router>
    <Switch>
    <Route exact path ="/" component = { Home }/>
    <Route path='/user/new' exact component = { UserNew }/>
    {/* <Route exact path='/user/:id' component = { UserShow }/> */}
    <Route path="/room/:roomId" exact component = { RoomPage } />
  </Switch>
  </Router>
);

