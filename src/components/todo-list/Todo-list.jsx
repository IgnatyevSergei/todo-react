import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = (props) =>{
     const elements = props.items.map(item => {
     return   (<li key={item.id}>
             <TodoListItem
             onRemove={()=> props.onRemove(item.id)}/>
         </li>)
     })

    return <ul>
        {elements}
    </ul>


}

export default TodoList