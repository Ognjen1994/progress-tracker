import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Task from './Task';

const task = {
  description: 'Sample Task',
  checked: false,
  value: 10,
};

const mockOnCheck = jest.fn();

describe('Task component', () => {
  it('should render the task description', () => {
    const { getByText } = render(<Task task={task} onCheck={mockOnCheck} />);
    const taskDescription = getByText('Sample Task');
    expect(taskDescription).toBeInTheDocument();
  });

  it('should call the onCheck function when the checkbox is clicked', () => {
    const { getByRole } = render(<Task task={task} onCheck={mockOnCheck} />);
    const checkboxIcon = getByRole('img');
    fireEvent.click(checkboxIcon);
    expect(mockOnCheck).toHaveBeenCalled();
  });
});
