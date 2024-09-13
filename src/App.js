// src/App.js

import React, { useState } from 'react';
import './App.css';
import CheckboxComponent from './CheckboxComponent';
import MessageComponent from './MessageComponent'; // Import the new component

function App() {
  const [isSuccess, setIsSuccess] = useState(true); // State to toggle success or error messages

  const options = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'];

  return (
    <div className="app-container">
      <center>
        <h1>Checkbox Assignment</h1>
        <button onClick={() => setIsSuccess(!isSuccess)}>
        Toggle Success/Error Message
      </button>
      <MessageComponent isSuccess={isSuccess} />
      </center>
      <CheckboxComponent options={options} />
      {/* <MessageComponent isSuccess={isSuccess} /> */}
      {/* <button onClick={() => setIsSuccess(!isSuccess)}>
        Toggle Success/Error Message
      </button> */}
    </div>
  );
}

export default App;
