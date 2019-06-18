import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = event => {
    this.props.getStories(this.props.label);
    window.location.href = '#top';
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
