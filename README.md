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

## Create the Nav Component

```js
import React from 'react';

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

const Nav = () => {
  return (
    <nav>
      <ul>
        {navItemsObject.map(navItem => (
          <li key={navItem.link}>
            <a href={navItem.link}>{navItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
```

```js
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
```

## Create the Stories Component

https://upmostly.com/tutorials/react-ajax-requests-fetch-data/


```js
import React, { useState, useEffect } from 'react';

const Stories = () => {
  const [topStories, setStories] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    const response = await fetch(
      'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0',
    );
    const topStories = await response.json();
    setStories(topStories.results);
    console.log(topStories.results);
  }

  return (
    <div className="site-wrap">
      {topStories.map(story => (
        <div className="entry" key={story.title}>
          <img
            src={
              story.multimedia.length > 0
                ? story.multimedia[0].url
                : '/img/no-image.png'
            }
            alt="images"
          />
          <div>
            <h3>
              <a href={story.short_url}>{story.title}</a>
            </h3>
            <p>{story.abstract}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;

```

## Create Stories Component ALT

```js
import React from 'react';

const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const section = 'arts';

class Stories extends React.Component {
  state = {
    stories: [],
  };

  componentWillMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
    )
      .then(response => response.json())
      .then(data => {
        let stories = data.results.map(story => {
          return (
            <div className="entry" key={story.title}>
              <img
                src={
                  story.multimedia.length > 0
                    ? story.multimedia[0].url
                    : '/img/no-image.png'
                }
                alt="images"
              />
              <div>
                <h3>
                  <a href={story.short_url}>{story.title}</a>
                </h3>
                <p>{story.abstract}</p>
              </div>
            </div>
          );
        });
        this.setState({ stories: stories });
      });
  }

  render() {
    return (
      <div className="site-wrap">
        {this.state.stories}
        {/* <pre>
          <code>
            {JSON.stringify(this.state.stories, null, 2)}
          </code>
        </pre> */}
      </div>
    );
  }
}

export default Stories;
```

## State

```js
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
  state = {
    navItems: navItemsObject,
    stories: null,
  };

  componentDidMount() {
    this.getStories('arts');
  }

  getStories = link => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${link}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Nav navList={navItemsObject} />
        {this.state.stories ? (
          <Stories stories={this.state.stories} />
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default App;

```

```js
import React from 'react';

class Stories extends React.Component {
  render() {
    const results = this.props.stories.results;
    console.log('results ', this.props.stories.results);
    return (
      <div className="site-wrap">
        {results.map(story => (
          <div className="entry">
            <img
              src={
                story.multimedia[0] === undefined ? '' : story.multimedia[0].url
              }
              alt="images"
            />

            <div>
              <h3>
                <a href="{story.short_url}" alt={story.title}>
                  {story.title}
                </a>
              </h3>
              <p>{story.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Stories;
```

NavItem

```js
import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link} onClick={this.props.buildStories}>
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
```

NavItem

```js
import React from 'react';

import NavItem from './NavItem';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.navList.map(navItem =>
            <NavItem
              key={navItem.link}
              link={navItem.link}
              label={navItem.label}
              buildStories={this.props.buildStories}
            />,
          )}
        </ul>
      </nav>
    );
  }
}

export default Nav;

```

## 5: Categories

```js
import React, { Component } from 'react';

class NavItem extends Component {
  sendSection = () => {
    this.props.getStories(this.props.label);
  };

  render() {
    return (
      <li>
        <a href={this.props.link} onClick={this.sendSection}>
          {this.props.label}
        </a>
      </li>
    );
  }
}
export default NavItem;
```

```js
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
  state = {
    navItems: navItemsObject,
    stories: null,
    isLoading: true,
  };

  componentDidMount(section = 'arts') {
    this.getStories(section);
  }

  getStories = link => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${link}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data, isLoading: false }))
      .catch(error => console.log(error));
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav navList={navItemsObject} getStories={this.getStories} />

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
```