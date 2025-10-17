import { nanoid } from "nanoid";
import React, { useState } from "react";

const CreateTodo = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        id: nanoid(),
        title,
        isCompleted: false,
      },
    ]);
    setTitle("");
  };
  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter todo"
        />
        <button
          onClick={(e) => {
            if (title === "") {
              e.preventDefault();
            }
          }}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
