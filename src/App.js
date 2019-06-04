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

class App extends React.Component {
  constructor() {
    super();
    this.buildStories = this.buildStories.bind(this);
    this.state = {
      navItems: navItemsObject,
      stories: [],
    };
  }

  componentWillMount() {
    this.buildStories('arts');
  }

  buildStories(link) {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${link}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav navList={navItemsObject} buildStories={this.buildStories} />
        <Stories />
      </div>
    );
  }
}

export default App;
