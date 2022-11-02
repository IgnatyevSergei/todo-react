import React, {Component} from "react";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";


class App extends Component {

    id = 3


    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, label: 'Learn React', done: false, important: false},
                {id: 2, label: 'Learn Redux', done: true, important: false},
                {id: 3, label: 'Learn Js', done: false, important: false},
            ],
            searchText: '',
            filter: 'all'
        }
    }

    onFilterChange = (filterName) => {
        this.setState({
            filter: filterName
        })
    }

    setSearchText = (text) => {
        this.setState({
            searchText: text
        })
    }

    onRemove(id) {
        this.setState((state) => {
            const indx = state.items.findIndex((item) => item.id === id)
            const items = [
                ...state.items.slice(0, indx),
                ...state.items.slice(indx + 1)
            ]
            return {items}
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

    toggleProperties = (items, id, property) => {
        const index = items.findIndex(item => item.id === id)
        const oldItem = items[index]
        const itemNewValue = !oldItem[property]
        const newItem = {...oldItem, [property]: itemNewValue}
        return [
            ...items.slice(0, index),
            newItem,
            ...items.slice(index + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState((state) => {
            return {
                items: this.toggleProperties(state.items, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState((state) => {
            const items = this.toggleProperties(state.items, id, 'important')
            return {
                items
            }
        })
    }

    onSearchChange = (items, search) => {
        if (search.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    filterItems(items, filter) {
        if (filter === 'all') {
            return items
        } else if (filter === 'active') {
            return items.filter(item => !(item.done))
        } else if (filter === 'done') {
            return items.filter(item => item.done)
        } else if (filter === 'important'){
            return items.filter(item => item.important)
        }
    }

    render() {
        const {items, searchText, filter} = this.state

        const doneCounter = items.filter(item => item.done).length
        const toDoCounter = items.length - doneCounter
        const visibleItems = this.onSearchChange(this.filterItems(items, filter), searchText)

        return (
            <div>
                <AppHeader doneCounter={doneCounter} toDoCounter={toDoCounter}/>
                <SearchPanel setSearchText={this.setSearchText}/>
                <ItemStatusFilter onFilter={this.onFilterChange}/>
                <TodoList items={visibleItems}
                          onRemove={(id) => this.onRemove(id)}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdd={this.onItemAdd}/>
            </div>
        )
    }
}


export default App