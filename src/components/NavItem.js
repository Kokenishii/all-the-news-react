import React from 'react';

const NavItem = props => {
  const sendSection = () => {
    props.getStories(props.navItem);
  };

  return (
    <li>
      <a href={`#${props.navItem}`} onClick={sendSection}>
        {props.navItem}
      </a>
    </li>
  );
};
export default NavItem;