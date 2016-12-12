import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';

import buildStore from './store/buildStore';
import {ArtistsContainer} from './components/Artists';

const store = buildStore(); // Main store


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={ArtistsContainer}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
