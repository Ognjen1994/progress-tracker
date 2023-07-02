import './Task.scss';

import React from 'react';

import checkboxCheckedIcon from '@/assets/checkbox-checked.png';
import checkboxUnheckedIcon from '@/assets/checkbox-unchecked.png';
import { Task as ITask } from '@/types/task';

interface TaskProps {
  task: ITask;
  onCheck: () => void;
}

const Task = ({ task, onCheck }: TaskProps) => {
  return (
    <div className="task">
      <img
        src={task.checked ? checkboxCheckedIcon : checkboxUnheckedIcon}
        className="task__checkbox"
        alt="task checkbox"
        onClick={onCheck}
      />
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
