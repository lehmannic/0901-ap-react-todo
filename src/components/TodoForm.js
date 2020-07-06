import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
    };
  }

  // update state with each keystroke
  handleChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  // calls addTodo when submitted and resets input form state
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: '',
    });
  };

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='task'
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>+Add</button>
      </form>
    );
  }
}

export default TodoForm;
