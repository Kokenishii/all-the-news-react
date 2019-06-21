import React, { Component } from 'react';

class NavItem extends Component {
  state = {
    isActive: false,
  };

  sendSection = event => {
    this.props.getStories(this.props.label);
    // var pathname = window.location.hash;
    // console.log(pathname);
    window.location.href = '#top';

    // this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <li>
        <a
          className={this.state.isActive ? 'active' : null}
          href={this.props.link}
          onClick={this.sendSection}
        >
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
