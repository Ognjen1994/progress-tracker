export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface EnhancedTask extends Task {
  normalizedValue: number;
}
