import s from './TodosList.module.css'

const TodosList = (props) => {
    return (
        <div className={s.todosList}>
            {props.todos.map((todo) => {
                return (
                    <div activeclassname={s.active} 
                    className={(todo.progress === 1 ? s.color1 : 
                    todo.progress === 2 ? s.color2 : s.color3) + " " + (todo.isChosen ? s.active : '')} 
                    key={todo.id} onClick={() => props.toggleIsChosen(todo.id)}>{todo.name}</div>
                )
            })}
        </div>
    )
}

export default TodosList