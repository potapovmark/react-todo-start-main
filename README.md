# React TODO Application

A modern React TypeScript TODO application built with the TodoMVC design pattern. This application demonstrates component-based architecture with proper state management and TypeScript integration.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed/uncompleted
- ✅ Edit existing tasks (double-click to edit)
- ✅ Delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Clear all completed tasks
- ✅ Task creation timestamps using date-fns
- ✅ Responsive design with TodoMVC styling
- ✅ TypeScript for type safety
- ✅ ESLint and Prettier for code quality
- ✅ Husky pre-push hooks for code validation

## Components

The application is organized into the following components:

- **Task**: Represents a single task with toggle, edit, and delete functionality
- **TaskList**: Displays a list of tasks
- **NewTaskForm**: Provides a form for adding new tasks
- **Footer**: Displays footer information and buttons
- **TasksFilter**: Implements filters in the footer

## Technology Stack

- React 19.1.0
- TypeScript 4.9.5
- date-fns 4.1.0 (for date formatting)
- ESLint (for code linting)
- Prettier (for code formatting)
- Husky (for Git hooks)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-todo-start-main
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run lint` - Runs ESLint to check code quality
- `npm run lint:fix` - Runs ESLint and automatically fixes issues
- `npm run format` - Formats code using Prettier
- `npm run format:check` - Checks if code is properly formatted

## Code Quality

This project uses several tools to maintain code quality:

### ESLint

- Extends React App configuration
- Includes TypeScript support
- Integrates with Prettier

### Prettier

- Consistent code formatting
- Single quotes
- 2-space indentation
- 80 character line width

### Husky

- Pre-push hooks that run linting and formatting checks
- Ensures code quality before pushing to repository

## Project Structure

```
src/
├── components/
│   ├── Task.tsx          # Single task component
│   ├── TaskList.tsx      # List of tasks component
│   ├── NewTaskForm.tsx   # New task form component
│   ├── Footer.tsx        # Footer component
│   └── TasksFilter.tsx   # Filter buttons component
├── types/
│   └── todo.ts           # TypeScript interfaces and types
├── App.tsx               # Main application component
├── App.css               # Application styles
├── index.css             # Global styles (TodoMVC)
└── index.tsx             # Application entry point
```

## Data Flow

The application follows a top-down data flow pattern:

1. **App.tsx** manages the main state (tasks, current filter)
2. State is passed down to child components via props
3. Child components call callback functions to update the state
4. State changes trigger re-renders with updated data

## Task Data Structure

Each task has the following structure:

```typescript
interface Task {
  id: string; // Unique identifier
  description: string; // Task description
  completed: boolean; // Completion status
  createdAt: Date; // Creation timestamp
  isEditing?: boolean; // Edit mode flag
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format` to ensure code quality
5. Commit your changes
6. Push to your branch
7. Create a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
