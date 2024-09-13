import React from 'react';
import './App.css';
import CheckboxComponent from './CheckboxComponent';

function App() {
  const options = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="app-container">.
    <center>
      <h1>Checkbox Assignment</h1>
    </center>
      <CheckboxComponent options={options} />
    </div>
  );
}

export default App;
