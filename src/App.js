import React, { Component } from "react";

// Import custom component
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Buy some paper" }
    ]
  };

  handleDelete = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center-align blue-text darken-2">My Todos.</h1>
        <Todos todos={this.state.todos} deleteTodo={this.handleDelete} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
