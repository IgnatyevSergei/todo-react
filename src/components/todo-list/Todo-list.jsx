import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({items, onRemove, onToggleDone,onToggleImportant}) => {
    const elements = items.map((item) => {
        const {id, ...itemProps} = item
        return (<li key={item.id}>
            <TodoListItem
                {...itemProps}
                onRemove={() => onRemove(item.id)}
            onToggleDone={()=> onToggleDone(id)}
            onToggleImportant={()=>onToggleImportant(id)}/>
        </li>)
    })

    return <ul>
        {elements}
    </ul>


}

export default TodoList