import React from "react";

const AppHeader = ({doneCounter, todoCounter}) => {
    return (<div>
            <h1>TODO List</h1>
            <h2><span>{todoCounter} </span> нужно сделать,
                <span> {doneCounter} </span> выполнен</h2>
        </div>

    )
}

export default AppHeader