import React from 'react';

import MyContext from '../MyContext';

const Header = props => {
  return (
    <header>
      <MyContext.Consumer>
        {context => <h1>{context.state.siteTitle}</h1>}
      </MyContext.Consumer>
    </header>
  );
};

export default Header;
