import React from "react";
import TodoListItem from "../todo-list-item";

<<<<<<< HEAD
const TodoList = ({items, onRemove, onToggleDone,onToggleImportant}) => {
    const elements = items.map((item) => {
        const {id, ...itemProps} = item
        return (<li key={item.id}>
            <TodoListItem
                {...itemProps}
                onRemove={() => onRemove(item.id)}
            onToggleDone={()=> onToggleDone(id)}
            onToggleImportant={()=>onToggleImportant(id)}/>
=======
const TodoList = (props) => {

    const elements = props.items.map(item => {
        return (<li key={item.id}>
            <TodoListItem
                item={item}
                onRemove={() => props.onRemove(item.id)}
                marker={() =>props.marker()}
                onToggleDone={() =>props.onToggleDone()}/>

>>>>>>> origin/master
        </li>)
    })

    return <ul>
        {elements}
    </ul>


}

export default TodoList