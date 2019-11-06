import React from 'react';

const Story = props => {
  return (
    <div className="entry">
    <img
      src={
        props.story.multimedia.length > 0
          ? props.story.multimedia[0].url
          : '/img/no-image.png'
      }
      alt={
        props.story.multimedia.length > 0
          ? props.story.multimedia[0].caption
          : '/img/no-image.png'
      }
    />

          <div>

              <h3>
                  <a href={props.story.short_url} title={props.story.title}>
                      {props.story.title}
                  </a>
              </h3>
              <p>{props.story.abstract}</p>
          </div>
      </div>
    


    



  );
};

export default Story;