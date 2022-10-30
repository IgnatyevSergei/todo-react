import React from "react";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";


class App extends React.Component {
    id = 3

    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, label: 'learn React', done: false, important: false},
                {id: 2, label: 'learn Redux', done: false, important: false},
                {id: 3, label: 'learn JS', done: false, important: false},
            ],
            searchText: ''
        }
    }

    onToggleDone = () => {
        this.setState((state) => {
            return {
                done: !state.done

            }
        })
    }
    marker = () => {
        this.setState((state) => {
            return {important: !state.important}
        })
    }

    setSearchText = (text)=>{
        this.setState({
            searchText: text
        })
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

    onItemAdd = (label) => {
        this.setState((state) => {
            const item = {id: ++this.id, label: label, done: false, important: false}
            return {
                items: [...state.items, item]
            }
        })
    }

    onSearchChange =(search)=>{
        if (search.length === 0) {
            return this.state.items
        }
        return this.state.items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) >-1
        })
    }

    render() {

        const visibleItems = this.onSearchChange(this.state.searchText)

        return (<div>
                <AppHeader/>
                <SearchPanel setSearchText={this.setSearchText}/>
                <ItemStatusFilter/>
                <TodoList items={visibleItems}
                          onRemove={(id) => this.onRemove(id)}
                          onToggleDone={()=>this.onToggleDone()}
                          marker={()=>this.marker()}/>

                <ItemAddForm onItemAdd={this.onItemAdd}/>
            </div>
        )


    }
}

export default App