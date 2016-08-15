import React from 'react';
import { withRouter } from 'react-router';
import Cookies from 'js-cookie';

// import '../css/login.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    Cookies.set('login', '');
    const { location, router } = this.props;
    if (location.state && location.state.nextPathname) {
      router.replace(location.state.nextPathname);
    } else {
      router.replace('/');
    }
  }

  render() {
    return (
      <div className="login">
        plz login:
        <button onClick={this.login}>hej</button>
      </div>
    );
  }
}

Login.propTypes = { location: React.PropTypes.object, router: React.PropTypes.object };
const decoratedLogin = withRouter(Login);


export default decoratedLogin;
