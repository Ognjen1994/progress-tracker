import { EnhancedGroup, Group } from '@/types/group';
import { EnhancedTask, Task } from '@/types/task';

import { calculateEnhancedGroups, getCompletedTasksSum } from './progressUtils';

describe('calculateEnhancedGroups', () => {
  global.structuredClone = (val: Group[]) => JSON.parse(JSON.stringify(val));

  const groups: Group[] = [
    {
      name: 'General Info',
      tasks: [
        {
          description: 'Add test',
          value: 10,
          checked: true,
        },
        {
          description: 'Add test 2',
          value: 15,
          checked: false,
        },
      ],
    },
    {
      name: 'Accomplishments',
      tasks: [
        {
          description: 'Add test 3',
          value: 33,
          checked: true,
        },
        {
          description: 'Add test 4',
          value: 18,
          checked: false,
        },
      ],
    },
  ];

  it('should calculate the normalized values for each task', () => {
    const enhancedGroups: EnhancedGroup[] = calculateEnhancedGroups(groups);

    enhancedGroups.forEach((group: EnhancedGroup) => {
      group.tasks.forEach((task: EnhancedTask) => {
        const normalizedValue = (task.value * 100) / getTotalValue(groups);
        expect(task.normalizedValue).toBe(normalizedValue);
      });
    });
  });
});

const getTotalValue = (groups: Group[]): number => {
  let totalValue = 0;
  groups.forEach((group: Group) => {
    group.tasks.forEach((task: Task) => {
      totalValue += task.value;
    });
  });
  return totalValue;
};

describe('getCompletedTasksSum', () => {
  const enhancedGroups: EnhancedGroup[] = [
    {
      name: 'General Info',
      tasks: [
        {
          description: 'Add name and surname',
          value: 10,
          checked: true,
          normalizedValue: 1,
        },
        {
          description: 'Add email',
          value: 15,
          checked: true,
          normalizedValue: 3,
        },
        {
          description: 'Add Test',
          value: 23,
          checked: false,
          normalizedValue: 8,
        },
      ],
    },
  ];

  it('should return normalizedValue of all completed/checked tasks', () => {
    const result = getCompletedTasksSum(enhancedGroups);
    expect(result).toBe(4);
  });
});
