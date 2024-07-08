import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [toDoList, setToDoList] = useState([]);
  let addTasks = (inputText) => {
    if (inputText !== '') {
      setToDoList([...toDoList, inputText])

    }
  }

  const deleteListItem = (key) => {
    let newListTodo = [...toDoList];
    newListTodo.splice(key, 1)
    setToDoList([...newListTodo]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addTasks={addTasks} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {
          toDoList.map((listItem, i) => {
            return (
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App