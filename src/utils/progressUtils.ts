import { EnhancedGroup, Group } from '@/types/group';
import { EnhancedTask, Task } from '@/types/task';

export const calculateEnhancedGroups = (groups: Group[]): EnhancedGroup[] => {
  const enhancedGroups: Group[] = structuredClone(groups);
  // Calculate the sum of all task values
  let totalValue = 0;
  enhancedGroups.forEach((group: Group) => {
    group.tasks.forEach((task: Task) => {
      totalValue += task.value;
    });
  });

  // Calculate normalized values for each task
  enhancedGroups.forEach((group: Group) => {
    group.tasks.forEach((task: Task) => {
      const normalizedValue = (task.value * 100) / totalValue;
      const enhancedTask: EnhancedTask = {
        ...task,
        normalizedValue: normalizedValue,
      };

      group.tasks[group.tasks.indexOf(task)] = enhancedTask;
    });
  });

  return enhancedGroups as EnhancedGroup[];
};

export const getCompletedTasksSum = (enhancedGroups: EnhancedGroup[]) => {
  const result = enhancedGroups.reduce((sum: number, group: EnhancedGroup) => {
    return (
      sum +
      group.tasks.reduce((groupSum: number, task: EnhancedTask) => {
        return groupSum + (task.checked ? task.normalizedValue : 0);
      }, 0)
    );
  }, 0);
  return result;
};
