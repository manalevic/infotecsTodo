import s from './TodosList.module.css'

const TodosList = (props) => {
    
    const searchTask = (value) => {
        let ul = document.getElementById("todoList");
        let li = ul.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerText.toUpperCase().includes(value.toUpperCase())) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

return (
    <div className={s.todosList} id="todoList">
        <input
            className={s.search}
            placeholder='Поиск'
            onChange={(e) => searchTask(e.currentTarget.value)}
        ></input>
        <ul id="todoList">
            {props.todos.map((todo) => {
                return (
                    <li activeclassname={s.active}
                        className={(todo.progress === 1 ? s.color1 :
                            todo.progress === 2 ? s.color2 : s.color3) + " " + (todo.isChosen ? s.active : '')}
                        key={todo.id} onClick={() => props.toggleIsChosen(todo.id)}>{todo.name}</li>
                )
            })}
        </ul>
    </div>
)
}

export default TodosList