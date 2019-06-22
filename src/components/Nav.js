import React from 'react';

import NavItem from './NavItem';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <a href="#top">
              <img src="img/logo.svg" alt="logo" />
            </a>
          </li>
          {this.props.navList.map(navItem => (
            <NavItem
              key={navItem.link}
              link={navItem.link}
              label={navItem.label}
              getStories={this.props.getStories}
              activeLink={this.props.activeLink}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
