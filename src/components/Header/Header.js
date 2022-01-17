import s from './Header.module.css'

const Header = (props) => {
      
    return (
        <div className={s.header}>
            <div>TodoList</div>
            <button onClick={() => props.toggleAddTaskWindow(true)}>Добавить</button>
        </div>
    )
}

export default Header