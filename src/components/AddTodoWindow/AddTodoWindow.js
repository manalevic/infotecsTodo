import { useState } from 'react'
import s from './AddTodoWindow.module.css'

const AddTodoWindow = (props) => {
    const [taskNameValue, setTaskNameValue] = useState(``) // Собственно локальные стейты input и textarea, которые меняются когда срабатывает onChange
    const [taskDescValue, setTaskDescValue] = useState(``) // и отправляются в основной стейт по нажатию на кнопку.

    const onChangeNameValue = (e) => {
        setTaskNameValue(e.currentTarget.value)
    }
    
    const onChangeDescValue = (e) => {
        setTaskDescValue(e.currentTarget.value)
    }
    
    const onSubmitForm = (e) => { // Обрабатываем нажатие на кнопку и отправляем value input-а и textarea.
        e.preventDefault() // Превентим стандартное поведение.
        props.addTask(taskNameValue, taskDescValue)
        setTaskNameValue("") // После отправки значений в основной state
        setTaskDescValue("") // обнуляем значения локальных стейтов для последуещих заметок.
        props.toggleAddTaskWindow(false) // Закрываем окошко добавления задачи.
    }

    return (
        <div className={s.addTodoWindow}>
            <button className={s.closeButton} onClick={() => props.toggleAddTaskWindow(false)}>x</button>  {/* Кнопочка закрытия окошка добавления задачи. */}
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