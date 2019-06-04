import React from 'react';

import NavItem from './NavItem';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.navList.map(navItem =>
            <NavItem
              key={navItem.link}
              link={navItem.link}
              label={navItem.label}
              getStories={this.props.getStories}
            />,
          )}
        </ul>
      </nav>
    );
  }
}

export default Nav;
