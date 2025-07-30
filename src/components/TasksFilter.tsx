import React from 'react';
import { FilterType } from '../types/todo';

interface TasksFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TasksFilter: React.FC<TasksFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <ul className="filters">
      {filters.map((filter) => (
        <li key={filter}>
          <button
            className={currentFilter === filter ? 'selected' : ''}
            onClick={() => onFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};
