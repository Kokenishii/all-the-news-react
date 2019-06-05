import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = () => {
    this.props.getStories(this.props.label);
  };

  render() {
    return (
      <li>
        <a href={this.props.link} onClick={this.sendSection}>
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
