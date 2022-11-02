import React from "react";
import './app-header.css'


const AppHeader = ({doneCounter, toDoCounter}) => {
    return (<div>
        <h1>TODO LIST</h1>
        <h2><span>{toDoCounter}</span> нужно сделать,
            <span>{doneCounter}</span> выполнено
        </h2>
    </div>)
}

export default AppHeader