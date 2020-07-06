import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Todo Data should be array of objects
// -- task is todo title to be shown to user
// -- completed field should default to false and have toggle functionality
// -- id is unique time stamp assigned by Date.now()
const initialTodos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // -- todos, input change, input submit,  toggle complete, clear completed
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
    };
  }

  addTodo = (newTask) => {
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.completed !== true),
    });
  };

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <button
          onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}

export default App;
