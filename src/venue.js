import React from 'react';

const Venue = ({ venues }) => {
  if (venues.length > 0) {
    return (
      <div className="venue-container">
        {venues.map((venue) => (
          <div className="venue" key={venue.id}>
            <h2 className="venue_header">{venue.name}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return <h3>No Venues Yet</h3>;
  }
};

export default Venue;
