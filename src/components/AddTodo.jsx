import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="blue-text">Add Todo</label>

        <input
          type="text"
          placeholder="Write todo here...."
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button className="btn">Submit</button>
      </form>
    );
  }
}

export default AddTodo;
