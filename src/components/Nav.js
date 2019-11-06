import React from 'react';
import NavItem from './NavItem';
// import {ReactComponent as Logo} from '../logo.svg'

const Nav = props => {
  return (
    <nav>
      <ul>
     
      <li className="logo">
          <a href="#top">
            <img src="img/logo.svg" alt="logo" />
            {/* <Logo/> */}
          </a>
        </li>
        
        {props.navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            getStories={props.getStories}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;