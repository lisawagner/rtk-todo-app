import { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './todoSlice'

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	useEffect(() => {
		dispatch(getTodos())
	}, [dispatch])

	return (
		<>
			<ul className='list-group'>
				{todos.map((todo) => (
					<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
				))}
			</ul>
		</>
	)
}

export default TodoList