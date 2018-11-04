import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import configureStore from './store/configureStore';

import Login from './pages/Login';
import Main from './pages/Main';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Switch>
              <Router path="/" component={Main} />
              <Router path="/login" component={Login} />
          </Switch>
      </Provider>
    );
  }
}

export default App;
