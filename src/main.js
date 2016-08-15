import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Cookies from 'js-cookie';

import Login from './login';
import Banner from './banner';
import OrderBase from './orderBase';

import '../css/main.scss';

class LoggedIn extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <OrderBase />
      </div>
    );
  }
}

class Main extends React.Component {
  requireAuth(nextState, replace) {
    if (Cookies.get('login') === undefined) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LoggedIn} onEnter={this.requireAuth} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
