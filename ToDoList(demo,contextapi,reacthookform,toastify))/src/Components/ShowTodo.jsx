import React, { useState } from "react";

const ShowTodo = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const [completed, setCompleted] = useState(false);
  const clickHandler = (e,i)=>{
            setCompleted(e.target.checked);
            const filteredTodo = todo.filter((val)=>{return val.id != i});
            setTimeout(() => {
              setTodo(filteredTodo);
            }, 300);
          }
  const renderTodo = todo.map((val) => {
    return (
      <li key={val.id}>
        {val.title} | 
        <input
          type="checkbox"
          onClick={(e)=>{clickHandler(e,val.id)}}
          value={completed}
        />
        Completed
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
