import React from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';
import navItems from './components/navItems';
// import MyProvider from './MyProvider';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true,
    siteTitle: 'All the News that Fits We Print',
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Header = props => {
  return (
    <header>
      <MyContext.Consumer>
        {context => <h1>{context.state.siteTitle}</h1>}
      </MyContext.Consumer>
    </header>
  );
};

class App extends React.Component {
  state = {
    navItems: navItems,
    stories: [],
    isLoading: false,
    activeLink: navItems[0],
  };

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

  componentWillMount(section = 'arts') {
    this.getStories(section);
    window.addEventListener('scroll', this.handleScroll);
  }

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
      <MyProvider>
        <>
          <Header siteTitle="All the News that Fits We Print" />
          <Nav
            navItems={navItems}
            getStories={this.getStories}
            activeLink={this.state.activeLink}
          />
          {this.state.isLoading ? (
            'Loading...'
          ) : (
            <Stories stories={this.state.stories} />
          )}
        </>
      </MyProvider>
    );
  }
}

export default App;
