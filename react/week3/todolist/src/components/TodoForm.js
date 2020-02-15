import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, date);
    setValue("");
    setDate("")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="descriptionInput">Todo description</label>
        <input
          type="text"
          name="description"
          value={value}
          id="descriptionInput"
          onChange={e => setValue(e.target.value)}
          required
        />
        <label htmlFor="descriptionInput">Deadline</label>
        <input
          type="date"
          name="date"
          value={date}
          id="dateInput"
          onChange={e => setDate(e.target.value)}
          required
        />
        <button type="submit"> Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
