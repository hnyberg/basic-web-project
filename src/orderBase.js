import React from 'react';

import MessageSystem from './messageSystem';
import OrderFlowBar from './orderFlowBar';
import OrderConstantInfoBar from './constantInfo/bar';
import OrderFlowState from './orderFlowState';

class OrderBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    MessageSystem.subscribe(MessageSystem.searchEvent, (order) => {
      this.setState({ order });
    });
  }

  render() {
    if (!this.state.order) {
      return (<div className="container">ingen order vald. Sök efter en order.</div>);
    }

    return (
      <div className="orderBase container">
        <OrderFlowBar />
        <OrderConstantInfoBar order={this.state.order} />
        <OrderFlowState />
      </div>
    );
  }
}


export default OrderBase;
