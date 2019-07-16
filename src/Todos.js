import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          description: 'Go to bed',
          completed: false
        },
        {
          id: 2,
          description: 'Play FIFA',
          completed: false
        }
      ],
      todo: {
        description: ''
      }
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const {
      todo: { description },
      todos
    } = this.state;
    if (description) {
      const newTodos = [...todos];
      newTodos.push({
        id: todos.length + 1,
        description,
        completed: false
      });
      this.setState({
        ...this.state,
        todos: newTodos,
        todo: {
          description: ''
        }
      });
    }
  }

  onChange(event) {
    const {
      target: { value }
    } = event;
    this.setState({
      todo: {
        description: value
      }
    });
  }

  toggleTodo(id) {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex >= 0) {
      const todo = todos[todoIndex];
      const newTodo = {
        ...todo,
        completed: !todo.completed
      };
      const newTodos = todos.map(todo => todo);
      newTodos.splice(todoIndex, 1, newTodo);
      this.setState({
        ...this.state,
        todos: newTodos
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div>
          <input
            value={this.state.todo.description}
            onChange={this.onChange}
            placeholder="new todo"
          />
          <button onClick={this.onClick}>Add todo</button>
        </div>
        <ul>
          {this.state.todos.map(todo => (
            <Todo toggleTodo={this.toggleTodo} todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
