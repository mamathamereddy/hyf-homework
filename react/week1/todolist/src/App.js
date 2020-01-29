import React from 'react';
import todosData from "./TodosData"
import TodoItem from "./TodoItem"
import TodoHeader from "./TodoHeader"
import './App.css';


//with function
 function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      <TodoHeader/>
          {todoItems}
      </div>
  )
  } 
