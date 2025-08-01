import React from 'react';
import PropTypes from 'prop-types';
import { Task as TaskType } from '../types/todo';
import { Task } from './Task';

interface TaskListProps {
  tasks: TaskType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, description: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

(TaskList as any).defaultProps = {
  tasks: [],
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
};
