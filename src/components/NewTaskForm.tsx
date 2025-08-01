import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface NewTaskFormProps {
  onAddTask: (description: string) => void;
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({ onAddTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedDescription = description.trim();
    if (trimmedDescription) {
      onAddTask(trimmedDescription);
      setDescription('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};
