import React from 'react';
import "./todo-list-item.css"


// onToggleDone = () => {
//
// }
// marker = () => {
//
// }

const TodoListItem = ({label, done,  important, onRemove,onToggleDone, onToggleImportant}) => {

    let style = 'item'

    if(done) {
        style += ' done'
    }
    if(important) {
        style += ' important'
    }

    return (<span>
        <span className={style} onClick={onToggleDone}>
            {label}
        </span>
        <button onClick={onRemove}>
            Delete
        </button>
    <button onClick={onToggleImportant}>
        Marker
    </button>
        </span>

    )

}


export default TodoListItem