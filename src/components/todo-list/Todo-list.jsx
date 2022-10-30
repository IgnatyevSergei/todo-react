import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = (props) => {

    const elements = props.items.map(item => {
        return (<li key={item.id}>
            <TodoListItem
                item={item}
                onRemove={() => props.onRemove(item.id)}
                marker={() =>props.marker()}
                onToggleDone={() =>props.onToggleDone()}/>

        </li>)
    })

    return <ul>
        {elements}
    </ul>


}

export default TodoList