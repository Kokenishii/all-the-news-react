import React from 'react';

const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const section = 'books';
const sections = ['arts', 'travel'];

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }

  componentWillMount() {
    Promise.all([
      fetch(
        `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
      ).then(response => response.json()),

      fetch(
        `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
      ).then(response => response.json()),

      fetch(
        `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
      ).then(response => response.json()),
    ]).then(data => {
      console.log(data); // (3) [{…}, {…}, {…}]
      data.forEach(section => {
        console.log(section);
        let stories = section.results.map(story => {
          return (
            <div className="entry">
              {story.title}
            </div>
          );
        });
        this.setState({ stories: stories });
      });
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
