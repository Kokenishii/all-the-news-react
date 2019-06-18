import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';

// import './NavItems.js';

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
    this.getStories = this.getStories.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      navItems: navItemsObject,
      stories: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount(section = 'arts') {
    this.getStories(section);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > document.querySelector('header').offsetHeight) {
      document.body.style.paddingTop =
        document.querySelector('nav').offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  getStories(link) {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${link}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  fixNav() {
    window.addEventListener('scroll', function() {
      console.log(window.scrollY);
    });
  }

  render() {
    const { isLoading, error } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav navList={navItemsObject} getStories={this.getStories} />
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <Stories stories={this.state.stories} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default App;
