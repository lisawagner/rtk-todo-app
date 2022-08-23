import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
// features
import { AddTodoForm, TodoList, TotalCompleteItems } from './features/todo'
import Modal from './features/modal/Modal';

function App() {
  const {isOpen} = useSelector((store) => store.modal)

  return (
    <div className="container bg-white p-4 mt-5">
      {isOpen && <Modal />}
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
      
    </div>
  );
}

export default App;
