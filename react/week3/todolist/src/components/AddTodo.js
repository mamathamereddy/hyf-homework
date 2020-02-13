import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const todosList = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      ).then(response => response.json());
      console.log(todosList);
      setTodos(todosList);
    })();
  }, []);

  const addTodo = (text, date) => {
    const newTodos = [
      ...todos,
      { description: text, deadline: date, isCompleted: false, state: false }
    ];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = id => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  const handlEdit = id => {
    setTodos(prev => {
      const updatedTodos = prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, state: !todo.state };
        } else {
          return todo;
        }
      });
      return updatedTodos;
    });
  };
  const handleChange = (id, value) => {
    setTodos(prev => {
      const updatedTodos = prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, description: value };
        } else {
          return todo;
        }
      });
      return updatedTodos;
    });
  };

  return (
    <>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>

      {todos.length === 0 ? "No items" : todos.map((todo, id) => (
            <Todo
              key={id}
              id={id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              handlEdit={handlEdit}
              handleChange={handleChange}
            />
          ))}
    </>
  );
}

export default App;
