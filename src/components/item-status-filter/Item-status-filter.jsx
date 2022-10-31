import React from "react";

const filterButtons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}
]

const ItemStatusFilter = ({onFilter}) =>{

    const buttons = filterButtons.map(({name, label}) =>{
        return (
             <button key={name}
             onClick={()=>onFilter(name)}>
                 {label}
             </button>
        )
    });

    return <div>
        {buttons}
    </div>

}

export default ItemStatusFilter