import React from 'react';

const Nav = props => {
  return (
    <nav>
      <ul>
        {props.navList.map(navItem => (
          <li key={navItem.link}>
            <a onClick="this.props.test" href={navItem.link}>
              {navItem.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
