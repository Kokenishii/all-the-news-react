import React from 'react';

class Stories extends React.Component {
  render() {
    const results = this.props.stories.results;
    console.log('results ', this.props.stories.results);
    return (
      <div className="site-wrap">
        {results.map(story =>
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
              <p>
                {story.abstract}
              </p>
            </div>
          </div>,
        )}
      </div>
    );
  }
}

export default Stories;
