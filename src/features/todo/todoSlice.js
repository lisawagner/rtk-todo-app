import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '0', title: 'todo1', completed: false },
  { id: '1', title: 'todo2', completed: false },
  { id: '2', title: 'todo3', completed: false },
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        // why not use nanoid for id?
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      // add new todo at the end of the array
      state.push(newTodo)
    }
  }
})
// actions
export const { addTodo } = todoSlice.actions

// reducer
export default todoSlice.reducer