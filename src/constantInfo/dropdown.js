import React from 'react';

import GeneralInfo from './generalInfo';
import GeneralInfo2 from './generalInfo2';
import Gavel from './gavel';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }

  handleSidebarClick(selectionId) {
    this.props.handleDropdownSidebarClick(selectionId);
  }

  render() {
    let info = <i className="fa fa-info-circle fa-3x" />;
    let info2 = <i className="fa fa-file-text fa-3x" />;
    let gavel = <i className="fa fa-gavel fa-3x" />;

    let selectedView;
    if (this.props.selectionId === 'info') {
      info = <i className="fa fa-info-circle fa-3x selected" />;
      selectedView = <GeneralInfo order={this.props.order}/>;
    } else if (this.props.selectionId === 'info2') {
      info2 = <i className="fa fa-file-text-o fa-3x selected" />;
      selectedView = <GeneralInfo2 />;
    } else if (this.props.selectionId === 'gavel') {
      gavel = <i className="fa fa-gavel fa-3x selected" />;
      selectedView = <Gavel />;
    }

    return (
      <div className="dropdown">
        <div className="sidebar">
          <SidebarItem id="info" selectionId={this.props.selectionId} onClick={this.handleSidebarClick}>
            {info}
          </SidebarItem>
          <SidebarItem id="info2" selectionId={this.props.selectionId} onClick={this.handleSidebarClick}>
            {info2}
          </SidebarItem>
          <SidebarItem id="gavel" selectionId={this.props.selectionId} onClick={this.handleSidebarClick}>
            {gavel}
          </SidebarItem>
          <SidebarItem id="info" selectionId={this.props.selectionId} onClick={this.handleSidebarClick}>
            <i className="fa fa-comment fa-3x" />
          </SidebarItem>
          <SidebarItem id="info" selectionId={this.props.selectionId} onClick={this.handleSidebarClick}>
            <i className="fa fa-phone fa-3x" />
          </SidebarItem>
        </div>
        <div className="main">
          {selectedView}
        </div>
      </div>
    );
  }
}
Dropdown.propTypes = {
  handleDropdownSidebarClick: React.PropTypes.func,
  selectionId: React.PropTypes.string,
  children: React.PropTypes.object,
};

class SidebarItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <span className="sidebar-item" onClick={this.onClick}>
        {this.props.children}
      </span>
    );
  }
}
SidebarItem.propTypes = {
  id: React.PropTypes.string,
  onClick: React.PropTypes.func,
  selectionId: React.PropTypes.string,
  children: React.PropTypes.object,
};

export default Dropdown;