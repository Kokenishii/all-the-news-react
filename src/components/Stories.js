import React from 'react';

const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const section = 'arts';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }

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
                  story.multimedia[0] === undefined
                    ? ''
                    : story.multimedia[0].url
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
