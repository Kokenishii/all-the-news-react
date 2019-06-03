import React from 'react';

const Nav = props => {
  return (
    <nav>
      <ul>
        {/* {props.navItemsObject.map(navItem => (
          <li key={navItem.link}>
            <a href={navItem.link}>{navItem.label}</a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default Nav;
