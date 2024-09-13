import React, { useState } from 'react';
import './SpaceCounter.css'; // Update or create this CSS file for styling

const SpaceCounter = () => {
  const [text, setText] = useState('');
  const [spaceCount, setSpaceCount] = useState(0);

  // Handle textarea input change
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    // Count spaces in the new text
    const count = (newText.match(/\s/g) || []).length;
    setSpaceCount(count);
  };

  return (
    <div className="space-counter-container">
      <textarea
        value={text}
        onChange={handleChange}
        rows="3"
        placeholder="Type here..."
        className="scrollable-textarea"
      />
      <div className="space-count">
        <p><strong>Space Count:</strong> {spaceCount} spaces</p>
      </div>
    </div>
  );
};

export default SpaceCounter;
