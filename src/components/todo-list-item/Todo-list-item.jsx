import React from 'react';
import "./todo-list-item.css"


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
        </span>
        <button onClick={this.props.onRemove}>
            Delete
        </button>
    <button onClick={this.props.marker}>
        Marker
    </button>
        </span>

        )
    }
}

// const TodoListItem = () => {
//
//     return (<span>
//         <span>
//             Name task
//         </span>
//         <button onClick={() => }>
//             Delete
//         </button>
//     <button onClick={() => }>
//         Checked
//     </button>
//         </span>
//     )
// }

export default TodoListItem