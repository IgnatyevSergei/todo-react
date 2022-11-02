import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({items, onRemove, onToggleDone, onToggleImportant}) => {
    const elements = items.map((item) => {
        const {id, ...itemProps} = item
        return (<li className={'list-group-item'} key={id}>
            <TodoListItem
                {...itemProps}
                onRemove={() => onRemove(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}
            />
        </li>)
    })

    return    <div className={'list-group-wrapper'}>
        <ul className={'list-group'}>
            {elements}
        </ul>
    </div>

}

export default TodoList