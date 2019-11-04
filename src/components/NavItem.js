import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = event => {
    event.preventDefault();
    this.props.getStories(this.props.label);
  };

  render() {
    return (
      <li
        className={this.props.activeLink === this.props.label ? 'active' : ''}
      >
        <a href={this.props.link} onClick={this.sendSection}>
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
