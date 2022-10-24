import React from "react";

const filterButtons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}
]

const ItemStatusFilter = () =>{

    const buttons = filterButtons.map(({name, label}) =>{
        return (
             <button key={name}>{label}</button>
        )
    });

    return <div>
        {buttons}
    </div>

}

export default ItemStatusFilter