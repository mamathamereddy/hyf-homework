import React from "react";
import FancyBorder from "./FancyBorder";
function Todo({ todo, completeTodo, removeTodo, handlEdit, handleChange }) {
  return (
    <FancyBorder color="black">
      <li style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.state ? (
          <input
            type="text"
            value={todo.description}
            onChange={handleChange}
            autoFocus
          />
        ) : (
          <span>
            {todo.description}|{todo.deadline}
          </span>
        )}

        <input
          type="checkbox"
          onChange={completeTodo}
          checked={todo.isCompleted}
        />
        <button onClick={removeTodo}>Delete</button>
        <button onClick={handlEdit}>
          {todo.state === true ? "Update" : "Edit"}
        </button>
      </li>
    </FancyBorder>
  );
}
export default Todo;
