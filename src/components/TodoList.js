// your components will all go in this `component` directory.

import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className='TodoList-container'>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
