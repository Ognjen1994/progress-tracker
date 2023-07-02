import './ProgressBar.scss';

import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const fillStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar">
      <div
        className={`${progress ? 'progress-bar__fill' : ''}`}
        style={fillStyle}
      >
        <span className="progress-bar__percentage">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
