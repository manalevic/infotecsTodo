import s from './TodosEditing.module.css'
import Todo from "./Todo/Todo.js"

const TodosEditing = (props) => {  // область взаимодействия с выбранной заметкой
    return (
        <div className={s.todosEditing}>
            {!props.todos.length ? <div className={s.noTodos}>У вас нет заметок</div> : //если длина массива todo = 0, то выводим <div>У вас нет заметок</div>
            (props.todos.length && props.todos.find((todo) => todo.isChosen === true)) ? 
            props.todos.map((todo) => todo.isChosen && <Todo key={todo.id} todo = {todo} toggleTaskProgress={props.toggleTaskProgress} 
            editTask={props.editTask} removeTask={props.removeTask}/>) : // если длина массива больше 0 и выбрана одна из заметок, то выводим компоненту редактирования заметки. 
            <div className={s.noChosenTodos}>Для просмотра и редактирования заметки выберите ее в окошке слева.</div>} 
        </div> // Иначе выводим <div>Для просмотра и редактирования заметки выберите ее в окошке слева.</div> 
        
    )
}

export default TodosEditing


