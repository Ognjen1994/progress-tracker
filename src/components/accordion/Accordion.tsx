import './Accordion.scss';

import React from 'react';

import { Group } from '@/types/group';

import AccordionItem from './AccordionItem';

interface AccordionProps {
  groups: Group[];
  handleTaskCheck: (groupIndex: number, taskIndex: number) => void;
  isGroupCompleted: (group: Group) => boolean;
  className: string;
}

const Accordion = ({
  groups,
  handleTaskCheck,
  isGroupCompleted,
  className,
}: AccordionProps) => {
  return (
    <div className={`accordion ${className}`}>
      {groups.map((group: Group, groupIndex: number) => (
        <AccordionItem
          key={groupIndex}
          name={group.name}
          tasks={group.tasks}
          className="accordion__item--border"
          groupCompleted={isGroupCompleted(group)}
          onCheck={taskIndex => handleTaskCheck(groupIndex, taskIndex)}
        />
      ))}
    </div>
  );
};

export default Accordion;
