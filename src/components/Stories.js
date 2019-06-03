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
      {topStories.map(story =>
        <div className="entry" key={story.title}>
          <img src={story.multimedia[0].url} alt="images" />
          <div>
            <h3>
              <a href={story.short_url}>
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
};

export default Stories;
