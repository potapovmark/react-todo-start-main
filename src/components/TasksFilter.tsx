import React from 'react';
import PropTypes from 'prop-types';
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

(TasksFilter as any).defaultProps = {
  currentFilter: 'all',
  onFilterChange: () => {},
};

(TasksFilter as any).propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
