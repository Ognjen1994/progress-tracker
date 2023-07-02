import './TaskProgressWidget.scss';

import React, { useEffect, useState } from 'react';

import { EnhancedGroup, Group } from '@/types/group';
import {
  calculateEnhancedGroups,
  getCompletedTasksSum,
} from '@/utils/progressUtils';

import Accordion from '../accordion/Accordion';
import ProgressBar from '../progressBar/ProgressBar';

interface AccordionProps {
  data: Group[];
  className?: string;
}

const TaskProgressWidget = ({ data, className }: AccordionProps) => {
  const [enhancedGroups, setEnhancedGroups] = useState<EnhancedGroup[]>(() =>
    calculateEnhancedGroups(data)
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTasksSum = getCompletedTasksSum(enhancedGroups);

    setProgress(completedTasksSum);
  }, []);

  const handleTaskCheck = (groupIndex: number, taskIndex: number) => {
    const updatedGroups = [...enhancedGroups];
    const checkValue = updatedGroups[groupIndex].tasks[taskIndex].checked;
    const normalizedValue =
      updatedGroups[groupIndex].tasks[taskIndex].normalizedValue || 0;
    const newProgress = checkValue
      ? progress - normalizedValue
      : progress + normalizedValue;

    updatedGroups[groupIndex].tasks[taskIndex].checked = !checkValue;

    setProgress(newProgress);
    setEnhancedGroups(updatedGroups);
  };

  const isGroupCompleted = React.useCallback(
    (group: Group) => group.tasks.every(task => task.checked),
    []
  );

  return (
    <div className={`task-progress-widget ${className}`}>
      <div className="task-progress-widget__header">
        <strong className="task-progress-widget__header__title">
          Lodgify Grouped Tasks
        </strong>
        <ProgressBar progress={progress} />
      </div>
      <div className="task-progress-widget__content">
        <Accordion
          groups={enhancedGroups}
          handleTaskCheck={handleTaskCheck}
          isGroupCompleted={isGroupCompleted}
          className="task-progress-widget__content__accordion"
        />
      </div>
    </div>
  );
};

export default TaskProgressWidget;
