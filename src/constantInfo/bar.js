import React from 'react';

import Dropdown from './dropdown';

import '../../css/constantInfo/orderConstantInfo.scss';

class OrderConstantInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropdownVisible: false, selectionId: 'info' };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleDropdownSidebarClick = this.handleDropdownSidebarClick.bind(this);
  }

  handleDropdownClick() {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }

  handleDropdownSidebarClick(selectionId) {
    this.setState({ selectionId });
  }

  render() {
    return (
      <div className="order-constant-info">
        <div className="order-constant-info-bar">
          <span className="title">
            Ordernr:
          </span>
          <span className="value">
            {this.props.order.Referensnummer}
          </span>
          <span className="title">
            Huvudnr:
          </span>
          <span className="value">
            PLACEHOLDER
          </span>
          <span className="title">
            TelsimsID:
          </span>
          <span className="value">
            PLACEHOLDER
          </span>
          <button className="show-button btn btn-default" onClick={this.handleDropdownClick}>show</button>
        </div>
        {this.state.dropdownVisible ? <Dropdown handleDropdownSidebarClick={this.handleDropdownSidebarClick} selectionId={this.state.selectionId} /> : ''}
      </div>
    );
  }
}
OrderConstantInfo.propTypes = {
  order: React.PropTypes.object,
  selectionId: React.PropTypes.string,
};

export default OrderConstantInfo;
