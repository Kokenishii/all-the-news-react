import React from 'react';
import NavItem from './NavItem';

const Nav = props => {
  return (
    <nav>
      <ul>
        <li className="logo">
          <a href="#">
            <img src="img/logo.svg" alt="logo" />
          </a>
        </li>

        {props.navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            getStories={props.getStories}
            activeLink={props.activeLink}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
