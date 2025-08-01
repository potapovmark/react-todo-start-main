import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { Task as TaskType } from '../types/todo';

interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, description: string) => void;
}

export const Task: React.FC<TaskProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [editValue, setEditValue] = useState(task.description);

  const handleEdit = () => {
    if (editValue.trim()) {
      onEdit(task.id, editValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditValue(task.description);
      onEdit(task.id, task.description);
    }
  };

  const handleBlur = () => {
    handleEdit();
  };

  return (
    <li
      className={task.completed ? 'completed' : task.isEditing ? 'editing' : ''}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">
            created {formatDistanceToNow(task.createdAt, { addSuffix: true })}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => onEdit(task.id, task.description)}
        />
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        />
      </div>
      {task.isEditing && (
        <input
          className="edit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
          autoFocus
        />
      )}
    </li>
  );
};

(Task as any).defaultProps = {
  task: {
    id: '',
    description: '',
    completed: false,
    createdAt: new Date(),
  },
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
};
