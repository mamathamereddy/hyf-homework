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


//with class
 /* class App extends React.Component {
  render() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        <TodoHeader/>
            {todoItems}
        </div>
    )
   }
    }  */

  
  export default App;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
