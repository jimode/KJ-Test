import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Venue from './venue';
import './App.css';
// TODO:
// 1. loop through list all display name
// 2. search to filter by name (display the venue name)
//

function App() {
  const [venues, getVenues] = useState('');
  const [venueName, setVenueName] = useState('');

  useEffect(() => {
    getAllVenues();
  }, []);

  const getAllVenues = () => {
    axios
      .get('https://uat.ospace.co.uk/api/v1/spaces/search?location=')
      .then((res) => {
        const allVenues = res.data.venues;
        getVenues(allVenues);
      })
      .catch((error) => console.log('Error:', error));
  };

  const handleChange = (e) => {
    setVenueName(e.target.value.toLowerCase());

    const filteredVenue = venues.filter((venue) =>
      venue.name.toLowerCase().includes(venueName)
    );
    getVenues(filteredVenue);
  };

  return (
    <div className="venue-container">
      <Venue venues={venues} />
      <div>
        <label htmlFor="filterInput">Filter Venues</label>
        <input
          id="filterInput"
          type="text"
          onChange={handleChange}
          value={venueName}
        />
      </div>
    </div>
  );
}

export default App;
