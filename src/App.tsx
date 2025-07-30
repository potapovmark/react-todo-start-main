import React, { useState } from 'react';
import { Task as TaskType, FilterType } from './types/todo';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  const addTask = (description: string) => {
    const newTask: TaskType = {
      id: Date.now().toString(),
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, description: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description, isEditing: false }
          : { ...task, isEditing: false }
      )
    );
  };

  const startEditing = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isEditing: true }
          : { ...task, isEditing: false }
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    switch (currentFilter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <section className="todoapp">
        <NewTaskForm onAddTask={addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={(id, description) => {
              if (tasks.find((t) => t.id === id)?.isEditing) {
                editTask(id, description);
              } else {
                startEditing(id);
              }
            }}
          />
          <Footer
            tasks={tasks}
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
            onClearCompleted={clearCompleted}
          />
        </section>
      </section>
    </div>
  );
}

export default App;
