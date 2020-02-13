import React from "react";
import FancyBorder from "./FancyBorder";
function Todo({ todo, id, completeTodo, removeTodo, handlEdit, handleChange }) {
  return (
    <FancyBorder color="black">
      <li style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.state ? (
          <input
            type="text"
            value={todo.description}
            onChange={e => handleChange(todo.id, e.target.value)}
            autoFocus
          />
        ) : (
          <span>
            {todo.description}|{todo.deadline}
          </span>
        )}

        <input
          type="checkbox"
          onChange={() => completeTodo(id)}
          checked={todo.isCompleted}
        />
        <button onClick={() => removeTodo(id)}>Delete</button>
        <button onClick={() => handlEdit(todo.id)}>
          {todo.state === true ? "Update" : "Edit"}
        </button>
      </li>
    </FancyBorder>
  );
}
export default Todo;
