import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Making the API call in the component isn't ideal, since it will be difficult to reuse that code
// The API call can't be done in the reducer because the reducer is a pure function that creates the new state only. It's thunk-time

const TODO_URL = 'http://localhost:7000/todos'

export const getTodos = createAsyncThunk(
	'todos/getTodos',
	async () => {
		const response = await fetch(TODO_URL);
		if (response.ok) {
			const todos = await response.json();
			return { todos };
		}
	}
)


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // 'addTodo' reducer receives the action + the current state of the slice
    // 'newTodo' is then created based on 'action(payload)' with additional
    //       properties needed, like 'id' and 'completed'.
    addTodo: (state, action) => {
      const newTodo = {
        // why not use nanoid for id?
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      // add new todo at the end of the array
      state.push(newTodo)
      // redux takes the new state and saves it to the store
      // any components that rely on the state get updated
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
      // Whatever value our component passes as part of the payload
      // is set to the new completed value.
      // Redux updates the states. Our selector detects the change
      //    and re-renders relevant components
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getTodos.pending, (state, action) => {
        console.log('loading....');
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        // TODO: add todoSTatus === 'success' logic
        return action.payload.todos;
      })
    // [getTodos.fulfilled]: (state, action) => {
		// 	return action.payload.todos;
		// },
		// [addTodo.fulfilled]: (state, action) => {
		// 	state.push(action.payload.todo);
		// },
		// [toggleComplete.fulfilled]: (state, action) => {
		// 	const index = state.findIndex(
		// 		(todo) => todo.id === action.payload.todo.id
		// 	);
		// 	state[index].completed = action.payload.todo.completed;
		// },
		// [deleteTodo.fulfilled]: (state, action) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },   
  }
})

// actions
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions

// reducer
export default todoSlice.reducer