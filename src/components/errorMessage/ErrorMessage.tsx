import './ErrorMessage.scss';

import React from 'react';

interface ErrorMessageProps {
  message: string;
  onClick: () => void;
}

const ErrorMessage = ({ message, onClick }: ErrorMessageProps) => {
  return (
    <div className="error-message">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <button type="button" onClick={onClick}>
        Reload
      </button>
    </div>
  );
};

export default ErrorMessage;
