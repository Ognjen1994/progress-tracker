import './AccordionItem.scss';

import React, { useCallback, useState } from 'react';

import arrowDownIcon from '@/assets/arrow-line-down.png';
import arrowUpIcon from '@/assets/arrow-line-up.png';
import groupCompletedIcon from '@/assets/group-completed.png';
import groupUncompletedIcon from '@/assets/group-uncompleted.png';
import { Task as ITask } from '@/types/task';

import Task from '../task/Task';

interface AccordionItemProps {
  name: string;
  tasks: ITask[];
  onCheck: (taskIndex: number) => void;
  groupCompleted: boolean;
  className?: string;
}

const AccordionItem = ({
  name,
  tasks,
  onCheck,
  groupCompleted,
  className,
}: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded);
  }, []);

  return (
    <div
      className={`accordion-item ${className}${
        expanded ? ' accordion-item--expanded' : ''
      }`}
    >
      <div className="accordion-item__header" onClick={handleToggle}>
        <div className="accordion-item__header__left-section">
          <img
            src={groupCompleted ? groupCompletedIcon : groupUncompletedIcon}
            alt="group completed"
          />
          <p
            className={`accordion-item__header__left-section__name${
              groupCompleted
                ? ' accordion-item__header__left-section__name--completed'
                : ''
            }`}
          >
            {name}
          </p>
        </div>
        <div className="accordion-item__header__right-section">
          <p>{expanded ? 'Hide' : 'Show'}</p>
          <img src={expanded ? arrowUpIcon : arrowDownIcon} alt="arrow" />
        </div>
      </div>
      {expanded && (
        <div className="accordion-item__content">
          {tasks.map((task, index) => (
            <Task key={index} task={task} onCheck={() => onCheck(index)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
