import React, { useState, useEffect } from 'react';
// https://reactgo.com/ajax-requests-fetch-data-using-react-hooks/
// https://upmostly.com/tutorials/react-ajax-requests-fetch-data/
const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const section = 'arts';

const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
    );
    const json = await response.json();
    setData(json);
  }

  return (
    <div className="entry" key={data.title}>
      {data.title}
    </div>
  );
};

export default Stories;

// {/* <img src={data.multimedia[0].url} alt="images" /> */}
// <div>
//   <h3>
//     <a href={data.short_url}>
//       {data.title}
//     </a>
//   </h3>
//   <p>
//     {data.abstract}
//   </p>
// </div>
