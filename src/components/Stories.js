import React from 'react';

// const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
// const section = 'arts';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      test: [1, 2, 3, 4],
    };
  }

  componentWillMount() {
    fetch(
      'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0',
    )
      .then(response => response.json())
      .then(stories => this.setState({ stories }));
  }

  render() {
    const results = this.state.stories.results;
    // console.log(typeof results);
    return (
      <div className="site-wrap">
        {Object.keys(results).map(story => `<li>${story}</li>`)}
        {/* {this.state.test.map(num => num + 1)} */}
        {console.log(typeof this.state.stories)}
        <pre>
          <code>{JSON.stringify(this.state.stories, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default Stories;

// function fetchArticles(section) {
//   fetch(
//     `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
//   )
//     .then(response => response.json())
//     .then(myJson => renderStories(myJson));
// }
