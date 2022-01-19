import s from './Header.module.css'

const Header = (props) => {
      
    return (
        <div className={s.header}>
            <div>TodoList</div> 
            <button onClick={() => props.toggleAddTaskWindow(true)}>Добавить</button> {/* По нажатию на кнопку передаем в стейт, что нам нужно увидеть окошко добавления задачи */}
        </div>
    )
}

export default Header