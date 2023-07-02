import { EnhancedTask, Task } from './task';

export interface Group {
  name: string;
  tasks: Task[];
}

export interface EnhancedGroup {
  name: string;
  tasks: EnhancedTask[];
}
