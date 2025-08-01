import React from 'react';
import { Task as TaskType } from '../types/todo';
import { TasksFilter } from './TasksFilter';
import { FilterType } from '../types/todo';

interface FooterProps {
  tasks: TaskType[];
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  tasks,
  currentFilter,
  onFilterChange,
  onClearCompleted,
}) => {
  const activeTasksCount = tasks.filter((task) => !task.completed).length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  if (tasks.length === 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTasksCount}</strong>{' '}
        {activeTasksCount === 1 ? 'item' : 'items'} left
      </span>
      <TasksFilter
        currentFilter={currentFilter}
        onFilterChange={onFilterChange}
      />
      {completedTasksCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
