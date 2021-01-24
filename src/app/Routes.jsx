import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from '../pages/home/Home';
import Notice from '../pages/notices/Notice';

export default function Routes() {
    return (
      <Router>
        <div>          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/notices" exact component={Notice}/>
          </Switch>
        </div>
      </Router>
    );
  }