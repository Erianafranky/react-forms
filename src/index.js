import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Subscribe from  './components/Subscribe';
import Pay from './components/Pay';
import Notfound from './components/Notfound';
import User from './components/User';

const routing = (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/pay" component={Pay} />
      <Route path="/user/create" component={User} />
      <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))



