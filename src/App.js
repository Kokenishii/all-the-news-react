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

function test() {
  console.log('test');
}

function App() {
  return (
    <div className="App">
      <Header />
      <Nav navList={navItemsObject} testFunc={test} />
      <Stories />
    </div>
  );
}

export default App;
