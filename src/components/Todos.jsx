import React from "react";
const Todos = ({ todos, deleteTodo }) => {
  return todos.length ? (
    todos.map(todo => {
      return (
        <ul className="collection" key={todo.id}>
          <li className="collection-item  valign-wrapper row">
            <div className="col m10">{todo.content}</div>
            <div className="col m2">
              <span
                className="red btn right btn-small "
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </span>
            </div>
          </li>
        </ul>
      );
    })
  ) : (
    <h5 className="center-align red-text">You have no Todos in the list.</h5>
  );
};

export default Todos;
