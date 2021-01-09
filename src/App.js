import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Venue from './venue';
import './App.css';
// TODO:
// 1. loop through list all display name
// 2. search to filter by name (display the venue name)

function App() {
  const [venues, getVenues] = useState('');

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

  return (
    <div className="venue-container">
      <Venue venues={venues} />
    </div>
  );
}

export default App;
