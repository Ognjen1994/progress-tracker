import { render } from '@testing-library/react';
import React from 'react';

import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('should render the progress bar with the correct progress width', () => {
    const progress = 50;
    const { container } = render(<ProgressBar progress={progress} />);
    const progressBarFill = container.querySelector('.progress-bar__fill');
    expect(progressBarFill).toHaveStyle(`width: ${progress}%`);
  });

  it('should render the progress bar without the fill when progress is 0', () => {
    const progress = 0;
    const { container } = render(<ProgressBar progress={progress} />);
    const progressBarFill = container.querySelector('.progress-bar__fill');
    expect(progressBarFill).toBeNull();
  });

  it('should display the progress percentage', () => {
    const progress = 75;
    const { getByText } = render(<ProgressBar progress={progress} />);
    const progressPercentage = getByText('75%');
    expect(progressPercentage).toBeInTheDocument();
  });
});
