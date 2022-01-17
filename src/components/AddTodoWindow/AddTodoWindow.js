import { useState } from 'react'
import s from './AddTodoWindow.module.css'

const AddTodoWindow = (props) => {
    const [taskNameValue, setTaskNameValue] = useState(``)
    const [taskDescValue, setTaskDescValue] = useState(``)

    const onChangeNameValue = (e) => {
        setTaskNameValue(e.currentTarget.value)
    }
    
    const onChangeDescValue = (e) => {
        setTaskDescValue(e.currentTarget.value)
    }
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        props.addTask(taskNameValue, taskDescValue)
        setTaskNameValue("")
        setTaskDescValue("")
        props.toggleAddTaskWindow(false)
    }

    return (
        <div className={s.addTodoWindow}>
            <button className={s.closeButton} onClick={() => props.toggleAddTaskWindow(false)}>x</button>
            <form onSubmit={onSubmitForm} className={s.form}>
                <input
                    className={s.item+ " " + s.input}
                    value={taskNameValue}
                    type="text"
                    onChange={onChangeNameValue}
                    placeholder="Название" />
                <textarea
                    className={s.item + " " + s.textarea }
                    value={taskDescValue}
                    type="text"
                    onChange={onChangeDescValue}
                    placeholder="Описание" />
                <button className={s.button}>Добавить задачу</button>
            </form>
        </div>
    )
}

export default AddTodoWindow