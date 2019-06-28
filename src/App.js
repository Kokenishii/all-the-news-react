import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';
import Loading from './components/Loading';

import { navItems } from './components/navItems';

class App extends React.Component {
  state = {
    navItems: navItems,
    stories: [],
    isLoading: false,
    activeLink: navItems[0],
  };

  componentWillMount(section = 'arts') {
    this.getStories(section);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > document.querySelector('header').offsetHeight) {
      document.body.style.paddingTop =
        document.querySelector('nav').offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  };

  getStories = section => {
    this.setState({ isLoading: true });
    this.setState({ activeLink: section });
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data.results, isLoading: false }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <Header siteTitle="All the News that Fits We Print" />
        <Nav
          navItems={this.state.navItems}
          getStories={this.getStories}
          activeLink={this.state.activeLink}
        />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Stories stories={this.state.stories} />
        )}
      </>
    );
  }
}

export default App;
