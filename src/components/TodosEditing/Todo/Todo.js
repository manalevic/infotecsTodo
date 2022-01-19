import { useState } from 'react';
import s from './Todo.module.css'

const Todo = (props) => {
    const [editMode, setEditMode] = useState(false) // Если editMode влючен, то мы можем править название и описание заметки. 
    const [taskNameValue, setTaskNameValue] = useState(props.todo.name) // Локальные стейты как и в addTodoWindow, только здесь значение по умолчанию
    const [taskDescValue, setTaskDescValue] = useState(props.todo.desc) // берем из основного стейта, ибо заметка уже существует.

    const handleNameValue = (e) => {  // Редактирование наименования заметки с editMode.
        setTaskNameValue(e.currentTarget.value)
    }

    const handleDescValue = (e) => { // Редактирование описания заметки с editMode 
        setTaskDescValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => { // По нажатию на кнопку "Сохранить"
        e.preventDefault() // первентим стандартное поведение
        props.editTask(props.todo.id, taskNameValue, taskDescValue) // и отправляем в основной state id заметки, новое наименование и описание
        setEditMode(false) // и вырубаем editMode.
    }

    const handeProgress = (e) => { // При изменении значения select
        let value = e.target.value
        props.toggleTaskProgress(props.todo.id, value) // отправляем его в основной стейт.
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <button className={s.button} disabled={editMode} onClick={() => setEditMode(!editMode)}>Править</button> {/* disabled={editMode} - если editMode уже включен, дизейблим кнопку.  */}
                <select className={s.button} value={props.todo.progress} onChange={handeProgress}>
                    <option value="1">ожидает</option>
                    <option value="2">в процессе</option>
                    <option value="3">выполнена</option>
                </select>
                <button className={s.button} onClick={() => props.removeTask(props.todo.id)}>Удалить</button> {/* Собственно кнопка, отвечающая за удаление задачи. */}
            </div>
            {editMode ? <form className={s.editMode} onSubmit={handleSubmit}> {/* Разметка области редактирования заметки зависит от состояние editMode*/}
                <input className={s.item} value={taskNameValue}
                    onChange={handleNameValue}></input>
                <textarea className={s.item} value={taskDescValue}
                    onChange={handleDescValue}></textarea>
                <button className={s.button}>Сохранить</button>
            </form> :
                <div className={s.content}>
                    <p className={s.item}>{props.todo.name}</p>
                    <p className={s.item}>{props.todo.desc}</p>
                </div>}
        </div>
    )
}

export default Todo

