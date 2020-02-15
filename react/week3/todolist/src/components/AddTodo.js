import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const todosList = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      )
       .then(response => response.json()) ;
      console.log(todosList);
      setTodos(todosList);
    })();
  }, []);

  const addTodo = (text, date) => {
    const newTodos = [
      ...todos,
      { id: todos[todos.length - 1].id + 1 || 1,description: text, deadline: date, isCompleted: false, state: false }
    ];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    console.log(id)
    setTodos(prev => {
      const updatedTodos = prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
      return updatedTodos;
    });
  
  
  
  };

  

  const removeTodo = id => {
    console.log(id)
    setTodos(prev => {
      const updatedTodos = prev.filter(todo => todo.id !== id);
      return updatedTodos;
    });
  };

  const handlEdit = id => {
    console.log(todos)
    console.log(id)
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

      {todos.length === 0 ? "No items" : todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={()=>completeTodo(todo.id)}
              removeTodo={()=>removeTodo(todo.id)}
              handlEdit={()=>handlEdit(todo.id)}
              handleChange={(e)=>handleChange(todo.id,e.target.value)}
            />
          ))}
    </>
  );
}

export default App;
