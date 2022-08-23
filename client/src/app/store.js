import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});
