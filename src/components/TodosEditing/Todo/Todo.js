import { useState } from 'react';
import s from './Todo.module.css'

const Todo = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [taskNameValue, setTaskNameValue] = useState(props.todo.name)
    const [taskDescValue, setTaskDescValue] = useState(props.todo.desc)

    const handleNameValue = (e) => {
        setTaskNameValue(e.currentTarget.value)
    }

    const handleDescValue = (e) => {
        setTaskDescValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editTask(props.todo.id, taskNameValue, taskDescValue)
        setEditMode(false)
    }

    const handeChange = (e) => {
        let value = e.target.value
        props.toggleTaskProgress(props.todo.id, value)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <button className={s.button} disabled={editMode} onClick={() => setEditMode(!editMode)}>Править</button>
                <select className={s.button} value={props.todo.progress} onChange={handeChange}>
                    <option value="1">ожидает</option>
                    <option value="2">в процессе</option>
                    <option value="3">выполнена</option>
                </select>
                <button className={s.button} onClick={() => props.removeTask(props.todo.id)}>Удалить</button>
            </div>
            {editMode ? <form className={s.editMode} onSubmit={handleSubmit}>
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

