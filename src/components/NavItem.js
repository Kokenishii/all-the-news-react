import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = () => {
    // console.log(this.props.link);
    this.props.getStories(this.props.link);
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
