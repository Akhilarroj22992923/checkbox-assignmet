import React, { useState } from 'react';
import './App.css';
import CheckboxComponent from './CheckboxComponent';
import MessageComponent from './MessageComponent';
import DaysSinceYearStart from './DaysSinceYearStart'; // Import the new component
import SpaceCounter from './SpaceCounter'; // Import SpaceCounter component

function App() {
  const [isSuccess, setIsSuccess] = useState(true);

  const options = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'];
  
  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const exampleDate = today.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'

  return (
    <div className="app-container">
      <center>
        <h1>Application</h1>
        <button onClick={() => setIsSuccess(!isSuccess)}>
          Toggle Success/Error Message
        </button>
        <MessageComponent isSuccess={isSuccess} />
        <DaysSinceYearStart date={exampleDate} /> {/* Use the component with today's date */}
        <SpaceCounter /> {/* Include the SpaceCounter component */}
      </center>
      <CheckboxComponent options={options} />
    </div>
  );
}

export default App;
