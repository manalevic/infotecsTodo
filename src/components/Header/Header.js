import { useState } from 'react'
import s from './Header.module.css'

const Header = (props) => {
    

    return (
        <div className={s.header}>
            <div>TodoList</div>
            <div>Поиск</div>
            <div>Добавить</div>
        </div>
    )
}

export default Header