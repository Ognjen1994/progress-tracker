import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
  const tasks = [
    {
      description: 'Sample Task',
      checked: false,
      value: 10,
    },
    {
      description: 'Sample Task 2',
      checked: false,
      value: 24,
    },
  ];

  const name = 'Group Name';

  it('should toggle the expanded state when the header is clicked', () => {
    const { container } = render(
      <AccordionItem
        name={name}
        tasks={tasks}
        groupCompleted={false}
        onCheck={() => {
          undefined;
        }}
      />
    );

    const header = container.querySelector('.accordion-item__header');
    expect(screen.queryByText(tasks[0].description)).not.toBeInTheDocument();

    header && fireEvent.click(header);

    expect(screen.getByText(tasks[0].description)).toBeInTheDocument();

    header && fireEvent.click(header);

    expect(screen.queryByText(tasks[0].description)).not.toBeInTheDocument();
  });

  it('should render the component with the provided name and task descriptions', () => {
    const { container } = render(
      <AccordionItem
        name={name}
        tasks={tasks}
        groupCompleted={false}
        onCheck={() => {
          undefined;
        }}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();

    const header = container.querySelector('.accordion-item__header');
    header && fireEvent.click(header);

    tasks.forEach(task => {
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });

  it('should display Show/Hide text properly', () => {
    const { container } = render(
      <AccordionItem
        name={name}
        tasks={tasks}
        groupCompleted={false}
        onCheck={() => {
          undefined;
        }}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();

    const header = container.querySelector('.accordion-item__header');
    expect(screen.getByText('Show')).toBeInTheDocument();
    expect(screen.queryByText('Hide')).not.toBeInTheDocument();

    header && fireEvent.click(header);

    expect(screen.getByText('Hide')).toBeInTheDocument();
    expect(screen.queryByText('Show')).not.toBeInTheDocument();
  });
});
