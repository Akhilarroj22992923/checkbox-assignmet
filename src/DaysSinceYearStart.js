import React from 'react';
import './DaysSinceYearStart.css'; // Create this CSS file for styling

const DaysSinceYearStart = ({ date }) => {
  const calculateDaysSinceYearStart = (date) => {
    const givenDate = new Date(date);
    const yearStart = new Date(givenDate.getFullYear(), 0, 1);
    const diffTime = givenDate - yearStart;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include the given day
  };

  return (
    <div className="days-container">
      <h3>Days Since Year Start:</h3>
      <p>{calculateDaysSinceYearStart(date)} days</p>
    </div>
  );
};

export default DaysSinceYearStart;
