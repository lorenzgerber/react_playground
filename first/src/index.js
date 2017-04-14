import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import Questions from './components/questions/Questions';
import Uploads from './components/uploads/Uploads';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="questions-list" component={Questions}></Route>
      <Route path="uploads" component={Uploads}></Route>
    </Route>
  </Router>
, document.getElementById('root')
);
