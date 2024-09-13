import React, { useState } from 'react';
import './CheckboxComponent.css';

const CheckboxComponent = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="checkbox-container">
      <h3 className="title">Select Options:</h3>
      <div className="checkbox-list">
        {options.map((option, index) => (
          <label key={index} className="checkbox-label">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
      <div className="selected-options">
        <h4>Selected Options:</h4>
        {selectedOptions.length > 0 ? (
          <ul className="options-list">
            {selectedOptions.map((option, index) => (
              <li key={index} className="option-item">{option}</li>
            ))}
          </ul>
        ) : (
          <p className="no-selection">No options selected</p>
        )}
      </div>
    </div>
  );
};

export default CheckboxComponent;
