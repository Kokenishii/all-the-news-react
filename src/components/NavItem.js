import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link} onClick={this.props.buildStories}>
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
