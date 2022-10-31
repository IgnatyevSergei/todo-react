import React from 'react';
import "./todo-list-item.css"


<<<<<<< HEAD
// onToggleDone = () => {
//
// }
// marker = () => {
//
// }

const TodoListItem = ({label, done,  important, onRemove,onToggleDone, onToggleImportant}) => {

    let style = 'item'

    if(done) {
        style += ' done'
    }
    if(important) {
        style += ' important'
    }

    return (<span>
        <span className={style} onClick={onToggleDone}>
            {label}
=======
class TodoListItem extends React.Component {



    render() {
        console.log(this.props.marker)
        const {done, important} = this.props.item

        let style = 'item'

        if(done) {
            style += ' done'
        }
        if(important) {
            style += ' important'
        }
        return (<span>
        <span className={style} onClick={this.props.onToggleDone}>
            {this.props.item.label}
>>>>>>> origin/master
        </span>
        <button onClick={onRemove}>
            Delete
        </button>
<<<<<<< HEAD
    <button onClick={onToggleImportant}>
=======
    <button onClick={this.props.marker}>
>>>>>>> origin/master
        Marker
    </button>
        </span>

    )

}


export default TodoListItem