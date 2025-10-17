import React, { useState } from "react";

const ShowTodo = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const [completed, setCompleted] = useState(false);

  const renderTodo = todo.map((val) => {
    return (
      <li key={val.id}>
        {val.title} 
        <input
          type="checkbox"
          onChange={(e) => {
            setCompleted(e.target.checked);
          }}
          value={completed}
        />
        Completed{" "}
      </li>
    );
  });
  return (
    <>
      <h1>Pending Todos</h1>
      <ol> {renderTodo} </ol>
    </>
  );
};

export default ShowTodo;
