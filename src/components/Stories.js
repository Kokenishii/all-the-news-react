import React from 'react';

const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const section = 'arts';

const Stories = () => {
  return (
    <div className="site-wrap">
      {fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
      ).then(console.log('fetched'))}
    </div>
  );
};

export default Stories;

// function fetchArticles(section) {
//   fetch(
//     `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
//   )
//     .then(response => response.json())
//     .then(myJson => renderStories(myJson));
// }
