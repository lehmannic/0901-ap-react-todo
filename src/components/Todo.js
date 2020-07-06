import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleTodo(props.todo.id)}
      className='todo-container'
    >
      <h3 className={`todo${props.todo.completed ? ' completed' : ''}`}>
        {props.todo.task}
      </h3>
    </div>
  );
};

export default Todo;
