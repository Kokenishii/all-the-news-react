import React from 'react';
import Story from './Story';

class Stories extends React.Component {
  render() {
    return (
      <div className="site-wrap">
        {this.props.stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </div>
    );
  }
}

export default Stories;
