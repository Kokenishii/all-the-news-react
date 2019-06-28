import React from 'react';

const Stories = props => {
  return (
    <div className="site-wrap">
      {props.stories ? (
        <pre>
          <code>{JSON.stringify(props.stories, null, 2)}</code>
        </pre>
      ) : (
        'Stories'
      )}
    </div>
  );
};

export default Stories;
