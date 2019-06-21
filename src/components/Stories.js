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
