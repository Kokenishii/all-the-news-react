import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';
// https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
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
    this.state = {
      navItems: navItemsObject,
      stories: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount(section = 'arts') {
    this.getStories(section);
  }

  getStories(link) {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${link}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, stories, error } = this.state;
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
