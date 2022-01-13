import { useState } from 'react';
import s from './TodosEditing.module.css'

const Todo = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [taskNameValue, setTaskNameValue] = useState(props.todo.name)
    const [taskDescValue, setTaskDescValue] = useState(props.todo.desc)

    const onChangeNameValue = (e) => {
        setTaskNameValue(e.currentTarget.value)
    }

    const onChangeDescValue = (e) => {
        setTaskDescValue(e.currentTarget.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        props.editTask(props.todo.id, taskNameValue, taskDescValue)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <button onClick={() => setEditMode(!editMode)}>Править</button>
                    <button>Прогресс</button>
                    <button onClick={() => props.removeTask(props.todo.id)}>Удалить</button>
                </div>
                {editMode ? <form className={s.content} onSubmit={onSubmitForm}>
                    <input value={taskNameValue}
                        onChange={onChangeNameValue}></input>
                    <textarea value={taskDescValue}
                        onChange={onChangeDescValue}></textarea>
                    <button>Сохранить</button>
                </form> :
                    <div className={s.content}>
                        <div>{props.todo.name}</div>
                        <div>{props.todo.desc}</div>
                    </div>}
            </div>
        </div>)
    
}

export default Todo

