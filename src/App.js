import React from 'react';
import './App.css';
import CheckboxComponent from './CheckboxComponent';

function App() {
  const options = ['Option1', 'Option1', 'Option2', 'Option3', 'Option4'];

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
