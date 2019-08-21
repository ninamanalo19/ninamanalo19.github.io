import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NoMatch from './NoMatch.js';
import Home from './Home.js';


export default () => (
<BrowserRouter onUpdate={() => {console.log('updating router');}}>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route component={NoMatch} />
  </Switch>
</BrowserRouter>
);
