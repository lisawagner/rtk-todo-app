import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "./todoSlice"

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const handleCompleteClick = () => {
		dispatch(toggleComplete({ id, completed: !completed}))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-warning'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='me-3'
						checked={completed}
						onChange={handleCompleteClick}
						value=""
						aria-label="checkbox for item completion state"
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	)
}

export default TodoItem