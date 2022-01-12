import s from './TodosDesc.module.css'

const TodosDesc = (props) => {
    return (
        <div className={s.todosDesc}>
            {props.todos.map((todo) => todo.isChosen && <div key={todo.id} >
                <div>{todo.name}</div>
                <div>{todo.desc}</div>
            </div>
            )}
        </div>
    )
}

export default TodosDesc