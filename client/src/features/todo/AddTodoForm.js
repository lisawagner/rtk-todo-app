import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { addTodo } from './todoSlice'
import { addNewTodo } from './todoSlice'

const AddTodoForm = () => {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault()
		console.log('user entered: ' + value)
		// dispatch(action(payload))
		dispatch(
			addNewTodo({
				title: value,
			})
		)
	}

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-3 me-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	)
}

export default AddTodoForm;