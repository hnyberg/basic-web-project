import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../css/settingsMenu.scss';

class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropdownVisible: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside(e) {
    const domNode = ReactDOM.findDOMNode(this);
    // Check if click was outside of component
    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ dropdownVisible: false });
    } else {
      this.setState({ dropdownVisible: true });
    }
  }

  render() {
    return (
      <div className="settings-menu">
        <div className="settings-icon">
          <div className="settings-circle">
            <span className="fa-stack fa-lg">
              <i className="fa fa-user fa-stack-2x" />
              <i className="fa fa-gear fa-stack-1x" />
            </span>
          </div>
        </div>

        <ReactCSSTransitionGroup transitionName="dropdown" transitionEnterTimeout={100} transitionLeaveTimeout={200}>
          {this.state.dropdownVisible ? <DropDown /> : ''}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    Cookies.remove('login', '');
    location.reload();
  }

  render() {
    return (
      <div className="dropdown">
        <div className="item">
          <button className="btn btn-default">Inställningar</button>
        </div>
        <div className="item">
          <button className="btn btn-default" onClick={this.handleLogoutClick}>Logga ut</button>
        </div>
      </div>
    );
  }
}


export default SettingsMenu;
