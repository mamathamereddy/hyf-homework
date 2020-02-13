import React from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import WatchCount from './components/WatchCount';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <WatchCount/>
      <AddTodo/>
    </div>
  );
}

export default App;
