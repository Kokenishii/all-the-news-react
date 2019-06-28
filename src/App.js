import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';

import { navItems } from './components/navItems';

class App extends React.Component {
  state = {
    navItems: navItems,
    stories: [],
    isLoading: true,
  };

  componentDidMount(section = 'arts') {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data.results, isLoading: false }));
  }

  render() {
    return (
      <>
        <Header siteTitle="All the News that Fits We Print" />
        <Nav navItems={this.state.navItems} />
        <Stories stories={this.state.stories} />
      </>
    );
  }
}

export default App;
