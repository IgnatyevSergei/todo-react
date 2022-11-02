import React from 'react'
import './todo-list-item.css'

const TodoListItem = (
    {
        label,
        done,
        important,
        onRemove,
        onToggleDone,
        onToggleImportant
    }) => {

    let style = 'item'
    if (done) {
        style += ' done'
    }
    if (important) {
        style += ' important'
    }

    return (<span>
        <span className={style} onClick={onToggleDone}>
            {label}
        </span>
        <button onClick={onRemove}>
            Удалить
        </button>
         <button onClick={onToggleImportant}>
        Отметить
         </button>
    </span>)
}



export default TodoListItem