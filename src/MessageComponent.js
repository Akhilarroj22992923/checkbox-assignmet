// src/MessageComponent.js

import React from 'react';
import './MessageComponent.css'; // Import the CSS for styling the messages

const MessageComponent = ({ isSuccess }) => {
  return (
    <div className="message-container">
      {isSuccess ? (
        <div className="success-message">
          Success: The operation was completed successfully!
        </div>
      ) : (
        <div className="error-message">
          Error: There was an error completing the operation.
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
