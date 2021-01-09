import React, { useState } from 'react';

const Venue = ({ venues }) => {
  const [filter, setFilter] = useState('');

  if (venues.length > 0) {
    return (
      <div className="venue-list">
        {venues
          .filter((venue) =>
            venue.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((venue) => (
            <div className="venue" key={venue.id}>
              <h2 className="venue_header">{venue.name}</h2>
            </div>
          ))}

        <div className="venue-form">
          <label htmlFor="filterInput">Filter Venues</label>
          <input
            id="filterInput"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        </div>
      </div>
    );
  } else {
    return <h3>No Venues Yet</h3>;
  }
};

export default Venue;
