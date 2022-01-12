import s from './TodosList.module.css'

const TodosList = (props) => {
    return (
        <div className={s.todosList}>
            {props.todos.map((todo) => {
                return (
                    <div className={todo.isChosen ? s.chosenTodo : s.todo} key={todo.id} onClick={() => props.toggleIsChosen(todo.id)}>{todo.name}</div>
                )
            })}
        </div>
    )
}

export default TodosList