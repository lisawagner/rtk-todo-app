import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// features
import { AddTodoForm, TodoList, TotalCompleteItems } from './features/todo'

function App() {

  return (
      <div className="container bg-white p-4 mt-5">
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
  )
}

export default App;
