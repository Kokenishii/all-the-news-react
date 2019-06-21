# All the News - React

## Create the Header Component

```js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>All the News That Fits We Print!</h1>
    </header>
  );
};

export default Header;
```

```js
function App() {
  return (
    <>
      <Header />
    </>
  );
}
```