import React from "react";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, label: 'learn React'},
                {id: 2, label: 'learn Redux'},
                {id: 3, label: 'learn JS'},
            ]
        }
    }

    onRemove(id) {
        this.setState((state) => {
            const index = state.items.findIndex((item) => item.id === id)
            const newItems = [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1)
            ]
            return {
                items: newItems
            }
        })
    }

    render() {
        return (<div>
                <AppHeader/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <TodoList items={this.state.items}
                          onRemove={(id) => this.onRemove(id)}/>
                <ItemAddForm/>
            </div>
        )


        // const onRemove = (id) => {
        //     const newArray = task.filter(task => task.id !== id)
        //     return newArray
        // }


    }
}

export default App