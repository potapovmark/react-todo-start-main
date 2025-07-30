export interface Task {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  isEditing?: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';
