import React from 'react';

import '../css/orderFlowBar.scss';

class OrderFlowBar extends React.Component {
  render() {
    return (
      <div className="order-flow-bar row">
        <div className="order-state col-lg-2 col-xs-4">
          Kontroll
        </div>
        <div className="order-state col-lg-2 col-xs-4">
          Muntlig bekräftelse
        </div>
        <div className="order-state col-lg-2 col-xs-4">
          Kalkyl
        </div>
        <div className="order-state col-lg-2 col-xs-4">
          Byggaorder
        </div>
        <div className="order-state col-lg-2 col-xs-4">
          Levernsorder
        </div>
        <div className="order-state col-lg-2 col-xs-4">
          Mängdning
        </div>
      </div>
    );
  }
}


export default OrderFlowBar;
