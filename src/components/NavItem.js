import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = event => {
    this.props.getStories(this.props.label);
    window.location.href = '#top';

    // this.setState({ isActive: !this.state.isActive });
  };
  // className={this.state.isActive ? 'active' : ''}
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
