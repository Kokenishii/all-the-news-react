import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';

const navItemsObject = [
  {
    label: 'arts',
    link: '#arts',
  },
  {
    label: 'books',
    link: '#books',
  },
  {
    label: 'fashion',
    link: '#fashion',
  },
  {
    label: 'food',
    link: '#food',
  },
  {
    label: 'movies',
    link: '#movies',
  },
  {
    label: 'travel',
    link: '#travel',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Nav {...navItemsObject} />
      {/* <Stories {...navItemsObject} /> */}
    </div>
  );
}

export default App;
