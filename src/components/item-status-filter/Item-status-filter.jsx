import React from "react";

import './Item-status-filter.css'

const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
    {name: 'important', label: 'important'}
]


const ItemStatusFilter = ({onFilter}) => {

    const buttons = filterButtons.map(button => {
        return <button className={'mystyle'} key={button.name}
                       onClick={() => onFilter(button.name)}
        >
            {button.label}
        </button>
    })


    return <div>
        {buttons}
    </div>

}

export default ItemStatusFilter