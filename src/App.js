import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  // {
  //   task: "this is a hard coded task", 
  //   id: 1234,
  //   completed: false, 
  // }
]; 

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask, 
      id: Date.now(), 
      completed: false, 
    }
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo, completed: !todo.completed
          }
        } else {
          return todo; 
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTodo={this.addTodo}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
